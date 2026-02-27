import type { CalculatorConfig } from '@/lib/types';

export const beltSizeFinderConfig: CalculatorConfig = {
  fields: [
    {
      id: 'measurement_method',
      label: 'Measurement Method',
      type: 'select',
      defaultValue: 'pants_size',
      options: [
        { label: 'Waist Measurement (inches, over shirt)', value: 'waist_measurement' },
        { label: 'Pants Size (US)', value: 'pants_size' },
      ],
      helpText: 'Choose how you want to determine your belt size.',
    },
    {
      id: 'measurement_value',
      label: 'Measurement Value',
      type: 'number',
      placeholder: 'e.g. 34',
      min: 24,
      max: 54,
      step: 1,
      helpText: 'Enter your waist measurement in inches or your US pants size number.',
    },
    {
      id: 'fit_preference',
      label: 'Fit Preference',
      type: 'select',
      defaultValue: 'standard',
      options: [
        { label: 'Snug (tighter fit)', value: 'snug' },
        { label: 'Standard (middle hole)', value: 'standard' },
        { label: 'Relaxed (looser fit)', value: 'relaxed' },
      ],
      helpText: 'A standard fit buckles at the middle hole, giving you room to adjust in either direction.',
    },
  ],
  outputs: [
    {
      id: 'belt_size_inches',
      label: 'Belt Size (inches)',
      highlight: true,
      description: 'Your recommended belt size in inches.',
    },
    {
      id: 'belt_size_cm',
      label: 'Belt Size (cm)',
      unit: 'cm',
      description: 'Your recommended belt size in centimeters.',
    },
    {
      id: 'size_label',
      label: 'General Size',
      description: 'Standard letter size (S, M, L, XL, XXL).',
    },
    {
      id: 'fit_tip',
      label: 'Fit Tip',
      description: 'Advice on getting the right belt fit.',
    },
    {
      id: 'shopping_tip',
      label: 'Shopping Tip',
      description: 'What to look for when buying a belt.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const method = String(inputs.measurement_method);
    const value = Number(inputs.measurement_value);
    const fitPref = String(inputs.fit_preference);

    if (!value || value <= 0) {
      return {
        belt_size_inches: '-',
        belt_size_cm: '-',
        size_label: '-',
        fit_tip: 'Enter a valid measurement above.',
        shopping_tip: '-',
      };
    }

    // Step 1: Determine base belt size in inches
    let baseBeltSize: number;
    if (method === 'pants_size') {
      // Standard rule: belt size = pants size + 2 inches
      baseBeltSize = value + 2;
    } else {
      // Waist measurement (measured over a shirt): use as-is
      baseBeltSize = value;
    }

    // Step 2: Apply fit preference adjustment
    switch (fitPref) {
      case 'snug':
        baseBeltSize -= 1;
        break;
      case 'relaxed':
        baseBeltSize += 1;
        break;
      case 'standard':
      default:
        break;
    }

    // Step 3: Round to nearest even number (belt sizes come in even numbers)
    const beltSizeInches = Math.round(baseBeltSize / 2) * 2;

    // Step 4: Convert to cm
    const beltSizeCm = Math.round(beltSizeInches * 2.54);

    // Step 5: Determine letter size
    let sizeLabel: string;
    if (beltSizeInches <= 30) {
      sizeLabel = 'S';
    } else if (beltSizeInches <= 34) {
      sizeLabel = 'M';
    } else if (beltSizeInches <= 38) {
      sizeLabel = 'L';
    } else if (beltSizeInches <= 42) {
      sizeLabel = 'XL';
    } else {
      sizeLabel = 'XXL';
    }

    // Step 6: Generate fit tip
    let fitTip: string;
    switch (fitPref) {
      case 'snug':
        fitTip =
          'A snug belt should fasten comfortably at the second or third hole from the buckle. Make sure you can still slide a finger between the belt and your waist.';
        break;
      case 'relaxed':
        fitTip =
          'A relaxed belt sits lower and looser. This works well for casual looks but avoid letting the tail hang too far past the first belt loop.';
        break;
      case 'standard':
      default:
        fitTip =
          'A properly sized belt fastens at the middle hole, giving you room to go tighter or looser as needed. This is the most versatile fit.';
        break;
    }

    // Step 7: Shopping tip
    const shoppingTip =
      'Try on at the middle hole. A new leather belt will stretch 0.5-1 inch over the first few months, so a slightly snug fit when new is ideal. Always buy from brands that list belt size in inches rather than S/M/L for the most accurate fit.';

    return {
      belt_size_inches: `${beltSizeInches}"`,
      belt_size_cm: `${beltSizeCm} cm`,
      size_label: sizeLabel,
      fit_tip: fitTip,
      shopping_tip: shoppingTip,
    };
  },
  supportingContent: {
    intro:
      'A belt that fits properly should fasten at the middle hole with no extra tail flopping around. Most men buy the wrong belt size because they assume it matches their pants size. It does not. This calculator converts your pants size or waist measurement into the correct belt size, accounting for your preferred fit.',
    howToUse:
      'Choose whether you want to calculate from your pants size or a direct waist measurement. If using pants size, enter the number on your jeans or trousers tag. If measuring your waist, wrap a tape measure around your waist over a tucked-in shirt at the height where you wear your belt. Select your fit preference and the calculator gives you the exact belt size to buy.',
    faq: [
      {
        question: 'Why is my belt size different from my pants size?',
        answer:
          'Your belt needs to go around the waistband of your pants, which adds material thickness. The standard rule is that your belt size is 2 inches larger than your pants size. So if you wear size 34 pants, you need a size 36 belt. This accounts for the extra circumference created by the pants fabric, belt loops, and shirt tucked underneath. This rule works for about 90% of men and standard-cut pants.',
      },
      {
        question: 'Does leather stretch over time?',
        answer:
          'Yes, genuine leather belts stretch 0.5 to 1 inch over the first few months of regular wear. Full-grain leather stretches the least and holds its shape best, while bonded or genuine leather (lower grades) can stretch more and lose structure. Buy your belt so it fits at the middle hole when new. As it breaks in, you will move to the next tighter hole. Synthetic and faux-leather belts do not stretch and may crack instead.',
      },
      {
        question: 'When should I size up instead of using the standard rule?',
        answer:
          'Size up if you wear your pants higher on your waist (above the hip bones), if you plan to wear the belt with heavier fabrics like denim or wool trousers, or if you carry extra weight around the midsection. Also size up if you are between two even numbers. It is always easier to punch an extra hole in a belt than to stretch one that is too tight.',
      },
    ],
    relatedTools: [
      'dress-shirt-size-calculator',
      'suit-size-estimator',
      'shoe-size-converter',
      'outfit-builder',
      'capsule-wardrobe-builder',
    ],
  },
};
