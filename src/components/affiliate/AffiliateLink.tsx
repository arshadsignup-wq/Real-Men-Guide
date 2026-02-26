'use client';

import { AffiliateProduct } from '@/lib/types';
import { trackAffiliateClick } from '@/lib/analytics';

interface AffiliateLinkProps {
  product: AffiliateProduct;
  toolSlug: string;
  children?: React.ReactNode;
}

export default function AffiliateLink({ product, toolSlug, children }: AffiliateLinkProps) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="nofollow sponsored noopener"
      onClick={() => trackAffiliateClick(product.id, toolSlug)}
      className="group block rounded-lg border border-border bg-surface p-4 transition-all hover:border-accent/30 hover:bg-surface-hover"
    >
      {children || (
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="font-medium text-foreground group-hover:text-accent">{product.name}</p>
              <p className="text-sm text-muted">{product.brand}</p>
            </div>
            {product.price && (
              <span className="font-mono text-sm text-accent">{product.price}</span>
            )}
          </div>
          <p className="mt-2 text-sm text-muted">{product.description}</p>
        </div>
      )}
    </a>
  );
}
