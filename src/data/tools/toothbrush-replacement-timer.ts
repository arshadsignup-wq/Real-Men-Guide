import { CalculatorConfig } from '@/lib/types';

export const toothbrushReplacementTimerConfig: CalculatorConfig = {
  fields: [
    {
      id: 'brush_type',
      label: 'Brush Type',
      type: 'select',
      defaultValue: 'manual',
      options: [
        { label: 'Manual Toothbrush', value: 'manual' },
        { label: 'Electric (Standard Head)', value: 'electric_standard' },
        { label: 'Electric (Premium Head)', value: 'electric_premium' },
      ],
      helpText: 'The type of toothbrush or replacement head you use.',
    },
    {
      id: 'brushing_frequency',
      label: 'Brushing Frequency',
      type: 'select',
      defaultValue: 'twice_daily',
      options: [
        { label: 'Once a Day', value: 'once_daily' },
        { label: 'Twice a Day', value: 'twice_daily' },
        { label: 'Three Times a Day', value: 'three_times' },
      ],
      helpText: 'How many times you typically brush per day.',
    },
    {
      id: 'bristle_condition',
      label: 'Current Bristle Condition',
      type: 'select',
      defaultValue: 'like_new',
      options: [
        { label: 'Like New (straight, firm)', value: 'like_new' },
        { label: 'Slightly Splayed (minor fanning)', value: 'slightly_splayed' },
        { label: 'Noticeably Worn (visible fanning)', value: 'noticeably_worn' },
        { label: 'Very Worn (flat, frayed)', value: 'very_worn' },
      ],
      helpText: 'Look at your bristles from the side. Are they still straight or fanning out?',
    },
    {
      id: 'last_replaced',
      label: 'When Did You Last Replace It?',
      type: 'select',
      defaultValue: 'last_month',
      options: [
        { label: 'This Week', value: 'this_week' },
        { label: 'About 1 Month Ago', value: 'last_month' },
        { label: 'About 2 Months Ago', value: '2_months' },
        { label: 'About 3 Months Ago', value: '3_months' },
        { label: "I Don't Remember", value: 'dont_remember' },
      ],
      helpText: 'Your best estimate of when you started using this brush or head.',
    },
  ],
  outputs: [
    {
      id: 'replace_in_days',
      label: 'Replace In',
      unit: 'days',
      format: 'number',
      highlight: true,
      description: 'Estimated days until you should replace your brush or head.',
    },
    {
      id: 'next_replace_date',
      label: 'Next Replacement Date',
      description: 'The approximate date you should swap to a new brush.',
    },
    {
      id: 'replacement_frequency_months',
      label: 'Recommended Replacement Frequency',
      unit: 'months',
      format: 'number',
      description: 'How often you should replace based on your usage pattern.',
    },
    {
      id: 'annual_replacements',
      label: 'Replacements Per Year',
      format: 'number',
      description: 'How many brushes or heads you will go through annually.',
    },
    {
      id: 'condition_warning',
      label: 'Current Condition Assessment',
      description: 'Assessment of your current bristle condition.',
    },
    {
      id: 'hygiene_tip',
      label: 'Hygiene Tip',
      description: 'A practical tip for maintaining brush hygiene.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const brushType = inputs.brush_type as string;
    const brushingFreq = inputs.brushing_frequency as string;
    const bristleCondition = inputs.bristle_condition as string;
    const lastReplaced = inputs.last_replaced as string;

    // Base lifespan in days by brush type
    let baseLifespanDays: number;
    if (brushType === 'manual') {
      baseLifespanDays = 90; // 3 months
    } else if (brushType === 'electric_standard') {
      baseLifespanDays = 90; // 3 months
    } else {
      baseLifespanDays = 105; // ~3.5 months for premium heads
    }

    // Adjust for brushing frequency
    // Twice daily is the baseline. Once daily extends life, three times shortens it.
    let frequencyMultiplier: number;
    if (brushingFreq === 'once_daily') {
      frequencyMultiplier = 1.25;
    } else if (brushingFreq === 'twice_daily') {
      frequencyMultiplier = 1.0;
    } else {
      frequencyMultiplier = 0.8;
    }

    const adjustedLifespanDays = Math.round(baseLifespanDays * frequencyMultiplier);

    // Days already used based on last_replaced
    let daysUsed: number;
    if (lastReplaced === 'this_week') {
      daysUsed = 3;
    } else if (lastReplaced === 'last_month') {
      daysUsed = 30;
    } else if (lastReplaced === '2_months') {
      daysUsed = 60;
    } else if (lastReplaced === '3_months') {
      daysUsed = 90;
    } else {
      // dont_remember - assume worst case, about 4 months
      daysUsed = 120;
    }

    // Condition-based override: if bristles are worn, replace sooner
    let conditionWarning: string;
    let replaceNow = false;

    if (bristleCondition === 'like_new') {
      conditionWarning = 'Your bristles look good. Keep brushing with proper technique and moderate pressure.';
    } else if (bristleCondition === 'slightly_splayed') {
      conditionWarning = 'Minor fanning detected. Your brush is still effective but nearing the end of its optimal life. Start shopping for a replacement.';
    } else if (bristleCondition === 'noticeably_worn') {
      conditionWarning = 'Your bristles are noticeably worn. Cleaning effectiveness is reduced by up to 30%. Replace within the next 1-2 weeks.';
      replaceNow = true;
    } else {
      conditionWarning = 'Your bristles are very worn and frayed. This brush is no longer cleaning effectively and may be irritating your gums. Replace it today.';
      replaceNow = true;
    }

    // Calculate days remaining
    let daysRemaining: number;
    if (replaceNow) {
      daysRemaining = bristleCondition === 'very_worn' ? 0 : 7;
    } else {
      daysRemaining = Math.max(0, adjustedLifespanDays - daysUsed);
    }

    // If bristle condition says replace but time says still good, trust bristle condition
    if (bristleCondition === 'noticeably_worn' && daysRemaining > 14) {
      daysRemaining = 14;
    }

    // Next replacement date
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + daysRemaining);
    const nextReplaceDateStr = nextDate.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    // Replacement frequency in months
    const replacementFreqMonths = Math.round((adjustedLifespanDays / 30) * 10) / 10;

    // Annual replacements
    const annualReplacements = Math.round((365 / adjustedLifespanDays) * 10) / 10;

    // Hygiene tips rotation based on brush type
    let hygieneTip: string;
    if (brushType === 'manual') {
      hygieneTip = 'Rinse your brush thoroughly after each use and store it upright to air dry. Never share your toothbrush, and replace it after any illness.';
    } else if (brushType === 'electric_standard') {
      hygieneTip = 'Remove the head after brushing to let both the head and handle dry separately. This prevents moisture buildup and bacterial growth at the connection point.';
    } else {
      hygieneTip = 'Premium brush heads are worth the investment, but only if replaced on schedule. Set a calendar reminder. Some electric brushes have built-in indicators that fade when it is time to replace.';
    }

    return {
      replace_in_days: daysRemaining,
      next_replace_date: daysRemaining === 0 ? 'Replace today' : nextReplaceDateStr,
      replacement_frequency_months: replacementFreqMonths,
      annual_replacements: annualReplacements,
      condition_warning: conditionWarning,
      hygiene_tip: hygieneTip,
    };
  },
  supportingContent: {
    intro:
      'Most men use their toothbrush way longer than they should. The ADA recommends replacing your toothbrush or electric brush head every 3 to 4 months, but factors like brushing frequency, pressure, and bristle condition all affect the real timeline. This calculator assesses your current brush situation and tells you exactly when to replace it, so you are always brushing with an effective tool.',
    howToUse:
      'Select your brush type, how often you brush each day, the current condition of your bristles, and when you last replaced your brush or head. The calculator will estimate how many days you have left before a replacement is needed, give you a target date, and assess your current bristle condition. If your bristles are already worn, it will tell you to replace immediately regardless of the timeline.',
    faq: [
      {
        question: 'Why does the ADA recommend replacing every 3 months?',
        answer:
          'After about 3 months of regular use, toothbrush bristles become frayed and lose their stiffness. Research shows that worn bristles are significantly less effective at removing plaque, especially along the gumline and between teeth. The 3-month guideline is based on average twice-daily brushing with normal pressure. If you brush harder or more often, your bristles may wear out sooner.',
      },
      {
        question: 'Should I replace my toothbrush after being sick?',
        answer:
          'Yes. After recovering from an illness like the flu, a cold, or a mouth infection, replace your toothbrush even if it is not yet 3 months old. Bacteria and viruses can linger on bristles and potentially reinfect you. This applies to both manual toothbrushes and electric brush heads.',
      },
      {
        question: 'Do electric toothbrush heads last longer than manual brushes?',
        answer:
          'Standard electric brush heads generally last about the same 3 months as manual brushes. Premium heads with indicator bristles that fade over time may last slightly longer, around 3 to 4 months, because they are often made with higher-quality materials. However, the smaller head size means the bristles do more work per brushing session, so follow the same replacement schedule.',
      },
    ],
    relatedTools: ['skincare-routine-builder', 'morning-routine-builder', 'haircut-frequency-calculator'],
  },
};
