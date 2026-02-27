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
      'A damp towel in a steamy bathroom is a breeding ground for <a href="https://www.cdc.gov/hygiene/about/when-and-how-to-wash-your-hands.html" target="_blank" rel="noopener">bacteria</a>, mildew, and funky smells. Most guys reuse bath towels too many times and stuff gym towels in a bag and forget them. This towel and gym towel wash planner calculates a custom schedule for every towel type so everything stays fresh. Pair it with our <a href="/clean-sheets-calculator">Clean Sheets Calculator</a> for a complete home hygiene routine.',
    howToUse:
      'Enter your weekly shower count (bath towel uses), gym sessions, hand and kitchen towel usage, and household size. The planner computes how often to wash each towel type, estimates weekly and monthly laundry loads, and provides a water-saving tip. Combine with our <a href="/denim-care-schedule-calculator">Denim Care Calculator</a> to organize all your laundry in one plan.',
    faq: [
      {
        question: 'Why do my towels smell musty even after washing?',
        answer:
          'Musty smell comes from bacteria and mildew surviving the wash. Fix it: wash on the hottest setting with detergent plus one cup of white vinegar (skip fabric softener). Run a second wash with half a cup of baking soda, no detergent. Dry completely on high heat. Going forward, always hang towels spread out to dry fully and never leave wet towels in the washer.',
      },
      {
        question: 'Should I use fabric softener on towels?',
        answer:
          'No. Fabric softener coats fibers with a waxy residue that <a href="https://www.goodhousekeeping.com/home/cleaning/a25615963/are-fabric-softeners-bad/" target="_blank" rel="noopener">reduces absorbency</a> and traps bacteria. Your towels feel soft initially but become less effective and more prone to odor. Instead, add half a cup of white vinegar to the rinse cycle monthly to strip buildup. Wool dryer balls help soften without chemicals.',
      },
      {
        question: 'Is hot or warm water better for washing towels?',
        answer:
          'Warm water (105-110F / 40-43C) is ideal for regular washes — effective cleaning without shrinkage. Use hot water (130-140F) for white towels or when someone is sick. Colored towels should stick to warm to prevent fading. Always wash towels separately from clothing to avoid lint transfer and ensure proper agitation.',
      },
    ],
    relatedTools: [
      'clean-sheets-calculator',
      'denim-care-schedule-calculator',
      'morning-routine-builder',
    ],
  },
};
