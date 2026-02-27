import type { CalculatorConfig } from '@/lib/types';

export const glassesFrameSizeCalculatorConfig: CalculatorConfig = {
  fields: [
    {
      id: 'face_width_mm',
      label: 'Face Width (mm)',
      type: 'number',
      placeholder: 'e.g. 140',
      unit: 'mm',
      min: 120,
      max: 160,
      step: 1,
      helpText: 'Measure from temple to temple across the widest part of your face. Average is about 135-145mm.',
    },
    {
      id: 'nose_bridge_width',
      label: 'Nose Bridge Width',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Narrow', value: 'narrow' },
        { label: 'Medium', value: 'medium' },
        { label: 'Wide', value: 'wide' },
      ],
      helpText: 'Look at the bridge of your nose between your eyes. Narrow bridges are common on thinner faces.',
    },
    {
      id: 'head_size',
      label: 'Head Size',
      type: 'select',
      defaultValue: 'medium',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      helpText: 'This determines temple arm length. If hats usually feel tight, select Large.',
    },
  ],
  outputs: [
    {
      id: 'lens_width',
      label: 'Lens Width',
      unit: 'mm',
      highlight: true,
      description: 'The recommended lens width for your frames.',
    },
    {
      id: 'bridge_width',
      label: 'Bridge Width',
      unit: 'mm',
      description: 'The recommended nose bridge width for your frames.',
    },
    {
      id: 'temple_length',
      label: 'Temple Length',
      unit: 'mm',
      description: 'The recommended temple arm length for your frames.',
    },
    {
      id: 'frame_size_string',
      label: 'Frame Size',
      description: 'Your frame measurements in standard notation (lens-bridge-temple).',
    },
    {
      id: 'frame_category',
      label: 'Frame Category',
      description: 'Your general frame size category for easy shopping.',
    },
    {
      id: 'buying_tip',
      label: 'Buying Tip',
      description: 'Advice for finding the right frames.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const faceWidth = Number(inputs.face_width_mm);
    const bridgeCategory = String(inputs.nose_bridge_width);
    const headSize = String(inputs.head_size);

    if (!faceWidth || faceWidth <= 0) {
      return {
        lens_width: 'Enter a valid face width',
        bridge_width: '-',
        temple_length: '-',
        frame_size_string: '-',
        frame_category: '-',
        buying_tip: '-',
      };
    }

    // Determine bridge width based on category
    let bridgeWidth: number;
    if (bridgeCategory === 'narrow') {
      bridgeWidth = 17;
    } else if (bridgeCategory === 'wide') {
      bridgeWidth = 21;
    } else {
      bridgeWidth = 19;
    }

    // Determine temple length based on head size
    let templeLength: number;
    if (headSize === 'small') {
      templeLength = 135;
    } else if (headSize === 'large') {
      templeLength = 148;
    } else {
      templeLength = 140;
    }

    // Calculate lens width
    // Total frame width ≈ face width
    // Frame width = (lens_width * 2) + bridge_width + (2 * ~4mm for frame edges)
    // So: lens_width = (face_width - bridge_width - 8) / 2
    const rawLensWidth = (faceWidth - bridgeWidth - 8) / 2;

    // Round to nearest whole number and clamp to reasonable range
    const lensWidth = Math.round(Math.max(44, Math.min(62, rawLensWidth)));

    // Determine frame category
    let frameCategory: string;
    if (lensWidth <= 48) {
      frameCategory = 'Small';
    } else if (lensWidth <= 53) {
      frameCategory = 'Medium';
    } else if (lensWidth <= 57) {
      frameCategory = 'Large';
    } else {
      frameCategory = 'Extra Large';
    }

    // Build frame size string (standard notation)
    const frameSizeString = `${lensWidth}-${bridgeWidth}-${templeLength}`;

    // Generate buying tip based on measurements
    let buyingTip: string;
    if (frameCategory === 'Small') {
      buyingTip = 'Look for frames labeled Small or Narrow. Asian-fit frames from brands like Ray-Ban and Oakley tend to have smaller lens widths and higher nose bridges. Online retailers like Warby Parker list frame measurements on every product page.';
    } else if (frameCategory === 'Medium') {
      buyingTip = 'You are in the most common frame size range, so most brands will have plenty of options. When shopping online, filter for lens widths between 49-53mm. Try at least three different frame shapes to find what suits your face shape.';
    } else if (frameCategory === 'Large') {
      buyingTip = 'Look for frames labeled Large or Wide. Brands like Oakley, Ray-Ban Wayfarer (large), and Warby Parker XL lines cater to bigger faces. Avoid small, round frames that will look undersized on your face.';
    } else {
      buyingTip = 'You need extra-large frames. Look for specialty XL lines from Oakley (XL variants), Maui Jim (large fit), or online retailers like Zenni that offer XL frame filters. Your frame width should be at least 145mm total.';
    }

    return {
      lens_width: `${lensWidth} mm`,
      bridge_width: `${bridgeWidth} mm`,
      temple_length: `${templeLength} mm`,
      frame_size_string: frameSizeString,
      frame_category: frameCategory,
      buying_tip: buyingTip,
    };
  },
  supportingContent: {
    intro:
      'Buying glasses online is a gamble if you do not know your frame size. Too wide and they slide down your nose; too narrow and they pinch your temples. Every pair of glasses has three key measurements printed on the inside of the temple arm: lens width, bridge width, and temple length. This calculator figures out your ideal measurements based on your face width, nose bridge, and head size so you can shop online with confidence.',
    howToUse:
      'Measure your face width from temple to temple using a ruler held horizontally across the widest part of your face (usually right in front of your ears). You can also measure the full width of an existing pair of glasses that fits well. Select your nose bridge width and head size from the dropdowns. The calculator outputs your recommended lens width, bridge width, temple length, and the standard frame size string you can match against any glasses listing.',
    faq: [
      {
        question: 'Where do I find frame measurements on my current glasses?',
        answer:
          'Look on the inside of the temple arm (the piece that goes over your ear). You will see three numbers separated by dashes or squares, like "52-18-140". The first number is the lens width, the second is the bridge width, and the third is the temple length, all in millimeters. Some frames also print the measurements on the inside of the nose bridge.',
      },
      {
        question: 'How do I order the right frame size online?',
        answer:
          'Use this calculator to get your ideal measurements, then compare them to the frame dimensions listed on the retailer website. Stay within 2mm of your recommended lens width, 1mm of bridge width, and 5mm of temple length. Most online retailers like Warby Parker, Zenni, and EyeBuyDirect list these measurements on every product page. When in doubt, many offer virtual try-on tools.',
      },
      {
        question: 'Can the temple arms be adjusted if they are too long or short?',
        answer:
          'Yes. Metal temple arms can be adjusted by an optician in minutes, usually for free. Plastic (acetate) temples can be heated and bent to adjust. If temples are too long, an optician can curve them to fit behind your ears. If they are too short (under 130mm for average heads), the glasses will feel like they are squeezing your head and cannot be adjusted much. It is better to get the right temple length from the start.',
      },
    ],
    relatedTools: [
      'pupillary-distance-helper',
      'face-shape-analyzer',
      'hat-size-calculator',
    ],
  },
};
