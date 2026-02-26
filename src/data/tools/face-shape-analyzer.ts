import type { QuizConfig } from '@/lib/types';

export const faceShapeAnalyzerConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'I just found out my face shape is {result}! Discover yours:',
  questions: [
    {
      id: 'jaw-width',
      question: 'How would you describe your jawline?',
      subtitle: 'Look in the mirror and focus on the lower half of your face.',
      options: [
        {
          label: 'Wide and angular with sharp corners',
          value: 'wide-angular',
          points: { square: 3, oblong: 1 },
        },
        {
          label: 'Rounded and soft with no sharp angles',
          value: 'rounded',
          points: { round: 3, oval: 1 },
        },
        {
          label: 'Narrow and pointed toward the chin',
          value: 'narrow-pointed',
          points: { heart: 3, diamond: 1 },
        },
        {
          label: 'Moderately defined, neither too sharp nor too soft',
          value: 'moderate',
          points: { oval: 3, oblong: 1 },
        },
        {
          label: 'Narrow but with a flat, wide chin',
          value: 'narrow-flat',
          points: { diamond: 2, oblong: 2 },
        },
      ],
    },
    {
      id: 'forehead-width',
      question: 'How wide is your forehead compared to your cheekbones?',
      subtitle: 'Measure visually from temple to temple versus cheek to cheek.',
      options: [
        {
          label: 'My forehead is noticeably wider than my cheekbones',
          value: 'wider-forehead',
          points: { heart: 3, oval: 1 },
        },
        {
          label: 'My forehead and cheekbones are about the same width',
          value: 'equal-width',
          points: { square: 2, round: 2 },
        },
        {
          label: 'My cheekbones are wider than my forehead',
          value: 'wider-cheeks',
          points: { diamond: 3, round: 1 },
        },
        {
          label: 'Both are relatively narrow',
          value: 'both-narrow',
          points: { oblong: 3, oval: 1 },
        },
      ],
    },
    {
      id: 'face-length',
      question: 'How would you describe the overall length of your face?',
      subtitle: 'Think about the distance from your hairline to the bottom of your chin.',
      options: [
        {
          label: 'Noticeably longer than it is wide',
          value: 'long',
          points: { oblong: 3, oval: 1 },
        },
        {
          label: 'About as long as it is wide (almost equal)',
          value: 'equal',
          points: { round: 3, square: 2 },
        },
        {
          label: 'Slightly longer than wide, well-proportioned',
          value: 'slightly-longer',
          points: { oval: 3, heart: 1 },
        },
        {
          label: 'Average length, but my cheekbones are the widest point',
          value: 'avg-wide-cheeks',
          points: { diamond: 3, heart: 1 },
        },
      ],
    },
    {
      id: 'chin-shape',
      question: 'What shape is your chin?',
      subtitle: 'Focus on the very bottom of your face.',
      options: [
        {
          label: 'Pointy or V-shaped',
          value: 'pointy',
          points: { heart: 3, diamond: 2 },
        },
        {
          label: 'Round and curved',
          value: 'round',
          points: { round: 3, oval: 1 },
        },
        {
          label: 'Flat and wide (square-ish)',
          value: 'flat-wide',
          points: { square: 3, oblong: 1 },
        },
        {
          label: 'Narrow but not pointy',
          value: 'narrow',
          points: { oval: 2, oblong: 2 },
        },
      ],
    },
    {
      id: 'cheekbones',
      question: 'How prominent are your cheekbones?',
      subtitle: 'Do your cheekbones visually stand out when you look in the mirror?',
      options: [
        {
          label: 'Very prominent - they are the widest part of my face',
          value: 'very-prominent',
          points: { diamond: 3, heart: 1 },
        },
        {
          label: 'Somewhat visible but not the widest part',
          value: 'somewhat',
          points: { oval: 2, square: 1, round: 1 },
        },
        {
          label: 'Not very prominent - my face has a uniform width',
          value: 'not-prominent',
          points: { round: 2, square: 2 },
        },
        {
          label: 'Hard to tell - my face is relatively narrow all around',
          value: 'hard-to-tell',
          points: { oblong: 3, oval: 1 },
        },
      ],
    },
    {
      id: 'face-widest-point',
      question: 'Where is the widest part of your face?',
      subtitle: 'Think about your face as a whole from top to bottom.',
      options: [
        {
          label: 'At the forehead - it tapers down toward the chin',
          value: 'forehead',
          points: { heart: 3, oval: 1 },
        },
        {
          label: 'At the cheekbones - both forehead and jaw are narrower',
          value: 'cheekbones',
          points: { diamond: 3, oval: 1 },
        },
        {
          label: 'At the jaw - my jaw is as wide or wider than my cheekbones',
          value: 'jaw',
          points: { square: 3, round: 1 },
        },
        {
          label: 'Pretty uniform throughout - no one area is much wider',
          value: 'uniform',
          points: { round: 2, oblong: 2 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'oval',
      title: 'Oval Face Shape',
      description:
        'You have the most versatile face shape in men\'s grooming. Your face is slightly longer than it is wide, with balanced proportions and gently rounded features. The forehead is slightly wider than the jaw, and your cheekbones are the widest part. This symmetry means almost every hairstyle, beard style, and glasses shape works for you.',
      tips: [
        'Lucky you - almost any hairstyle works. Try a textured quiff, side part, or slicked-back style.',
        'For glasses, rectangular, aviator, and wayfarer frames all complement your proportions.',
        'A short beard or stubble adds masculinity without disrupting your balanced features.',
        'Avoid overly long hairstyles that can elongate your face and throw off the balance.',
        'When choosing sunglasses, slightly wider frames add a touch of edge to your look.',
      ],
    },
    {
      id: 'round',
      title: 'Round Face Shape',
      description:
        'Your face is roughly as wide as it is long, with full cheeks and a rounded jawline. The key to styling a round face is creating the illusion of length and angles. Strategic hairstyle and accessory choices can add definition and structure.',
      tips: [
        'Go for hairstyles with height on top like pompadours, faux hawks, or tall quiffs to elongate your face.',
        'Avoid flat, side-swept styles that emphasize width - you want volume on top.',
        'Angular, rectangular glasses frames will add definition. Avoid round frames that mirror your face shape.',
        'A beard with length on the chin (like a goatee or ducktail) creates the illusion of a longer face.',
        'Keep sideburns short and tight to avoid adding width.',
      ],
    },
    {
      id: 'square',
      title: 'Square Face Shape',
      description:
        'You have strong, angular features with a wide jawline, broad forehead, and a relatively flat chin. Your face is nearly as wide as it is long. The square face is considered one of the most classically masculine shapes. Your goal is to complement those strong angles.',
      tips: [
        'Textured crops, messy side parts, and natural styles soften your angular features nicely.',
        'A short boxed beard or heavy stubble enhances your already strong jawline.',
        'Round or oval glasses frames provide contrast to your angular features. Aviators are a great option.',
        'Avoid very boxy or squared-off haircuts that can make your head look too blocky.',
        'Medium-length hairstyles with some volume work great to balance your proportions.',
      ],
    },
    {
      id: 'heart',
      title: 'Heart Face Shape',
      description:
        'Your forehead is the widest part of your face, tapering down to a narrower jawline and a pointed or narrow chin. You may also have prominent cheekbones. This face shape benefits from styles that balance the wider forehead with the narrower lower face.',
      tips: [
        'Medium-length hairstyles that add width at the sides help balance your wider forehead. Try a textured fringe.',
        'Avoid excessive volume on top which will make your forehead look even wider.',
        'Light stubble or a short beard adds visual weight to your chin and balances proportions.',
        'Glasses with wider, bottom-heavy frames (like aviators or clubmasters) balance your face.',
        'Side-swept bangs or fringe can minimize a prominent forehead effectively.',
      ],
    },
    {
      id: 'oblong',
      title: 'Oblong Face Shape',
      description:
        'Your face is notably longer than it is wide, with a long, straight cheek line and relatively uniform width from forehead to jaw. Also called a rectangular face shape. The styling strategy is to create the illusion of width and avoid further elongating your features.',
      tips: [
        'Hairstyles with side volume like textured side parts or curtain bangs add width. Avoid tall pompadours.',
        'A fringe or bangs can visually shorten a long forehead and reduce the overall length.',
        'A full beard with width on the sides adds visual weight and breaks up the length.',
        'Wide frames like wayfarers or oversized aviators complement your face by adding horizontal emphasis.',
        'Keep hair shorter on top and fuller on the sides - the opposite of most advice, but perfect for your shape.',
      ],
    },
    {
      id: 'diamond',
      title: 'Diamond Face Shape',
      description:
        'Your cheekbones are the widest part of your face, with both the forehead and jawline being narrower. This is one of the rarest and most striking face shapes. The goal is to highlight your cheekbones while adding width to the forehead or chin area.',
      tips: [
        'Side-swept or textured hairstyles with some volume on top draw attention upward. A fringe works well too.',
        'Avoid slicking hair straight back, which narrows the forehead and highlights the wide cheekbones too much.',
        'A chin beard or goatee adds width to the narrow chin area, balancing your proportions.',
        'Oval or rimless glasses complement your angular cheekbones without competing with them.',
        'Medium-length hair that covers the tops of the ears slightly adds width where you need it.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Your face shape is the foundation of your personal style. Knowing whether you have an oval, round, square, heart, oblong, or diamond face shape helps you choose hairstyles, beard styles, and glasses that complement your features. This quick quiz analyzes your facial proportions to determine your shape.',
    howToUse:
      'Answer each question honestly while looking in a mirror. Pull your hair back so you can clearly see your hairline, jawline, and cheekbones. If you are between two answers, pick the one that feels closest. Your result will include specific hairstyle, glasses, and grooming recommendations.',
    faq: [
      {
        question: 'How accurate is this face shape quiz?',
        answer:
          'This quiz is based on the same proportional analysis used by barbers and stylists. While a professional consultation can offer more nuance, this quiz accurately identifies your primary face shape in the vast majority of cases. For best results, answer while looking in a mirror with your hair pulled back.',
      },
      {
        question: 'Can my face shape change over time?',
        answer:
          'Your underlying bone structure does not change, but weight gain or loss, aging, and facial hair can alter the appearance of your face shape. If your weight or grooming changes significantly, it is worth retaking the quiz to see if your styling recommendations should be updated.',
      },
      {
        question: 'What if I am between two face shapes?',
        answer:
          'Many men have a blend of two face shapes (for example, oval-round or square-oblong). If your result does not feel like a perfect match, read the tips for both the primary and secondary shapes and combine recommendations that resonate with you.',
      },
    ],
    relatedTools: [
      'beard-style-selector',
      'color-season-analyzer',
      'outfit-builder',
    ],
  },
};
