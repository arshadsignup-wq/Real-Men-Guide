import type { CalculatorConfig } from '@/lib/types';

export const cologneBottleLifespanCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'bottle_size_ml',
      label: 'Bottle Size',
      type: 'select',
      defaultValue: '100',
      options: [
        { label: '10 ml (Travel / Decant)', value: '10' },
        { label: '30 ml (1 oz)', value: '30' },
        { label: '50 ml (1.7 oz)', value: '50' },
        { label: '75 ml (2.5 oz)', value: '75' },
        { label: '100 ml (3.4 oz)', value: '100' },
        { label: '125 ml (4.2 oz)', value: '125' },
        { label: '150 ml (5 oz)', value: '150' },
        { label: '200 ml (6.7 oz)', value: '200' },
      ],
      helpText: 'Select the size printed on your bottle.',
    },
    {
      id: 'sprays_per_day',
      label: 'Sprays Per Day',
      type: 'number',
      placeholder: 'e.g. 4',
      min: 1,
      max: 15,
      step: 1,
      defaultValue: 4,
      helpText: 'How many sprays you typically apply each time you wear it.',
    },
    {
      id: 'days_per_week',
      label: 'Days Per Week',
      type: 'number',
      placeholder: 'e.g. 5',
      min: 1,
      max: 7,
      step: 1,
      defaultValue: 5,
      helpText: 'How many days per week you wear this fragrance.',
    },
  ],
  outputs: [
    {
      id: 'total_sprays_in_bottle',
      label: 'Total Sprays in Bottle',
      description: 'Estimated total number of sprays in your bottle.',
    },
    {
      id: 'months_until_empty',
      label: 'Months Until Empty',
      highlight: true,
      description: 'How many months your bottle will last at your usage rate.',
    },
    {
      id: 'days_until_empty',
      label: 'Days Until Empty',
      description: 'Total number of days until the bottle runs out.',
    },
    {
      id: 'estimated_empty_date',
      label: 'Estimated Empty Date',
      description: 'The approximate date you will need a new bottle.',
    },
    {
      id: 'cost_per_day_tip',
      label: 'Value Tip',
      description: 'Perspective on getting the best value from your fragrance.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const bottleSizeMl = Number(inputs.bottle_size_ml);
    const spraysPerDay = Number(inputs.sprays_per_day);
    const daysPerWeek = Number(inputs.days_per_week);

    if (!bottleSizeMl || !spraysPerDay || !daysPerWeek || spraysPerDay <= 0 || daysPerWeek <= 0) {
      return {
        total_sprays_in_bottle: '-',
        months_until_empty: '-',
        days_until_empty: '-',
        estimated_empty_date: 'Enter valid values above',
        cost_per_day_tip: '-',
      };
    }

    // Standard atomizer: ~10 sprays per ml
    const spraysPerMl = 10;
    const totalSprays = bottleSizeMl * spraysPerMl;

    // Weekly usage
    const weeklySprays = spraysPerDay * daysPerWeek;

    // Weeks until empty
    const weeksUntilEmpty = totalSprays / weeklySprays;

    // Convert to days
    const daysUntilEmpty = Math.round(weeksUntilEmpty * 7);

    // Convert to months (average 30.44 days per month)
    const monthsUntilEmpty = daysUntilEmpty / 30.44;
    const monthsRounded = Math.round(monthsUntilEmpty * 10) / 10;

    // Estimated empty date
    const today = new Date();
    const emptyDate = new Date(today.getTime() + daysUntilEmpty * 24 * 60 * 60 * 1000);
    const emptyDateStr = emptyDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    // Cost tip based on size
    let costTip: string;
    if (bottleSizeMl <= 10) {
      costTip =
        'Decants and travel sizes are great for testing a fragrance before committing to a full bottle. Cost per ml is higher, but the low commitment makes it worthwhile.';
    } else if (bottleSizeMl <= 50) {
      costTip =
        'Mid-size bottles are the sweet spot if you rotate between multiple fragrances. You get a fair price per ml without the risk of the scent expiring before you finish it.';
    } else if (bottleSizeMl <= 100) {
      costTip =
        'The 100 ml bottle is the most popular size and usually the best value per ml. At your usage rate, it should last well within the 3-5 year shelf life of most fragrances.';
    } else {
      costTip =
        'Large bottles (125 ml+) offer the lowest cost per ml but make sure you can finish it within 3-5 years. Fragrances degrade over time, especially if stored improperly. Only go big on signatures you know you love.';
    }

    return {
      total_sprays_in_bottle: `${totalSprays.toLocaleString()} sprays`,
      months_until_empty: `${monthsRounded} months`,
      days_until_empty: `${daysUntilEmpty} days`,
      estimated_empty_date: emptyDateStr,
      cost_per_day_tip: costTip,
    };
  },
  supportingContent: {
    intro:
      'How long does a bottle of cologne last? Stop guessing and start planning. This calculator estimates your fragrance bottle lifespan based on size and daily usage so you know when to restock. Not sure how many sprays to use? Our <a href="/cologne-spray-count-guide">Cologne Spray Count Guide</a> dials in the perfect amount for any occasion.',
    howToUse:
      'Select your bottle size, enter daily sprays, and how many days per week you wear the fragrance. The calculator shows total sprays, months until empty, and the estimated run-out date. Use our <a href="/cologne-sprays-per-ml-converter">Sprays per ML Converter</a> to compare bottle values before your next purchase.',
    faq: [
      {
        question: 'Does cologne expire?',
        answer:
          'Most fragrances last 3-5 years when stored properly, though some last over a decade. Signs of expiration include darkening color, a sour smell, or noticeably weaker scent. Heat, light, and humidity accelerate degradation. If your cologne smells off, replace it. Our <a href="/fragrance-finder">Fragrance Finder</a> helps you discover a worthy replacement.',
      },
      {
        question: 'How should I store cologne to make it last longer?',
        answer:
          'Store bottles upright in a cool, dark, dry place like a dresser drawer or closet shelf. Avoid the bathroom (humidity) and windowsills (sunlight breaks down fragrance molecules). Keep the cap on to prevent <a href="https://en.wikipedia.org/wiki/Oxidation" target="_blank" rel="noopener">oxidation</a>. Never store cologne in a car. Proper storage can extend bottle life by years.',
      },
      {
        question: 'Is decanting worth it?',
        answer:
          'Absolutely. Decanting protects your main bottle from light and air exposure, and a 5-10 ml travel spray fits in your pocket for reapplication. Use glass atomizers rather than plastic, which can interact with fragrance oils. Our <a href="/cologne-sprays-per-ml-converter">Sprays per ML Converter</a> helps you figure out exactly how many sprays fit in your travel size.',
      },
    ],
    relatedTools: [
      'cologne-spray-count-guide',
      'cologne-sprays-per-ml-converter',
      'fragrance-finder',
      'skincare-routine-builder',
    ],
  },
};
