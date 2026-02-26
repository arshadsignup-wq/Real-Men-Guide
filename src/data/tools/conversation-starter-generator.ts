import { GeneratorConfig } from '@/lib/types';

// ============================================================
// CONVERSATION STARTER GENERATOR
// 50+ conversation starters for every social situation
// ============================================================

export const conversationStarterGeneratorConfig: GeneratorConfig = {
  itemsPerGenerate: 5,
  shareText: 'Never run out of things to say again. Check out the Conversation Starter Generator on Real Men Guide!',
  filters: [
    {
      id: 'situation',
      label: 'Situation',
      type: 'select',
      options: [
        { label: 'All Situations', value: 'all' },
        { label: 'First Date', value: 'first-date' },
        { label: 'Party / Social', value: 'party' },
        { label: 'Networking / Professional', value: 'networking' },
        { label: 'Deep Talk', value: 'deep-talk' },
        { label: 'Funny / Lighthearted', value: 'funny' },
        { label: 'Getting to Know Someone', value: 'getting-to-know' },
      ],
    },
  ],
  items: [
    {
      id: 'cs-1',
      title: 'What\'s something you\'ve changed your mind about in the last few years?',
      description:
        'This question works because it signals intellectual openness and invites genuine reflection. People love talking about their growth, and the answer reveals a lot about someone\'s values and self-awareness.',
      tags: ['first-date', 'deep-talk', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-2',
      title: 'What\'s the best trip you\'ve ever taken, and what made it special?',
      description:
        'Travel stories are universally engaging. This question lets someone share an experience they are proud of and naturally leads to follow-up questions about places, food, and adventure.',
      tags: ['first-date', 'party', 'getting-to-know'],
      category: 'Travel',
    },
    {
      id: 'cs-3',
      title: 'What\'s something you\'re weirdly passionate about that most people don\'t know?',
      description:
        'This skips surface-level small talk and goes straight to what actually excites someone. People light up when they get to talk about their niche interests, and it creates an instant sense of intimacy.',
      tags: ['first-date', 'getting-to-know', 'party'],
      category: 'Personal',
    },
    {
      id: 'cs-4',
      title: 'If you could have dinner with anyone, living or dead, who would it be and why?',
      description:
        'A classic for a reason. The choice reveals what someone values, whether it is humor, intellect, history, family, or creativity, and the "why" is where the real conversation happens.',
      tags: ['first-date', 'getting-to-know', 'party'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-5',
      title: 'What\'s the most interesting thing you\'ve read or watched recently?',
      description:
        'This is a low-pressure way to discover someone\'s interests. It works in almost any context and naturally leads to recommendations, shared tastes, and deeper discussion about ideas.',
      tags: ['first-date', 'networking', 'getting-to-know'],
      category: 'Culture',
    },
    {
      id: 'cs-6',
      title: 'What\'s a skill you picked up during a completely random phase of your life?',
      description:
        'Everyone has a random skill story, whether it is juggling, bread baking, or coding. This question sparks fun stories and reveals unexpected sides of someone\'s personality.',
      tags: ['party', 'getting-to-know', 'funny'],
      category: 'Personal',
    },
    {
      id: 'cs-7',
      title: 'If you won the lottery tomorrow but had to keep working, what job would you choose?',
      description:
        'This reframes the typical "what do you do" question into something far more interesting. The answer reveals what someone truly values beyond money and status.',
      tags: ['first-date', 'networking', 'getting-to-know'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-8',
      title: 'What\'s the best piece of advice you\'ve ever gotten, and did you actually follow it?',
      description:
        'The second part of this question is what makes it great. Everyone has received good advice. Whether they followed it adds humor, self-awareness, and honesty to the conversation.',
      tags: ['deep-talk', 'getting-to-know', 'networking'],
      category: 'Reflective',
    },
    {
      id: 'cs-9',
      title: 'What\'s something on your bucket list that you\'re actually going to do this year?',
      description:
        'Adding "actually going to do this year" makes it immediate and actionable instead of purely hypothetical. It reveals what someone is currently excited about and creates potential plans together.',
      tags: ['first-date', 'getting-to-know', 'party'],
      category: 'Goals',
    },
    {
      id: 'cs-10',
      title: 'What\'s the most overrated thing everyone seems to love?',
      description:
        'This is a fun, slightly provocative question that invites strong opinions. It works especially well at parties because it sparks debate and gets other people jumping in with their own answers.',
      tags: ['party', 'funny', 'first-date'],
      category: 'Opinion',
    },
    {
      id: 'cs-11',
      title: 'So what\'s your story? How did you end up doing what you do?',
      description:
        'This open-ended question works beautifully at networking events. Instead of asking "what do you do" (which feels like a job interview), it asks for the narrative, which is always more interesting.',
      tags: ['networking', 'getting-to-know'],
      category: 'Professional',
    },
    {
      id: 'cs-12',
      title: 'What\'s the most spontaneous thing you\'ve ever done?',
      description:
        'Spontaneity stories are almost always entertaining. This question brings energy to any conversation and reveals whether someone is adventurous, cautious, or somewhere in between.',
      tags: ['first-date', 'party', 'getting-to-know'],
      category: 'Adventure',
    },
    {
      id: 'cs-13',
      title: 'If you had to teach a class on anything, what would your subject be?',
      description:
        'People love being the expert. This question makes someone feel valued and gives them permission to geek out. The subject they choose tells you exactly where their passion lives.',
      tags: ['first-date', 'networking', 'getting-to-know'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-14',
      title: 'What\'s a hill you\'re willing to die on that most people would think is ridiculous?',
      description:
        'This reliably produces hilarious and memorable answers. Whether it is about the correct way to load a dishwasher or a deeply held belief about pizza, these answers become inside jokes fast.',
      tags: ['party', 'funny', 'first-date'],
      category: 'Opinion',
    },
    {
      id: 'cs-15',
      title: 'What\'s something you believed as a kid that turned out to be completely wrong?',
      description:
        'This question is pure fun. Everyone has childhood misconceptions that are hilarious in hindsight. It creates laughs, vulnerability, and a sense of shared human experience.',
      tags: ['funny', 'party', 'getting-to-know'],
      category: 'Humor',
    },
    {
      id: 'cs-16',
      title: 'What would your perfect ordinary Tuesday look like?',
      description:
        'Not your dream vacation, not your fantasy life, just a perfect regular day. This question reveals what someone genuinely values in their daily life and what balance looks like to them.',
      tags: ['deep-talk', 'first-date', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-17',
      title: 'What\'s a problem in your industry that nobody is talking about?',
      description:
        'This is a networking power question. It positions you as someone who thinks critically, invites expertise from the other person, and leads to substantive conversation instead of small talk.',
      tags: ['networking'],
      category: 'Professional',
    },
    {
      id: 'cs-18',
      title: 'What\'s the worst date you\'ve ever been on? I\'ll share mine first.',
      description:
        'Offering to go first makes this feel safe and fun rather than invasive. Bad date stories are universally entertaining, and sharing them creates a bond through mutual vulnerability and humor.',
      tags: ['first-date', 'funny'],
      category: 'Humor',
    },
    {
      id: 'cs-19',
      title: 'If your life had a theme song, what would it be right now?',
      description:
        'Music is deeply personal. This question is creative, unexpected, and reveals someone\'s current emotional state in a fun way. It also opens the door to sharing music, which is great for connection.',
      tags: ['party', 'funny', 'getting-to-know'],
      category: 'Creative',
    },
    {
      id: 'cs-20',
      title: 'What\'s something you used to judge people for until you tried it yourself?',
      description:
        'This question shows self-awareness and invites honesty. The answers are often funny and relatable, and it creates an atmosphere where people feel comfortable being real rather than performing.',
      tags: ['deep-talk', 'party', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-21',
      title: 'What\'s the most useful thing you\'ve learned in the last year?',
      description:
        'Growth-oriented and practical. This works in both professional and personal settings. You often walk away with an actual useful tip, book recommendation, or life hack.',
      tags: ['networking', 'getting-to-know', 'deep-talk'],
      category: 'Growth',
    },
    {
      id: 'cs-22',
      title: 'What\'s a conspiracy theory you find entertaining even if you don\'t believe it?',
      description:
        'This hits the sweet spot between fun and intellectual. It lets people share something wild without committing to it, and the conversation usually goes to surprising and entertaining places.',
      tags: ['party', 'funny', 'getting-to-know'],
      category: 'Humor',
    },
    {
      id: 'cs-23',
      title: 'When you were a kid, what did you want to be when you grew up? And how close did you get?',
      description:
        'The comparison between childhood dreams and current reality always sparks great stories. It is nostalgic, often funny, and reveals how someone thinks about their life path.',
      tags: ['getting-to-know', 'first-date', 'party'],
      category: 'Personal',
    },
    {
      id: 'cs-24',
      title: 'What is your relationship like with your phone? Honest answer.',
      description:
        'A modern question that everyone has feelings about. Whether someone is a digital minimalist or a doom-scroller, this question sparks real conversation about habits, attention, and values.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Modern Life',
    },
    {
      id: 'cs-25',
      title: 'What\'s the hardest thing you\'ve done that you\'re glad you did?',
      description:
        'This invites someone to share a challenge they overcame, which builds respect and connection. It focuses on resilience and growth, which are attractive qualities in any context.',
      tags: ['deep-talk', 'first-date', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-26',
      title: 'What\'s a tradition you have, either with family, friends, or just by yourself?',
      description:
        'Traditions reveal values and priorities. This question often surfaces heartwarming stories and gives insight into someone\'s background and what they hold sacred.',
      tags: ['getting-to-know', 'deep-talk', 'first-date'],
      category: 'Personal',
    },
    {
      id: 'cs-27',
      title: 'You\'re stranded on a desert island with only three albums. Which three?',
      description:
        'A fun constraint-based question that forces interesting choices. Music taste is deeply personal, and this question sparks debate, shared tastes, and passionate defense of choices.',
      tags: ['party', 'funny', 'first-date'],
      category: 'Creative',
    },
    {
      id: 'cs-28',
      title: 'What is something you think everyone should experience at least once?',
      description:
        'This question is inherently positive and enthusiastic. The answer reveals what someone values most in life, and it often leads to fascinating stories about why that experience matters.',
      tags: ['getting-to-know', 'first-date', 'deep-talk'],
      category: 'Life Experience',
    },
    {
      id: 'cs-29',
      title: 'What is the most underrated restaurant, bar, or spot in this city?',
      description:
        'This is a practical icebreaker that positions you as someone who values quality. It works perfectly at parties and networking events, and you might actually discover a great new spot.',
      tags: ['party', 'networking', 'first-date'],
      category: 'Local',
    },
    {
      id: 'cs-30',
      title: 'If you could relive one year of your life, which would it be and why?',
      description:
        'A powerful question that goes beneath the surface. The year someone picks and the reasons behind it reveal their peak experiences, values, and what they consider a life well-lived.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-31',
      title: 'What is your most irrational fear?',
      description:
        'Vulnerability packaged in humor. Irrational fears are almost always funny to share, and admitting one first makes the other person comfortable sharing theirs. Instant bond.',
      tags: ['funny', 'first-date', 'getting-to-know'],
      category: 'Humor',
    },
    {
      id: 'cs-32',
      title: 'What do you think is the biggest misconception people have about your job or industry?',
      description:
        'People love correcting misconceptions about their field. This question makes them feel like the expert and leads to fascinating insider knowledge you would not get from a Google search.',
      tags: ['networking', 'getting-to-know'],
      category: 'Professional',
    },
    {
      id: 'cs-33',
      title: 'What is a small purchase under $50 that significantly improved your life?',
      description:
        'Practical and universally relatable. Everyone has an answer to this, and the recommendations are often genuinely useful. It is a conversation that gives value to both people.',
      tags: ['party', 'getting-to-know', 'networking'],
      category: 'Practical',
    },
    {
      id: 'cs-34',
      title: 'What is something you are proud of that never made it to social media?',
      description:
        'In a world of performance, this question asks for something real. It signals that you value authenticity over image and invites the other person to share something meaningful.',
      tags: ['deep-talk', 'getting-to-know', 'first-date'],
      category: 'Reflective',
    },
    {
      id: 'cs-35',
      title: 'If you could instantly become an expert in one thing, what would it be?',
      description:
        'This reveals unfulfilled curiosity and aspirations. The answer shows what someone admires, what they feel they are missing, and what direction their growth is headed.',
      tags: ['getting-to-know', 'first-date', 'networking'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-36',
      title: 'What is the best meal you have ever had in your life?',
      description:
        'Food memories are vivid and emotional. This question lets someone relive a great experience while sharing it with you. It works on a first date and at a dinner party equally well.',
      tags: ['first-date', 'party', 'getting-to-know'],
      category: 'Food',
    },
    {
      id: 'cs-37',
      title: 'What is a popular opinion you genuinely disagree with?',
      description:
        'This takes courage to answer honestly, which is exactly what makes it interesting. It sparks real discussion and helps you understand how someone thinks rather than just what they think.',
      tags: ['deep-talk', 'party'],
      category: 'Opinion',
    },
    {
      id: 'cs-38',
      title: 'What is the kindest thing a stranger has ever done for you?',
      description:
        'This question brings warmth to any conversation. People rarely get asked about positive experiences with strangers, and the stories that surface are always uplifting and memorable.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Heartwarming',
    },
    {
      id: 'cs-39',
      title: 'Would you rather have the ability to fly or be invisible? And be honest about why.',
      description:
        'A lighthearted hypothetical with surprisingly revealing answers. The "be honest about why" part is key because the reasoning is always more interesting than the choice itself.',
      tags: ['funny', 'party', 'first-date'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-40',
      title: 'What is one habit you have that you know is weird but you do not plan on stopping?',
      description:
        'Self-aware quirks are endearing. This question invites someone to be their authentic self and signals that you find weirdness charming rather than off-putting.',
      tags: ['funny', 'first-date', 'getting-to-know'],
      category: 'Humor',
    },
    {
      id: 'cs-41',
      title: 'What is the story behind your name?',
      description:
        'Simple but surprisingly deep. Many people have never been asked this, and the answer often connects to family history, culture, or a meaningful story their parents told them.',
      tags: ['getting-to-know', 'first-date'],
      category: 'Personal',
    },
    {
      id: 'cs-42',
      title: 'What are you currently working on that you are really excited about?',
      description:
        'This works in both professional and personal contexts. It gives someone permission to share what they are passionate about right now, which is always their best conversation topic.',
      tags: ['networking', 'getting-to-know', 'party'],
      category: 'Goals',
    },
    {
      id: 'cs-43',
      title: 'If you had to delete all social media except one app, which would you keep?',
      description:
        'A modern hypothetical that reveals how someone consumes content, stays connected, and what community matters most to them. It usually sparks interesting debate about digital habits.',
      tags: ['funny', 'party', 'getting-to-know'],
      category: 'Modern Life',
    },
    {
      id: 'cs-44',
      title: 'What is a book, show, or movie that genuinely changed how you see the world?',
      description:
        'This goes beyond "what is your favorite show" by asking for impact. The answer reveals someone\'s intellectual and emotional landscape, and often leads to your next great watch or read.',
      tags: ['deep-talk', 'first-date', 'getting-to-know'],
      category: 'Culture',
    },
    {
      id: 'cs-45',
      title: 'What is the funniest thing that has happened to you this month?',
      description:
        'Recent and specific. This question naturally leads to a story rather than a one-word answer. It also sets a light, humorous tone for the rest of the conversation.',
      tags: ['funny', 'party', 'first-date'],
      category: 'Humor',
    },
    {
      id: 'cs-46',
      title: 'If we could teleport anywhere in the world right now for one hour, where would we go?',
      description:
        'The shared "we" makes this collaborative and slightly flirtatious on a date. It reveals travel interests and creates a fun, imaginative moment in the conversation.',
      tags: ['first-date', 'party', 'funny'],
      category: 'Hypothetical',
    },
    {
      id: 'cs-47',
      title: 'What is the most important lesson you learned from a failure?',
      description:
        'This asks for vulnerability in a constructive way. The lessons-from-failure framework lets someone share something hard while ending on a positive note of growth.',
      tags: ['deep-talk', 'networking', 'getting-to-know'],
      category: 'Growth',
    },
    {
      id: 'cs-48',
      title: 'What is your go-to karaoke song?',
      description:
        'Light, fun, and tells you a lot about someone\'s personality. Whether they pick a power ballad, a rap classic, or refuse to do karaoke entirely, the answer is always entertaining.',
      tags: ['party', 'funny', 'first-date'],
      category: 'Humor',
    },
    {
      id: 'cs-49',
      title: 'What is a question you wish people would ask you more often?',
      description:
        'This is a meta-question that flips the script. It tells you exactly what someone wants to talk about, which makes the rest of the conversation effortless.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-50',
      title: 'What did you want to be tonight, and what actually happened?',
      description:
        'Great for parties. It acknowledges the gap between expectations and reality in a humorous way and often leads to funny stories about the night so far.',
      tags: ['party', 'funny'],
      category: 'Situational',
    },
    {
      id: 'cs-51',
      title: 'Who in your life has had the biggest influence on who you are today?',
      description:
        'This question goes deep fast. The person they name and the reasons they give reveal their values, their relationships, and what qualities they admire most in others.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Reflective',
    },
    {
      id: 'cs-52',
      title: 'What is your hot take on something happening in your industry right now?',
      description:
        'Perfect for networking events. It moves past pleasantries into real perspective-sharing and positions both of you as people who think critically about your fields.',
      tags: ['networking'],
      category: 'Professional',
    },
    {
      id: 'cs-53',
      title: 'What is a compliment someone gave you that you still think about?',
      description:
        'Deeply personal in the best way. The compliment they remember reveals what they value about themselves, and sharing it creates an intimate, trusting moment in the conversation.',
      tags: ['deep-talk', 'first-date', 'getting-to-know'],
      category: 'Heartwarming',
    },
    {
      id: 'cs-54',
      title: 'If you could only eat one cuisine for the rest of your life, what would it be?',
      description:
        'Low stakes, universally engaging, and always sparks passionate debate. Food preferences say a lot about someone\'s background and experiences.',
      tags: ['funny', 'party', 'first-date'],
      category: 'Food',
    },
    {
      id: 'cs-55',
      title: 'What is the most courageous thing you have ever done?',
      description:
        'This invites someone to share a moment of bravery, which builds respect and admiration. The answer often leads to deeply meaningful stories that create real connection.',
      tags: ['deep-talk', 'getting-to-know'],
      category: 'Life Experience',
    },
  ],
  supportingContent: {
    intro:
      'The biggest fear in any social situation is not knowing what to say. Whether you are on a first date, at a networking event, or stuck in an awkward silence at a party, having a go-to conversation starter can completely change the dynamic. These are not cheesy icebreakers or generic small talk questions. They are designed to spark real, engaging conversations that make people want to keep talking to you.',
    howToUse:
      'Filter by the situation you are in, then hit Generate to get five conversation starters. Each one comes with an explanation of why it works so you understand the psychology behind it. Do not memorize them word-for-word. Instead, read a few before you head out and pick the ones that feel natural to you. The best conversations feel organic, not rehearsed.',
    faq: [
      {
        question: 'How do I transition from a conversation starter into a natural conversation?',
        answer:
          'The key is to listen actively and ask follow-up questions based on what they say, not on your next scripted question. If they mention they traveled to Japan, ask what surprised them most. If they mention a hobby, ask how they got into it. The starter just opens the door. Genuine curiosity keeps it going.',
      },
      {
        question: 'What if the other person gives a short or awkward answer?',
        answer:
          'It happens. Some people need warming up. If a question gets a one-word answer, share your own answer first to model the kind of response you are looking for, then try a different angle. Not every question lands with every person, and that is completely fine.',
      },
      {
        question: 'Are these questions too personal for a first conversation?',
        answer:
          'The questions are designed to be engaging without being invasive. They invite depth without requiring it. If someone is not ready to go deep, most of these can be answered at a surface level too. Read the room and adjust. If you are at a loud party, lean toward the funny ones. If you are in a quieter setting, the reflective ones work better.',
      },
    ],
    relatedTools: [
      'date-night-generator',
      'love-language-quiz',
      'interview-prep-coach',
    ],
  },
};
