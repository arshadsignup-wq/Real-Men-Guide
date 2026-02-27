import { CalculatorConfig } from '@/lib/types';

export const creatineDosageCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'body_weight',
      label: 'Body Weight',
      type: 'number',
      placeholder: 'e.g. 180',
      unit: 'lbs',
      min: 100,
      max: 350,
      step: 1,
      helpText: 'Your current body weight.',
    },
    {
      id: 'weight_unit',
      label: 'Weight Unit',
      type: 'select',
      defaultValue: 'lbs',
      options: [
        { label: 'Pounds (lbs)', value: 'lbs' },
        { label: 'Kilograms (kg)', value: 'kg' },
      ],
      helpText: 'Select the unit for your body weight entry.',
    },
    {
      id: 'loading_phase',
      label: 'Include Loading Phase?',
      type: 'radio',
      defaultValue: 'no',
      options: [
        { label: 'Yes (saturate muscles faster)', value: 'yes' },
        { label: 'No (start with maintenance)', value: 'no' },
      ],
      helpText: 'Loading saturates your muscles in 5-7 days instead of 3-4 weeks. Not required but speeds up results.',
    },
    {
      id: 'training_level',
      label: 'Training Level',
      type: 'select',
      defaultValue: 'intermediate',
      options: [
        { label: 'Beginner (less than 1 year)', value: 'beginner' },
        { label: 'Intermediate (1-3 years)', value: 'intermediate' },
        { label: 'Advanced (3+ years)', value: 'advanced' },
      ],
      helpText: 'More experienced lifters with more muscle mass may benefit from slightly higher doses.',
    },
  ],
  outputs: [
    {
      id: 'maintenance_dose_g',
      label: 'Daily Maintenance Dose',
      unit: 'g',
      format: 'number',
      highlight: true,
      description: 'Your recommended daily creatine dose for ongoing use.',
    },
    {
      id: 'loading_dose_g',
      label: 'Daily Loading Dose',
      unit: 'g',
      format: 'number',
      description: 'Total daily dose during the loading phase (if selected).',
    },
    {
      id: 'loading_days',
      label: 'Loading Phase Duration',
      unit: 'days',
      format: 'number',
      description: 'How many days to run the loading protocol.',
    },
    {
      id: 'loading_doses_per_day',
      label: 'Loading Doses Per Day',
      format: 'number',
      description: 'Split the loading dose into this many servings throughout the day.',
    },
    {
      id: 'monthly_grams',
      label: 'Monthly Usage (Maintenance)',
      unit: 'g',
      format: 'number',
      description: 'How many grams you will use per month at your maintenance dose.',
    },
    {
      id: 'monthly_cost_estimate',
      label: 'Estimated Monthly Cost',
      format: 'currency',
      description: 'Approximate monthly cost at ~$0.05 per gram for quality creatine monohydrate.',
    },
    {
      id: 'timing_tip',
      label: 'Timing Recommendation',
      description: 'When and how to take your creatine for optimal absorption.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const bodyWeight = Number(inputs.body_weight) || 180;
    const weightUnit = inputs.weight_unit as string;
    const loadingPhase = inputs.loading_phase as string;
    const trainingLevel = inputs.training_level as string;

    // Convert to kg
    const weightKg = weightUnit === 'kg' ? bodyWeight : bodyWeight / 2.20462;

    // Loading dose: 0.3g per kg per day
    const loadingDoseRaw = weightKg * 0.3;
    const loadingDoseG = Math.round(loadingDoseRaw * 10) / 10;
    const loadingDays = 5;
    const loadingDosesPerDay = 4;

    // Maintenance dose: 0.03g per kg per day, clamped between 3-5g
    // Advanced lifters pushed toward upper range
    let maintenanceDoseRaw = weightKg * 0.03;

    if (trainingLevel === 'advanced') {
      maintenanceDoseRaw = Math.max(maintenanceDoseRaw, 5);
    } else if (trainingLevel === 'intermediate') {
      maintenanceDoseRaw = Math.max(maintenanceDoseRaw, 3.5);
    }

    // Clamp between 3g and 5g
    const maintenanceDoseG = Math.round(Math.max(3, Math.min(5, maintenanceDoseRaw)) * 10) / 10;

    // Monthly usage at maintenance
    const monthlyGrams = Math.round(maintenanceDoseG * 30);

    // Cost estimate at $0.05 per gram
    const monthlyCost = Math.round(monthlyGrams * 0.05 * 100) / 100;

    // Timing tip based on training level
    let timingTip: string;
    if (trainingLevel === 'beginner') {
      timingTip = `Take ${maintenanceDoseG}g of creatine monohydrate daily with a meal that contains carbohydrates. Post-workout with a protein shake and some fruit is ideal. Consistency matters more than timing, so just pick a time you will remember every day and stick with it.`;
    } else if (trainingLevel === 'advanced') {
      timingTip = `Take ${maintenanceDoseG}g of creatine monohydrate post-workout mixed with your protein shake and a fast-digesting carb source like dextrose or fruit juice. On rest days, take it with your largest meal. The insulin spike from carbs enhances creatine uptake into muscle cells.`;
    } else {
      timingTip = `Take ${maintenanceDoseG}g of creatine monohydrate daily, ideally post-workout with carbs and protein. On non-training days, take it with any meal. There is no need to cycle creatine. Take it every single day, training days and rest days alike, for best results.`;
    }

    // Build results
    const results: Record<string, number | string> = {
      maintenance_dose_g: maintenanceDoseG,
      loading_dose_g: loadingPhase === 'yes' ? loadingDoseG : 'N/A (no loading phase)',
      loading_days: loadingPhase === 'yes' ? loadingDays : 0,
      loading_doses_per_day: loadingPhase === 'yes' ? loadingDosesPerDay : 0,
      monthly_grams: monthlyGrams,
      monthly_cost_estimate: monthlyCost,
      timing_tip: timingTip,
    };

    return results;
  },
  affiliateIds: ['creatine'],
  supportingContent: {
    intro:
      '<a href="https://examine.com/supplements/creatine/" target="_blank" rel="noopener">Creatine monohydrate</a> is the most researched sports supplement in existence, shown to increase strength, power output, and muscle recovery. This creatine dosage calculator gives you personalized loading and maintenance doses based on your body weight so you get the full benefit without wasting money. Pair your creatine protocol with targets from our <a href="/protein-macro-calculator">Protein &amp; Macro Calculator</a> for a complete supplement and nutrition plan.',
    howToUse:
      'Enter your body weight, select your unit, choose whether to include a creatine loading phase, and select your training level. The calculator outputs your daily maintenance dose, optional loading protocol, monthly usage, and cost projection. Track your progress with our <a href="/one-rep-max-calculator">1RM Calculator</a> to see strength gains over time.',
    faq: [
      {
        question: 'Is the loading phase necessary?',
        answer:
          'The creatine loading phase is not required. It saturates your muscles in about 5-7 days instead of 3-4 weeks at the maintenance dose. According to the <a href="https://jissn.biomedcentral.com/articles/10.1186/s12970-017-0173-z" target="_blank" rel="noopener">ISSN position stand</a>, both approaches reach the same endpoint. Some people experience minor bloating during loading, which is another reason to skip it.',
      },
      {
        question: 'Will creatine cause water weight gain?',
        answer:
          'Yes, creatine pulls water into your muscle cells, typically adding 2-5 pounds in the first week or two. This is not fat — it is intracellular water that creates a more anabolic environment. Use our <a href="/body-fat-calculator">Body Fat Calculator</a> to confirm your actual composition has not changed. The water is inside the muscle, making them look fuller rather than bloated.',
      },
      {
        question: 'Is creatine monohydrate better than other forms?',
        answer:
          'Creatine monohydrate is the gold standard used in the vast majority of <a href="https://pubmed.ncbi.nlm.nih.gov/33557850/" target="_blank" rel="noopener">research studies</a>. Forms like creatine HCL and buffered creatine have not been shown to be more effective despite costing more. Monohydrate is the cheapest, most studied, and most proven form available.',
      },
    ],
    relatedTools: ['protein-macro-calculator', 'one-rep-max-calculator', 'body-fat-calculator'],
  },
};
