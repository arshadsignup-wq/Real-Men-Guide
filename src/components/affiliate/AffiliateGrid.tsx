'use client';

import { getAffiliatesByIds } from '@/data/affiliates';
import AffiliateLink from './AffiliateLink';
import AffiliateDisclosure from './AffiliateDisclosure';

interface AffiliateGridProps {
  productIds: string[];
  toolSlug: string;
  title?: string;
}

export default function AffiliateGrid({ productIds, toolSlug, title = 'Recommended Products' }: AffiliateGridProps) {
  const products = getAffiliatesByIds(productIds);
  if (products.length === 0) return null;

  return (
    <div className="mt-8">
      <h3 className="mb-4 text-lg font-bold">{title}</h3>
      <div className="grid gap-3 sm:grid-cols-2">
        {products.map((product) => (
          <AffiliateLink key={product.id} product={product} toolSlug={toolSlug} />
        ))}
      </div>
      <div className="mt-3">
        <AffiliateDisclosure />
      </div>
    </div>
  );
}
