import type { BuilderConfig } from '@/lib/types';

export const barberInstructionGeneratorConfig: BuilderConfig = {
  shareText: 'Just built my perfect barber instructions with the Real Men Guide Barber Instruction Generator!',
  steps: [
    {
      id: 'haircut_type',
      title: 'What type of haircut do you want?',
      subtitle: 'This is the foundation of your cut. Pick the overall structure.',
      type: 'single-select',
      options: [
        {
          id: 'fade',
          label: 'Fade',
          description: 'Gradual taper from short to shorter on the sides, blending seamlessly',
        },
        {
          id: 'taper',
          label: 'Taper',
          description: 'Classic gradual shortening on the sides, less dramatic than a fade',
        },
        {
          id: 'undercut',
          label: 'Undercut',
          description: 'Disconnected sides - short on the sides with a sharp contrast to the top',
        },
        {
          id: 'buzz',
          label: 'Buzz Cut',
          description: 'Uniform short length all over, clean and low-maintenance',
        },
        {
          id: 'scissor_cut',
          label: 'Scissor Cut',
          description: 'All scissors, no clippers - softer texture and more natural movement',
        },
      ],
    },
    {
      id: 'sides_length',
      title: 'How short do you want the sides?',
      subtitle: 'This is the shortest point on the sides and back of your head.',
      type: 'single-select',
      options: [
        {
          id: 'skin',
          label: 'Skin (No Guard)',
          description: 'Down to the skin - the cleanest, sharpest look',
        },
        {
          id: '0.5guard',
          label: '#0.5 Guard (1.5mm)',
          description: 'Just above skin - tight but with a hint of shadow',
        },
        {
          id: '1guard',
          label: '#1 Guard (3mm)',
          description: 'Very short - the most popular fade starting point',
        },
        {
          id: '2guard',
          label: '#2 Guard (6mm)',
          description: 'Short but visible hair - clean and versatile',
        },
        {
          id: '3guard',
          label: '#3 Guard (10mm)',
          description: 'Medium-short - good for tapers and conservative cuts',
        },
        {
          id: '4guard',
          label: '#4 Guard (13mm)',
          description: 'About half an inch - more length on the sides for a fuller look',
        },
      ],
    },
    {
      id: 'top_style',
      title: 'What style do you want on top?',
      subtitle: 'This defines the look and how you will style it daily.',
      type: 'single-select',
      options: [
        {
          id: 'textured_crop',
          label: 'Textured Crop',
          description: 'Short, choppy, forward-styled fringe - modern and easy to style',
        },
        {
          id: 'slick_back',
          label: 'Slick Back',
          description: 'Combed straight back for a clean, polished look - needs 3+ inches on top',
        },
        {
          id: 'pompadour',
          label: 'Pompadour',
          description: 'Volume and height at the front, swept up and back - a bold classic',
        },
        {
          id: 'crew_cut',
          label: 'Crew Cut',
          description: 'Short all over with slightly more length on top - timeless and professional',
        },
        {
          id: 'french_crop',
          label: 'French Crop',
          description: 'Short on top with a straight, blunt fringe at the front',
        },
        {
          id: 'messy',
          label: 'Messy / Textured',
          description: 'Intentionally tousled and natural - styled to look unstyled',
        },
        {
          id: 'buzz',
          label: 'Buzz (Same as Sides)',
          description: 'Uniform length all over - the ultimate low-maintenance option',
        },
      ],
    },
    {
      id: 'blend_preference',
      title: 'How do you want the sides to meet the top?',
      subtitle: 'The blend determines how dramatic the transition looks.',
      type: 'single-select',
      options: [
        {
          id: 'sharp_line',
          label: 'Sharp Line / Hard Part',
          description: 'A defined razor line separating the top from the sides - bold and intentional',
        },
        {
          id: 'soft_blend',
          label: 'Soft Blend',
          description: 'Gradual, seamless transition from sides to top - the most common and versatile',
        },
        {
          id: 'natural_taper',
          label: 'Natural Taper',
          description: 'A gentle, classic transition - less dramatic, more traditional',
        },
      ],
    },
  ],
  generateOutput: (selections: Record<string, string[]>) => {
    const haircutType = selections.haircut_type?.[0] || 'fade';
    const sidesLength = selections.sides_length?.[0] || '1guard';
    const topStyle = selections.top_style?.[0] || 'textured_crop';
    const blendPref = selections.blend_preference?.[0] || 'soft_blend';

    // Map sides to readable text
    const sidesMap: Record<string, { spoken: string; inches: string; mm: string; guard: string }> = {
      skin: { spoken: 'skin', inches: '0"', mm: '0mm', guard: 'no guard (skin)' },
      '0.5guard': { spoken: 'a half guard', inches: '1/16"', mm: '1.5mm', guard: '#0.5' },
      '1guard': { spoken: 'a number one', inches: '1/8"', mm: '3mm', guard: '#1' },
      '2guard': { spoken: 'a number two', inches: '1/4"', mm: '6mm', guard: '#2' },
      '3guard': { spoken: 'a number three', inches: '3/8"', mm: '10mm', guard: '#3' },
      '4guard': { spoken: 'a number four', inches: '1/2"', mm: '13mm', guard: '#4' },
    };

    // Map haircut type to spoken text
    const typeMap: Record<string, string> = {
      fade: 'a fade',
      taper: 'a taper',
      undercut: 'an undercut',
      buzz: 'a buzz cut',
      scissor_cut: 'a scissor cut',
    };

    // Map top style to spoken text and approximate top length
    const topMap: Record<string, { spoken: string; length: string }> = {
      textured_crop: { spoken: 'a textured crop', length: '2-3 inches on top' },
      slick_back: { spoken: 'a slick back', length: '3-5 inches on top' },
      pompadour: { spoken: 'a pompadour', length: '4-6 inches on top' },
      crew_cut: { spoken: 'a crew cut', length: '1-2 inches on top' },
      french_crop: { spoken: 'a French crop with a blunt fringe', length: '2-3 inches on top' },
      messy: { spoken: 'a messy textured look', length: '2-4 inches on top' },
      buzz: { spoken: 'a buzz all over', length: 'same as sides' },
    };

    // Map blend to spoken text
    const blendMap: Record<string, string> = {
      sharp_line: 'a hard part with a sharp line',
      soft_blend: 'a soft, seamless blend',
      natural_taper: 'a natural, gradual taper',
    };

    const sides = sidesMap[sidesLength] || sidesMap['1guard'];
    const typeName = typeMap[haircutType] || 'a fade';
    const top = topMap[topStyle] || topMap['textured_crop'];
    const blend = blendMap[blendPref] || 'a soft blend';

    // Build the natural language barber script
    let script: string;
    if (haircutType === 'buzz') {
      script =
        'I would like a buzz cut, ' +
        sides.guard +
        ' all over. Keep it even, and clean up the hairline and edges with a razor.';
    } else if (haircutType === 'scissor_cut') {
      script =
        'I would like a scissor cut with about ' +
        top.length +
        ' on top, styled as ' +
        top.spoken +
        '. On the sides, take it down to about ' +
        sides.inches +
        ' (' +
        sides.guard +
        ') and blend it with ' +
        blend +
        ' into the top. No clippers on the top, just scissors.';
    } else {
      script =
        'I would like ' +
        typeName +
        ' with ' +
        sides.spoken +
        ' on the sides, blended with ' +
        blend +
        ' up to about ' +
        top.length +
        ' on top, styled as ' +
        top.spoken +
        '.';
      if (blendPref === 'sharp_line') {
        script += ' I want a hard part on the left side.';
      }
      if (haircutType === 'undercut') {
        script += ' Keep the disconnect sharp between the sides and top - no blending through the transition.';
      }
    }

    // Technical details
    const technicalDetails: string[] = [
      'Sides: ' + sides.guard + ' (' + sides.mm + ' / ' + sides.inches + ')',
      'Top length: ' + top.length,
      'Top style: ' + top.spoken.replace('a ', '').replace('an ', ''),
      'Blend type: ' + blend.replace('a ', '').replace('an ', ''),
      'Cut type: ' + typeName.replace('a ', '').replace('an ', ''),
    ];

    // Pro tips
    const proTips: string[] = [
      'Save a screenshot of these instructions and show your barber before sitting down.',
      'Bring 2-3 reference photos from different angles that show the style you want. Instagram and Pinterest are great sources.',
      'If your barber suggests a modification based on your hair type or head shape, listen to them. They can see angles you cannot.',
    ];

    if (haircutType === 'fade' || haircutType === 'undercut') {
      proTips.push(
        'Ask your barber where they recommend starting the fade based on your head shape. The same fade height looks different on every person.'
      );
    }

    if (topStyle === 'slick_back' || topStyle === 'pompadour') {
      proTips.push(
        'Ask your barber to show you how to style the top before you leave. Watch the product amount and technique they use so you can replicate it at home.'
      );
    }

    if (topStyle === 'textured_crop' || topStyle === 'messy') {
      proTips.push(
        'Ask for point cutting or texturizing on top to remove bulk and add natural movement. This makes styling much easier at home.'
      );
    }

    return [
      {
        title: 'Your Barber Script',
        items: [
          script,
          'Tip: Read this script naturally or just show it on your phone. Most barbers prefer clear instructions over vague descriptions.',
        ],
      },
      {
        title: 'Technical Details',
        items: technicalDetails,
      },
      {
        title: 'Pro Tips',
        items: proTips,
      },
    ];
  },
  supportingContent: {
    intro:
      'Most guys dread the moment the barber asks "what do you want?" This barber instruction generator builds a clear, copy-paste script based on your exact preferences so you walk in with confidence and walk out with the haircut you actually wanted. Not sure which guard size you need? Check our <a href="/hair-clipper-guard-converter">Hair Clipper Guard Converter</a> first.',
    howToUse:
      'Select your haircut type, sides length, top style, and blend preference across four steps. The generator produces a natural-language barber script, technical breakdown with guard numbers, and pro tips. Use our <a href="/haircut-frequency-calculator">Haircut Frequency Calculator</a> to know when to schedule your next appointment.',
    faq: [
      {
        question: 'What if my barber does not understand the instructions?',
        answer:
          'Show the technical details on your phone. Guard numbers and inch measurements are universal barber language. Reference photos are your best backup - save two or three that show front, side, and back angles. Our <a href="/hair-clipper-guard-converter">Hair Clipper Guard Converter</a> can help you explain lengths in both millimeters and inches.',
      },
      {
        question: 'Should I bring reference photos even with these instructions?',
        answer:
          'Absolutely. Photos and verbal instructions work together, not as replacements. The photos show the end result and the instructions communicate technical details. Together they eliminate miscommunication. Save photos to your camera roll so you are not searching Instagram in the chair. <a href="https://www.menshealth.com/grooming/a19534014/how-to-talk-to-your-barber/" target="_blank" rel="noopener">Men\'s Health</a> calls this combo the gold standard for barber communication.',
      },
      {
        question: 'How much should I tip my barber?',
        answer:
          'The standard tip is 15-20% of the service cost. If your barber goes above and beyond with styling advice or extra detail work, tip 20-25%. For regulars, a holiday tip equivalent to one full haircut cost ensures priority treatment year-round. Budget your tipping into the annual cost shown by our <a href="/haircut-frequency-calculator">Haircut Frequency Calculator</a>.',
      },
    ],
    relatedTools: [
      'haircut-frequency-calculator',
      'fade-taper-maintenance-planner',
      'hair-clipper-guard-converter',
      'beard-style-selector',
      'skincare-routine-builder',
    ],
  },
};
