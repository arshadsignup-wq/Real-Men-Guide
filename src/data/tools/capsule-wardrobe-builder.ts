import type { BuilderConfig } from '@/lib/types';

export const capsuleWardrobeBuilderConfig: BuilderConfig = {
  shareText:
    'Just built my capsule wardrobe with the Real Men Guide! Fewer clothes, more outfits.',
  steps: [
    {
      id: 'lifestyle',
      title: 'What best describes your lifestyle?',
      subtitle: 'This determines the balance of formal vs. casual pieces.',
      type: 'single-select',
      options: [
        {
          id: 'office',
          label: 'Office / Professional',
          description:
            'Most days require business or business-casual dress',
        },
        {
          id: 'casual',
          label: 'Casual / Freelance',
          description:
            'You dress casually most days - comfort and style matter equally',
        },
        {
          id: 'active',
          label: 'Active / Outdoors',
          description:
            'You move a lot - gym, outdoors, physical work, travel',
        },
        {
          id: 'mixed',
          label: 'Mixed / Versatile',
          description:
            'Your week includes a mix of formal, casual, and active days',
        },
      ],
    },
    {
      id: 'climate',
      title: 'What is your climate like?',
      subtitle: 'This determines fabric weight and layering strategy.',
      type: 'single-select',
      options: [
        {
          id: 'hot',
          label: 'Hot / Tropical',
          description: 'Warm year-round, lightweight and breathable fabrics needed',
        },
        {
          id: 'mild',
          label: 'Mild / Temperate',
          description: 'Moderate temperatures, light layers do the trick',
        },
        {
          id: 'cold',
          label: 'Cold / Northern',
          description: 'Long winters, heavy layers and warm outerwear essential',
        },
        {
          id: 'variable',
          label: 'Variable / 4 Seasons',
          description: 'You experience the full range from hot summers to cold winters',
        },
      ],
    },
    {
      id: 'style',
      title: 'What is your preferred aesthetic?',
      subtitle: 'This shapes the types of pieces in your wardrobe.',
      type: 'single-select',
      options: [
        {
          id: 'minimalist',
          label: 'Minimalist',
          description:
            'Clean lines, neutral palette, quality over quantity',
        },
        {
          id: 'classic',
          label: 'Classic / Timeless',
          description:
            'Preppy staples, traditional fits, always in style',
        },
        {
          id: 'streetwear',
          label: 'Streetwear / Modern',
          description:
            'Trendy silhouettes, sneaker culture, bold basics',
        },
        {
          id: 'smart-casual',
          label: 'Smart Casual',
          description:
            'Elevated basics that bridge formal and casual effortlessly',
        },
      ],
    },
    {
      id: 'colors',
      title: 'What color palette do you prefer?',
      subtitle: 'A cohesive color palette means every piece mixes with every other piece.',
      type: 'single-select',
      options: [
        {
          id: 'neutrals',
          label: 'Neutrals',
          description:
            'Black, white, gray, navy - safe, versatile, always sharp',
        },
        {
          id: 'earth-tones',
          label: 'Earth Tones',
          description:
            'Olive, tan, brown, rust, cream - warm and natural',
        },
        {
          id: 'monochrome',
          label: 'Monochrome',
          description:
            'All black or all-dark palette - sleek and modern',
        },
        {
          id: 'mixed',
          label: 'Mixed with Accent Colors',
          description:
            'Neutral base with pops of color (burgundy, teal, mustard)',
        },
      ],
    },
  ],
  generateOutput: (selections: Record<string, string[]>) => {
    const lifestyle = selections.lifestyle?.[0] || 'mixed';
    const climate = selections.climate?.[0] || 'variable';
    const style = selections.style?.[0] || 'minimalist';
    const colors = selections.colors?.[0] || 'neutrals';

    const isHot = climate === 'hot';
    const isCold = climate === 'cold';
    const isVariable = climate === 'variable';

    // Color palette based on selection
    let colorPalette: string[] = [];
    if (colors === 'neutrals') {
      colorPalette = ['black', 'white', 'navy', 'light gray', 'charcoal', 'off-white'];
    } else if (colors === 'earth-tones') {
      colorPalette = ['olive', 'tan', 'cream', 'brown', 'rust', 'khaki'];
    } else if (colors === 'monochrome') {
      colorPalette = ['black', 'charcoal', 'dark gray', 'white', 'off-black'];
    } else {
      colorPalette = ['navy', 'white', 'gray', 'olive', 'burgundy', 'mustard'];
    }

    const paletteStr = colorPalette.join(', ');

    const sections = [];

    // --- TOPS ---
    const tops: string[] = [];

    if (lifestyle === 'office' || lifestyle === 'mixed') {
      if (style === 'classic' || style === 'smart-casual') {
        tops.push(
          '2 Oxford cloth button-down shirts (1 white, 1 light blue) - the most versatile dress shirts for any man'
        );
        tops.push(
          '1 dress shirt in a subtle pattern (windowpane or fine stripe) for variety'
        );
      } else {
        tops.push(
          '2 fitted button-down shirts (1 white, 1 in your palette) for when you need to look polished'
        );
      }
    }

    if (style === 'streetwear') {
      tops.push(
        `4 heavyweight crew-neck T-shirts (2 black, 1 white, 1 in ${colorPalette[3] || 'olive'}) - the backbone of streetwear`
      );
      tops.push('1 oversized graphic or logo T-shirt from a brand you genuinely like');
    } else if (style === 'minimalist') {
      tops.push(
        `4 premium crew-neck T-shirts in your palette (${colorPalette[0]}, ${colorPalette[1]}, ${colorPalette[2]}, ${colorPalette[3]}) - 6oz+ cotton for quality drape`
      );
    } else if (style === 'classic') {
      tops.push(
        `2 fitted polo shirts (1 navy, 1 ${colorPalette[3] || 'white'}) for smart-casual versatility`
      );
      tops.push(
        `2 crew-neck T-shirts (1 white, 1 ${colorPalette[0]}) for casual layering`
      );
    } else {
      tops.push(
        `3 well-fitted T-shirts (white, ${colorPalette[0]}, ${colorPalette[2]}) - the base layer of any smart-casual wardrobe`
      );
      tops.push(
        '1 fitted henley or knit polo for an elevated casual look'
      );
    }

    if (!isHot) {
      if (style === 'minimalist' || style === 'smart-casual') {
        tops.push(
          `1 crewneck sweatshirt in ${colorPalette[3] || 'gray'} for casual days`
        );
      } else if (style === 'streetwear') {
        tops.push(
          `1 quality hoodie in ${colorPalette[0]} and 1 crewneck sweatshirt for layering`
        );
      } else {
        tops.push(
          `1 cable-knit or fine-gauge sweater in ${colorPalette[0] || 'navy'} for layering over collared shirts`
        );
      }
    }

    sections.push({
      title: `Tops (Your Palette: ${paletteStr})`,
      items: tops,
    });

    // --- BOTTOMS ---
    const bottoms: string[] = [];

    if (style === 'streetwear') {
      bottoms.push(
        '2 pairs of well-fitted jeans (1 black, 1 medium or light wash) - relaxed or straight fit'
      );
      bottoms.push(
        `1 pair of cargo pants or wide-leg trousers in ${colorPalette[3] || 'olive'}`
      );
    } else if (style === 'classic') {
      bottoms.push(
        '1 pair of dark-wash straight-fit jeans - the most versatile denim for classic style'
      );
      bottoms.push(
        '2 pairs of chinos (1 khaki/tan, 1 navy or olive) that can dress up or down'
      );
    } else if (style === 'minimalist') {
      bottoms.push(
        '2 pairs of slim-fit jeans (1 black, 1 dark indigo) - clean and minimal'
      );
      bottoms.push(
        `1 pair of tailored chinos in ${colorPalette[3] || 'gray'} for variety`
      );
    } else {
      bottoms.push(
        '1 pair of dark-wash slim jeans for casual and date nights'
      );
      bottoms.push(
        '2 pairs of chinos (1 navy, 1 charcoal or olive) that bridge casual and professional'
      );
    }

    if (lifestyle === 'office' || lifestyle === 'mixed') {
      bottoms.push(
        '1 pair of tailored dress trousers in charcoal or navy for formal occasions and meetings'
      );
    }

    if (isHot || isVariable) {
      bottoms.push(
        `1 pair of chino shorts (7-9" inseam) in ${colorPalette[3] || 'khaki'} for warm days`
      );
    }

    if (lifestyle === 'active') {
      bottoms.push(
        '1 pair of athletic joggers or tapered sweatpants in black or dark gray'
      );
    }

    sections.push({
      title: 'Bottoms',
      items: bottoms,
    });

    // --- OUTERWEAR ---
    const outerwear: string[] = [];

    if (isHot) {
      outerwear.push(
        'Light overshirt or unstructured linen blazer for air-conditioned venues and cool evenings'
      );
      outerwear.push(
        'A lightweight bomber or denim jacket for the rare cool day'
      );
    } else if (isCold) {
      if (style === 'streetwear') {
        outerwear.push(
          'Puffer jacket in black - warm, practical, and a streetwear staple'
        );
        outerwear.push(
          `Heavyweight flannel overshirt in ${colorPalette[3] || 'earth tones'} for layering`
        );
      } else if (style === 'classic' || style === 'smart-casual') {
        outerwear.push(
          'Wool overcoat in charcoal or camel - the most versatile cold-weather coat for smart occasions'
        );
        outerwear.push(
          'Quilted field jacket or peacoat in navy for casual cold-weather days'
        );
      } else {
        outerwear.push(
          'Clean-line wool topcoat in black or charcoal for a minimalist cold-weather look'
        );
        outerwear.push(
          'Down puffer or insulated bomber for everyday warmth'
        );
      }
      outerwear.push(
        'Scarf in a complementary color (wool or cashmere blend) for added warmth and style'
      );
    } else {
      // Mild or variable
      if (style === 'streetwear') {
        outerwear.push(
          'Bomber jacket in black or olive - works with almost every streetwear outfit'
        );
      } else if (style === 'classic') {
        outerwear.push(
          'Harrington jacket or cotton field jacket in navy, tan, or olive'
        );
      } else if (style === 'minimalist') {
        outerwear.push(
          'Minimalist cotton or nylon jacket in black or navy with clean lines'
        );
      } else {
        outerwear.push(
          'Unstructured blazer in navy or charcoal - dress it up or down'
        );
      }

      if (isVariable) {
        outerwear.push(
          'Heavier winter coat (overcoat, puffer, or parka) for the coldest months'
        );
      }

      outerwear.push(
        'Lightweight denim jacket or overshirt for transitional layering in spring and fall'
      );
    }

    sections.push({
      title: 'Outerwear & Layers',
      items: outerwear,
    });

    // --- SHOES ---
    const shoes: string[] = [];

    if (style === 'streetwear') {
      shoes.push(
        '1 pair of white leather sneakers (Air Force 1, New Balance 550, or Veja) for clean everyday wear'
      );
      shoes.push(
        '1 pair of statement sneakers in a color or silhouette you love - this is where you express yourself'
      );
    } else if (style === 'minimalist') {
      shoes.push(
        '1 pair of white minimalist leather sneakers (Common Projects, Koio, or Veja) - the foundation'
      );
      shoes.push(
        '1 pair of black minimalist sneakers or sleek slip-ons for variety'
      );
    } else if (style === 'classic') {
      shoes.push(
        '1 pair of clean white sneakers for casual days'
      );
      shoes.push(
        '1 pair of leather boat shoes or penny loafers in brown or tan for the preppy look'
      );
    } else {
      shoes.push(
        '1 pair of clean white leather sneakers - the single most versatile shoe you can own'
      );
      shoes.push(
        '1 pair of suede loafers or leather slip-ons for smart-casual occasions'
      );
    }

    if (lifestyle === 'office' || lifestyle === 'mixed') {
      shoes.push(
        '1 pair of leather dress shoes (Derby or Oxford) in dark brown or black for formal settings'
      );
    }

    if (!isHot) {
      shoes.push(
        `1 pair of boots (${style === 'streetwear' ? 'tactical or chunky-sole boots' : style === 'classic' ? 'leather chukka boots or Clark Desert Boots' : 'Chelsea boots in black or tan suede'}) for cold weather and dressier occasions`
      );
    }

    if (lifestyle === 'active') {
      shoes.push(
        '1 pair of quality athletic shoes (running or training) for workouts and active days'
      );
    }

    sections.push({
      title: 'Shoes',
      items: shoes,
    });

    // --- ACCESSORIES ---
    const accessories: string[] = [];

    accessories.push(
      `1 versatile watch - ${style === 'minimalist' ? 'a clean-dial minimalist watch with a leather or mesh band' : style === 'streetwear' ? 'a digital G-Shock or a Casio for rugged everyday wear' : style === 'classic' ? 'a leather-strap dress watch with a simple face' : 'a versatile automatic or quartz watch that works casual and formal'}`
    );

    if (colors === 'earth-tones' || colors === 'mixed') {
      accessories.push(
        '1 quality leather belt in brown or cognac - match it to your shoe color'
      );
    } else {
      accessories.push(
        '1 quality leather belt in black - the foundation of any accessory collection'
      );
    }

    if (lifestyle === 'office' || lifestyle === 'mixed') {
      accessories.push(
        '1 additional belt to match your dress shoes (brown if your main belt is black, or vice versa)'
      );
    }

    accessories.push(
      `1 pair of sunglasses - ${style === 'classic' ? 'wayfarers or clubmasters in tortoiseshell' : style === 'streetwear' ? 'retro or sporty frames that match your vibe' : 'aviators or minimal frames in black or gold'}`
    );

    if (isCold || isVariable) {
      accessories.push(
        'A quality knit beanie in a neutral color for cold days'
      );
    }

    sections.push({
      title: 'Accessories',
      items: accessories,
    });

    // --- BUILDING TIPS ---
    sections.push({
      title: 'How to Build This Wardrobe',
      items: [
        `Total pieces in this capsule: approximately 20-25 items that create 50+ unique outfit combinations.`,
        'Start by buying the pieces you are missing, not replacing what you already have. Audit your current closet first.',
        'Invest most in shoes and outerwear - these are the pieces people notice most and that last the longest.',
        'Buy basics (T-shirts, underwear, socks) in bulk from quality affordable brands like Uniqlo or Amazon Essentials.',
        'Get key items tailored - a $15 hem on jeans or $20 waist adjustment on chinos makes them look twice the price.',
        `Your color palette (${paletteStr}) ensures that nearly every top works with every bottom. That is the power of a capsule wardrobe.`,
      ],
    });

    return sections;
  },
  supportingContent: {
    intro:
      'A men\'s capsule wardrobe is a small collection of essential, versatile pieces that all work together. Instead of a closet full of clothes with nothing to wear, you get 20-25 strategic capsule wardrobe essentials that create 50+ outfits. This builder creates a personalized wardrobe based on your lifestyle, climate, style, and color palette. Use it alongside our <a href="/color-season-analyzer">Color Season Analyzer</a> to pick colors that actually suit you.',
    howToUse:
      'Select your lifestyle, climate, style preference, and color palette. The builder generates a complete wardrobe with pieces for tops, bottoms, outerwear, shoes, and accessories. Use the result as a shopping checklist and start by identifying what you already own. Our <a href="/outfit-builder">Outfit Builder</a> helps you combine these pieces into specific outfits.',
    faq: [
      {
        question: 'How many items should a men\'s capsule wardrobe have?',
        answer:
          'A solid capsule wardrobe for men has 20-30 items, not counting underwear, workout clothes, or specialty items like suits. The key is that every piece works with multiple others. With 25 well-chosen items, you can create over 50 unique outfits. Quality matters more than quantity. Use our <a href="/outfit-builder">Outfit Builder</a> to see how different pieces combine.',
      },
      {
        question: 'How much should I spend on a capsule wardrobe?',
        answer:
          'The strategy is to invest more per piece since you are buying fewer items. A complete capsule wardrobe can be built for $300-500 at budget brands (Uniqlo, H&M), $800-1500 at mid-range (J.Crew, COS), or $2000+ at premium brands. As <a href="https://www.gq.com/story/how-to-build-a-capsule-wardrobe" target="_blank" rel="noopener">GQ recommends</a>, replace pieces gradually as they wear out rather than buying everything at once.',
      },
      {
        question: 'How often should I update my capsule wardrobe?',
        answer:
          'Most capsule wardrobe essentials are timeless and last 1-3 years depending on quality and wear. Update seasonally by swapping a few pieces for lighter or heavier fabrics. Replace items as they wear out, not on a fixed schedule. For sizing help on new additions, use our <a href="/shoe-size-converter">Shoe Size Converter</a> or <a href="/belt-size-finder">Belt Size Finder</a>.',
      },
    ],
    relatedTools: [
      'outfit-builder',
      'color-season-analyzer',
      'shoe-size-converter',
    ],
  },
};
