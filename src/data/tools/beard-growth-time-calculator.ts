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
      'How long does it take to grow a beard? Not knowing the timeline is the top reason men quit too early. This beard growth calculator estimates exactly how many days and weeks to reach your target length based on current length, growth speed, and age. It maps out checkpoints and warns you about the awkward phase. Once you hit your goal, use our <a href="/beard-trim-settings-calculator">Beard Trim Settings Calculator</a> to maintain it.',
    howToUse:
      'Enter your current beard length in millimeters (0 if clean-shaven), target length, growth speed, and age range. The calculator returns total days, checkpoints, and tips for the hardest parts. Use a ruler or caliper for accurate measurement. Once you reach your target, our <a href="/beard-guard-style-match">Beard Guard Style Match</a> helps you maintain the length.',
    faq: [
      {
        question: 'Does shaving make your beard grow back thicker or faster?',
        answer:
          'No. According to <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/expert-answers/hair-removal/faq-20058427" target="_blank" rel="noopener">the Mayo Clinic</a>, shaving does not change growth rate, thickness, or density. The blunt tip just feels coarser. Growth rate is determined by genetics and hormones. If you want a fuller beard, the only solution is patience. Our <a href="/beard-style-selector">Beard Style Selector</a> helps you find a style that works with your natural growth pattern.',
      },
      {
        question: 'What can I do about a patchy beard during the growth phase?',
        answer:
          'Give it time. Many beards that look patchy at 2 weeks fill in by week 6-8 as longer hairs cover sparse areas. Use a boar bristle brush daily and beard oil to keep skin healthy. If patches persist after 3 months, consider styles that work with your growth pattern. Our <a href="/beard-style-selector">Beard Style Selector</a> recommends styles based on your coverage pattern.',
      },
      {
        question: 'Do supplements actually help beard growth?',
        answer:
          'Biotin, zinc, and vitamin D support hair growth only if you are deficient. The biggest impact comes from a solid diet with protein, adequate sleep, regular exercise, and stress management. The <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6380979/" target="_blank" rel="noopener">NIH confirms</a> that nutrition plays a role in hair health, but supplements cannot override genetics. Focus on fundamentals first.',
      },
    ],
    relatedTools: [
      'beard-guard-style-match',
      'beard-trim-settings-calculator',
      'beard-style-selector',
    ],
  },
};
