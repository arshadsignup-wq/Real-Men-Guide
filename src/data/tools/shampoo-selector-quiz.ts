import type { QuizConfig } from '@/lib/types';

export const shampooSelectorQuizConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'My ideal shampoo type is: {result}! Find yours:',
  questions: [
    {
      id: 'hair_type',
      question: 'What is your hair type?',
      subtitle: 'Your hair texture determines how moisture and product interact with your strands.',
      options: [
        {
          label: 'Straight - smooth, lies flat, tends to show oil quickly',
          value: 'straight',
          points: {
            'clarifying-shampoo': 2,
            'moisturizing-shampoo': 0,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
        {
          label: 'Wavy - some natural bend and body',
          value: 'wavy',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
        {
          label: 'Curly - defined spirals or ringlets',
          value: 'curly',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 3,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Coily - tight coils, kinks, or z-pattern curls',
          value: 'coily',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 3,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 0,
          },
        },
      ],
    },
    {
      id: 'scalp_concern',
      question: 'What is your main scalp concern?',
      subtitle: 'Scalp health is the foundation of good hair. Address this first.',
      options: [
        {
          label: 'Oily - greasy by the end of the day, flat roots',
          value: 'oily',
          points: {
            'clarifying-shampoo': 3,
            'moisturizing-shampoo': 0,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Dry - tight, itchy, or flaky without visible dandruff',
          value: 'dry',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 3,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Dandruff - visible white or yellow flakes, persistent itch',
          value: 'dandruff',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 0,
            'anti-dandruff-shampoo': 3,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 0,
          },
        },
        {
          label: 'Sensitive - reacts to products, redness, easily irritated',
          value: 'sensitive',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 3,
          },
        },
        {
          label: 'None - my scalp feels healthy and balanced',
          value: 'none',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
      ],
    },
    {
      id: 'hair_concern',
      question: 'What is your biggest hair concern?',
      subtitle: 'The right shampoo can actively address your main hair issue.',
      options: [
        {
          label: 'Thinning - noticeable hair loss, receding, or less volume than before',
          value: 'thinning',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 0,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 3,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Damage - dry, brittle, or breaking from heat, color, or sun exposure',
          value: 'damage',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 3,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Frizz - unruly, puffy, hard to control especially in humidity',
          value: 'frizz',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 3,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 0,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'None - my hair is in good shape and I just want to maintain it',
          value: 'none',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 0,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
      ],
    },
    {
      id: 'wash_frequency',
      question: 'How often do you wash your hair?',
      subtitle: 'Wash frequency affects which shampoo formula works best for you.',
      options: [
        {
          label: 'Daily - every day or almost every day',
          value: 'daily',
          points: {
            'clarifying-shampoo': 0,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 3,
          },
        },
        {
          label: 'A few times a week - every 2-3 days',
          value: 'few_times',
          points: {
            'clarifying-shampoo': 2,
            'moisturizing-shampoo': 2,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Weekly - once a week or less',
          value: 'weekly',
          points: {
            'clarifying-shampoo': 2,
            'moisturizing-shampoo': 2,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 0,
          },
        },
      ],
    },
    {
      id: 'budget',
      question: 'What is your budget for shampoo?',
      subtitle: 'Great shampoo exists at every price point. This helps us match recommendations to your wallet.',
      options: [
        {
          label: 'Drugstore - under $10 per bottle',
          value: 'drugstore',
          points: {
            'clarifying-shampoo': 2,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 2,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
        {
          label: 'Mid-range - $10-25 per bottle',
          value: 'mid',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 2,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 2,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Premium - $25+ per bottle',
          value: 'premium',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 2,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 2,
            'gentle-daily-shampoo': 1,
          },
        },
      ],
    },
    {
      id: 'scent_preference',
      question: 'What is your scent preference?',
      subtitle: 'Shampoo fragrance lingers in your hair. Pick what works with your style.',
      options: [
        {
          label: 'Unscented - no fragrance, minimal ingredients',
          value: 'unscented',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 2,
          },
        },
        {
          label: 'Subtle - light, clean scent that fades quickly',
          value: 'subtle',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 2,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 1,
          },
        },
        {
          label: 'Strong - noticeable, long-lasting fragrance',
          value: 'strong',
          points: {
            'clarifying-shampoo': 1,
            'moisturizing-shampoo': 1,
            'anti-dandruff-shampoo': 1,
            'thickening-shampoo': 1,
            'gentle-daily-shampoo': 1,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'clarifying-shampoo',
      title: 'Clarifying Shampoo',
      description:
        'Your oily scalp and product usage call for a clarifying shampoo that deep-cleans without being overly harsh. Clarifying shampoos use stronger surfactants to cut through oil, product buildup, and environmental grime that regular shampoos leave behind. Think of it as a reset button for your hair. The key is not using it every single wash - rotate it with a gentler daily shampoo to avoid over-stripping.',
      tips: [
        'Look for shampoos labeled "clarifying," "deep cleansing," or "purifying" with ingredients like tea tree oil, charcoal, or salicylic acid.',
        'Use your clarifying shampoo 1-2 times per week max, and use a gentle daily shampoo for your other washes.',
        'Always follow a clarifying wash with conditioner - these shampoos strip moisture along with oil and buildup.',
        'If your hair feels squeaky-clean and stiff after washing, that is the clarifying shampoo working. The conditioner step is not optional.',
        'Pay attention to your scalp after a few weeks. If oil production decreases, you can gradually reduce clarifying washes to once a week or even biweekly.',
      ],
    },
    {
      id: 'moisturizing-shampoo',
      title: 'Moisturizing Shampoo',
      description:
        'Your hair type and concerns point to a moisturizing shampoo that cleanses gently while adding hydration. Moisturizing shampoos are formulated with ingredients like shea butter, coconut oil, argan oil, and glycerin that replenish moisture while washing. They are typically sulfate-free or use mild surfactants that clean without stripping. For curly, coily, dry, or damaged hair, this type of shampoo will transform your hair health.',
      tips: [
        'Look for shampoos with hydrating ingredients like shea butter, argan oil, coconut oil, aloe vera, or hyaluronic acid in the first five ingredients.',
        'Avoid shampoos with sulfates (sodium lauryl sulfate, sodium laureth sulfate) as they strip the natural oils your hair needs.',
        'Apply shampoo to your scalp only and let it rinse through the lengths - scrubbing the ends causes unnecessary dryness and friction.',
        'Follow with a rich conditioner and consider a deep conditioning mask once a week for maximum moisture.',
        'If you have curly or coily hair, look for shampoos specifically formulated for textured hair - they have the right balance of cleansing and conditioning.',
      ],
    },
    {
      id: 'anti-dandruff-shampoo',
      title: 'Anti-Dandruff Shampoo',
      description:
        'Dandruff is your primary concern, and the right anti-dandruff shampoo will make a visible difference within two to four weeks. Dandruff is caused by a yeast-like fungus called Malassezia that feeds on scalp oils. Effective anti-dandruff shampoos contain active ingredients that target this fungus directly. The most important thing is consistency - you need to use it regularly for the active ingredients to keep working.',
      tips: [
        'Look for one of these proven active ingredients: zinc pyrithione, ketoconazole, selenium sulfide, or coal tar. Each works differently, so if one does not work after 4 weeks, try another.',
        'Leave the shampoo on your scalp for 3-5 minutes before rinsing. The active ingredients need contact time to work effectively.',
        'Use your anti-dandruff shampoo 2-3 times per week. On off days, use a gentle regular shampoo to keep your hair feeling good.',
        'Even after your dandruff clears up, continue using the anti-dandruff shampoo at least once a week as maintenance. Stopping completely often leads to a return of symptoms.',
        'Avoid scratching your scalp even if it itches. Scratching irritates the skin and can make flaking worse. The shampoo will address the itch if you give it time.',
      ],
    },
    {
      id: 'thickening-shampoo',
      title: 'Thickening Shampoo',
      description:
        'For thinning hair, a thickening shampoo can make a real difference in how your hair looks and feels. These shampoos work in two ways: they coat individual strands with volumizing polymers to make each hair appear thicker, and many contain ingredients like biotin, caffeine, niacin, and saw palmetto that support scalp health and may slow hair loss. They will not regrow hair, but they will maximize what you have.',
      tips: [
        'Look for shampoos containing biotin, caffeine, niacin (vitamin B3), saw palmetto, or ketoconazole - these ingredients have research supporting their benefit for thinning hair.',
        'Avoid heavy, moisturizing shampoos that weigh hair down. Thickening shampoos are formulated to be lightweight and add volume at the roots.',
        'Massage the shampoo into your scalp for 2-3 minutes to stimulate blood flow. Scalp massage alone has been shown to improve hair thickness over time.',
        'Consider pairing your thickening shampoo with a volumizing conditioner applied only to the mid-lengths and ends - never the roots, as this can flatten thinning hair.',
        'Be patient and consistent. It takes 3-6 months of regular use to see the full benefit of a thickening shampoo. Take progress photos monthly to track changes you might not notice day to day.',
      ],
    },
    {
      id: 'gentle-daily-shampoo',
      title: 'Gentle / Daily Shampoo',
      description:
        'Your scalp and hair are in good shape, and your wash frequency calls for a gentle, everyday shampoo that maintains the balance without disrupting it. Gentle daily shampoos use mild surfactants like cocamidopropyl betaine or decyl glucoside that cleanse effectively without stripping. They are the maintenance workhorse of hair care - nothing flashy, but they keep everything running smoothly.',
      tips: [
        'Look for shampoos labeled "gentle," "daily," or "for everyday use" with sulfate-free or low-sulfate formulas.',
        'A good gentle shampoo should leave your hair feeling clean but not stripped, soft but not weighed down. If it feels squeaky, it is too harsh.',
        'You only need a coin-sized amount for short to medium hair. Using too much product wastes shampoo and can leave residue that dulls your hair.',
        'If you have a sensitive scalp, look for shampoos that are fragrance-free and free of common irritants like parabens, phthalates, and artificial dyes.',
        'Consider keeping a clarifying shampoo on hand for a once-monthly deep clean. Even gentle daily shampoos can leave trace buildup over time that a clarifying wash will reset.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Most guys grab whatever shampoo is cheapest or closest on the shelf and never think about it again. But using the wrong shampoo for your hair type is like wearing the wrong size shoes - it technically works, but it creates problems you did not need to have. This quiz matches your hair type, scalp condition, concerns, and lifestyle to the exact type of shampoo that will keep your hair looking its best.',
    howToUse:
      'Answer six questions about your hair type, scalp concerns, hair concerns, wash frequency, budget, and scent preference. The quiz will recommend a specific shampoo category with detailed advice on what to look for on the label, how to use it properly, and how to get the most out of every wash. Your result includes actionable tips you can use on your next drugstore or online shopping run.',
    faq: [
      {
        question: 'What does sulfate-free actually mean and does it matter?',
        answer:
          'Sulfates, specifically sodium lauryl sulfate (SLS) and sodium laureth sulfate (SLES), are the detergents that create the lather in most shampoos. They are highly effective cleansers but can be too aggressive for some hair types, stripping natural oils and causing dryness, irritation, and frizz. Sulfate-free shampoos use gentler cleansing agents that clean effectively without over-stripping. If you have curly, coily, dry, color-treated, or sensitive hair, sulfate-free is strongly recommended. If you have straight, oily hair, sulfates are generally fine.',
      },
      {
        question: 'How much shampoo should I actually use?',
        answer:
          'Far less than most guys think. For short hair, a dime-sized amount is enough. For medium-length hair, use a nickel-sized amount. For long hair, a quarter-sized amount. The shampoo should be worked into a lather on your scalp with your fingertips, not piled on top of your head. If you are using more than a quarter-sized amount, you are wasting product and potentially leaving residue that weighs your hair down.',
      },
      {
        question: 'Should I rotate between different shampoos?',
        answer:
          'Yes, rotating shampoos can be beneficial. Your hair does not technically "get used to" a shampoo, but different formulas address different needs. A practical approach is to have two shampoos: your primary daily or regular shampoo, and a secondary one for specific needs like a clarifying shampoo for weekly deep cleaning or an anti-dandruff shampoo when flaking flares up. This rotation ensures your hair gets consistent care while also addressing periodic issues.',
      },
    ],
    relatedTools: [
      'hair-wash-schedule-quiz',
      'haircut-frequency-calculator',
      'skincare-routine-builder',
      'beard-style-selector',
    ],
  },
};
