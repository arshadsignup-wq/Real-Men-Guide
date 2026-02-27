import type { CalculatorConfig } from '@/lib/types';

export const cologneSprayPerMlConverterConfig: CalculatorConfig = {
  fields: [
    {
      id: 'bottle_size_ml',
      label: 'Bottle Size (ml)',
      type: 'number',
      placeholder: 'e.g. 100',
      min: 1,
      max: 500,
      step: 1,
      defaultValue: 100,
      helpText: 'Enter the bottle size in milliliters.',
    },
    {
      id: 'atomizer_type',
      label: 'Atomizer Type',
      type: 'select',
      defaultValue: 'standard',
      options: [
        { label: 'Standard Spray', value: 'standard' },
        { label: 'Fine Mist', value: 'fine_mist' },
        { label: 'Heavy Spray', value: 'heavy_spray' },
      ],
      helpText: 'Standard atomizers deliver ~0.1 ml per spray. Fine mist sprays less per pump, heavy sprays more.',
    },
  ],
  outputs: [
    {
      id: 'sprays_per_ml',
      label: 'Sprays Per ml',
      description: 'How many sprays you get from a single milliliter with your atomizer type.',
    },
    {
      id: 'total_sprays',
      label: 'Total Sprays in Bottle',
      highlight: true,
      description: 'The total number of sprays in your entire bottle.',
    },
    {
      id: 'comparison_10ml',
      label: 'Equivalent in 10 ml Decants',
      description: 'How many 10 ml travel sprays your bottle equals.',
    },
    {
      id: 'comparison_30ml',
      label: 'Equivalent in 30 ml Bottles',
      description: 'How many 30 ml (1 oz) bottles your bottle equals.',
    },
    {
      id: 'comparison_50ml',
      label: 'Equivalent in 50 ml Bottles',
      description: 'How many 50 ml (1.7 oz) bottles your bottle equals.',
    },
    {
      id: 'comparison_100ml',
      label: 'Equivalent in 100 ml Bottles',
      description: 'How many 100 ml (3.4 oz) bottles your bottle equals.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const bottleSizeMl = Number(inputs.bottle_size_ml);
    const atomizerType = String(inputs.atomizer_type);

    if (!bottleSizeMl || bottleSizeMl <= 0) {
      return {
        sprays_per_ml: '-',
        total_sprays: '-',
        comparison_10ml: '-',
        comparison_30ml: '-',
        comparison_50ml: '-',
        comparison_100ml: '-',
      };
    }

    // Sprays per ml based on atomizer type
    let spraysPerMl: number;
    switch (atomizerType) {
      case 'fine_mist':
        spraysPerMl = 12;
        break;
      case 'heavy_spray':
        spraysPerMl = 8;
        break;
      case 'standard':
      default:
        spraysPerMl = 10;
        break;
    }

    const totalSprays = bottleSizeMl * spraysPerMl;

    // Comparisons (using standard 10 sprays/ml for comparison sizes)
    const comparison10ml = bottleSizeMl / 10;
    const comparison30ml = bottleSizeMl / 30;
    const comparison50ml = bottleSizeMl / 50;
    const comparison100ml = bottleSizeMl / 100;

    // Format comparisons nicely
    const formatComparison = (value: number): string => {
      if (value >= 1) {
        const rounded = Math.round(value * 10) / 10;
        return rounded === 1 ? '1 bottle' : `${rounded} bottles`;
      } else {
        const percentage = Math.round(value * 100);
        return `${percentage}% of a bottle`;
      }
    };

    return {
      sprays_per_ml: `${spraysPerMl} sprays/ml`,
      total_sprays: `${totalSprays.toLocaleString()} sprays`,
      comparison_10ml: formatComparison(comparison10ml),
      comparison_30ml: formatComparison(comparison30ml),
      comparison_50ml: formatComparison(comparison50ml),
      comparison_100ml: formatComparison(comparison100ml),
    };
  },
  supportingContent: {
    intro:
      'Not all spray bottles are created equal. The number of sprays you get per milliliter depends on the atomizer type, and knowing your total spray count is essential for comparing bottle values, planning travel decants, and figuring out how long your collection will last. This converter gives you the exact spray math for any bottle size and atomizer type.',
    howToUse:
      'Enter your bottle size in milliliters (printed on the bottle or box) and select your atomizer type. Standard spray is the most common type found on designer and niche bottles. Fine mist atomizers (common on travel sprays) deliver smaller droplets, while heavy spray atomizers (some niche houses) deliver larger doses. The calculator shows total sprays and how your bottle compares to common sizes.',
    faq: [
      {
        question: 'What is the difference between atomizer types?',
        answer:
          'A standard atomizer delivers roughly 0.1 ml per spray (10 sprays per ml) and is found on most designer and niche bottles. Fine mist atomizers, common on travel sprays and some luxury brands, deliver about 0.08 ml per spray (12 sprays per ml) in a wider, lighter pattern. Heavy spray atomizers deliver about 0.125 ml per spray (8 sprays per ml) and are found on some artisan and vintage bottles. The difference matters because a "4 spray" recommendation assumes a standard atomizer.',
      },
      {
        question: 'How much cologne can I bring on a plane?',
        answer:
          'TSA allows up to 3.4 oz (100 ml) per container in your carry-on, and each container must fit in a single quart-size clear bag. For checked luggage, there is no liquid limit. The practical move is to use a 5-10 ml travel atomizer in your carry-on. This gives you 50-100 sprays, which is more than enough for any trip. Decant from your main bottle at home to keep your full-size bottle safe.',
      },
      {
        question: 'How do I refill a travel atomizer?',
        answer:
          'Most travel atomizers refill by removing the main bottle cap, placing the atomizer opening over the spray tube, and pumping up and down. Some higher-end travel atomizers have a twist-to-fill mechanism. Avoid pouring directly as you will lose fragrance to evaporation and spillage. If your main bottle has a removable sprayer head, you can also use a small funnel. Fill to about 80% capacity to allow for pressure changes during travel.',
      },
    ],
    relatedTools: [
      'cologne-spray-count-guide',
      'cologne-bottle-lifespan-calculator',
      'fragrance-finder',
    ],
  },
};
