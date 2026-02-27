import type { CalculatorConfig } from '@/lib/types';

export const towelGymWashPlannerConfig: CalculatorConfig = {
  fields: [
    {
      id: 'bath_towel_uses',
      label: 'Bath Towel Uses Per Week',
      type: 'number',
      placeholder: 'e.g. 7',
      min: 1,
      max: 7,
      step: 1,
      helpText: 'How many times per week you use a bath towel (usually once per shower).',
    },
    {
      id: 'gym_sessions',
      label: 'Gym Sessions Per Week',
      type: 'number',
      placeholder: 'e.g. 4',
      min: 0,
      max: 7,
      step: 1,
      helpText: 'How many times per week you work out and use a gym towel.',
    },
    {
      id: 'hand_towel_frequency',
      label: 'Hand Towel Usage',
      type: 'select',
      defaultValue: 'moderate',
      options: [
        { label: 'Light (live alone, minimal use)', value: 'light' },
        { label: 'Moderate (regular use)', value: 'moderate' },
        { label: 'Heavy (frequent guests or cooking)', value: 'heavy' },
      ],
      helpText: 'How heavily your hand towels and kitchen towels are used.',
    },
    {
      id: 'household_size',
      label: 'Household Size',
      type: 'select',
      defaultValue: '1',
      options: [
        { label: '1 Person', value: '1' },
        { label: '2 People', value: '2' },
        { label: '3-4 People', value: '3_4' },
        { label: '5+ People', value: '5_plus' },
      ],
      helpText: 'The number of people in your household using towels.',
    },
  ],
  outputs: [
    {
      id: 'bath_towel_wash_days',
      label: 'Wash Bath Towels Every',
      highlight: true,
      description: 'How often to wash your bath towels.',
    },
    {
      id: 'gym_towel_wash',
      label: 'Gym Towel Wash',
      description: 'How often to wash gym towels.',
    },
    {
      id: 'hand_towel_days',
      label: 'Wash Hand Towels Every',
      description: 'How often to wash hand towels.',
    },
    {
      id: 'kitchen_towel_days',
      label: 'Wash Kitchen Towels Every',
      description: 'How often to wash kitchen towels.',
    },
    {
      id: 'weekly_towel_loads',
      label: 'Towel Loads Per Week',
      format: 'number',
      description: 'Estimated laundry loads dedicated to towels each week.',
    },
    {
      id: 'monthly_loads',
      label: 'Towel Loads Per Month',
      format: 'number',
      description: 'Estimated monthly laundry loads for all towels.',
    },
    {
      id: 'water_saving_tip',
      label: 'Water Saving Tip',
      description: 'How to minimize water and energy use while keeping towels fresh.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const bathUses = Number(inputs.bath_towel_uses) || 0;
    const gymSessions = Number(inputs.gym_sessions) || 0;
    const handFrequency = String(inputs.hand_towel_frequency);
    const householdSize = String(inputs.household_size);

    if (bathUses <= 0 && gymSessions <= 0) {
      return {
        bath_towel_wash_days: 'Enter your towel usage',
        gym_towel_wash: '-',
        hand_towel_days: '-',
        kitchen_towel_days: '-',
        weekly_towel_loads: '-',
        monthly_loads: '-',
        water_saving_tip: '-',
      };
    }

    // Bath towel: wash after 3 uses (standard recommendation)
    // 3 uses means if you shower daily, that is every 3 days
    const bathTowelUsesPerWash = 3;
    const bathTowelWashDays = bathUses > 0 ? Math.round((bathTowelUsesPerWash / bathUses) * 7) : 0;
    const clampedBathDays = Math.max(2, Math.min(7, bathTowelWashDays));

    // Gym towel: always wash after every single use
    const gymTowelWash = 'After every use (bacteria thrive in sweaty, damp towels)';

    // Hand towel days based on frequency
    let handTowelDays: number;
    if (handFrequency === 'light') {
      handTowelDays = 3;
    } else if (handFrequency === 'heavy') {
      handTowelDays = 1;
    } else {
      handTowelDays = 2;
    }

    // Kitchen towel days (similar to hand towels but slightly more frequent)
    let kitchenTowelDays: number;
    if (handFrequency === 'light') {
      kitchenTowelDays = 3;
    } else if (handFrequency === 'heavy') {
      kitchenTowelDays = 1;
    } else {
      kitchenTowelDays = 2;
    }

    // Calculate household multiplier for load estimation
    let householdMultiplier: number;
    if (householdSize === '1') {
      householdMultiplier = 1;
    } else if (householdSize === '2') {
      householdMultiplier = 1.8;
    } else if (householdSize === '3_4') {
      householdMultiplier = 3;
    } else {
      // 5_plus
      householdMultiplier = 4.5;
    }

    // Estimate weekly towel loads
    // Bath towels: each person generates about (bathUses / bathTowelUsesPerWash) washes per week, ~2 towels per load
    const bathTowelWashesPerWeek = (bathUses / bathTowelUsesPerWash) * householdMultiplier;
    const bathTowelLoadsPerWeek = bathTowelWashesPerWeek / 4; // ~4 towels per load

    // Gym towels: each session = 1 towel wash, gym towels are smaller so ~6 per load
    const gymTowelLoadsPerWeek = (gymSessions * householdMultiplier) / 6;

    // Hand and kitchen towels: roughly 1 small load per wash cycle per household
    const handKitchenLoadsPerWeek = 7 / handTowelDays / 3; // smaller loads, roughly

    const totalWeeklyLoads = Math.round((bathTowelLoadsPerWeek + gymTowelLoadsPerWeek + handKitchenLoadsPerWeek) * 10) / 10;
    const clampedWeeklyLoads = Math.max(0.5, totalWeeklyLoads);

    const monthlyLoads = Math.round(clampedWeeklyLoads * 4.3 * 10) / 10;

    // Water saving tip based on household size and frequency
    let waterSavingTip: string;
    if (householdSize === '1') {
      waterSavingTip = 'As a single-person household, combine towel loads with similar-colored sheets and pillowcases to run full loads instead of half-empty ones. Wash on warm (not hot) and use an extra spin cycle to reduce drying time and energy. Hang bath towels to dry fully between uses to prevent mildew and extend the time between washes.';
    } else if (householdSize === '2') {
      waterSavingTip = 'Designate one towel wash day per week where you combine all bath, hand, and kitchen towels into one or two loads. Use warm water (not hot) and avoid overstuffing the machine so towels actually get clean. Color-code towels by person so everyone uses their own and you can track when each needs washing.';
    } else {
      waterSavingTip = 'With a larger household, assign each person their own color-coded bath towels so individual towels last the full 3 uses before washing. Run full towel loads every 2-3 days instead of many small loads. Use warm water and an extra spin to reduce dryer time. Consider using a second towel rack or hooks to ensure towels dry fully between uses.';
    }

    return {
      bath_towel_wash_days: `${clampedBathDays} days`,
      gym_towel_wash: gymSessions > 0 ? gymTowelWash : 'N/A (no gym sessions)',
      hand_towel_days: `${handTowelDays} days`,
      kitchen_towel_days: `${kitchenTowelDays} days`,
      weekly_towel_loads: `${clampedWeeklyLoads}`,
      monthly_loads: `${monthlyLoads}`,
      water_saving_tip: waterSavingTip,
    };
  },
  supportingContent: {
    intro:
      'Towels are one of the most-used and least-thought-about items in your home. A damp towel hanging in a steamy bathroom is a breeding ground for bacteria, mildew, and funky smells. Most guys use their bath towels way too many times before washing, and gym towels often get stuffed in a bag and forgotten. This planner calculates a custom wash schedule for every towel type in your home so everything stays fresh without running your washing machine constantly.',
    howToUse:
      'Enter how many times per week you shower (bath towel uses), your gym sessions per week, how heavily your hand and kitchen towels are used, and your household size. The calculator computes how often to wash each type of towel, estimates your weekly and monthly laundry loads, and provides a water-saving tip tailored to your situation.',
    faq: [
      {
        question: 'Why do my towels smell musty even after washing?',
        answer:
          'Musty towel smell is caused by bacteria and mildew that survive the wash cycle. The fix: wash towels on the hottest setting the fabric allows with your regular detergent plus one cup of white vinegar (skip fabric softener this time). Run a second wash with half a cup of baking soda and no detergent. Dry completely on high heat. Going forward, always hang towels spread out to dry fully between uses and never leave wet towels in the washer or crumpled in a hamper.',
      },
      {
        question: 'Should I use fabric softener on towels?',
        answer:
          'No. Fabric softener coats towel fibers with a waxy residue that reduces absorbency over time and traps bacteria. Your towels will feel soft initially but become less effective at drying you and more prone to smelling. Instead, add half a cup of white vinegar to the rinse cycle once a month to strip buildup and keep towels naturally soft. Wool dryer balls in the dryer also help soften towels without chemicals.',
      },
      {
        question: 'Is hot or warm water better for washing towels?',
        answer:
          'Warm water (about 105-110F / 40-43C) is ideal for regular towel washes. It cleans effectively without excessive shrinkage or energy use. Use hot water (130-140F / 54-60C) for white towels or when someone in the house is sick to sanitize properly. Colored towels should stick to warm to prevent fading. Always wash towels separately from clothing to avoid lint transfer and to allow proper agitation.',
      },
    ],
    relatedTools: [
      'clean-sheets-calculator',
      'denim-care-schedule-calculator',
      'morning-routine-builder',
    ],
  },
};
