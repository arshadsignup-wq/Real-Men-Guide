import { CalculatorConfig } from '@/lib/types';

export const bodyRoundnessIndexCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'height',
      label: 'Height',
      type: 'number',
      placeholder: 'e.g. 70',
      unit: 'inches',
      min: 55,
      max: 84,
      step: 0.5,
      helpText: 'Your total height. For imperial, enter inches (5\'10" = 70 inches).',
    },
    {
      id: 'waist',
      label: 'Waist Circumference',
      type: 'number',
      placeholder: 'e.g. 34',
      unit: 'inches',
      min: 24,
      max: 60,
      step: 0.25,
      helpText: 'Measure at the narrowest point of your torso, typically at the navel. Relax and do not suck in.',
    },
    {
      id: 'unit_system',
      label: 'Unit System',
      type: 'select',
      defaultValue: 'imperial',
      options: [
        { label: 'Imperial (inches)', value: 'imperial' },
        { label: 'Metric (centimeters)', value: 'metric' },
      ],
      helpText: 'Choose whether your measurements are in inches or centimeters.',
    },
  ],
  outputs: [
    {
      id: 'bri_score',
      label: 'Body Roundness Index (BRI)',
      format: 'number',
      highlight: true,
      description: 'Your calculated BRI score. Lower values indicate a leaner body shape.',
    },
    {
      id: 'health_category',
      label: 'Health Category',
      description: 'Where your BRI falls on the body composition scale.',
    },
    {
      id: 'waist_to_height_ratio',
      label: 'Waist-to-Height Ratio',
      format: 'number',
      description: 'Your waist circumference divided by your height. Below 0.5 is considered healthy.',
    },
    {
      id: 'bri_percentile_estimate',
      label: 'Estimated Percentile',
      description: 'Approximate population percentile based on your BRI score.',
    },
    {
      id: 'recommendation',
      label: 'Recommendation',
      description: 'Personalized guidance based on your BRI category.',
    },
    {
      id: 'measurement_tip',
      label: 'Measurement Tip',
      description: 'How to take the most accurate waist measurement.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    let height = Number(inputs.height) || 70;
    let waist = Number(inputs.waist) || 34;
    const unitSystem = inputs.unit_system as string;

    // Convert to meters for BRI formula
    let heightM: number;
    let waistM: number;

    if (unitSystem === 'metric') {
      // Inputs are in centimeters
      heightM = height / 100;
      waistM = waist / 100;
    } else {
      // Inputs are in inches, convert to meters
      heightM = height * 0.0254;
      waistM = waist * 0.0254;
    }

    // BRI formula: 364.2 - 365.5 * sqrt(1 - ((waist / (2*pi))^2 / (0.5 * height)^2))
    const waistRadius = waistM / (2 * Math.PI);
    const halfHeight = 0.5 * heightM;
    const eccentricitySquared = (waistRadius * waistRadius) / (halfHeight * halfHeight);

    // Clamp eccentricity to avoid sqrt of negative
    let briScore: number;
    if (eccentricitySquared >= 1) {
      briScore = 364.2; // Very high, essentially circular cross section
    } else {
      briScore = 364.2 - 365.5 * Math.sqrt(1 - eccentricitySquared);
    }

    briScore = Math.round(briScore * 100) / 100;

    // Waist-to-height ratio (use original units, ratio is dimensionless)
    const waistToHeightRatio = Math.round((waist / height) * 1000) / 1000;

    // Health category based on BRI
    let healthCategory: string;
    let recommendation: string;

    if (briScore < 1) {
      healthCategory = 'Very Lean';
      recommendation = 'Your BRI indicates a very lean body composition. If you are an athlete, this may be optimal. Otherwise, ensure you are eating enough to support your activity level and maintaining adequate muscle mass through resistance training.';
    } else if (briScore < 2) {
      healthCategory = 'Lean';
      recommendation = 'You are in a lean, healthy range. This BRI is associated with lower risk of metabolic disease. Maintain your current activity level and nutrition habits. Focus on progressive strength training to build or preserve lean muscle mass.';
    } else if (briScore < 3) {
      healthCategory = 'Average';
      recommendation = 'Your BRI is in the average range for adult men. You are not at elevated risk, but there is room for improvement. Increasing your weekly exercise, particularly Zone 2 cardio and resistance training, while moderately reducing caloric intake can move you toward the lean category.';
    } else if (briScore < 4) {
      healthCategory = 'Above Average';
      recommendation = 'Your BRI is above the average range, which is associated with increased risk of metabolic syndrome, type 2 diabetes, and cardiovascular disease. Prioritize reducing waist circumference through a combination of caloric deficit, regular exercise, and stress management. Even a 2-inch reduction in waist circumference can significantly improve health markers.';
    } else if (briScore < 5) {
      healthCategory = 'High';
      recommendation = 'A BRI in this range indicates elevated visceral fat, which is strongly correlated with cardiometabolic risk. Consider consulting a physician for a full metabolic panel. Start with walking 30 minutes daily, reduce processed food intake, and gradually increase exercise intensity. Small consistent changes compound over time.';
    } else {
      healthCategory = 'Very High';
      recommendation = 'A BRI above 5 indicates very high central adiposity. This is associated with significantly elevated risk of heart disease, diabetes, and other metabolic conditions. Seek guidance from a healthcare provider to establish a safe, sustainable plan for reducing waist circumference. Medical intervention may be appropriate alongside lifestyle changes.';
    }

    // Percentile estimate based on BRI (approximate for adult males)
    let percentileEstimate: string;
    if (briScore < 1) {
      percentileEstimate = 'Below 10th percentile (leaner than 90% of adult men)';
    } else if (briScore < 1.5) {
      percentileEstimate = 'Approximately 10th-25th percentile (leaner than most)';
    } else if (briScore < 2.5) {
      percentileEstimate = 'Approximately 25th-50th percentile (around average)';
    } else if (briScore < 3.5) {
      percentileEstimate = 'Approximately 50th-75th percentile (above average body roundness)';
    } else if (briScore < 4.5) {
      percentileEstimate = 'Approximately 75th-90th percentile (higher than most)';
    } else {
      percentileEstimate = 'Above 90th percentile (higher body roundness than most adult men)';
    }

    // Measurement tip
    const measurementTip = 'For the most accurate waist measurement, use a flexible tape measure placed horizontally at the level of your navel. Stand upright, breathe out naturally, and do not suck in your stomach. The tape should be snug but not compressing the skin. Measure at the same time of day (ideally morning before eating) for consistent tracking over time.';

    return {
      bri_score: briScore,
      health_category: healthCategory,
      waist_to_height_ratio: waistToHeightRatio,
      bri_percentile_estimate: percentileEstimate,
      recommendation: recommendation,
      measurement_tip: measurementTip,
    };
  },
  supportingContent: {
    intro:
      'The Body Roundness Index (BRI) is a newer body composition metric that estimates body fat distribution using just your height and waist circumference. Unlike BMI, which treats all weight equally regardless of where it sits, BRI specifically captures how round your midsection is relative to your height, making it a better predictor of visceral fat and cardiometabolic risk. Research published in JAMA Network Open has shown that BRI is a stronger predictor of mortality risk than BMI. This calculator gives you your BRI score, health category, and actionable next steps.',
    howToUse:
      'Enter your height and waist circumference, then select your unit system. The calculator uses the BRI formula to generate your score, categorize your body composition, and calculate your waist-to-height ratio. Track your BRI over time to monitor changes in body composition, especially if you are working on reducing visceral fat through diet and exercise.',
    faq: [
      {
        question: 'How is BRI different from BMI?',
        answer:
          'BMI (Body Mass Index) divides your weight by your height squared, treating all weight the same whether it is muscle, bone, or fat. A muscular man can have a high BMI despite being lean. BRI uses waist circumference and height to model your body as an ellipse, specifically capturing central adiposity (belly fat). This makes BRI a better indicator of the dangerous visceral fat that surrounds your organs and drives metabolic disease. Two men with the same BMI can have very different BRI scores based on where they carry their weight.',
      },
      {
        question: 'What are the accuracy limitations of BRI?',
        answer:
          'BRI is a field estimate, not a clinical measurement like a DEXA scan or MRI. It does not distinguish between subcutaneous fat (under the skin) and visceral fat (around organs), though waist circumference is well correlated with visceral fat in research. BRI also does not account for muscle mass, so a very muscular man with a thick core may get a slightly elevated score. For most men, BRI provides a useful and easily trackable metric that is more informative than BMI for health risk assessment.',
      },
      {
        question: 'How should I measure my waist properly?',
        answer:
          'Stand upright with your feet shoulder-width apart. Use a flexible, non-stretchy tape measure. Place it horizontally around your waist at the level of your navel (belly button). Breathe out normally and take the measurement without sucking in your stomach or puffing it out. The tape should be snug against your skin without compressing it. Take the measurement twice and use the average. For tracking progress, always measure at the same time of day, ideally in the morning before eating or drinking.',
      },
    ],
    relatedTools: ['body-fat-calculator', 'tdee-calculator', 'protein-macro-calculator'],
  },
};
