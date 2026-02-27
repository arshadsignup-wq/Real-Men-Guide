import type { GeneratorConfig } from '@/lib/types';

export const dailyManChallengeConfig: GeneratorConfig = {
  itemsPerGenerate: 1,
  shareText: "Today's Man Challenge: {title} - Can you handle it?",
  filters: [
    {
      id: 'category',
      label: 'Category',
      type: 'select',
      options: [
        { label: 'All Categories', value: 'all' },
        { label: 'Fitness', value: 'fitness' },
        { label: 'Social', value: 'social' },
        { label: 'Style', value: 'style' },
        { label: 'Mindset', value: 'mindset' },
        { label: 'Skill', value: 'skill' },
        { label: 'Random', value: 'random' },
      ],
    },
    {
      id: 'difficulty',
      label: 'Difficulty',
      type: 'select',
      options: [
        { label: 'Any Difficulty', value: 'all' },
        { label: 'Easy', value: 'easy' },
        { label: 'Medium', value: 'medium' },
        { label: 'Hard', value: 'hard' },
      ],
    },
  ],
  items: [
    // --- FITNESS: EASY ---
    {
      id: 'fitness-pushups-50',
      title: 'Do 50 Push-ups',
      description:
        'Push-ups are the king of bodyweight exercises. They build chest, shoulders, triceps, and core strength simultaneously. Break them into sets if needed - 5 sets of 10, or 10 sets of 5. The goal is to finish all 50 before the day ends. Track your time and try to beat it next time.',
      tags: ['fitness', 'easy'],
      category: 'fitness',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Fitness' },
    },
    {
      id: 'fitness-walk-10k',
      title: 'Walk 10,000 Steps Today',
      description:
        'The 10,000 step target is linked to lower cardiovascular risk, better mood, and improved energy. Take the stairs, park farther away, take a walking meeting, or go for a dedicated walk. Use your phone to track. Walking is the most underrated form of exercise for men.',
      tags: ['fitness', 'easy'],
      category: 'fitness',
      extras: { Difficulty: 'Easy', Time: '1 hour', Category: 'Fitness' },
    },
    {
      id: 'fitness-stretch-15',
      title: 'Do a 15-Minute Full Body Stretch',
      description:
        'Most men are chronically tight from sitting and training. Spend 15 uninterrupted minutes stretching every major muscle group. Focus on hips, hamstrings, shoulders, and thoracic spine. Flexibility prevents injury and improves your posture and physical performance in every other area.',
      tags: ['fitness', 'easy'],
      category: 'fitness',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Fitness' },
    },
    {
      id: 'fitness-plank-3min',
      title: 'Hold a Plank for 3 Minutes Total',
      description:
        'Core strength is the foundation of all physical performance. Hold a plank position for a total of 3 minutes today. Break it up however you need - one minute at a time, 30-second holds, whatever gets you there. Focus on keeping your body in a straight line with your core tight.',
      tags: ['fitness', 'easy'],
      category: 'fitness',
      extras: { Difficulty: 'Easy', Time: '5 min', Category: 'Fitness' },
    },
    // --- FITNESS: MEDIUM ---
    {
      id: 'fitness-cold-shower',
      title: 'Take a Cold Shower for 2 Minutes',
      description:
        'Cold exposure builds mental toughness, boosts circulation, reduces inflammation, and increases alertness. Turn the water to cold at the end of your shower and stand under it for 2 full minutes. Control your breathing - slow, deep breaths through the nose. This is as much a mental challenge as a physical one.',
      tags: ['fitness', 'medium'],
      category: 'fitness',
      extras: { Difficulty: 'Medium', Time: '5 min', Category: 'Fitness' },
    },
    {
      id: 'fitness-100-squats',
      title: 'Do 100 Bodyweight Squats',
      description:
        'Your legs are the biggest muscle group in your body and most men neglect them. 100 bodyweight squats will get blood flowing, build muscular endurance, and challenge your mental grit. Break them up into sets of 20 or 25. Keep your form clean - chest up, knees tracking over toes, full depth.',
      tags: ['fitness', 'medium'],
      category: 'fitness',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Fitness' },
    },
    {
      id: 'fitness-run-2miles',
      title: 'Run 2 Miles Without Stopping',
      description:
        'Cardiovascular endurance is a marker of overall health and longevity. Run 2 miles at a steady pace without walking. If you cannot do it yet, this is your sign to start building toward it. Pace yourself - it is not about speed, it is about completing the distance continuously.',
      tags: ['fitness', 'medium'],
      category: 'fitness',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Fitness' },
    },
    // --- FITNESS: HARD ---
    {
      id: 'fitness-murph-half',
      title: 'Complete a Half Murph Workout',
      description:
        'The Half Murph: 800m run, 50 pull-ups, 100 push-ups, 150 squats, 800m run. Partition the middle section however you want. This is a serious test of full-body fitness and mental endurance. Take as long as you need but finish every rep. This workout will show you exactly where you stand.',
      tags: ['fitness', 'hard'],
      category: 'fitness',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Fitness' },
    },
    {
      id: 'fitness-5am-workout',
      title: 'Wake Up at 5 AM and Work Out',
      description:
        'Set your alarm for 5 AM and immediately get in a workout before the world wakes up. No snooze button, no negotiating with yourself. The discipline of early morning training sets the tone for your entire day and proves you can override your comfort instinct.',
      tags: ['fitness', 'hard'],
      category: 'fitness',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Fitness' },
    },
    // --- SOCIAL: EASY ---
    {
      id: 'social-compliment-3',
      title: 'Give 3 Genuine Compliments to Strangers',
      description:
        'Notice something genuinely positive about 3 different strangers today and tell them. Compliment their style, their energy, or something specific you observe. This builds social confidence, brightens someone else\'s day, and trains you to notice the good in people. Be specific and sincere - generic compliments fall flat.',
      tags: ['social', 'easy'],
      category: 'social',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Social' },
    },
    {
      id: 'social-call-friend',
      title: 'Call a Friend You Have Not Talked to in 3+ Months',
      description:
        'Male friendships often fade through neglect, not conflict. Pick up the phone and call someone you have been meaning to catch up with. Not a text - an actual phone call or video chat. Ask how they are really doing. Maintaining friendships requires initiative, and this small act strengthens bonds that matter.',
      tags: ['social', 'easy'],
      category: 'social',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Social' },
    },
    {
      id: 'social-tip-well',
      title: 'Leave an Outrageously Generous Tip',
      description:
        'Next time you eat out or grab coffee today, leave a tip that is at least 50% of the bill. Watch the server or barista\'s reaction. Generosity is a core masculine trait, and small acts of unexpected kindness have a ripple effect you will never fully see. It also trains your abundance mindset.',
      tags: ['social', 'easy'],
      category: 'social',
      extras: { Difficulty: 'Easy', Time: '5 min', Category: 'Social' },
    },
    // --- SOCIAL: MEDIUM ---
    {
      id: 'social-compliment-strangers-3',
      title: 'Compliment 3 Strangers',
      description:
        'Approach three strangers throughout the day and offer a genuine, specific compliment. This could be about their outfit, attitude, work ethic, or anything authentic. The challenge is pushing past the initial discomfort of approaching someone you do not know. Each interaction gets easier.',
      tags: ['social', 'medium'],
      category: 'social',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Social' },
    },
    {
      id: 'social-plan-hangout',
      title: 'Plan and Organize a Group Hangout',
      description:
        'Be the one who makes plans instead of waiting for someone else to do it. Text your group chat or call 3-4 friends and lock in a specific activity for this week. Pick the place, set the time, and make it happen. Leaders create social momentum - most men are just waiting for someone to take the initiative.',
      tags: ['social', 'medium'],
      category: 'social',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Social' },
    },
    {
      id: 'social-introduce-two',
      title: 'Introduce Two People Who Should Know Each Other',
      description:
        'Think of two people in your network who would benefit from knowing each other and make the introduction. This could be professional or personal. Being a connector is one of the most valuable social skills - it builds your reputation and strengthens your network exponentially.',
      tags: ['social', 'medium'],
      category: 'social',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Social' },
    },
    // --- SOCIAL: HARD ---
    {
      id: 'social-stranger-conversation',
      title: 'Start a Conversation with a Complete Stranger',
      description:
        'Approach someone you have never met - at a coffee shop, gym, bookstore, or anywhere - and start a genuine conversation. Not a pickup line, not a sales pitch, just authentic human connection. Ask about their day, what they are reading, or what they do. This is the ultimate social confidence builder.',
      tags: ['social', 'hard'],
      category: 'social',
      extras: { Difficulty: 'Hard', Time: '15 min', Category: 'Social' },
    },
    {
      id: 'social-public-speak',
      title: 'Speak Up in a Group Setting or Meeting',
      description:
        'The next time you are in a meeting, class, or group discussion, be the first to speak up, ask a question, or share your opinion. Do not wait for someone else to go first. Public speaking anxiety is the number one fear for most people - conquering it in small doses builds massive confidence over time.',
      tags: ['social', 'hard'],
      category: 'social',
      extras: { Difficulty: 'Hard', Time: '5 min', Category: 'Social' },
    },
    // --- STYLE: EASY ---
    {
      id: 'style-comfort-zone',
      title: 'Wear Something Outside Your Comfort Zone',
      description:
        'Pick one item from your closet that you have been too hesitant to wear - a bold color, a different fit, an accessory you bought but never used - and rock it today. Style growth happens at the edge of your comfort zone. Pay attention to how it makes you feel and how people respond.',
      tags: ['style', 'easy'],
      category: 'style',
      extras: { Difficulty: 'Easy', Time: '5 min', Category: 'Style' },
    },
    {
      id: 'style-iron-clothes',
      title: 'Iron Your Clothes Before Leaving the House',
      description:
        'Wrinkle-free clothes are an instant upgrade that most men skip. Iron or steam your shirt and pants before you head out today. The difference between a wrinkled outfit and a crisp one is the difference between looking like you just rolled out of bed and looking like a man who has his life together.',
      tags: ['style', 'easy'],
      category: 'style',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Style' },
    },
    {
      id: 'style-clean-shoes',
      title: 'Clean and Polish Your Shoes',
      description:
        'Your shoes are the first thing many people notice. Take 15 minutes to properly clean, condition, and polish a pair of shoes you wear regularly. Remove dirt, apply polish or conditioner, and buff them to a shine. Well-maintained shoes signal attention to detail and self-respect.',
      tags: ['style', 'easy'],
      category: 'style',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Style' },
    },
    // --- STYLE: MEDIUM ---
    {
      id: 'style-new-hairstyle',
      title: 'Try a New Hairstyle',
      description:
        'Go to a barber (not your usual one if you want a fresh perspective) and ask for something different. Bring a reference photo. A new hairstyle can dramatically change your look and boost your confidence. Step outside what you have always done and experiment.',
      tags: ['style', 'medium'],
      category: 'style',
      extras: { Difficulty: 'Medium', Time: '1 hour', Category: 'Style' },
    },
    {
      id: 'style-declutter-closet',
      title: 'Declutter Your Closet - Remove 10 Items',
      description:
        'Go through your closet and remove at least 10 items you have not worn in the past 6 months. Donate or discard anything that does not fit, is damaged, or does not match the image of the man you want to be. A curated wardrobe makes getting dressed easier and every outfit better.',
      tags: ['style', 'medium'],
      category: 'style',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Style' },
    },
    {
      id: 'style-skincare-routine',
      title: 'Do a Full Skincare Routine',
      description:
        'Cleanse, exfoliate, moisturize, and apply SPF. If you do not have these products, today is the day to get them. Good skin is the foundation of looking good and it has nothing to do with vanity - it is basic maintenance. Your future self will thank you for starting today.',
      tags: ['style', 'medium'],
      category: 'style',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Style' },
    },
    // --- STYLE: HARD ---
    {
      id: 'style-full-outfit',
      title: 'Put Together a Head-to-Toe Outfit You Have Never Worn',
      description:
        'Combine pieces from your wardrobe in a way you have never tried before and wear the full outfit out in public. Coordinate colors, textures, and accessories intentionally. Take a photo and compare it to your usual look. This forces you to think about style as a complete system, not just individual pieces.',
      tags: ['style', 'hard'],
      category: 'style',
      extras: { Difficulty: 'Hard', Time: '30 min', Category: 'Style' },
    },
    // --- MINDSET: EASY ---
    {
      id: 'mindset-journal',
      title: 'Write in a Journal for 10 Minutes',
      description:
        'Sit down with a notebook or notes app and write freely for 10 minutes. Write about your goals, what is on your mind, what you are grateful for, or what is bothering you. Journaling clarifies your thinking, reduces anxiety, and creates a record of your growth. Do not overthink it - just write.',
      tags: ['mindset', 'easy'],
      category: 'mindset',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Mindset' },
    },
    {
      id: 'mindset-meditate',
      title: 'Meditate for 10 Minutes',
      description:
        'Find a quiet spot, sit comfortably, and meditate for 10 minutes. Focus on your breath. When your mind wanders (it will), gently bring it back. Meditation builds focus, emotional regulation, and stress resilience. Use an app like Headspace or just set a timer. Consistency matters more than duration.',
      tags: ['mindset', 'easy'],
      category: 'mindset',
      extras: { Difficulty: 'Easy', Time: '15 min', Category: 'Mindset' },
    },
    {
      id: 'mindset-gratitude',
      title: 'Write Down 10 Things You Are Grateful For',
      description:
        'Gratitude rewires your brain to focus on abundance instead of scarcity. Write down 10 specific things you are genuinely grateful for right now. Be specific - not just "my health" but "the fact that I can go for a run whenever I want." Specificity makes gratitude feel real and impactful.',
      tags: ['mindset', 'easy'],
      category: 'mindset',
      extras: { Difficulty: 'Easy', Time: '5 min', Category: 'Mindset' },
    },
    // --- MINDSET: MEDIUM ---
    {
      id: 'mindset-no-complain',
      title: 'Go the Entire Day Without Complaining',
      description:
        'From the moment you wake up to the moment you sleep, do not complain about anything. Not out loud, not in texts, not on social media. When you catch yourself about to complain, reframe it as a solution or acceptance. This challenge reveals how much negativity you unconsciously broadcast and trains you to focus on what you can control.',
      tags: ['mindset', 'medium'],
      category: 'mindset',
      extras: { Difficulty: 'Medium', Time: '1 hour', Category: 'Mindset' },
    },
    {
      id: 'mindset-fear-something',
      title: 'Do One Thing That Scares You',
      description:
        'Identify something you have been avoiding because of fear or discomfort and do it today. It could be making a difficult phone call, having a hard conversation, applying for a job, or asking someone out. Growth lives on the other side of fear. The task itself matters less than the act of facing what scares you.',
      tags: ['mindset', 'medium'],
      category: 'mindset',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Mindset' },
    },
    // --- MINDSET: HARD ---
    {
      id: 'mindset-no-phone',
      title: 'No Phone for 2 Hours',
      description:
        'Put your phone on airplane mode or in another room for 2 full hours during waking time. No checking, no cheating. Use this time for deep work, face-to-face conversation, reading, or just being present. You will be amazed at how addicted you are and how much you can accomplish without the constant dopamine drip of notifications.',
      tags: ['mindset', 'hard'],
      category: 'mindset',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Mindset' },
    },
    {
      id: 'mindset-dopamine-fast',
      title: 'Do a Full-Day Dopamine Fast',
      description:
        'For one full day: no social media, no video games, no junk food, no alcohol, no pornography, no mindless entertainment. Only allow yourself to eat clean food, exercise, read, journal, meditate, and have real conversations. This resets your reward system and shows you which habits are controlling you.',
      tags: ['mindset', 'hard'],
      category: 'mindset',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Mindset' },
    },
    // --- SKILL: EASY ---
    {
      id: 'skill-cook-meal',
      title: 'Cook a Meal From Scratch',
      description:
        'No takeout, no microwave meals, no shortcuts. Pick a real recipe, buy the ingredients, and cook a complete meal from scratch. It does not need to be fancy - a solid steak with vegetables or a homemade pasta counts. Every man should be able to feed himself and others. Cooking is a life skill that impresses everyone.',
      tags: ['skill', 'easy'],
      category: 'skill',
      extras: { Difficulty: 'Easy', Time: '1 hour', Category: 'Skill' },
    },
    {
      id: 'skill-make-bed',
      title: 'Make Your Bed Perfectly Every Morning This Week',
      description:
        'Starting today, make your bed immediately after getting up. Hospital corners, pillows arranged, everything crisp. This tiny discipline sets the tone for your day and creates a chain of small wins. As Admiral McRaven said: if you want to change the world, start by making your bed.',
      tags: ['skill', 'easy'],
      category: 'skill',
      extras: { Difficulty: 'Easy', Time: '5 min', Category: 'Skill' },
    },
    {
      id: 'skill-fix-something',
      title: 'Fix Something That Has Been Broken',
      description:
        'Every man has something in his house that is been broken for weeks or months - a loose handle, a squeaky hinge, a dripping faucet, a missing button. Fix it today. Watch a YouTube tutorial if you need to. The ability to maintain and repair your own environment is a fundamental masculine skill.',
      tags: ['skill', 'easy'],
      category: 'skill',
      extras: { Difficulty: 'Easy', Time: '30 min', Category: 'Skill' },
    },
    // --- SKILL: MEDIUM ---
    {
      id: 'skill-learn-new',
      title: 'Spend 30 Minutes Learning a New Skill',
      description:
        'Pick something you have always wanted to learn - a language, an instrument, coding, photography, woodworking - and dedicate 30 focused minutes to learning the basics. Use YouTube, a free course, or a tutorial. The best time to start was years ago. The second best time is today.',
      tags: ['skill', 'medium'],
      category: 'skill',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Skill' },
    },
    {
      id: 'skill-budget-review',
      title: 'Review and Update Your Budget',
      description:
        'Sit down and go through your finances. Check your spending from the past month, categorize it, identify where money is leaking, and create or update your budget. Financial literacy is not optional - it is a core life skill. Know where every dollar goes. If you do not have a budget, make one today.',
      tags: ['skill', 'medium'],
      category: 'skill',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Skill' },
    },
    {
      id: 'skill-tie-knot',
      title: 'Learn to Tie 3 Different Knots',
      description:
        'Every man should know basic knots. Learn the bowline (rescue knot), the clove hitch (securing to a post), and the trucker hitch (tightening a load). Practice each one until you can tie it without looking. These skills are useful for camping, moving, securing cargo, and general resourcefulness.',
      tags: ['skill', 'medium'],
      category: 'skill',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Skill' },
    },
    // --- SKILL: HARD ---
    {
      id: 'skill-negotiate',
      title: 'Negotiate Something Today',
      description:
        'Find an opportunity to negotiate - your cable bill, a purchase at a store, a work project scope, or a salary discussion. Most men accept the first price or offer they are given. Negotiation is a muscle that atrophies without use. Even if you save $5, the practice of asking for what you want is invaluable.',
      tags: ['skill', 'hard'],
      category: 'skill',
      extras: { Difficulty: 'Hard', Time: '30 min', Category: 'Skill' },
    },
    {
      id: 'skill-teach-someone',
      title: 'Teach Someone Something You Know Well',
      description:
        'Identify something you are skilled at and find someone to teach it to - a friend, family member, coworker, or even a YouTube video. Teaching is the ultimate test of understanding. If you cannot explain it simply, you do not know it well enough. This also builds leadership and communication skills.',
      tags: ['skill', 'hard'],
      category: 'skill',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Skill' },
    },
    // --- RANDOM: EASY ---
    {
      id: 'random-read-30',
      title: 'Read for 30 Minutes',
      description:
        'Put down your phone, pick up a physical book, and read for 30 uninterrupted minutes. Fiction or nonfiction - it does not matter. Reading builds focus, vocabulary, empathy, and knowledge. The average CEO reads 4-5 books per month. Start with 30 minutes today and build from there.',
      tags: ['random', 'easy'],
      category: 'random',
      extras: { Difficulty: 'Easy', Time: '30 min', Category: 'Random' },
    },
    {
      id: 'random-drink-gallon',
      title: 'Drink a Gallon of Water Today',
      description:
        'Most men are chronically dehydrated and do not even know it. Drink one full gallon (128 oz) of water today. Start with 16 oz first thing in the morning. Proper hydration improves energy, skin, digestion, cognitive function, and workout performance. Track it with a large water bottle.',
      tags: ['random', 'easy'],
      category: 'random',
      extras: { Difficulty: 'Easy', Time: '1 hour', Category: 'Random' },
    },
    // --- RANDOM: MEDIUM ---
    {
      id: 'random-handwritten-note',
      title: 'Write a Handwritten Note to Someone',
      description:
        'In the age of texting, a handwritten note is remarkably powerful. Write a genuine thank-you note, letter of appreciation, or just a few kind words to someone who matters to you. Mail it or hand-deliver it. This small act of intentionality creates a lasting impression that a text never will.',
      tags: ['random', 'medium'],
      category: 'random',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Random' },
    },
    {
      id: 'random-new-route',
      title: 'Take a Completely Different Route to Work or the Gym',
      description:
        'Break autopilot mode. Take a route you have never taken before to a place you go regularly. Notice new things - restaurants, shops, parks, neighborhoods. Novelty stimulates your brain and breaks the monotony of routine. Small changes in your daily patterns can shift your entire perspective.',
      tags: ['random', 'medium'],
      category: 'random',
      extras: { Difficulty: 'Medium', Time: '15 min', Category: 'Random' },
    },
    {
      id: 'random-cold-approach-shop',
      title: 'Visit a Store You Have Never Been To',
      description:
        'Walk into a shop, restaurant, or establishment you have never visited - ideally something outside your usual interests. A vintage shop, a specialty food store, an art gallery, a martial arts studio. Talk to the staff and learn something. Expanding your world starts with physically going somewhere new.',
      tags: ['random', 'medium'],
      category: 'random',
      extras: { Difficulty: 'Medium', Time: '30 min', Category: 'Random' },
    },
    // --- RANDOM: HARD ---
    {
      id: 'random-say-yes',
      title: 'Say Yes to the Next Unexpected Opportunity',
      description:
        'The next time someone invites you to something, asks for a favor, or an unexpected opportunity arises today, say yes. Even if it is inconvenient or outside your comfort zone. Some of the best experiences in life come from saying yes to things you would normally decline.',
      tags: ['random', 'hard'],
      category: 'random',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Random' },
    },
    {
      id: 'random-no-excuses',
      title: 'Complete Your Entire To-Do List Today - No Excuses',
      description:
        'Write down everything you have been putting off and do not go to sleep until every single item is checked off. No rescheduling, no renegotiating, no "I will do it tomorrow." This is a test of discipline and follow-through. The feeling of going to bed with a completely empty to-do list is unmatched.',
      tags: ['random', 'hard'],
      category: 'random',
      extras: { Difficulty: 'Hard', Time: '1 hour', Category: 'Random' },
    },
  ],
  supportingContent: {
    intro:
      'Looking for daily challenges for self improvement? The Daily Man Challenge generates a single, actionable challenge for you to complete today. Each challenge is designed to push you outside your comfort zone and build the habits, skills, and mindset of a well-rounded man. Challenges span fitness, social skills, style, mindset, practical skills, and random acts of growth. Research on <a href="https://en.wikipedia.org/wiki/Habit" target="_blank" rel="noopener">habit formation</a> shows that small daily actions compound into lasting change. Hit generate, accept the challenge, and prove to yourself you can handle it.',
    howToUse:
      'Choose a category and difficulty level, or leave both on "All" for a truly random daily challenge. Hit generate to receive your challenge for the day. Read the description to understand why it matters and how to do it. Complete the challenge before midnight, then share your result to challenge your friends. Want to see how you are doing overall? Take the <a href="/life-audit-score">Life Audit Score</a> to track your progress across all areas of life.',
    faq: [
      {
        question: 'Can I skip a challenge and generate a new one?',
        answer:
          'You can, but we encourage you to push through your initial resistance. <a href="https://www.psychologytoday.com/us/basics/comfort-zone" target="_blank" rel="noopener">Psychology Today</a> confirms that the challenges making you uncomfortable are usually the ones that create the most growth. If a challenge is truly impossible due to circumstances (like a fitness challenge when injured), generate a new one. But if you are avoiding it because it is hard, that is exactly why you should do it.',
      },
      {
        question: 'How are the difficulty levels determined?',
        answer:
          'Easy challenges can be completed by anyone with minimal discomfort and usually take less than 15 minutes. Medium challenges require more effort, time, or social courage. Hard challenges push you significantly outside your comfort zone and may take sustained effort throughout the day. Start with Easy if you are new to daily self improvement challenges and work your way up.',
      },
      {
        question: 'Can I do multiple challenges in one day?',
        answer:
          'Absolutely. If you complete your daily challenge and want more, generate another one. Some men stack a fitness, mindset, and social challenge every single day as part of their growth routine. Pair this with the <a href="/man-archetype-quiz">Man Archetype Quiz</a> to discover which challenge categories align with your personality. Consistency is key — one challenge every day beats five in one day followed by quitting.',
      },
    ],
    relatedTools: [
      'man-archetype-quiz',
      'life-audit-score',
      'hangover-recovery-calculator',
    ],
  },
};
