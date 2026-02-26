import { BuilderConfig, BuilderOutputSection } from '@/lib/types';

// ============================================================
// MORNING ROUTINE BUILDER
// 4-step builder that generates a timed morning routine
// ============================================================

export const morningRoutineBuilderConfig: BuilderConfig = {
  shareText: 'Just built my ideal morning routine on Real Men Guide. Try it out!',
  steps: [
    {
      id: 'wake-time',
      title: 'What time do you want to wake up?',
      subtitle: 'Pick the time that fits your schedule. Earlier is not always better; consistency matters more.',
      type: 'single-select',
      options: [
        {
          id: '5am',
          label: '5:00 AM',
          description: 'The early bird. Maximum quiet time before the world wakes up.',
          tags: ['early'],
        },
        {
          id: '6am',
          label: '6:00 AM',
          description: 'The sweet spot. Enough time for a full routine before work.',
          tags: ['moderate'],
        },
        {
          id: '7am',
          label: '7:00 AM',
          description: 'Balanced start. Good for people who need solid sleep.',
          tags: ['standard'],
        },
        {
          id: '8am',
          label: '8:00 AM',
          description: 'Later riser. Works great for remote workers or night owls transitioning.',
          tags: ['late'],
        },
      ],
    },
    {
      id: 'available-time',
      title: 'How much time do you have for your morning routine?',
      subtitle: 'Be realistic. A routine you actually follow beats an ambitious one you abandon.',
      type: 'single-select',
      options: [
        {
          id: '15min',
          label: '15 Minutes',
          description: 'Quick and essential. For busy mornings where every minute counts.',
          tags: ['minimal'],
        },
        {
          id: '30min',
          label: '30 Minutes',
          description: 'Solid foundation. Enough time for the core habits without rushing.',
          tags: ['moderate'],
        },
        {
          id: '60min',
          label: '60 Minutes',
          description: 'The full experience. Room for fitness, mindfulness, and planning.',
          tags: ['full'],
        },
        {
          id: '90min',
          label: '90 Minutes',
          description: 'The elite routine. Time for everything including deep focus work.',
          tags: ['extended'],
        },
      ],
    },
    {
      id: 'goals',
      title: 'What is your primary morning goal?',
      subtitle: 'This shapes the focus of your routine. Pick what matters most right now.',
      type: 'single-select',
      options: [
        {
          id: 'productivity',
          label: 'Productivity',
          description: 'Hit the ground running with a clear head and organized priorities.',
          tags: ['productivity'],
        },
        {
          id: 'fitness',
          label: 'Fitness',
          description: 'Start the day with movement and physical energy.',
          tags: ['fitness'],
        },
        {
          id: 'mindfulness',
          label: 'Mindfulness',
          description: 'Begin with calm, clarity, and mental stillness.',
          tags: ['mindfulness'],
        },
        {
          id: 'energy',
          label: 'Energy',
          description: 'Maximize alertness and sustained energy throughout the day.',
          tags: ['energy'],
        },
      ],
    },
    {
      id: 'priorities',
      title: 'Which activities do you want to include?',
      subtitle: 'Select all that interest you. We will build them into your time frame.',
      type: 'multi-select',
      minSelections: 1,
      maxSelections: 8,
      options: [
        {
          id: 'exercise',
          label: 'Exercise',
          description: 'Workout, run, or movement session.',
          tags: ['fitness', 'energy'],
        },
        {
          id: 'meditation',
          label: 'Meditation',
          description: 'Guided or silent meditation for mental clarity.',
          tags: ['mindfulness'],
        },
        {
          id: 'journaling',
          label: 'Journaling',
          description: 'Gratitude journal, morning pages, or goal setting.',
          tags: ['mindfulness', 'productivity'],
        },
        {
          id: 'cold-shower',
          label: 'Cold Shower',
          description: 'Cold exposure for alertness and resilience.',
          tags: ['energy', 'fitness'],
        },
        {
          id: 'reading',
          label: 'Reading',
          description: 'Read 10-20 pages of a book before the day starts.',
          tags: ['productivity', 'mindfulness'],
        },
        {
          id: 'healthy-breakfast',
          label: 'Healthy Breakfast',
          description: 'Prep and eat a nutritious meal to fuel the day.',
          tags: ['energy', 'fitness'],
        },
        {
          id: 'skincare',
          label: 'Skincare',
          description: 'Cleanser, moisturizer, and SPF for healthy skin.',
          tags: ['grooming'],
        },
        {
          id: 'planning',
          label: 'Planning / To-Do List',
          description: 'Review calendar and set top 3 priorities for the day.',
          tags: ['productivity'],
        },
      ],
    },
  ],
  generateOutput: (selections: Record<string, string[]>): BuilderOutputSection[] => {
    const wakeTime = selections['wake-time']?.[0] || '6am';
    const availableTime = selections['available-time']?.[0] || '30min';
    const goal = selections['goals']?.[0] || 'productivity';
    const priorities = selections['priorities'] || ['exercise', 'planning'];

    const timeMap: Record<string, number> = {
      '5am': 5,
      '6am': 6,
      '7am': 7,
      '8am': 8,
    };

    const totalMinutesMap: Record<string, number> = {
      '15min': 15,
      '30min': 30,
      '60min': 60,
      '90min': 90,
    };

    const wakeHour = timeMap[wakeTime] || 6;
    const totalMinutes = totalMinutesMap[availableTime] || 30;

    const activityDurations: Record<string, Record<string, number>> = {
      '15min': {
        exercise: 5,
        meditation: 3,
        journaling: 3,
        'cold-shower': 3,
        reading: 5,
        'healthy-breakfast': 5,
        skincare: 3,
        planning: 3,
      },
      '30min': {
        exercise: 10,
        meditation: 5,
        journaling: 5,
        'cold-shower': 5,
        reading: 10,
        'healthy-breakfast': 10,
        skincare: 5,
        planning: 5,
      },
      '60min': {
        exercise: 20,
        meditation: 10,
        journaling: 10,
        'cold-shower': 5,
        reading: 15,
        'healthy-breakfast': 15,
        skincare: 5,
        planning: 10,
      },
      '90min': {
        exercise: 30,
        meditation: 15,
        journaling: 15,
        'cold-shower': 5,
        reading: 20,
        'healthy-breakfast': 20,
        skincare: 10,
        planning: 10,
      },
    };

    const durations = activityDurations[availableTime] || activityDurations['30min'];

    const goalOrder: Record<string, string[]> = {
      productivity: ['planning', 'journaling', 'cold-shower', 'exercise', 'meditation', 'reading', 'skincare', 'healthy-breakfast'],
      fitness: ['exercise', 'cold-shower', 'healthy-breakfast', 'meditation', 'skincare', 'journaling', 'reading', 'planning'],
      mindfulness: ['meditation', 'journaling', 'reading', 'skincare', 'healthy-breakfast', 'exercise', 'cold-shower', 'planning'],
      energy: ['cold-shower', 'exercise', 'healthy-breakfast', 'meditation', 'skincare', 'planning', 'journaling', 'reading'],
    };

    const preferredOrder = goalOrder[goal] || goalOrder['productivity'];
    const sortedPriorities = [...priorities].sort(
      (a, b) => preferredOrder.indexOf(a) - preferredOrder.indexOf(b)
    );

    let usedMinutes = 0;
    const scheduledActivities: { name: string; duration: number }[] = [];

    for (const activity of sortedPriorities) {
      const dur = durations[activity] || 5;
      if (usedMinutes + dur <= totalMinutes) {
        scheduledActivities.push({ name: activity, duration: dur });
        usedMinutes += dur;
      }
    }

    const formatTime = (hour: number, minutes: number): string => {
      const totalMins = hour * 60 + minutes;
      const h = Math.floor(totalMins / 60);
      const m = totalMins % 60;
      const period = h >= 12 ? 'PM' : 'AM';
      const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return `${displayHour}:${m.toString().padStart(2, '0')} ${period}`;
    };

    const activityLabels: Record<string, string> = {
      exercise: 'Exercise',
      meditation: 'Meditation',
      journaling: 'Journaling',
      'cold-shower': 'Cold Shower',
      reading: 'Reading',
      'healthy-breakfast': 'Healthy Breakfast',
      skincare: 'Skincare Routine',
      planning: 'Daily Planning',
    };

    const activityDetails: Record<string, Record<string, string>> = {
      exercise: {
        productivity: 'Quick bodyweight circuit (push-ups, squats, burpees) to get blood flowing to your brain. Keep it intense but short.',
        fitness: 'Full workout session: warm up, compound lifts or a structured run, cool down with stretching.',
        mindfulness: 'Gentle yoga flow or a mindful walk. Focus on breath and body awareness rather than intensity.',
        energy: 'High-intensity interval training (HIIT) to spike adrenaline and cortisol at the right time. 30 seconds on, 15 seconds rest.',
      },
      meditation: {
        productivity: 'Focused-attention meditation. Sit quietly, focus on breath, and practice bringing your mind back when it wanders. This trains focus for the day ahead.',
        fitness: 'Body scan meditation. Start from your toes and work up, noticing sensations. Great for recovery and mind-muscle connection.',
        mindfulness: 'Open-awareness meditation. Sit with no agenda, notice thoughts without judgment, and cultivate presence. Use an app like Headspace or Waking Up.',
        energy: 'Breathwork session. Try box breathing (4-4-4-4) or Wim Hof method (30 power breaths, hold, exhale hold). This wakes you up fast.',
      },
      journaling: {
        productivity: 'Write your top 3 priorities for the day, one thing you are grateful for, and one potential obstacle with a plan to handle it.',
        fitness: 'Log yesterday\'s workout, plan today\'s training, and write one thing you are doing well physically and one area to improve.',
        mindfulness: 'Morning pages: write 1-2 pages of stream-of-consciousness thoughts. Do not edit, do not judge. Just write whatever comes.',
        energy: 'Gratitude journal: list 3 things you are grateful for and 3 things that would make today great. This primes your brain for positivity.',
      },
      'cold-shower': {
        productivity: 'End your shower with 60-90 seconds of cold water. Start with 30 seconds and build up. The discipline transfers to your work.',
        fitness: 'Full 2-3 minutes of cold water. Cold exposure reduces inflammation, speeds muscle recovery, and boosts testosterone.',
        mindfulness: 'Start with warm, transition to cold for the last 60 seconds. Focus on your breath and staying calm under discomfort.',
        energy: 'Go fully cold from the start. 2 minutes minimum. The norepinephrine spike will have you wired for hours without caffeine.',
      },
      reading: {
        productivity: 'Read a business, strategy, or self-development book. Even 10 pages a day adds up to 30+ books a year.',
        fitness: 'Read about training, nutrition, or sports psychology. Knowledge compounds just like training does.',
        mindfulness: 'Read philosophy, poetry, or contemplative literature. Stoicism, Zen, or anything that slows your mind down.',
        energy: 'Read something inspiring: biographies, adventure stories, or motivational non-fiction to fuel your drive.',
      },
      'healthy-breakfast': {
        productivity: 'High-protein, moderate-fat breakfast to sustain focus. Eggs, avocado, and whole grain toast. Avoid sugar spikes.',
        fitness: 'Post-workout meal: protein shake or eggs with oats and fruit. Aim for 30-40g protein to maximize muscle protein synthesis.',
        mindfulness: 'Prepare breakfast mindfully. No phone, no screens. Focus on the process of cooking and the experience of eating.',
        energy: 'Balanced meal with complex carbs, protein, and healthy fats. Overnight oats with protein powder, berries, and nut butter.',
      },
      skincare: {
        productivity: 'Quick 3-step routine: cleanser, moisturizer, SPF. Looking sharp builds confidence for the day ahead.',
        fitness: 'Post-workout face wash to clear sweat, followed by moisturizer and SPF. Your skin takes a beating from training.',
        mindfulness: 'Turn skincare into a ritual. Apply each product slowly and deliberately. A small act of self-care sets the tone.',
        energy: 'Splash cold water on your face, apply a vitamin C serum for brightness, moisturize, and SPF. You will look awake even if you do not feel it yet.',
      },
      planning: {
        productivity: 'Review your calendar, identify your top 3 most important tasks, time-block your deep work, and anticipate potential disruptions.',
        fitness: 'Review today\'s workout plan, check your nutrition targets, and schedule your training time so nothing conflicts.',
        mindfulness: 'Set one intention for the day. Not a task, but a way of being. "Today I will be patient." "Today I will be present."',
        energy: 'Map out your energy peaks and valleys. Schedule your hardest work for your first energy peak and save routine tasks for the afternoon dip.',
      },
    };

    let runningMinutes = 0;
    const schedule: string[] = [];

    schedule.push(`${formatTime(wakeHour, 0)} - Wake Up. No snooze button. Feet on the floor. Glass of water on your nightstand, drink it immediately.`);
    runningMinutes += 2;

    for (const activity of scheduledActivities) {
      const startTime = formatTime(wakeHour, runningMinutes);
      const endTime = formatTime(wakeHour, runningMinutes + activity.duration);
      const label = activityLabels[activity.name] || activity.name;
      const detail = activityDetails[activity.name]?.[goal] || '';
      schedule.push(`${startTime} - ${endTime}: ${label} (${activity.duration} min) - ${detail}`);
      runningMinutes += activity.duration;
    }

    const endTimeStr = formatTime(wakeHour, runningMinutes);
    schedule.push(`${endTimeStr} - Routine complete. You are ahead of 95% of people who are still hitting snooze.`);

    const goalTips: Record<string, string[]> = {
      productivity: [
        'Do not check your phone or email for the first 30 minutes after waking. Your attention is most valuable when it is fresh.',
        'Keep your morning routine the same every day, even weekends. Consistency builds momentum.',
        'Prepare everything the night before: clothes laid out, bag packed, breakfast ingredients ready. Remove all friction.',
        'If you only have time for one thing, make it the daily planning session. Knowing your top 3 priorities transforms your day.',
      ],
      fitness: [
        'Place your workout clothes next to your bed the night before. Seeing them first thing removes the decision barrier.',
        'If training fasted, have black coffee or green tea 20 minutes before your workout for a performance boost.',
        'Track your workouts in a log or app. What gets measured gets improved.',
        'Stretch or foam roll for at least 5 minutes after every morning workout. Recovery is where the gains actually happen.',
      ],
      mindfulness: [
        'Create a dedicated space for your morning practice, even if it is just a specific corner or chair. The environment triggers the habit.',
        'Start with just 5 minutes of meditation. Consistency matters far more than duration when building a practice.',
        'Leave your phone in another room until your mindfulness routine is complete. The morning is sacred ground.',
        'If your mind races during meditation, that is not failure. That is the practice. Every time you notice and redirect, you are building the skill.',
      ],
      energy: [
        'Get direct sunlight exposure within the first 10 minutes of waking. This resets your circadian rhythm and boosts alertness.',
        'Delay caffeine for 90 minutes after waking. Let your natural cortisol peak first, then coffee extends the energy.',
        'Hydrate aggressively. Drink 16-24 oz of water within your first 30 minutes. Add a pinch of sea salt and lemon for electrolytes.',
        'Keep your bedroom at 65-68 degrees Fahrenheit. Better sleep quality means better morning energy.',
      ],
    };

    const tips = goalTips[goal] || goalTips['productivity'];

    const sections: BuilderOutputSection[] = [
      {
        title: `Your ${totalMinutes}-Minute Morning Routine (Starting at ${formatTime(wakeHour, 0)})`,
        items: schedule,
      },
      {
        title: 'Key Tips for Success',
        items: tips,
      },
      {
        title: 'Building the Habit',
        items: [
          'Week 1-2: Focus only on waking up at the same time every day. Do not worry about the full routine yet.',
          'Week 3-4: Add one activity at a time until you have built the full routine. Stacking habits gradually is the key to making them stick.',
          'Month 2+: The routine should feel automatic by now. If an activity feels forced, swap it for something that energizes you.',
          'Track your streak. Use a simple calendar and mark an X for each day you complete the routine. Do not break the chain.',
          'If you miss a day, never miss two in a row. One miss is an accident. Two is the start of a new pattern.',
        ],
      },
    ];

    return sections;
  },
  supportingContent: {
    intro:
      'Your morning sets the tone for your entire day. The most successful and productive men in the world all have one thing in common: a deliberate morning routine. But this is not about copying someone else\'s 4 AM ice bath ritual. This builder creates a personalized routine based on your actual wake-up time, the time you have available, your goals, and the specific activities that matter to you. The result is a timed, realistic routine you will actually follow.',
    howToUse:
      'Walk through the four steps: pick your wake-up time, how much time you have, your primary goal, and which activities you want to include. The builder will generate a timed schedule with specific instructions for each activity, tailored to your goal. Print it, screenshot it, or save it somewhere you will see it every morning.',
    faq: [
      {
        question: 'What if I am not a morning person?',
        answer:
          'Nobody is born a morning person. It is a trained habit. Start by waking up just 15 minutes earlier than you currently do, and do one simple activity (like drinking water and stretching). Gradually move your wake time earlier and add activities over weeks. The consistency of the routine will train your body to wake up naturally.',
      },
      {
        question: 'Should I do the same routine on weekends?',
        answer:
          'Ideally, yes, at least the wake-up time. Consistency is what makes your circadian rhythm work for you instead of against you. You can do a lighter version of the routine on weekends, but try to wake up within 30 minutes of your weekday time to avoid "social jet lag."',
      },
      {
        question: 'What if I do not have time for all the activities I want?',
        answer:
          'Start with the non-negotiable ones and rotate the rest. For example, exercise Monday-Wednesday-Friday and reading-meditation Tuesday-Thursday-Saturday. The routine does not have to be identical every day as long as the structure and timing stay consistent.',
      },
    ],
    relatedTools: [
      'bachelor-pad-checklist',
      'interview-prep-coach',
      'date-night-generator',
    ],
  },
};
