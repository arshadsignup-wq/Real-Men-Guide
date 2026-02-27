import type { QuizConfig } from '@/lib/types';

export const lifeAuditScoreConfig: QuizConfig = {
  resultCalculation: 'weighted',
  shareText: 'My Life Audit Score: {result}. How do you stack up?',
  questions: [
    {
      id: 'health-fitness',
      question: 'How would you rate your Health & Fitness right now?',
      subtitle:
        'Consider your exercise routine, diet, sleep quality, energy levels, and overall physical condition.',
      options: [
        {
          label: '1-2: Struggling - No routine, poor diet, low energy',
          value: 'health-1',
          points: { health: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Inconsistent effort, know I should do better',
          value: 'health-3',
          points: { health: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Some healthy habits but not consistent',
          value: 'health-5',
          points: { health: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Regular exercise, decent diet, solid energy',
          value: 'health-7',
          points: { health: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Peak condition, dialed-in nutrition and training',
          value: 'health-9',
          points: { health: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'career-finances',
      question: 'How would you rate your Career & Finances right now?',
      subtitle:
        'Consider your job satisfaction, income growth, savings, investments, and financial security.',
      options: [
        {
          label: '1-2: Struggling - Stuck, underpaid, or in debt with no plan',
          value: 'career-1',
          points: { career: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Paycheck to paycheck, unfulfilling work',
          value: 'career-3',
          points: { career: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Stable but not exciting, some savings',
          value: 'career-5',
          points: { career: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Growing career, solid finances, building wealth',
          value: 'career-7',
          points: { career: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Thriving career, financially free or nearly there',
          value: 'career-9',
          points: { career: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'relationships',
      question: 'How would you rate your Relationships right now?',
      subtitle:
        'Consider your romantic relationship, family bonds, and the quality of your closest connections.',
      options: [
        {
          label: '1-2: Struggling - Lonely, toxic dynamics, or completely disconnected',
          value: 'relationships-1',
          points: { relationships: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Some connections but lacking depth or trust',
          value: 'relationships-3',
          points: { relationships: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Decent relationships but room for improvement',
          value: 'relationships-5',
          points: { relationships: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Strong bonds, good communication, feel supported',
          value: 'relationships-7',
          points: { relationships: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Deep, fulfilling connections across the board',
          value: 'relationships-9',
          points: { relationships: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'personal-growth',
      question: 'How would you rate your Personal Growth right now?',
      subtitle:
        'Consider whether you are actively learning, setting goals, reading, building skills, and evolving as a person.',
      options: [
        {
          label: '1-2: Struggling - Stagnant, no goals, not learning anything new',
          value: 'growth-1',
          points: { growth: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Occasional effort but no real momentum',
          value: 'growth-3',
          points: { growth: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Some goals and learning but inconsistent',
          value: 'growth-5',
          points: { growth: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Active learner, clear goals, making steady progress',
          value: 'growth-7',
          points: { growth: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Obsessed with growth, crushing goals, leveling up constantly',
          value: 'growth-9',
          points: { growth: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'social-life',
      question: 'How would you rate your Social Life right now?',
      subtitle:
        'Consider your friendships, social activities, sense of belonging, and how often you spend quality time with others.',
      options: [
        {
          label: '1-2: Struggling - Isolated, no real friend group, rarely go out',
          value: 'social-1',
          points: { social: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - A few acquaintances but lacking real friendships',
          value: 'social-3',
          points: { social: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Some friends, occasional hangouts, could be better',
          value: 'social-5',
          points: { social: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Solid friend group, regular social plans, feel connected',
          value: 'social-7',
          points: { social: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Thriving social life, deep friendships, always have plans',
          value: 'social-9',
          points: { social: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'mental-health',
      question: 'How would you rate your Mental Health right now?',
      subtitle:
        'Consider your stress levels, emotional regulation, mindfulness, confidence, and overall mental well-being.',
      options: [
        {
          label: '1-2: Struggling - Overwhelmed, anxious, or depressed regularly',
          value: 'mental-1',
          points: { mental: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Managing but not great, frequent stress or low moods',
          value: 'mental-3',
          points: { mental: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Generally okay, some stress but handling it',
          value: 'mental-5',
          points: { mental: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Strong mindset, manage stress well, feel confident',
          value: 'mental-7',
          points: { mental: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Rock solid mental game, resilient, and at peace',
          value: 'mental-9',
          points: { mental: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'style-grooming',
      question: 'How would you rate your Style & Grooming right now?',
      subtitle:
        'Consider your wardrobe, grooming routine, personal hygiene, and how put-together you feel daily.',
      options: [
        {
          label: '1-2: Struggling - No style, minimal grooming, wear whatever is clean',
          value: 'style-1',
          points: { style: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Basic effort but no real personal style',
          value: 'style-3',
          points: { style: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Presentable but not turning heads',
          value: 'style-5',
          points: { style: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Defined style, solid grooming, get compliments',
          value: 'style-7',
          points: { style: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Dialed-in style, impeccable grooming, always on point',
          value: 'style-9',
          points: { style: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
    {
      id: 'fun-adventure',
      question: 'How would you rate your Fun & Adventure right now?',
      subtitle:
        'Consider how much fun you are having, new experiences you are pursuing, hobbies, travel, and overall enjoyment of life.',
      options: [
        {
          label: '1-2: Struggling - All work no play, life feels like a grind',
          value: 'fun-1',
          points: { fun: 2, highPerformer: 2, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '3-4: Below Average - Occasional fun but mostly stuck in routine',
          value: 'fun-3',
          points: { fun: 4, highPerformer: 4, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '5-6: Average - Some hobbies and fun but wish I did more',
          value: 'fun-5',
          points: { fun: 6, highPerformer: 6, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '7-8: Good - Active hobbies, regular fun, good work-life balance',
          value: 'fun-7',
          points: { fun: 8, highPerformer: 8, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
        {
          label: '9-10: Excellent - Living life to the fullest, tons of adventures and hobbies',
          value: 'fun-9',
          points: { fun: 10, highPerformer: 10, onTrack: 0, roomToGrow: 0, timeForChange: 0 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'highPerformer',
      title: 'High Performer (Average 8+)',
      description:
        'You are crushing it across the board. Your life is firing on all cylinders - you have built strong habits, meaningful relationships, and a lifestyle most men only dream about. You are in the top tier and your discipline and intentionality are paying off. The challenge now is maintaining this level and helping others rise to meet you. Keep pushing, but also take time to appreciate how far you have come.',
      tips: [
        'Focus on the 1% improvements - at your level, marginal gains create massive compound results over time.',
        'Mentor someone. Your experience and discipline can transform another man\'s life trajectory.',
        'Watch for complacency. The biggest threat to high performers is coasting on past success.',
        'Invest in recovery and longevity. You push hard - make sure your body and mind can sustain it for decades.',
        'Set a new audacious goal that scares you. You have mastered the basics - now go for something legendary.',
      ],
    },
    {
      id: 'onTrack',
      title: 'On Track (Average 6-7)',
      description:
        'You are doing better than most men. You have a solid foundation in most areas of your life and real momentum to build on. You are not where you want to be yet, but you are clearly heading in the right direction. The key now is identifying the one or two areas where you are lagging behind and giving them focused attention. Small, consistent improvements in your weaker areas will push you into the high performer category.',
      tips: [
        'Identify your two lowest-scoring areas and create a 30-day improvement plan for each one.',
        'Build systems, not just goals. Habits and routines are what separate "on track" from "high performer."',
        'Find an accountability partner or group. You are close to the next level - external accountability can get you there.',
        'Audit your daily schedule. You likely have time leaks (social media, Netflix) that could be redirected to growth.',
        'Celebrate your wins. You are above average - acknowledge that while continuing to push forward.',
      ],
    },
    {
      id: 'roomToGrow',
      title: 'Room to Grow (Average 4-5)',
      description:
        'You are at a crossroads. Some areas of your life are working okay, but others are clearly holding you back. The good news is that you have self-awareness - you took this audit, which means you care about improving. You do not need a complete overhaul. You need to pick one area, commit to it for 90 days, and build momentum from there. Small wins create confidence, and confidence creates transformation.',
      tips: [
        'Pick your single lowest-scoring area and make it your primary focus for the next 90 days.',
        'Start embarrassingly small. If fitness is low, commit to 10 push-ups a day. Build the habit first, then increase intensity.',
        'Remove one negative influence from your life this week - a toxic habit, person, or environment.',
        'Read one book on your weakest area. Knowledge creates awareness, and awareness creates change.',
        'Tell one person about your goal. Public commitment dramatically increases follow-through.',
        'Track your progress daily. What gets measured gets managed.',
      ],
    },
    {
      id: 'timeForChange',
      title: 'Time for Change (Average Below 4)',
      description:
        'This is your wake-up call, and the fact that you are here means something inside you is ready for change. Multiple areas of your life need attention, and that can feel overwhelming. But here is the truth: every man who is crushing it today was once exactly where you are now. You do not need to fix everything at once. You need one small win today that proves to yourself that change is possible. Start there.',
      tips: [
        'Do not try to fix everything at once. Pick ONE area and give it 100% of your improvement energy.',
        'Start with health. Exercise releases chemicals that improve every other area of your life. Walk 30 minutes today.',
        'Cut out your single worst habit immediately. You know what it is. Cold turkey. Replace it with something positive.',
        'Seek help without shame. A therapist, coach, mentor, or trusted friend can accelerate your transformation dramatically.',
        'Delete or limit social media. Comparing your chapter 1 to someone else\'s chapter 20 will only demoralize you.',
        'Write down 3 things you are grateful for every morning. Rewiring your mindset is the foundation for everything else.',
        'Set one tiny goal for tomorrow and accomplish it. Then set another. Stack small wins until momentum takes over.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'The Life Audit Score is a comprehensive life assessment quiz for men — your personal scorecard across the 8 areas that matter most: Health & Fitness, Career & Finances, Relationships, Personal Growth, Social Life, Mental Health, Style & Grooming, and Fun & Adventure. Rate yourself honestly in each area to get your overall score and discover exactly where you need to level up. This is not about judgment — it is about self-awareness and action. Pair it with the <a href="/man-archetype-quiz">Man Archetype Quiz</a> to understand <em>why</em> you score the way you do.',
    howToUse:
      'Rate each of the 8 life areas on a scale from 1 to 10 based on where you honestly are right now, not where you were or where you want to be. Be brutally honest — inflating your scores defeats the purpose of this personal development scorecard. Your overall result is based on your average across all areas. Pay special attention to your lowest-scoring areas, as these represent your biggest opportunities for growth.',
    faq: [
      {
        question: 'How often should I retake the Life Audit?',
        answer:
          'We recommend retaking this life assessment every 90 days. This gives you enough time to make meaningful progress in your focus areas while keeping you accountable. Many men screenshot their results and compare them quarter over quarter. Between retakes, use the <a href="/daily-man-challenge">Daily Man Challenge</a> to stay on track with daily improvements.',
      },
      {
        question: 'What if all my scores are low?',
        answer:
          'That is more common than you think, and it is not a reason to feel defeated. It means you have massive upside potential. Focus on one area at a time — starting with Health & Fitness or Mental Health, as <a href="https://www.health.harvard.edu/topics/exercise-and-fitness" target="_blank" rel="noopener">research from Harvard Health</a> shows improvements in these areas tend to create a positive ripple effect across everything else.',
      },
      {
        question: 'Is this scientifically validated?',
        answer:
          'The Life Audit is a self-assessment tool designed for personal awareness and motivation, not a clinical diagnostic. The 8 life areas are based on well-established frameworks used in <a href="https://en.wikipedia.org/wiki/Life_coaching" target="_blank" rel="noopener">life coaching</a> and personal development. The value comes from honest self-reflection and using your results to set intentional goals for self improvement.',
      },
    ],
    relatedTools: [
      'man-archetype-quiz',
      'daily-man-challenge',
      'hangover-recovery-calculator',
    ],
  },
};
