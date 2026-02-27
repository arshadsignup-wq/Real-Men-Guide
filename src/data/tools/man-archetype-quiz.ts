import type { QuizConfig } from '@/lib/types';

export const manArchetypeQuizConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: "I'm {result}! Take the Man Archetype Quiz to discover yours.",
  questions: [
    {
      id: 'leadership-style',
      question: 'How do you naturally lead in a group setting?',
      subtitle: 'Think about how you behave when a team needs direction.',
      options: [
        {
          label: 'I take charge, set the vision, and delegate tasks strategically',
          value: 'take-charge',
          points: { king: 3, warrior: 1 },
        },
        {
          label: 'I lead by example through discipline and hard work',
          value: 'lead-by-example',
          points: { warrior: 3, king: 1 },
        },
        {
          label: 'I analyze the situation and offer well-thought-out advice',
          value: 'analyze-advise',
          points: { sage: 3, creator: 1 },
        },
        {
          label: 'I push the group toward new ideas and uncharted territory',
          value: 'push-new',
          points: { explorer: 3, creator: 1 },
        },
        {
          label: 'I innovate and propose creative solutions no one else sees',
          value: 'innovate',
          points: { creator: 3, sage: 1 },
        },
        {
          label: 'I make sure everyone is heard and the group stays united',
          value: 'unite-group',
          points: { everyman: 3, king: 1 },
        },
      ],
    },
    {
      id: 'conflict-approach',
      question: 'How do you handle conflict or confrontation?',
      subtitle: 'Picture a disagreement with someone you care about or work with.',
      options: [
        {
          label: 'I address it head-on with authority and decisiveness',
          value: 'head-on-authority',
          points: { king: 3, warrior: 1 },
        },
        {
          label: 'I stand my ground and fight for what I believe is right',
          value: 'stand-ground',
          points: { warrior: 3, explorer: 1 },
        },
        {
          label: 'I step back, think critically, and respond with logic',
          value: 'think-respond',
          points: { sage: 3, everyman: 1 },
        },
        {
          label: 'I try to avoid it - life is too short for unnecessary battles',
          value: 'avoid-conflict',
          points: { explorer: 3, everyman: 1 },
        },
        {
          label: 'I look for a creative workaround or reframe the problem entirely',
          value: 'creative-workaround',
          points: { creator: 3, sage: 1 },
        },
        {
          label: 'I mediate and find a compromise everyone can live with',
          value: 'mediate',
          points: { everyman: 3, king: 1 },
        },
      ],
    },
    {
      id: 'core-values',
      question: 'Which set of values resonates with you the most?',
      subtitle: 'Choose the group that best describes what drives you day to day.',
      options: [
        {
          label: 'Power, legacy, and strategic influence',
          value: 'power-legacy',
          points: { king: 3, warrior: 1 },
        },
        {
          label: 'Discipline, honor, and physical excellence',
          value: 'discipline-honor',
          points: { warrior: 3, king: 1 },
        },
        {
          label: 'Knowledge, truth, and intellectual mastery',
          value: 'knowledge-truth',
          points: { sage: 3, creator: 1 },
        },
        {
          label: 'Freedom, adventure, and new experiences',
          value: 'freedom-adventure',
          points: { explorer: 3, warrior: 1 },
        },
        {
          label: 'Creativity, originality, and self-expression',
          value: 'creativity-expression',
          points: { creator: 3, explorer: 1 },
        },
        {
          label: 'Loyalty, community, and genuine connection',
          value: 'loyalty-community',
          points: { everyman: 3, sage: 1 },
        },
      ],
    },
    {
      id: 'social-behavior',
      question: 'At a party or social event, what are you most likely doing?',
      subtitle: 'Think about where you naturally gravitate.',
      options: [
        {
          label: 'Working the room, networking, and making key connections',
          value: 'networking',
          points: { king: 3, everyman: 1 },
        },
        {
          label: 'Challenging someone to a game, competition, or friendly debate',
          value: 'competing',
          points: { warrior: 3, explorer: 1 },
        },
        {
          label: 'Having a deep one-on-one conversation about ideas or philosophy',
          value: 'deep-conversation',
          points: { sage: 3, creator: 1 },
        },
        {
          label: 'Suggesting the group go somewhere more interesting or spontaneous',
          value: 'suggest-adventure',
          points: { explorer: 3, creator: 1 },
        },
        {
          label: 'Showing off something I made, built, or created recently',
          value: 'showing-creation',
          points: { creator: 3, sage: 1 },
        },
        {
          label: 'Catching up with old friends and making sure everyone is having fun',
          value: 'catching-up',
          points: { everyman: 3, king: 1 },
        },
      ],
    },
    {
      id: 'hobbies',
      question: 'Which set of hobbies appeals to you most?',
      subtitle: 'Pick the combination that sounds like the best use of your free time.',
      options: [
        {
          label: 'Chess, investing, reading biographies of great leaders',
          value: 'strategy-hobbies',
          points: { king: 3, sage: 1 },
        },
        {
          label: 'Martial arts, weightlifting, competitive sports',
          value: 'physical-hobbies',
          points: { warrior: 3, explorer: 1 },
        },
        {
          label: 'Reading, podcasts, documentaries, learning new subjects',
          value: 'intellectual-hobbies',
          points: { sage: 3, king: 1 },
        },
        {
          label: 'Hiking, traveling, road trips, trying extreme sports',
          value: 'adventure-hobbies',
          points: { explorer: 3, warrior: 1 },
        },
        {
          label: 'Music, writing, design, building or making things',
          value: 'creative-hobbies',
          points: { creator: 3, everyman: 1 },
        },
        {
          label: 'BBQs with friends, sports leagues, volunteering, community events',
          value: 'community-hobbies',
          points: { everyman: 3, explorer: 1 },
        },
      ],
    },
    {
      id: 'decision-making',
      question: 'How do you make important life decisions?',
      subtitle: 'Think about how you decided on your career, relationship, or a big purchase.',
      options: [
        {
          label: 'I weigh the long-term strategic impact and choose what builds my legacy',
          value: 'strategic-legacy',
          points: { king: 3, sage: 1 },
        },
        {
          label: 'I trust my gut, commit fully, and never look back',
          value: 'gut-commit',
          points: { warrior: 3, explorer: 1 },
        },
        {
          label: 'I research thoroughly, consult experts, and make a data-driven choice',
          value: 'research-data',
          points: { sage: 3, king: 1 },
        },
        {
          label: 'I go with whatever option gives me the most freedom and new experiences',
          value: 'freedom-choice',
          points: { explorer: 3, creator: 1 },
        },
        {
          label: 'I follow my passion and intuition, even if it is unconventional',
          value: 'passion-intuition',
          points: { creator: 3, warrior: 1 },
        },
        {
          label: 'I consider how it affects the people around me first',
          value: 'consider-others',
          points: { everyman: 3, sage: 1 },
        },
      ],
    },
    {
      id: 'ideal-weekend',
      question: 'Your ideal weekend looks like...',
      subtitle: 'No obligations. What would you actually do?',
      options: [
        {
          label: 'Planning my next move - reviewing goals, finances, and strategy',
          value: 'planning-strategy',
          points: { king: 3, sage: 1 },
        },
        {
          label: 'An intense workout, a game, or pushing my body to the limit',
          value: 'intense-physical',
          points: { warrior: 3, explorer: 1 },
        },
        {
          label: 'Binge-reading, watching a documentary series, or visiting a museum',
          value: 'learning-exploring',
          points: { sage: 3, creator: 1 },
        },
        {
          label: 'A spontaneous road trip or exploring somewhere I have never been',
          value: 'spontaneous-trip',
          points: { explorer: 3, warrior: 1 },
        },
        {
          label: 'Working on a passion project, creating art, or building something',
          value: 'passion-project',
          points: { creator: 3, everyman: 1 },
        },
        {
          label: 'Hanging out with friends, a backyard BBQ, or a low-key gathering',
          value: 'hanging-out',
          points: { everyman: 3, king: 1 },
        },
      ],
    },
    {
      id: 'role-model-type',
      question: 'Which type of role model do you admire most?',
      subtitle: 'Think about the kind of man you look up to or aspire to be.',
      options: [
        {
          label: 'A visionary CEO or historical leader who shaped the world',
          value: 'visionary-leader',
          points: { king: 3, creator: 1 },
        },
        {
          label: 'A decorated soldier, elite athlete, or disciplined champion',
          value: 'disciplined-champion',
          points: { warrior: 3, king: 1 },
        },
        {
          label: 'A philosopher, scientist, or brilliant thinker who changed our understanding',
          value: 'brilliant-thinker',
          points: { sage: 3, creator: 1 },
        },
        {
          label: 'An explorer, mountaineer, or adventurer who defied limits',
          value: 'adventurer',
          points: { explorer: 3, warrior: 1 },
        },
        {
          label: 'An artist, inventor, or entrepreneur who created something from nothing',
          value: 'inventor-creator',
          points: { creator: 3, sage: 1 },
        },
        {
          label: 'A family man, mentor, or community leader who is loved by everyone',
          value: 'community-leader',
          points: { everyman: 3, explorer: 1 },
        },
      ],
    },
  ],
  results: [
    {
      id: 'king',
      title: 'The King',
      description:
        'You are The King - a natural-born leader with a strategic mind and commanding presence. You see the bigger picture when others are lost in the details. People instinctively look to you for direction, and you thrive when building something meaningful and lasting. You lead not through force but through vision, confidence, and the ability to bring out the best in those around you. Your greatest strength is your ability to create order from chaos and inspire others to follow a shared mission.',
      tips: [
        'Lean into your strategic mindset. Create a 5-year personal vision and review it quarterly.',
        'Practice active listening - Kings who only command without listening lose their kingdom.',
        'Build a personal board of advisors: 3-5 trusted people you consult for major decisions.',
        'Read biographies of great leaders to sharpen your instincts and learn from their mistakes.',
        'Be careful of the shadow side: controlling behavior and difficulty delegating. Trust your team.',
        'Invest in mentoring others - your legacy is built through the people you develop.',
      ],
    },
    {
      id: 'warrior',
      title: 'The Warrior',
      description:
        'You are The Warrior - disciplined, competitive, and action-oriented. You believe in earning everything through effort and never backing down from a challenge. Your physical and mental toughness set you apart. When others hesitate, you charge forward. You are at your best when you have a clear objective, a worthy opponent, or a difficult mission to complete. Comfort zones are your enemy - you need resistance to grow.',
      tips: [
        'Channel your competitive energy into a structured training program with measurable goals.',
        'Practice controlled aggression - learn when to push hard and when to recover strategically.',
        'Take up a martial art or combat sport if you have not already. It aligns perfectly with your archetype.',
        'Be aware of burnout. Warriors who never rest eventually break. Schedule recovery like you schedule training.',
        'Find worthy challenges outside the gym: cold exposure, fasting, public speaking, or endurance events.',
        'Balance your toughness with vulnerability. The strongest warriors know when to lower their guard with loved ones.',
      ],
    },
    {
      id: 'sage',
      title: 'The Sage',
      description:
        'You are The Sage - an intellectual, thoughtful, and analytical man who values knowledge above all else. You are the one people turn to for advice because your insights cut through noise and get to the truth. You process the world through ideas, frameworks, and deep understanding. You are happiest when learning something new or solving a complex problem. Your wisdom is your superpower.',
      tips: [
        'Create a structured learning habit: read at least one book per month and keep notes on key insights.',
        'Share your knowledge. Start writing, teaching, or mentoring - your insights are wasted if kept to yourself.',
        'Beware of analysis paralysis. Set deadlines for decisions and trust your judgment once you have enough data.',
        'Balance intellectual pursuits with physical activity. A sharp mind needs a healthy body to sustain it.',
        'Cultivate emotional intelligence alongside intellectual intelligence. Understanding people is as important as understanding ideas.',
        'Build a personal knowledge management system to capture and connect your best ideas over time.',
      ],
    },
    {
      id: 'explorer',
      title: 'The Explorer',
      description:
        'You are The Explorer - adventurous, independent, and free-spirited. You live for the thrill of discovery and the freedom to chart your own course. Routine is your kryptonite and comfort zones make you restless. You are at your best when experiencing something new, whether it is a foreign country, a new skill, or an unconventional path in life. You inspire others by proving that life is meant to be lived fully.',
      tips: [
        'Plan one major adventure per year and several mini-adventures each month to satisfy your need for novelty.',
        'Build a flexible career or income stream that supports your lifestyle without chaining you to a desk.',
        'Learn to distinguish between productive exploration and running from commitment. Not all stability is a cage.',
        'Document your adventures through photos, journaling, or video. Your experiences are your greatest asset.',
        'Develop a home base or anchor ritual that grounds you between adventures so you do not burn out.',
        'Connect with other explorers. Join adventure communities, travel groups, or outdoor clubs to share the journey.',
      ],
    },
    {
      id: 'creator',
      title: 'The Creator',
      description:
        'You are The Creator - innovative, artistic, and visionary. You see the world not as it is but as it could be. You are driven by the urge to make something that did not exist before, whether it is a business, a piece of art, a product, or an idea. You think differently from most people, and your unconventional perspective is your greatest gift. You are happiest when lost in the flow of building, designing, or creating.',
      tips: [
        'Protect your creative time fiercely. Block out distraction-free hours daily for your most important creative work.',
        'Ship imperfect work. Creators who wait for perfection never finish. Done is better than perfect.',
        'Build a creative portfolio or body of work that compounds over time. Consistency beats sporadic brilliance.',
        'Cross-pollinate your creativity by exploring disciplines outside your main focus. Great ideas come from unexpected intersections.',
        'Beware of the tortured artist trap. Take care of your health, finances, and relationships - they fuel your creativity, not hinder it.',
        'Find your creative community. Surround yourself with other makers and builders who understand the creative process.',
      ],
    },
    {
      id: 'everyman',
      title: 'The Everyman',
      description:
        'You are The Everyman - reliable, approachable, and grounded. You are the backbone of your friend group, family, and community. People trust you because you are genuine, consistent, and you show up when it matters. You do not need the spotlight or a grand title to make an impact. Your strength is in your authenticity and your ability to connect with anyone. You make the world better simply by being dependable and real.',
      tips: [
        'Recognize that your reliability is a superpower, not a limitation. The world desperately needs men who show up consistently.',
        'Set boundaries so your generosity does not become people-pleasing. You cannot pour from an empty cup.',
        'Invest in yourself as much as you invest in others. Pursue a personal goal that is just for you.',
        'Leverage your people skills. You are naturally gifted at building teams, communities, and relationships - use it professionally too.',
        'Push yourself outside your comfort zone periodically. Try one new challenging experience each quarter.',
        'Be the mentor you wish you had. Your grounded perspective is exactly what younger men need to hear.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Ever asked yourself "what is my masculine archetype?" Every man operates from a dominant archetype — a core pattern that shapes how he leads, loves, fights, and finds meaning. This masculine archetype quiz draws from <a href="https://en.wikipedia.org/wiki/Jungian_archetypes" target="_blank" rel="noopener">Jungian archetypes</a> and modern masculine psychology to reveal which of six archetypes drives your personality. Understanding your archetype helps you lean into your strengths, recognize your blind spots, and become a more intentional version of yourself. Once you know your type, take our <a href="/life-audit-score">Life Audit Score</a> to see how your archetype plays out across all areas of your life.',
    howToUse:
      'Answer all 8 questions honestly based on how you actually behave, not how you wish you behaved. There are no right or wrong answers. Each question explores a different dimension of your personality: leadership, conflict, values, social behavior, hobbies, decision-making, leisure, and role models. Your result reveals your dominant male personality archetype along with detailed tips for growth.',
    faq: [
      {
        question: 'Can I be more than one archetype?',
        answer:
          'Absolutely. Most men are a blend of two or three archetypes with one being dominant. Your quiz result shows your primary archetype, but you likely have strong secondary traits from others. Read through all the results and see which secondary archetype resonates. For a broader view of how your personality shows up in daily life, try the <a href="/daily-man-challenge">Daily Man Challenge</a> and see which categories you gravitate toward.',
      },
      {
        question: 'Can my archetype change over time?',
        answer:
          'Yes. Your dominant archetype can shift as you go through different life phases. A young Warrior may evolve into a King as he gains experience, or a Creator may develop stronger Sage qualities over time. Research in <a href="https://www.psychologytoday.com/us/basics/personality" target="_blank" rel="noopener">personality psychology</a> confirms that traits evolve with age and experience. Retake the quiz every year or two to track how you have grown.',
      },
      {
        question: 'What are these archetypes based on?',
        answer:
          'The archetypes are inspired by <a href="https://en.wikipedia.org/wiki/Carl_Jung" target="_blank" rel="noopener">Carl Jung\'s</a> psychological framework, the work of Robert Moore and Douglas Gillette on masculine archetypes in <em>King, Warrior, Magician, Lover</em>, and modern personality frameworks. They represent universal patterns of masculine identity that have appeared across cultures and throughout history.',
      },
    ],
    relatedTools: [
      'life-audit-score',
      'daily-man-challenge',
      'face-shape-analyzer',
    ],
  },
};
