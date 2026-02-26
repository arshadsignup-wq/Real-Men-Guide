'use client';

import { useState, useCallback } from 'react';
import { GeneratorConfig, GeneratorItem, ToolMeta } from '@/lib/types';
import { trackToolStart, trackToolComplete } from '@/lib/analytics';
import ShareResults from '@/components/shared/ShareResults';
import AffiliateGrid from '@/components/affiliate/AffiliateGrid';

interface GeneratorEngineProps {
  config: GeneratorConfig;
  tool: ToolMeta;
}

export default function GeneratorEngine({ config, tool }: GeneratorEngineProps) {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [generated, setGenerated] = useState<GeneratorItem[]>([]);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleFilterChange = (id: string, value: string) => {
    setFilters({ ...filters, [id]: value });
  };

  const generate = useCallback(() => {
    if (!hasGenerated) {
      trackToolStart(tool.slug);
    }

    let pool = [...config.items];

    // Apply filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'all') {
        pool = pool.filter((item) => {
          if (item.tags?.includes(value)) return true;
          if (item.category === value) return true;
          return false;
        });
      }
    });

    // Shuffle and pick
    const shuffled = pool.sort(() => Math.random() - 0.5);
    const count = config.itemsPerGenerate || 3;
    setGenerated(shuffled.slice(0, count));
    setHasGenerated(true);
    trackToolComplete(tool.slug);
  }, [config, filters, hasGenerated, tool.slug]);

  return (
    <div>
      {/* Filters */}
      {config.filters && config.filters.length > 0 && (
        <div className="mb-6 rounded-xl border border-border bg-surface p-6">
          <div className="space-y-4">
            {config.filters.map((filter) => (
              <div key={filter.id}>
                <label htmlFor={filter.id} className="mb-1 block text-sm font-medium">
                  {filter.label}
                </label>
                <select
                  id={filter.id}
                  value={filters[filter.id] || 'all'}
                  onChange={(e) => handleFilterChange(filter.id, e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="all">All</option>
                  {filter.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Generate button */}
      <button
        onClick={generate}
        className="w-full rounded-lg bg-accent py-3 font-medium text-background transition-colors hover:bg-accent-hover"
      >
        {hasGenerated ? '🔄 Generate More' : `✨ Generate ${tool.shortTitle}`}
      </button>

      {/* Results */}
      {generated.length > 0 && (
        <div className="mt-6 space-y-4">
          {generated.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-surface p-6 transition-all hover:border-accent/30"
            >
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              {item.extras && Object.entries(item.extras).length > 0 && (
                <div className="mt-3 space-y-1">
                  {Object.entries(item.extras).map(([key, value]) => (
                    <p key={key} className="text-xs text-muted">
                      <span className="font-medium text-foreground">{key}:</span> {value}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          {config.affiliateIds && config.affiliateIds.length > 0 && (
            <AffiliateGrid productIds={config.affiliateIds} toolSlug={tool.slug} />
          )}

          <ShareResults
            toolSlug={tool.slug}
            title={tool.title}
            text={config.shareText || `Check out the ${tool.title} on Real Men Guide!`}
          />
        </div>
      )}
    </div>
  );
}
