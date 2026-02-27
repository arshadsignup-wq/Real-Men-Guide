import type { CalculatorConfig } from '@/lib/types';

export const cologneSprayCountGuideConfig: CalculatorConfig = {
  fields: [
    {
      id: 'concentration',
      label: 'Fragrance Concentration',
      type: 'select',
      defaultValue: 'eau_de_parfum',
      options: [
        { label: 'Eau de Cologne (EDC)', value: 'eau_de_cologne' },
        { label: 'Eau de Toilette (EDT)', value: 'eau_de_toilette' },
        { label: 'Eau de Parfum (EDP)', value: 'eau_de_parfum' },
        { label: 'Parfum (Extrait)', value: 'parfum' },
      ],
      helpText: 'Higher concentrations are stronger and require fewer sprays.',
    },
    {
      id: 'occasion',
      label: 'Occasion',
      type: 'select',
      defaultValue: 'casual',
      options: [
        { label: 'Office / Work', value: 'office' },
        { label: 'Casual / Everyday', value: 'casual' },
        { label: 'Date Night', value: 'date' },
        { label: 'Club / Night Out', value: 'club' },
        { label: 'Outdoor / Active', value: 'outdoor' },
      ],
      helpText: 'Conservative settings call for fewer sprays; social settings allow more.',
    },
    {
      id: 'season',
      label: 'Season',
      type: 'select',
      defaultValue: 'spring_fall',
      options: [
        { label: 'Summer', value: 'summer' },
        { label: 'Spring / Fall', value: 'spring_fall' },
        { label: 'Winter', value: 'winter' },
      ],
      helpText: 'Heat amplifies fragrance, so use fewer sprays in warm weather.',
    },
    {
      id: 'skin_type',
      label: 'Skin Type',
      type: 'select',
      defaultValue: 'normal',
      options: [
        { label: 'Dry', value: 'dry' },
        { label: 'Normal', value: 'normal' },
        { label: 'Oily', value: 'oily' },
      ],
      helpText: 'Dry skin causes fragrance to fade faster; oily skin holds scent longer.',
    },
  ],
  outputs: [
    {
      id: 'recommended_sprays',
      label: 'Recommended Sprays',
      highlight: true,
      description: 'The ideal number of sprays for your situation.',
    },
    {
      id: 'spray_locations',
      label: 'Where to Spray',
      description: 'Best pulse points and body areas for application.',
    },
    {
      id: 'longevity_hours',
      label: 'Estimated Longevity',
      unit: 'hours',
      description: 'How long you can expect the fragrance to last.',
    },
    {
      id: 'dos_and_donts',
      label: 'Tips',
      description: 'Quick dos and don\'ts for your specific combo.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const concentration = String(inputs.concentration);
    const occasion = String(inputs.occasion);
    const season = String(inputs.season);
    const skinType = String(inputs.skin_type);

    // Base spray ranges by concentration (using midpoint)
    let baseSpraysMid: number;
    let baseLongevity: number;
    switch (concentration) {
      case 'eau_de_cologne':
        baseSpraysMid = 6;  // 5-7 range, mid = 6
        baseLongevity = 2;
        break;
      case 'eau_de_toilette':
        baseSpraysMid = 4;  // 3-5 range, mid = 4
        baseLongevity = 4;
        break;
      case 'eau_de_parfum':
        baseSpraysMid = 3;  // 2-4 range, mid = 3
        baseLongevity = 6;
        break;
      case 'parfum':
        baseSpraysMid = 2;  // 1-2 range, mid ~1.5 rounded to 2
        baseLongevity = 8;
        break;
      default:
        baseSpraysMid = 3;
        baseLongevity = 5;
    }

    // Occasion adjustment
    let occasionAdj = 0;
    let occasionNote = '';
    switch (occasion) {
      case 'office':
        occasionAdj = -1;
        occasionNote = 'Keep it subtle at work. Less is always more in professional settings.';
        break;
      case 'casual':
        occasionAdj = 0;
        occasionNote = 'Standard application works great for everyday wear.';
        break;
      case 'date':
        occasionAdj = 0;
        occasionNote = 'Apply to pulse points so the scent unfolds naturally as you get closer.';
        break;
      case 'club':
        occasionAdj = 1;
        occasionNote = 'You can go a bit heavier since clubs are louder environments with competing scents.';
        break;
      case 'outdoor':
        occasionAdj = 0;
        occasionNote = 'Open air dissipates fragrance quickly. Focus sprays on clothing for outdoor events.';
        break;
      default:
        occasionAdj = 0;
        occasionNote = 'Standard application is a safe bet.';
    }

    // Season adjustment
    let seasonAdj = 0;
    switch (season) {
      case 'summer':
        seasonAdj = -1;
        baseLongevity -= 1;
        break;
      case 'spring_fall':
        seasonAdj = 0;
        break;
      case 'winter':
        seasonAdj = 1;
        baseLongevity += 1;
        break;
    }

    // Skin type adjustment
    let skinAdj = 0;
    switch (skinType) {
      case 'dry':
        skinAdj = 1;
        baseLongevity -= 1;
        break;
      case 'normal':
        skinAdj = 0;
        break;
      case 'oily':
        skinAdj = 0;
        baseLongevity += 1;
        break;
    }

    // Calculate total and clamp to 1-8
    let totalSprays = baseSpraysMid + occasionAdj + seasonAdj + skinAdj;
    totalSprays = Math.max(1, Math.min(8, totalSprays));

    // Ensure longevity stays reasonable
    baseLongevity = Math.max(1, Math.min(12, baseLongevity));

    // Determine spray locations based on count
    let sprayLocations: string;
    if (totalSprays <= 2) {
      sprayLocations = 'Neck (one side), one wrist';
    } else if (totalSprays <= 4) {
      sprayLocations = 'Both sides of neck, both wrists';
    } else if (totalSprays <= 6) {
      sprayLocations = 'Both sides of neck, both wrists, chest';
    } else {
      sprayLocations = 'Both sides of neck, both wrists, chest, behind ears';
    }

    // Build tips string
    let tips = occasionNote;
    if (skinType === 'dry') {
      tips += ' Apply unscented moisturizer before spraying to help the scent last longer.';
    }
    if (season === 'summer') {
      tips += ' Avoid rubbing your wrists together; it breaks down the top notes.';
    }

    return {
      recommended_sprays: `${totalSprays} sprays`,
      spray_locations: sprayLocations,
      longevity_hours: `${baseLongevity} - ${baseLongevity + 2}`,
      dos_and_donts: tips,
    };
  },
  supportingContent: {
    intro:
      'How many sprays of cologne should you use? The difference between smelling great and clearing a room comes down to spray count. This guide calculates the ideal number of sprays based on your fragrance concentration, occasion, season, and skin type. Not sure which cologne to wear? Take our <a href="/fragrance-finder">Fragrance Finder</a> quiz first.',
    howToUse:
      'Select your fragrance concentration (check the bottle label), occasion, season, and skin type. The calculator tells you exactly how many sprays and where to place them. To see how long your bottle will last at this rate, run it through our <a href="/cologne-bottle-lifespan-calculator">Cologne Bottle Lifespan Calculator</a>.',
    faq: [
      {
        question: 'What are pulse points and why should I spray there?',
        answer:
          '<a href="https://en.wikipedia.org/wiki/Pulse_point" target="_blank" rel="noopener">Pulse points</a> are areas where blood vessels sit close to the skin, generating warmth that diffuses fragrance. The main pulse points are the neck, inner wrists, chest, and behind the ears. Spraying here lets your body heat naturally project the scent. The neck and chest are most effective for people nearby.',
      },
      {
        question: 'Can I reapply cologne during the day?',
        answer:
          'Yes, but be strategic. EDT and EDC concentrations are designed for reapplication after 2-4 hours. Carry a travel atomizer for a midday refresh with 1-2 sprays. Do not reapply EDP or Parfum unless the scent has completely faded - nose blindness may fool you. Our <a href="/cologne-sprays-per-ml-converter">Sprays per ML Converter</a> helps you plan travel atomizer refills.',
      },
      {
        question: 'Does layering fragrances change how many sprays I need?',
        answer:
          'Layering with scented body wash, deodorant, or balm amplifies overall presence, so reduce your spray count by 1-2. Stick to the same fragrance family to avoid clashing. If you use a strongly scented deodorant, count that as replacing one spray location. Our <a href="/fragrance-finder">Fragrance Finder</a> helps you pick scents in compatible families.',
      },
    ],
    relatedTools: [
      'cologne-bottle-lifespan-calculator',
      'cologne-sprays-per-ml-converter',
      'fragrance-finder',
      'skincare-routine-builder',
    ],
  },
};
