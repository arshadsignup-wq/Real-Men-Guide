import type { QuizConfig } from '@/lib/types';

export const beardStyleSelectorConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'My ideal beard style is {result}! Find yours:',
  questions: [
    {
      id: 'face-shape',
      question: 'What is your face shape?',
      subtitle:
        'If you are unsure, try our Face Shape Analyzer first. Pick the closest match.',
      options: [
        {
          label: 'Round - about as wide as it is long, soft jawline',
          value: 'round',
          points: {
            'full-beard': 2,
            'short-boxed': 3,
            goatee: 2,
            stubble: 1,
          },
        },
        {
          label: 'Square - strong, angular jawline, wide forehead',
          value: 'square',
          points: {
            'short-boxed': 2,
            stubble: 3,
            'full-beard': 2,
            'clean-shaven': 1,
          },
        },
        {
          label: 'Oval - balanced proportions, slightly longer than wide',
          value: 'oval',
          points: {
            'full-beard': 2,
            'short-boxed': 2,
            stubble: 2,
            mustache: 1,
            goatee: 1,
          },
        },
        {
          label: 'Oblong/Rectangle - notably longer than it is wide',
          value: 'oblong',
          points: {
            'short-boxed': 3,
            stubble: 2,
            mustache: 2,
            'clean-shaven': 1,
          },
        },
        {
          label: 'Heart/Diamond - wider cheekbones, narrower chin',
          value: 'heart',
          points: {
            'full-beard': 3,
            goatee: 2,
            'short-boxed': 2,
          },
        },
      ],
    },
    {
      id: 'growth-pattern',
      question: 'How does your facial hair grow in?',
      subtitle: 'Be honest - this is the biggest factor in which styles are realistic for you.',
      options: [
        {
          label: 'Thick and even all over - full coverage on cheeks, chin, and neck',
          value: 'thick-even',
          points: {
            'full-beard': 3,
            'short-boxed': 2,
            stubble: 1,
          },
        },
        {
          label: 'Good coverage but patchy in a few spots',
          value: 'good-patchy',
          points: {
            'short-boxed': 3,
            stubble: 2,
            goatee: 1,
          },
        },
        {
          label: 'Grows best on the chin and mustache area, weak on cheeks',
          value: 'chin-strong',
          points: {
            goatee: 3,
            mustache: 2,
            stubble: 1,
          },
        },
        {
          label: 'Thin or patchy overall - takes forever to grow out',
          value: 'thin-patchy',
          points: {
            stubble: 3,
            'clean-shaven': 3,
            mustache: 1,
          },
        },
        {
          label: 'Strong mustache growth but not much elsewhere',
          value: 'mustache-strong',
          points: {
            mustache: 3,
            goatee: 2,
            'clean-shaven': 1,
          },
        },
      ],
    },
    {
      id: 'maintenance-level',
      question: 'How much time are you willing to spend on beard maintenance?',
      subtitle: 'Be realistic - a style you cannot maintain will always look messy.',
      options: [
        {
          label: 'Minimal - I want to set it and forget it (under 2 minutes daily)',
          value: 'minimal',
          points: {
            stubble: 3,
            'clean-shaven': 2,
          },
        },
        {
          label: 'Low - Quick trim once or twice a week (5 minutes)',
          value: 'low',
          points: {
            stubble: 2,
            'short-boxed': 2,
            goatee: 2,
          },
        },
        {
          label: 'Moderate - Regular trimming and shaping (10 minutes every few days)',
          value: 'moderate',
          points: {
            'short-boxed': 3,
            goatee: 2,
            mustache: 2,
          },
        },
        {
          label: 'High - I enjoy grooming and do not mind daily upkeep (15+ minutes)',
          value: 'high',
          points: {
            'full-beard': 3,
            mustache: 2,
          },
        },
      ],
    },
    {
      id: 'job-environment',
      question: 'What is your work environment like?',
      subtitle: 'Some workplaces have grooming expectations that affect your options.',
      options: [
        {
          label: 'Corporate or client-facing - polished appearance expected',
          value: 'corporate',
          points: {
            stubble: 2,
            'short-boxed': 3,
            'clean-shaven': 2,
          },
        },
        {
          label: 'Business casual - some flexibility in grooming',
          value: 'business-casual',
          points: {
            'short-boxed': 3,
            stubble: 2,
            goatee: 1,
          },
        },
        {
          label: 'Creative or startup - no grooming restrictions',
          value: 'creative',
          points: {
            'full-beard': 3,
            mustache: 2,
            goatee: 1,
          },
        },
        {
          label: 'Remote or freelance - I set my own standards',
          value: 'remote',
          points: {
            'full-beard': 3,
            'short-boxed': 1,
            mustache: 1,
            stubble: 1,
          },
        },
        {
          label: 'Trades, military, or medical - facial hair may be restricted',
          value: 'restricted',
          points: {
            'clean-shaven': 3,
            stubble: 2,
          },
        },
      ],
    },
    {
      id: 'style-vibe',
      question: 'What vibe are you going for?',
      subtitle: 'Think about the overall image you want to project.',
      options: [
        {
          label: 'Rugged and masculine - lumberjack energy',
          value: 'rugged',
          points: {
            'full-beard': 3,
            'short-boxed': 1,
          },
        },
        {
          label: 'Clean and polished - GQ cover energy',
          value: 'polished',
          points: {
            stubble: 3,
            'clean-shaven': 2,
          },
        },
        {
          label: 'Edgy and stylish - modern and intentional',
          value: 'edgy',
          points: {
            goatee: 2,
            mustache: 3,
            'short-boxed': 1,
          },
        },
        {
          label: 'Classic and timeless - old-school gentleman',
          value: 'classic',
          points: {
            'short-boxed': 3,
            mustache: 2,
          },
        },
      ],
    },
    {
      id: 'age-range',
      question: 'What is your age range?',
      subtitle: 'Different styles complement different stages of life.',
      options: [
        {
          label: '18-24 - still figuring out my style',
          value: '18-24',
          points: {
            stubble: 3,
            'clean-shaven': 2,
            goatee: 1,
          },
        },
        {
          label: '25-34 - establishing my look',
          value: '25-34',
          points: {
            'short-boxed': 3,
            stubble: 2,
            'full-beard': 1,
          },
        },
        {
          label: '35-44 - refined and confident',
          value: '35-44',
          points: {
            'full-beard': 2,
            'short-boxed': 2,
            mustache: 2,
          },
        },
        {
          label: '45+ - distinguished and experienced',
          value: '45-plus',
          points: {
            'full-beard': 3,
            mustache: 2,
            'short-boxed': 1,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'full-beard',
      title: 'Full Beard',
      description:
        'The king of beard styles. A full beard works best for men with thick, even facial hair growth and the patience for daily grooming. It adds weight to the lower face, projects maturity and masculinity, and complements heart-shaped, diamond, and oval faces particularly well. Growing a quality full beard takes 2-4 months of commitment.',
      tips: [
        'Invest in a quality beard oil and apply daily to keep the hair soft and the skin underneath moisturized.',
        'Use a boar bristle brush every morning to train your beard to grow in the direction you want.',
        'Get professional shaping at a barbershop every 3-4 weeks to maintain clean lines.',
        'Define your neckline by shaving below a line from behind each ear to just above your Adam\'s apple.',
        'Be patient through the itchy phase (weeks 2-4) - it passes once the hair gets longer and softer.',
      ],
    },
    {
      id: 'short-boxed',
      title: 'Short Boxed Beard',
      description:
        'The most versatile and universally flattering beard style. A short boxed beard is trimmed to a uniform length (typically 3-10mm) with defined cheek and necklines. It is neat enough for corporate environments while still adding definition and masculinity. This style works for almost every face shape and is the easiest full-coverage beard to maintain.',
      tips: [
        'Keep the length between 3mm and 10mm using a quality trimmer with a guard attachment.',
        'Trim every 3-4 days to maintain a consistent length and sharp appearance.',
        'Define your cheek line naturally - let it follow your growth pattern rather than forcing a straight line.',
        'Use a clear shaving gel when cleaning up the neckline so you can see exactly where you are cutting.',
        'A short boxed beard makes round faces look more angular and softens very square jawlines.',
      ],
    },
    {
      id: 'goatee',
      title: 'Goatee',
      description:
        'A goatee focuses facial hair on the chin and mustache area, making it an excellent choice for men whose cheek growth is patchy or thin. It draws attention to the center of the face, adds length to rounder faces, and works especially well for men with strong chin growth. The modern goatee is clean and well-defined, not the scraggly version from the 90s.',
      tips: [
        'Keep the goatee trimmed to a consistent length and use a razor to maintain sharp edges.',
        'The width of the goatee should match the width of your mouth for the most balanced look.',
        'Connect the mustache to the chin beard for a classic Van Dyke variation that adds structure.',
        'Shave your cheeks completely smooth every 1-2 days to keep the goatee looking intentional.',
        'A goatee adds visual length to round faces and visual weight to narrow chins.',
      ],
    },
    {
      id: 'stubble',
      title: 'Designer Stubble',
      description:
        'Stubble is consistently rated as the most attractive facial hair style in studies. It projects effortless masculinity without the maintenance commitment of a full beard. The key word is "designer" - this is intentional, well-maintained stubble, not "I forgot to shave." Keep it between 1-3mm and maintain clean edges for maximum impact.',
      tips: [
        'Use a trimmer set to 1-3mm every 2-3 days for the perfect stubble length that looks intentional.',
        'Always clean up the neckline and cheek lines - the difference between stubble and laziness is sharp edges.',
        'Heavy stubble (3-5mm) adds more definition to soft or round faces than light stubble.',
        'Stubble pairs perfectly with almost every hairstyle and works in both casual and corporate environments.',
        'Exfoliate your face twice a week to prevent ingrown hairs that are more visible with short stubble.',
      ],
    },
    {
      id: 'mustache',
      title: 'Mustache',
      description:
        'The standalone mustache has made a massive comeback. From the classic chevron to the modern handlebar, a well-groomed mustache makes a bold style statement. It works best for men with strong upper lip growth and adds character to oblong and oval face shapes. A mustache says you are confident enough to own an unconventional look.',
      tips: [
        'Start with a chevron mustache (natural shape, trimmed at the lip line) before experimenting with other styles.',
        'Use mustache wax for shaping and control, especially if you are growing it beyond the lip line.',
        'Trim the bottom edge regularly so hair does not hang over your lip - this is the most common grooming mistake.',
        'A mustache pairs well with a clean-shaven face for maximum contrast and visual impact.',
        'It takes 4-6 weeks to grow a mustache thick enough to style, so commit through the awkward phase.',
      ],
    },
    {
      id: 'clean-shaven',
      title: 'Clean Shaven',
      description:
        'Sometimes the best facial hair is no facial hair. A clean-shaven look is timeless, professional, and showcases your jawline and facial structure. If your facial hair growth is thin, patchy, or your job restricts it, clean-shaven is not a fallback - it is a deliberate choice that many of the most stylish men in the world make every day.',
      tips: [
        'Use a proper shaving routine: hot water, pre-shave oil, quality razor, shaving cream, and aftershave balm.',
        'Shave with the grain first, then across the grain for a closer shave without razor burn.',
        'Replace your razor blade every 5-7 shaves to avoid irritation and pulling.',
        'Apply a moisturizer with SPF daily - a clean-shaven face is more exposed to sun damage.',
        'If your jawline is less defined, a clean-shaven face works best paired with a structured hairstyle that draws attention upward.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'The right beard style can sharpen your jawline, balance your face shape, and completely transform your look. But the wrong style - or one you cannot actually grow - does the opposite. This quiz matches your face shape, growth pattern, lifestyle, and grooming commitment to the beard style that will look best on you.',
    howToUse:
      'Answer each question honestly, especially about your facial hair growth pattern. The best beard style is one you can actually grow and maintain. Your result will include specific grooming tips and product recommendations to help you achieve and maintain your ideal style.',
    faq: [
      {
        question: 'How long does it take to grow a full beard?',
        answer:
          'Most men need 2-4 months to grow a full beard. Facial hair grows about half an inch per month on average. The most important thing is to resist trimming for at least 4-6 weeks to let your beard fill in. Patchy spots often fill in once the surrounding hair gets long enough to cover them.',
      },
      {
        question: 'What if my beard grows patchy?',
        answer:
          'Patchy growth is extremely common and not a reason to give up on facial hair. Options include: choosing a style that works with your growth pattern (like a goatee if cheeks are thin), growing it longer to cover patches, using a boar bristle brush to train coverage, and giving it more time. Minoxidil has also shown results for some men, though you should consult a dermatologist first.',
      },
      {
        question: 'How often should I trim my beard?',
        answer:
          'It depends on the style. Stubble needs trimming every 2-3 days. A short boxed beard every 3-4 days. A full beard can go 1-2 weeks between trims but should be brushed and oiled daily. The neckline and cheek lines should be cleaned up at least twice a week regardless of style.',
      },
    ],
    relatedTools: [
      'face-shape-analyzer',
      'skincare-routine-builder',
      'fragrance-finder',
    ],
  },
};
