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
      'How often should men get a haircut? The answer depends on your hair type, style, and growth rate. This calculator builds a personalized haircut schedule so you stop guessing and start planning barber visits like a pro. If you rock a fade, also check our <a href="/fade-taper-maintenance-planner">Fade & Taper Maintenance Planner</a> for tighter scheduling.',
    howToUse:
      'Select your hair type, haircut style, growth rate, and freshness preference. The calculator tells you how many weeks to wait between cuts, annual visits, and yearly cost. Use our <a href="/barber-instruction-generator">Barber Instruction Generator</a> to walk into your next appointment with clear instructions.',
    faq: [
      {
        question: 'How accurate is this timing recommendation?',
        answer:
          'This calculator gives a solid baseline, but your timing may vary by a week depending on seasonal growth changes and product use. Use it as a starting point and adjust after two or three cycles. For fade-specific timing, our <a href="/fade-taper-maintenance-planner">Fade & Taper Maintenance Planner</a> offers more precision.',
      },
      {
        question: 'What are the signs I need a haircut?',
        answer:
          'Key signs include: hair no longer holding its shape by midday, sides covering your ears, a fade losing its gradient, needing more product than usual, and a fuzzy neckline. If you notice two or more, book an appointment. Our <a href="/barber-instruction-generator">Barber Instruction Generator</a> helps you communicate exactly what you want when you go.',
      },
      {
        question: 'How can I save money on haircuts without looking worse?',
        answer:
          'Three strategies work well. First, learn basic neckline cleanup at home to extend each cut by a week. Second, find a barber school near you for discounted cuts. Third, pick a style with a longer grow-out window. Our <a href="/hair-clipper-guard-converter">Hair Clipper Guard Converter</a> helps you understand guard sizes if you trim at home.',
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
