import { CalculatorConfig } from '@/lib/types';

export const zone2HeartRateCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'age',
      label: 'Age',
      type: 'number',
      placeholder: 'e.g. 30',
      unit: 'years',
      min: 15,
      max: 80,
      step: 1,
      helpText: 'Your current age in years.',
    },
    {
      id: 'resting_heart_rate',
      label: 'Resting Heart Rate (optional)',
      type: 'number',
      placeholder: 'e.g. 65',
      unit: 'bpm',
      min: 40,
      max: 100,
      step: 1,
      helpText: 'Measure first thing in the morning before getting out of bed. Required for the Karvonen method.',
    },
    {
      id: 'method',
      label: 'Calculation Method',
      type: 'select',
      defaultValue: 'percentage_max',
      options: [
        { label: 'Percentage of Max HR (standard)', value: 'percentage_max' },
        { label: 'Karvonen (heart rate reserve)', value: 'karvonen' },
        { label: 'MAF Method (Maffetone)', value: 'maf' },
      ],
      helpText: 'Karvonen is more personalized if you know your resting HR. MAF is popular for endurance athletes.',
    },
  ],
  outputs: [
    {
      id: 'zone_2_low',
      label: 'Zone 2 Lower Bound',
      unit: 'bpm',
      format: 'number',
      highlight: true,
      description: 'The bottom of your Zone 2 heart rate range.',
    },
    {
      id: 'zone_2_high',
      label: 'Zone 2 Upper Bound',
      unit: 'bpm',
      format: 'number',
      highlight: true,
      description: 'The top of your Zone 2 heart rate range.',
    },
    {
      id: 'max_heart_rate',
      label: 'Estimated Max Heart Rate',
      unit: 'bpm',
      format: 'number',
      description: 'Estimated maximum heart rate using the 220 - age formula.',
    },
    {
      id: 'zone_1_range',
      label: 'Zone 1 (Recovery)',
      description: 'Very light effort, active recovery.',
    },
    {
      id: 'zone_3_range',
      label: 'Zone 3 (Tempo)',
      description: 'Moderate effort, comfortably hard.',
    },
    {
      id: 'zone_4_range',
      label: 'Zone 4 (Threshold)',
      description: 'Hard effort, sustainable for shorter periods.',
    },
    {
      id: 'zone_5_range',
      label: 'Zone 5 (Max Effort)',
      description: 'All-out effort, very short duration.',
    },
    {
      id: 'training_tip',
      label: 'Training Tip',
      description: 'How Zone 2 training should feel and how to use it.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const age = Number(inputs.age) || 30;
    const restingHR = Number(inputs.resting_heart_rate) || 0;
    const method = inputs.method as string;

    // Estimated max heart rate
    const maxHR = 220 - age;

    let zone2Low: number;
    let zone2High: number;
    let zone1Low: number;
    let zone1High: number;
    let zone3Low: number;
    let zone3High: number;
    let zone4Low: number;
    let zone4High: number;
    let zone5Low: number;
    let zone5High: number;

    if (method === 'karvonen' && restingHR > 0) {
      // Karvonen method: target = resting + intensity% * (max - resting)
      const hrReserve = maxHR - restingHR;

      zone1Low = Math.round(restingHR + 0.50 * hrReserve);
      zone1High = Math.round(restingHR + 0.60 * hrReserve);
      zone2Low = Math.round(restingHR + 0.60 * hrReserve);
      zone2High = Math.round(restingHR + 0.70 * hrReserve);
      zone3Low = Math.round(restingHR + 0.70 * hrReserve);
      zone3High = Math.round(restingHR + 0.80 * hrReserve);
      zone4Low = Math.round(restingHR + 0.80 * hrReserve);
      zone4High = Math.round(restingHR + 0.90 * hrReserve);
      zone5Low = Math.round(restingHR + 0.90 * hrReserve);
      zone5High = maxHR;
    } else if (method === 'maf') {
      // MAF Method: 180 - age as the upper limit
      // Zone 2 range is (180 - age - 10) to (180 - age)
      const mafHR = 180 - age;
      zone2High = mafHR;
      zone2Low = mafHR - 10;

      // Approximate other zones using %max for reference
      zone1Low = Math.round(maxHR * 0.50);
      zone1High = zone2Low - 1;
      zone3Low = zone2High + 1;
      zone3High = Math.round(maxHR * 0.80);
      zone4Low = zone3High + 1;
      zone4High = Math.round(maxHR * 0.90);
      zone5Low = zone4High + 1;
      zone5High = maxHR;
    } else {
      // Percentage of Max HR (default)
      zone1Low = Math.round(maxHR * 0.50);
      zone1High = Math.round(maxHR * 0.60);
      zone2Low = Math.round(maxHR * 0.60);
      zone2High = Math.round(maxHR * 0.70);
      zone3Low = Math.round(maxHR * 0.70);
      zone3High = Math.round(maxHR * 0.80);
      zone4Low = Math.round(maxHR * 0.80);
      zone4High = Math.round(maxHR * 0.90);
      zone5Low = Math.round(maxHR * 0.90);
      zone5High = maxHR;
    }

    // Training tip varies by method
    let trainingTip: string;
    if (method === 'maf') {
      trainingTip = `The MAF method targets aerobic base building. At ${zone2Low}-${zone2High} bpm, you should be able to hold a full conversation without gasping. Most of your weekly training (80%) should be at or below this intensity. It feels slow at first, but over weeks your pace at the same heart rate will improve dramatically.`;
    } else if (method === 'karvonen') {
      trainingTip = `Using the Karvonen method with your resting HR of ${restingHR} bpm gives a more personalized Zone 2 range. At ${zone2Low}-${zone2High} bpm, you should feel like you could sustain the effort for over an hour. You can talk in sentences but not sing. This is where your body primarily burns fat for fuel and builds mitochondrial density.`;
    } else {
      trainingTip = `Zone 2 (${zone2Low}-${zone2High} bpm) should feel easy to moderate. You can hold a conversation but prefer not to. Think of it as a pace you could maintain for 45-90 minutes without wanting to stop. Most longevity researchers recommend spending 3-4 hours per week in Zone 2 for optimal cardiovascular health.`;
    }

    return {
      zone_2_low: zone2Low,
      zone_2_high: zone2High,
      max_heart_rate: maxHR,
      zone_1_range: `${zone1Low} - ${zone1High} bpm`,
      zone_3_range: `${zone3Low} - ${zone3High} bpm`,
      zone_4_range: `${zone4Low} - ${zone4High} bpm`,
      zone_5_range: `${zone5Low} - ${zone5High} bpm`,
      training_tip: trainingTip,
    };
  },
  supportingContent: {
    intro:
      'Zone 2 cardio heart rate training has become one of the most talked-about concepts in fitness and <a href="https://peterattiamd.com/zone-2/" target="_blank" rel="noopener">longevity science</a>. It is the intensity where your body primarily burns fat, builds mitochondrial density, and improves cardiovascular efficiency without high-intensity stress. Most men train too hard during "easy" sessions, never actually staying in Zone 2. This calculator gives you the exact heart rate range using three proven methods.',
    howToUse:
      'Enter your age and optionally your resting heart rate (measured first thing in the morning). Choose your method: Percentage of Max HR is simplest, <a href="https://en.wikipedia.org/wiki/Karvonen_method" target="_blank" rel="noopener">Karvonen</a> is more personalized, and MAF is favored by endurance athletes. Use the Zone 2 range alongside our <a href="/tdee-calculator">TDEE Calculator</a> to balance cardio with nutrition.',
    faq: [
      {
        question: 'What is the talk test for Zone 2?',
        answer:
          'The talk test is the simplest way to confirm you are in Zone 2 without a heart rate monitor. You should be able to speak in full sentences but not sing. If you can only manage a few words between breaths, you are too high. Most people are surprised at how slow they need to go. Zone 2 cardio heart rate training feels easy — that is the point.',
      },
      {
        question: 'How long should I train in Zone 2?',
        answer:
          'Research suggests 3 to 4 hours of Zone 2 per week for optimal <a href="https://www.ahajournals.org/doi/10.1161/CIR.0000000000001048" target="_blank" rel="noopener">cardiovascular health</a>. Split that into 3-4 sessions of 45-60 minutes — walking on an incline, easy cycling, light rowing, or slow jogging all work. Pair Zone 2 days with strength training programmed using our <a href="/one-rep-max-calculator">1RM Calculator</a>.',
      },
      {
        question: 'Is Zone 2 training effective for fat loss?',
        answer:
          'Zone 2 is where your body uses the highest percentage of fat as fuel, improving fat oxidation over time. The real benefit is metabolic: regular training increases mitochondrial density, so your body burns fat more efficiently 24/7. For fat loss, combine Zone 2 with a moderate caloric deficit from our <a href="/tdee-calculator">TDEE Calculator</a>.',
      },
    ],
    relatedTools: ['body-fat-calculator', 'one-rep-max-calculator', 'tdee-calculator'],
  },
};
