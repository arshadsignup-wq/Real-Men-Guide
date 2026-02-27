import { GeneratorConfig } from '@/lib/types';

// ============================================================
// DATE NIGHT GENERATOR
// 30+ creative date ideas with budget, vibe, and stage filters
// ============================================================

export const dateNightGeneratorConfig: GeneratorConfig = {
  itemsPerGenerate: 3,
  shareText: 'Just found the perfect date night idea on Real Men Guide!',
  filters: [
    {
      id: 'budget',
      label: 'Budget',
      type: 'select',
      options: [
        { label: 'All Budgets', value: 'all' },
        { label: 'Free', value: 'free' },
        { label: 'Under $50', value: 'under-50' },
        { label: '$50 - $100', value: '50-100' },
        { label: 'Splurge ($100+)', value: 'splurge' },
      ],
    },
    {
      id: 'vibe',
      label: 'Vibe',
      type: 'select',
      options: [
        { label: 'All Vibes', value: 'all' },
        { label: 'Adventurous', value: 'adventurous' },
        { label: 'Romantic', value: 'romantic' },
        { label: 'Chill', value: 'chill' },
        { label: 'Creative', value: 'creative' },
        { label: 'Foodie', value: 'foodie' },
      ],
    },
    {
      id: 'stage',
      label: 'Relationship Stage',
      type: 'select',
      options: [
        { label: 'All Stages', value: 'all' },
        { label: 'First Date', value: 'first-date' },
        { label: 'New Couple', value: 'new-couple' },
        { label: 'Long-Term', value: 'long-term' },
      ],
    },
  ],
  items: [
    {
      id: 'sunset-hike',
      title: 'Sunset Hike with a Packed Picnic',
      description:
        'Find a local trail with a good viewpoint, pack a simple charcuterie board and a bottle of wine (or sparkling water), and time it so you arrive at the top for golden hour. The physical activity breaks the ice naturally, and the view gives you a built-in conversation topic.',
      tags: ['free', 'adventurous', 'first-date', 'new-couple'],
      category: 'Outdoors',
      extras: {
        Budget: 'Free (bring what you have)',
        Duration: '2-3 hours',
        'Best for': 'Active couples who like the outdoors',
      },
    },
    {
      id: 'cooking-challenge',
      title: 'Mystery Ingredient Cooking Challenge',
      description:
        'Each person picks three random ingredients the other has to cook with. Set a 45-minute timer, put on some music, and cook side-by-side. Judge each other\'s dishes on taste, presentation, and creativity. The playful competition creates great energy and laughs.',
      tags: ['free', 'creative', 'foodie', 'long-term', 'new-couple'],
      category: 'At Home',
      extras: {
        Budget: 'Free (use pantry staples)',
        Duration: '1.5-2 hours',
        'Best for': 'Couples who want to do something fun at home',
      },
    },
    {
      id: 'farmers-market-brunch',
      title: 'Farmers Market to Brunch Pipeline',
      description:
        'Hit the local farmers market early, pick out fresh ingredients together, then head home and cook brunch from scratch. The shopping acts as a low-pressure activity where conversation flows easily, and you get to show off your cooking skills.',
      tags: ['under-50', 'foodie', 'chill', 'first-date', 'new-couple'],
      category: 'Outdoors',
      extras: {
        Budget: '$15-30',
        Duration: '3-4 hours',
        'Best for': 'Weekend morning dates',
      },
    },
    {
      id: 'speakeasy-crawl',
      title: 'Speakeasy & Cocktail Bar Crawl',
      description:
        'Research hidden cocktail bars in your city and plan a three-stop crawl. Order one unique cocktail at each spot. The hunt for the entrance is half the fun, and you look like you put real effort into planning the evening.',
      tags: ['50-100', 'adventurous', 'romantic', 'first-date', 'new-couple'],
      category: 'Nightlife',
      extras: {
        Budget: '$60-100',
        Duration: '3-4 hours',
        'Best for': 'Making a great impression',
      },
    },
    {
      id: 'pottery-class',
      title: 'Pottery or Ceramics Class',
      description:
        'Take a couples pottery class at a local studio. Working with your hands together creates a unique bonding experience, and you both get to take home something you made. Yes, the Ghost movie jokes are mandatory.',
      tags: ['under-50', 'creative', 'first-date', 'new-couple'],
      category: 'Classes',
      extras: {
        Budget: '$25-50 per person',
        Duration: '2-3 hours',
        'Best for': 'Creative types who like trying new things',
      },
    },
    {
      id: 'drive-in-movie',
      title: 'Drive-In Movie Night',
      description:
        'Find a drive-in theater (or set up a projector in the backyard). Bring cozy blankets, snacks, and hot chocolate. The retro setting feels special without trying too hard, and the car gives you privacy to talk during slow parts.',
      tags: ['under-50', 'romantic', 'chill', 'new-couple', 'long-term'],
      category: 'Entertainment',
      extras: {
        Budget: '$20-40',
        Duration: '2-3 hours',
        'Best for': 'Laid-back romantic evenings',
      },
    },
    {
      id: 'stargazing',
      title: 'Stargazing Trip',
      description:
        'Drive to a dark sky location away from the city, bring a blanket and a star chart app on your phone. Identify constellations together and just enjoy the quiet. This is one of the most romantic settings possible and costs absolutely nothing.',
      tags: ['free', 'romantic', 'adventurous', 'new-couple', 'long-term'],
      category: 'Outdoors',
      extras: {
        Budget: 'Free',
        Duration: '2-3 hours',
        'Best for': 'Clear nights and genuine conversation',
      },
    },
    {
      id: 'food-truck-tour',
      title: 'Food Truck Rally Tour',
      description:
        'Find a food truck rally or cluster in your city and share small plates from five or six different trucks. Splitting bites means you try way more food, and walking between trucks keeps the conversation flowing.',
      tags: ['under-50', 'foodie', 'chill', 'first-date', 'new-couple'],
      category: 'Food',
      extras: {
        Budget: '$30-50',
        Duration: '2-3 hours',
        'Best for': 'Adventurous eaters who love trying new things',
      },
    },
    {
      id: 'escape-room',
      title: 'Escape Room Challenge',
      description:
        'Book an escape room for two (or join a small group). You will learn a lot about how someone thinks under pressure, communicates, and handles frustration. It also gives you a shared story to reference later.',
      tags: ['under-50', 'adventurous', 'first-date', 'new-couple'],
      category: 'Activities',
      extras: {
        Budget: '$25-40 per person',
        Duration: '1.5-2 hours',
        'Best for': 'Competitive couples and ice-breaking',
      },
    },
    {
      id: 'wine-tasting',
      title: 'Wine Tasting at a Local Vineyard',
      description:
        'Visit a local winery or wine bar and do a tasting flight together. Ask the sommelier questions, compare your notes on each wine, and see how differently you both experience the same flavors. Classy and naturally conversational.',
      tags: ['50-100', 'romantic', 'foodie', 'first-date', 'new-couple'],
      category: 'Food',
      extras: {
        Budget: '$50-80',
        Duration: '2-3 hours',
        'Best for': 'Impressing a date with something sophisticated',
      },
    },
    {
      id: 'bookstore-date',
      title: 'Bookstore Challenge Date',
      description:
        'Go to a bookstore and each pick out a book you think the other would love, spending no more than $15. The choices reveal how well you know each other (or want to know each other). Grab coffee at the cafe inside and swap picks.',
      tags: ['under-50', 'creative', 'chill', 'first-date', 'new-couple', 'long-term'],
      category: 'Activities',
      extras: {
        Budget: '$15-30',
        Duration: '1.5-2 hours',
        'Best for': 'Readers and thoughtful conversation lovers',
      },
    },
    {
      id: 'rooftop-dinner',
      title: 'Rooftop Restaurant Dinner',
      description:
        'Book a table at a rooftop restaurant with a city view. Dress up, order a bottle of wine, and take your time. Sometimes classic date night done well beats anything clever. Make the reservation in advance to look like you planned it.',
      tags: ['splurge', 'romantic', 'first-date', 'long-term'],
      category: 'Dining',
      extras: {
        Budget: '$100-200+',
        Duration: '2-3 hours',
        'Best for': 'Anniversary, birthday, or special occasion',
      },
    },
    {
      id: 'museum-and-dinner',
      title: 'Museum Visit + Dinner Discussion',
      description:
        'Visit an art museum or exhibit, then head to dinner nearby and discuss what you saw. The art gives you instant conversation fuel, and you learn how the other person thinks. Many museums have free or discounted nights.',
      tags: ['under-50', 'creative', 'chill', 'first-date', 'new-couple'],
      category: 'Culture',
      extras: {
        Budget: '$20-50',
        Duration: '3-4 hours',
        'Best for': 'Intellectual connection and thoughtful dates',
      },
    },
    {
      id: 'karaoke-night',
      title: 'Private Karaoke Room Night',
      description:
        'Book a private karaoke room (not the bar stage, that is terrifying on a date). The private room lets you be silly together without an audience. Duets are mandatory. Bonus points if you bring a flask and a playlist of guilty pleasure songs.',
      tags: ['under-50', 'adventurous', 'creative', 'new-couple', 'long-term'],
      category: 'Nightlife',
      extras: {
        Budget: '$30-50',
        Duration: '2-3 hours',
        'Best for': 'Breaking down walls and having ridiculous fun',
      },
    },
    {
      id: 'spa-night-home',
      title: 'At-Home Spa Night',
      description:
        'Set up a full spa experience at home: face masks, essential oil diffuser, candles, relaxing music, and a warm bath. Take turns giving each other massages. This is intimate, thoughtful, and costs almost nothing.',
      tags: ['free', 'romantic', 'chill', 'long-term'],
      category: 'At Home',
      extras: {
        Budget: 'Free - $20',
        Duration: '2-3 hours',
        'Best for': 'Long-term couples needing reconnection',
      },
    },
    {
      id: 'rock-climbing',
      title: 'Indoor Rock Climbing Session',
      description:
        'Hit a climbing gym together. Belaying for each other creates instant trust, and the physical challenge keeps the energy high. Most gyms rent all the gear you need and offer intro sessions for beginners.',
      tags: ['under-50', 'adventurous', 'first-date', 'new-couple'],
      category: 'Activities',
      extras: {
        Budget: '$25-40 per person',
        Duration: '1.5-2 hours',
        'Best for': 'Active couples who want to try something new together',
      },
    },
    {
      id: 'tasting-menu',
      title: 'Chef\'s Tasting Menu Experience',
      description:
        'Splurge on a tasting menu at a great restaurant. The multi-course format stretches the evening out naturally, each dish gives you something to discuss, and the staff handles everything so you can focus on each other.',
      tags: ['splurge', 'foodie', 'romantic', 'long-term'],
      category: 'Dining',
      extras: {
        Budget: '$150-300+',
        Duration: '2.5-3.5 hours',
        'Best for': 'Special anniversaries and milestone celebrations',
      },
    },
    {
      id: 'comedy-show',
      title: 'Live Comedy Show',
      description:
        'Catch a comedy show at a local club. Laughing together is scientifically proven to increase bonding. Sit in the middle to avoid getting picked on by the comedian (unless you are both into that).',
      tags: ['under-50', 'chill', 'first-date', 'new-couple'],
      category: 'Entertainment',
      extras: {
        Budget: '$20-50 per person',
        Duration: '2-3 hours',
        'Best for': 'Low-pressure fun where laughter does the heavy lifting',
      },
    },
    {
      id: 'volunteer-together',
      title: 'Volunteer Together for a Cause',
      description:
        'Sign up to volunteer at a local food bank, animal shelter, or habitat build. Working toward a shared purpose brings out the best in both of you, and you get to see each other\'s character in action.',
      tags: ['free', 'adventurous', 'new-couple', 'long-term'],
      category: 'Community',
      extras: {
        Budget: 'Free',
        Duration: '3-5 hours',
        'Best for': 'Values-driven couples who want to make an impact',
      },
    },
    {
      id: 'paint-and-sip',
      title: 'Paint and Sip Night',
      description:
        'Join a paint and sip class where you both follow along painting the same scene while drinking wine. The instructor handles the structure, so you can focus on laughing at each other\'s artistic attempts.',
      tags: ['under-50', 'creative', 'chill', 'first-date', 'new-couple'],
      category: 'Classes',
      extras: {
        Budget: '$30-50 per person',
        Duration: '2-3 hours',
        'Best for': 'People who want creative fun without the pressure',
      },
    },
    {
      id: 'concert-in-park',
      title: 'Free Concert in the Park',
      description:
        'Check local event listings for free outdoor concerts. Bring a blanket, a cooler with drinks and snacks, and settle in for the evening. The music gives you an activity without requiring constant conversation.',
      tags: ['free', 'chill', 'romantic', 'first-date', 'new-couple', 'long-term'],
      category: 'Entertainment',
      extras: {
        Budget: 'Free',
        Duration: '2-4 hours',
        'Best for': 'Effortless summer evenings',
      },
    },
    {
      id: 'weekend-road-trip',
      title: 'Spontaneous Day Road Trip',
      description:
        'Pick a direction, drive for two hours, and see what you find. Stop at diners, roadside attractions, and scenic overlooks. The unplanned nature keeps things exciting, and car conversations tend to go deeper than face-to-face.',
      tags: ['50-100', 'adventurous', 'new-couple', 'long-term'],
      category: 'Adventure',
      extras: {
        Budget: '$50-100 (gas + food)',
        Duration: 'Full day',
        'Best for': 'Couples who love spontaneity and adventure',
      },
    },
    {
      id: 'cooking-class',
      title: 'Couples Cooking Class',
      description:
        'Take a cooking class together, ideally something neither of you has tried before like sushi rolling, pasta making, or Thai cuisine. Learning together puts you on equal footing, and you eat what you make at the end.',
      tags: ['50-100', 'foodie', 'creative', 'first-date', 'new-couple'],
      category: 'Classes',
      extras: {
        Budget: '$50-80 per person',
        Duration: '2-3 hours',
        'Best for': 'Foodies who want to learn something new together',
      },
    },
    {
      id: 'arcade-bar',
      title: 'Arcade Bar / Barcade Night',
      description:
        'Find a bar with classic arcade games, skee-ball, or pinball. The games give you something to do with your hands and create natural competitive banter. Way more interactive than just sitting across a table.',
      tags: ['under-50', 'adventurous', 'chill', 'first-date', 'new-couple'],
      category: 'Nightlife',
      extras: {
        Budget: '$30-50',
        Duration: '2-3 hours',
        'Best for': 'Playful first dates and keeping energy high',
      },
    },
    {
      id: 'photo-walk',
      title: 'Photo Walk Through a New Neighborhood',
      description:
        'Explore a neighborhood you have never been to. Take photos of interesting things you find, stop into shops, and grab coffee. The exploration gives you constant things to react to and talk about.',
      tags: ['free', 'creative', 'chill', 'first-date', 'new-couple'],
      category: 'Outdoors',
      extras: {
        Budget: 'Free',
        Duration: '2-3 hours',
        'Best for': 'Curious people who love exploring',
      },
    },
    {
      id: 'themed-movie-marathon',
      title: 'Themed Movie Marathon at Home',
      description:
        'Pick a theme (all the Batmans, Studio Ghibli, 90s classics) and commit to watching three films. Build a massive pillow fort, make themed snacks, and actually stay off your phones. Cozy and intentional.',
      tags: ['free', 'chill', 'long-term'],
      category: 'At Home',
      extras: {
        Budget: 'Free (use streaming)',
        Duration: '5-7 hours',
        'Best for': 'Lazy weekends with your favorite person',
      },
    },
    {
      id: 'kayaking',
      title: 'Kayaking or Paddleboarding',
      description:
        'Rent kayaks or paddleboards at a local lake, river, or coast. The activity is engaging enough to fill quiet moments but calm enough for real conversation. Pack a dry bag with snacks and find a cove to float in.',
      tags: ['50-100', 'adventurous', 'new-couple', 'long-term'],
      category: 'Outdoors',
      extras: {
        Budget: '$40-80',
        Duration: '2-4 hours',
        'Best for': 'Water lovers and warm weather dates',
      },
    },
    {
      id: 'game-night',
      title: 'Two-Player Board Game Night',
      description:
        'Pick up a great two-player game (Patchwork, 7 Wonders Duel, Jaipur, or Codenames Duet). Make cocktails, put on a playlist, and get competitive. Board games reveal personality and create memorable shared moments.',
      tags: ['free', 'chill', 'creative', 'long-term', 'new-couple'],
      category: 'At Home',
      extras: {
        Budget: 'Free - $25 (if buying a game)',
        Duration: '2-3 hours',
        'Best for': 'Rainy nights and competitive couples',
      },
    },
    {
      id: 'sunrise-breakfast',
      title: 'Sunrise Spot + Breakfast',
      description:
        'Wake up early, drive to the best sunrise spot in your area, watch the sky light up together, then head to the best breakfast place nearby. Early mornings together feel intimate and intentional.',
      tags: ['under-50', 'romantic', 'adventurous', 'long-term', 'new-couple'],
      category: 'Outdoors',
      extras: {
        Budget: '$15-40',
        Duration: '2-3 hours',
        'Best for': 'Early birds and making ordinary mornings special',
      },
    },
    {
      id: 'dance-lesson',
      title: 'Beginner Dance Lesson',
      description:
        'Take a salsa, swing, or two-step lesson. Being bad at something together is incredibly bonding. The physical closeness and guided structure take the pressure off, and you pick up a skill you can show off at weddings.',
      tags: ['under-50', 'adventurous', 'romantic', 'first-date', 'new-couple'],
      category: 'Classes',
      extras: {
        Budget: '$15-30 per person',
        Duration: '1-2 hours',
        'Best for': 'Couples willing to be silly and get close',
      },
    },
    {
      id: 'luxury-hotel-staycation',
      title: 'One-Night Hotel Staycation',
      description:
        'Book a nice hotel in your own city. Order room service, use the pool, sleep in fancy sheets. Changing your environment resets the routine and makes an ordinary weekend feel like a vacation.',
      tags: ['splurge', 'romantic', 'chill', 'long-term'],
      category: 'Experience',
      extras: {
        Budget: '$150-300+',
        Duration: 'Overnight',
        'Best for': 'Long-term couples who need a reset',
      },
    },
    {
      id: 'trivia-night',
      title: 'Bar Trivia Night',
      description:
        'Find a local bar trivia night and form a team of two. Being on the same team creates an instant us-vs-them dynamic. You learn what random things the other person knows, and the rounds give the evening structure.',
      tags: ['under-50', 'chill', 'first-date', 'new-couple'],
      category: 'Nightlife',
      extras: {
        Budget: '$20-40',
        Duration: '2-3 hours',
        'Best for': 'Competitive people who love random knowledge',
      },
    },
    {
      id: 'hot-springs',
      title: 'Hot Springs or Thermal Bath Visit',
      description:
        'Visit natural hot springs or a thermal bath spa. The warm water and relaxed setting encourage genuine conversation. This works especially well in cooler months and feels like a real experience.',
      tags: ['50-100', 'romantic', 'chill', 'new-couple', 'long-term'],
      category: 'Experience',
      extras: {
        Budget: '$50-80',
        Duration: '3-4 hours',
        'Best for': 'Couples who want relaxation and intimacy',
      },
    },
    {
      id: 'night-market',
      title: 'Night Market or Street Food Tour',
      description:
        'Explore a local night market, sharing small plates and trying street food you have never had. The sensory overload (lights, smells, sounds) makes the evening feel exciting and full without much planning.',
      tags: ['under-50', 'foodie', 'adventurous', 'first-date', 'new-couple'],
      category: 'Food',
      extras: {
        Budget: '$25-50',
        Duration: '2-3 hours',
        'Best for': 'Adventurous eaters who love atmosphere',
      },
    },
  ],
  supportingContent: {
    intro:
      'Great relationships need great dates. Whether you are trying to impress someone new or reconnect with your long-term partner, the right date night ideas for couples make all the difference. This generator gives you creative, tried-and-tested options filtered to your budget, the vibe you want, and where you are in the relationship. Not sure what her <a href="/love-language-quiz">love language</a> is? Figure that out first, then come back and pick a date that speaks it. No more "I don\'t know, what do you want to do?" Just hit generate and get planning.',
    howToUse:
      'Use the filters to narrow down your options. Select your budget range, the kind of energy you want for the evening, and your relationship stage. Then hit Generate to get three curated romantic date ideas. Each one comes with an estimated budget, time commitment, and who it works best for. Need <a href="/conversation-starter-generator">conversation starters for dates</a>? Grab a few before you head out. Save the ones you like and start planning.',
    faq: [
      {
        question: 'How do I make a date feel special without spending a lot of money?',
        answer:
          'The secret is effort, not expense. A free sunset hike with a handmade picnic shows more thought than an expensive dinner you booked five minutes ago. Plan ahead, add small personal touches (their favorite snack, a playlist you made), and be fully present with no phone checking. If you need a gift to go with it, try our <a href="/gift-finder-quiz">Gift Finder Quiz</a> for ideas that actually land.',
      },
      {
        question: 'What makes a good first date versus a long-term relationship date?',
        answer:
          'First dates should be low-pressure, time-flexible, and activity-based so conversation flows naturally. Think fun first date ideas like a food truck tour or an escape room. Long-term relationship dates should break routine and create new shared experiences. <a href="https://www.gottman.com/blog/relationship-and-opportunity/" target="_blank" rel="noopener">The Gottman Institute</a> emphasizes novelty as key to keeping long-term sparks alive.',
      },
      {
        question: 'How often should we be going on dates?',
        answer:
          'Research from the <a href="https://nationalmarriageproject.org/" target="_blank" rel="noopener">National Marriage Project</a> suggests couples who have a regular date night at least once a week report significantly higher relationship satisfaction. If weekly feels like too much, aim for twice a month at minimum. The consistency matters more than the extravagance. Even a simple at-home date night counts.',
      },
    ],
    relatedTools: [
      'love-language-quiz',
      'conversation-starter-generator',
      'gift-finder-quiz',
    ],
  },
};
