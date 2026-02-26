import type { QuizConfig } from '@/lib/types';

export const fragranceFinderConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'My fragrance profile is {result}! Find your perfect cologne:',
  questions: [
    {
      id: 'lifestyle',
      question: 'How would you describe your day-to-day lifestyle?',
      subtitle: 'Think about what a typical week looks like for you.',
      options: [
        {
          label: 'Active and outdoorsy - gym, hiking, sports',
          value: 'active',
          points: { fresh: 3, woody: 1 },
        },
        {
          label: 'Professional and polished - office, meetings, networking',
          value: 'professional',
          points: { classic: 3, woody: 1 },
        },
        {
          label: 'Social and outgoing - bars, clubs, events',
          value: 'social',
          points: { sweet: 3, fresh: 1 },
        },
        {
          label: 'Relaxed and creative - studio, coffee shops, casual hangouts',
          value: 'relaxed',
          points: { woody: 3, classic: 1 },
        },
      ],
    },
    {
      id: 'occasion',
      question: 'When do you most often wear cologne?',
      subtitle: 'Pick the scenario where you reach for fragrance most.',
      options: [
        {
          label: 'Daily - I want an everyday signature scent',
          value: 'daily',
          points: { fresh: 2, classic: 2 },
        },
        {
          label: 'Date nights and special evenings out',
          value: 'date-night',
          points: { sweet: 3, woody: 1 },
        },
        {
          label: 'Work and professional settings',
          value: 'work',
          points: { classic: 3, fresh: 1 },
        },
        {
          label: 'Weekends and casual occasions',
          value: 'weekends',
          points: { fresh: 3, woody: 1 },
        },
      ],
    },
    {
      id: 'scent-preference',
      question: 'Which scent family appeals to you most?',
      subtitle: 'Go with your gut - what sounds most attractive to you?',
      options: [
        {
          label: 'Citrus, ocean breeze, and clean laundry',
          value: 'citrus-clean',
          points: { fresh: 3 },
        },
        {
          label: 'Sandalwood, leather, and tobacco',
          value: 'wood-leather',
          points: { woody: 3 },
        },
        {
          label: 'Vanilla, caramel, and warm spices',
          value: 'vanilla-spice',
          points: { sweet: 3 },
        },
        {
          label: 'Cedar, bergamot, and peppery notes',
          value: 'cedar-bergamot',
          points: { classic: 3 },
        },
      ],
    },
    {
      id: 'season',
      question: 'Which season do you feel most like yourself in?',
      subtitle: 'Your preferred season often aligns with your ideal fragrance weight.',
      options: [
        {
          label: 'Spring - fresh starts and light energy',
          value: 'spring',
          points: { fresh: 3, classic: 1 },
        },
        {
          label: 'Summer - warm sun and relaxed vibes',
          value: 'summer',
          points: { fresh: 2, sweet: 1, classic: 1 },
        },
        {
          label: 'Autumn - cozy layers and rich colors',
          value: 'autumn',
          points: { woody: 3, sweet: 1 },
        },
        {
          label: 'Winter - bold nights and sharp cold',
          value: 'winter',
          points: { sweet: 2, woody: 2 },
        },
      ],
    },
    {
      id: 'impression',
      question: 'What impression do you want your cologne to give?',
      subtitle: 'How do you want people to perceive you when they catch your scent?',
      options: [
        {
          label: 'Clean, approachable, and effortlessly put-together',
          value: 'clean-approachable',
          points: { fresh: 3, classic: 1 },
        },
        {
          label: 'Sophisticated, mysterious, and mature',
          value: 'sophisticated',
          points: { woody: 3, classic: 1 },
        },
        {
          label: 'Confident, magnetic, and unforgettable',
          value: 'confident-magnetic',
          points: { sweet: 3, woody: 1 },
        },
        {
          label: 'Timeless, refined, and quietly powerful',
          value: 'timeless-refined',
          points: { classic: 3, woody: 1 },
        },
      ],
    },
    {
      id: 'longevity',
      question: 'How long do you want your fragrance to last?',
      subtitle: 'Some scents fade quickly while others project for hours.',
      options: [
        {
          label: 'Light and subtle - I want a hint, not a cloud (2-4 hours)',
          value: 'light',
          points: { fresh: 3 },
        },
        {
          label: 'Moderate - noticeable in close conversation (4-6 hours)',
          value: 'moderate',
          points: { classic: 2, fresh: 1, woody: 1 },
        },
        {
          label: 'Strong - I want people to notice when I walk by (6-8 hours)',
          value: 'strong',
          points: { sweet: 2, woody: 2 },
        },
        {
          label: 'Beast mode - I want it to last all day and leave a trail (8+ hours)',
          value: 'beast-mode',
          points: { sweet: 3, woody: 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'fresh',
      title: 'Fresh & Clean',
      description:
        'You are drawn to crisp, invigorating scents that feel like a cool breeze on a warm day. Your ideal fragrances feature citrus top notes, aquatic accords, and clean musks. These are crowd-pleasers that work in any setting - from the office to a casual brunch. Fragrances like Dior Sauvage, Acqua di Gio, and Versace Pour Homme are perfect for your profile.',
      tips: [
        'Apply to pulse points (wrists, neck, behind ears) for the best projection.',
        'Fresh scents are perfect for spring and summer but can feel too light in cold winter months.',
        'Layer with an unscented moisturizer first - hydrated skin holds fragrance longer.',
        'Try Dior Sauvage for a versatile daily driver or Acqua di Gio Profondo for a more refined option.',
        'Keep a travel-size bottle at your desk for midday reapplication since fresh scents fade faster.',
      ],
      affiliateIds: ['dior-sauvage'],
    },
    {
      id: 'woody',
      title: 'Woody & Mature',
      description:
        'You gravitate toward rich, grounding scents built on sandalwood, cedar, vetiver, and leather. These fragrances project sophistication and quiet confidence. They are the kind of cologne that gets compliments from people with refined taste. Think Tom Ford Oud Wood, Terre d\'Hermes, and Dolce & Gabbana The One EDP.',
      tips: [
        'Woody fragrances perform best in fall and winter when cool air amplifies their depth.',
        'Less is more - one or two sprays is enough since these scents project strongly.',
        'Apply to your chest under a shirt for a subtle but lasting scent bubble throughout the day.',
        'Tom Ford Oud Wood is an investment piece, but Versace Pour Homme is a great budget-friendly alternative.',
        'These scents improve with skin chemistry over time, so give a new bottle a week before judging it.',
      ],
    },
    {
      id: 'sweet',
      title: 'Sweet & Bold',
      description:
        'You love fragrances that make a statement - warm vanilla, rich tonka bean, spicy cinnamon, and smooth amber. These are the scents that get compliments on date nights and turn heads at the club. Versace Eros, Jean Paul Gaultier Ultra Male, and Valentino Uomo Born in Roma are right up your alley.',
      tips: [
        'Sweet fragrances are best for nighttime events - they can be overpowering in a daytime office setting.',
        'Apply sparingly in warm weather since heat amplifies sweetness and can become cloying.',
        'Spray on your neck and wrists for close-encounter situations like dates.',
        'Versace Eros is one of the most complimented men\'s fragrances ever made and an excellent starting point.',
        'For a more mature take on sweet scents, try Valentino Uomo or YSL La Nuit de L\'Homme.',
      ],
      affiliateIds: ['versace-eros'],
    },
    {
      id: 'classic',
      title: 'Classic & Timeless',
      description:
        'You prefer refined, well-balanced fragrances that never go out of style. Your ideal scents blend aromatic herbs, dry woods, and subtle spices into a composition that feels effortlessly elegant. Bleu de Chanel, Dior Homme, and Prada L\'Homme are the cornerstones of your collection.',
      tips: [
        'Classic scents work year-round and transition seamlessly from office to evening events.',
        'Bleu de Chanel is widely considered the most versatile men\'s fragrance ever created. Start there.',
        'Invest in the Eau de Parfum concentration for better longevity than Eau de Toilette.',
        'Apply after a shower when your pores are open for the best absorption and lasting power.',
        'Build a small rotation of 2-3 classic scents rather than chasing trends and buying many bottles.',
      ],
      affiliateIds: ['bleu-de-chanel'],
    },
  ],
  supportingContent: {
    intro:
      'Finding the right cologne can feel overwhelming with thousands of options on the market. This quiz narrows it down by matching your lifestyle, preferences, and personality to one of four fragrance profiles. Each profile includes specific cologne recommendations you can sample or buy with confidence.',
    howToUse:
      'Answer six quick questions about your daily life, scent preferences, and the impression you want to make. There are no wrong answers - just go with your instinct. Your result will include a fragrance profile, specific cologne recommendations, and tips for getting the most out of your scent.',
    faq: [
      {
        question: 'How many sprays of cologne should I use?',
        answer:
          'For most fragrances, 2-4 sprays is the sweet spot. Start with 2 sprays on pulse points (neck and wrist) and increase if you find the scent fades too quickly. Stronger, sweeter fragrances need fewer sprays, while lighter, fresh scents can handle more. The goal is for people to smell you in close conversation, not from across the room.',
      },
      {
        question: 'What is the difference between EDT, EDP, and Parfum?',
        answer:
          'EDT (Eau de Toilette) has 5-15% fragrance concentration and typically lasts 3-5 hours. EDP (Eau de Parfum) has 15-20% concentration and lasts 5-8 hours. Parfum (or Extrait) has 20-40% concentration and can last 8-12+ hours. EDP offers the best balance of longevity and value for most men.',
      },
      {
        question: 'Should I have different colognes for different seasons?',
        answer:
          'Ideally, yes. Fresh and citrus scents perform best in spring and summer when heat activates light notes. Woody, sweet, and spicy scents shine in fall and winter when cool air lets their depth develop without becoming overpowering. A two-fragrance rotation (one warm weather, one cold weather) covers most situations.',
      },
    ],
    relatedTools: [
      'skincare-routine-builder',
      'outfit-builder',
      'face-shape-analyzer',
    ],
  },
};
