import { QuizConfig } from '@/lib/types';

// ============================================================
// BACHELOR PAD CHECKLIST
// 6 questions to generate a personalized room-by-room apartment checklist
// ============================================================

export const bachelorPadChecklistConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'Just got my personalized bachelor pad checklist. Time to upgrade the apartment!',
  questions: [
    {
      id: 'living-situation',
      question: 'What\'s your living situation?',
      subtitle: 'This determines the scope of what you need.',
      options: [
        {
          label: 'Studio apartment',
          value: 'studio',
          points: {
            minimal: 4,
            midrange: 1,
            premium: 0,
            entertainer: 0,
          },
        },
        {
          label: '1-bedroom apartment',
          value: '1-bed',
          points: {
            minimal: 2,
            midrange: 3,
            premium: 1,
            entertainer: 2,
          },
        },
        {
          label: 'Shared apartment / roommates',
          value: 'shared',
          points: {
            minimal: 3,
            midrange: 2,
            premium: 0,
            entertainer: 1,
          },
        },
        {
          label: 'House or townhouse',
          value: 'house',
          points: {
            minimal: 0,
            midrange: 2,
            premium: 3,
            entertainer: 3,
          },
        },
      ],
    },
    {
      id: 'budget',
      question: 'What\'s your budget for upgrading your place?',
      subtitle: 'Be realistic. You can always upgrade over time.',
      options: [
        {
          label: 'Under $200 - just the essentials',
          value: 'under-200',
          points: {
            minimal: 4,
            midrange: 1,
            premium: 0,
            entertainer: 0,
          },
        },
        {
          label: '$200 - $500 - solid foundation',
          value: '200-500',
          points: {
            minimal: 2,
            midrange: 3,
            premium: 1,
            entertainer: 1,
          },
        },
        {
          label: '$500 - $1,000 - doing it right',
          value: '500-1000',
          points: {
            minimal: 0,
            midrange: 2,
            premium: 3,
            entertainer: 2,
          },
        },
        {
          label: '$1,000+ - going all in',
          value: '1000-plus',
          points: {
            minimal: 0,
            midrange: 1,
            premium: 4,
            entertainer: 3,
          },
        },
      ],
    },
    {
      id: 'hosting',
      question: 'How often do you have people over?',
      subtitle: 'Hosting frequency changes what you need to prioritize.',
      options: [
        {
          label: 'Almost never - my place is my cave',
          value: 'rarely',
          points: {
            minimal: 3,
            midrange: 2,
            premium: 2,
            entertainer: 0,
          },
        },
        {
          label: 'Occasionally - a friend or date here and there',
          value: 'occasionally',
          points: {
            minimal: 1,
            midrange: 3,
            premium: 2,
            entertainer: 2,
          },
        },
        {
          label: 'Regularly - friends come over most weekends',
          value: 'regularly',
          points: {
            minimal: 0,
            midrange: 1,
            premium: 2,
            entertainer: 4,
          },
        },
        {
          label: 'Constantly - I\'m basically running a social club',
          value: 'constantly',
          points: {
            minimal: 0,
            midrange: 0,
            premium: 2,
            entertainer: 4,
          },
        },
      ],
    },
    {
      id: 'cooking',
      question: 'What\'s your cooking situation?',
      subtitle: 'Your kitchen game determines a big chunk of the checklist.',
      options: [
        {
          label: 'I survive on takeout and frozen meals',
          value: 'none',
          points: {
            minimal: 4,
            midrange: 1,
            premium: 0,
            entertainer: 1,
          },
        },
        {
          label: 'I can make the basics - eggs, pasta, simple stuff',
          value: 'basic',
          points: {
            minimal: 2,
            midrange: 3,
            premium: 1,
            entertainer: 1,
          },
        },
        {
          label: 'I cook regularly and enjoy it',
          value: 'regular',
          points: {
            minimal: 0,
            midrange: 2,
            premium: 3,
            entertainer: 2,
          },
        },
        {
          label: 'I\'m a solid home chef and love hosting dinner',
          value: 'chef',
          points: {
            minimal: 0,
            midrange: 1,
            premium: 3,
            entertainer: 4,
          },
        },
      ],
    },
    {
      id: 'current-state',
      question: 'How would you describe the current state of your place?',
      subtitle: 'No judgment. We all start somewhere.',
      options: [
        {
          label: 'Bare minimum - mattress on the floor energy',
          value: 'bare',
          points: {
            minimal: 4,
            midrange: 2,
            premium: 0,
            entertainer: 0,
          },
        },
        {
          label: 'Halfway there - some furniture but no cohesion',
          value: 'halfway',
          points: {
            minimal: 1,
            midrange: 4,
            premium: 1,
            entertainer: 1,
          },
        },
        {
          label: 'Almost done - just need the finishing touches',
          value: 'almost',
          points: {
            minimal: 0,
            midrange: 1,
            premium: 4,
            entertainer: 2,
          },
        },
        {
          label: 'It looks decent but I know it could be better',
          value: 'decent',
          points: {
            minimal: 0,
            midrange: 2,
            premium: 3,
            entertainer: 3,
          },
        },
      ],
    },
    {
      id: 'style',
      question: 'What\'s your style preference?',
      subtitle: 'Pick the vibe that feels most like you.',
      options: [
        {
          label: 'Clean and minimal - less is more',
          value: 'minimal-style',
          points: {
            minimal: 3,
            midrange: 2,
            premium: 2,
            entertainer: 0,
          },
        },
        {
          label: 'Modern and functional - smart but stylish',
          value: 'modern',
          points: {
            minimal: 1,
            midrange: 3,
            premium: 2,
            entertainer: 1,
          },
        },
        {
          label: 'Warm and inviting - cozy with character',
          value: 'warm',
          points: {
            minimal: 0,
            midrange: 2,
            premium: 3,
            entertainer: 3,
          },
        },
        {
          label: 'Upscale and curated - I want it to look magazine-worthy',
          value: 'upscale',
          points: {
            minimal: 0,
            midrange: 1,
            premium: 4,
            entertainer: 2,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'minimal',
      title: 'The Essentials Starter Pack',
      description:
        'You are building from scratch or working with a tight budget, and that is perfectly fine. The goal right now is to cover the non-negotiables so your place is clean, functional, and does not scream "I just moved in six months ago." Focus on getting these basics right and upgrade over time. A well-kept minimal space beats a cluttered one filled with cheap stuff any day.',
      tips: [
        'BEDROOM: Get a real bed frame (even a simple metal one for $80). A mattress on the floor signals that you are not fully settled. Add a fitted sheet, flat sheet, two pillows, and one solid-color duvet cover. All white or dark gray looks clean.',
        'BEDROOM: One bedside table with a lamp. This costs $30 total and makes the room look 10x more adult.',
        'BATHROOM: Matching towel set (at least 4 bath towels). A shower curtain that is not see-through. Hand soap in an actual dispenser, not the bottle from the store. A trash can with a lid.',
        'BATHROOM: Basic toiletries visible and organized: face wash, moisturizer, deodorant. A clean mirror. This is the room guests judge you on the most.',
        'KITCHEN: One good chef knife, a cutting board, one non-stick pan, one pot, and a set of plates and bowls for 4 (even if you live alone). Matching utensils, not a random collection.',
        'KITCHEN: Dish soap, a sponge, paper towels, and a trash can that is not overflowing. Basic cleaning supplies under the sink.',
        'LIVING AREA: A real couch or futon (not a gaming chair as your main seat). One throw blanket. A surface to set a drink on, even if it is just a small side table.',
        'GENERAL: Trash bags in every room, a vacuum or Swiffer, and all-purpose cleaner. Clean your place once a week minimum. That alone puts you ahead.',
      ],
      affiliateIds: ['sheets', 'candle'],
    },
    {
      id: 'midrange',
      title: 'The Solid Foundation Setup',
      description:
        'You have the basics but your place lacks that "put together" feeling. This is about filling in the gaps and creating cohesion. When someone walks in, they should think "this person has their life together." The key at this level is not buying more stuff but making sure everything you have works together: matching colors, intentional placement, and a few quality upgrades that elevate the whole space.',
      tips: [
        'BEDROOM: Upgrade your bedding to hotel-quality sheets (percale or sateen, 300+ thread count). Add a second set so you always have clean sheets ready. Two matching pillows with cases, a quality comforter, and a bed frame with a headboard.',
        'BEDROOM: Blackout curtains (not blinds, actual curtains). A full-length mirror. A dresser or closet organization system so clothes are not piled on the floor or chair.',
        'BATHROOM: Upgrade to matching towels in a single color (white or charcoal). Add a bath mat, a proper toilet brush holder, and a small plant (pothos or snake plant thrive in humidity). A candle on the counter.',
        'BATHROOM: A medicine cabinet or shelf organizer so products are not scattered on the counter. Hand towels visible and fresh. An extra toilet paper roll always accessible.',
        'KITCHEN: A matching dinnerware set for 4-6 (plates, bowls, mugs). Proper glassware: water glasses and a set of wine glasses. A couple of decent kitchen tools: wooden spoon, spatula, tongs, measuring cups.',
        'KITCHEN: A coffee maker or pour-over setup. A knife block or magnetic strip with 3 good knives. Matching food storage containers (ditch the random takeout containers). A spice rack with actual spices.',
        'LIVING ROOM: A real coffee table or ottoman. Two throw pillows on the couch. One piece of wall art (a framed print, not a tapestry). Proper lighting: a floor lamp or table lamp instead of relying on the overhead.',
        'LIVING ROOM: A Bluetooth speaker visible and accessible. A bookshelf with actual books, not just random stuff. A candle or two. A plant in the corner.',
        'GENERAL: A doormat at the entrance. Matching hangers in the closet. A shoe rack or tray by the door. A coat hook or small entryway setup.',
      ],
      affiliateIds: ['sheets', 'candle'],
    },
    {
      id: 'premium',
      title: 'The Curated Upgrade',
      description:
        'Your place is functional but you want it to feel intentional and impressive. This is the level where details matter and small upgrades create a dramatically different atmosphere. You are moving from "I have stuff" to "every item was chosen for a reason." People will notice the difference. Dates will notice the difference. And most importantly, you will enjoy being in your own space more.',
      tips: [
        'BEDROOM: Invest in a quality mattress if you have not already (your sleep quality affects everything). Linen or high-end cotton sheets. A duvet with a well-fitted cover. Euro pillows for the back row, sleeping pillows in front. A nightstand on each side of the bed.',
        'BEDROOM: Art above the bed (one large piece or a triptych, not a random poster). Soft lighting: a dimmer switch or warm-toned bedside lamps. An aroma diffuser or high-end candle. This room should feel like a retreat.',
        'BATHROOM: Upgrade to Turkish cotton towels. A rainfall showerhead ($30 swap that transforms the shower experience). A vanity tray for cologne and daily products. Eucalyptus bundle hung from the showerhead for a spa-like scent.',
        'BATHROOM: Premium hand soap in a nice dispenser (Aesop, Byredo, or a quality local brand). A small framed print on the wall. Matching bathroom accessories (soap dish, toothbrush holder, cup).',
        'KITCHEN: A quality knife set (Victorinox Fibrox for value or Wusthof for premium). Cast iron skillet. Dutch oven for braises and bread. A cocktail setup: shaker, jigger, strainer, and a few quality spirits.',
        'KITCHEN: Matching stoneware or ceramic dishes. Proper wine glasses, rocks glasses, and cocktail coupes. A cookbook displayed on the counter. A quality cutting board (end-grain wood).',
        'LIVING ROOM: Statement furniture piece: a quality sofa, accent chair, or a live-edge coffee table. Layered lighting: overhead ambient, table lamp for mood, floor lamp for reading. Curated bookshelf with books, objects, and a small plant.',
        'LIVING ROOM: One or two quality art pieces on the wall, properly hung (center at eye level, not too high). A quality throw blanket draped on the sofa. A record player or premium speaker setup. Real plants, at least two.',
        'GENERAL: Upgrade your lighting throughout (warm-toned bulbs, 2700K). Smart plugs or smart bulbs so you can set scenes. A quality doormat. Hooks and organization that keep clutter invisible.',
      ],
      affiliateIds: ['sheets', 'candle'],
    },
    {
      id: 'entertainer',
      title: 'The Social Hub Setup',
      description:
        'Your place is not just where you live; it is where people gather. You host regularly and want your space to be as functional for a party of eight as it is for a quiet night alone. This checklist focuses on the hosting essentials that make your place the go-to spot: seating, drinkware, music, ambiance, and a kitchen that can keep up with your social calendar.',
      tips: [
        'SEATING: Enough seating for at least 6-8 people. This means the couch plus additional options: accent chairs, bar stools, floor cushions, or a bench. Ottomans that can double as seating.',
        'BAR SETUP: A dedicated bar cart or cabinet. Stock it with: a quality bourbon, vodka, gin, and tequila, plus simple syrup, bitters, and citrus. Proper glassware for each drink type. A cocktail shaker, jigger, and muddler.',
        'BAR SETUP: Ice bucket or insulated container for parties. A bottle opener and wine key always accessible. Cocktail napkins. One or two signature cocktail recipes you can make without thinking.',
        'KITCHEN: Serving platters and boards (a large wood board for charcuterie, a ceramic platter for appetizers). Enough matching plates, glasses, and utensils for 8 people. A large salad bowl. Serving utensils.',
        'KITCHEN: A slow cooker or Dutch oven for easy crowd-feeding. A sheet pan for roasting appetizers. Chip and dip bowls. A large cutting board that doubles as a serving surface.',
        'ENTERTAINMENT: A premium Bluetooth speaker or a multi-room system (Sonos, HomePod). Pre-made playlists for different vibes: dinner party, casual hangout, late night, and chill morning after.',
        'ENTERTAINMENT: A card game collection (Codenames, Cards Against Humanity, a good poker set). A TV setup that is accessible but not the centerpiece. Board games on a visible shelf.',
        'AMBIANCE: Dimmable lighting throughout (smart bulbs are worth it). Candles in multiple rooms. A signature scent for your place (a specific candle or diffuser that people associate with your home). String lights on a balcony or patio if you have one.',
        'BATHROOM: Hand towels in an obvious location. Air freshener or matches visible. A small basket with essentials for guests: extra toothbrush, hair ties, Advil, phone charger. This is the host move nobody expects.',
        'GENERAL: A coat rack or hooks for guest jackets. A shoe rack or designated area. Extra blankets and pillows accessible for the friend who always crashes. A clean, well-organized space that can handle the mess of a party and bounce back quickly.',
      ],
      affiliateIds: ['sheets', 'candle'],
    },
  ],
  supportingContent: {
    intro:
      'Your apartment says more about you than you think. When someone walks in, whether it is a friend, a date, or your parents, they form an impression in about 10 seconds. This bachelor pad essentials checklist helps you figure out exactly what to prioritize, what to skip, and what small upgrades make the biggest difference. You do not need an interior design degree or a massive budget. Just answer a few questions and get a personalized, room-by-room apartment checklist for guys based on your actual living situation and goals.',
    howToUse:
      'Answer six quick questions about your space, budget, lifestyle, and goals. We will give you a personalized bachelor pad checklist tailored to exactly where you are right now. Use it as a shopping list and tackle items in priority order. Already have the essentials? Level up your <a href="/morning-routine-builder">morning routine</a> and <a href="/skincare-routine-builder">skincare routine</a> to match. The biggest-impact items are listed first.',
    faq: [
      {
        question: 'What is the single most impactful thing I can do to upgrade my space?',
        answer:
          'Lighting. Swapping harsh overhead bulbs for warm-toned bulbs (2700K), adding a floor lamp, and introducing candles transforms any room instantly. <a href="https://www.architecturaldigest.com/story/how-to-light-a-room" target="_blank" rel="noopener">Architectural Digest</a> calls lighting the single fastest way to change a room\'s mood. After that, good bedding is second. Quality sheets make your bedroom feel like a hotel.',
      },
      {
        question: 'How do I make my apartment smell good?',
        answer:
          'Three layers: First, keep it clean (take out the trash regularly, do dishes immediately, laundry on schedule). Second, use a signature candle in the living room and bathroom. Third, add a subtle ongoing scent like a reed diffuser. Try our <a href="/fragrance-finder">Fragrance Finder</a> to pick a cologne that complements your space\'s scent.',
      },
      {
        question: 'What should I prioritize if I am on a tight budget?',
        answer:
          'In order: clean matching bedding (under $50 for a full set), bathroom basics (matching towels, hand soap, trash can with lid), and a single source of warm lighting for the living room. These three essentials, totaling about $100, will make the biggest visual and experiential difference in any bachelor apartment. Everything else can come later.',
      },
    ],
    relatedTools: [
      'morning-routine-builder',
      'gift-finder-quiz',
      'date-night-generator',
    ],
  },
};
