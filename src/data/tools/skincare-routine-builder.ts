import type { BuilderConfig } from '@/lib/types';

export const skincareRoutineBuilderConfig: BuilderConfig = {
  shareText:
    'Just built my personalized skincare routine with the Real Men Guide!',
  steps: [
    {
      id: 'skin-type',
      title: 'What is your skin type?',
      subtitle: 'If unsure, wash your face and wait an hour. Check how it feels.',
      type: 'single-select',
      options: [
        {
          id: 'oily',
          label: 'Oily',
          description: 'Shiny by midday, enlarged pores, prone to breakouts',
        },
        {
          id: 'dry',
          label: 'Dry',
          description: 'Tight, flaky, rough texture, sometimes itchy',
        },
        {
          id: 'combination',
          label: 'Combination',
          description: 'Oily T-zone (forehead, nose, chin) but dry cheeks',
        },
        {
          id: 'sensitive',
          label: 'Sensitive',
          description: 'Easily irritated, redness, reacts to new products',
        },
        {
          id: 'normal',
          label: 'Normal',
          description: 'Balanced, not too oily or dry, minimal issues',
        },
      ],
    },
    {
      id: 'concerns',
      title: 'What are your main skin concerns?',
      subtitle: 'Select up to 2 concerns you want to address.',
      type: 'multi-select',
      minSelections: 1,
      maxSelections: 2,
      options: [
        {
          id: 'acne',
          label: 'Acne & Breakouts',
          description: 'Pimples, blackheads, whiteheads, or cystic acne',
        },
        {
          id: 'aging',
          label: 'Aging & Wrinkles',
          description: 'Fine lines, wrinkles, loss of firmness',
        },
        {
          id: 'dark-circles',
          label: 'Dark Circles & Puffiness',
          description: 'Under-eye bags, dark rings, tired appearance',
        },
        {
          id: 'dullness',
          label: 'Dullness & Uneven Tone',
          description: 'Lackluster skin, dark spots, uneven color',
        },
      ],
    },
    {
      id: 'budget',
      title: 'What is your skincare budget?',
      subtitle: 'Monthly spend on skincare products.',
      type: 'single-select',
      options: [
        {
          id: 'budget',
          label: 'Budget-Friendly',
          description: 'Under $30/month - drugstore and Amazon picks',
        },
        {
          id: 'mid',
          label: 'Mid-Range',
          description: '$30-$70/month - quality brands without the luxury markup',
        },
        {
          id: 'premium',
          label: 'Premium',
          description: '$70+/month - high-end ingredients and formulations',
        },
      ],
    },
    {
      id: 'time',
      title: 'How much time will you spend on skincare?',
      subtitle: 'Be honest - a routine you actually follow beats a complex one you skip.',
      type: 'single-select',
      options: [
        {
          id: '2min',
          label: '2 Minutes or Less',
          description: 'Bare minimum - just the essentials',
        },
        {
          id: '5min',
          label: 'About 5 Minutes',
          description: 'A solid routine without going overboard',
        },
        {
          id: '10min',
          label: '10 Minutes',
          description: 'The full routine with targeted treatments',
        },
      ],
    },
  ],
  generateOutput: (selections: Record<string, string[]>) => {
    const skinType = selections['skin-type']?.[0] || 'normal';
    const concerns = selections.concerns || ['dullness'];
    const budget = selections.budget?.[0] || 'mid';
    const time = selections.time?.[0] || '5min';

    const hasAcne = concerns.includes('acne');
    const hasAging = concerns.includes('aging');
    const hasDarkCircles = concerns.includes('dark-circles');
    const hasDullness = concerns.includes('dullness');

    // Cleanser recommendation based on skin type
    let cleanser = '';
    let cleanserNote = '';
    if (skinType === 'oily' || (skinType === 'combination' && hasAcne)) {
      cleanser = 'Gel or foaming cleanser with salicylic acid (2%)';
      cleanserNote =
        'Salicylic acid dissolves oil and unclogs pores without stripping your skin.';
    } else if (skinType === 'dry') {
      cleanser = 'Cream or milky hydrating cleanser (CeraVe Hydrating Cleanser or similar)';
      cleanserNote =
        'Avoid foaming cleansers - they strip the natural oils your dry skin desperately needs.';
    } else if (skinType === 'sensitive') {
      cleanser = 'Fragrance-free gentle cleanser (Vanicream, La Roche-Posay Toleriane)';
      cleanserNote =
        'Look for "fragrance-free" on the label - not "unscented," which can still contain masking fragrances.';
    } else if (skinType === 'combination') {
      cleanser = 'Gentle gel cleanser (CeraVe Foaming Facial Cleanser or Cetaphil Daily Cleanser)';
      cleanserNote =
        'A balanced cleanser cleans the oily zones without overdrying the dry areas.';
    } else {
      cleanser = 'Gentle daily cleanser (CeraVe Foaming or Cetaphil Gentle Skin Cleanser)';
      cleanserNote = 'With normal skin, almost any gentle cleanser works well.';
    }

    // Moisturizer recommendation
    let moisturizer = '';
    if (skinType === 'oily') {
      moisturizer =
        'Lightweight oil-free gel moisturizer (Neutrogena Hydro Boost, CeraVe PM)';
    } else if (skinType === 'dry') {
      moisturizer =
        'Rich cream moisturizer with ceramides and hyaluronic acid (CeraVe Moisturizing Cream)';
    } else if (skinType === 'sensitive') {
      moisturizer =
        'Fragrance-free barrier-repair moisturizer (Vanicream Daily Facial Moisturizer)';
    } else {
      moisturizer =
        'Daily moisturizer with SPF for AM, richer cream for PM (CeraVe AM/PM pair)';
    }

    // Budget brand recommendations
    let brandRecs = '';
    if (budget === 'budget') {
      brandRecs =
        'Best budget brands: CeraVe, Cetaphil, Neutrogena, The Ordinary. Available at any drugstore or Amazon.';
    } else if (budget === 'mid') {
      brandRecs =
        'Recommended brands: Tiege Hanley, Bulldog Skincare, Jack Black, Paula\'s Choice. Great quality-to-price ratio.';
    } else {
      brandRecs =
        'Premium picks: Kiehl\'s, Drunk Elephant, SkinCeuticals, Lab Series. Clinical-grade ingredients and elegant formulations.';
    }

    const sections = [];

    // Step 1: Cleanse (always included)
    sections.push({
      title: 'Step 1: Cleanse (Morning & Night)',
      items: [
        cleanser,
        cleanserNote,
        'Wash with lukewarm water - hot water strips your skin and causes redness.',
        'Use your fingertips in gentle circular motions for 30-60 seconds.',
      ],
      affiliateIds: ['cerave-cleanser'],
    });

    // Step 2: Treatment/Serum (5min and 10min only)
    if (time === '5min' || time === '10min') {
      const treatmentItems: string[] = [];

      if (hasAcne) {
        treatmentItems.push(
          'Acne treatment: Apply a benzoyl peroxide spot treatment (2.5-5%) to active breakouts at night.'
        );
        treatmentItems.push(
          'For prevention: Use a niacinamide serum (The Ordinary Niacinamide 10%) to reduce oil and minimize pores.'
        );
      }
      if (hasAging) {
        treatmentItems.push(
          'Anti-aging: Apply a retinol serum at night (start with 0.3% and build up). This is the gold standard for wrinkle prevention.'
        );
        treatmentItems.push(
          'Retinol makes skin sun-sensitive - always use SPF the next morning.'
        );
      }
      if (hasDarkCircles) {
        treatmentItems.push(
          'Eye treatment: Apply a caffeine-based eye cream or serum (The Ordinary Caffeine Solution) to reduce puffiness and dark circles.'
        );
        treatmentItems.push(
          'Gently pat (do not rub) the product around the orbital bone with your ring finger.'
        );
      }
      if (hasDullness) {
        treatmentItems.push(
          'Brightening: Use a vitamin C serum (10-20%) every morning to even skin tone and add radiance.'
        );
        treatmentItems.push(
          'Vitamin C also provides antioxidant protection against environmental damage.'
        );
      }

      if (treatmentItems.length > 0) {
        sections.push({
          title: 'Step 2: Treatment (Targeted)',
          items: treatmentItems,
        });
      }
    }

    // Step 3 (or 2): Moisturize
    const moisturizeStep = time === '2min' ? 'Step 2' : 'Step 3';
    sections.push({
      title: `${moisturizeStep}: Moisturize (Morning & Night)`,
      items: [
        moisturizer,
        'Apply to slightly damp skin right after cleansing (or after treatment serums) for better absorption.',
        skinType === 'oily'
          ? 'Do not skip moisturizer even with oily skin - dehydrated skin actually produces more oil to compensate.'
          : 'Focus on the driest areas first, then spread to the rest of your face.',
      ],
      affiliateIds: ['tiege-hanley'],
    });

    // SPF (always recommended for AM)
    const spfStep =
      time === '2min' ? 'Step 3' : time === '5min' ? 'Step 4' : 'Step 4';
    sections.push({
      title: `${spfStep}: Sunscreen (Every Morning - Non-Negotiable)`,
      items: [
        'Apply a broad-spectrum SPF 30-50 sunscreen every single morning, even on cloudy days.',
        skinType === 'oily'
          ? 'Use a matte-finish or gel-based SPF to avoid midday shine (EltaMD UV Clear, Supergoop Unseen).'
          : 'A moisturizer with built-in SPF can combine two steps into one for efficiency.',
        'Sunscreen is the single most effective anti-aging product. UV damage causes 90% of visible skin aging.',
        'Reapply every 2 hours if you are outdoors for extended periods.',
      ],
    });

    // Exfoliation (10min routine only)
    if (time === '10min') {
      sections.push({
        title: 'Weekly Add-On: Exfoliation (2-3x per week)',
        items: [
          skinType === 'sensitive'
            ? 'Use a gentle enzyme exfoliant or PHA-based product to avoid irritation.'
            : 'Use a chemical exfoliant with AHA (glycolic acid) or BHA (salicylic acid) 2-3 times per week.',
          'Exfoliation removes dead skin cells, unclogs pores, and improves product absorption.',
          'Do not exfoliate on the same night you use retinol - alternate nights to avoid irritation.',
          'Physical scrubs (with beads or particles) are generally too harsh for the face. Chemical exfoliants are gentler and more effective.',
        ],
        affiliateIds: ['bulldog-skincare'],
      });
    }

    // Brand recommendations and general tips
    sections.push({
      title: 'Product Recommendations & Tips',
      items: [
        brandRecs,
        'Introduce new products one at a time, waiting 1-2 weeks between additions to isolate any reactions.',
        'Consistency beats complexity - a simple 3-step routine done daily outperforms a 10-step routine done sporadically.',
        'Drink enough water and get 7-8 hours of sleep - no product can replace the basics.',
        'Change your pillowcase at least once a week - it collects oil, bacteria, and dead skin.',
      ],
    });

    return sections;
  },
  supportingContent: {
    intro:
      'Building a men\'s skincare routine does not need to be complicated. This builder creates a practical, personalized routine based on your skin type, concerns, budget, and time. Whether you are dealing with acne, aging, or just want healthier skin, the result is a daily skincare routine for men you will actually stick with. Pair it with our <a href="/razor-burn-risk-checker">Razor Burn Risk Checker</a> if shaving irritation is part of the problem.',
    howToUse:
      'Select your skin type, up to 2 concerns, your monthly budget, and how much time you are willing to spend. The builder generates a step-by-step routine with specific product recommendations. Save the results as a shopping list. For shaving-related skin issues, also check our <a href="/razor-blade-replacement-calculator">Razor Blade Replacement Calculator</a>.',
    faq: [
      {
        question: 'Do I really need a skincare routine as a guy?',
        answer:
          'Yes. According to the <a href="https://www.aad.org/public/everyday-care/skin-care-basics/care/skin-care-for-men" target="_blank" rel="noopener">American Academy of Dermatology</a>, men\'s skin produces more oil, is thicker, and is regularly damaged by shaving. A basic routine (cleanser, moisturizer, sunscreen) takes under 2 minutes and prevents acne, premature aging, and skin damage. Think of it like brushing your teeth - the minimum effort prevents major problems.',
      },
      {
        question: 'How long until I see results?',
        answer:
          'Your skin cell turnover cycle is about 28 days, so give any new routine at least 4-6 weeks before judging results. Moisturizer and sunscreen show improvements in days, but acne treatments and anti-aging products need 6-12 weeks for visible changes. Consistency matters more than product count. Our <a href="/hair-wash-schedule-quiz">Hair Wash Schedule Quiz</a> can also help you balance overall grooming habits.',
      },
      {
        question: 'Can I use the same products morning and night?',
        answer:
          'Your cleanser and moisturizer can be the same AM and PM. However, sunscreen is morning-only, and active treatments like retinol should only be used at night because they increase sun sensitivity. Vitamin C serums work best in the morning for antioxidant protection. For a complete grooming plan, pair this routine with our <a href="/fragrance-finder">Fragrance Finder</a>.',
      },
    ],
    relatedTools: [
      'face-shape-analyzer',
      'beard-style-selector',
      'fragrance-finder',
    ],
  },
};
