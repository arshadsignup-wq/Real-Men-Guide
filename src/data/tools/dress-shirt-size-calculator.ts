import type { CalculatorConfig } from '@/lib/types';

export const dressShirtSizeCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'neck_circumference',
      label: 'Neck Circumference (inches)',
      type: 'number',
      placeholder: 'e.g. 16',
      min: 13,
      max: 20,
      step: 0.25,
      unit: 'inches',
      helpText: 'Measure around the base of your neck where a collar sits, then add 0.5 inches for comfort.',
    },
    {
      id: 'arm_length',
      label: 'Arm Length (inches)',
      type: 'number',
      placeholder: 'e.g. 34',
      min: 28,
      max: 40,
      step: 0.5,
      unit: 'inches',
      helpText: 'Measure from the center back of your neck, across the shoulder, down to your wrist bone.',
    },
    {
      id: 'chest',
      label: 'Chest Circumference (inches)',
      type: 'number',
      placeholder: 'e.g. 42',
      min: 34,
      max: 54,
      step: 1,
      unit: 'inches',
      helpText: 'Measure around the fullest part of your chest, keeping the tape level.',
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
      ],
      helpText: 'This determines the shirt fit recommendation based on your body type.',
    },
  ],
  outputs: [
    {
      id: 'neck_size',
      label: 'Neck Size',
      highlight: true,
      description: 'Your dress shirt neck size.',
    },
    {
      id: 'sleeve_length',
      label: 'Sleeve Length',
      description: 'Your dress shirt sleeve length.',
    },
    {
      id: 'recommended_fit',
      label: 'Recommended Fit',
      description: 'The best shirt fit for your build.',
    },
    {
      id: 'general_size',
      label: 'General Size (S/M/L/XL)',
      description: 'Your approximate letter size if the brand uses general sizing.',
    },
    {
      id: 'collar_style_tip',
      label: 'Collar Style Tip',
      description: 'Which collar style works best based on your neck size.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const neckCircumference = Number(inputs.neck_circumference);
    const armLength = Number(inputs.arm_length);
    const chest = Number(inputs.chest);
    const build = String(inputs.build);

    if (!neckCircumference || !armLength || !chest) {
      return {
        neck_size: '-',
        sleeve_length: '-',
        recommended_fit: '-',
        general_size: '-',
        collar_style_tip: 'Enter your measurements above.',
      };
    }

    // Step 1: Calculate neck size (round to nearest 0.5")
    const neckSize = Math.round(neckCircumference * 2) / 2;

    // Step 2: Calculate sleeve length (round to nearest inch)
    const sleeveLength = Math.round(armLength);

    // Step 3: Determine recommended fit based on build and chest
    let recommendedFit: string;
    let fitExplanation: string;
    switch (build) {
      case 'slim':
        recommendedFit = 'Slim Fit';
        fitExplanation = `A slim fit shirt with chest allowance of about ${chest + 2}" will follow your body contour without excess fabric. Look for darted backs and higher armholes.`;
        break;
      case 'athletic':
        recommendedFit = 'Athletic Fit';
        fitExplanation = `An athletic fit with about ${chest + 3}" chest allowance accommodates broader shoulders while tapering through the waist. Brands like Charles Tyrwhitt and Bonobos offer dedicated athletic cuts.`;
        break;
      case 'regular':
      default:
        recommendedFit = 'Regular Fit';
        fitExplanation = `A regular fit with about ${chest + 4}" chest allowance gives you comfortable room through the body. This is the most widely available cut.`;
        break;
    }

    // Step 4: Determine general letter size from neck measurement
    let generalSize: string;
    if (neckSize <= 14) {
      generalSize = 'S';
    } else if (neckSize <= 15) {
      generalSize = 'M';
    } else if (neckSize <= 16.5) {
      generalSize = 'L';
    } else if (neckSize <= 17.5) {
      generalSize = 'XL';
    } else {
      generalSize = 'XXL';
    }

    // Step 5: Collar style recommendation based on neck and build
    let collarStyleTip: string;
    if (neckSize <= 15) {
      collarStyleTip =
        'With a slimmer neck, a spread collar or cutaway collar adds visual width and balances your proportions. These also work well with wider tie knots like the Windsor.';
    } else if (neckSize <= 16.5) {
      collarStyleTip =
        'A semi-spread collar is your most versatile option. It works with or without a tie and flatters medium-proportion faces and necks. This is the safest all-around choice.';
    } else {
      collarStyleTip =
        'With a larger neck, a point collar or button-down collar creates a sleeker vertical line that elongates your appearance. Avoid very wide spread collars that can make the neck area look broader.';
    }

    return {
      neck_size: `${neckSize}"`,
      sleeve_length: `${sleeveLength}"`,
      recommended_fit: `${recommendedFit} - ${fitExplanation}`,
      general_size: generalSize,
      collar_style_tip: collarStyleTip,
    };
  },
  supportingContent: {
    intro:
      'A well-fitting dress shirt is the foundation of any sharp outfit, but getting the right size is more than picking S, M, or L off a rack. Proper dress shirts are sized by neck and sleeve measurements, not generic letter sizes. This calculator converts your body measurements into precise dress shirt sizing with fit recommendations tailored to your build.',
    howToUse:
      'Measure your neck circumference at the base (where a collar sits), your arm length from center-back of your neck across the shoulder and down to the wrist bone, and your chest at the widest point. Enter these measurements in inches and select your build type. The calculator will provide your exact neck size, sleeve length, recommended fit style, and general letter size for brands that use generic sizing.',
    faq: [
      {
        question: 'How do I properly measure my neck for a dress shirt?',
        answer:
          'Wrap a soft measuring tape around the base of your neck where a shirt collar would sit, typically just below the Adam\'s apple. Keep the tape snug but not tight. You should be able to fit two fingers between the tape and your neck. Round up to the nearest half inch. Many men make the mistake of measuring too tightly, which leads to an uncomfortable collar that restricts movement and looks strained when buttoned.',
      },
      {
        question: 'What is the difference between slim fit, regular fit, and fitted shirts?',
        answer:
          'Slim fit shirts are cut close to the body with minimal extra fabric, typically 2 inches of chest ease, and feature higher armholes and tapered sides. Regular fit shirts have about 4 inches of ease through the chest and a straighter cut from chest to hem. Fitted (or tailored) shirts fall between the two with about 3 inches of ease and light tapering. Athletic fit is similar to fitted but adds more room in the shoulders and chest while tapering aggressively at the waist.',
      },
      {
        question: 'Are non-iron shirts worth it?',
        answer:
          'Non-iron shirts are treated with a chemical finish (usually formaldehyde-based) that prevents wrinkles. They are great for travel and low-maintenance wardrobes. The tradeoff is a slightly stiffer feel compared to untreated cotton. Higher-end non-iron shirts from brands like Brooks Brothers and Charles Tyrwhitt use better treatments that feel more natural. For a balance, look for "wrinkle-resistant" rather than "non-iron" which uses a lighter treatment that still reduces ironing by about 80%.',
      },
    ],
    relatedTools: [
      'suit-size-estimator',
      'belt-size-finder',
      'shoe-size-converter',
      'outfit-builder',
      'capsule-wardrobe-builder',
    ],
  },
};
