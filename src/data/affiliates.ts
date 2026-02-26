import { AffiliateProduct } from '@/lib/types';

// ============================================================
// AFFILIATE PRODUCT DATABASE
// ============================================================
// HOW TO EDIT: Change the "url" to your affiliate link.
// HOW TO ADD: Copy any product block and update the fields.
// All links auto-get rel="nofollow sponsored" via the AffiliateLink component.

export const affiliateProducts: AffiliateProduct[] = [
  // --- Grooming ---
  {
    id: 'tiege-hanley',
    name: 'Level 1 Skin Care System',
    brand: 'Tiege Hanley',
    description: 'Complete men\'s skincare system with face wash, AM moisturizer, and PM moisturizer.',
    url: 'https://www.tiege.com',
    price: '$30/month',
    category: 'skincare',
  },
  {
    id: 'bulldog-skincare',
    name: 'Original Moisturizer',
    brand: 'Bulldog',
    description: 'Simple, effective moisturizer for men. No artificial colors or synthetic fragrances.',
    url: 'https://www.bulldogskincare.com',
    price: '$10',
    category: 'skincare',
  },
  {
    id: 'cerave-cleanser',
    name: 'Foaming Facial Cleanser',
    brand: 'CeraVe',
    description: 'Dermatologist recommended face wash for normal to oily skin.',
    url: 'https://www.cerave.com',
    price: '$16',
    category: 'skincare',
  },
  // --- Fragrance ---
  {
    id: 'dior-sauvage',
    name: 'Sauvage EDT',
    brand: 'Dior',
    description: 'The #1 best-selling men\'s fragrance. Fresh, woody, and crowd-pleasing.',
    url: 'https://www.dior.com',
    price: '$105',
    category: 'fragrance',
  },
  {
    id: 'bleu-de-chanel',
    name: 'Bleu de Chanel EDP',
    brand: 'Chanel',
    description: 'Sophisticated woody aromatic fragrance for the modern man.',
    url: 'https://www.chanel.com',
    price: '$135',
    category: 'fragrance',
  },
  {
    id: 'versace-eros',
    name: 'Eros EDT',
    brand: 'Versace',
    description: 'Bold, confident fragrance with mint, vanilla, and cedarwood.',
    url: 'https://www.versace.com',
    price: '$90',
    category: 'fragrance',
  },
  // --- Fitness ---
  {
    id: 'whey-protein',
    name: 'Gold Standard Whey',
    brand: 'Optimum Nutrition',
    description: 'The world\'s best-selling whey protein. 24g protein per scoop.',
    url: 'https://www.optimumnutrition.com',
    price: '$35',
    category: 'fitness',
  },
  {
    id: 'creatine',
    name: 'Creatine Monohydrate',
    brand: 'Optimum Nutrition',
    description: 'Pure micronized creatine monohydrate for strength and muscle gains.',
    url: 'https://www.optimumnutrition.com',
    price: '$15',
    category: 'fitness',
  },
  // --- Style ---
  {
    id: 'white-sneakers',
    name: 'Stan Smith',
    brand: 'Adidas',
    description: 'Clean white leather sneakers. The most versatile shoe in any wardrobe.',
    url: 'https://www.adidas.com',
    price: '$100',
    category: 'footwear',
  },
  {
    id: 'chinos',
    name: 'Athletic Fit Chinos',
    brand: 'Bonobos',
    description: 'Perfect-fitting chinos available in dozens of colors.',
    url: 'https://www.bonobos.com',
    price: '$99',
    category: 'pants',
  },
  // --- Home ---
  {
    id: 'sheets',
    name: 'Luxury Sheet Set',
    brand: 'Brooklinen',
    description: 'High-quality percale sheets that impress. Hotel-quality at home.',
    url: 'https://www.brooklinen.com',
    price: '$149',
    category: 'home',
  },
  {
    id: 'candle',
    name: 'Teakwood & Tobacco',
    brand: 'P.F. Candle Co.',
    description: 'Masculine scented candle that makes any room smell incredible.',
    url: 'https://pfcandleco.com',
    price: '$22',
    category: 'home',
  },
];

export function getAffiliateById(id: string): AffiliateProduct | undefined {
  return affiliateProducts.find((p) => p.id === id);
}

export function getAffiliatesByIds(ids: string[]): AffiliateProduct[] {
  return ids.map((id) => getAffiliateById(id)).filter(Boolean) as AffiliateProduct[];
}

export function getAffiliatesByCategory(category: string): AffiliateProduct[] {
  return affiliateProducts.filter((p) => p.category === category);
}
