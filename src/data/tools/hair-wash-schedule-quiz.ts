import type { QuizConfig } from '@/lib/types';

export const hairWashScheduleQuizConfig: QuizConfig = {
  resultCalculation: 'highest-score',
  shareText: 'My ideal hair wash schedule is: {result}! Find yours:',
  questions: [
    {
      id: 'hair_type',
      question: 'What is your hair type?',
      subtitle: 'Your natural texture determines how quickly oil travels down the hair shaft.',
      options: [
        {
          label: 'Straight - lies flat, gets oily relatively fast',
          value: 'straight',
          points: {
            'daily-washer': 2,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Wavy - some texture and body, moderate oil distribution',
          value: 'wavy',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Curly - defined curls or coils, oil moves slowly',
          value: 'curly',
          points: {
            'daily-washer': 0,
            'every-other-day': 1,
            'two-three-weekly': 2,
            'once-weekly': 2,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Coily - tight coils or kinks, very slow oil distribution',
          value: 'coily',
          points: {
            'daily-washer': 0,
            'every-other-day': 0,
            'two-three-weekly': 1,
            'once-weekly': 2,
            'co-wash-only': 3,
          },
        },
      ],
    },
    {
      id: 'scalp_condition',
      question: 'How would you describe your scalp?',
      subtitle: 'Your scalp oil production is the biggest factor in how often you need to wash.',
      options: [
        {
          label: 'Oily - hair looks greasy by end of day or next morning',
          value: 'oily',
          points: {
            'daily-washer': 3,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Normal - manageable, not too oily or dry',
          value: 'normal',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Dry - tight, sometimes flaky, rarely feels oily',
          value: 'dry',
          points: {
            'daily-washer': 0,
            'every-other-day': 0,
            'two-three-weekly': 1,
            'once-weekly': 2,
            'co-wash-only': 3,
          },
        },
        {
          label: 'Dandruff - visible flaking, itchy, or irritated',
          value: 'dandruff',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
      ],
    },
    {
      id: 'activity_level',
      question: 'How active are you physically?',
      subtitle: 'Sweat and activity directly affect how often your hair needs washing.',
      options: [
        {
          label: 'Sedentary - mostly desk work, rarely break a sweat',
          value: 'sedentary',
          points: {
            'daily-washer': 0,
            'every-other-day': 1,
            'two-three-weekly': 2,
            'once-weekly': 2,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Moderate - exercise a few times a week',
          value: 'moderate',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Very Active - daily workouts or physical job',
          value: 'very_active',
          points: {
            'daily-washer': 2,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Athlete - intense training, heavy sweating daily',
          value: 'athlete',
          points: {
            'daily-washer': 3,
            'every-other-day': 2,
            'two-three-weekly': 0,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
      ],
    },
    {
      id: 'styling_products',
      question: 'How much styling product do you use?',
      subtitle: 'Product buildup affects how often you need to cleanse your hair and scalp.',
      options: [
        {
          label: 'None - I do not use any styling products',
          value: 'none',
          points: {
            'daily-washer': 0,
            'every-other-day': 1,
            'two-three-weekly': 2,
            'once-weekly': 2,
            'co-wash-only': 2,
          },
        },
        {
          label: 'Light - a small amount of product for control',
          value: 'light',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Heavy - pomade, wax, clay, or gel every day',
          value: 'heavy',
          points: {
            'daily-washer': 2,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
      ],
    },
    {
      id: 'environment',
      question: 'What is your typical environment?',
      subtitle: 'Your daily environment exposes your hair to different levels of dirt and pollutants.',
      options: [
        {
          label: 'Office / Indoor - climate-controlled, minimal exposure',
          value: 'office',
          points: {
            'daily-washer': 0,
            'every-other-day': 1,
            'two-three-weekly': 2,
            'once-weekly': 2,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Outdoor - construction, landscaping, or lots of time outside',
          value: 'outdoor',
          points: {
            'daily-washer': 2,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Mixed - some indoor, some outdoor throughout the week',
          value: 'mixed',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
      ],
    },
    {
      id: 'hair_concern',
      question: 'Do you have any specific hair concerns?',
      subtitle: 'Certain concerns are made better or worse by wash frequency.',
      options: [
        {
          label: 'Thinning - hair loss or noticeably thinner than it used to be',
          value: 'thinning',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
        {
          label: 'None - my hair is healthy and I want to keep it that way',
          value: 'none',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 1,
          },
        },
        {
          label: 'Dandruff - persistent flaking or itching',
          value: 'dandruff',
          points: {
            'daily-washer': 1,
            'every-other-day': 2,
            'two-three-weekly': 2,
            'once-weekly': 1,
            'co-wash-only': 0,
          },
        },
        {
          label: 'Oily roots - greasy at the scalp but dry at the ends',
          value: 'oily_roots',
          points: {
            'daily-washer': 2,
            'every-other-day': 2,
            'two-three-weekly': 1,
            'once-weekly': 0,
            'co-wash-only': 0,
          },
        },
      ],
    },
  ],
  results: [
    {
      id: 'daily-washer',
      title: 'Daily Washer',
      description:
        'Your combination of an oily scalp, high activity level, and environmental exposure means daily washing is the right call for you. This does not mean you need to aggressively strip your hair every day though. The key is using a gentle, sulfate-free shampoo that cleanses without over-drying, so your scalp does not overcompensate by producing even more oil.',
      tips: [
        'Use a gentle, sulfate-free shampoo to avoid stripping your scalp and triggering excess oil production.',
        'Focus the shampoo on your scalp only - let it rinse through the lengths rather than scrubbing the ends.',
        'Follow every wash with a lightweight conditioner on the mid-lengths and ends to prevent dryness.',
        'On days when your hair feels less oily, try rinsing with just water and conditioner to give your scalp a break.',
        'Consider keeping a travel-size shampoo in your gym bag so you can wash immediately after workouts rather than letting sweat sit.',
      ],
    },
    {
      id: 'every-other-day',
      title: 'Every Other Day',
      description:
        'Washing every other day hits the sweet spot for your hair type and lifestyle. It is frequent enough to keep oil, sweat, and product buildup in check without over-washing. On your off days, your scalp gets a chance to maintain its natural moisture balance, which leads to healthier hair over time. This is the most common ideal frequency for most men.',
      tips: [
        'Wash on workout days and skip on rest days for a natural rhythm that makes sense with your schedule.',
        'On non-wash days, rinse your hair with water in the shower and use conditioner only to refresh without stripping.',
        'A light application of dry shampoo on off days absorbs excess oil and adds volume if your hair starts to look flat.',
        'Style your hair differently on day-two hair - slightly messier, textured styles often look better with a bit of natural oil.',
        'If your hair feels greasy on off days at first, push through for two weeks. Your scalp will adjust and produce less oil over time.',
      ],
    },
    {
      id: 'two-three-weekly',
      title: '2-3 Times a Week',
      description:
        'Washing two to three times per week is ideal for your hair type and activity level. This frequency gives your scalp enough time to maintain a healthy oil balance while still keeping things clean. Most dermatologists consider this the optimal frequency for the average man. Your hair will be healthier, more manageable, and require less product to style.',
      tips: [
        'Space your wash days evenly throughout the week, such as Monday, Wednesday, and Saturday.',
        'On non-wash days, rinse with water and use a co-wash or conditioner to keep your hair fresh without shampooing.',
        'Embrace second and third day hair - many styles actually hold better with a little natural texture and oil.',
        'Use a microfiber towel or cotton T-shirt to dry your hair instead of a rough terry cloth towel to reduce frizz and breakage.',
        'Apply a leave-in conditioner or light hair oil on wash days to keep your hair moisturized through the no-wash stretch.',
      ],
    },
    {
      id: 'once-weekly',
      title: 'Once a Week',
      description:
        'With your curly or coily hair texture and drier scalp, washing once a week is the way to go. Curly and coily hair is naturally drier because scalp oils cannot travel down the twists and bends of the hair shaft as easily. Over-washing strips what little moisture does make it to the lengths, leading to frizz, breakage, and dull-looking curls. Weekly washing keeps your curls hydrated and defined.',
      tips: [
        'Pick one day per week as your dedicated wash day and build a thorough routine around it: cleanse, deep condition, detangle, and style.',
        'Use a moisturizing shampoo or a cleansing conditioner that cleanses without stripping natural oils.',
        'Deep condition for 10-15 minutes every wash day using a hair mask or deep conditioner to restore moisture.',
        'Between washes, refresh your curls with a spray bottle of water mixed with a small amount of leave-in conditioner.',
        'Detangle your hair only when it is wet and saturated with conditioner to minimize breakage. Use a wide-tooth comb or your fingers, never a brush on dry curls.',
      ],
    },
    {
      id: 'co-wash-only',
      title: 'Co-Wash Only',
      description:
        'Your very dry, coily hair will thrive without traditional shampoo. Co-washing means using a cleansing conditioner or a dedicated co-wash product instead of shampoo. This approach cleanses the scalp of dirt and buildup while keeping the natural oils and moisture that your hair desperately needs. Your curls will be softer, more defined, and significantly less prone to breakage.',
      tips: [
        'Use a silicone-free co-wash or cleansing conditioner and massage it into your scalp with your fingertips to lift dirt and buildup.',
        'Do a clarifying shampoo wash once every 3-4 weeks to remove any product buildup that co-washing alone cannot handle.',
        'Apply a rich leave-in conditioner and seal with a natural oil like jojoba or argan oil after every co-wash.',
        'Sleep on a satin or silk pillowcase to preserve moisture and prevent friction damage overnight.',
        'Keep a spray bottle with water and a drop of oil handy for mid-week moisture refreshes. Lightly mist and scrunch your curls to revive them.',
      ],
    },
  ],
  supportingContent: {
    intro:
      'Most guys either wash their hair every single day out of habit or have no real schedule at all. Both approaches are wrong for most hair types. Over-washing strips your scalp of natural oils and triggers overproduction, while under-washing leads to buildup, odor, and a dull appearance. This quiz figures out the exact wash frequency that keeps your hair looking and feeling its best based on your unique combination of hair type, lifestyle, and environment.',
    howToUse:
      'Answer six quick questions about your hair type, scalp condition, activity level, product use, environment, and any specific concerns. The quiz will recommend a wash schedule with a weekly routine and practical tips for both wash days and non-wash days. Give the recommended frequency at least two weeks before judging the results, as your scalp needs time to adjust.',
    faq: [
      {
        question: 'Can washing my hair too much actually make it greasier?',
        answer:
          'Yes, this is one of the most common hair mistakes men make. When you wash daily with a harsh shampoo, you strip your scalp of its natural sebum. Your scalp responds by producing even more oil to compensate, creating a cycle where your hair feels greasier and you feel like you need to wash more often. Gradually extending time between washes allows your scalp to recalibrate its oil production. It takes about two to three weeks for your scalp to adjust, and in that transition period your hair may feel oilier than usual.',
      },
      {
        question: 'Does water temperature matter when washing hair?',
        answer:
          'Yes. Warm water opens the hair cuticle and helps shampoo clean effectively, so use warm water when you are shampooing. Cold water closes the cuticle, which locks in moisture and adds shine. The ideal approach is to shampoo with warm water, condition with warm water, then do a final cold water rinse at the end. You do not need to use ice-cold water - cool is enough. Avoid very hot water as it can strip oils, dry out your scalp, and make hair more brittle over time.',
      },
      {
        question: 'Can I just use conditioner and skip shampoo on off days?',
        answer:
          'Absolutely. Rinsing with water and applying conditioner on non-shampoo days is a great approach. Water alone removes most loose dirt and sweat, and conditioner keeps your hair moisturized and manageable. This method is especially beneficial for wavy, curly, and coily hair types that are prone to dryness. Just make sure you are still shampooing on your scheduled wash days to prevent product and oil buildup on the scalp.',
      },
    ],
    relatedTools: [
      'shampoo-selector-quiz',
      'haircut-frequency-calculator',
      'skincare-routine-builder',
      'beard-style-selector',
    ],
  },
};
