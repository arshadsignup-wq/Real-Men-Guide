import type { CalculatorConfig } from '@/lib/types';

export const fadeTaperMaintenancePlannerConfig: CalculatorConfig = {
  fields: [
    {
      id: 'fade_type',
      label: 'Fade / Taper Type',
      type: 'select',
      defaultValue: 'mid_fade',
      options: [
        { label: 'Skin Fade (bald fade)', value: 'skin_fade' },
        { label: 'Low Fade', value: 'low_fade' },
        { label: 'Mid Fade', value: 'mid_fade' },
        { label: 'High Fade', value: 'high_fade' },
        { label: 'Taper', value: 'taper' },
      ],
      helpText: 'The type of fade determines how quickly it loses definition as it grows out.',
    },
    {
      id: 'freshness_level',
      label: 'Freshness Level',
      type: 'select',
      defaultValue: 'clean',
      options: [
        { label: 'Razor Sharp - I want it looking day-one fresh', value: 'razor_sharp' },
        { label: 'Clean - neat and well-maintained', value: 'clean' },
        { label: 'Casual - a little grow-out does not bother me', value: 'casual' },
      ],
      helpText: 'How strict you are about maintaining the crispness of your fade.',
    },
    {
      id: 'growth_rate',
      label: 'Hair Growth Rate',
      type: 'select',
      defaultValue: 'average',
      options: [
        { label: 'Slow - barely notice growth week to week', value: 'slow' },
        { label: 'Average - standard growth pace', value: 'average' },
        { label: 'Fast - noticeable growth within days', value: 'fast' },
      ],
      helpText: 'Faster growth means the fade gradient blurs sooner.',
    },
    {
      id: 'do_lineup_at_home',
      label: 'Do You Line Up at Home?',
      type: 'radio',
      defaultValue: 'no',
      options: [
        { label: 'Yes - I clean up my edges and lineup between visits', value: 'yes' },
        { label: 'No - I let the barber handle everything', value: 'no' },
      ],
      helpText: 'DIY lineups between barber visits can extend the time between full appointments.',
    },
  ],
  outputs: [
    {
      id: 'days_between_visits',
      label: 'Days Between Barber Visits',
      unit: 'days',
      format: 'number',
      highlight: true,
      description: 'How many days your fade will stay looking good before you need a touch-up.',
    },
    {
      id: 'visits_per_month',
      label: 'Visits Per Month',
      format: 'number',
      description: 'Average number of barber visits each month.',
    },
    {
      id: 'annual_visits',
      label: 'Annual Barber Visits',
      format: 'number',
      description: 'Total number of barber visits per year at this frequency.',
    },
    {
      id: 'lineup_tip',
      label: 'Lineup Advice',
      description: 'Personalized advice on maintaining your edges between visits.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const fadeType = inputs.fade_type as string;
    const freshness = inputs.freshness_level as string;
    const growthRate = inputs.growth_rate as string;
    const diyLineup = inputs.do_lineup_at_home as string;

    // Base days between visits by fade type (midpoint of range)
    let baseDays: number;
    switch (fadeType) {
      case 'skin_fade':
        baseDays = 8.5;
        break;
      case 'low_fade':
        baseDays = 12;
        break;
      case 'mid_fade':
        baseDays = 14;
        break;
      case 'high_fade':
        baseDays = 16;
        break;
      case 'taper':
        baseDays = 21;
        break;
      default:
        baseDays = 14;
    }

    // Growth rate adjustment
    if (growthRate === 'slow') {
      baseDays += 3;
    } else if (growthRate === 'fast') {
      baseDays -= 3;
    }

    // Freshness adjustment
    if (freshness === 'razor_sharp') {
      baseDays -= 3;
    } else if (freshness === 'casual') {
      baseDays += 3;
    }

    // DIY lineup extends time between full barber visits
    if (diyLineup === 'yes') {
      baseDays += 4;
    }

    // Minimum 5 days between visits
    const daysBetween = Math.max(5, Math.round(baseDays));

    const visitsPerMonth = Math.round((30 / daysBetween) * 10) / 10;
    const annualVisits = Math.round(365 / daysBetween);

    // Generate lineup tip based on selections
    let lineupTip: string;
    if (diyLineup === 'yes') {
      if (fadeType === 'skin_fade' || fadeType === 'low_fade') {
        lineupTip =
          'Great move doing your own lineup. For your ' +
          fadeType.replace('_', ' ') +
          ', focus on the hairline and temples with a trimmer. Avoid touching the fade gradient itself - that is best left to the barber. Clean up every 3-4 days to keep edges crisp.';
      } else {
        lineupTip =
          'Your DIY lineups are adding about 4 extra days between barber visits. Keep using a quality trimmer with a mirror setup for the back. Clean up your hairline, sideburns, and neckline every 4-5 days for the best results.';
      }
    } else {
      if (fadeType === 'skin_fade') {
        lineupTip =
          'Consider picking up a cheap trimmer to clean your hairline between visits. Even basic edge cleanup can stretch your skin fade by an extra 3-5 days, saving you one or two barber trips per month.';
      } else {
        lineupTip =
          'You can extend time between barber visits by learning to do a basic lineup at home. All you need is a cordless trimmer with a T-blade and a hand mirror. Clean up the hairline and sideburns every few days to keep things looking intentional.';
      }
    }

    return {
      days_between_visits: daysBetween,
      visits_per_month: visitsPerMonth,
      annual_visits: annualVisits,
      lineup_tip: lineupTip,
    };
  },
  supportingContent: {
    intro:
      'Fades and tapers look incredible on day one, but they grow out fast. The difference between a sharp fade and a fuzzy mess is knowing exactly when to rebook. This planner calculates your ideal maintenance schedule based on your specific fade type, growth rate, and standards, so you always look like you just left the barber chair.',
    howToUse:
      'Select your fade or taper type, how fresh you like to keep it, your hair growth speed, and whether you do edge cleanup at home. The planner will calculate how many days you can go between barber visits, how many times per month and year you will need to go, and give you practical lineup advice. Set a repeating reminder based on your result.',
    faq: [
      {
        question: 'What is the difference between a fade and a taper?',
        answer:
          'A taper gradually shortens hair from top to bottom and usually keeps some length at the shortest point. A fade takes the hair down much shorter, often to the skin. Within fades, the name refers to where the fade starts: a low fade begins above the ears, a mid fade starts at the temples, and a high fade starts near the top of the head. A skin fade goes all the way down to bare skin at the bottom.',
      },
      {
        question: 'Can I really do my own lineup at home?',
        answer:
          'Yes, and it is easier than most guys think. All you need is a cordless T-blade trimmer, a hand mirror for the back, and ten minutes. Start conservative by only removing obvious strays along your existing hairline. Do not try to reshape your hairline or create new angles - just maintain what your barber set up. After a few attempts, you will be saving yourself a trip to the barber every month.',
      },
      {
        question: 'What should I do between barber visits to maintain my fade?',
        answer:
          'Three things keep your fade looking fresh longer. First, keep your hairline and neckline clean with a trimmer every few days. Second, use a good pomade or styling product on top to maintain shape and direction. Third, sleep on a silk or satin pillowcase to reduce friction that causes frizz and uneven growth. These habits can easily add three to five extra good-looking days to any fade.',
      },
    ],
    relatedTools: [
      'haircut-frequency-calculator',
      'barber-instruction-generator',
      'hair-clipper-guard-converter',
      'beard-style-selector',
      'skincare-routine-builder',
    ],
  },
};
