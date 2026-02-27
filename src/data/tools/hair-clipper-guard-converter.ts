import type { CalculatorConfig } from '@/lib/types';

export const hairClipperGuardConverterConfig: CalculatorConfig = {
  fields: [
    {
      id: 'guard_number',
      label: 'Guard Number',
      type: 'select',
      defaultValue: '2',
      options: [
        { label: '#0 (closest without skin)', value: '0' },
        { label: '#0.5', value: '0.5' },
        { label: '#1', value: '1' },
        { label: '#1.5', value: '1.5' },
        { label: '#2', value: '2' },
        { label: '#3', value: '3' },
        { label: '#4', value: '4' },
        { label: '#5', value: '5' },
        { label: '#6', value: '6' },
        { label: '#7', value: '7' },
        { label: '#8', value: '8' },
      ],
      helpText: 'The clipper guard number you want to convert. Higher numbers leave more hair.',
    },
    {
      id: 'brand',
      label: 'Clipper Brand',
      type: 'select',
      defaultValue: 'generic',
      options: [
        { label: 'Wahl', value: 'wahl' },
        { label: 'Andis', value: 'andis' },
        { label: 'Oster', value: 'oster' },
        { label: 'Generic / Other', value: 'generic' },
      ],
      helpText: 'Guard sizes are mostly universal, but some brands have slight variations.',
    },
  ],
  outputs: [
    {
      id: 'length_mm',
      label: 'Length in Millimeters',
      unit: 'mm',
      format: 'number',
      highlight: true,
      description: 'The hair length this guard will leave in millimeters.',
    },
    {
      id: 'length_inches',
      label: 'Length in Inches',
      unit: 'in',
      format: 'number',
      description: 'The hair length this guard will leave in inches.',
    },
    {
      id: 'blend_down_guard',
      label: 'Blend Down To',
      description: 'The guard number below this one for creating a smooth blend or fade.',
    },
    {
      id: 'blend_up_guard',
      label: 'Blend Up To',
      description: 'The guard number above this one for creating a smooth blend or fade.',
    },
    {
      id: 'common_use',
      label: 'Common Use',
      description: 'What this guard length is typically used for in haircuts.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const guardNum = parseFloat(inputs.guard_number as string);
    const brand = inputs.brand as string;

    // Standard guard to mm mapping
    const guardToMm: Record<number, number> = {
      0: 0.5,
      0.5: 1.5,
      1: 3,
      1.5: 4.5,
      2: 6,
      3: 10,
      4: 13,
      5: 16,
      6: 19,
      7: 22,
      8: 25,
    };

    // Minor brand adjustments (in mm)
    const brandAdjustments: Record<string, number> = {
      wahl: 0,
      andis: 0.2,
      oster: -0.2,
      generic: 0,
    };

    const baseMm = guardToMm[guardNum] ?? 6;
    const adjustment = brandAdjustments[brand] ?? 0;
    const finalMm = Math.round((baseMm + adjustment) * 10) / 10;
    const finalInches = Math.round((finalMm / 25.4) * 1000) / 1000;

    // Blend partners
    const guardOrder = [0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 7, 8];
    const currentIndex = guardOrder.indexOf(guardNum);

    let blendDown: string;
    if (currentIndex <= 0) {
      blendDown = 'No guard (skin) or use the lever open/closed for micro-blending';
    } else {
      const downGuard = guardOrder[currentIndex - 1];
      const downMm = guardToMm[downGuard];
      blendDown = '#' + downGuard + ' (' + downMm + 'mm)';
    }

    let blendUp: string;
    if (currentIndex >= guardOrder.length - 1) {
      blendUp = 'No standard guard above #8 - use scissors for longer lengths';
    } else {
      const upGuard = guardOrder[currentIndex + 1];
      const upMm = guardToMm[upGuard];
      blendUp = '#' + upGuard + ' (' + upMm + 'mm)';
    }

    // Common use descriptions
    const commonUses: Record<number, string> = {
      0: 'The shortest clipper setting without going to skin. Used for tight fades at the very bottom and military-style buzz cuts. Often the starting point for skin fades with the lever closed.',
      0.5: 'Very short stubble look. Popular as the lowest point in a fade or for an all-over ultra-short buzz. Leaves just enough hair to see shadow on the scalp.',
      1: 'The most popular fade starting point. Used for the sides and back in most modern fades. Also common for a short all-over buzz cut that still has visible hair.',
      1.5: 'Slightly longer than a #1 - used as a blending guard between #1 and #2 in fades. Helps create smoother gradients on the sides.',
      2: 'The go-to length for the sides in a standard short haircut. Short enough to look clean, long enough to see the hair direction. Very popular for crew cuts.',
      3: 'A versatile medium-short length. Used for the sides in taper cuts and conservative business haircuts. Also popular as a starting point for longer styles on the sides.',
      4: 'About half an inch of hair. Used for the sides when you want a fuller look, or as a uniform all-over length for a casual, low-maintenance cut.',
      5: 'Leaves noticeable length. Used for the top in crew cuts, or the sides when the style calls for more weight and volume. Good starting length for comb-overs.',
      6: 'About three-quarters of an inch. Used for the top of shorter styles or as a longer side length. Common in classic taper cuts where the sides are not dramatically short.',
      7: 'Nearly an inch of length. Used primarily on top for crew cuts and short textured styles. Rarely used on the sides unless going for a very full, traditional look.',
      8: 'One full inch - the longest standard guard. Used almost exclusively on top for short, uniform styles. At this length, scissors often become more practical for precise shaping.',
    };

    const commonUse = commonUses[guardNum] || 'Standard clipper guard length for general use.';

    // Format inches as fraction for display
    const fractionMap: Record<number, string> = {
      0: '~1/64',
      0.5: '~1/16',
      1: '1/8',
      1.5: '~3/16',
      2: '1/4',
      3: '3/8',
      4: '1/2',
      5: '5/8',
      6: '3/4',
      7: '7/8',
      8: '1',
    };

    const fractionInches = fractionMap[guardNum] || String(finalInches);

    return {
      length_mm: finalMm,
      length_inches: fractionInches + '"',
      blend_down_guard: blendDown,
      blend_up_guard: blendUp,
      common_use: commonUse,
    };
  },
  supportingContent: {
    intro:
      'Clipper guard numbers are the universal language of barbershops, but most guys have no idea what a #2 guard actually means in real measurements. This hair clipper guard converter translates any guard number into millimeters and inches, shows common uses, and reveals which guards pair together for smooth fades. Use it alongside our <a href="/barber-instruction-generator">Barber Instruction Generator</a> to communicate exactly what you want.',
    howToUse:
      'Select the guard number and optionally choose your clipper brand for precision adjustments. The converter shows exact length in millimeters and inches, blend partners for fades, and typical use cases. Planning a beard trim instead? Our <a href="/beard-guard-style-match">Beard Guard Style Match</a> covers facial hair guard settings.',
    faq: [
      {
        question: 'Are guard sizes different between clipper brands?',
        answer:
          'Guard sizes are largely standardized across Wahl, Andis, and Oster. Differences are fractions of a millimeter and not noticeable in practice. The bigger variable is the clipper lever position, which adds or subtracts about 0.5mm. If your barber uses a different brand than your home clipper, the guard numbers produce virtually the same result.',
      },
      {
        question: 'What does open lever vs closed lever mean?',
        answer:
          'Most clippers have a side lever that adjusts the blade gap. Closed cuts at the shortest setting for that guard; open leaves about 0.5mm extra. Barbers use the lever to create half-steps for smoother blends. For example, a #1 guard with the lever open cuts at about 3.5mm. Our <a href="/fade-taper-maintenance-planner">Fade & Taper Maintenance Planner</a> explains how this affects your maintenance schedule.',
      },
      {
        question: 'How do barbers blend between guard sizes?',
        answer:
          'Blending makes transitions between lengths look seamless. Barbers use adjacent guards, adjust the lever between open and closed, and rock the clipper to feather the transition zone. The key is working in small sections and never skipping more than one guard size. Use our <a href="/barber-instruction-generator">Barber Instruction Generator</a> to specify your preferred blend type.',
      },
    ],
    relatedTools: [
      'barber-instruction-generator',
      'haircut-frequency-calculator',
      'fade-taper-maintenance-planner',
      'beard-style-selector',
      'skincare-routine-builder',
    ],
  },
};
