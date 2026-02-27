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
      'How to find your belt size: it is not the same as your pants size. A properly fitting men\'s belt fastens at the middle hole with no extra tail. This belt size calculator converts your pants size or waist measurement into the correct belt size for any fit preference. Building a wardrobe? Our <a href="/capsule-wardrobe-builder">Capsule Wardrobe Builder</a> includes belt recommendations that match your style.',
    howToUse:
      'Choose to calculate from your pants size or a waist measurement. If measuring, wrap a tape around your waist over a tucked-in shirt where you wear your belt. Select your fit preference and get the exact size to buy. Need to size other accessories? Try our <a href="/dress-shirt-size-calculator">Dress Shirt Size Calculator</a> or <a href="/suit-size-estimator">Suit Size Estimator</a>.',
    faq: [
      {
        question: 'Why is my belt size different from my pants size?',
        answer:
          'Your belt goes around the waistband, which adds material thickness. The standard rule: belt size equals pants size plus 2 inches. Size 34 pants need a size 36 belt. This accounts for fabric, belt loops, and a tucked shirt. The rule works for about 90% of men. For dress outfits, our <a href="/suit-size-estimator">Suit Size Estimator</a> helps you match trouser and belt sizing.',
      },
      {
        question: 'Does leather stretch over time?',
        answer:
          'Yes. <a href="https://en.wikipedia.org/wiki/Full_grain_leather" target="_blank" rel="noopener">Full-grain leather</a> stretches 0.5-1 inch over the first few months, while bonded leather stretches more and loses structure. Buy so it fits at the middle hole when new, then move tighter as it breaks in. Synthetic belts do not stretch and may crack instead.',
      },
      {
        question: 'When should I size up instead of using the standard rule?',
        answer:
          'Size up if you wear pants higher on your waist, plan to pair the belt with heavier fabrics like denim or wool, or carry extra weight around the midsection. Also size up if you are between two even numbers. It is always easier to punch an extra hole than to stretch a tight belt. Our <a href="/shoe-size-converter">Shoe Size Converter</a> takes a similar better-safe-than-sorry approach.',
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
