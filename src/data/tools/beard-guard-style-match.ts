import type { CalculatorConfig } from '@/lib/types';

export const beardGuardStyleMatchConfig: CalculatorConfig = {
  fields: [
    {
      id: 'target_style',
      label: 'Target Beard Style',
      type: 'select',
      defaultValue: 'short_beard',
      options: [
        { label: 'Stubble', value: 'stubble' },
        { label: 'Short Beard', value: 'short_beard' },
        { label: 'Medium Beard', value: 'medium_beard' },
        { label: 'Full Beard', value: 'full_beard' },
        { label: 'Goatee', value: 'goatee' },
        { label: 'Van Dyke', value: 'van_dyke' },
      ],
      helpText: 'The beard style you are trying to achieve.',
    },
    {
      id: 'beard_density',
      label: 'Beard Density',
      type: 'select',
      defaultValue: 'average',
      options: [
        { label: 'Patchy', value: 'patchy' },
        { label: 'Average', value: 'average' },
        { label: 'Thick', value: 'thick' },
      ],
      helpText: 'How thick or full your beard grows in naturally.',
    },
    {
      id: 'face_shape',
      label: 'Face Shape',
      type: 'select',
      defaultValue: 'oval',
      options: [
        { label: 'Oval', value: 'oval' },
        { label: 'Round', value: 'round' },
        { label: 'Square', value: 'square' },
        { label: 'Heart', value: 'heart' },
        { label: 'Oblong', value: 'oblong' },
      ],
      helpText: 'Your face shape helps determine the most flattering beard length and shape.',
    },
  ],
  outputs: [
    {
      id: 'min_guard',
      label: 'Minimum Guard Setting',
      highlight: true,
      description: 'The lowest guard number to use for your target style.',
    },
    {
      id: 'max_guard',
      label: 'Maximum Guard Setting',
      description: 'The highest guard number to use for your target style.',
    },
    {
      id: 'length_range_mm',
      label: 'Length Range',
      unit: 'mm',
      description: 'The millimeter range your beard should fall within.',
    },
    {
      id: 'maintenance_frequency',
      label: 'Maintenance Frequency',
      description: 'How often you should trim to maintain this style.',
    },
    {
      id: 'face_shape_tip',
      label: 'Face Shape Tip',
      description: 'Personalized styling advice based on your face shape.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const targetStyle = String(inputs.target_style);
    const beardDensity = String(inputs.beard_density);
    const faceShape = String(inputs.face_shape);

    // Base style-to-guard mapping
    const styleMap: Record<string, { minMm: number; maxMm: number; minGuard: number; maxGuard: number; trimDays: number }> = {
      stubble: { minMm: 1, maxMm: 2, minGuard: 0, maxGuard: 0.5, trimDays: 2 },
      short_beard: { minMm: 3, maxMm: 6, minGuard: 1, maxGuard: 2, trimDays: 4 },
      medium_beard: { minMm: 10, maxMm: 15, minGuard: 3, maxGuard: 5, trimDays: 5 },
      full_beard: { minMm: 19, maxMm: 25, minGuard: 6, maxGuard: 8, trimDays: 7 },
      goatee: { minMm: 6, maxMm: 13, minGuard: 2, maxGuard: 4, trimDays: 4 },
      van_dyke: { minMm: 10, maxMm: 16, minGuard: 3, maxGuard: 5, trimDays: 5 },
    };

    const style = styleMap[targetStyle] || styleMap.short_beard;

    // Adjust for beard density
    let densityAdjustMin = 0;
    let densityAdjustMax = 0;
    let densityTrimAdjust = 0;

    if (beardDensity === 'patchy') {
      // Patchy beards look better slightly shorter; longer length exposes gaps
      densityAdjustMin = 0;
      densityAdjustMax = -1;
      densityTrimAdjust = -1;
    } else if (beardDensity === 'thick') {
      // Thick beards can go a bit longer and still look clean
      densityAdjustMin = 0;
      densityAdjustMax = 1;
      densityTrimAdjust = 1;
    }

    const adjustedMinGuard = Math.max(0, style.minGuard + densityAdjustMin);
    const adjustedMaxGuard = Math.max(adjustedMinGuard, style.maxGuard + densityAdjustMax);
    const adjustedMinMm = Math.max(0.5, style.minMm + densityAdjustMin);
    const adjustedMaxMm = Math.max(adjustedMinMm, style.maxMm + (densityAdjustMax * 2));
    const trimDays = Math.max(1, style.trimDays + densityTrimAdjust);

    // Face shape tips
    const faceShapeTips: Record<string, string> = {
      oval: 'Oval faces are the most versatile. Your chosen style will work well. Keep the sides balanced with the chin length for a natural look.',
      round: 'For a round face, add length at the chin and keep the sides shorter. This creates the illusion of a longer, more angular face. Avoid styles that add width to the cheeks.',
      square: 'Square faces look great with a beard that softens the jawline. Keep the sides slightly fuller and round off the bottom rather than squaring it off. Medium to full beards are your best bet.',
      heart: 'Heart-shaped faces benefit from fuller beards at the jaw and chin to balance a wider forehead. Avoid heavy sideburns that add width up top. A goatee or Van Dyke works especially well.',
      oblong: 'For an oblong face, keep the sides fuller and the chin area shorter. This adds width and reduces the appearance of length. Avoid long, narrow beard styles that elongate the face further.',
    };

    const faceShapeTip = faceShapeTips[faceShape] || faceShapeTips.oval;

    // Format guard display
    const minGuardDisplay = adjustedMinGuard === 0 ? 'No guard (bare)' : `Guard #${adjustedMinGuard}`;
    const maxGuardDisplay = adjustedMaxGuard <= 0.5 ? 'Guard #0.5' : `Guard #${adjustedMaxGuard}`;

    return {
      min_guard: minGuardDisplay,
      max_guard: maxGuardDisplay,
      length_range_mm: `${adjustedMinMm} - ${adjustedMaxMm} mm`,
      maintenance_frequency: `Trim every ${trimDays} days`,
      face_shape_tip: faceShapeTip,
    };
  },
  supportingContent: {
    intro:
      'Finding the right beard trimmer guard setting can be confusing, especially across different brands. This beard guard style match tool pairs your target style, hair density, and face shape with the exact guard range and millimeter length to aim for. Not sure which style suits you? Take our <a href="/beard-style-selector">Beard Style Selector</a> quiz first, then come back for the technical settings.',
    howToUse:
      'Select your target beard style, natural density, and face shape. The calculator returns the guard range, length window, trim frequency, and a face shape tip. For zone-by-zone guard settings (cheeks, jaw, chin), use our <a href="/beard-trim-settings-calculator">Beard Trim Settings Calculator</a> next.',
    faq: [
      {
        question: 'What if my beard is patchy and I want a full beard?',
        answer:
          'Patchy beards look best at shorter lengths where coverage is consistent. A short beard at 3-6mm often appears fuller than a patchy medium beard at 15mm. A boar bristle brush trains hairs to cover sparse areas over time. For more detail on growing through patches, use our <a href="/beard-growth-time-calculator">Beard Growth Time Calculator</a> to set realistic expectations.',
      },
      {
        question: 'How do I find and shape my neckline properly?',
        answer:
          'Place two fingers above your Adam\'s apple - that is your neckline center. Draw an imaginary curve from behind each ear down to that point and back. Everything below gets shaved clean. A defined neckline is the biggest difference between an intentional beard and a neglected one. Our <a href="/beard-trim-settings-calculator">Beard Trim Settings Calculator</a> includes neckline guidance for every style.',
      },
      {
        question: 'Should I use beard oil or balm with a trimmed beard?',
        answer:
          'Yes. <a href="https://www.menshealth.com/grooming/g19518770/best-beard-oil/" target="_blank" rel="noopener">Beard oil</a> moisturizes the skin underneath and reduces itch, essential even for stubble. Balm adds hold for shaping longer beards. For stubble and short beards, oil alone works. For medium and full beards, apply oil first for moisture, then balm for control. Apply right after a shower when hair is damp.',
      },
    ],
    relatedTools: [
      'beard-style-selector',
      'beard-trim-settings-calculator',
      'face-shape-analyzer',
    ],
  },
};
