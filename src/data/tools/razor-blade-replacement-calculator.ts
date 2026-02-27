import type { CalculatorConfig } from '@/lib/types';

export const razorBladeReplacementCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'shaves_per_week',
      label: 'Shaves Per Week',
      type: 'number',
      placeholder: 'e.g. 4',
      min: 1,
      max: 7,
      step: 1,
      defaultValue: 4,
      helpText: 'How many times per week you shave.',
    },
    {
      id: 'blade_type',
      label: 'Blade Type',
      type: 'select',
      defaultValue: 'cartridge_standard',
      options: [
        { label: 'Premium Cartridge (Gillette Fusion, etc.)', value: 'cartridge_premium' },
        { label: 'Standard Cartridge (Store Brand, Basics)', value: 'cartridge_standard' },
        { label: 'Safety Razor (Double Edge)', value: 'safety_razor' },
        { label: 'Disposable Razor', value: 'disposable' },
      ],
      helpText: 'The type of razor blade you use.',
    },
    {
      id: 'hair_thickness',
      label: 'Hair Thickness',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Fine', value: 'fine' },
        { label: 'Medium', value: 'medium' },
        { label: 'Coarse', value: 'coarse' },
      ],
      helpText: 'Coarser hair dulls blades faster. If your stubble feels rough like sandpaper, you are likely coarse.',
    },
    {
      id: 'shave_area',
      label: 'Shaving Area',
      type: 'select',
      defaultValue: 'face_and_neck',
      options: [
        { label: 'Face Only', value: 'face_only' },
        { label: 'Face and Neck', value: 'face_and_neck' },
        { label: 'Face, Neck, and Head', value: 'face_neck_head' },
      ],
      helpText: 'A larger shaving area means more blade wear per shave.',
    },
  ],
  outputs: [
    {
      id: 'shaves_per_blade',
      label: 'Shaves Per Blade',
      highlight: true,
      format: 'number',
      description: 'How many shaves you should get from one blade before replacing.',
    },
    {
      id: 'days_between_changes',
      label: 'Days Between Blade Changes',
      format: 'number',
      description: 'How many days a single blade should last at your shaving frequency.',
    },
    {
      id: 'blades_per_year',
      label: 'Blades Per Year',
      format: 'number',
      description: 'Total number of blades you will go through in a year.',
    },
    {
      id: 'estimated_annual_cost',
      label: 'Estimated Annual Cost',
      format: 'currency',
      description: 'Approximate yearly cost for blade replacements.',
    },
    {
      id: 'replacement_tip',
      label: 'Replacement Tip',
      description: 'How to tell when your blade needs changing.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const shavesPerWeek = Math.max(1, Math.min(7, Number(inputs.shaves_per_week)));
    const bladeType = String(inputs.blade_type);
    const hairThickness = String(inputs.hair_thickness);
    const shaveArea = String(inputs.shave_area);

    if (!shavesPerWeek || shavesPerWeek <= 0) {
      return {
        shaves_per_blade: 'Enter a valid number of shaves per week',
        days_between_changes: '-',
        blades_per_year: '-',
        estimated_annual_cost: '-',
        replacement_tip: '-',
      };
    }

    // Base shaves per blade by type
    const baseShavesMap: Record<string, number> = {
      cartridge_premium: 12,
      cartridge_standard: 8,
      safety_razor: 5,
      disposable: 3,
    };

    // Average cost per blade in USD
    const costPerBladeMap: Record<string, number> = {
      cartridge_premium: 4.50,
      cartridge_standard: 2.00,
      safety_razor: 0.25,
      disposable: 0.75,
    };

    let baseShaves = baseShavesMap[bladeType] || 8;
    const costPerBlade = costPerBladeMap[bladeType] || 2.00;

    // Hair thickness adjustment
    if (hairThickness === 'fine') {
      baseShaves = Math.round(baseShaves * 1.3);
    } else if (hairThickness === 'coarse') {
      baseShaves = Math.round(baseShaves * 0.7);
    }

    // Shave area adjustment
    if (shaveArea === 'face_only') {
      // No adjustment, this is the baseline
    } else if (shaveArea === 'face_and_neck') {
      baseShaves = Math.round(baseShaves * 0.9);
    } else if (shaveArea === 'face_neck_head') {
      baseShaves = Math.round(baseShaves * 0.8);
    }

    // Ensure minimum 1 shave per blade
    const shavesPerBlade = Math.max(1, baseShaves);

    // Calculate derived values
    const daysBetweenChanges = Math.round((shavesPerBlade / shavesPerWeek) * 7);
    const bladesPerYear = Math.ceil(365 / daysBetweenChanges);
    const annualCost = Math.round(bladesPerYear * costPerBlade * 100) / 100;

    // Replacement tip based on blade type
    const replacementTips: Record<string, string> = {
      cartridge_premium: 'Replace when you feel tugging instead of gliding, even if the lubrication strip still has color. A dull premium cartridge will cause more irritation than a fresh cheap blade. Most men push cartridges 3 to 5 shaves too far.',
      cartridge_standard: 'Standard cartridges dull faster than premiums. If you need more than one pass to get a clean shave, or if you feel any pulling, it is time to change. Rinsing the blade thoroughly between strokes extends life slightly.',
      safety_razor: 'Safety razor blades are cheap enough to change aggressively. At 25 cents a blade, there is no reason to push a dull one. Most double-edge blades peak at shave 2 or 3 and decline from there. Change at the first sign of tugging.',
      disposable: 'Disposables are meant to be thrown away quickly. Do not try to stretch them beyond 3 shaves. The thin blades dull fast and the lack of a proper pivot head means a dull disposable is a recipe for nicks and irritation.',
    };

    const replacementTip = replacementTips[bladeType] || replacementTips.cartridge_standard;

    return {
      shaves_per_blade: shavesPerBlade,
      days_between_changes: `${daysBetweenChanges} days`,
      blades_per_year: bladesPerYear,
      estimated_annual_cost: `$${annualCost.toFixed(2)}`,
      replacement_tip: replacementTip,
    };
  },
  supportingContent: {
    intro:
      'A dull razor blade is one of the most common causes of razor burn, ingrown hairs, and a bad shave. This razor blade replacement calculator tells you exactly how many shaves per blade to expect and when to swap based on your blade type, hair thickness, and shaving area. Struggling with irritation? Take our <a href="/razor-burn-risk-checker">Razor Burn Risk Checker</a> to diagnose the full problem.',
    howToUse:
      'Enter shaves per week, blade type, hair thickness, and shaving area. The calculator returns shaves per blade, change frequency, annual blade count, and estimated yearly cost. Pair this with our <a href="/razor-burn-risk-checker">Razor Burn Risk Checker</a> and <a href="/skincare-routine-builder">Skincare Routine Builder</a> for a complete shaving and skin care plan.',
    faq: [
      {
        question: 'How do I know when a blade is dull?',
        answer:
          'Three clear signs: tugging instead of gliding, needing multiple passes for a clean shave, and increased nicks or irritation. A sharp blade cuts on the first pass with almost no pressure. If you press harder, the blade is done. For shaving technique improvements, our <a href="/razor-burn-risk-checker">Razor Burn Risk Checker</a> evaluates your full routine.',
      },
      {
        question: 'How can I make my blades last longer?',
        answer:
          'Rinse the blade thoroughly after every few strokes. Pat dry after use rather than leaving it wet, since moisture causes oxidation. Store your razor upright in a dry area, not in the shower. Some men run the blade backward along denim to realign the edge. Our <a href="/skincare-routine-builder">Skincare Routine Builder</a> includes post-shave care that also protects your skin.',
      },
      {
        question: 'Are expensive blades worth the price compared to safety razors?',
        answer:
          'From a cost perspective, <a href="https://en.wikipedia.org/wiki/Safety_razor" target="_blank" rel="noopener">safety razors</a> win by a massive margin. Double-edge blades cost 10-25 cents each versus $2-5 per cartridge. They also provide a closer shave with less irritation once you learn the technique. If you spend over $100 a year on cartridges, a safety razor pays for itself in months.',
      },
    ],
    relatedTools: [
      'razor-burn-risk-checker',
      'skincare-routine-builder',
      'beard-guard-style-match',
    ],
  },
};
