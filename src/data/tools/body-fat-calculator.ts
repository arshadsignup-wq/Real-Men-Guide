import { CalculatorConfig } from '@/lib/types';

export const bodyFatCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'unit_system',
      label: 'Unit System',
      type: 'select',
      defaultValue: 'imperial',
      options: [
        { label: 'Imperial (inches, lbs)', value: 'imperial' },
        { label: 'Metric (cm, kg)', value: 'metric' },
      ],
      helpText: 'Choose your preferred measurement system.',
    },
    {
      id: 'waist',
      label: 'Waist Circumference',
      type: 'number',
      placeholder: 'e.g. 34',
      unit: 'inches',
      min: 20,
      max: 60,
      step: 0.25,
      helpText: 'Measure at the navel, relaxed (not sucked in).',
    },
    {
      id: 'neck',
      label: 'Neck Circumference',
      type: 'number',
      placeholder: 'e.g. 15',
      unit: 'inches',
      min: 10,
      max: 25,
      step: 0.25,
      helpText: 'Measure just below the larynx (Adam\'s apple).',
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
      helpText: 'Your total height.',
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
      helpText: 'Used to calculate fat mass and lean mass.',
    },
  ],
  outputs: [
    {
      id: 'bodyFatPercentage',
      label: 'Body Fat Percentage',
      unit: '%',
      format: 'percentage',
      highlight: true,
      description: 'Estimated body fat using the U.S. Navy method.',
    },
    {
      id: 'fatMass',
      label: 'Fat Mass',
      unit: 'lbs',
      format: 'number',
      description: 'Estimated weight of body fat.',
    },
    {
      id: 'leanMass',
      label: 'Lean Mass',
      unit: 'lbs',
      format: 'number',
      description: 'Estimated weight of lean tissue (muscle, bone, water).',
    },
    {
      id: 'fitnessCategory',
      label: 'Fitness Category',
      description: 'Where you fall on the body fat classification scale.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const unitSystem = inputs.unit_system as string;
    let waist = Number(inputs.waist);
    let neck = Number(inputs.neck);
    let height = Number(inputs.height);
    let weight = Number(inputs.weight);

    // Convert metric to imperial for the Navy formula
    if (unitSystem === 'metric') {
      // Inputs would be in cm and kg
      waist = waist / 2.54;
      neck = neck / 2.54;
      height = height / 2.54;
      weight = weight * 2.20462;
    }

    if (waist <= neck || waist <= 0 || neck <= 0 || height <= 0 || weight <= 0) {
      return {
        bodyFatPercentage: 0,
        fatMass: 0,
        leanMass: 0,
        fitnessCategory: 'Invalid inputs — waist must be greater than neck.',
      };
    }

    // U.S. Navy Method (male formula)
    const bodyFat =
      86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;

    const clampedBf = Math.max(0, Math.min(bodyFat, 60));
    const fatMass = (clampedBf / 100) * weight;
    const leanMass = weight - fatMass;

    let category: string;
    if (clampedBf < 2) {
      category = 'Dangerously Low';
    } else if (clampedBf <= 5) {
      category = 'Essential Fat (2-5%)';
    } else if (clampedBf <= 13) {
      category = 'Athlete (6-13%)';
    } else if (clampedBf <= 17) {
      category = 'Fitness (14-17%)';
    } else if (clampedBf <= 24) {
      category = 'Average (18-24%)';
    } else {
      category = 'Obese (25%+)';
    }

    return {
      bodyFatPercentage: Math.round(clampedBf * 10) / 10,
      fatMass: Math.round(fatMass * 10) / 10,
      leanMass: Math.round(leanMass * 10) / 10,
      fitnessCategory: category,
    };
  },
  affiliateIds: ['whey-protein', 'creatine'],
  supportingContent: {
    intro:
      'The U.S. Navy body fat formula is one of the most widely used field methods for estimating body composition without expensive equipment. All you need is a tape measure and your height — no calipers, DEXA scans, or gym visits required. This calculator gives you your estimated body fat percentage, fat mass, lean mass, and a fitness classification so you know exactly where you stand.',
    howToUse:
      'Select your unit system, then enter your waist circumference (measured at the navel while relaxed), neck circumference (measured just below the Adam\'s apple), height, and weight. Hit calculate and the tool will estimate your body fat percentage using the official Navy formula. Use the fitness category to gauge your current condition and set realistic goals.',
    faq: [
      {
        question: 'How accurate is the U.S. Navy body fat method?',
        answer:
          'The Navy method is generally accurate within 1-3% of DEXA scan results for most men. It tends to be most accurate for individuals in the average body fat range (15-25%) and may slightly underestimate or overestimate at the extremes. For a free, equipment-free method, it is one of the best options available.',
      },
      {
        question: 'When should I take my measurements?',
        answer:
          'For the most consistent results, measure first thing in the morning before eating or drinking. Stand relaxed and do not flex or suck in your stomach. Take each measurement twice and use the average. Using the same conditions each time makes it easier to track progress over time.',
      },
      {
        question: 'What body fat percentage should I aim for?',
        answer:
          'For most men, a body fat percentage between 10-20% is considered healthy and looks good. Competitive athletes often sit between 6-13%, while a lean, fit appearance typically falls in the 10-17% range. Going below 5% is not sustainable long-term and can harm hormone levels and overall health.',
      },
    ],
    relatedTools: ['tdee-calculator', 'protein-macro-calculator', 'one-rep-max-calculator'],
  },
};
