import { CalculatorConfig } from '@/lib/types';

export const tdeeCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'age',
      label: 'Age',
      type: 'number',
      placeholder: 'e.g. 28',
      unit: 'years',
      min: 15,
      max: 80,
      step: 1,
      helpText: 'Your current age in years.',
    },
    {
      id: 'weight',
      label: 'Weight',
      type: 'number',
      placeholder: 'e.g. 180',
      unit: 'lbs',
      min: 80,
      max: 400,
      step: 0.5,
      helpText: 'Your current body weight in pounds.',
    },
    {
      id: 'height',
      label: 'Height',
      type: 'number',
      placeholder: 'e.g. 70',
      unit: 'inches',
      min: 50,
      max: 90,
      step: 0.5,
      helpText: 'Your total height in inches (5\'10" = 70 inches).',
    },
    {
      id: 'activity_level',
      label: 'Activity Level',
      type: 'select',
      defaultValue: '1.55',
      options: [
        { label: 'Sedentary (desk job, little exercise)', value: '1.2' },
        { label: 'Lightly Active (1-3 days/week)', value: '1.375' },
        { label: 'Moderately Active (3-5 days/week)', value: '1.55' },
        { label: 'Very Active (6-7 days/week)', value: '1.725' },
        { label: 'Extra Active (athlete / physical job)', value: '1.9' },
      ],
      helpText: 'Be honest — most people overestimate their activity level.',
    },
    {
      id: 'goal',
      label: 'Goal',
      type: 'select',
      defaultValue: 'maintain',
      options: [
        { label: 'Lose Weight', value: 'lose' },
        { label: 'Maintain Weight', value: 'maintain' },
        { label: 'Build Muscle', value: 'build' },
      ],
      helpText: 'Your primary fitness goal right now.',
    },
  ],
  outputs: [
    {
      id: 'bmr',
      label: 'Basal Metabolic Rate (BMR)',
      unit: 'cal/day',
      format: 'number',
      description: 'Calories your body burns at complete rest.',
    },
    {
      id: 'tdee',
      label: 'Total Daily Energy Expenditure',
      unit: 'cal/day',
      format: 'number',
      highlight: true,
      description: 'Your estimated total daily calorie burn including activity.',
    },
    {
      id: 'goalCalories',
      label: 'Daily Calories for Your Goal',
      unit: 'cal/day',
      format: 'number',
      highlight: true,
      description: 'Adjusted calorie target based on your selected goal.',
    },
    {
      id: 'proteinTarget',
      label: 'Daily Protein Target',
      unit: 'g/day',
      format: 'number',
      description: 'Recommended daily protein intake for your goal.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const age = Number(inputs.age);
    const weightLbs = Number(inputs.weight);
    const heightInches = Number(inputs.height);
    const activityMultiplier = parseFloat(inputs.activity_level as string);
    const goal = inputs.goal as string;

    if (age <= 0 || weightLbs <= 0 || heightInches <= 0) {
      return {
        bmr: 0,
        tdee: 0,
        goalCalories: 0,
        proteinTarget: 0,
      };
    }

    // Convert to metric for Mifflin-St Jeor
    const weightKg = weightLbs * 0.453592;
    const heightCm = heightInches * 2.54;

    // Mifflin-St Jeor Equation (male)
    // BMR = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(years) + 5
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;

    // TDEE = BMR * activity multiplier
    const tdee = bmr * activityMultiplier;

    // Goal-based calorie adjustment
    let goalCalories: number;
    let proteinPerLb: number;

    switch (goal) {
      case 'lose':
        goalCalories = tdee - 500; // ~1 lb/week loss
        proteinPerLb = 1.0; // High protein preserves muscle during a cut
        break;
      case 'build':
        goalCalories = tdee + 300; // Lean bulk surplus
        proteinPerLb = 1.0; // High protein for muscle synthesis
        break;
      case 'maintain':
      default:
        goalCalories = tdee;
        proteinPerLb = 0.8; // Adequate for maintenance
        break;
    }

    const proteinTarget = weightLbs * proteinPerLb;

    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      goalCalories: Math.round(goalCalories),
      proteinTarget: Math.round(proteinTarget),
    };
  },
  supportingContent: {
    intro:
      'Your Total Daily Energy Expenditure (TDEE) is the total number of calories you burn each day, including exercise and daily activity. Knowing your TDEE is the foundation of any nutrition plan — whether you want to lose fat, build muscle, or maintain your current physique. This calculator uses the Mifflin-St Jeor equation, which research has shown to be the most accurate predictive formula for men.',
    howToUse:
      'Enter your age, weight in pounds, height in inches, and select your honest activity level. Then choose your current goal — the calculator will give you your BMR (calories burned at rest), your TDEE, a goal-adjusted calorie target, and a daily protein recommendation. Use the goal calories as your daily target and weigh yourself weekly to track progress.',
    faq: [
      {
        question: 'What is the difference between BMR and TDEE?',
        answer:
          'BMR (Basal Metabolic Rate) is the number of calories your body burns just to stay alive — breathing, pumping blood, maintaining body temperature. TDEE adds your daily activity and exercise on top of that. You should never eat below your BMR for extended periods, and your TDEE is the starting point for setting calorie goals.',
      },
      {
        question: 'How quickly should I expect to see results?',
        answer:
          'With a 500-calorie daily deficit, expect to lose about 1 pound per week. With a 300-calorie surplus and proper training, expect to gain about 0.5-1 pound of muscle per month (the rest will be some fat). Weigh yourself at the same time each morning and use a 7-day average to track trends, since daily weight fluctuates due to water and food.',
      },
      {
        question: 'Should I eat back the calories I burn during exercise?',
        answer:
          'Your activity level selection already accounts for exercise calories in the TDEE calculation. Do not add extra calories on workout days unless you are doing significantly more activity than your selected level. If you find yourself losing weight too quickly (more than 1.5 lbs/week), increase your calories by 200-300 per day.',
      },
    ],
    relatedTools: ['body-fat-calculator', 'protein-macro-calculator', 'sleep-cycle-calculator'],
  },
};
