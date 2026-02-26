import { CalculatorConfig } from '@/lib/types';

export const proteinMacroCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'weight',
      label: 'Body Weight',
      type: 'number',
      placeholder: 'e.g. 180',
      unit: 'lbs',
      min: 80,
      max: 400,
      step: 0.5,
      helpText: 'Your current body weight in pounds.',
    },
    {
      id: 'body_fat',
      label: 'Body Fat % (optional)',
      type: 'number',
      placeholder: 'e.g. 18',
      unit: '%',
      min: 3,
      max: 50,
      step: 0.5,
      helpText: 'If known, this allows a more accurate calculation using lean body mass. Leave blank to skip.',
    },
    {
      id: 'goal',
      label: 'Goal',
      type: 'select',
      defaultValue: 'build',
      options: [
        { label: 'Lose Fat', value: 'lose' },
        { label: 'Maintain', value: 'maintain' },
        { label: 'Build Muscle', value: 'build' },
        { label: 'Body Recomp (lose fat + gain muscle)', value: 'recomp' },
      ],
      helpText: 'Your primary fitness goal determines macro ratios.',
    },
    {
      id: 'activity_level',
      label: 'Activity Level',
      type: 'select',
      defaultValue: 'moderate',
      options: [
        { label: 'Sedentary (desk job, little exercise)', value: 'sedentary' },
        { label: 'Moderate (3-4 days/week training)', value: 'moderate' },
        { label: 'Active (5-6 days/week training)', value: 'active' },
        { label: 'Very Active (intense daily training)', value: 'very_active' },
      ],
      helpText: 'How often and intensely you train each week.',
    },
  ],
  outputs: [
    {
      id: 'dailyCalories',
      label: 'Daily Calories',
      unit: 'cal',
      format: 'number',
      highlight: true,
      description: 'Your target daily calorie intake for your goal.',
    },
    {
      id: 'protein',
      label: 'Protein',
      unit: 'g/day',
      format: 'number',
      highlight: true,
      description: 'Daily protein target — the most important macro for body composition.',
    },
    {
      id: 'carbs',
      label: 'Carbohydrates',
      unit: 'g/day',
      format: 'number',
      description: 'Daily carb target — fuels training performance.',
    },
    {
      id: 'fat',
      label: 'Fat',
      unit: 'g/day',
      format: 'number',
      description: 'Daily fat target — supports hormones and overall health.',
    },
    {
      id: 'proteinPerMeal',
      label: 'Protein Per Meal (4 meals)',
      unit: 'g',
      format: 'number',
      description: 'Spread protein across 4 meals for optimal muscle protein synthesis.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const weightLbs = Number(inputs.weight);
    const bodyFatInput = inputs.body_fat !== undefined && inputs.body_fat !== '' ? Number(inputs.body_fat) : null;
    const goal = inputs.goal as string;
    const activityLevel = inputs.activity_level as string;

    if (weightLbs <= 0) {
      return {
        dailyCalories: 0,
        protein: 0,
        carbs: 0,
        fat: 0,
        proteinPerMeal: 0,
      };
    }

    // Calculate lean body mass if body fat is provided
    const hasBodyFat = bodyFatInput !== null && bodyFatInput > 0 && bodyFatInput < 60;
    const leanMassLbs = hasBodyFat ? weightLbs * (1 - bodyFatInput! / 100) : weightLbs * 0.8; // Estimate 20% bf if not given

    // Activity multiplier for calorie estimation
    // Using a simplified approach based on weight and activity
    let activityMultiplier: number;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 13;
        break;
      case 'moderate':
        activityMultiplier = 15;
        break;
      case 'active':
        activityMultiplier = 17;
        break;
      case 'very_active':
        activityMultiplier = 19;
        break;
      default:
        activityMultiplier = 15;
    }

    // Base maintenance calories
    const maintenanceCalories = weightLbs * activityMultiplier;

    // Protein per lb of body weight based on goal
    let proteinPerLb: number;
    let calorieAdjustment: number;
    let fatPerLb: number;

    switch (goal) {
      case 'lose':
        proteinPerLb = 1.0; // High protein to preserve muscle during cut
        fatPerLb = 0.3; // Lower fat during cut
        calorieAdjustment = -500;
        break;
      case 'build':
        proteinPerLb = 1.1; // Slightly above 1g for muscle building
        fatPerLb = 0.35; // Moderate fat
        calorieAdjustment = 300;
        break;
      case 'recomp':
        proteinPerLb = 1.2; // Highest protein for recomp
        fatPerLb = 0.35; // Moderate fat
        calorieAdjustment = 0; // Eat at maintenance
        break;
      case 'maintain':
      default:
        proteinPerLb = 0.8; // Standard maintenance
        fatPerLb = 0.4; // Higher fat is fine at maintenance
        calorieAdjustment = 0;
        break;
    }

    // If body fat is known, base protein on lean body mass with a higher multiplier
    const proteinBase = hasBodyFat ? leanMassLbs : weightLbs;
    const proteinMultiplier = hasBodyFat ? proteinPerLb * 1.2 : proteinPerLb;

    const proteinGrams = Math.round(proteinBase * proteinMultiplier);
    const fatGrams = Math.round(weightLbs * fatPerLb);

    const dailyCalories = Math.round(maintenanceCalories + calorieAdjustment);

    // Remaining calories from carbs
    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const remainingCalories = dailyCalories - proteinCalories - fatCalories;
    const carbGrams = Math.max(0, Math.round(remainingCalories / 4));

    const proteinPerMeal = Math.round(proteinGrams / 4);

    return {
      dailyCalories,
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams,
      proteinPerMeal,
    };
  },
  affiliateIds: ['whey-protein'],
  supportingContent: {
    intro:
      'Hitting your macros is the difference between spinning your wheels in the gym and actually seeing results. This calculator gives you a precise daily breakdown of protein, carbohydrates, and fat tailored to your body weight, body composition, and fitness goal. Whether you are cutting, bulking, or recomping, these numbers give you a clear target to hit every day.',
    howToUse:
      'Enter your body weight and optionally your body fat percentage for a more accurate calculation based on lean body mass. Select your primary goal and training frequency, then hit calculate. The tool will output your daily calorie target and a full macro breakdown in grams. For best results, spread your protein across 4 meals per day and prioritize hitting your protein target above all other macros.',
    faq: [
      {
        question: 'Do I really need that much protein?',
        answer:
          'Research consistently shows that 0.8-1.2 grams of protein per pound of body weight is optimal for men who train with weights. The exact amount depends on your goal: cutting and recomping require more protein to preserve or build muscle, while maintenance needs are slightly lower. If you struggle to hit your target through food alone, a quality whey protein supplement can help you fill the gap.',
      },
      {
        question: 'What if my body fat percentage drops my protein number lower than expected?',
        answer:
          'When body fat is provided, the calculator bases protein on your lean body mass with a slightly higher per-pound multiplier. This accounts for the fact that muscle tissue — not fat — is what actually needs protein. The result should be in a similar range but more precisely tuned to your actual muscle mass. If you are unsure of your body fat, leave it blank and the calculator will use your total body weight.',
      },
      {
        question: 'How important are carbs and fat compared to protein?',
        answer:
          'Protein is the most important macro for body composition. After protein, total calories matter most. Carbs and fat are relatively flexible — carbs fuel your workouts and recovery, while fat supports testosterone production and overall hormone health. Never drop fat below 0.3g per pound of body weight, as this can negatively impact hormone levels.',
      },
    ],
    relatedTools: ['tdee-calculator', 'body-fat-calculator', 'one-rep-max-calculator'],
  },
};
