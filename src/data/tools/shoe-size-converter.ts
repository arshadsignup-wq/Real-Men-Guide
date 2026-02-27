import type { CalculatorConfig } from '@/lib/types';

export const shoeSizeConverterConfig: CalculatorConfig = {
  fields: [
    {
      id: 'size',
      label: 'Your Shoe Size',
      type: 'number',
      placeholder: 'e.g. 10',
      min: 1,
      max: 60,
      step: 0.5,
      helpText: 'Enter your shoe size in the source system you selected below.',
    },
    {
      id: 'source',
      label: 'Source Size System',
      type: 'select',
      defaultValue: 'us',
      options: [
        { label: 'US', value: 'us' },
        { label: 'UK', value: 'uk' },
        { label: 'EU', value: 'eu' },
        { label: 'CM (Mondopoint)', value: 'cm' },
      ],
      helpText: 'The sizing system your current size is in.',
    },
    {
      id: 'target',
      label: 'Convert To',
      type: 'select',
      defaultValue: 'eu',
      options: [
        { label: 'US', value: 'us' },
        { label: 'UK', value: 'uk' },
        { label: 'EU', value: 'eu' },
        { label: 'CM (Mondopoint)', value: 'cm' },
      ],
      helpText: 'The sizing system you want to convert to.',
    },
  ],
  outputs: [
    {
      id: 'convertedSize',
      label: 'Converted Size',
      highlight: true,
      description: 'Your shoe size in the target system.',
    },
    {
      id: 'usSize',
      label: 'US Size',
      description: 'Standard US men\'s shoe size.',
    },
    {
      id: 'ukSize',
      label: 'UK Size',
      description: 'Standard UK men\'s shoe size.',
    },
    {
      id: 'euSize',
      label: 'EU Size',
      description: 'Standard European shoe size.',
    },
    {
      id: 'cmSize',
      label: 'CM (Mondopoint)',
      unit: 'cm',
      description: 'Foot length in centimeters, used in Asian sizing.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const size = Number(inputs.size);
    const source = String(inputs.source);
    const target = String(inputs.target);

    if (!size || size <= 0) {
      return {
        convertedSize: 'Enter a valid size',
        usSize: '-',
        ukSize: '-',
        euSize: '-',
        cmSize: '-',
      };
    }

    // Step 1: Convert everything to US size as the intermediate
    let usSize: number;

    switch (source) {
      case 'us':
        usSize = size;
        break;
      case 'uk':
        // UK sizes are typically 0.5-1 size smaller than US
        usSize = size + 1;
        break;
      case 'eu':
        // EU to US: US = (EU - 33) * 1 approximately
        // Using the standard conversion: US = (EU - 31.5) / 1.5 (approximate)
        // More accurate: based on standard charts
        usSize = (size - 31.5) / 1.5;
        break;
      case 'cm':
        // CM to US: US = (CM - 18) / 0.847 approximately
        // Based on standard: US 7 = 25cm, US 10 = 28cm, etc.
        usSize = (size - 18.5) / 0.847;
        break;
      default:
        usSize = size;
    }

    // Round US size to nearest 0.5
    usSize = Math.round(usSize * 2) / 2;

    // Clamp US size to reasonable range (4-16)
    if (usSize < 4) usSize = 4;
    if (usSize > 16) usSize = 16;

    // Step 2: Convert from US to all other systems
    const ukSize = Math.round((usSize - 1) * 2) / 2;
    const euSize = Math.round((usSize * 1.5 + 31.5) * 2) / 2;
    const cmSize = Math.round((usSize * 0.847 + 18.5) * 10) / 10;

    // Step 3: Get the target value
    let convertedSize: number;
    let convertedLabel: string;

    switch (target) {
      case 'us':
        convertedSize = usSize;
        convertedLabel = `US ${usSize}`;
        break;
      case 'uk':
        convertedSize = ukSize;
        convertedLabel = `UK ${ukSize}`;
        break;
      case 'eu':
        convertedSize = euSize;
        convertedLabel = `EU ${euSize}`;
        break;
      case 'cm':
        convertedSize = cmSize;
        convertedLabel = `${cmSize} cm`;
        break;
      default:
        convertedSize = usSize;
        convertedLabel = `US ${usSize}`;
    }

    return {
      convertedSize: convertedLabel,
      usSize: `US ${usSize}`,
      ukSize: `UK ${ukSize}`,
      euSize: `EU ${euSize}`,
      cmSize: `${cmSize} cm`,
    };
  },
  supportingContent: {
    intro:
      'Men\'s shoe sizes vary wildly between countries. A US 10 is not the same as a UK 10 or an EU 10. This shoe size converter instantly translates between the US, UK, European, and CM (Mondopoint) systems so you can order shoes from anywhere in the world with confidence. Building a wardrobe? Our <a href="/capsule-wardrobe-builder">Capsule Wardrobe Builder</a> helps you pick the right footwear for your style.',
    howToUse:
      'Enter your current shoe size, select the system it is in (US, UK, EU, or CM), and choose the target system. The calculator shows your converted size plus equivalents in all four systems. For the most accurate fit, measure your foot in CM and convert from there. Pair this with our <a href="/outfit-builder">Outfit Builder</a> to match shoes to outfits.',
    faq: [
      {
        question: 'Why do shoe sizes differ between brands?',
        answer:
          'Even within the same sizing system, brands use different <a href="https://en.wikipedia.org/wiki/Last" target="_blank" rel="noopener">lasts (foot molds)</a> to build their shoes. Nike tends to run small and narrow, Adidas runs true to size but slightly wide, and New Balance runs half a size large. Always check brand-specific size guides in addition to converting sizes. When in doubt, order a half size up.',
      },
      {
        question: 'What is the most accurate way to measure my shoe size?',
        answer:
          'Trace your foot on paper while standing, mark the longest point from heel to toe, and measure in centimeters. Do this for both feet in the afternoon when feet are largest. Use the larger measurement and convert from CM for the most accurate result. Our <a href="/belt-size-finder">Belt Size Finder</a> uses a similar measurement-first approach for belts.',
      },
      {
        question: 'Should I size up or down if I am between sizes?',
        answer:
          'Almost always size up. A slightly large shoe can be adjusted with insoles or thicker socks, but a too-small shoe causes blisters and discomfort. This is especially true for dress shoes and boots, which stretch less than sneakers. For width concerns, look for brands offering wide (W) options.',
      },
    ],
    relatedTools: [
      'outfit-builder',
      'capsule-wardrobe-builder',
      'color-season-analyzer',
    ],
  },
};
