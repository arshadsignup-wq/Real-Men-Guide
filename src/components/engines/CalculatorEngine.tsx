'use client';

import { useState } from 'react';
import { CalculatorConfig, ToolMeta } from '@/lib/types';
import { trackToolStart, trackToolComplete } from '@/lib/analytics';
import ResultCard from '@/components/shared/ResultCard';
import ShareResults from '@/components/shared/ShareResults';
import AffiliateGrid from '@/components/affiliate/AffiliateGrid';

interface CalculatorEngineProps {
  config: CalculatorConfig;
  tool: ToolMeta;
}

export default function CalculatorEngine({ config, tool }: CalculatorEngineProps) {
  const initialInputs: Record<string, number | string> = {};
  config.fields.forEach((field) => {
    if (field.defaultValue !== undefined) {
      initialInputs[field.id] = field.defaultValue;
    } else if (field.type === 'select' || field.type === 'radio') {
      initialInputs[field.id] = field.options?.[0]?.value || '';
    } else {
      initialInputs[field.id] = '';
    }
  });

  const [inputs, setInputs] = useState<Record<string, number | string>>(initialInputs);
  const [outputs, setOutputs] = useState<Record<string, number | string> | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleInputChange = (id: string, value: string) => {
    setInputs({ ...inputs, [id]: value });
  };

  const handleCalculate = () => {
    if (!hasCalculated) {
      trackToolStart(tool.slug);
    }

    const processedInputs: Record<string, number | string> = {};
    config.fields.forEach((field) => {
      const val = inputs[field.id];
      if (field.type === 'number' || field.type === 'range') {
        processedInputs[field.id] = typeof val === 'string' ? parseFloat(val) || 0 : val;
      } else {
        processedInputs[field.id] = val;
      }
    });

    const result = config.calculate(processedInputs);
    setOutputs(result);
    setHasCalculated(true);
    trackToolComplete(tool.slug);
  };

  const formatOutput = (value: number | string, format?: string) => {
    if (typeof value === 'string') return value;
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
      case 'percentage':
        return `${value.toFixed(1)}%`;
      case 'time':
        return value.toFixed(0);
      default:
        return typeof value === 'number' ? value.toLocaleString('en-US', { maximumFractionDigits: 1 }) : value;
    }
  };

  return (
    <div>
      {/* Input form */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <div className="space-y-4">
          {config.fields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="mb-1 block text-sm font-medium">
                {field.label}
                {field.unit && <span className="ml-1 text-muted">({field.unit})</span>}
              </label>

              {field.type === 'number' && (
                <input
                  id={field.id}
                  type="number"
                  min={field.min}
                  max={field.max}
                  step={field.step}
                  placeholder={field.placeholder}
                  value={inputs[field.id]}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
              )}

              {field.type === 'select' && (
                <select
                  id={field.id}
                  value={inputs[field.id]}
                  onChange={(e) => handleInputChange(field.id, e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-accent focus:outline-none"
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}

              {field.type === 'radio' && (
                <div className="flex flex-wrap gap-2">
                  {field.options?.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleInputChange(field.id, opt.value)}
                      className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                        inputs[field.id] === opt.value
                          ? 'border-accent bg-accent/10 text-accent'
                          : 'border-border bg-background text-muted hover:border-accent/50'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}

              {field.type === 'range' && (
                <div className="flex items-center gap-3">
                  <input
                    id={field.id}
                    type="range"
                    min={field.min}
                    max={field.max}
                    step={field.step}
                    value={inputs[field.id]}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}
                    className="flex-1 accent-accent"
                  />
                  <span className="w-16 text-right font-mono text-sm text-accent">
                    {inputs[field.id]}{field.unit ? ` ${field.unit}` : ''}
                  </span>
                </div>
              )}

              {field.helpText && (
                <p className="mt-1 text-xs text-muted">{field.helpText}</p>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleCalculate}
          className="mt-6 w-full rounded-lg bg-accent py-3 font-medium text-background transition-colors hover:bg-accent-hover"
        >
          Calculate
        </button>
      </div>

      {/* Output */}
      {outputs && (
        <div className="mt-6">
          <ResultCard title="Your Results" emoji="📊" variant="highlighted">
            <div className="space-y-4">
              {config.outputs.map((output) => {
                const value = outputs[output.id];
                if (value === undefined) return null;
                return (
                  <div
                    key={output.id}
                    className={`flex flex-col gap-1 rounded-lg sm:flex-row sm:items-center sm:justify-between ${
                      output.highlight ? 'bg-accent/10 p-3' : 'border-b border-border pb-3 last:border-0'
                    }`}
                  >
                    <div>
                      <p className={`text-sm ${output.highlight ? 'font-medium text-foreground' : 'text-muted'}`}>
                        {output.label}
                      </p>
                      {output.description && (
                        <p className="text-xs text-muted">{output.description}</p>
                      )}
                    </div>
                    <p className={`font-mono text-lg shrink-0 ${output.highlight ? 'font-bold text-accent' : 'text-foreground'}`}>
                      {formatOutput(value, output.format)}
                    </p>
                  </div>
                );
              })}
            </div>
          </ResultCard>

          {config.affiliateIds && config.affiliateIds.length > 0 && (
            <AffiliateGrid productIds={config.affiliateIds} toolSlug={tool.slug} />
          )}

          <ShareResults
            toolSlug={tool.slug}
            title={tool.title}
            text={`Check out my results from the ${tool.title}!`}
          />
        </div>
      )}
    </div>
  );
}
