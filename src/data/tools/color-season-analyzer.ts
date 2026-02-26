import type { QuizConfig } from '@/lib/types';

export const colorSeasonAnalyzerConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'My color season is {result}! Discover yours:',
  questions: [
    {
      id: 'skin-undertone',
      question: 'What is the undertone of your skin?',
      subtitle:
        'Look at the inside of your wrist in natural daylight. What color do your veins appear?',
      options: [
        {
          label: 'My veins look mostly green - I have warm/yellow undertones',
          value: 'warm',
          points: { spring: 3, autumn: 3 },
        },
        {
          label: 'My veins look mostly blue or purple - I have cool/pink undertones',
          value: 'cool',
          points: { summer: 3, winter: 3 },
        },
        {
          label: 'I see both green and blue - I have neutral undertones',
          value: 'neutral',
          points: { spring: 1, summer: 1, autumn: 1, winter: 1 },
        },
      ],
    },
    {
      id: 'skin-tone',
      question: 'How would you describe your overall skin tone?',
      subtitle: 'Think about your natural skin color, not a tan.',
      options: [
        {
          label: 'Fair or light - I burn easily in the sun',
          value: 'fair',
          points: { spring: 2, summer: 3 },
        },
        {
          label: 'Light-medium - I burn first then gradually tan',
          value: 'light-medium',
          points: { spring: 3, summer: 1, winter: 1 },
        },
        {
          label: 'Medium - I tan fairly easily with minimal burning',
          value: 'medium',
          points: { autumn: 2, winter: 2 },
        },
        {
          label: 'Medium-dark to dark - I rarely burn',
          value: 'dark',
          points: { autumn: 3, winter: 3 },
        },
      ],
    },
    {
      id: 'eye-color',
      question: 'What color are your eyes?',
      subtitle: 'Look in natural light for the most accurate reading.',
      options: [
        {
          label: 'Light blue, light green, or light gray',
          value: 'light-cool',
          points: { summer: 3, spring: 1 },
        },
        {
          label: 'Bright blue, bright green, or hazel with green',
          value: 'bright',
          points: { spring: 3, winter: 1 },
        },
        {
          label: 'Warm brown, amber, or hazel with gold',
          value: 'warm-brown',
          points: { autumn: 3, spring: 1 },
        },
        {
          label: 'Dark brown or black',
          value: 'dark',
          points: { winter: 3, autumn: 1 },
        },
        {
          label: 'Gray-blue or steel gray',
          value: 'gray',
          points: { summer: 2, winter: 2 },
        },
      ],
    },
    {
      id: 'natural-hair',
      question: 'What is your natural hair color (or what was it before graying)?',
      subtitle: 'Think about your hair color as a teenager.',
      options: [
        {
          label: 'Light blonde, strawberry blonde, or light golden brown',
          value: 'light-warm',
          points: { spring: 3, summer: 1 },
        },
        {
          label: 'Ash blonde, ash brown, or light mousy brown',
          value: 'light-cool',
          points: { summer: 3 },
        },
        {
          label: 'Warm brown, auburn, or red',
          value: 'warm-brown',
          points: { autumn: 3 },
        },
        {
          label: 'Dark brown or black',
          value: 'dark',
          points: { winter: 3, autumn: 1 },
        },
        {
          label: 'Golden or sandy brown',
          value: 'golden',
          points: { spring: 2, autumn: 2 },
        },
      ],
    },
    {
      id: 'jewelry-test',
      question: 'Which metal looks better on you?',
      subtitle:
        'Hold gold and silver jewelry next to your face. Which one makes your skin glow?',
      options: [
        {
          label: 'Gold definitely looks better - silver washes me out',
          value: 'gold',
          points: { spring: 3, autumn: 3 },
        },
        {
          label: 'Silver or platinum looks better - gold looks too yellow on me',
          value: 'silver',
          points: { summer: 3, winter: 3 },
        },
        {
          label: 'Both look fine - I honestly cannot tell a big difference',
          value: 'both',
          points: { spring: 1, summer: 1, autumn: 1, winter: 1 },
        },
      ],
    },
    {
      id: 'contrast-level',
      question: 'How much contrast is there between your hair, skin, and eyes?',
      subtitle:
        'High contrast means very different shades (e.g., dark hair with light skin). Low contrast means everything is similar in lightness.',
      options: [
        {
          label: 'Low contrast - my hair, skin, and eyes are similar in lightness',
          value: 'low-warm',
          points: { spring: 3 },
        },
        {
          label: 'Low to medium contrast with muted, soft coloring overall',
          value: 'low-cool',
          points: { summer: 3 },
        },
        {
          label: 'Medium contrast with warm, rich coloring',
          value: 'medium-warm',
          points: { autumn: 3 },
        },
        {
          label: 'High contrast - noticeable difference between hair, skin, and eyes',
          value: 'high-cool',
          points: { winter: 3 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'spring',
      title: 'Spring - Warm & Light',
      description:
        'Your coloring is warm, fresh, and naturally bright. You likely have light-to-medium skin with golden or peachy undertones, light eyes (blue, green, or light hazel), and hair in the blonde-to-golden-brown range. Your best colors are warm, clear, and light - think of the colors you see when spring flowers bloom.',
      tips: [
        'Your power colors: coral, warm peach, salmon, light camel, golden yellow, warm aqua, light navy, ivory, and spring green.',
        'Avoid: black (too harsh), cool grays, burgundy, and any very dark or muted colors that overpower your natural brightness.',
        'For suits, choose warm navy, tan, light gray, or camel instead of charcoal or black.',
        'Your best neutrals are warm - think cream, khaki, warm beige, and cognac brown rather than cool gray or stark white.',
        'Gold jewelry and accessories complement your warm undertones far better than silver.',
      ],
    },
    {
      id: 'summer',
      title: 'Summer - Cool & Light',
      description:
        'Your coloring is cool, soft, and muted. You typically have fair-to-light skin with pink or rosy undertones, light eyes in soft blue, gray, or muted green, and ash blonde to light brown hair. Your best colors are cool, muted, and soft - like a hazy summer skyline rather than a bright beach day.',
      tips: [
        'Your power colors: dusty rose, soft lavender, powder blue, slate gray, soft teal, mauve, sage green, and cool taupe.',
        'Avoid: warm oranges, bright yellow, warm browns, and anything too vivid or saturated that clashes with your soft coloring.',
        'For suits, opt for medium gray, blue-gray, soft navy, or light charcoal. These work better than black or tan.',
        'Your best whites are soft white or blue-white rather than bright white or cream, which can look too warm.',
        'Silver, platinum, and white gold are your metals. Rose gold can also work as a bridge.',
      ],
    },
    {
      id: 'autumn',
      title: 'Autumn - Warm & Deep',
      description:
        'Your coloring is warm, rich, and earthy. You have medium-to-dark skin with golden, olive, or warm undertones, warm brown or amber eyes, and brown, auburn, or dark hair with warm highlights. Your best colors are the deep, muted, warm tones of autumn leaves and harvest landscapes.',
      tips: [
        'Your power colors: olive green, burnt orange, rust, mustard, warm burgundy, chocolate brown, terracotta, deep teal, and warm red.',
        'Avoid: pastel colors, icy blues, hot pink, and cool-toned bright colors that clash with your warm earthiness.',
        'For suits, rich chocolate brown, olive, warm charcoal, and forest green are excellent alternatives to basic black and navy.',
        'Earth tones are your foundation - build your wardrobe around cognac, khaki, olive, and warm gray.',
        'Gold, brass, and copper accessories enhance your natural warmth. Tortoiseshell sunglasses are ideal.',
      ],
    },
    {
      id: 'winter',
      title: 'Winter - Cool & Deep',
      description:
        'Your coloring is cool, high-contrast, and dramatic. You typically have medium-to-dark skin with cool or neutral undertones, dark brown or black eyes, and dark brown or black hair. The stark contrast between your hair, skin, and eyes is your defining feature. Your best colors are bold, cool, and saturated.',
      tips: [
        'Your power colors: true black, pure white, bright navy, royal blue, emerald green, true red, bright fuchsia, icy gray, and deep purple.',
        'Avoid: warm earthy tones (camel, orange, rust), muted pastels, and anything too soft or warm that dulls your natural contrast.',
        'You are the only season that truly looks great in pure black and stark white - use this to your advantage.',
        'For suits, jet black, charcoal, deep navy, and cool dark gray are your strongest options.',
        'Silver, platinum, and white gold complement your cool coloring. Statement pieces in bold colors work well on you.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Color season analysis helps you identify which clothing colors make you look your healthiest, most vibrant, and most put-together. Based on your skin undertone, eye color, hair color, and natural contrast level, you fall into one of four seasonal color palettes. Wearing your best colors is one of the simplest upgrades you can make to your appearance.',
    howToUse:
      'Take this quiz in natural daylight, ideally near a window. Remove any tinted glasses or colored contacts. If you dye your hair, answer based on your natural color. The quiz analyzes your undertone, contrast level, and coloring to place you in your seasonal palette with specific color recommendations for clothing and accessories.',
    faq: [
      {
        question: 'What if I look good in colors from multiple seasons?',
        answer:
          'Most men have a primary season with some overlap into an adjacent season (for example, Spring-Autumn or Summer-Winter). If your result does not feel like a perfect match, the quiz likely picked up on your secondary season. Focus on the recommended colors that you already know look good on you and experiment with the rest.',
      },
      {
        question: 'Does my color season change if I tan or go gray?',
        answer:
          'Your underlying skin undertone (warm or cool) does not change with a tan, but your contrast level can shift. Gray hair typically moves men from their warm season toward a cooler one (Spring to Summer, Autumn to Winter) because gray hair has cool undertones. If your coloring changes significantly, retake the quiz.',
      },
      {
        question: 'How do I use my color season when shopping?',
        answer:
          'Save your recommended color palette to your phone and reference it when shopping. Start by building a wardrobe of basics in your best neutrals, then add accent pieces in your power colors. You do not need to overhaul your wardrobe overnight - just make better color choices going forward when replacing or adding items.',
      },
    ],
    relatedTools: [
      'capsule-wardrobe-builder',
      'outfit-builder',
      'face-shape-analyzer',
    ],
  },
};
