import { QuizConfig } from '@/lib/types';

// ============================================================
// INTERVIEW PREP COACH
// 6 questions to deliver personalized interview prep strategies
// ============================================================

export const interviewPrepCoachConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'Just prepped for my interview using the Interview Prep Coach on Real Men Guide. Feeling ready!',
  questions: [
    {
      id: 'industry',
      question: 'What industry is the role in?',
      subtitle: 'Different industries have different interview cultures.',
      options: [
        {
          label: 'Tech / Software',
          value: 'tech',
          points: {
            confidence: 1,
            technical: 4,
            storyteller: 1,
            executive: 1,
          },
        },
        {
          label: 'Finance / Consulting',
          value: 'finance',
          points: {
            confidence: 1,
            technical: 3,
            storyteller: 2,
            executive: 3,
          },
        },
        {
          label: 'Creative / Marketing / Media',
          value: 'creative',
          points: {
            confidence: 2,
            technical: 0,
            storyteller: 4,
            executive: 1,
          },
        },
        {
          label: 'Sales / Business Development',
          value: 'sales',
          points: {
            confidence: 4,
            technical: 0,
            storyteller: 2,
            executive: 2,
          },
        },
        {
          label: 'General / Other',
          value: 'general',
          points: {
            confidence: 2,
            technical: 1,
            storyteller: 2,
            executive: 1,
          },
        },
      ],
    },
    {
      id: 'level',
      question: 'What level is the position?',
      subtitle: 'The expectations shift significantly at each level.',
      options: [
        {
          label: 'Entry Level / Junior',
          value: 'entry',
          points: {
            confidence: 4,
            technical: 2,
            storyteller: 2,
            executive: 0,
          },
        },
        {
          label: 'Mid Level (3-7 years experience)',
          value: 'mid',
          points: {
            confidence: 2,
            technical: 3,
            storyteller: 3,
            executive: 1,
          },
        },
        {
          label: 'Senior Level (7-12 years)',
          value: 'senior',
          points: {
            confidence: 1,
            technical: 2,
            storyteller: 2,
            executive: 3,
          },
        },
        {
          label: 'Executive / Director+',
          value: 'executive',
          points: {
            confidence: 0,
            technical: 1,
            storyteller: 2,
            executive: 4,
          },
        },
      ],
    },
    {
      id: 'interview-type',
      question: 'What type of interview are you preparing for?',
      subtitle: 'The format changes what you should focus on.',
      options: [
        {
          label: 'Phone screen',
          value: 'phone',
          points: {
            confidence: 3,
            technical: 2,
            storyteller: 3,
            executive: 0,
          },
        },
        {
          label: 'Video call (Zoom, Teams, etc.)',
          value: 'video',
          points: {
            confidence: 3,
            technical: 2,
            storyteller: 2,
            executive: 1,
          },
        },
        {
          label: 'In-person one-on-one',
          value: 'in-person',
          points: {
            confidence: 2,
            technical: 1,
            storyteller: 2,
            executive: 3,
          },
        },
        {
          label: 'Panel interview (multiple interviewers)',
          value: 'panel',
          points: {
            confidence: 1,
            technical: 2,
            storyteller: 2,
            executive: 4,
          },
        },
      ],
    },
    {
      id: 'concern',
      question: 'What is your biggest concern going into this interview?',
      subtitle: 'Be honest. We will build your strategy around this.',
      options: [
        {
          label: 'Nervousness and anxiety',
          value: 'nervous',
          points: {
            confidence: 4,
            technical: 0,
            storyteller: 1,
            executive: 0,
          },
        },
        {
          label: 'Technical questions or skills-based tests',
          value: 'technical',
          points: {
            confidence: 0,
            technical: 4,
            storyteller: 1,
            executive: 0,
          },
        },
        {
          label: 'Salary negotiation and knowing my worth',
          value: 'salary',
          points: {
            confidence: 2,
            technical: 0,
            storyteller: 1,
            executive: 3,
          },
        },
        {
          label: 'Body language and first impressions',
          value: 'body-language',
          points: {
            confidence: 3,
            technical: 0,
            storyteller: 2,
            executive: 2,
          },
        },
      ],
    },
    {
      id: 'timeline',
      question: 'When is your interview?',
      subtitle: 'This determines how to allocate your prep time.',
      options: [
        {
          label: 'Tomorrow or within 2 days',
          value: 'tomorrow',
          points: {
            confidence: 4,
            technical: 1,
            storyteller: 2,
            executive: 1,
          },
        },
        {
          label: 'This week',
          value: 'this-week',
          points: {
            confidence: 2,
            technical: 3,
            storyteller: 3,
            executive: 2,
          },
        },
        {
          label: 'Next week',
          value: 'next-week',
          points: {
            confidence: 1,
            technical: 3,
            storyteller: 2,
            executive: 3,
          },
        },
        {
          label: 'More than 2 weeks away',
          value: 'later',
          points: {
            confidence: 1,
            technical: 3,
            storyteller: 2,
            executive: 3,
          },
        },
      ],
    },
    {
      id: 'experience',
      question: 'How much interview experience do you have?',
      subtitle: 'There is no shame in being new to this.',
      options: [
        {
          label: 'This is my first real interview',
          value: 'first',
          points: {
            confidence: 4,
            technical: 1,
            storyteller: 3,
            executive: 0,
          },
        },
        {
          label: 'A few interviews but I have not landed the role I want yet',
          value: 'some',
          points: {
            confidence: 3,
            technical: 2,
            storyteller: 3,
            executive: 1,
          },
        },
        {
          label: 'I have done many interviews and feel generally comfortable',
          value: 'experienced',
          points: {
            confidence: 1,
            technical: 3,
            storyteller: 2,
            executive: 3,
          },
        },
        {
          label: 'I am very experienced and looking for an edge',
          value: 'expert',
          points: {
            confidence: 0,
            technical: 2,
            storyteller: 2,
            executive: 4,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'confidence',
      title: 'The Confidence Builder',
      description:
        'Your biggest edge in this interview is going to come from how you carry yourself, not what you say. Right now, your prep should focus primarily on building confidence, managing anxiety, and making a strong first impression. Technical knowledge matters, but interviewers hire people they feel good about. Confidence is not arrogance; it is the quiet certainty that you belong in the room. Here is your game plan.',
      tips: [
        'MINDSET RESET: Reframe the interview in your head. You are not begging for a job; you are evaluating whether this company deserves your time. You are interviewing them as much as they are interviewing you. This mental shift alone changes your body language.',
        'POWER POSING: 5 minutes before the interview, find a private space and stand in a power pose (arms wide, chest up, chin level). Research from Harvard shows this lowers cortisol and increases testosterone, reducing anxiety physically.',
        'PREPARATION BEATS NERVES: Research the company deeply. Know their recent news, their mission, their competitors, and the name of the person interviewing you. When you are over-prepared on the basics, your mind is free to be present instead of panicking.',
        'THE FIRST 30 SECONDS: Practice your handshake (firm, dry, 2-3 seconds). Make eye contact. Smile naturally. Say their name: "Great to meet you, [Name]." These first moments set the tone for everything that follows.',
        'BREATHING TECHNIQUE: If you feel anxiety spiking, use box breathing: inhale 4 seconds, hold 4 seconds, exhale 4 seconds, hold 4 seconds. Do this 3-4 times. It activates your parasympathetic nervous system and calms you down in under a minute.',
        'DRESS ONE LEVEL UP: Whatever the company dress code is, go one notch above it. If they wear jeans, wear chinos and a button-down. If they wear business casual, wear a blazer. Looking sharp boosts your own confidence as much as it impresses them.',
        'PRACTICE OUT LOUD: Record yourself answering "Tell me about yourself" and "Why this role?" on your phone. Watch it back. Fix any filler words (um, like, you know), adjust your pace, and practice until it feels natural, not rehearsed.',
        'THE NIGHT BEFORE: Lay out your clothes. Charge your phone. Have directions ready. Pack a copy of your resume. Eat a good meal. Get to bed early. Removing all logistical uncertainty lets you wake up calm and focused.',
      ],
    },
    {
      id: 'technical',
      title: 'The Technical Expert',
      description:
        'Your prep should focus heavily on demonstrating technical competency and problem-solving ability. Whether it is coding challenges, case studies, financial modeling, or industry-specific knowledge, you need to show that you can do the actual work. But technical interviews are not just about getting the right answer; they are about showing your thought process, how you handle being stuck, and how you communicate complex ideas clearly.',
      tips: [
        'STUDY THE JOB DESCRIPTION: Go line by line through the requirements and write down a specific example from your experience for each one. If you lack experience in an area, prepare to talk about how you would learn it and what transferable skills you bring.',
        'PRACTICE PROBLEMS DAILY: For tech roles, do at least 2-3 practice problems a day on LeetCode, HackerRank, or similar platforms. For finance, practice case studies. For other fields, review the technical tools and methodologies listed in the job posting.',
        'THINK OUT LOUD: In technical interviews, the process matters as much as the answer. Narrate your thinking: "First, I would approach this by..." "The trade-off here is between..." Show them how your brain works, not just what it produces.',
        'KNOW YOUR RESUME COLD: Every bullet point on your resume is fair game. For each project or achievement listed, prepare to explain: what the challenge was, what you specifically did (not your team), what tools or methods you used, and what the measurable result was.',
        'PREPARE FOR "I DON\'T KNOW" MOMENTS: You will get a question you cannot answer. The move is: "I have not worked with that specifically, but here is how I would approach learning it..." or "In a similar situation with [related tool], I did X." Never bluff.',
        'SYSTEM DESIGN AND BIG PICTURE: For senior technical roles, expect questions about architecture, trade-offs, and scaling. Practice explaining complex systems simply. If you can explain it to a non-technical person, you truly understand it.',
        'WHITEBOARD AND SCREEN SHARING: Practice solving problems in the medium you will be tested in. If it is a whiteboard, practice writing code on paper. If it is screen sharing, practice in a Google Doc or CodePen with someone watching.',
        'ASK SMART TECHNICAL QUESTIONS: Prepare 2-3 questions about their tech stack, architecture decisions, or engineering culture. "What is the biggest technical challenge the team is currently facing?" shows you are thinking like someone who already works there.',
      ],
    },
    {
      id: 'storyteller',
      title: 'The Storyteller',
      description:
        'Your biggest opportunity is in how you frame and communicate your experience. Interviewers remember stories, not bullet points. Your prep should focus on crafting compelling narratives about your career, your achievements, and the challenges you have overcome. The STAR method (Situation, Task, Action, Result) is your framework, but great storytelling goes beyond structure. It includes emotion, stakes, and a clear takeaway.',
      tips: [
        'BUILD YOUR STORY BANK: Write out 5-7 stories from your career that demonstrate key competencies: leadership, problem-solving, conflict resolution, teamwork, initiative, and failure-and-recovery. These stories will answer 80% of behavioral questions.',
        'THE STAR METHOD, UPGRADED: Situation (set the scene briefly), Task (what was your specific role), Action (what YOU did, with detail), Result (quantify the outcome whenever possible). Then add a Takeaway: what you learned and how you apply it now.',
        'YOUR ORIGIN STORY: "Tell me about yourself" is not a biography. It is a 90-second narrative arc: where you started, what sparked your passion for this field, one or two key experiences that shaped you, and why this specific role is the natural next chapter.',
        'PRACTICE BREVITY: The biggest storytelling mistake in interviews is going too long. Each answer should be 1-2 minutes max. Practice with a timer. If a story takes more than 2 minutes, trim the setup and focus on the action and result.',
        'SHOW, DON\'T TELL: Instead of saying "I\'m a great leader," tell a story where your leadership was evident. Instead of "I\'m detail-oriented," describe a time your attention to detail caught something others missed. Let the story prove the trait.',
        'THE FAILURE QUESTION: "Tell me about a time you failed" is coming. Pick a real failure (not a humble brag disguised as a failure). Explain what happened honestly, take ownership, and spend most of the answer on what you learned and how you changed.',
        'PORTFOLIO AND PROOF: If applicable, bring examples of your work: a portfolio, a case study you led, metrics from a project, or a one-page summary of key achievements. Tangible proof makes your stories concrete.',
        'MIRROR THEIR LANGUAGE: Study the company\'s website, values page, and job posting. Use their language naturally in your stories. If they value "innovation," weave in a story about a time you innovated. If they value "collaboration," lead with a team story.',
      ],
    },
    {
      id: 'executive',
      title: 'Executive Presence',
      description:
        'At your level, they already know you can do the job. What they are evaluating is whether you can lead, influence, and represent the organization at the highest level. Your prep should focus on demonstrating strategic thinking, executive communication, and the ability to inspire confidence in everyone you interact with. This is about presence, not just performance.',
      tips: [
        'STRATEGIC FRAMING: Every answer should connect to business outcomes. Do not just explain what you did; explain why it mattered to the company\'s bottom line, growth, or strategic direction. Think in terms of revenue, efficiency, market position, and organizational capability.',
        'THE 90-DAY PLAN: Prepare a thoughtful outline of what your first 90 days would look like: 30 days of listening and learning, 60 days of identifying quick wins, 90 days of implementing a strategic initiative. Even if they do not ask for it, having it ready shows executive-level thinking.',
        'EXECUTIVE COMMUNICATION: Speak concisely and with authority. Start with the conclusion, then provide supporting points. "Here is what I would do and why" is more powerful than a long buildup to a recommendation. Practice eliminating filler words entirely.',
        'SALARY NEGOTIATION PREP: At this level, research compensation ranges on Glassdoor, Levels.fyi, and LinkedIn. Know your number and have a rationale. When asked about salary expectations, give a range with confidence: "Based on the scope of this role and my experience, I am targeting $X to $Y."',
        'STAKEHOLDER MANAGEMENT: Prepare stories about managing up (influencing executives), managing across (cross-functional collaboration), and managing down (developing and retaining talent). Senior roles require all three.',
        'PANEL INTERVIEW STRATEGY: When facing multiple interviewers, address the person who asked the question primarily, but make eye contact with everyone. Note each person\'s name and role. Ask questions directed at specific panel members to show you understand their function.',
        'EXECUTIVE QUESTIONS TO ASK: "What does success look like in this role in the first year?" "What is the biggest challenge the team/company is facing that this role can impact?" "How does the executive team make decisions?" These signal strategic-level thinking.',
        'THE CLOSE: At the end of the interview, close with confidence: "Based on our conversation, I am very excited about this role. I believe my experience in [specific area] aligns well with what you need. I would love to move forward." Do not leave without expressing clear interest and asking about next steps.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Interview prep is one of the highest-ROI activities you can do. A single great interview can change your career trajectory, your income, and your confidence for years to come. Yet most people wing it: they skim the job posting the night before, rehearse a few generic answers, and hope for the best. This tool gives you targeted job interview tips for men based on your specific role, industry, and experience level so you walk in knowing exactly what to focus on. Looking sharp matters too, so check our <a href="/outfit-builder">Outfit Builder</a> before you go.',
    howToUse:
      'Answer six questions about the role, industry, interview format, your biggest concern, timeline, and experience level. The quiz takes about 60 seconds. You will receive a personalized interview prep strategy with specific, actionable tips. Sharpen your communication skills with our <a href="/conversation-starter-generator">Conversation Starter Generator</a> for networking situations. Read through the tips, pick the 3-4 most relevant to your situation, and work on them before your interview.',
    faq: [
      {
        question: 'How long should I prepare for an interview?',
        answer:
          'Minimum 3-5 hours of focused preparation for any important interview. This includes: 1 hour researching the company, 1-2 hours practicing answers out loud, and 1-2 hours on technical prep if applicable. <a href="https://hbr.org/2021/11/10-common-job-interview-questions-and-how-to-answer-them" target="_blank" rel="noopener">Harvard Business Review</a> recommends practicing answers out loud rather than just in your head. Spread prep across several days if you have time.',
      },
      {
        question: 'What is the most common interview mistake men make?',
        answer:
          'Talking too much. The average interviewer decides about a candidate in the first 10 minutes, then spends the rest confirming their initial impression. Long, rambling answers kill momentum. Practice keeping every answer under 2 minutes. Be concise, specific, and then stop talking. Silence is not awkward; it shows confidence during a job interview.',
      },
      {
        question: 'How do I handle a question I have no answer for?',
        answer:
          'Pause for 3 seconds (it feels like forever but looks thoughtful). Then try: "That is a great question. Let me think about that." Or bridge to a related experience: "I have not encountered that exact situation, but in a similar scenario I..." Honesty plus a pivot always beats a bad fabrication. Build your <a href="/morning-routine-builder">morning routine</a> around prep days to start focused.',
      },
    ],
    relatedTools: [
      'conversation-starter-generator',
      'morning-routine-builder',
      'love-language-quiz',
    ],
  },
};
