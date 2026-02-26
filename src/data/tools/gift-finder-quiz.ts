import { QuizConfig } from '@/lib/types';

// ============================================================
// GIFT FINDER QUIZ
// 6 questions to find the perfect gift for anyone
// ============================================================

export const giftFinderQuizConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'I just found the perfect gift idea using the Gift Finder Quiz on Real Men Guide!',
  questions: [
    {
      id: 'recipient',
      question: 'Who is the gift for?',
      subtitle: 'Different people call for different gift strategies.',
      options: [
        {
          label: 'Girlfriend',
          value: 'girlfriend',
          points: {
            experience: 3,
            fashion: 3,
            home: 1,
            tech: 1,
            food: 2,
          },
        },
        {
          label: 'Wife',
          value: 'wife',
          points: {
            experience: 3,
            fashion: 2,
            home: 3,
            tech: 1,
            food: 2,
          },
        },
        {
          label: 'Mom',
          value: 'mom',
          points: {
            experience: 2,
            fashion: 1,
            home: 3,
            tech: 1,
            food: 3,
          },
        },
        {
          label: 'Sister',
          value: 'sister',
          points: {
            experience: 2,
            fashion: 3,
            home: 1,
            tech: 2,
            food: 2,
          },
        },
        {
          label: 'Friend (female)',
          value: 'friend',
          points: {
            experience: 3,
            fashion: 2,
            home: 1,
            tech: 2,
            food: 3,
          },
        },
        {
          label: 'Boss or Coworker',
          value: 'boss',
          points: {
            experience: 1,
            fashion: 1,
            home: 2,
            tech: 3,
            food: 3,
          },
        },
      ],
    },
    {
      id: 'occasion',
      question: 'What\'s the occasion?',
      subtitle: 'The event shapes how personal the gift should be.',
      options: [
        {
          label: 'Birthday',
          value: 'birthday',
          points: {
            experience: 3,
            fashion: 2,
            home: 1,
            tech: 2,
            food: 2,
          },
        },
        {
          label: 'Anniversary',
          value: 'anniversary',
          points: {
            experience: 3,
            fashion: 3,
            home: 2,
            tech: 0,
            food: 2,
          },
        },
        {
          label: 'Christmas / Holiday',
          value: 'christmas',
          points: {
            experience: 1,
            fashion: 2,
            home: 3,
            tech: 3,
            food: 2,
          },
        },
        {
          label: 'Just Because',
          value: 'just-because',
          points: {
            experience: 2,
            fashion: 1,
            home: 1,
            tech: 1,
            food: 3,
          },
        },
      ],
    },
    {
      id: 'personality',
      question: 'How would you describe their personality?',
      subtitle: 'Think about what excites them most.',
      options: [
        {
          label: 'Adventurous - always seeking new experiences',
          value: 'adventurous',
          points: {
            experience: 4,
            fashion: 0,
            home: 0,
            tech: 1,
            food: 2,
          },
        },
        {
          label: 'Homebody - loves cozy nights in',
          value: 'homebody',
          points: {
            experience: 0,
            fashion: 1,
            home: 4,
            tech: 1,
            food: 2,
          },
        },
        {
          label: 'Fashionista - always put together',
          value: 'fashionista',
          points: {
            experience: 1,
            fashion: 4,
            home: 0,
            tech: 0,
            food: 1,
          },
        },
        {
          label: 'Tech Lover - always has the latest gadgets',
          value: 'tech-lover',
          points: {
            experience: 0,
            fashion: 0,
            home: 1,
            tech: 4,
            food: 1,
          },
        },
        {
          label: 'Foodie - lives to eat, cook, and explore restaurants',
          value: 'foodie',
          points: {
            experience: 1,
            fashion: 0,
            home: 1,
            tech: 0,
            food: 4,
          },
        },
      ],
    },
    {
      id: 'budget',
      question: 'What\'s your budget?',
      subtitle: 'Be honest. Great gifts exist at every price point.',
      options: [
        {
          label: 'Under $25',
          value: 'under-25',
          points: {
            experience: 1,
            fashion: 1,
            home: 2,
            tech: 0,
            food: 3,
          },
        },
        {
          label: '$25 - $50',
          value: '25-50',
          points: {
            experience: 2,
            fashion: 2,
            home: 2,
            tech: 1,
            food: 3,
          },
        },
        {
          label: '$50 - $100',
          value: '50-100',
          points: {
            experience: 3,
            fashion: 3,
            home: 2,
            tech: 2,
            food: 2,
          },
        },
        {
          label: '$100 - $200',
          value: '100-200',
          points: {
            experience: 3,
            fashion: 3,
            home: 2,
            tech: 3,
            food: 1,
          },
        },
        {
          label: '$200+',
          value: '200-plus',
          points: {
            experience: 3,
            fashion: 3,
            home: 1,
            tech: 3,
            food: 1,
          },
        },
      ],
    },
    {
      id: 'age-range',
      question: 'What\'s their age range?',
      subtitle: 'This helps us fine-tune the suggestions.',
      options: [
        {
          label: '18-24',
          value: '18-24',
          points: {
            experience: 3,
            fashion: 3,
            home: 0,
            tech: 2,
            food: 2,
          },
        },
        {
          label: '25-34',
          value: '25-34',
          points: {
            experience: 3,
            fashion: 2,
            home: 2,
            tech: 2,
            food: 3,
          },
        },
        {
          label: '35-44',
          value: '35-44',
          points: {
            experience: 2,
            fashion: 2,
            home: 3,
            tech: 2,
            food: 3,
          },
        },
        {
          label: '45-54',
          value: '45-54',
          points: {
            experience: 2,
            fashion: 1,
            home: 3,
            tech: 2,
            food: 3,
          },
        },
        {
          label: '55+',
          value: '55-plus',
          points: {
            experience: 3,
            fashion: 1,
            home: 3,
            tech: 1,
            food: 2,
          },
        },
      ],
    },
    {
      id: 'already-has',
      question: 'What do they already have a lot of?',
      subtitle: 'We\'ll steer you away from this category.',
      options: [
        {
          label: 'Clothes and accessories',
          value: 'clothes',
          points: {
            experience: 2,
            fashion: -2,
            home: 2,
            tech: 2,
            food: 2,
          },
        },
        {
          label: 'Gadgets and electronics',
          value: 'gadgets',
          points: {
            experience: 2,
            fashion: 2,
            home: 2,
            tech: -2,
            food: 2,
          },
        },
        {
          label: 'Home decor and candles',
          value: 'home-stuff',
          points: {
            experience: 2,
            fashion: 2,
            home: -2,
            tech: 2,
            food: 2,
          },
        },
        {
          label: 'Kitchen stuff and cookware',
          value: 'kitchen',
          points: {
            experience: 2,
            fashion: 2,
            home: 2,
            tech: 2,
            food: -2,
          },
        },
        {
          label: 'Not sure / nothing in particular',
          value: 'unsure',
          points: {
            experience: 1,
            fashion: 1,
            home: 1,
            tech: 1,
            food: 1,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'experience',
      title: 'Experience Gifts',
      description:
        'The best gift you can give this person is a memory, not a thing. They value experiences, adventure, and quality time over material possessions. An experience gift shows you know what lights them up and gives you something to do together (or for them to enjoy on their own).',
      tips: [
        'Concert or event tickets to see their favorite artist or a show they have been wanting to see',
        'A spa day or massage package at a well-reviewed local spa',
        'Cooking class, pottery workshop, or wine tasting experience for two',
        'Weekend getaway or day trip to a nearby city or nature destination',
        'Skydiving, hot air balloon ride, or helicopter tour for the adrenaline junkie',
        'Museum, exhibit, or botanical garden membership for year-round visits',
        'Personalized experience box (like Tinggly or Uncommon Experiences) that lets them choose their own adventure',
        'Pro tip: Pair the experience with a handwritten note explaining why you picked it',
      ],
    },
    {
      id: 'tech',
      title: 'Tech & Gadget Gifts',
      description:
        'This person loves having the latest and greatest, or at least the most useful tech in their life. They appreciate gifts that make their daily routine smarter, more efficient, or just more fun. Go for something they would use every day but might not buy for themselves.',
      tips: [
        'Wireless earbuds (AirPods Pro or Sony WF-1000XM5) for everyday use',
        'Smart home device like a smart speaker, smart plug set, or smart light strips',
        'Portable charger or MagSafe battery pack for their phone',
        'Kindle Paperwhite for book lovers who want to go digital',
        'Instant camera (Fujifilm Instax) for capturing memories in a fun, retro way',
        'Noise-canceling headphones for travel, work, or commuting',
        'Tablet stand or laptop riser to upgrade their desk setup',
        'Pro tip: Check what ecosystem they are in (Apple vs Android) before buying any accessory',
      ],
    },
    {
      id: 'fashion',
      title: 'Fashion & Beauty Gifts',
      description:
        'This person cares about how they present themselves and appreciates quality over quantity when it comes to personal style. They will notice the thought behind a well-chosen fashion or beauty gift. Stick to accessories or beauty products unless you know their exact size and taste.',
      tips: [
        'A quality silk scarf or cashmere wrap in a versatile neutral color',
        'Luxury skincare set (Drunk Elephant, Tatcha, or La Mer sampler)',
        'Designer sunglasses from a brand they love',
        'A beautiful leather wallet, card case, or small crossbody bag',
        'High-end perfume or fragrance discovery set so they can find their signature scent',
        'Jewelry from a brand like Mejuri, Monica Vinader, or a local artisan jeweler',
        'A subscription box like FabFitFun or a curated beauty box',
        'Pro tip: When in doubt with clothing, give a gift card to their favorite store paired with a small personal item',
      ],
    },
    {
      id: 'home',
      title: 'Home & Lifestyle Gifts',
      description:
        'This person takes pride in their space and loves things that make their home feel comfortable, stylish, or functional. They appreciate gifts that elevate their daily environment. Think luxurious everyday items they would not splurge on themselves.',
      tips: [
        'Luxury candle set (Diptyque, Boy Smells, or P.F. Candle Co.)',
        'High-quality throw blanket in cashmere, wool, or chunky knit',
        'Pour-over coffee set or premium loose-leaf tea collection',
        'Fresh flower subscription (monthly delivery for 3-6 months)',
        'Essential oil diffuser with a curated set of oils',
        'Monogrammed Turkish cotton robe or towel set',
        'Beautiful coffee table book on a topic they love (travel, architecture, photography)',
        'Pro tip: Home gifts work best when they are slightly more luxurious than what the person would buy for themselves',
      ],
      affiliateIds: ['sheets', 'candle'],
    },
    {
      id: 'food',
      title: 'Food & Drink Gifts',
      description:
        'This person\'s love language might actually be food. They appreciate gifts that taste amazing, teach them something new in the kitchen, or give them an excuse to try a great restaurant. Food gifts are also a safe bet when you are not sure what else to get.',
      tips: [
        'Curated charcuterie or artisan cheese box from a specialty shop',
        'Subscription to a meal kit service (HelloFresh, Blue Apron) for 2-3 months',
        'Premium chocolate or truffle collection from a craft chocolatier',
        'A nice bottle of wine or champagne with two quality glasses',
        'Restaurant gift card to a place they have been wanting to try (book the reservation too)',
        'Specialty coffee subscription from a local roaster or Counter Culture, Onyx, etc.',
        'Hot sauce collection, specialty olive oil set, or gourmet spice kit',
        'Pro tip: Food gifts paired with a planned date to enjoy them together always hit harder',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Buying gifts for the women in your life should not be stressful. The problem is not that you do not care; it is that you have too many options and not enough direction. This quiz narrows it down fast. Answer six quick questions about who the gift is for, the occasion, their personality, and your budget, and we will point you to the exact category of gift that will land best.',
    howToUse:
      'Answer each question honestly based on what you actually know about the person. If you are not sure about something, go with your gut. The quiz takes about 60 seconds. At the end, you will get a personalized gift category with specific product suggestions and tips for making the gift feel extra thoughtful.',
    faq: [
      {
        question: 'What if I still have no idea what to get after the quiz?',
        answer:
          'If you are truly stuck, the safest move is always an experience gift (dinner, spa day, or event tickets) paired with a handwritten card. Nobody has ever been disappointed by a thoughtful experience. Avoid generic gift cards unless they specifically asked for one.',
      },
      {
        question: 'How much should I spend on a gift?',
        answer:
          'It depends on the relationship and occasion. For a girlfriend\'s birthday, $50-150 is a solid range. Anniversary with your wife, $100-300. Mom\'s birthday, $30-75. For a boss or coworker, keep it under $50 to stay appropriate. The thought always matters more than the price tag.',
      },
      {
        question: 'Should I ask them what they want or surprise them?',
        answer:
          'Both approaches work, and the best strategy is a hybrid. Pay attention throughout the year when they mention wanting something or admiring an item. Screenshot it or write it down. That way your gift is a surprise, but it is also exactly what they wanted. The fact that you remembered is what makes it special.',
      },
    ],
    relatedTools: [
      'love-language-quiz',
      'date-night-generator',
      'bachelor-pad-checklist',
    ],
  },
};
