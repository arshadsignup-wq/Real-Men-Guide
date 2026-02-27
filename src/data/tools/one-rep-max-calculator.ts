import { CalculatorConfig } from '@/lib/types';

export const oneRepMaxCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'weight_lifted',
      label: 'Weight Lifted',
      type: 'number',
      placeholder: 'e.g. 225',
      unit: 'lbs',
      min: 5,
      max: 1500,
      step: 2.5,
      helpText: 'The weight you lifted for your set.',
    },
    {
      id: 'reps',
      label: 'Reps Performed',
      type: 'number',
      placeholder: 'e.g. 5',
      unit: 'reps',
      min: 1,
      max: 30,
      step: 1,
      helpText: 'Number of reps you completed with good form (1-30).',
    },
    {
      id: 'exercise',
      label: 'Exercise',
      type: 'select',
      defaultValue: 'bench_press',
      options: [
        { label: 'Bench Press', value: 'bench_press' },
        { label: 'Squat', value: 'squat' },
        { label: 'Deadlift', value: 'deadlift' },
        { label: 'Overhead Press', value: 'overhead_press' },
        { label: 'Barbell Row', value: 'barbell_row' },
      ],
      helpText: 'Select your exercise (for context — the formula works for all lifts).',
    },
  ],
  outputs: [
    {
      id: 'oneRepMax',
      label: 'Estimated 1 Rep Max',
      unit: 'lbs',
      format: 'number',
      highlight: true,
      description: 'Your estimated one-rep maximum using the Epley formula.',
    },
    {
      id: 'pct95',
      label: '95% of 1RM (~2 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Near-max effort — heavy singles and doubles.',
    },
    {
      id: 'pct90',
      label: '90% of 1RM (~4 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Strength range — heavy sets of 3-4.',
    },
    {
      id: 'pct85',
      label: '85% of 1RM (~6 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Strength-hypertrophy bridge — sets of 5-6.',
    },
    {
      id: 'pct80',
      label: '80% of 1RM (~8 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Hypertrophy range — solid working weight for sets of 8.',
    },
    {
      id: 'pct75',
      label: '75% of 1RM (~10 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Volume work — moderate weight, higher reps.',
    },
    {
      id: 'pct70',
      label: '70% of 1RM (~12 reps)',
      unit: 'lbs',
      format: 'number',
      description: 'Endurance and pump work — lighter sets of 12+.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const weight = Number(inputs.weight_lifted);
    const reps = Number(inputs.reps);

    if (weight <= 0 || reps <= 0) {
      return {
        oneRepMax: 0,
        pct95: 0,
        pct90: 0,
        pct85: 0,
        pct80: 0,
        pct75: 0,
        pct70: 0,
      };
    }

    // Epley Formula: 1RM = weight * (1 + reps / 30)
    // If reps = 1, the 1RM is just the weight itself
    let oneRM: number;
    if (reps === 1) {
      oneRM = weight;
    } else {
      oneRM = weight * (1 + reps / 30);
    }

    // Round to nearest 2.5 lbs for practical use
    const roundToPlate = (w: number): number => Math.round(w / 2.5) * 2.5;

    return {
      oneRepMax: roundToPlate(oneRM),
      pct95: roundToPlate(oneRM * 0.95),
      pct90: roundToPlate(oneRM * 0.90),
      pct85: roundToPlate(oneRM * 0.85),
      pct80: roundToPlate(oneRM * 0.80),
      pct75: roundToPlate(oneRM * 0.75),
      pct70: roundToPlate(oneRM * 0.70),
    };
  },
  supportingContent: {
    intro:
      'Your one-rep max (1RM) is the most weight you can lift for a single repetition with proper form. This 1RM calculator uses the <a href="https://en.wikipedia.org/wiki/One-repetition_maximum#Epley_formula" target="_blank" rel="noopener">Epley formula</a> to estimate your max from any submaximal set, so you never have to risk a true max attempt. Knowing your 1RM is essential for programming strength, hypertrophy, or endurance work. Use our <a href="/barbell-plate-loading-calculator">Barbell Plate Loading Calculator</a> to load the exact plates for each percentage.',
    howToUse:
      'Enter the weight you lifted and how many reps you completed with good form. Select the exercise for reference. The 1RM calculator estimates your max and shows exact weights for common training percentages. Program your working sets — 80% for sets of 8, or 85% for sets of 5-6 — and fuel them with targets from our <a href="/protein-macro-calculator">Protein &amp; Macro Calculator</a>.',
    faq: [
      {
        question: 'How accurate is the Epley formula?',
        answer:
          'The Epley formula is most accurate for rep ranges between 2 and 10. Beyond 10 reps, muscular endurance becomes a bigger factor than pure strength, reducing reliability. For the best estimate, use a weight you can lift for 3-6 reps with solid form. The formula tends to slightly overestimate at higher rep ranges.',
      },
      {
        question: 'Should I actually test my one-rep max in the gym?',
        answer:
          'For most lifters, there is no need to test a true 1RM regularly. It is fatiguing, carries injury risk, and a submaximal estimate is accurate enough for programming. The <a href="https://www.nsca.com/" target="_blank" rel="noopener">NSCA</a> recommends testing only when well-rested with a spotter. Competition powerlifters should test; recreational lifters generally should not.',
      },
      {
        question: 'Why are the weights rounded to 2.5 lbs?',
        answer:
          'Standard weight plates allow 2.5 lb jumps (a 1.25 lb plate on each side). Rounding gives you a number you can actually load on a barbell. Use our <a href="/barbell-plate-loading-calculator">Barbell Plate Loading Calculator</a> to see the exact plate-by-plate breakdown for any weight.',
      },
    ],
    relatedTools: ['body-fat-calculator', 'tdee-calculator', 'protein-macro-calculator'],
  },
};
