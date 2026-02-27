import type { CalculatorConfig } from '@/lib/types';

export const hangoverRecoveryCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'drinksConsumed',
      label: 'Drinks Consumed',
      type: 'number',
      placeholder: 'e.g. 6',
      min: 1,
      max: 20,
      step: 1,
      defaultValue: 4,
      helpText: 'One drink = 1 beer, 1 glass of wine, or 1 shot of spirits.',
    },
    {
      id: 'drinkType',
      label: 'Primary Drink Type',
      type: 'select',
      defaultValue: 'beer',
      options: [
        { label: 'Beer', value: 'beer' },
        { label: 'Wine', value: 'wine' },
        { label: 'Spirits (neat/rocks)', value: 'spirits' },
        { label: 'Cocktails', value: 'cocktails' },
        { label: 'Mixed (different types)', value: 'mixed' },
      ],
      helpText: 'Mixing drink types generally makes hangovers worse.',
    },
    {
      id: 'hoursDrinking',
      label: 'Hours Spent Drinking',
      type: 'number',
      placeholder: 'e.g. 4',
      unit: 'hours',
      min: 1,
      max: 16,
      step: 0.5,
      defaultValue: 4,
      helpText: 'From your first drink to your last.',
    },
    {
      id: 'hoursSinceLastDrink',
      label: 'Hours Since Last Drink',
      type: 'number',
      placeholder: 'e.g. 8',
      unit: 'hours',
      min: 0,
      max: 48,
      step: 0.5,
      defaultValue: 8,
      helpText: 'How long ago did you have your last drink?',
    },
    {
      id: 'weight',
      label: 'Body Weight',
      type: 'number',
      placeholder: 'e.g. 180',
      unit: 'lbs',
      min: 100,
      max: 400,
      step: 1,
      defaultValue: 180,
      helpText: 'Used to estimate blood alcohol concentration.',
    },
    {
      id: 'waterConsumed',
      label: 'Water Consumed While Drinking',
      type: 'select',
      defaultValue: 'a-little',
      options: [
        { label: 'None at all', value: 'none' },
        { label: 'A little (1-2 glasses)', value: 'a-little' },
        { label: 'Moderate (matched drinks roughly)', value: 'moderate' },
        { label: 'Lots (more water than alcohol)', value: 'lots' },
      ],
      helpText: 'Hydration while drinking significantly affects recovery.',
    },
    {
      id: 'foodEaten',
      label: 'Food Eaten Before/During Drinking',
      type: 'select',
      defaultValue: 'light-snack',
      options: [
        { label: 'Nothing - drank on an empty stomach', value: 'nothing' },
        { label: 'Light snack (chips, appetizer)', value: 'light-snack' },
        { label: 'Full meal', value: 'full-meal' },
        { label: 'Greasy/heavy food', value: 'greasy-food' },
      ],
      helpText: 'Food slows alcohol absorption and reduces peak BAC.',
    },
  ],
  outputs: [
    {
      id: 'estimatedBAC',
      label: 'Estimated Peak BAC',
      unit: '%',
      format: 'percentage',
      highlight: true,
      description: 'Your estimated peak blood alcohol concentration.',
    },
    {
      id: 'currentBAC',
      label: 'Estimated Current BAC',
      unit: '%',
      format: 'percentage',
      highlight: true,
      description: 'Your estimated current blood alcohol level.',
    },
    {
      id: 'hoursUntilSober',
      label: 'Hours Until Sober',
      unit: 'hours',
      format: 'number',
      highlight: true,
      description: 'Estimated time until your BAC reaches 0.00%.',
    },
    {
      id: 'recoveryScore',
      label: 'Recovery Score',
      unit: '/ 10',
      format: 'number',
      highlight: true,
      description: 'Your overall recovery outlook from 1 (rough) to 10 (you will be fine).',
    },
    {
      id: 'waterNeeded',
      label: 'Water Needed Now',
      unit: 'oz',
      format: 'number',
      description: 'Recommended water intake to rehydrate.',
    },
    {
      id: 'hangoverSeverity',
      label: 'Hangover Severity',
      description: 'How bad it is (or will be).',
    },
    {
      id: 'recoveryTip',
      label: 'Personalized Recovery Tip',
      description: 'Your best move right now based on your situation.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const drinksConsumed = Number(inputs.drinksConsumed) || 4;
    const drinkType = String(inputs.drinkType || 'beer');
    const hoursDrinking = Number(inputs.hoursDrinking) || 4;
    const hoursSinceLastDrink = Number(inputs.hoursSinceLastDrink) || 8;
    const weight = Number(inputs.weight) || 180;
    const waterConsumed = String(inputs.waterConsumed || 'a-little');
    const foodEaten = String(inputs.foodEaten || 'light-snack');

    // Standard drink alcohol content in oz of pure alcohol
    // 1 standard drink = 0.6 oz of pure alcohol
    const drinkMultiplier: Record<string, number> = {
      beer: 0.6,
      wine: 0.7,
      spirits: 0.8,
      cocktails: 0.75,
      mixed: 0.85, // mixing is worse due to congeners and varied absorption
    };

    const alcoholOz = drinksConsumed * (drinkMultiplier[drinkType] || 0.6);

    // Widmark formula for BAC estimation (male)
    // BAC = (alcohol in oz * 5.14) / (weight * 0.73) - (0.015 * hours)
    const bodyWaterConstant = 0.73; // male average
    const metabolismRate = 0.015; // BAC drop per hour

    // Food absorption factor - food slows absorption and lowers peak BAC
    const foodFactor: Record<string, number> = {
      nothing: 1.0,
      'light-snack': 0.85,
      'full-meal': 0.7,
      'greasy-food': 0.65,
    };

    const absorptionFactor = foodFactor[foodEaten] || 0.85;

    // Calculate peak BAC (at end of drinking session)
    const rawPeakBAC = ((alcoholOz * 5.14) / (weight * bodyWaterConstant)) * absorptionFactor;
    // Subtract metabolism during drinking session
    const peakBAC = Math.max(0, rawPeakBAC - metabolismRate * hoursDrinking);

    // Calculate current BAC based on time elapsed since last drink
    const currentBAC = Math.max(0, rawPeakBAC - metabolismRate * (hoursDrinking + hoursSinceLastDrink));

    // Hours until sober from now
    const hoursUntilSober = currentBAC > 0 ? Math.ceil((currentBAC / metabolismRate) * 10) / 10 : 0;

    // Water/hydration factor for recovery score
    const waterFactor: Record<string, number> = {
      none: 0,
      'a-little': 1,
      moderate: 2,
      lots: 3,
    };

    const hydrationScore = waterFactor[waterConsumed] ?? 1;

    // Recovery score (1-10, 10 = you are fine)
    // Factors: current BAC (lower is better), hydration, food, drink type, total drinks
    let recoveryScore = 10;

    // Penalize based on drinks consumed
    if (drinksConsumed <= 2) recoveryScore -= 0;
    else if (drinksConsumed <= 4) recoveryScore -= 1;
    else if (drinksConsumed <= 6) recoveryScore -= 2;
    else if (drinksConsumed <= 8) recoveryScore -= 3;
    else if (drinksConsumed <= 12) recoveryScore -= 4;
    else recoveryScore -= 5;

    // Penalize for mixing drinks
    if (drinkType === 'mixed') recoveryScore -= 1;
    if (drinkType === 'spirits') recoveryScore -= 0.5;

    // Bonus for hydration
    recoveryScore += hydrationScore * 0.5;

    // Bonus for food
    if (foodEaten === 'full-meal' || foodEaten === 'greasy-food') recoveryScore += 1;
    else if (foodEaten === 'light-snack') recoveryScore += 0.5;
    else recoveryScore -= 1; // penalty for empty stomach

    // Bonus for time elapsed
    if (hoursSinceLastDrink >= 12) recoveryScore += 1;
    else if (hoursSinceLastDrink >= 8) recoveryScore += 0.5;

    // Penalize if still intoxicated
    if (currentBAC > 0.08) recoveryScore -= 2;
    else if (currentBAC > 0.04) recoveryScore -= 1;

    // Clamp recovery score
    recoveryScore = Math.round(Math.max(1, Math.min(10, recoveryScore)) * 10) / 10;

    // Calculate water needed (oz)
    // Base: 8oz per drink consumed, reduced by water already consumed
    const baseWaterNeed = drinksConsumed * 8;
    const waterAlreadyConsumed = hydrationScore * (drinksConsumed * 2); // rough estimate
    const waterNeeded = Math.max(8, Math.round(baseWaterNeed - waterAlreadyConsumed + (currentBAC > 0 ? 16 : 0)));

    // Hangover severity
    let hangoverSeverity: string;
    if (recoveryScore >= 8) {
      hangoverSeverity = 'Mild';
    } else if (recoveryScore >= 6) {
      hangoverSeverity = 'Moderate';
    } else if (recoveryScore >= 4) {
      hangoverSeverity = 'Severe';
    } else {
      hangoverSeverity = 'Legendary';
    }

    // Personalized recovery tip
    let recoveryTip: string;
    if (currentBAC > 0.08) {
      recoveryTip =
        'You are likely still intoxicated. Do NOT drive. Drink water, eat something starchy, and rest. Your body needs time more than anything else right now.';
    } else if (currentBAC > 0) {
      recoveryTip =
        'You are still processing alcohol. Focus on hydration - drink water or an electrolyte drink. A light meal with carbs and protein will help stabilize your blood sugar. Avoid coffee until your BAC hits zero.';
    } else if (recoveryScore <= 3) {
      recoveryTip =
        'This is a rough one. Prioritize electrolytes (Pedialyte or sports drink), bland carbs (toast, crackers), and rest. Take ibuprofen if needed (not acetaminophen - it is hard on your liver after drinking). A cold shower can help reset your system.';
    } else if (recoveryScore <= 5) {
      recoveryTip =
        'You are in recovery mode. Drink 16-32oz of water with electrolytes, eat a balanced meal with eggs, avocado, and toast. Light movement like a walk can help your body process everything faster. Skip the hair of the dog - it just delays recovery.';
    } else if (recoveryScore <= 7) {
      recoveryTip =
        'You are not in bad shape. Drink a big glass of water, eat a solid breakfast, and get some fresh air. A light workout or walk will boost your mood and energy. You should be back to 100% soon.';
    } else {
      recoveryTip =
        'You are in good shape. Stay hydrated, eat well, and carry on with your day. You made decent choices last night and your body is handling it well. Keep that up next time too.';
    }

    return {
      estimatedBAC: Math.round(peakBAC * 1000) / 1000,
      currentBAC: Math.round(currentBAC * 1000) / 1000,
      hoursUntilSober: Math.round(hoursUntilSober * 10) / 10,
      recoveryScore,
      waterNeeded,
      hangoverSeverity,
      recoveryTip,
    };
  },
  supportingContent: {
    intro:
      'Had a big night out and need hangover cure tips? The Hangover Recovery Calculator estimates your current state and gives you a personalized recovery plan. Using the <a href="https://en.wikipedia.org/wiki/Blood_alcohol_content#Widmark_formula" target="_blank" rel="noopener">Widmark formula</a> for BAC estimation along with factors like hydration, food intake, and drink type, it calculates how long until you are sober, predicts your hangover severity, and tells you exactly what to do right now to recover faster. Once you are back on your feet, check out the <a href="/daily-man-challenge">Daily Man Challenge</a> to get your day back on track.',
    howToUse:
      'Enter the details of your drinking session as accurately as you can remember. The more honest you are, the more accurate your hangover recovery estimate will be. The calculator predicts your blood alcohol concentration, hangover severity, how much water you need, and gives you a personalized recovery tip. Important: this is for entertainment and general guidance only — if you feel seriously unwell, seek medical attention.',
    faq: [
      {
        question: 'How accurate is the BAC estimate?',
        answer:
          'The calculator uses the <a href="https://en.wikipedia.org/wiki/Blood_alcohol_content" target="_blank" rel="noopener">Widmark formula</a>, the standard method for estimating BAC used by forensic toxicologists. However, individual metabolism varies based on genetics, liver health, medications, and other factors. Treat the BAC estimate as a rough guideline, not a precise measurement. Never use it to determine if you are safe to drive — when in doubt, do not drive.',
      },
      {
        question: 'Does "hair of the dog" actually work?',
        answer:
          'Drinking more alcohol temporarily masks hangover symptoms by raising your BAC again, but it does not speed up recovery — it delays and extends it. According to <a href="https://www.health.harvard.edu/staying-healthy/7-steps-to-cure-your-hangover" target="_blank" rel="noopener">Harvard Health</a>, the only real hangover remedies are hydration, electrolytes, food, and time. Skip the morning drink and focus on rehydrating instead.',
      },
      {
        question: 'Why does mixing drinks make it worse?',
        answer:
          'Different alcoholic beverages contain different types and amounts of <a href="https://en.wikipedia.org/wiki/Congener_(alcohol)" target="_blank" rel="noopener">congeners</a> — byproducts of fermentation that worsen hangover symptoms. When you mix drink types, your body processes a wider variety of congeners, increasing inflammation. Dark spirits like bourbon and red wine have more congeners than clear spirits like vodka. Our <a href="/sleep-cycle-calculator">Sleep Cycle Calculator</a> can also help you time recovery sleep after a night out.',
      },
    ],
    relatedTools: [
      'life-audit-score',
      'daily-man-challenge',
      'man-archetype-quiz',
    ],
  },
};
