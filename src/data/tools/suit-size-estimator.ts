import type { CalculatorConfig } from '@/lib/types';

export const suitSizeEstimatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'chest',
      label: 'Chest Circumference (inches)',
      type: 'number',
      placeholder: 'e.g. 42',
      min: 34,
      max: 54,
      step: 1,
      unit: 'inches',
      helpText: 'Measure around the fullest part of your chest under your arms, keeping the tape level.',
    },
    {
      id: 'waist',
      label: 'Waist Circumference (inches)',
      type: 'number',
      placeholder: 'e.g. 34',
      min: 28,
      max: 48,
      step: 1,
      unit: 'inches',
      helpText: 'Measure around your natural waist at the narrowest point, usually at or near the navel.',
    },
    {
      id: 'height',
      label: 'Height (inches)',
      type: 'number',
      placeholder: 'e.g. 70',
      min: 60,
      max: 80,
      step: 1,
      unit: 'inches',
      helpText: 'Your height in inches. For reference, 5\'10" = 70 inches.',
    },
    {
      id: 'build',
      label: 'Build',
      type: 'select',
      defaultValue: 'regular',
      options: [
        { label: 'Slim', value: 'slim' },
        { label: 'Regular', value: 'regular' },
        { label: 'Athletic (broad shoulders, narrow waist)', value: 'athletic' },
        { label: 'Stocky (broad, shorter torso)', value: 'stocky' },
      ],
      helpText: 'Your general body type helps determine the best suit silhouette.',
    },
  ],
  outputs: [
    {
      id: 'jacket_size',
      label: 'Jacket Size',
      highlight: true,
      description: 'Your recommended suit jacket size.',
    },
    {
      id: 'suit_drop',
      label: 'Suit Drop',
      description: 'The difference between your chest and waist, which determines suit cut.',
    },
    {
      id: 'jacket_length',
      label: 'Jacket Length',
      description: 'Short, Regular, or Long based on your height.',
    },
    {
      id: 'trouser_size',
      label: 'Estimated Trouser Size',
      description: 'Approximate trouser waist size for the suit.',
    },
    {
      id: 'fit_recommendation',
      label: 'Fit Recommendation',
      description: 'Which suit style and silhouette will look best on your body type.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const chest = Number(inputs.chest);
    const waist = Number(inputs.waist);
    const height = Number(inputs.height);
    const build = String(inputs.build);

    if (!chest || !waist || !height) {
      return {
        jacket_size: '-',
        suit_drop: '-',
        jacket_length: '-',
        trouser_size: '-',
        fit_recommendation: 'Enter your measurements above.',
      };
    }

    // Step 1: Jacket size = chest measurement rounded to nearest even number
    const jacketSize = Math.round(chest / 2) * 2;

    // Step 2: Calculate drop (chest - waist)
    const drop = chest - waist;

    // Classify the drop
    let dropClassification: string;
    if (drop >= 7) {
      dropClassification = 'Athletic';
    } else if (drop >= 6) {
      dropClassification = 'Regular';
    } else if (drop >= 4) {
      dropClassification = 'Portly';
    } else {
      dropClassification = 'Executive / Full';
    }

    // Step 3: Determine jacket length based on height
    // height in inches: short < 67" (5'7"), regular 67-72" (5'7"-6'), long > 72" (6')
    let jacketLength: string;
    if (height < 67) {
      jacketLength = 'Short';
    } else if (height <= 72) {
      jacketLength = 'Regular';
    } else {
      jacketLength = 'Long';
    }

    // Step 4: Estimate trouser size
    // Standard suit trousers: typically jacket size - 6 for regular drop
    // But we use actual waist measurement with a small adjustment based on build
    let trouserAdj = 0;
    switch (build) {
      case 'slim':
        trouserAdj = 0;
        break;
      case 'athletic':
        trouserAdj = 0;
        break;
      case 'stocky':
        trouserAdj = 1;
        break;
      case 'regular':
      default:
        trouserAdj = 0;
        break;
    }
    const trouserSize = Math.round((waist + trouserAdj) / 2) * 2;

    // Step 5: Fit recommendation based on build
    let fitRecommendation: string;
    switch (build) {
      case 'slim':
        fitRecommendation =
          `Slim fit suit recommended. Look for a jacket with a high button stance, narrow lapels (2.5-3"), suppressed waist, and slim trousers with little to no break. ` +
          `With your ${jacketSize}${jacketLength.charAt(0)} jacket and ${dropClassification.toLowerCase()} drop, brands like SuitSupply (Havana or Lazio), J.Crew Ludlow, and Theory offer excellent slim cuts.`;
        break;
      case 'athletic':
        fitRecommendation =
          `Athletic fit suit recommended. Your ${drop}" drop means you need extra room in the chest and shoulders with a tapered waist. ` +
          `Standard suits will gap at the waist or pull at the shoulders. Look for brands that offer athletic cuts like SuitSupply (Lazio), Bonobos, or Indochino custom. ` +
          `A structured shoulder with a natural waist suppression will highlight your V-shape.`;
        break;
      case 'stocky':
        fitRecommendation =
          `A regular or classic fit in a ${jacketLength.toLowerCase()} length will give you the most comfortable proportions. ` +
          `Avoid super slim fits that restrict movement. Look for a two-button jacket (elongates the torso), medium-width lapels (3-3.5"), and flat-front trousers. ` +
          `Vertical details like pinstripes and a well-defined shoulder line create a longer, leaner silhouette. Consider getting the jacket taken in slightly at the waist for structure.`;
        break;
      case 'regular':
      default:
        fitRecommendation =
          `A modern regular fit will work well for your proportions. Your ${drop}" drop is ${dropClassification.toLowerCase()}, meaning most off-the-rack suits should fit you reasonably well. ` +
          `Look for a two-button jacket with medium lapels and flat-front or single-pleat trousers. ` +
          `For the best results, buy off the rack and budget an extra $75-150 for tailoring the jacket waist, sleeve length, and trouser hem.`;
        break;
    }

    // Format full jacket size string
    const jacketSizeStr = `${jacketSize}${jacketLength.charAt(0)}`;

    return {
      jacket_size: jacketSizeStr,
      suit_drop: `${drop}" (${dropClassification})`,
      jacket_length: jacketLength,
      trouser_size: `${trouserSize}"`,
      fit_recommendation: fitRecommendation,
    };
  },
  supportingContent: {
    intro:
      'Buying a suit without knowing your size is an expensive mistake. Suit sizing revolves around your chest measurement, the drop between your chest and waist, and your height, not generic S/M/L labels. This estimator translates your body measurements into a specific jacket size, length, and fit recommendation so you walk into any store knowing exactly what to try on.',
    howToUse:
      'Measure your chest at the widest point (around the nipple line), your waist at the narrowest point, and your height in inches. Select the build that best describes your body type. The calculator will recommend a jacket size with length code (e.g. 42R for 42 Regular), your suit drop category, estimated trouser size, and a detailed fit recommendation based on your proportions.',
    faq: [
      {
        question: 'What is the difference between off-the-rack and tailored suits?',
        answer:
          'Off-the-rack (OTR) suits are made in standard sizes and available immediately. Made-to-measure (MTM) suits start from a standard pattern but are adjusted to your measurements (4-6 weeks lead time, typically $400-800). Bespoke suits are built from scratch to your exact body (8-12 weeks, $2000+). For most men, the best value is buying OTR in the right size and paying $75-150 for alterations: hemming trousers, adjusting jacket sleeves, and taking in the waist. This gets you 90% of a custom look at a fraction of the price.',
      },
      {
        question: 'What is suit drop and why does it matter?',
        answer:
          'Suit drop is the difference between your chest and trouser waist measurement. A drop of 6 is considered "regular" and is what most OTR suits are built around (e.g. a size 42 jacket comes with size 36 trousers). If your drop is 7 or higher (athletic build), the included trousers will be too big at the waist. If your drop is 4 or less, the trousers will be too tight. Knowing your drop tells you whether standard suits will fit or whether you need separates (buying jacket and trousers in different sizes).',
      },
      {
        question: 'What should I know before buying my first suit?',
        answer:
          'Start with a navy or charcoal suit in a solid color or subtle pattern. Two-button, single-breasted is the most versatile style. Prioritize fit over fabric or brand: a well-fitting $400 suit looks better than a poorly fitting $2000 suit. Make sure the jacket shoulders align with your natural shoulder line (this cannot be altered), and budget for tailoring. Have the jacket waist taken in, sleeves adjusted to show about 0.5" of shirt cuff, and trousers hemmed to a slight break. Wool or wool-blend fabrics drape best and work year-round.',
      },
    ],
    relatedTools: [
      'dress-shirt-size-calculator',
      'belt-size-finder',
      'shoe-size-converter',
      'outfit-builder',
      'capsule-wardrobe-builder',
      'color-season-analyzer',
    ],
  },
};
