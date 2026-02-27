import { CalculatorConfig } from '@/lib/types';

export const caffeineCutoffCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'bedtime_hour',
      label: 'Target Bedtime',
      type: 'select',
      defaultValue: '11pm',
      options: [
        { label: '9:00 PM', value: '9pm' },
        { label: '10:00 PM', value: '10pm' },
        { label: '11:00 PM', value: '11pm' },
        { label: '12:00 AM (Midnight)', value: '12am' },
        { label: '1:00 AM', value: '1am' },
      ],
      helpText: 'The time you want to fall asleep, not just get into bed.',
    },
    {
      id: 'caffeine_sensitivity',
      label: 'Caffeine Sensitivity',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Low (caffeine barely affects me)', value: 'low' },
        { label: 'Normal (average response)', value: 'normal' },
        { label: 'High (caffeine keeps me wired)', value: 'high' },
      ],
      helpText: 'How strongly caffeine tends to affect your sleep and energy.',
    },
    {
      id: 'typical_drink',
      label: 'Typical Caffeine Drink',
      type: 'select',
      defaultValue: 'coffee_8oz',
      options: [
        { label: 'Drip Coffee (8 oz)', value: 'coffee_8oz' },
        { label: 'Espresso (single shot)', value: 'espresso' },
        { label: 'Cold Brew (12 oz)', value: 'cold_brew' },
        { label: 'Energy Drink (16 oz)', value: 'energy_drink' },
        { label: 'Black/Green Tea (8 oz)', value: 'tea' },
        { label: 'Soda (12 oz)', value: 'soda' },
      ],
      helpText: 'Your go-to caffeinated beverage.',
    },
    {
      id: 'drinks_per_day',
      label: 'Drinks Per Day',
      type: 'number',
      placeholder: 'e.g. 2',
      min: 1,
      max: 6,
      step: 1,
      defaultValue: 2,
      helpText: 'How many servings of your typical drink you have daily.',
    },
  ],
  outputs: [
    {
      id: 'cutoff_time',
      label: 'Caffeine Cutoff Time',
      highlight: true,
      description: 'Stop drinking caffeine by this time to sleep well.',
    },
    {
      id: 'total_daily_caffeine_mg',
      label: 'Total Daily Caffeine',
      unit: 'mg',
      format: 'number',
      description: 'Total milligrams of caffeine you consume per day.',
    },
    {
      id: 'caffeine_per_drink',
      label: 'Caffeine Per Drink',
      unit: 'mg',
      format: 'number',
      description: 'Milligrams of caffeine in each serving.',
    },
    {
      id: 'hours_before_bed',
      label: 'Hours Before Bed to Stop',
      unit: 'hours',
      format: 'number',
      description: 'How many hours before bedtime you need to cut off caffeine.',
    },
    {
      id: 'caffeine_at_bedtime_mg',
      label: 'Caffeine at Bedtime (if cutoff followed)',
      unit: 'mg',
      format: 'number',
      description: 'Estimated caffeine remaining in your system at bedtime if you stop at the cutoff.',
    },
    {
      id: 'sleep_tip',
      label: 'Sleep Tip',
      description: 'A personalized tip to optimize your sleep around caffeine.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const bedtimeHour = inputs.bedtime_hour as string;
    const sensitivity = inputs.caffeine_sensitivity as string;
    const typicalDrink = inputs.typical_drink as string;
    const drinksPerDay = Number(inputs.drinks_per_day) || 2;

    // Caffeine content per drink in mg
    const caffeineMap: Record<string, number> = {
      coffee_8oz: 95,
      espresso: 63,
      cold_brew: 200,
      energy_drink: 160,
      tea: 47,
      soda: 34,
    };

    const caffeinePerDrink = caffeineMap[typicalDrink] || 95;
    const totalDailyCaffeine = caffeinePerDrink * drinksPerDay;

    // Caffeine half-life in hours by sensitivity
    const halfLifeMap: Record<string, number> = {
      low: 3,
      normal: 5,
      high: 7,
    };

    const halfLife = halfLifeMap[sensitivity] || 5;

    // Bedtime as hour in 24h format
    const bedtimeMap: Record<string, number> = {
      '9pm': 21,
      '10pm': 22,
      '11pm': 23,
      '12am': 24,
      '1am': 25,
    };

    const bedtime24 = bedtimeMap[bedtimeHour] || 23;

    // Calculate hours needed for one dose of caffeine to drop below 25mg
    // Formula: remaining = dose * (0.5 ^ (hours / halfLife))
    // We need: 25 = caffeinePerDrink * (0.5 ^ (hours / halfLife))
    // hours = halfLife * log2(caffeinePerDrink / 25)
    const hoursNeeded = halfLife * (Math.log(caffeinePerDrink / 25) / Math.log(2));
    const hoursBeforeBed = Math.ceil(hoursNeeded);

    // Cutoff time in 24h
    let cutoffHour24 = bedtime24 - hoursBeforeBed;
    if (cutoffHour24 < 0) {
      cutoffHour24 = 0;
    }

    // Format cutoff time as 12h string
    const formatHour = (h: number): string => {
      const normalizedH = h % 24;
      if (normalizedH === 0) return '12:00 AM';
      if (normalizedH === 12) return '12:00 PM';
      if (normalizedH < 12) return `${normalizedH}:00 AM`;
      return `${normalizedH - 12}:00 PM`;
    };

    const cutoffTimeStr = formatHour(cutoffHour24);

    // Calculate caffeine remaining at bedtime if they drink at cutoff
    const hoursFromCutoffToBed = bedtime24 - cutoffHour24;
    const halfLivesElapsed = hoursFromCutoffToBed / halfLife;
    const caffeineAtBedtime = Math.round(caffeinePerDrink * Math.pow(0.5, halfLivesElapsed));

    // Sleep tip based on inputs
    let sleepTip: string;
    if (sensitivity === 'high') {
      sleepTip = 'With high caffeine sensitivity, consider switching your afternoon drinks to decaf or herbal tea. Even small amounts of caffeine late in the day can fragment your deep sleep cycles without you realizing it.';
    } else if (totalDailyCaffeine > 400) {
      sleepTip = `You are consuming ${totalDailyCaffeine}mg of caffeine daily, which exceeds the FDA's recommended limit of 400mg. Consider cutting back by one drink to reduce jitteriness, anxiety, and sleep disruption.`;
    } else if (typicalDrink === 'cold_brew') {
      sleepTip = 'Cold brew packs nearly double the caffeine of regular drip coffee. If you enjoy an afternoon pick-me-up, switch to regular coffee or tea after your morning cold brew to stay under your cutoff time.';
    } else if (typicalDrink === 'energy_drink') {
      sleepTip = 'Energy drinks combine caffeine with sugar and other stimulants like taurine, which can amplify the wakefulness effect. Stick to your morning window and consider switching to coffee for a cleaner energy source.';
    } else {
      sleepTip = 'Front-load your caffeine. Have your strongest coffee first thing in the morning and switch to lighter options like tea by mid-day. This maximizes alertness when you need it without compromising sleep quality.';
    }

    return {
      cutoff_time: cutoffTimeStr,
      total_daily_caffeine_mg: totalDailyCaffeine,
      caffeine_per_drink: caffeinePerDrink,
      hours_before_bed: hoursBeforeBed,
      caffeine_at_bedtime_mg: caffeineAtBedtime,
      sleep_tip: sleepTip,
    };
  },
  supportingContent: {
    intro:
      'This caffeine half-life calculator works backwards from your bedtime to tell you when to stop drinking coffee, energy drinks, or tea. <a href="https://en.wikipedia.org/wiki/Caffeine#Pharmacology" target="_blank" rel="noopener">Caffeine has a half-life of 5 to 7 hours</a> for most people, meaning half of your afternoon dose is still in your blood at bedtime. Pair this tool with our <a href="/sleep-cycle-calculator">Sleep Cycle Calculator</a> to time both your caffeine cutoff and bedtime for the best possible sleep quality.',
    howToUse:
      'Enter your target bedtime, caffeine sensitivity level, your typical caffeinated drink, and how many you have per day. The caffeine cutoff calculator computes your ideal stop time, total daily intake, and how much caffeine remains in your system at bedtime. Use the cutoff as a hard stop each day.',
    faq: [
      {
        question: 'How does caffeine actually affect sleep quality?',
        answer:
          'Even if you fall asleep after caffeine, it significantly reduces deep sleep (slow-wave sleep). A <a href="https://pubmed.ncbi.nlm.nih.gov/24235903/" target="_blank" rel="noopener">study in the Journal of Clinical Sleep Medicine</a> found that caffeine consumed 6 hours before bed can reduce total sleep by over an hour. Your recovery, hormone production, and cognitive performance all take a hit.',
      },
      {
        question: 'Does decaf coffee still have caffeine?',
        answer:
          'Yes. A typical 8-ounce cup of decaf contains 2 to 15 milligrams of caffeine. While far less than regular coffee, highly sensitive individuals may still notice an effect from multiple cups. If caffeine keeps you wired, be mindful of decaf in the evening and use our <a href="/sleep-cycle-calculator">Sleep Cycle Calculator</a> to optimize your schedule.',
      },
      {
        question: 'Can you build a tolerance to caffeine?',
        answer:
          'Yes, regular use leads to tolerance — you need more for the same alertness boost. However, tolerance does not change how caffeine affects your <a href="https://www.sleepfoundation.org/nutrition/caffeine-and-sleep" target="_blank" rel="noopener">sleep architecture</a>. Even habitual coffee drinkers experience reduced deep sleep from late-day caffeine. Your brain adapts to feeling alert, but sleep quality still suffers.',
      },
    ],
    relatedTools: ['sleep-cycle-calculator', 'morning-routine-builder', 'hangover-recovery-calculator'],
  },
};
