import type { CalculatorConfig } from '@/lib/types';

export const haircutFrequencyCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'hair_type',
      label: 'Hair Type',
      type: 'select',
      defaultValue: 'straight',
      options: [
        { label: 'Straight', value: 'straight' },
        { label: 'Wavy', value: 'wavy' },
        { label: 'Curly', value: 'curly' },
        { label: 'Coily', value: 'coily' },
      ],
      helpText: 'Your natural hair texture affects how quickly your cut loses its shape.',
    },
    {
      id: 'haircut_style',
      label: 'Haircut Style',
      type: 'select',
      defaultValue: 'short_crop',
      options: [
        { label: 'Buzz Cut', value: 'buzz_cut' },
        { label: 'Short Crop', value: 'short_crop' },
        { label: 'Medium Length', value: 'medium_length' },
        { label: 'Long', value: 'long' },
        { label: 'Fade', value: 'fade' },
      ],
      helpText: 'Shorter styles grow out faster and need more frequent visits.',
    },
    {
      id: 'growth_rate',
      label: 'Hair Growth Rate',
      type: 'select',
      defaultValue: 'average',
      options: [
        { label: 'Slow - takes forever to grow out', value: 'slow' },
        { label: 'Average - normal pace', value: 'average' },
        { label: 'Fast - grows out noticeably in a week', value: 'fast' },
      ],
      helpText: 'Average hair grows about half an inch per month.',
    },
    {
      id: 'freshness_preference',
      label: 'Freshness Preference',
      type: 'select',
      defaultValue: 'pretty_clean',
      options: [
        { label: 'Always Fresh - I want to look just-cut at all times', value: 'always_fresh' },
        { label: 'Pretty Clean - neat but not obsessive', value: 'pretty_clean' },
        { label: 'Relaxed - I do not mind a little grow-out', value: 'relaxed' },
      ],
      helpText: 'How strict you are about maintaining a crisp look.',
    },
  ],
  outputs: [
    {
      id: 'recommended_weeks',
      label: 'Recommended Weeks Between Cuts',
      unit: 'weeks',
      format: 'number',
      highlight: true,
      description: 'How often you should visit the barber to keep your style looking its best.',
    },
    {
      id: 'cuts_per_year',
      label: 'Haircuts Per Year',
      format: 'number',
      description: 'Estimated number of barber visits per year at this frequency.',
    },
    {
      id: 'annual_cost',
      label: 'Estimated Annual Cost',
      unit: '$',
      format: 'currency',
      description: 'Based on an average haircut cost of $30 including tip.',
    },
    {
      id: 'next_cut_day_estimate',
      label: 'Next Cut In About',
      unit: 'days',
      format: 'number',
      description: 'Approximate number of days until your next recommended haircut.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const style = inputs.haircut_style as string;
    const growthRate = inputs.growth_rate as string;
    const freshness = inputs.freshness_preference as string;

    // Base weeks by style (midpoint of range)
    let baseWeeks: number;
    switch (style) {
      case 'buzz_cut':
        baseWeeks = 2.5;
        break;
      case 'fade':
        baseWeeks = 2;
        break;
      case 'short_crop':
        baseWeeks = 4;
        break;
      case 'medium_length':
        baseWeeks = 6.5;
        break;
      case 'long':
        baseWeeks = 10;
        break;
      default:
        baseWeeks = 4;
    }

    // Growth rate adjustment
    if (growthRate === 'slow') {
      baseWeeks += 1;
    } else if (growthRate === 'fast') {
      baseWeeks -= 1;
    }

    // Freshness adjustment
    if (freshness === 'always_fresh') {
      baseWeeks -= 1;
    } else if (freshness === 'relaxed') {
      baseWeeks += 1;
    }

    // Minimum 1 week
    const recommendedWeeks = Math.max(1, Math.round(baseWeeks * 10) / 10);

    const cutsPerYear = Math.round(52 / recommendedWeeks);
    const avgCostPerCut = 30;
    const annualCost = cutsPerYear * avgCostPerCut;
    const nextCutDays = Math.round(recommendedWeeks * 7);

    return {
      recommended_weeks: Math.round(recommendedWeeks * 10) / 10,
      cuts_per_year: cutsPerYear,
      annual_cost: annualCost,
      next_cut_day_estimate: nextCutDays,
    };
  },
  supportingContent: {
    intro:
      'Knowing how often to get a haircut is the difference between always looking sharp and perpetually being two weeks overdue. This calculator factors in your hair type, style, growth rate, and personal standards to give you a personalized haircut schedule. Stop guessing and start planning your barber visits like a pro.',
    howToUse:
      'Select your hair type, current haircut style, how fast your hair grows, and how fresh you like to keep your look. The calculator will tell you exactly how many weeks to wait between cuts, how many times a year you will visit the barber, and what it will cost you annually. Use the result to set a recurring calendar reminder so you never miss your window.',
    faq: [
      {
        question: 'How accurate is this timing recommendation?',
        answer:
          'This calculator gives you a solid baseline, but your ideal timing may vary by a week in either direction depending on factors like seasonal growth changes, product use, and how your specific hair responds to growing out. Use the recommendation as a starting point and adjust after two or three cycles based on when you personally start feeling like your cut has lost its shape.',
      },
      {
        question: 'What are the signs I need a haircut?',
        answer:
          'The most reliable signs include: your hair no longer holds its styled shape by midday, the sides or back are starting to cover your ears or collar, your fade has visibly grown out and lost its gradient, you are using more product than usual to control your hair, and your neckline is looking fuzzy or undefined. If you notice two or more of these, it is time to book an appointment.',
      },
      {
        question: 'How can I save money on haircuts without looking worse?',
        answer:
          'Three strategies work well. First, learn to do basic neckline and sideburn cleanup at home between barber visits to extend each cut by a week or two. Second, find a barber school near you where supervised students give cuts at a steep discount. Third, pick a style with a longer grow-out window like a medium-length textured crop instead of a skin fade that demands biweekly visits.',
      },
    ],
    relatedTools: [
      'fade-taper-maintenance-planner',
      'barber-instruction-generator',
      'hair-clipper-guard-converter',
      'beard-style-selector',
      'skincare-routine-builder',
    ],
  },
};
