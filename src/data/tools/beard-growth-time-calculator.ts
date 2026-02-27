import type { CalculatorConfig } from '@/lib/types';

export const beardGrowthTimeCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'current_length_mm',
      label: 'Current Beard Length',
      type: 'number',
      placeholder: 'e.g. 5',
      unit: 'mm',
      min: 0,
      max: 50,
      step: 1,
      helpText: 'Your current beard length in millimeters. Enter 0 if clean-shaven.',
    },
    {
      id: 'target_length_mm',
      label: 'Target Beard Length',
      type: 'number',
      placeholder: 'e.g. 25',
      unit: 'mm',
      min: 1,
      max: 100,
      step: 1,
      helpText: 'The beard length you want to reach in millimeters. Short beard is 3-10mm, medium is 10-20mm, full is 20mm+.',
    },
    {
      id: 'growth_rate',
      label: 'Growth Rate',
      type: 'select',
      defaultValue: 'average',
      options: [
        { label: 'Slow', value: 'slow' },
        { label: 'Average', value: 'average' },
        { label: 'Fast', value: 'fast' },
      ],
      helpText: 'How fast your facial hair typically grows. If unsure, choose average.',
    },
    {
      id: 'age_range',
      label: 'Age Range',
      type: 'select',
      defaultValue: '20_30',
      options: [
        { label: 'Under 20', value: 'under_20' },
        { label: '20-30', value: '20_30' },
        { label: '30-40', value: '30_40' },
        { label: 'Over 40', value: 'over_40' },
      ],
      helpText: 'Your age affects growth speed. Beard growth typically peaks between 25 and 35.',
    },
  ],
  outputs: [
    {
      id: 'total_days',
      label: 'Total Days to Goal',
      highlight: true,
      format: 'number',
      description: 'Estimated number of days to reach your target length.',
    },
    {
      id: 'total_weeks',
      label: 'Total Weeks',
      format: 'number',
      description: 'Estimated number of weeks to reach your target length.',
    },
    {
      id: 'checkpoint_1_week_mm',
      label: 'Length at 1 Week',
      unit: 'mm',
      description: 'Your estimated beard length after 1 week of growth.',
    },
    {
      id: 'checkpoint_1_month_mm',
      label: 'Length at 1 Month',
      unit: 'mm',
      description: 'Your estimated beard length after 1 month of growth.',
    },
    {
      id: 'checkpoint_3_month_mm',
      label: 'Length at 3 Months',
      unit: 'mm',
      description: 'Your estimated beard length after 3 months of growth.',
    },
    {
      id: 'awkward_phase_start',
      label: 'Awkward Phase',
      description: 'When the hardest part of the growth journey typically hits.',
    },
    {
      id: 'growth_tip',
      label: 'Growth Tip',
      description: 'Personalized advice based on your growth timeline.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const currentLength = Number(inputs.current_length_mm);
    const targetLength = Number(inputs.target_length_mm);
    const growthRate = String(inputs.growth_rate);
    const ageRange = String(inputs.age_range);

    if (targetLength <= 0 || targetLength <= currentLength) {
      return {
        total_days: 'Target must be greater than current length',
        total_weeks: '-',
        checkpoint_1_week_mm: '-',
        checkpoint_1_month_mm: '-',
        checkpoint_3_month_mm: '-',
        awkward_phase_start: '-',
        growth_tip: 'Enter a target length greater than your current length.',
      };
    }

    // Base daily growth rates in mm
    const rateMap: Record<string, number> = {
      slow: 0.3,
      average: 0.4,
      fast: 0.5,
    };

    const baseDailyRate = rateMap[growthRate] || 0.4;

    // Age factor adjustment
    const ageFactorMap: Record<string, number> = {
      under_20: 0.85,
      '20_30': 1.0,
      '30_40': 1.0,
      over_40: 0.9,
    };

    const ageFactor = ageFactorMap[ageRange] || 1.0;
    const dailyRate = baseDailyRate * ageFactor;

    // Calculate total days
    const growthNeeded = targetLength - currentLength;
    const totalDays = Math.ceil(growthNeeded / dailyRate);
    const totalWeeks = Math.round((totalDays / 7) * 10) / 10;

    // Checkpoints (growth from current length)
    const checkpoint1Week = Math.round((currentLength + dailyRate * 7) * 10) / 10;
    const checkpoint1Month = Math.round((currentLength + dailyRate * 30) * 10) / 10;
    const checkpoint3Month = Math.round((currentLength + dailyRate * 90) * 10) / 10;

    // Awkward phase typically happens between 10-20mm (2-6 weeks)
    let awkwardPhaseStart: string;
    if (currentLength >= 20) {
      awkwardPhaseStart = 'You are past the awkward phase. Keep going.';
    } else if (currentLength >= 10) {
      awkwardPhaseStart = 'You are in the awkward phase right now. Resist the urge to trim. Use beard oil and brush daily.';
    } else {
      const daysToAwkward = Math.ceil((10 - currentLength) / dailyRate);
      const daysToEndAwkward = Math.ceil((20 - currentLength) / dailyRate);
      awkwardPhaseStart = `Starts around day ${daysToAwkward} and lasts until about day ${daysToEndAwkward}. Stay strong during this period.`;
    }

    // Personalized growth tip based on timeline
    let growthTip: string;
    if (totalDays <= 14) {
      growthTip = 'This is a short grow. Avoid trimming entirely during this period. Use a light beard oil daily to prevent itch and keep the skin healthy underneath.';
    } else if (totalDays <= 45) {
      growthTip = 'You are looking at about a month of growth. The itchy phase hits around week 2 to 3. Use beard oil twice daily and resist shaping until you reach your target length. A boar bristle brush helps train the direction of growth.';
    } else if (totalDays <= 90) {
      growthTip = 'This is a serious commitment. You will go through an awkward phase where the beard looks messy and uneven. Do not touch it with a trimmer until at least 80% of the way to your goal. Focus on nutrition: protein, biotin, and zinc support healthy hair growth.';
    } else {
      growthTip = 'This is a long-term grow requiring patience and discipline. Schedule monthly barber visits to clean up the neckline and remove split ends without losing length. Invest in quality beard oil, balm, and a wooden comb. Your beard will look best after pushing through the toughest months.';
    }

    return {
      total_days: totalDays,
      total_weeks: `${totalWeeks} weeks`,
      checkpoint_1_week_mm: `${checkpoint1Week} mm`,
      checkpoint_1_month_mm: `${checkpoint1Month} mm`,
      checkpoint_3_month_mm: `${checkpoint3Month} mm`,
      awkward_phase_start: awkwardPhaseStart,
      growth_tip: growthTip,
    };
  },
  supportingContent: {
    intro:
      'Growing a beard is a patience game, and not knowing how long it will take is the number one reason men quit too early. This calculator estimates exactly how many days and weeks it will take to reach your target beard length based on your current length, natural growth speed, and age. It also maps out key checkpoints and warns you about the awkward phase so you know exactly what to expect on the journey.',
    howToUse:
      'Enter your current beard length in millimeters (0 if clean-shaven), your target length, your growth speed, and your age range. The calculator returns the total days to your goal, weekly and monthly checkpoints showing how your beard will progress, and tips for getting through the hardest parts of the grow. Use a ruler or caliper to measure your current length for the most accurate estimate.',
    faq: [
      {
        question: 'Does shaving make your beard grow back thicker or faster?',
        answer:
          'No, this is one of the most persistent grooming myths. Shaving cuts the hair at its thickest point, so when it grows back, the blunt tip feels coarser and looks darker. But the actual growth rate, thickness, and density of your beard is determined by genetics and hormones, not by shaving. If you want a fuller beard, the only solution is to let it grow and give it time.',
      },
      {
        question: 'What can I do about a patchy beard during the growth phase?',
        answer:
          'First, give it time. Many beards that look patchy at 2 weeks fill in significantly by week 6 to 8 as longer hairs cover sparse areas. Use a boar bristle brush daily to train hairs to lay over patchy spots. Beard oil keeps the skin healthy and supports growth. If patches persist after 3 months, consider styles that work with your growth pattern rather than fighting it. Minoxidil has shown results for some men, but consult a dermatologist before use.',
      },
      {
        question: 'Do supplements actually help beard growth?',
        answer:
          'Biotin, zinc, and vitamin D can support healthy hair growth if you are deficient in them, but they will not make a thin beard thick or speed up genetics. The biggest impact comes from a solid diet with enough protein, adequate sleep, regular exercise (which boosts testosterone), and managing stress levels. Supplements are a supplement, not a solution. Focus on the fundamentals first.',
      },
    ],
    relatedTools: [
      'beard-guard-style-match',
      'beard-trim-settings-calculator',
      'beard-style-selector',
    ],
  },
};
