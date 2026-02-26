import { QuizConfig } from '@/lib/types';

// ============================================================
// LOVE LANGUAGE QUIZ
// 10 scenario-based questions mapping to the 5 love languages
// ============================================================

export const loveLanguageQuizConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'I just discovered my love language on Real Men Guide! Take the quiz to find yours.',
  questions: [
    {
      id: 'q1',
      question: 'After a long, rough day at work, what would mean the most to you?',
      subtitle: 'Pick the one that would genuinely make you feel the best.',
      options: [
        {
          label: 'Your partner saying "I\'m really proud of how hard you work"',
          value: 'words-1',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'Coming home to dinner already made and the house cleaned up',
          value: 'acts-1',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'A small surprise waiting for you, like your favorite snack or drink',
          value: 'gifts-1',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'Your partner putting their phone away and just listening to you vent',
          value: 'quality-1',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'A long hug and back rub without having to ask',
          value: 'touch-1',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q2',
      question: 'You just accomplished something big. What reaction from your partner matters most?',
      subtitle: 'Think about what would make the moment feel complete.',
      options: [
        {
          label: 'They tell you specifically what they admire about what you did',
          value: 'words-2',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They handle all the chores and errands so you can enjoy the moment',
          value: 'acts-2',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They surprise you with a thoughtful gift to celebrate',
          value: 'gifts-2',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They plan an evening together just for the two of you to celebrate',
          value: 'quality-2',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'They pull you in close with a big embrace and don\'t let go',
          value: 'touch-2',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q3',
      question: 'When you\'re feeling disconnected from your partner, what bothers you the most?',
      subtitle: 'What absence hurts the most tells you what presence matters the most.',
      options: [
        {
          label: 'They haven\'t said anything encouraging or appreciative lately',
          value: 'words-3',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'You feel like you\'re doing everything yourself around the house',
          value: 'acts-3',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They haven\'t gotten you anything thoughtful in a long time',
          value: 'gifts-3',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'You can\'t remember the last time you had their full, undivided attention',
          value: 'quality-3',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'There\'s been no physical affection, no holding hands, no casual touching',
          value: 'touch-3',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q4',
      question: 'Your partner wants to show you they care. Which of these would hit the hardest?',
      subtitle: 'Imagine each one happening. Which gives you the strongest emotional response?',
      options: [
        {
          label: 'A heartfelt handwritten letter about what you mean to them',
          value: 'words-4',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They fix something that\'s been bothering you or take a task off your plate',
          value: 'acts-4',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They bring you something small but meaningful that shows they were thinking of you',
          value: 'gifts-4',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They cancel their plans to spend the whole day with just you',
          value: 'quality-4',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'They sit close, hold your hand, and are physically connected all evening',
          value: 'touch-4',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q5',
      question: 'When you think about the best relationships you\'ve had, what made them great?',
      subtitle: 'Think about what stood out most.',
      options: [
        {
          label: 'The person always knew the right thing to say to build me up',
          value: 'words-5',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They showed love through actions, always helping without being asked',
          value: 'acts-5',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They were generous and thoughtful with gifts, always remembering what I mentioned',
          value: 'gifts-5',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'We spent real, focused time together doing things we both loved',
          value: 'quality-5',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'The physical chemistry and closeness was always there, even in small ways',
          value: 'touch-5',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q6',
      question: 'You\'re at a social event. Your partner does something that makes you feel loved. What is it?',
      subtitle: 'Public settings reveal a lot about what you value.',
      options: [
        {
          label: 'They brag about you to other people and publicly compliment you',
          value: 'words-6',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They get you a plate of food and a drink before you even ask',
          value: 'acts-6',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They slip you a small note or surprise they had tucked away for you',
          value: 'gifts-6',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They stay by your side the whole night and are fully engaged with you',
          value: 'quality-6',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'They keep a hand on your back, hold your hand, or stay physically close',
          value: 'touch-6',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q7',
      question: 'Your partner forgot your birthday. What would make it up to you the most?',
      subtitle: 'The repair attempt that works best reveals your core need.',
      options: [
        {
          label: 'A genuine, detailed apology explaining how much I mean to them',
          value: 'words-7',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They spend the whole next day doing things for me and making my life easier',
          value: 'acts-7',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They show up with a really thoughtful, personalized gift the next day',
          value: 'gifts-7',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'They plan a full makeup day, just the two of us, doing my favorite things',
          value: 'quality-7',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'They hold me close, are extra affectionate, and physically show how sorry they are',
          value: 'touch-7',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q8',
      question: 'What kind of text from your partner would make your day mid-afternoon?',
      subtitle: 'A small digital interaction that would genuinely boost your mood.',
      options: [
        {
          label: '"I was just thinking about how lucky I am to have you."',
          value: 'words-8',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: '"I picked up your dry cleaning and grabbed groceries. You\'re all set."',
          value: 'acts-8',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: '"I saw something that reminded me of you so I got it. Check your desk."',
          value: 'gifts-8',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: '"I cleared my entire evening. No plans, no screens. Just us tonight."',
          value: 'quality-8',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: '"I can\'t wait to get home and just hold you on the couch tonight."',
          value: 'touch-8',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q9',
      question: 'On vacation together, what\'s the highlight for you?',
      subtitle: 'What makes a trip feel like a great couples experience?',
      options: [
        {
          label: 'My partner telling me how much this trip and our relationship means to them',
          value: 'words-9',
          points: {
            words: 2,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'My partner handling all the logistics so I can just enjoy the trip',
          value: 'acts-9',
          points: {
            words: 0,
            acts: 2,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'My partner picking up a meaningful souvenir for me that I didn\'t expect',
          value: 'gifts-9',
          points: {
            words: 0,
            acts: 0,
            gifts: 2,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'Having full days together with no distractions, just exploring and being present',
          value: 'quality-9',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 2,
            touch: 0,
          },
        },
        {
          label: 'Walking hand in hand everywhere, being close and physically connected all day',
          value: 'touch-9',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 2,
          },
        },
      ],
    },
    {
      id: 'q10',
      question: 'If you could only receive one of these for the rest of your life, which would you pick?',
      subtitle: 'The hardest choice reveals your deepest need.',
      options: [
        {
          label: 'Daily genuine compliments and verbal encouragement from my partner',
          value: 'words-10',
          points: {
            words: 3,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'My partner consistently doing things to make my life easier without asking',
          value: 'acts-10',
          points: {
            words: 0,
            acts: 3,
            gifts: 0,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'Regular thoughtful gifts and surprises that show they were thinking of me',
          value: 'gifts-10',
          points: {
            words: 0,
            acts: 0,
            gifts: 3,
            quality: 0,
            touch: 0,
          },
        },
        {
          label: 'Dedicated, uninterrupted one-on-one time together every single day',
          value: 'quality-10',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 3,
            touch: 0,
          },
        },
        {
          label: 'Constant physical closeness, affection, and touch throughout the day',
          value: 'touch-10',
          points: {
            words: 0,
            acts: 0,
            gifts: 0,
            quality: 0,
            touch: 3,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'words',
      title: 'Words of Affirmation',
      description:
        'Your primary love language is Words of Affirmation. You feel most loved when your partner expresses their feelings verbally: compliments, encouragement, appreciation, and hearing "I love you" in specific, meaningful ways. For you, it is not just about the words themselves but the sincerity and detail behind them. A generic "you look nice" does not hit the same as "that shirt looks incredible on you, you clearly have great taste." You thrive when your partner acknowledges your efforts, speaks highly of you to others, and uses words to build you up rather than tear you down. Criticism and harsh words wound you more deeply than they might wound others.',
      tips: [
        'Tell your partner your love language so they know what you need. Many people do not naturally express love verbally.',
        'For your partner: Leave them specific, genuine compliments rather than generic ones. "I love how you handled that situation at dinner" hits harder than "you\'re great."',
        'Write things down. A handwritten note, a meaningful text, or a letter on a special occasion will mean the world to someone with this love language.',
        'Avoid sarcasm and critical language during arguments. Words land harder for people with this love language, both the good and the bad.',
        'If your partner has a different love language, remember that their silence does not mean they do not care. They may be showing love in their own way.',
        'Practice daily verbal appreciation. Try to tell your partner one specific thing you value about them every day.',
      ],
    },
    {
      id: 'acts',
      title: 'Acts of Service',
      description:
        'Your primary love language is Acts of Service. You feel most loved when your partner shows they care through their actions: taking things off your plate, helping without being asked, and anticipating what you need before you have to say it. For you, love is a verb. Someone can say "I love you" all day, but if they never lift a finger to help, the words ring hollow. You are deeply moved when your partner handles the dishes so you can relax, fills up your gas tank, or takes care of an errand you have been dreading. The effort and thoughtfulness behind the action is what matters most.',
      tips: [
        'Communicate specific acts that would mean the most to you. Your partner cannot read your mind, and what feels obvious to you may not be obvious to them.',
        'For your partner: Look for tasks you can take off their plate, especially things they have mentioned dreading or stressing about.',
        'Follow through on promises. For someone with this love language, saying you will do something and then not doing it feels like a betrayal of trust.',
        'It is not about being a servant. It is about showing love through effort. Small, consistent actions beat grand gestures done once a year.',
        'If your partner\'s love language is different, resist the urge to feel unappreciated when they do not reciprocate with actions. They may show love differently.',
        'When you do something for your partner, do it cheerfully. An act of service done resentfully or with attitude loses all its meaning.',
      ],
    },
    {
      id: 'gifts',
      title: 'Receiving Gifts',
      description:
        'Your primary love language is Receiving Gifts. Before anyone judges this, it has nothing to do with materialism. You feel most loved when someone shows they were thinking about you through a tangible symbol, whether it is a $5 item or a $500 one. The price is irrelevant; the thought is everything. You light up when your partner picks up your favorite candy at the gas station, brings you a flower from a walk, or remembers that thing you mentioned wanting three months ago. The gift is physical proof that someone was thinking about you when you were not around, and that is what makes it meaningful.',
      tips: [
        'Explain to your partner that it is not about the money. A handpicked wildflower or their favorite snack from the store means just as much as an expensive purchase.',
        'For your partner: Keep a running list of things they mention wanting or admiring. When a birthday or occasion comes up, you will have a goldmine of ideas.',
        'The gift of presence counts too. Showing up when it matters, being there for important moments, is a gift in itself.',
        'Small, frequent surprises mean more than one big gift a year. A random Tuesday surprise beats a predictable Christmas gift.',
        'Missing milestones, birthdays, or anniversaries without a gift (even a small one) can be deeply hurtful for someone with this love language.',
        'If your partner does not naturally give gifts, gently teach them by expressing genuine appreciation every time they do, no matter how small.',
      ],
    },
    {
      id: 'quality',
      title: 'Quality Time',
      description:
        'Your primary love language is Quality Time. You feel most loved when your partner gives you their full, undivided attention. Not just being in the same room while scrolling phones, but genuine, present, engaged togetherness. For you, nothing says "I love you" like someone choosing to spend their most valuable resource, their time, on you. You are deeply bothered by distracted conversations, canceled plans, and the feeling that your partner would rather be somewhere else. When someone locks eyes with you, puts their phone away, and is fully there, you feel like the most important person in the world.',
      tips: [
        'Be direct with your partner about what quality time looks like to you. Watching TV side-by-side may not count if what you need is face-to-face conversation.',
        'For your partner: Schedule dedicated time with no distractions. Put the phone in another room. Make eye contact. Ask follow-up questions.',
        'Plan activities you can do together that encourage conversation and connection: cooking, walking, road trips, board games.',
        'Distraction is the enemy of quality time. If your partner is on their phone while you are trying to connect, say something rather than letting resentment build.',
        'Long-distance relationships are especially hard for quality time people. Prioritize video calls over texting and create virtual rituals.',
        'Remember that your partner may need alone time or social time with others. Their time away from you does not diminish their love for you.',
      ],
    },
    {
      id: 'touch',
      title: 'Physical Touch',
      description:
        'Your primary love language is Physical Touch. You feel most loved through physical closeness and contact: holding hands, hugging, a hand on your back, cuddling on the couch, and yes, physical intimacy. But this goes far beyond the bedroom. For you, physical connection is an emotional need, not just a physical one. A touch on the arm during conversation, playing with your hair, or sitting close enough that your legs are touching all communicate love to you in a way that words alone cannot. Physical neglect, long periods without affection, or a partner who is physically distant can make you feel unloved even if everything else in the relationship is good.',
      tips: [
        'Tell your partner that casual, non-sexual physical affection is important to you. Many people only think of physical touch in terms of intimacy.',
        'For your partner: Initiate small touches throughout the day. A hand on their back, playing with their hair, or holding hands in the car costs nothing and means everything.',
        'Physical touch during conflict can be powerful. Sometimes a hug can de-escalate a fight faster than any words.',
        'If your partner is not naturally touchy, be patient. Share what kinds of touch feel good to you and give positive reinforcement when they try.',
        'Physical touch people often struggle with long-distance relationships. If you are in one, find creative ways to maintain physical connection (matching items, video closeness).',
        'Remember that consent and comfort matter. If your partner\'s love language is different, they may need to warm up to more frequent physical contact at their own pace.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'The concept of love languages, developed by Dr. Gary Chapman, is one of the most useful relationship frameworks ever created. The idea is simple: people give and receive love in five different ways, and most people have one or two primary languages. The problem is that you tend to give love the way you want to receive it, which means you could be pouring effort into your partner in a way they barely register. Understanding your love language (and theirs) is a genuine cheat code for better relationships.',
    howToUse:
      'Answer each question based on your honest, gut reaction. Do not overthink it or answer based on what sounds best. There are no wrong answers. The quiz takes about 3 minutes. When you finish, you will get your primary love language along with detailed tips for how to communicate it to your partner and how to love someone with each language.',
    faq: [
      {
        question: 'Can I have more than one love language?',
        answer:
          'Absolutely. Most people have a primary and a secondary love language. If your scores are close across two or three categories, it means you are multilingual in love, which is actually a strength. Pay attention to the top two.',
      },
      {
        question: 'What if my partner and I have different love languages?',
        answer:
          'This is extremely common and is not a problem as long as you both understand the difference. The key is to love your partner in their language, not yours. If their language is Acts of Service and yours is Words of Affirmation, you need to put in the effort to show love through action even though that is not what you naturally do.',
      },
      {
        question: 'Can my love language change over time?',
        answer:
          'Yes. Life circumstances can shift your primary language. During stressful periods, Acts of Service might become more important. After time apart, Quality Time might jump to the top. It is worth retaking this quiz every year or so and having a fresh conversation with your partner.',
      },
    ],
    relatedTools: [
      'date-night-generator',
      'gift-finder-quiz',
      'conversation-starter-generator',
    ],
  },
};
