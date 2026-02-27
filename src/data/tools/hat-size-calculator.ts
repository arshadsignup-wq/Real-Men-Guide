import type { CalculatorConfig } from '@/lib/types';

export const hatSizeCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'head_circumference',
      label: 'Head Circumference',
      type: 'number',
      placeholder: 'e.g. 22.5',
      unit: 'inches',
      min: 19,
      max: 26,
      step: 0.125,
      helpText: 'Measure around the widest part of your head, about 1 inch above your eyebrows and ears.',
    },
    {
      id: 'measurement_unit',
      label: 'Measurement Unit',
      type: 'select',
      defaultValue: 'inches',
      options: [
        { label: 'Inches', value: 'inches' },
        { label: 'Centimeters', value: 'cm' },
      ],
      helpText: 'Select the unit you measured in.',
    },
  ],
  outputs: [
    {
      id: 'us_hat_size',
      label: 'US/UK Hat Size',
      highlight: true,
      description: 'Your fitted hat size in the US/UK system.',
    },
    {
      id: 'generic_size',
      label: 'Generic Size',
      description: 'Standard S/M/L/XL sizing for adjustable hats.',
    },
    {
      id: 'circumference_cm',
      label: 'Circumference (cm)',
      unit: 'cm',
      description: 'Your head circumference in centimeters (also the EU/metric hat size).',
    },
    {
      id: 'circumference_inches',
      label: 'Circumference (inches)',
      unit: 'in',
      description: 'Your head circumference in inches.',
    },
    {
      id: 'fit_tip',
      label: 'Fit Tip',
      description: 'Advice on getting the right hat fit.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const rawCircumference = Number(inputs.head_circumference);
    const unit = String(inputs.measurement_unit);

    if (!rawCircumference || rawCircumference <= 0) {
      return {
        us_hat_size: 'Enter a valid measurement',
        generic_size: '-',
        circumference_cm: '-',
        circumference_inches: '-',
        fit_tip: '-',
      };
    }

    // Convert to inches if cm was provided
    let circumInches: number;
    if (unit === 'cm') {
      circumInches = rawCircumference / 2.54;
    } else {
      circumInches = rawCircumference;
    }

    const circumCm = circumInches * 2.54;

    // US hat size = circumference in inches / pi
    const rawHatSize = circumInches / 3.14159;

    // Round to nearest 1/8
    const hatSizeEighths = Math.round(rawHatSize * 8) / 8;

    // Format the hat size as a fraction string
    const wholeNumber = Math.floor(hatSizeEighths);
    const fraction = hatSizeEighths - wholeNumber;
    let hatSizeStr: string;
    if (fraction === 0) {
      hatSizeStr = `${wholeNumber}`;
    } else if (fraction === 0.125) {
      hatSizeStr = `${wholeNumber}-1/8`;
    } else if (fraction === 0.25) {
      hatSizeStr = `${wholeNumber}-1/4`;
    } else if (fraction === 0.375) {
      hatSizeStr = `${wholeNumber}-3/8`;
    } else if (fraction === 0.5) {
      hatSizeStr = `${wholeNumber}-1/2`;
    } else if (fraction === 0.625) {
      hatSizeStr = `${wholeNumber}-5/8`;
    } else if (fraction === 0.75) {
      hatSizeStr = `${wholeNumber}-3/4`;
    } else if (fraction === 0.875) {
      hatSizeStr = `${wholeNumber}-7/8`;
    } else {
      hatSizeStr = `${hatSizeEighths}`;
    }

    // Determine generic size based on circumference in inches
    // Standard chart mapping
    let genericSize: string;
    if (circumInches < 21.25) {
      genericSize = 'S';
    } else if (circumInches < 22.25) {
      genericSize = 'M';
    } else if (circumInches < 23.25) {
      genericSize = 'L';
    } else if (circumInches < 24.25) {
      genericSize = 'XL';
    } else {
      genericSize = 'XXL';
    }

    // Fit tip based on size
    let fitTip: string;
    if (hatSizeEighths <= 6.75) {
      fitTip = 'You have a smaller head size. Fitted hats will give you the best look. Avoid oversized snapbacks that sit too high.';
    } else if (hatSizeEighths <= 7.25) {
      fitTip = 'You are in the most common hat size range. Most adjustable hats (snapback, strapback) in M/L will fit you well off the rack.';
    } else if (hatSizeEighths <= 7.5) {
      fitTip = 'You are in the large range. Look for fitted hats or adjustable styles with generous sizing. Flex-fit hats in L/XL work well.';
    } else {
      fitTip = 'You have a larger head size. Prioritize fitted hats in your exact size or look for XL/XXL adjustable options. Some brands like New Era offer extended sizes.';
    }

    return {
      us_hat_size: hatSizeStr,
      generic_size: genericSize,
      circumference_cm: `${Math.round(circumCm * 10) / 10} cm`,
      circumference_inches: `${Math.round(circumInches * 100) / 100}"`,
      fit_tip: fitTip,
    };
  },
  supportingContent: {
    intro:
      'Finding your hat size can be surprisingly tricky. A hat that is too tight gives you a headache; too loose and it blows off. This men\'s hat size calculator converts your head circumference into US, UK, and EU sizes plus the correct S/M/L/XL generic size. Buying a hat to match your face? Our <a href="/face-shape-analyzer">Face Shape Analyzer</a> helps you pick the most flattering hat styles too.',
    howToUse:
      'Measure around the widest part of your head about one inch above your eyebrows using a soft tape or string. Keep it snug but not tight. Enter the measurement in inches or centimeters. The calculator shows fitted hat size, generic size letter, and both metric and imperial circumferences. For glasses fit, try our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a> next.',
    faq: [
      {
        question: 'How do I measure my head for a hat?',
        answer:
          'Wrap a soft tape about one inch above your eyebrows and ears, crossing at the widest point on the back of your head. Keep it level and snug without squeezing. No tape? Use string, mark the overlap, and measure against a ruler. Measure twice for accuracy. This same measurement can help with our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a>.',
      },
      {
        question: 'Do hats break in and stretch over time?',
        answer:
          'Yes. Wool felt hats and fitted baseball caps stretch about a quarter size over the first few weeks. If between sizes, go smaller for wool and fitted caps. Straw and synthetic materials stretch less, so go larger for those. <a href="https://en.wikipedia.org/wiki/Baseball_cap" target="_blank" rel="noopener">Fitted baseball caps</a> from brands like New Era are sized in 1/8-inch increments for precision.',
      },
      {
        question: 'Should I buy an adjustable hat or a fitted hat?',
        answer:
          'Fitted hats give the cleanest look and are preferred for baseball caps and dress hats. Adjustable hats (snapback, strapback) offer flexibility for sizes between standard increments. If you wear a hat frequently, invest in fitted. For casual or occasional wear, adjustable is more practical. Our <a href="/outfit-builder">Outfit Builder</a> can suggest hat styles that match your overall look.',
      },
    ],
    relatedTools: [
      'glasses-frame-size-calculator',
      'face-shape-analyzer',
      'outfit-builder',
    ],
  },
};
