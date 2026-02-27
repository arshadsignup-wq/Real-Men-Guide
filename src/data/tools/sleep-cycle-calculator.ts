import { CalculatorConfig } from '@/lib/types';

export const sleepCycleCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'mode',
      label: 'I want to...',
      type: 'radio',
      defaultValue: 'wake',
      options: [
        { label: 'I need to wake up at', value: 'wake' },
        { label: 'I want to go to sleep at', value: 'sleep' },
      ],
      helpText: 'Choose whether you are setting a wake-up time or a bedtime.',
    },
    {
      id: 'time_hour',
      label: 'Hour',
      type: 'select',
      defaultValue: '7',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' },
      ],
      helpText: 'Select the hour.',
    },
    {
      id: 'time_minute',
      label: 'Minute',
      type: 'select',
      defaultValue: '0',
      options: [
        { label: '00', value: '0' },
        { label: '15', value: '15' },
        { label: '30', value: '30' },
        { label: '45', value: '45' },
      ],
      helpText: 'Select the minute.',
    },
    {
      id: 'am_pm',
      label: 'AM / PM',
      type: 'radio',
      defaultValue: 'AM',
      options: [
        { label: 'AM', value: 'AM' },
        { label: 'PM', value: 'PM' },
      ],
    },
  ],
  outputs: [
    {
      id: 'recommended_times',
      label: 'Recommended Times',
      description: 'Best times to go to sleep or wake up, listed from most to least sleep.',
    },
    {
      id: 'option_6_cycles',
      label: '6 Cycles (9 hrs)',
      format: 'time',
      description: 'Optimal sleep — full recovery and muscle repair.',
    },
    {
      id: 'option_5_cycles',
      label: '5 Cycles (7.5 hrs)',
      format: 'time',
      description: 'Great sleep — the sweet spot for most men.',
    },
    {
      id: 'option_4_cycles',
      label: '4 Cycles (6 hrs)',
      format: 'time',
      description: 'Acceptable — manageable short-term, not ideal long-term.',
    },
    {
      id: 'option_3_cycles',
      label: '3 Cycles (4.5 hrs)',
      format: 'time',
      description: 'Minimum — only for emergencies. You will feel it.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const mode = inputs.mode as string;
    let hour = Number(inputs.time_hour);
    const minute = Number(inputs.time_minute);
    const amPm = inputs.am_pm as string;

    // Convert to 24-hour format
    if (amPm === 'AM') {
      if (hour === 12) hour = 0;
    } else {
      if (hour !== 12) hour += 12;
    }

    // Total minutes from midnight
    const targetMinutes = hour * 60 + minute;

    const CYCLE_MINUTES = 90;
    const FALL_ASLEEP_MINUTES = 15;

    const formatTime = (totalMinutes: number): string => {
      // Normalize to 0-1440 range
      let m = ((totalMinutes % 1440) + 1440) % 1440;
      let h = Math.floor(m / 60);
      const min = m % 60;
      const period = h >= 12 ? 'PM' : 'AM';
      if (h === 0) h = 12;
      else if (h > 12) h -= 12;
      return `${h}:${min.toString().padStart(2, '0')} ${period}`;
    };

    const cycles = [6, 5, 4, 3];
    const times: string[] = [];

    if (mode === 'wake') {
      // Work backwards from wake-up time
      // Bedtime = wake time - (cycles * 90 min) - 15 min to fall asleep
      for (const c of cycles) {
        const bedtime = targetMinutes - c * CYCLE_MINUTES - FALL_ASLEEP_MINUTES;
        times.push(formatTime(bedtime));
      }
    } else {
      // Work forwards from bedtime
      // Wake time = bed time + 15 min to fall asleep + (cycles * 90 min)
      for (const c of cycles) {
        const wakeTime = targetMinutes + FALL_ASLEEP_MINUTES + c * CYCLE_MINUTES;
        times.push(formatTime(wakeTime));
      }
    }

    const label = mode === 'wake' ? 'Go to bed at' : 'Wake up at';
    const recommendedSummary = `${label}: ${times[0]}, ${times[1]}, ${times[2]}, or ${times[3]}`;

    return {
      recommended_times: recommendedSummary,
      option_6_cycles: `${times[0]} (6 cycles, 9 hrs sleep)`,
      option_5_cycles: `${times[1]} (5 cycles, 7.5 hrs sleep)`,
      option_4_cycles: `${times[2]} (4 cycles, 6 hrs sleep)`,
      option_3_cycles: `${times[3]} (3 cycles, 4.5 hrs sleep)`,
    };
  },
  supportingContent: {
    intro:
      'This sleep cycle calculator helps you time your bedtime or wake-up so you finish a complete <a href="https://en.wikipedia.org/wiki/Sleep_cycle" target="_blank" rel="noopener">90-minute sleep cycle</a> instead of waking mid-cycle feeling groggy. Whether you need 5 cycles or 6, aligning your schedule to these natural rhythms is the key to waking sharp and rested. Pair this with our <a href="/caffeine-cutoff-calculator">Caffeine Cutoff Calculator</a> to make sure your last cup of coffee is not sabotaging your sleep quality.',
    howToUse:
      'Choose whether to calculate a bedtime or wake-up time, then enter the time. The sleep cycle calculator adds 15 minutes to fall asleep and works in 90-minute cycles to give you four options. Pick the time that fits your schedule — 5 or 6 full cycles is ideal for recovery and performance.',
    faq: [
      {
        question: 'Why 90-minute cycles instead of 8 hours?',
        answer:
          'Each <a href="https://www.sleepfoundation.org/stages-of-sleep" target="_blank" rel="noopener">sleep cycle</a> lasts about 90 minutes and includes light sleep, deep sleep, and REM. Waking between cycles lets you feel alert immediately. Waking mid-cycle causes sleep inertia — that heavy, disoriented feeling — even after a long night. Timing your sleep around complete cycles matters more than total hours.',
      },
      {
        question: 'How many sleep cycles do I actually need?',
        answer:
          'Most adults need 5-6 full cycles (7.5-9 hours) per night for optimal health and recovery. You can manage 4 cycles occasionally, but chronic short sleep is linked to <a href="https://pubmed.ncbi.nlm.nih.gov/17520786/" target="_blank" rel="noopener">lower testosterone</a>, impaired muscle recovery, and poor decision-making. On training days, aim for 5 cycles minimum.',
      },
      {
        question: 'What if I take longer than 15 minutes to fall asleep?',
        answer:
          'The 15-minute estimate works for most healthy adults. If you regularly take longer, go to bed earlier by the difference. Reducing screen time 30 minutes before bed and keeping your room cool (65-68 F) helps. Our <a href="/caffeine-cutoff-calculator">Caffeine Cutoff Calculator</a> can also help identify if late caffeine is the culprit.',
      },
    ],
    relatedTools: ['tdee-calculator', 'body-fat-calculator', 'protein-macro-calculator'],
  },
};
