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
      'This body fat percentage calculator for men uses the <a href="https://en.wikipedia.org/wiki/United_States_Navy_body_composition_assessment" target="_blank" rel="noopener">U.S. Navy body fat formula</a> — one of the most widely used field methods for estimating body composition without expensive equipment. All you need is a tape measure and your height. The calculator gives you your estimated body fat percentage, fat mass, lean mass, and a fitness classification. For a fuller picture, pair it with our <a href="/body-roundness-index-calculator">Body Roundness Index Calculator</a> to assess visceral fat risk.',
    howToUse:
      'Select your unit system, then enter your waist circumference (measured at the navel while relaxed), neck circumference (just below the Adam\'s apple), height, and weight. The tool estimates your body fat using the Navy formula. Use the fitness category to gauge your condition, then head to our <a href="/tdee-calculator">TDEE Calculator</a> to dial in your daily calories.',
    faq: [
      {
        question: 'How accurate is the U.S. Navy body fat method?',
        answer:
          'The Navy method is generally accurate within 1-3% of <a href="https://en.wikipedia.org/wiki/Dual-energy_X-ray_absorptiometry" target="_blank" rel="noopener">DEXA scan</a> results for most men. It is most reliable in the 15-25% body fat range and may slightly over- or underestimate at the extremes. For a free, equipment-free body fat estimate, it remains one of the best options available.',
      },
      {
        question: 'When should I take my measurements?',
        answer:
          'Measure first thing in the morning before eating or drinking. Stand relaxed — do not flex or suck in your stomach. Take each measurement twice and use the average. Consistent conditions make it easier to track body composition changes over time alongside tools like our <a href="/protein-macro-calculator">Protein &amp; Macro Calculator</a>.',
      },
      {
        question: 'What body fat percentage should I aim for?',
        answer:
          'For most men, a healthy body fat percentage is 10-20%. Competitive athletes often sit at 6-13%, while a lean, fit look falls around 10-17%. The <a href="https://www.acefitness.org/resources/everyone/tools-calculators/percent-body-fat-calculator/" target="_blank" rel="noopener">ACE body fat chart</a> is a solid reference. Going below 5% is not sustainable and can harm hormone levels.',
      },
    ],
    relatedTools: ['tdee-calculator', 'protein-macro-calculator', 'one-rep-max-calculator'],
  },
};
