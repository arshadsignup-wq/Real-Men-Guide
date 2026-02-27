import type { CalculatorConfig } from '@/lib/types';

export const pupillaryDistanceHelperConfig: CalculatorConfig = {
  fields: [
    {
      id: 'measurement_mm',
      label: 'Pupillary Distance (PD)',
      type: 'number',
      placeholder: 'e.g. 64',
      unit: 'mm',
      min: 50,
      max: 75,
      step: 0.5,
      helpText: 'Your PD in millimeters. This is the distance between the center of each pupil.',
    },
    {
      id: 'measurement_method',
      label: 'How Did You Measure?',
      type: 'select',
      defaultValue: 'ruler',
      options: [
        { label: 'Ruler & Mirror', value: 'ruler' },
        { label: 'Phone App', value: 'app' },
        { label: 'From Old Glasses/Prescription', value: 'old_glasses' },
      ],
      helpText: 'Different methods have different accuracy levels.',
    },
    {
      id: 'glasses_type',
      label: 'Glasses Type',
      type: 'select',
      defaultValue: 'single_vision',
      options: [
        { label: 'Single Vision (Distance)', value: 'single_vision' },
        { label: 'Progressive / Bifocal', value: 'progressive' },
        { label: 'Reading Glasses', value: 'reading' },
      ],
      helpText: 'Progressive lenses need both far and near PD values.',
    },
  ],
  outputs: [
    {
      id: 'your_pd',
      label: 'Your PD',
      unit: 'mm',
      highlight: true,
      description: 'Your pupillary distance to use when ordering glasses.',
    },
    {
      id: 'pd_category',
      label: 'PD Category',
      description: 'Where your PD falls relative to the average.',
    },
    {
      id: 'near_pd',
      label: 'Near PD',
      unit: 'mm',
      description: 'PD for near-vision tasks (relevant for progressive and reading lenses).',
    },
    {
      id: 'validation_status',
      label: 'Validation',
      description: 'Whether your measurement falls within the normal range.',
    },
    {
      id: 'ordering_tip',
      label: 'Ordering Tip',
      description: 'What to enter when buying glasses online.',
    },
  ],
  calculate: (inputs: Record<string, number | string>): Record<string, number | string> => {
    const pd = Number(inputs.measurement_mm);
    const method = String(inputs.measurement_method);
    const glassesType = String(inputs.glasses_type);

    if (!pd || pd <= 0) {
      return {
        your_pd: 'Enter a valid PD measurement',
        pd_category: '-',
        near_pd: '-',
        validation_status: '-',
        ordering_tip: '-',
      };
    }

    // Calculate near PD (typically 3mm less than far PD)
    const nearPd = Math.round((pd - 3) * 10) / 10;

    // Determine PD category
    // Adult male average: 62-66mm
    // Adult female average: 59-63mm
    let pdCategory: string;
    if (pd < 59) {
      pdCategory = 'Narrow';
    } else if (pd < 63) {
      pdCategory = 'Average (lower range)';
    } else if (pd <= 66) {
      pdCategory = 'Average';
    } else if (pd <= 70) {
      pdCategory = 'Wide';
    } else {
      pdCategory = 'Very Wide';
    }

    // Validation based on normal adult range and method accuracy
    let validationStatus: string;
    const isInNormalRange = pd >= 54 && pd <= 74;

    if (!isInNormalRange) {
      validationStatus = 'Outside normal adult range (54-74mm). Double-check your measurement or ask an optician to verify.';
    } else if (method === 'ruler') {
      validationStatus = 'Within normal range. Ruler measurements have about +/- 2mm margin of error. Measure three times and use the average for best accuracy.';
    } else if (method === 'app') {
      validationStatus = 'Within normal range. App measurements are generally accurate to +/- 1mm. For progressive lenses, consider getting verified by an optician.';
    } else {
      validationStatus = 'Within normal range. A PD from your prescription or prior glasses is typically the most reliable. If the prescription is more than 2 years old, consider re-measuring.';
    }

    // Determine which PD to display as primary
    let displayPd: string;
    let nearPdDisplay: string;

    if (glassesType === 'progressive') {
      displayPd = `${pd} mm (far)`;
      nearPdDisplay = `${nearPd} mm`;
    } else if (glassesType === 'reading') {
      displayPd = `${nearPd} mm (near)`;
      nearPdDisplay = `${nearPd} mm`;
    } else {
      displayPd = `${pd} mm`;
      nearPdDisplay = `${nearPd} mm (not required for single vision)`;
    }

    // Ordering tip based on glasses type
    let orderingTip: string;
    if (glassesType === 'single_vision') {
      orderingTip = `Enter ${pd} mm as your PD when ordering. Most online retailers have a single PD field for single vision lenses. If the site asks for "dual PD" or per-eye PD, enter ${Math.round(pd / 2 * 10) / 10} mm for each eye as an approximation (though a true monocular PD measurement from an optician is more accurate).`;
    } else if (glassesType === 'progressive') {
      orderingTip = `You need both far PD (${pd} mm) and near PD (${nearPd} mm). Many online retailers ask for a single "distance PD" and calculate near PD automatically. If the site asks for both, enter ${pd} for distance and ${nearPd} for near. For progressives, getting your PD measured by an optician is strongly recommended because even a 1mm error can cause eye strain.`;
    } else {
      orderingTip = `For reading glasses, use your near PD: ${nearPd} mm. This accounts for the inward convergence of your eyes when focusing on close objects. If the retailer only has one PD field, enter ${nearPd}. For over-the-counter readers, PD is not adjustable, so stick with prescription readers if your PD is significantly different from the standard 62-63mm.`;
    }

    return {
      your_pd: displayPd,
      pd_category: pdCategory,
      near_pd: nearPdDisplay,
      validation_status: validationStatus,
      ordering_tip: orderingTip,
    };
  },
  supportingContent: {
    intro:
      '<a href="https://en.wikipedia.org/wiki/Pupillary_distance" target="_blank" rel="noopener">Pupillary distance (PD)</a> is the one measurement you need to order glasses online, yet most eye doctors leave it off your prescription. This PD helper validates your measurement, categorizes it, calculates near PD for progressive lenses, and tells you exactly what to enter on eyewear sites. Pair it with our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a> for a complete online ordering toolkit.',
    howToUse:
      'Enter your PD in millimeters. To measure at home, hold a mm ruler against your brow, close your right eye to align zero with your left pupil, then switch eyes to read the right pupil measurement. Select your method and glasses type for tailored advice. For frame sizing, use our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a> alongside this tool.',
    faq: [
      {
        question: 'Why do I need my PD for online glasses?',
        answer:
          'PD ensures the optical center of each lens aligns with your pupils. If it is off, you get eye strain, headaches, and blurred vision. It is critical for progressive lenses where reading, intermediate, and distance zones must align. Single-vision lenses are more forgiving but still need to be within 2mm. Our <a href="/glasses-frame-size-calculator">Glasses Frame Size Calculator</a> handles the frame dimensions side of the equation.',
      },
      {
        question: 'What is the difference between monocular and binocular PD?',
        answer:
          'Binocular PD is the total distance between both pupils (one number, like 64mm). Monocular PD measures each pupil to the nose bridge center (two numbers, like 31.5 and 32.5mm). Monocular is more accurate since most faces are not perfectly symmetrical. If you only have binocular PD, dividing by two gives a close approximation for each eye.',
      },
      {
        question: 'What are the most common mistakes when measuring PD at home?',
        answer:
          'The three biggest mistakes: measuring too high or low (aim for the pupil center, not the iris edge), not keeping the ruler level, and tilting your head. Do not have someone measure you from close range - parallax throws off the reading. Use a mirror instead, or try a phone app like GlassesOn. Our <a href="/face-shape-analyzer">Face Shape Analyzer</a> also uses mirror-based observation for best results.',
      },
    ],
    relatedTools: [
      'glasses-frame-size-calculator',
      'face-shape-analyzer',
      'hat-size-calculator',
    ],
  },
};
