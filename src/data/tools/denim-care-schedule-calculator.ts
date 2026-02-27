import type { CalculatorConfig } from '@/lib/types';

export const denimCareScheduleCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'denim_type',
      label: 'Denim Type',
      type: 'select',
      defaultValue: 'dark_wash',
      options: [
        { label: 'Raw / Selvedge (unwashed, stiff)', value: 'raw_selvedge' },
        { label: 'Dark Wash', value: 'dark_wash' },
        { label: 'Light Wash', value: 'light_wash' },
        { label: 'Stretch / Slim Fit', value: 'stretch' },
      ],
      helpText: 'Raw selvedge should be washed the least to develop natural fades. Stretch denim needs more frequent washing to restore shape.',
    },
    {
      id: 'wears_per_week',
      label: 'Wears Per Week',
      type: 'number',
      placeholder: 'e.g. 3',
      min: 1,
      max: 7,
      step: 1,
      helpText: 'How many days per week you typically wear these jeans.',
    },
    {
      id: 'activity_level',
      label: 'Activity Level While Wearing',
      type: 'select',
      defaultValue: 'desk_job',
      options: [
        { label: 'Desk Job (mostly sitting)', value: 'desk_job' },
        { label: 'Light Activity (walking, errands)', value: 'light_activity' },
        { label: 'Active (on your feet all day)', value: 'active' },
        { label: 'Outdoor Labor (physical work)', value: 'outdoor_labor' },
      ],
      helpText: 'More physical activity means more sweat and dirt, requiring more frequent washes.',
    },
    {
      id: 'visible_stains',
      label: 'Are There Visible Stains Right Now?',
      type: 'radio',
      defaultValue: 'no',
      options: [
        { label: 'Yes', value: 'yes' },
        { label: 'No', value: 'no' },
      ],
      helpText: 'If there are visible stains, it is time to wash regardless of schedule.',
    },
  ],
  outputs: [
    {
      id: 'wash_after_wears',
      label: 'Wash After',
      highlight: true,
      description: 'The recommended number of wears before washing.',
    },
    {
      id: 'wash_every_weeks',
      label: 'That Means Every',
      description: 'How many weeks between washes based on your wear frequency.',
    },
    {
      id: 'spot_clean_tip',
      label: 'Spot Cleaning',
      description: 'How to handle small stains without a full wash.',
    },
    {
      id: 'care_method',
      label: 'Wash Method',
      description: 'The recommended washing technique for your denim type.',
    },
    {
      id: 'jeans_lifespan_tip',
      label: 'Lifespan Tip',
      description: 'How to make your jeans last longer.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const denimType = String(inputs.denim_type);
    const wearsPerWeek = Number(inputs.wears_per_week);
    const activityLevel = String(inputs.activity_level);
    const visibleStains = String(inputs.visible_stains);

    if (!wearsPerWeek || wearsPerWeek <= 0) {
      return {
        wash_after_wears: 'Enter your wears per week',
        wash_every_weeks: '-',
        spot_clean_tip: '-',
        care_method: '-',
        jeans_lifespan_tip: '-',
      };
    }

    // Handle visible stains immediately
    if (visibleStains === 'yes') {
      let stainCareMethod: string;
      if (denimType === 'raw_selvedge') {
        stainCareMethod = 'Spot clean the stain with cold water and a drop of mild detergent. Dab gently, do not rub. If the stain is severe, soak the jeans inside out in cold water with a tablespoon of white vinegar for 30 minutes.';
      } else {
        stainCareMethod = 'Turn inside out, wash cold on a gentle cycle with a mild detergent. Do not use bleach. Air dry or tumble dry on low.';
      }

      return {
        wash_after_wears: 'Wash now (stains detected)',
        wash_every_weeks: 'Wash today, then resume your schedule',
        spot_clean_tip: 'For future stains, treat immediately with cold water and a drop of mild soap. The longer a stain sits, the harder it is to remove.',
        care_method: stainCareMethod,
        jeans_lifespan_tip: 'Prompt stain treatment extends the life of your denim. Always use cold water for stains to avoid setting them.',
      };
    }

    // Base wears by denim type
    let baseWears: number;
    if (denimType === 'raw_selvedge') {
      baseWears = 40; // midpoint of 30-50
    } else if (denimType === 'dark_wash') {
      baseWears = 12; // midpoint of 10-15
    } else if (denimType === 'light_wash') {
      baseWears = 6; // midpoint of 5-8
    } else {
      // stretch
      baseWears = 5; // midpoint of 4-6
    }

    // Activity level multiplier
    let activityMultiplier: number;
    if (activityLevel === 'desk_job') {
      activityMultiplier = 1.2;
    } else if (activityLevel === 'light_activity') {
      activityMultiplier = 1.0;
    } else if (activityLevel === 'active') {
      activityMultiplier = 0.8;
    } else {
      // outdoor_labor
      activityMultiplier = 0.6;
    }

    // Calculate adjusted wears
    const adjustedWears = Math.round(baseWears * activityMultiplier);
    const finalWears = Math.max(3, adjustedWears);

    // Convert to weeks
    const weeksPerWash = Math.round((finalWears / wearsPerWeek) * 10) / 10;

    // Spot clean tip based on denim type
    let spotCleanTip: string;
    if (denimType === 'raw_selvedge') {
      spotCleanTip = 'Use a damp cloth with cold water and dab the stain gently. Avoid soap if possible. For odor, hang the jeans outside in fresh air and sunlight for a few hours. Some raw denim enthusiasts freeze their jeans, but this has minimal effect on bacteria.';
    } else if (denimType === 'dark_wash') {
      spotCleanTip = 'Dab stains with cold water and a tiny drop of dish soap. Avoid rubbing, which can create a lighter spot on dark denim. For odor between washes, spritz lightly with a 50/50 water and white vinegar solution and hang to air out.';
    } else if (denimType === 'light_wash') {
      spotCleanTip = 'Light wash denim shows stains more readily. Treat stains promptly with cold water and a mild stain remover. For grease stains, sprinkle baking soda on the spot, let it sit for 30 minutes, then brush off before washing.';
    } else {
      spotCleanTip = 'Stretch denim is more delicate than rigid denim. Spot clean gently with cold water. Avoid hot water, which can break down the elastane fibers that give stretch jeans their shape.';
    }

    // Care method based on denim type
    let careMethod: string;
    if (denimType === 'raw_selvedge') {
      careMethod = 'Turn inside out. Soak in a bathtub or large basin with cold water and a teaspoon of mild detergent (or raw denim wash) for 45 minutes. Gently agitate by hand. Drain, rinse with cold water, and hang dry by the waistband away from direct sunlight. Never put raw denim in a dryer.';
    } else if (denimType === 'dark_wash') {
      careMethod = 'Turn inside out to preserve color. Wash on cold, gentle cycle with a small amount of dark-color detergent. Do not use bleach or fabric softener. Hang dry or tumble dry on the lowest heat setting. Remove promptly to avoid wrinkles and color transfer.';
    } else if (denimType === 'light_wash') {
      careMethod = 'Turn inside out. Wash on cold to cool, gentle cycle with regular detergent. Light wash denim is more forgiving but still benefits from cold water. Tumble dry on low or hang dry. Remove promptly from the dryer.';
    } else {
      careMethod = 'Turn inside out. Wash on cold, delicate cycle to protect the elastane fibers. Never use hot water, which degrades stretch permanently. Hang dry whenever possible. If you must use a dryer, use the lowest heat for the shortest time. High heat is the number one killer of stretch denim.';
    }

    // Lifespan tip
    let lifespanTip: string;
    if (denimType === 'raw_selvedge') {
      lifespanTip = 'Raw selvedge denim can last 5-10 years with proper care. The less you wash, the more unique your fades will be. Rotate between at least two pairs to give each time to rest. Repair small holes with darning before they grow. A well-worn pair of raw denim tells your story.';
    } else if (denimType === 'dark_wash') {
      lifespanTip = 'Add a cup of white vinegar to the first wash to help set the dye, and wash inside out every time to minimize fade. Dark jeans typically last 2-4 years of regular wear. Avoid sitting on rough surfaces that cause premature seat wear.';
    } else if (denimType === 'light_wash') {
      lifespanTip = 'Light wash jeans are already faded, so color preservation is less of a concern. Focus on preventing rips by reinforcing stress points. Expect 1-3 years of regular wear. Hang dry when possible to reduce dryer-related wear.';
    } else {
      lifespanTip = 'Stretch denim has a shorter lifespan than rigid denim because the elastane fibers break down over time. Expect 1-2 years of regular wear. To extend life, wash less often, always air dry, and avoid extreme heat. When they stop bouncing back to shape, it is time for a new pair.';
    }

    return {
      wash_after_wears: `${finalWears} wears`,
      wash_every_weeks: `${weeksPerWash} weeks`,
      spot_clean_tip: spotCleanTip,
      care_method: careMethod,
      jeans_lifespan_tip: lifespanTip,
    };
  },
  supportingContent: {
    intro:
      'Most guys wash their jeans way too often, fading the color, degrading the fabric, and shortening the lifespan of every pair they own. On the flip side, never washing them is not the answer either (sorry, raw denim purists). This calculator gives you a science-backed wash schedule tailored to your specific denim type, how often you wear them, and how active you are in them.',
    howToUse:
      'Select your denim type, enter how many days per week you wear that pair, choose your typical activity level while wearing them, and note whether they currently have visible stains. The calculator tells you exactly how many wears you should get between washes, translates that to a weekly schedule, and provides the optimal wash method for your denim type.',
    faq: [
      {
        question: 'Does freezing your jeans actually kill bacteria?',
        answer:
          'No. This is one of the most persistent denim myths. Freezing jeans does not kill odor-causing bacteria; it only puts them into a dormant state. As soon as the jeans warm back up, the bacteria reactivate. If your jeans smell, hang them outside in fresh air and sunlight, which actually does have antibacterial properties from UV exposure, or give them a proper cold-water wash.',
      },
      {
        question: 'How do I spot clean jeans without doing a full wash?',
        answer:
          'Dampen a clean cloth with cold water, add a tiny drop of mild dish soap if needed, and gently dab (never rub) the stained area. For grease stains, sprinkle baking soda or cornstarch on the spot, let it absorb for 30 minutes, then brush off. For odor, mist lightly with a 50/50 mix of water and white vinegar and hang to air dry. These techniques can extend the time between full washes significantly.',
      },
      {
        question: 'What is the best way to care for raw selvedge denim?',
        answer:
          'Wear your raw denim for the first 3-6 months without washing to develop personalized fades and creases. When you do wash, soak inside out in a cold-water bath with a teaspoon of mild detergent for 30-45 minutes, gently agitate by hand, rinse, and hang dry by the waistband. Never machine wash on a regular cycle and never use a dryer. Between washes, hang them in fresh air and sunlight. Repair small holes early with darning or iron-on patches from the inside.',
      },
    ],
    relatedTools: [
      'clean-sheets-calculator',
      'towel-gym-wash-planner',
      'capsule-wardrobe-builder',
    ],
  },
};
