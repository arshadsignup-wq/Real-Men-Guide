import type { BuilderConfig } from '@/lib/types';

export const outfitBuilderConfig: BuilderConfig = {
  shareText: 'Just built the perfect outfit with the Real Men Guide Outfit Builder!',
  steps: [
    {
      id: 'occasion',
      title: 'What is the occasion?',
      subtitle: 'Different events call for different levels of formality.',
      type: 'single-select',
      options: [
        {
          id: 'casual',
          label: 'Casual Hangout',
          description: 'Errands, coffee, hanging with friends, weekend vibes',
        },
        {
          id: 'date-night',
          label: 'Date Night',
          description: 'Dinner, drinks, movie, or a first impression moment',
        },
        {
          id: 'business',
          label: 'Business / Office',
          description: 'Work meetings, presentations, or business casual office',
        },
        {
          id: 'wedding',
          label: 'Wedding / Formal Event',
          description: 'Wedding guest, gala, cocktail party, or black tie',
        },
        {
          id: 'night-out',
          label: 'Night Out',
          description: 'Bars, clubs, concerts, or a night on the town',
        },
      ],
    },
    {
      id: 'season',
      title: 'What season or weather?',
      subtitle: 'This affects fabric weight, layering, and color choices.',
      type: 'single-select',
      options: [
        {
          id: 'spring-summer',
          label: 'Spring / Summer',
          description: 'Warm weather, lighter fabrics, breathable fits',
        },
        {
          id: 'fall-winter',
          label: 'Fall / Winter',
          description: 'Cool to cold weather, layering, heavier fabrics',
        },
      ],
    },
    {
      id: 'style',
      title: 'What is your style preference?',
      subtitle: 'Pick the aesthetic that feels most like you.',
      type: 'single-select',
      options: [
        {
          id: 'minimal',
          label: 'Minimalist',
          description: 'Clean lines, neutral colors, simple and refined',
        },
        {
          id: 'streetwear',
          label: 'Streetwear',
          description: 'Trendy, bold, sneaker culture, graphic pieces',
        },
        {
          id: 'classic',
          label: 'Classic / Preppy',
          description: 'Timeless pieces, polo shirts, chinos, loafers',
        },
        {
          id: 'smart-casual',
          label: 'Smart Casual',
          description: 'Elevated basics, blazers with jeans, polished but relaxed',
        },
      ],
    },
    {
      id: 'budget',
      title: 'What is your budget for this outfit?',
      subtitle: 'We will recommend pieces at your price point.',
      type: 'single-select',
      options: [
        {
          id: 'budget',
          label: 'Under $100',
          description: 'H&M, Uniqlo, Zara, Amazon Essentials',
        },
        {
          id: 'mid',
          label: '$100 - $300',
          description: 'J.Crew, Banana Republic, Abercrombie, COS',
        },
        {
          id: 'premium',
          label: '$300+',
          description: 'Reiss, AllSaints, Todd Snyder, Mr Porter',
        },
      ],
    },
  ],
  generateOutput: (selections: Record<string, string[]>) => {
    const occasion = selections.occasion?.[0] || 'casual';
    const season = selections.season?.[0] || 'spring-summer';
    const style = selections.style?.[0] || 'minimal';
    const budget = selections.budget?.[0] || 'mid';

    const isWarm = season === 'spring-summer';

    // Brand suggestions by budget
    const brands: Record<string, string> = {
      budget: 'Look at Uniqlo, H&M, Zara, and Amazon Essentials',
      mid: 'Look at J.Crew, Banana Republic, COS, and Abercrombie',
      premium: 'Look at Reiss, AllSaints, Todd Snyder, and Mr Porter',
    };

    const brandTip = brands[budget] || brands.mid;

    // --- CASUAL ---
    if (occasion === 'casual') {
      if (style === 'minimal') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'White or off-white heavyweight cotton crew-neck T-shirt',
                  'Keep it simple - no logos, no graphics',
                  'Look for 6oz+ cotton for a premium drape',
                ]
              : [
                  'Oatmeal or light gray crewneck sweatshirt',
                  'French terry or loopback cotton for warmth without bulk',
                  'Layer over a white T-shirt so the collar peeks out',
                ],
          },
          {
            title: 'Bottoms',
            items: isWarm
              ? [
                  'Slim-fit chino shorts in khaki or olive (7-9 inch inseam)',
                  'Alternatively: relaxed-taper light wash jeans',
                ]
              : [
                  'Slim or straight-fit jeans in medium or dark wash',
                  'Black or charcoal chinos as an alternative',
                ],
          },
          {
            title: 'Shoes',
            items: isWarm
              ? [
                  'White leather sneakers (Common Projects style) or clean canvas sneakers',
                  'No-show socks to keep the look clean',
                ]
              : [
                  'White leather sneakers or suede Chelsea boots in tan',
                  'Match belt color to shoe color for cohesion',
                ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A minimalist watch with a leather or mesh band ties the look together',
              brandTip,
              'The key to minimalism is fit - make sure everything is tailored to your body, not baggy',
            ],
          },
        ];
      }
      if (style === 'streetwear') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Oversized graphic T-shirt from a brand you like (Stussy, Kith, or a local brand)',
                  'Alternatively: a boxy-fit camp collar shirt in a bold print',
                ]
              : [
                  'Heavyweight hoodie in black, charcoal, or a muted color',
                  'Layer under a puffer vest or varsity jacket for added dimension',
                ],
          },
          {
            title: 'Bottoms',
            items: isWarm
              ? [
                  'Relaxed-fit cargo shorts or wide-leg shorts in black or olive',
                  'Nylon track pants if you prefer full length',
                ]
              : [
                  'Wide-leg or baggy cargo pants in black or earth tones',
                  'Alternatively: dark wash baggy jeans with a slight stack',
                ],
          },
          {
            title: 'Shoes',
            items: [
              'Chunky sneakers - Nike Dunk, New Balance 550, or Jordan 1',
              'Let the sneakers be a statement piece if the rest of the outfit is muted',
            ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A crossbody bag or sling bag adds functionality and streetwear credibility',
              'A cap (dad hat or 5-panel) or beanie completes the look',
              brandTip,
            ],
          },
        ];
      }
      if (style === 'classic') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Fitted polo shirt in navy, white, or light pink',
                  'Make sure the sleeves hit mid-bicep for the best look',
                ]
              : [
                  'Quarter-zip sweater in navy or charcoal over a collared shirt',
                  'Alternatively: a cable-knit crewneck sweater',
                ],
          },
          {
            title: 'Bottoms',
            items: isWarm
              ? [
                  'Well-fitted chinos in khaki, stone, or light blue',
                  'Chino shorts (9-inch inseam) for warmer days',
                ]
              : [
                  'Dark-wash straight-fit jeans or olive chinos',
                  'Corduroy pants in tan or brown for a preppy winter look',
                ],
          },
          {
            title: 'Shoes',
            items: isWarm
              ? ['Leather boat shoes, suede loafers, or clean white sneakers']
              : ['Leather boots (Clark Desert Boots are a classic) or suede chukkas'],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A woven leather belt and a classic watch pull the whole look together',
              'Sunglasses: wayfarers or clubmasters fit this aesthetic perfectly',
              brandTip,
            ],
          },
        ];
      }
      // smart-casual
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Linen or cotton button-down shirt in light blue, white, or a muted stripe (untucked)',
                'Roll the sleeves to just below the elbow for a relaxed-but-polished vibe',
              ]
            : [
                'Merino wool crewneck sweater over a button-down collar shirt',
                'Layer with a dark bomber or Harrington jacket',
              ],
        },
        {
          title: 'Bottoms',
          items: isWarm
            ? [
                'Slim-fit chinos in navy, olive, or stone',
                'Tailored shorts in a solid color for very warm days',
              ]
            : [
                'Dark-wash jeans (no distressing) or tailored wool trousers',
                'Charcoal or navy chinos as a reliable alternative',
              ],
        },
        {
          title: 'Shoes',
          items: isWarm
            ? ['White leather sneakers, suede loafers, or minimalist driving shoes']
            : ['Chelsea boots in black or tan, or clean leather sneakers'],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'A nice watch and a simple leather belt are the only accessories you need',
            'The smart-casual sweet spot: one formal element (button-down) plus one casual element (sneakers)',
            brandTip,
          ],
        },
      ];
    }

    // --- DATE NIGHT ---
    if (occasion === 'date-night') {
      if (style === 'minimal') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Well-fitted black or navy crew-neck T-shirt in a premium fabric',
                  'Alternatively: a slim-fit linen shirt in white or light gray, sleeves rolled up',
                ]
              : [
                  'Black turtleneck or mock-neck sweater for a sharp, modern look',
                  'Layer under a tailored dark overcoat for the walk to the restaurant',
                ],
          },
          {
            title: 'Bottoms',
            items: [
              'Black slim-fit jeans or tailored black trousers',
              'A clean silhouette is essential - no baggy or distressed denim',
            ],
          },
          {
            title: 'Shoes',
            items: [
              'Black Chelsea boots or sleek black leather sneakers',
              'Make sure your shoes are clean and polished - she will notice',
            ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'Wear a fragrance - 2 sprays on your neck is the perfect amount for close conversation',
              'A sleek watch is the only accessory you need - keep it minimal',
              brandTip,
            ],
          },
        ];
      }
      if (style === 'streetwear') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Clean oversized T-shirt in black or cream - no loud graphics for a date',
                  'Layer with an open overshirt in a tonal color for added depth',
                ]
              : [
                  'Fitted hoodie under a clean bomber jacket or leather jacket',
                  'Keep the hoodie neutral and let the jacket do the talking',
                ],
          },
          {
            title: 'Bottoms',
            items: [
              'Well-fitted black jeans or clean cargo pants (not baggy)',
              'A slight taper keeps the streetwear vibe without looking sloppy',
            ],
          },
          {
            title: 'Shoes',
            items: [
              'Clean, unbeat Jordan 1s, Dunk Lows, or Air Force 1s in a neutral colorway',
              'The shoes should complement the outfit, not dominate it on a date',
            ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A simple chain or pendant necklace adds personality',
              'Apply cologne - streetwear dates still require good grooming',
              brandTip,
            ],
          },
        ];
      }
      if (style === 'classic') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Slim-fit button-down shirt in light blue, white, or a subtle pattern (no tie)',
                  'Leave the top button open for a relaxed look',
                ]
              : [
                  'Cashmere or merino V-neck sweater over a crisp white button-down',
                  'The collar peeking out adds structure and polish',
                ],
          },
          {
            title: 'Bottoms',
            items: [
              'Dark navy or charcoal tailored chinos or dress trousers',
              'Make sure they are hemmed properly - no break or a slight break only',
            ],
          },
          {
            title: 'Shoes',
            items: isWarm
              ? ['Leather loafers in brown or cognac - dressy without being stuffy']
              : ['Leather Oxford or Derby shoes in dark brown or burgundy'],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A leather-strap dress watch shows attention to detail',
              'A pocket square in your blazer (if wearing one) adds a finishing touch',
              brandTip,
            ],
          },
        ];
      }
      // smart-casual date night
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Fitted button-down shirt in a textured fabric (oxford cloth, linen) - untucked',
                'Alternatively: a well-fitted knit polo in a dark color',
              ]
            : [
                'Dark slim-fit blazer over a crew-neck T-shirt or turtleneck',
                'This combination is a date-night power move - polished but not trying too hard',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Dark-wash slim jeans (no rips) or tailored navy chinos',
            'The fit should be modern and clean from waist to hem',
          ],
        },
        {
          title: 'Shoes',
          items: [
            'Suede Chelsea boots, clean leather sneakers, or dressy loafers',
            'Match the formality of the shoe to the venue - boots for cocktail bars, sneakers for casual dinners',
          ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'Cologne is non-negotiable for date night - find yours with our Fragrance Finder',
            'One statement accessory max: a nice watch OR a bracelet, not both',
            brandTip,
          ],
        },
      ];
    }

    // --- BUSINESS ---
    if (occasion === 'business') {
      if (style === 'minimal' || style === 'smart-casual') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Crisp white or light blue dress shirt - fitted, not baggy',
                  'No tie needed for business casual - keep the collar open',
                ]
              : [
                  'White or light blue dress shirt under a fine-gauge merino sweater',
                  'Alternatively: a fitted blazer over the shirt for meetings',
                ],
          },
          {
            title: 'Bottoms',
            items: [
              'Tailored dress trousers in charcoal, navy, or medium gray',
              'Flat-front with a slim or straight leg - no pleats, no cuffs unless intentional',
            ],
          },
          {
            title: 'Shoes',
            items: [
              'Cap-toe Oxfords or Derby shoes in dark brown or black leather',
              'Invest in quality leather shoes - they are the first thing people notice in professional settings',
            ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A quality leather belt that matches your shoe color is essential',
              'Keep your watch understated - a clean dial with a leather or metal band',
              'Business attire is about fit above all - get everything tailored if possible',
              brandTip,
            ],
          },
        ];
      }
      if (style === 'classic') {
        return [
          {
            title: 'Top',
            items: isWarm
              ? [
                  'Tailored blazer in navy or light gray over a crisp dress shirt',
                  'A subtle patterned tie adds personality without being distracting',
                ]
              : [
                  'Full suit in charcoal or navy - two-button, notch lapel, modern fit',
                  'Pair with a white or light blue spread-collar shirt and a silk tie',
                ],
          },
          {
            title: 'Bottoms',
            items: [
              'Matching suit trousers or tailored dress pants in a coordinating color',
              'Hem should hit right at the top of your shoe with minimal to no break',
            ],
          },
          {
            title: 'Shoes',
            items: [
              'Leather cap-toe Oxford shoes in black (with suits) or dark brown (with separates)',
              'Over-the-calf dress socks that match your trouser color',
            ],
          },
          {
            title: 'Accessories & Tips',
            items: [
              'A white linen pocket square in a presidential fold is the safest and most elegant choice',
              'Your belt, watch strap, and shoes should all be the same leather tone',
              brandTip,
            ],
          },
        ];
      }
      // streetwear in business (toned down)
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Unstructured cotton blazer in navy or olive over a clean crew-neck T-shirt',
                'This bridges streetwear and business without looking out of place',
              ]
            : [
                'Structured overshirt or shirt jacket layered over a mock-neck sweater',
                'Keep colors neutral: black, charcoal, or navy',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Tailored jogger trousers or slim chinos in black or navy',
            'The tailoring is what makes this work - baggy joggers look too casual for the office',
          ],
        },
        {
          title: 'Shoes',
          items: [
            'Clean premium sneakers in white or black leather - no chunky soles for the office',
            'Common Projects, Koio, or Veja are great options that bridge casual and professional',
          ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'A minimalist digital or analog watch keeps the modern vibe consistent',
            'The key is looking intentional, not like you grabbed random clothes',
            brandTip,
          ],
        },
      ];
    }

    // --- WEDDING ---
    if (occasion === 'wedding') {
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Light gray, tan, or light blue suit with a white or pastel dress shirt',
                'Lighter fabrics like cotton or linen blends are comfortable in warm weather',
                'A light tie or open collar (check the dress code) completes the look',
              ]
            : [
                'Charcoal, navy, or dark gray suit with a crisp white shirt',
                'A darker tie in burgundy, forest green, or navy adds depth',
                'Wool or wool-blend suits are ideal for cold-weather weddings',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Matching suit trousers, properly hemmed with a slight break or no break',
            'Get them tailored if they are not already - a wedding is worth the $15 alteration',
          ],
        },
        {
          title: 'Shoes',
          items: isWarm
            ? [
                'Leather loafers or cap-toe Oxfords in tan, cognac, or light brown',
                'Suede is acceptable for summer outdoor weddings',
              ]
            : [
                'Leather Oxford or monk-strap shoes in dark brown or black',
                'Match leather color to your belt - this detail matters at formal events',
              ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'A pocket square adds personality - match it to a color in your tie, not the exact same pattern',
            'Never wear a white suit, white tie, or anything that could upstage the couple',
            'Ask the couple about the dress code if it is unclear - overdressing is better than underdressing',
            'Apply a long-lasting cologne (EDP concentration) since weddings are all-day events',
            brandTip,
          ],
        },
      ];
    }

    // --- NIGHT OUT ---
    if (style === 'minimal') {
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Fitted black crew-neck T-shirt or silk camp-collar shirt',
                'Tuck the front into your pants for a clean, European look',
              ]
            : [
                'Slim-fit black turtleneck or dark mock-neck sweater',
                'Layer with a sleek black leather or suede jacket',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Black slim-fit jeans or tailored black trousers',
            'An all-black or near-black palette looks effortlessly cool at night',
          ],
        },
        {
          title: 'Shoes',
          items: [
            'Black leather Chelsea boots, black leather sneakers, or sleek loafers',
            'Avoid white shoes for nighttime minimalism',
          ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'A bold cologne with projection - this is the time for your statement scent',
            'A single silver ring or chain adds edge without breaking the minimal aesthetic',
            brandTip,
          ],
        },
      ];
    }
    if (style === 'streetwear') {
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Oversized black T-shirt or mesh jersey for breathability on hot nights',
                'An open button-down over a tank top works for rooftop bars',
              ]
            : [
                'Graphic hoodie or crewneck under a puffer jacket or bomber',
                'Stick to darker colors for nighttime - black, dark olive, or charcoal',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Black cargo pants, dark denim, or relaxed-fit trousers',
            'A slight taper at the ankle shows off your sneakers',
          ],
        },
        {
          title: 'Shoes',
          items: [
            'Your best sneakers - this is where you flex. Jordan 4s, Yeezy slides, or New Balance 2002R',
            'Make sure they are clean - dirty sneakers ruin the whole fit',
          ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'Chains, rings, and a crossbody bag fit the nightlife streetwear vibe',
            'A cap can work for bars and concerts but skip it for clubs',
            brandTip,
          ],
        },
      ];
    }
    if (style === 'classic') {
      return [
        {
          title: 'Top',
          items: isWarm
            ? [
                'Fitted button-down shirt in a deep color (burgundy, navy, or dark green) with sleeves rolled',
                'Untuck for a bar, tuck for a cocktail lounge',
              ]
            : [
                'Blazer over a dark button-down shirt or a fine-gauge turtleneck',
                'A velvet or textured blazer stands out at nighttime events',
              ],
        },
        {
          title: 'Bottoms',
          items: [
            'Dark slim-fit jeans or charcoal wool trousers',
            'No light-wash denim or casual chinos for a night out',
          ],
        },
        {
          title: 'Shoes',
          items: [
            'Leather Chelsea boots, suede desert boots, or polished loafers',
            'Dark leather is the safest bet for nighttime',
          ],
        },
        {
          title: 'Accessories & Tips',
          items: [
            'A statement watch and one piece of jewelry max',
            'Apply cologne generously - clubs and bars are loud, your scent should cut through',
            brandTip,
          ],
        },
      ];
    }
    // smart-casual night out (default)
    return [
      {
        title: 'Top',
        items: isWarm
          ? [
              'Dark knit polo or fitted henley for a smart but relaxed nighttime look',
              'Alternatively: a lightweight blazer over a dark crew-neck T-shirt',
            ]
          : [
              'Leather jacket or fitted dark blazer over a black or charcoal T-shirt',
              'The jacket is the centerpiece - invest in one that fits you perfectly',
            ],
      },
      {
        title: 'Bottoms',
        items: [
          'Dark slim-fit jeans (black or dark indigo) or tailored dark chinos',
          'A clean, dark bottom half creates the foundation for any going-out look',
        ],
      },
      {
        title: 'Shoes',
        items: [
          'Black Chelsea boots or clean black leather sneakers',
          'If the venue has a dress code, lean toward boots or loafers over sneakers',
        ],
      },
      {
        title: 'Accessories & Tips',
        items: [
          'A watch, subtle cologne, and clean grooming complete the look',
          'Bring a card holder instead of a bulky wallet - it looks better in slim pockets',
          brandTip,
        ],
      },
    ];
  },
  supportingContent: {
    intro:
      'Not sure what to wear? This men\'s outfit builder creates a complete, head-to-toe look based on your occasion, weather, personal style, and budget. Whether you need a date night outfit for men or a sharp business casual look, the builder removes the guesswork. Pair the results with our <a href="/capsule-wardrobe-builder">Capsule Wardrobe Builder</a> to make sure your closet covers every situation.',
    howToUse:
      'Select your occasion, season, style preference, and budget across four quick steps. The builder generates a complete outfit with specific pieces for your top, bottom, shoes, and accessories, along with brand suggestions at your price point. Use our <a href="/color-season-analyzer">Color Season Analyzer</a> to choose the most flattering colors.',
    faq: [
      {
        question: 'What if I do not own the recommended pieces?',
        answer:
          'Use the recommendations as a shopping checklist. Start with the pieces you are missing and build over time. The brand suggestions at your budget level are a great starting point, and many staples go on sale seasonally. Our <a href="/capsule-wardrobe-builder">Capsule Wardrobe Builder</a> can help you prioritize which pieces to buy first.',
      },
      {
        question: 'Can I mix styles from different recommendations?',
        answer:
          'Absolutely. These are starting points, not rigid rules. If you love the streetwear sneaker recommendation but prefer the smart-casual top, combine them. As <a href="https://www.gq.com/story/how-to-dress-well" target="_blank" rel="noopener">GQ notes</a>, the best personal style comes from mixing influences. Just keep the overall formality level consistent for the occasion.',
      },
      {
        question: 'How important is fit really?',
        answer:
          'Fit is the single most important factor in looking good. A $30 T-shirt that fits perfectly will look better than a $200 one that is too big or too tight. When in doubt, size for your shoulders and chest, then get the waist and length tailored. Use our <a href="/dress-shirt-size-calculator">Dress Shirt Size Calculator</a> or <a href="/suit-size-estimator">Suit Size Estimator</a> to nail your measurements before you shop.',
      },
    ],
    relatedTools: [
      'capsule-wardrobe-builder',
      'color-season-analyzer',
      'fragrance-finder',
    ],
  },
};
