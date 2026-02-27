import type { CalculatorConfig } from '@/lib/types';

export const cleanSheetsCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'sleep_situation',
      label: 'Sleep Situation',
      type: 'select',
      defaultValue: 'alone',
      options: [
        { label: 'Sleep Alone', value: 'alone' },
        { label: 'With a Partner', value: 'with_partner' },
        { label: 'With a Pet', value: 'with_pet' },
      ],
      helpText: 'Sharing your bed increases body oils, sweat, and hair on the sheets.',
    },
    {
      id: 'sweat_level',
      label: 'How Much Do You Sweat at Night?',
      type: 'select',
      defaultValue: 'moderate',
      options: [
        { label: 'Light (rarely wake up damp)', value: 'light' },
        { label: 'Moderate (occasionally noticeable)', value: 'moderate' },
        { label: 'Heavy (often wake up damp)', value: 'heavy' },
      ],
      helpText: 'Night sweating is one of the biggest factors in sheet freshness.',
    },
    {
      id: 'shower_before_bed',
      label: 'Do You Shower Before Bed?',
      type: 'radio',
      defaultValue: 'no',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No (morning shower or skip)', value: 'no' },
      ],
      helpText: 'Showering before bed means you bring less dirt, oil, and sweat to the sheets.',
    },
    {
      id: 'allergies',
      label: 'Do You Have Allergies or Sensitive Skin?',
      type: 'radio',
      defaultValue: 'no',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      helpText: 'Dust mites and allergens build up in sheets over time.',
    },
    {
      id: 'climate',
      label: 'Your Climate',
      type: 'select',
      defaultValue: 'moderate',
      options: [
        { label: 'Cool / Dry', value: 'cool' },
        { label: 'Moderate', value: 'moderate' },
        { label: 'Hot / Humid', value: 'hot' },
      ],
      helpText: 'Hot and humid climates make sheets dirtier faster.',
    },
  ],
  outputs: [
    {
      id: 'wash_every_days',
      label: 'Wash Your Sheets Every',
      highlight: true,
      description: 'How often you should wash your bed sheets.',
    },
    {
      id: 'washes_per_month',
      label: 'Washes Per Month',
      format: 'number',
      description: 'Approximate number of sheet washes per month.',
    },
    {
      id: 'pillow_case_days',
      label: 'Wash Pillowcases Every',
      description: 'Pillowcases should be washed more frequently than sheets.',
    },
    {
      id: 'annual_washes',
      label: 'Annual Washes',
      format: 'number',
      description: 'Total sheet washes per year to budget for detergent and water.',
    },
    {
      id: 'laundry_tip',
      label: 'Laundry Tip',
      description: 'Best practices for washing your sheets.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const sleepSituation = String(inputs.sleep_situation);
    const sweatLevel = String(inputs.sweat_level);
    const showerBefore = String(inputs.shower_before_bed);
    const allergies = String(inputs.allergies);
    const climate = String(inputs.climate);

    // Base interval: 7 days
    let days = 7;

    // Sleep situation adjustments
    if (sleepSituation === 'with_partner') {
      days -= 1;
    } else if (sleepSituation === 'with_pet') {
      days -= 2;
    }

    // Sweat level adjustments
    if (sweatLevel === 'light') {
      days += 1;
    } else if (sweatLevel === 'heavy') {
      days -= 2;
    }
    // moderate = no change

    // Shower before bed
    if (showerBefore === 'yes') {
      days += 1;
    } else {
      days -= 1;
    }

    // Allergies
    if (allergies === 'yes') {
      days -= 2;
    }

    // Climate
    if (climate === 'cool') {
      days += 1;
    } else if (climate === 'hot') {
      days -= 1;
    }

    // Clamp to reasonable range: 3 to 14 days
    days = Math.max(3, Math.min(14, days));

    // Calculate related values
    const washesPerMonth = Math.round((30 / days) * 10) / 10;
    const annualWashes = Math.round(365 / days);

    // Pillowcase frequency: 1-2 days less than sheets, min 2 days
    const pillowCaseDays = Math.max(2, days - 2);

    // Laundry tip based on the calculated frequency
    let laundryTip: string;
    if (days <= 4) {
      laundryTip = 'At this frequency, have at least two sets of sheets so you always have a clean set ready. Wash on warm (not hot) to kill bacteria without wearing out the fabric. Use a gentle detergent and skip the fabric softener, which can trap oils and reduce breathability.';
    } else if (days <= 7) {
      laundryTip = 'A weekly wash is the sweet spot for most people. Wash on warm with a quality detergent. To keep sheets feeling crisp, add half a cup of white vinegar to the rinse cycle once a month to strip detergent buildup. Dry on medium heat and remove promptly to avoid wrinkles.';
    } else {
      laundryTip = 'You can stretch your wash cycle a bit, but do not skip it. To extend freshness between washes, air out your bed each morning by pulling back the covers for 15-20 minutes before making the bed. Use a mattress protector to reduce what reaches your sheets. Wash on warm when you do launder them.';
    }

    return {
      wash_every_days: `${days} days`,
      washes_per_month: `${washesPerMonth}`,
      pillow_case_days: `${pillowCaseDays} days`,
      annual_washes: `${annualWashes}`,
      laundry_tip: laundryTip,
    };
  },
  supportingContent: {
    intro:
      'How often should you wash your sheets? It depends on more than you think. Your sleep situation, sweat level, showering habits, allergies, and climate all factor in. Most guys wait way too long (the average is every 24 days, which is genuinely gross). This calculator gives you a personalized schedule based on your actual lifestyle so your bed stays fresh, smells good, and does not become a petri dish of dead skin cells and dust mites.',
    howToUse:
      'Answer the five questions about your sleeping habits and environment. The calculator computes your ideal sheet-washing frequency in days, along with how often to wash your pillowcases (they need it more often since they collect face oils and drool), your monthly and annual wash count, and a practical laundry tip. Use the results to set a recurring reminder on your phone.',
    faq: [
      {
        question: 'Should I wash sheets in hot or cold water?',
        answer:
          'Warm water (around 130F / 54C) is the best balance. It kills most bacteria and dust mites without causing excessive shrinkage or fading. Hot water is only necessary if you are sick or dealing with a bed bug situation. Cold water saves energy but does not sanitize as effectively. If you use cold water, add an antibacterial laundry additive and dry on high heat to compensate.',
      },
      {
        question: 'Why should I wash my pillowcase more often than my sheets?',
        answer:
          'Your pillowcase absorbs facial oils, drool, sweat, hair products, and skin cells every night, far more concentrated than what contacts your fitted sheet. This buildup can cause acne breakouts, clogged pores, and worsen allergies. Washing or swapping your pillowcase every 2-4 days is one of the simplest things you can do for clearer skin. Some guys keep a stack of cheap pillowcases to swap out easily.',
      },
      {
        question: 'Do I need a mattress protector?',
        answer:
          'Absolutely yes. A waterproof, breathable mattress protector stops sweat, body oils, dead skin, and spills from soaking into your mattress, which is nearly impossible to clean. It also blocks dust mites and allergens. A good mattress protector extends the life of your mattress by years and makes your sleep environment significantly cleaner. Wash the protector monthly.',
      },
    ],
    relatedTools: [
      'towel-gym-wash-planner',
      'denim-care-schedule-calculator',
      'morning-routine-builder',
    ],
  },
};
