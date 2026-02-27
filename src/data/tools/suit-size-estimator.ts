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
      'Buying a men\'s suit without knowing your size is an expensive mistake. Suit sizing revolves around chest measurement, the drop between chest and waist, and height - not S/M/L labels. This suit size estimator translates your measurements into a specific jacket size, length, and fit recommendation. Pair it with our <a href="/dress-shirt-size-calculator">Dress Shirt Size Calculator</a> for the complete formalwear package.',
    howToUse:
      'Measure your chest at the widest point, waist at the narrowest, and height in inches. Select your build type. The calculator recommends jacket size with length code (e.g. 42R), suit drop, trouser size, and detailed fit advice. Use our <a href="/belt-size-finder">Belt Size Finder</a> and <a href="/shoe-size-converter">Shoe Size Converter</a> to complete your formalwear sizing.',
    faq: [
      {
        question: 'What is the difference between off-the-rack and tailored suits?',
        answer:
          'Off-the-rack suits come in standard sizes. Made-to-measure adjusts a pattern to your body ($400-800). <a href="https://en.wikipedia.org/wiki/Bespoke_tailoring" target="_blank" rel="noopener">Bespoke</a> is built from scratch ($2000+). For most men, the best value is buying OTR in the right size and paying $75-150 for alterations. Our <a href="/dress-shirt-size-calculator">Dress Shirt Size Calculator</a> helps you size the shirt underneath.',
      },
      {
        question: 'What is suit drop and why does it matter?',
        answer:
          'Suit drop is the difference between chest and waist measurements. A drop of 6 is "regular" - what most OTR suits are built around. A drop of 7+ means included trousers will be too big at the waist; 4 or less means too tight. Knowing your drop tells you whether standard suits fit or if you need separates. Our <a href="/color-season-analyzer">Color Season Analyzer</a> helps you pick the most flattering suit color.',
      },
      {
        question: 'What should I know before buying my first suit?',
        answer:
          'Start with navy or charcoal in a solid color. Two-button, single-breasted is most versatile. Prioritize fit over brand: a well-fitting $400 suit beats a poorly fitting $2000 one. Budget for tailoring ($75-150) to adjust the waist, sleeves, and trouser hem. Wool or wool-blend fabrics drape best year-round. Our <a href="/outfit-builder">Outfit Builder</a> can help you plan suit-based looks for events.',
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
