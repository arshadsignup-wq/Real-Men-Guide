import type { CalculatorConfig } from '@/lib/types';

export const beardTrimSettingsCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'beard_style',
      label: 'Beard Style',
      type: 'select',
      defaultValue: 'casual',
      options: [
        { label: 'Corporate (Clean, Professional)', value: 'corporate' },
        { label: 'Casual (Relaxed, Everyday)', value: 'casual' },
        { label: 'Full Natural (Grown Out, Minimal Shaping)', value: 'full_natural' },
        { label: 'Designer (Sharp Lines, High Maintenance)', value: 'designer' },
      ],
      helpText: 'The overall look you are going for with your beard.',
    },
    {
      id: 'current_length',
      label: 'Current Beard Length',
      type: 'select',
      defaultValue: 'short',
      options: [
        { label: 'Just Started (Less Than 1 Week)', value: 'just_started' },
        { label: 'Stubble (1-3mm)', value: 'stubble' },
        { label: 'Short (3-10mm)', value: 'short' },
        { label: 'Medium (10-20mm)', value: 'medium' },
        { label: 'Long (20mm+)', value: 'long' },
      ],
      helpText: 'Roughly how long your beard is right now.',
    },
    {
      id: 'desired_look',
      label: 'Desired Look',
      type: 'select',
      defaultValue: 'neat_uniform',
      options: [
        { label: 'Neat and Uniform', value: 'neat_uniform' },
        { label: 'Tapered (Shorter Sides, Longer Chin)', value: 'tapered' },
        { label: 'Natural Gradient (Subtle Fade)', value: 'natural_gradient' },
      ],
      helpText: 'How you want the beard to look when finished.',
    },
  ],
  outputs: [
    {
      id: 'cheek_guard',
      label: 'Cheek Guard Setting',
      description: 'Guard number or length to use on the cheek area.',
    },
    {
      id: 'jawline_guard',
      label: 'Jawline Guard Setting',
      description: 'Guard number or length to use along the jawline.',
    },
    {
      id: 'chin_guard',
      label: 'Chin Guard Setting',
      description: 'Guard number or length to use on the chin and below the lip.',
    },
    {
      id: 'mustache_guard',
      label: 'Mustache Guard Setting',
      description: 'Guard number or length to use for the mustache area.',
    },
    {
      id: 'neckline_tip',
      label: 'Neckline Guidance',
      description: 'How to handle the neckline for your chosen style.',
    },
    {
      id: 'trim_every_days',
      label: 'Trim Maintenance',
      highlight: true,
      description: 'How often to do a quick maintenance trim.',
    },
    {
      id: 'reshape_every_days',
      label: 'Full Reshape Interval',
      description: 'How often to do a full reshape and detail work.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const beardStyle = String(inputs.beard_style);
    const currentLength = String(inputs.current_length);
    const desiredLook = String(inputs.desired_look);

    // Base guard settings by style (in guard numbers)
    // Guard numbers roughly correspond to: 1=3mm, 2=6mm, 3=9mm, 4=12mm, 5=15mm, 6=18mm, 7=21mm, 8=24mm
    const styleSettings: Record<string, { cheek: number; jaw: number; chin: number; mustache: number; trimDays: number; reshapeDays: number }> = {
      corporate: { cheek: 2, jaw: 2, chin: 2, mustache: 1.5, trimDays: 3, reshapeDays: 10 },
      casual: { cheek: 3, jaw: 3, chin: 4, mustache: 2, trimDays: 5, reshapeDays: 14 },
      full_natural: { cheek: 5, jaw: 6, chin: 7, mustache: 4, trimDays: 7, reshapeDays: 21 },
      designer: { cheek: 2, jaw: 3, chin: 3, mustache: 2, trimDays: 2, reshapeDays: 7 },
    };

    const settings = styleSettings[beardStyle] || styleSettings.casual;

    // Adjust for current length (if just starting or stubble, recommend lower guards)
    let lengthMultiplier = 1.0;
    if (currentLength === 'just_started') {
      lengthMultiplier = 0.5;
    } else if (currentLength === 'stubble') {
      lengthMultiplier = 0.6;
    } else if (currentLength === 'short') {
      lengthMultiplier = 0.8;
    } else if (currentLength === 'medium') {
      lengthMultiplier = 1.0;
    } else if (currentLength === 'long') {
      lengthMultiplier = 1.2;
    }

    let cheek = Math.round(settings.cheek * lengthMultiplier * 2) / 2;
    let jaw = Math.round(settings.jaw * lengthMultiplier * 2) / 2;
    let chin = Math.round(settings.chin * lengthMultiplier * 2) / 2;
    let mustache = Math.round(settings.mustache * lengthMultiplier * 2) / 2;

    // Adjust for desired look
    if (desiredLook === 'tapered') {
      // Shorter sides, longer chin
      cheek = Math.max(0.5, cheek - 1);
      jaw = Math.max(0.5, jaw - 0.5);
      chin = chin + 0.5;
    } else if (desiredLook === 'natural_gradient') {
      // Subtle fade from cheeks down to chin
      cheek = Math.max(0.5, cheek - 0.5);
      chin = chin + 0.5;
    }

    // Clamp all values to valid range
    cheek = Math.max(0.5, Math.min(cheek, 8));
    jaw = Math.max(0.5, Math.min(jaw, 8));
    chin = Math.max(0.5, Math.min(chin, 8));
    mustache = Math.max(0.5, Math.min(mustache, 6));

    // Neckline guidance by style
    const necklineTips: Record<string, string> = {
      corporate: 'Clean shave everything below the jawline. Use a razor for a sharp neckline two fingers above the Adam\'s apple. Precision matters for this style.',
      casual: 'Define a natural neckline two fingers above the Adam\'s apple. Use a trimmer without a guard to fade the neckline rather than creating a hard line.',
      full_natural: 'Keep a natural neckline but clean up anything below the Adam\'s apple. A soft fade at the neckline prevents the unkempt look without being too sharp.',
      designer: 'Razor-sharp neckline is critical. Shave with a straight razor or safety razor two fingers above the Adam\'s apple. Touch up every 2 to 3 days to keep it crisp.',
    };

    const necklineTip = necklineTips[beardStyle] || necklineTips.casual;

    // Format guard displays with mm equivalents
    const formatGuard = (guard: number): string => {
      const mm = Math.round(guard * 3);
      return `Guard #${guard} (~${mm}mm)`;
    };

    return {
      cheek_guard: formatGuard(cheek),
      jawline_guard: formatGuard(jaw),
      chin_guard: formatGuard(chin),
      mustache_guard: formatGuard(mustache),
      neckline_tip: necklineTip,
      trim_every_days: `Every ${settings.trimDays} days`,
      reshape_every_days: `Every ${settings.reshapeDays} days`,
    };
  },
  supportingContent: {
    intro:
      'Most men use one guard setting for their entire beard, but a well-groomed beard uses different lengths on different zones. This beard trim settings calculator gives you exact guard settings for cheeks, jawline, chin, and mustache based on your style and current length. Not sure which style to pursue? Start with our <a href="/beard-style-selector">Beard Style Selector</a> to find your best match.',
    howToUse:
      'Select your target beard style, current length, and desired look. The calculator provides zone-by-zone guard settings, neckline guidance, and a maintenance schedule. Start with cheeks and work down. Always trim dry hair for accuracy. For guard-to-millimeter conversions, reference our <a href="/beard-guard-style-match">Beard Guard Style Match</a>.',
    faq: [
      {
        question: 'Should I use scissors or a trimmer for beard maintenance?',
        answer:
          'Use a trimmer with guards for overall length control and scissors for detail work like stray hairs and mustache shaping. Scissors give precision for small corrections, while trimmers give consistency for bulk shaping. Invest in small, sharp barber scissors rather than household ones. For overall grooming, pair your beard routine with our <a href="/skincare-routine-builder">Skincare Routine Builder</a>.',
      },
      {
        question: 'How do I find my natural neckline?',
        answer:
          'Tilt your head down and find your Adam\'s apple. Place two fingers horizontally above it - that is your neckline center. Imagine a curved line following your jawbone up behind each ear. Everything below gets trimmed or shaved. The most common mistake is going too high, which creates a double-chin look. Our <a href="/beard-guard-style-match">Beard Guard Style Match</a> includes neckline tips by style.',
      },
      {
        question: 'Should I trim my beard wet or dry?',
        answer:
          'Always trim dry. Wet hair stretches and hangs longer, so trimming wet leaves you shorter than expected. Wash and dry your beard, brush it in its natural direction, then trim. The only exception is using scissors on a slightly damp beard for stray hairs. For growth timelines and planning, check our <a href="/beard-growth-time-calculator">Beard Growth Time Calculator</a>.',
      },
    ],
    relatedTools: [
      'beard-guard-style-match',
      'beard-style-selector',
      'beard-growth-time-calculator',
    ],
  },
};
