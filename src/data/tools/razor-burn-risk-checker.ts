import { QuizConfig } from '@/lib/types';

// ============================================================
// RAZOR BURN RISK CHECKER QUIZ
// 6 questions assessing shaving routine habits to determine
// razor burn risk level with actionable improvement tips
// ============================================================

export const razorBurnRiskCheckerConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'I just checked my razor burn risk on Real Men Guide! Find out if your shaving routine is helping or hurting your skin.',
  questions: [
    {
      id: 'q1',
      question: 'What is your skin type?',
      subtitle: 'Your skin type determines how it reacts to the friction and irritation of shaving.',
      options: [
        {
          label: 'Sensitive (reacts easily to products, turns red quickly)',
          value: 'sensitive',
          points: {
            low_risk: 0,
            moderate_risk: 1,
            high_risk: 2,
            razor_burn_prone: 3,
          },
        },
        {
          label: 'Normal (rarely reacts, handles most products fine)',
          value: 'normal',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Oily (shiny, prone to breakouts)',
          value: 'oily',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Combination (oily in some areas, dry or normal in others)',
          value: 'combination',
          points: {
            low_risk: 1,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 1,
          },
        },
      ],
    },
    {
      id: 'q2',
      question: 'Which direction do you shave?',
      subtitle: 'Shaving direction is one of the biggest factors in razor burn and ingrown hairs.',
      options: [
        {
          label: 'With the grain (same direction the hair grows)',
          value: 'with_grain',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Against the grain (opposite direction for a closer shave)',
          value: 'against_grain',
          points: {
            low_risk: 0,
            moderate_risk: 0,
            high_risk: 2,
            razor_burn_prone: 3,
          },
        },
        {
          label: 'Both (with the grain first pass, against on the second)',
          value: 'both',
          points: {
            low_risk: 1,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 1,
          },
        },
        {
          label: 'Random (no consistent pattern, whatever feels right)',
          value: 'random',
          points: {
            low_risk: 0,
            moderate_risk: 1,
            high_risk: 2,
            razor_burn_prone: 2,
          },
        },
      ],
    },
    {
      id: 'q3',
      question: 'What does your pre-shave routine look like?',
      subtitle: 'What you do before the blade touches your skin matters more than most men realize.',
      options: [
        {
          label: 'Hot towel on the face for a few minutes',
          value: 'hot_towel',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Splash warm water on my face',
          value: 'warm_water',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Nothing, I go straight to shaving',
          value: 'nothing',
          points: {
            low_risk: 0,
            moderate_risk: 0,
            high_risk: 2,
            razor_burn_prone: 3,
          },
        },
        {
          label: 'Pre-shave oil or cream',
          value: 'shave_oil',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
      ],
    },
    {
      id: 'q4',
      question: 'How old is the blade you are currently using?',
      subtitle: 'Blade age directly impacts cutting efficiency and skin irritation.',
      options: [
        {
          label: 'Fresh (1-2 shaves)',
          value: 'fresh',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'A few uses (3-5 shaves)',
          value: 'few_uses',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Old (6-10 shaves)',
          value: 'old',
          points: {
            low_risk: 0,
            moderate_risk: 1,
            high_risk: 2,
            razor_burn_prone: 2,
          },
        },
        {
          label: 'Very old (I cannot remember when I changed it)',
          value: 'very_old',
          points: {
            low_risk: 0,
            moderate_risk: 0,
            high_risk: 1,
            razor_burn_prone: 3,
          },
        },
      ],
    },
    {
      id: 'q5',
      question: 'What do you apply after shaving?',
      subtitle: 'Your aftershave routine determines how your skin recovers from the shave.',
      options: [
        {
          label: 'Aftershave balm (soothing, alcohol-free)',
          value: 'balm',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Aftershave splash (traditional, alcohol-based)',
          value: 'splash',
          points: {
            low_risk: 1,
            moderate_risk: 2,
            high_risk: 2,
            razor_burn_prone: 1,
          },
        },
        {
          label: 'Nothing at all',
          value: 'nothing',
          points: {
            low_risk: 0,
            moderate_risk: 0,
            high_risk: 2,
            razor_burn_prone: 3,
          },
        },
        {
          label: 'Moisturizer or post-shave lotion',
          value: 'moisturizer',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
      ],
    },
    {
      id: 'q6',
      question: 'How often do you shave?',
      subtitle: 'Shaving frequency affects how much time your skin has to recover between sessions.',
      options: [
        {
          label: 'Daily',
          value: 'daily',
          points: {
            low_risk: 0,
            moderate_risk: 1,
            high_risk: 2,
            razor_burn_prone: 2,
          },
        },
        {
          label: 'Every other day',
          value: 'every_other',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Twice a week',
          value: 'twice_week',
          points: {
            low_risk: 3,
            moderate_risk: 1,
            high_risk: 0,
            razor_burn_prone: 0,
          },
        },
        {
          label: 'Once a week or less',
          value: 'weekly',
          points: {
            low_risk: 2,
            moderate_risk: 2,
            high_risk: 1,
            razor_burn_prone: 0,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'low_risk',
      title: 'Low Risk - Your Routine Is Solid',
      description:
        'Your shaving habits are well dialed in. You are doing the right things: shaving with the grain, prepping your skin, using a fresh blade, and taking care of your skin afterward. Razor burn and irritation should be rare for you. Keep doing what you are doing, and make small tweaks if you ever notice a change in your skin\'s reaction.',
      tips: [
        'Keep changing your blade on schedule. Even with great habits, a dull blade will eventually cause problems.',
        'Consider upgrading to a safety razor if you have not already. It provides an even closer shave with less irritation than multi-blade cartridges.',
        'Exfoliate gently 2 to 3 times per week to prevent ingrown hairs even with your good routine.',
        'Always shave after a shower when the hair is soft and the pores are open for the smoothest possible shave.',
        'Store your razor in a dry place between shaves to prevent rust and bacterial buildup on the blade.',
        'Apply a thin layer of aloe vera gel on shaving days if you ever experience mild redness. It calms inflammation fast.',
      ],
    },
    {
      id: 'moderate_risk',
      title: 'Moderate Risk - A Few Improvements Needed',
      description:
        'Your routine is decent but has a few weak spots that could lead to occasional razor burn, redness, or irritation. You are likely doing some things right but skipping steps that make a real difference. A few targeted changes can take your shave from acceptable to consistently smooth and irritation-free.',
      tips: [
        'Add a pre-shave step if you do not have one. Even just splashing warm water on your face for 30 seconds softens the hair and reduces friction dramatically.',
        'Switch to an alcohol-free aftershave balm. Alcohol-based splashes dry out the skin and increase irritation, especially on sensitive areas like the neck.',
        'Map your grain direction. Run your hand across your face to feel which way the hair grows and always shave in that direction on the first pass.',
        'Replace your blade more often. If you are unsure, change it every 5 to 7 shaves as a starting point and adjust from there.',
        'Use a quality shaving cream or soap with a brush. Canned foam does not provide enough lubrication or cushion compared to a proper lather.',
        'Give your skin at least 24 hours between shaves whenever possible. Daily shaving on mildly irritated skin compounds the problem.',
      ],
    },
    {
      id: 'high_risk',
      title: 'High Risk - Major Changes Needed',
      description:
        'Your current routine is setting you up for consistent razor burn, ingrown hairs, and skin irritation. Several of your habits are working against you, and the combination multiplies the damage. The good news is that fixing even two or three of these issues will make a dramatic difference in how your skin looks and feels after a shave.',
      tips: [
        'Stop shaving against the grain immediately. This is the single biggest cause of razor burn and ingrown hairs. Shave with the grain only until your skin recovers.',
        'Change your blade now. If you cannot remember when you last replaced it, the blade is too old. Start fresh and set a replacement schedule.',
        'Invest in a pre-shave routine. At minimum, shave right after a hot shower. Ideally, apply a pre-shave oil to create a protective barrier between the blade and your skin.',
        'Apply an alcohol-free aftershave balm with soothing ingredients like aloe vera, chamomile, or witch hazel after every shave without exception.',
        'Reduce shaving frequency if possible. Every other day instead of daily gives your skin time to heal between sessions.',
        'Use a single-blade safety razor instead of multi-blade cartridges. Multiple blades mean multiple passes of irritation with every stroke. One sharp blade is gentler.',
      ],
    },
    {
      id: 'razor_burn_prone',
      title: 'Razor Burn Prone - Complete Routine Overhaul',
      description:
        'Your current shaving routine is almost guaranteed to cause razor burn, irritation, and ingrown hairs. Nearly every step of your process is contributing to skin damage. You need a complete reset. Do not try to change everything at once. Start with the most impactful fixes below and build a proper routine step by step. Within two weeks of following this advice, you will see a massive difference.',
      tips: [
        'Step 1: Always shave after a hot shower or apply a hot towel for 2 to 3 minutes. This is non-negotiable. Shaving dry or cold skin with no prep is the fastest path to razor burn.',
        'Step 2: Get a fresh blade and commit to changing it every 5 shaves maximum. A dull blade forces you to press harder and make more passes, which destroys your skin.',
        'Step 3: Learn your grain direction and only shave with the grain. Run your fingers across your face in different directions. The smooth direction is with the grain. Always shave that way.',
        'Step 4: Apply a post-shave balm with aloe vera or witch hazel immediately after every shave. Never use alcohol-based aftershave on irritated skin.',
        'Step 5: Skip a day between shaves to let your skin recover. If you must look clean-shaven daily, consider an electric trimmer set to the closest setting on alternate days.',
        'Step 6: Consider switching to a safety razor. Multi-blade cartridges pull the hair up and cut below the skin surface, which is the primary cause of ingrown hairs. A single sharp blade cuts at skin level and causes far less irritation.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Razor burn affects the majority of men who shave, yet most assume it is just part of the process. It is not. Razor burn, razor bumps, and ingrown hairs are almost entirely caused by poor technique, dull blades, lack of prep, and bad aftercare. This quick 6-question quiz analyzes your shaving routine and tells you your risk level along with specific, actionable steps to fix the problem. Even men who have dealt with irritation for years can see major improvement by changing a few key habits.',
    howToUse:
      'Answer each question honestly based on what you actually do, not what you know you should do. The quiz takes about 1 minute. Your result will include your risk level and 6 targeted tips to immediately improve your shaving experience. Share your result with friends who complain about razor burn.',
    faq: [
      {
        question: 'What is the difference between ingrown hairs and razor burn?',
        answer:
          'Razor burn is a general irritation that appears as redness, stinging, and a burning sensation immediately after shaving. It is caused by friction, dull blades, and lack of lubrication. Ingrown hairs are specific bumps that form when a shaved hair curls back into the skin instead of growing outward, causing inflammation and sometimes infection. They are caused by shaving too close, especially against the grain, and are more common in men with curly or coarse hair. Both can be prevented with proper technique.',
      },
      {
        question: 'Is an electric razor better than a manual razor for sensitive skin?',
        answer:
          'For men with very sensitive skin, an electric razor can be a better option because it does not cut as close to the skin surface, reducing irritation and ingrown hairs. However, the shave is not as smooth. Modern foil shavers provide the closest electric shave. If you prefer the smoothness of a manual razor, a single-blade safety razor with proper prep and aftercare will cause less irritation than a multi-blade cartridge. The worst option for sensitive skin is a multi-blade cartridge with no prep.',
      },
      {
        question: 'What should a proper post-shave routine look like?',
        answer:
          'Immediately after shaving, rinse your face with cold water to close the pores and reduce inflammation. Pat dry with a clean towel, do not rub. Apply an alcohol-free aftershave balm that contains soothing ingredients like aloe vera, witch hazel, or chamomile. Follow with a lightweight moisturizer if your skin feels dry. On non-shaving days, exfoliate gently to prevent ingrown hairs. The entire post-shave routine takes about 60 seconds and makes a massive difference.',
      },
    ],
    relatedTools: [
      'razor-blade-replacement-calculator',
      'skincare-routine-builder',
      'beard-style-selector',
    ],
  },
};
