import type { CalculatorConfig } from '@/lib/types';

export const ringBraceletSizeToolConfig: CalculatorConfig = {
  fields: [
    {
      id: 'measurement_type',
      label: 'What Are You Sizing?',
      type: 'select',
      defaultValue: 'ring',
      options: [
        { label: 'Ring', value: 'ring' },
        { label: 'Bracelet', value: 'bracelet' },
      ],
      helpText: 'Select whether you are measuring for a ring or a bracelet.',
    },
    {
      id: 'circumference_mm',
      label: 'Circumference (mm)',
      type: 'number',
      placeholder: 'e.g. 60',
      unit: 'mm',
      min: 40,
      max: 230,
      step: 0.5,
      helpText: 'For rings: measure around your finger (typically 40-80mm). For bracelets: measure around your wrist (typically 140-230mm).',
    },
    {
      id: 'fit_preference',
      label: 'Fit Preference',
      type: 'select',
      defaultValue: 'comfort',
      options: [
        { label: 'Snug', value: 'snug' },
        { label: 'Comfort', value: 'comfort' },
        { label: 'Loose', value: 'loose' },
      ],
      helpText: 'Snug stays put but is tight. Comfort is the standard fit. Loose slides freely.',
    },
  ],
  outputs: [
    {
      id: 'size',
      label: 'Recommended Size',
      highlight: true,
      description: 'Your recommended size based on your measurement and fit preference.',
    },
    {
      id: 'us_size',
      label: 'US Size',
      description: 'Size in the US standard system.',
    },
    {
      id: 'uk_size',
      label: 'UK Size',
      description: 'Size in the UK letter system (rings only).',
    },
    {
      id: 'eu_size',
      label: 'EU Size',
      description: 'Size in the European system.',
    },
    {
      id: 'inner_diameter_mm',
      label: 'Inner Diameter',
      unit: 'mm',
      description: 'The inner diameter of the ring or bracelet.',
    },
    {
      id: 'fit_recommendation',
      label: 'Fit Recommendation',
      description: 'Advice on getting the best fit.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const type = String(inputs.measurement_type);
    const circumference = Number(inputs.circumference_mm);
    const fit = String(inputs.fit_preference);

    if (!circumference || circumference <= 0) {
      return {
        size: 'Enter a valid measurement',
        us_size: '-',
        uk_size: '-',
        eu_size: '-',
        inner_diameter_mm: '-',
        fit_recommendation: '-',
      };
    }

    // Apply fit adjustment to circumference
    let adjustedCircumference = circumference;
    if (fit === 'snug') {
      adjustedCircumference = circumference - 1;
    } else if (fit === 'loose') {
      adjustedCircumference = circumference + 1.5;
    }

    const innerDiameter = Math.round((adjustedCircumference / Math.PI) * 10) / 10;

    if (type === 'ring') {
      // US ring size formula: (circumference_mm - 36.5) / 2.55
      const rawUsSize = (adjustedCircumference - 36.5) / 2.55;
      const usSize = Math.round(rawUsSize * 2) / 2; // Round to nearest 0.5

      // Clamp to valid range
      const clampedUsSize = Math.max(3, Math.min(16, usSize));

      // EU size is based on circumference in mm (rounded)
      const euSize = Math.round(adjustedCircumference);

      // UK letter size mapping from US size
      // US 3=F, 4=H, 5=J, 6=L, 7=N, 8=P, 9=R, 10=T, 11=V, 12=X, 13=Z
      const ukLetters: Record<number, string> = {
        3: 'F', 3.5: 'G', 4: 'H', 4.5: 'I', 5: 'J', 5.5: 'K',
        6: 'L', 6.5: 'M', 7: 'N', 7.5: 'O', 8: 'P', 8.5: 'Q',
        9: 'R', 9.5: 'S', 10: 'T', 10.5: 'U', 11: 'V', 11.5: 'W',
        12: 'X', 12.5: 'Y', 13: 'Z',
      };
      const ukSize = ukLetters[clampedUsSize] || `~${clampedUsSize}`;

      let fitRec: string;
      if (fit === 'snug') {
        fitRec = 'A snug fit is best for thin, lightweight bands. Be aware that fingers swell in heat and after exercise, so this fit may feel tight at times. Consider sizing up half a size if the ring has a wide band (over 6mm).';
      } else if (fit === 'loose') {
        fitRec = 'A loose fit gives freedom of movement but increases the risk of losing the ring. Best for casual or fashion rings you only wear occasionally. Not recommended for engagement or wedding bands.';
      } else {
        fitRec = 'Comfort fit is the standard choice for everyday rings. The ring should slide over your knuckle with slight resistance and sit without spinning. Wide bands (over 6mm) often need a half size up from your comfort measurement.';
      }

      return {
        size: `US ${clampedUsSize}`,
        us_size: `${clampedUsSize}`,
        uk_size: ukSize,
        eu_size: `${euSize}`,
        inner_diameter_mm: `${innerDiameter} mm`,
        fit_recommendation: fitRec,
      };
    } else {
      // Bracelet sizing
      const sizeInches = adjustedCircumference / 25.4;

      // Add comfort allowance
      let comfortAdd = 0.75; // default comfort
      if (fit === 'snug') {
        comfortAdd = 0.5;
      } else if (fit === 'loose') {
        comfortAdd = 1.0;
      }

      const braceletSizeInches = sizeInches + comfortAdd;
      const braceletSizeMm = Math.round(braceletSizeInches * 25.4);
      const braceletSizeInchesRounded = Math.round(braceletSizeInches * 4) / 4;

      // Determine generic bracelet size
      let genericSize: string;
      if (braceletSizeInchesRounded <= 7) {
        genericSize = 'S';
      } else if (braceletSizeInchesRounded <= 7.75) {
        genericSize = 'M';
      } else if (braceletSizeInchesRounded <= 8.5) {
        genericSize = 'L';
      } else {
        genericSize = 'XL';
      }

      let fitRec: string;
      if (fit === 'snug') {
        fitRec = 'A snug bracelet stays in place and works well for chain-link or thin styles. It should not leave marks on your skin. If you are between sizes, go up a quarter inch.';
      } else if (fit === 'loose') {
        fitRec = 'A loose fit lets the bracelet move freely on your wrist. Best for bangles and cuff styles. Make sure it cannot slide off over your hand.';
      } else {
        fitRec = 'Comfort fit allows the bracelet to move slightly on your wrist without sliding. You should be able to fit one finger between the bracelet and your skin. This is the standard fit for most styles.';
      }

      return {
        size: `${braceletSizeInchesRounded}" (${genericSize})`,
        us_size: `${braceletSizeInchesRounded}"`,
        uk_size: 'N/A (bracelets)',
        eu_size: `${braceletSizeMm} mm`,
        inner_diameter_mm: `${innerDiameter} mm`,
        fit_recommendation: fitRec,
      };
    }
  },
  supportingContent: {
    intro:
      'Getting the right men\'s ring size or bracelet size matters - too tight is uncomfortable, too loose risks losing it. This tool converts your finger or wrist circumference into US, UK, and EU sizes with fit adjustments for online ordering. Sizing other accessories too? Our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a> and <a href="/hat-size-calculator">Hat Size Calculator</a> round out your accessory measurements.',
    howToUse:
      'Select ring or bracelet, measure your circumference in millimeters with a flexible tape or paper strip, choose your fit preference, and get sizes in every major system. For rings, measure at the end of the day when fingers are largest. For complete outfit accessories, check our <a href="/outfit-builder">Outfit Builder</a>.',
    faq: [
      {
        question: 'How do I measure my ring size with string at home?',
        answer:
          'Wrap a non-stretchy string or paper strip around the finger base, just below the knuckle. Mark the overlap, lay it flat, and measure in millimeters. Measure at the end of the day when fingers are largest, and measure three times to confirm. This at-home method is accurate within half a US size. <a href="https://en.wikipedia.org/wiki/Ring_size" target="_blank" rel="noopener">Ring sizing standards</a> vary by country, which is why this tool converts across systems.',
      },
      {
        question: 'Does a wide band ring need a different size?',
        answer:
          'Yes. Bands wider than 6mm feel tighter because they cover more finger surface. Go up half a US size for 6-8mm bands and a full size for bands over 8mm. This applies to wedding bands, signet rings, and chunky fashion rings. Our <a href="/hat-size-calculator">Hat Size Calculator</a> uses a similar approach of adjusting for material and style.',
      },
      {
        question: 'Can rings be resized, and how much does it cost?',
        answer:
          'Most gold, silver, and platinum rings can be resized 1-2 sizes for $30-100 depending on metal and complexity. Titanium, tungsten, and ceramic rings generally cannot be resized. If ordering a hard-to-resize material, measure carefully and consider comfort fit. For other accessory sizing, try our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a>.',
      },
    ],
    relatedTools: [
      'glasses-frame-size-calculator',
      'hat-size-calculator',
      'outfit-builder',
    ],
  },
};
