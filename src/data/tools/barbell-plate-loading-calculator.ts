import { CalculatorConfig } from '@/lib/types';

export const barbellPlateLoadingCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'target_weight',
      label: 'Target Weight',
      type: 'number',
      placeholder: 'e.g. 225',
      unit: 'lbs',
      min: 45,
      max: 1000,
      step: 2.5,
      helpText: 'The total weight you want on the bar, including the bar itself.',
    },
    {
      id: 'bar_weight',
      label: 'Bar Weight',
      type: 'select',
      defaultValue: '45',
      options: [
        { label: '45 lbs (standard Olympic)', value: '45' },
        { label: '35 lbs (women\'s Olympic)', value: '35' },
        { label: '25 lbs (training bar)', value: '25' },
        { label: '15 lbs (technique bar)', value: '15' },
      ],
      helpText: 'The weight of your barbell. Standard Olympic bars are 45 lbs (20 kg).',
    },
    {
      id: 'unit',
      label: 'Unit System',
      type: 'select',
      defaultValue: 'lbs',
      options: [
        { label: 'Pounds (lbs)', value: 'lbs' },
        { label: 'Kilograms (kg)', value: 'kg' },
      ],
      helpText: 'Select the unit for all weight values.',
    },
  ],
  outputs: [
    {
      id: 'weight_per_side',
      label: 'Weight Per Side',
      unit: 'lbs',
      format: 'number',
      highlight: true,
      description: 'Total weight to load on each side of the bar.',
    },
    {
      id: 'plate_breakdown',
      label: 'Plate Breakdown (per side)',
      description: 'Exact plates to put on each side of the bar.',
    },
    {
      id: 'total_plates_needed',
      label: 'Total Plates Needed',
      format: 'number',
      description: 'Total number of individual plates across both sides.',
    },
    {
      id: 'actual_total_weight',
      label: 'Actual Total Weight',
      unit: 'lbs',
      format: 'number',
      description: 'The real total weight on the bar (may differ slightly from target).',
    },
    {
      id: 'nearest_achievable',
      label: 'Nearest Achievable Weight',
      description: 'If your target is not achievable with standard plates, this is the closest option.',
    },
    {
      id: 'loading_tip',
      label: 'Loading Tip',
      description: 'Safety reminder for loading your bar.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const targetWeight = Number(inputs.target_weight) || 135;
    const barWeight = Number(inputs.bar_weight) || 45;
    const unit = inputs.unit as string;

    // Available plates by unit system (standard plates per side)
    const platesLbs = [45, 35, 25, 10, 5, 2.5];
    const platesKg = [20, 15, 10, 5, 2.5, 1.25];
    const availablePlates = unit === 'kg' ? platesKg : platesLbs;
    const unitLabel = unit === 'kg' ? 'kg' : 'lbs';

    // Bar weight for kg if user selected kg unit but bar_weight is in lbs options
    // The bar_weight select values are in lbs, so convert if needed
    let actualBarWeight = barWeight;
    if (unit === 'kg') {
      // Convert bar weight from lbs to kg
      actualBarWeight = Math.round((barWeight / 2.20462) * 100) / 100;
      // Round to nearest standard kg bar: 20, 15, 10, 7
      const kgBars = [20, 15, 10, 7];
      let closest = kgBars[0];
      let minDiff = Math.abs(actualBarWeight - kgBars[0]);
      for (const kb of kgBars) {
        if (Math.abs(actualBarWeight - kb) < minDiff) {
          closest = kb;
          minDiff = Math.abs(actualBarWeight - kb);
        }
      }
      actualBarWeight = closest;
    }

    // Check if target is less than or equal to bar weight
    if (targetWeight <= actualBarWeight) {
      return {
        weight_per_side: 0,
        plate_breakdown: 'No plates needed - just the bar',
        total_plates_needed: 0,
        actual_total_weight: actualBarWeight,
        nearest_achievable: `Bar weight is ${actualBarWeight} ${unitLabel}`,
        loading_tip: 'Always use barbell clips (collars) even when using light weights. Plates can shift during the lift and cause dangerous imbalances.',
      };
    }

    // Weight to distribute across both sides
    const totalPlateWeight = targetWeight - actualBarWeight;
    let weightPerSide = totalPlateWeight / 2;

    // Greedy algorithm: use largest plates first
    const plateCounts: { plate: number; count: number }[] = [];
    let remaining = weightPerSide;
    let totalPlateCount = 0;

    for (const plate of availablePlates) {
      if (remaining >= plate) {
        const count = Math.floor(remaining / plate);
        plateCounts.push({ plate, count });
        remaining = Math.round((remaining - count * plate) * 100) / 100;
        totalPlateCount += count;
      }
    }

    // Check if we achieved exact weight
    const achievedPerSide = weightPerSide - remaining;
    const actualTotalWeight = Math.round((actualBarWeight + achievedPerSide * 2) * 100) / 100;
    const isExact = remaining < 0.01;

    // Build plate breakdown string
    let breakdownParts: string[] = [];
    for (const pc of plateCounts) {
      breakdownParts.push(`${pc.count}x${pc.plate}`);
    }
    const plateBreakdown = breakdownParts.length > 0
      ? breakdownParts.join(' + ')
      : 'No plates needed';

    // Total plates across both sides
    const totalPlatesNeeded = totalPlateCount * 2;

    // Nearest achievable weight
    let nearestAchievable: string;
    if (isExact) {
      nearestAchievable = `${targetWeight} ${unitLabel} (exact match)`;
    } else {
      // Find nearest achievable by rounding weight per side to smallest plate increment
      const smallestPlate = availablePlates[availablePlates.length - 1];
      const roundedPerSide = Math.round(weightPerSide / smallestPlate) * smallestPlate;
      const nearestWeight = actualBarWeight + roundedPerSide * 2;
      nearestAchievable = `${nearestWeight} ${unitLabel} (target was ${targetWeight} ${unitLabel})`;
    }

    // Loading tip
    const loadingTip = totalPlateCount > 3
      ? 'With multiple plates per side, always load the heaviest plates closest to the collar and work outward to the lightest. Use clips on every set. When unloading, never strip one side completely while the other is still loaded, as the bar can flip off the rack.'
      : 'Always use barbell clips (collars) to secure your plates. Even a slight tilt during a lift can cause plates to slide, creating a dangerous imbalance. Load and unload plates evenly, alternating sides.';

    return {
      weight_per_side: Math.round(achievedPerSide * 100) / 100,
      plate_breakdown: plateBreakdown,
      total_plates_needed: totalPlatesNeeded,
      actual_total_weight: actualTotalWeight,
      nearest_achievable: nearestAchievable,
      loading_tip: loadingTip,
    };
  },
  supportingContent: {
    intro:
      'This barbell plate loading calculator does the plate math for you instantly. Enter your target weight, select your bar, and get an exact plate-by-plate breakdown for each side. It handles both pound and kilogram plates and tells you if your target is not achievable with standard increments. Use it alongside our <a href="/one-rep-max-calculator">1RM Calculator</a> to find your working percentages, then load the bar with confidence.',
    howToUse:
      'Enter the total weight you want on the bar (including the bar), select your bar weight, and choose your unit system. The calculator shows exactly which plates to load on each side. If your target is not perfectly achievable, it shows the nearest loadable weight. Pair with our <a href="/one-rep-max-calculator">1RM Calculator</a> for percentage-based training.',
    faq: [
      {
        question: 'What is the difference between Olympic and standard bars?',
        answer:
          '<a href="https://en.wikipedia.org/wiki/Barbell" target="_blank" rel="noopener">Olympic barbells</a> weigh 45 lbs (20 kg) for men and 35 lbs (15 kg) for women, with 2-inch sleeves for Olympic plates. Standard bars are lighter (15-25 lbs) with 1-inch sleeves. Nearly all commercial gyms use Olympic equipment. For home gym setups with a standard bar, select the appropriate bar weight option.',
      },
      {
        question: 'What do the different plate colors mean?',
        answer:
          'Competition bumper plates follow the <a href="https://en.wikipedia.org/wiki/International_Weightlifting_Federation" target="_blank" rel="noopener">IWF</a> color code: red is 25 kg, blue is 20 kg, yellow is 15 kg, green is 10 kg, and white is 5 kg. Most commercial gym iron plates are not color-coded and just have the weight stamped on them. Bumper plates are rubber-coated and designed to be dropped safely.',
      },
      {
        question: 'Should I warm up before loading my target weight?',
        answer:
          'Always. The <a href="https://www.nsca.com/" target="_blank" rel="noopener">NSCA</a> recommends a progressive warm-up: bar only (10-15 reps), then 50% (8 reps), 70% (5 reps), 85% (3 reps), and finally your working weight. This activates your muscles, lubricates joints, and prepares your nervous system for heavy loads.',
      },
    ],
    relatedTools: ['one-rep-max-calculator', 'protein-macro-calculator', 'tdee-calculator'],
  },
};
