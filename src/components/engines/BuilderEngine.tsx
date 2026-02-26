'use client';

import { useState } from 'react';
import { BuilderConfig, BuilderOutputSection, ToolMeta } from '@/lib/types';
import { trackToolStart, trackToolComplete } from '@/lib/analytics';
import ProgressBar from '@/components/shared/ProgressBar';
import ResultCard from '@/components/shared/ResultCard';
import ShareResults from '@/components/shared/ShareResults';
import AffiliateGrid from '@/components/affiliate/AffiliateGrid';

interface BuilderEngineProps {
  config: BuilderConfig;
  tool: ToolMeta;
}

export default function BuilderEngine({ config, tool }: BuilderEngineProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selections, setSelections] = useState<Record<string, string[]>>({});
  const [output, setOutput] = useState<BuilderOutputSection[] | null>(null);
  const [started, setStarted] = useState(false);

  const step = config.steps[currentStep];

  const handleStart = () => {
    setStarted(true);
    trackToolStart(tool.slug);
  };

  const handleSelect = (optionId: string) => {
    const stepId = step.id;
    const current = selections[stepId] || [];

    if (step.type === 'single-select') {
      setSelections({ ...selections, [stepId]: [optionId] });
      // Auto-advance after short delay
      setTimeout(() => {
        if (currentStep < config.steps.length - 1) {
          setCurrentStep(currentStep + 1);
        } else {
          const newSelections = { ...selections, [stepId]: [optionId] };
          const result = config.generateOutput(newSelections);
          setOutput(result);
          trackToolComplete(tool.slug);
        }
      }, 300);
    } else {
      // Multi-select / grid-select
      if (current.includes(optionId)) {
        setSelections({ ...selections, [stepId]: current.filter((id) => id !== optionId) });
      } else {
        const max = step.maxSelections || Infinity;
        if (current.length < max) {
          setSelections({ ...selections, [stepId]: [...current, optionId] });
        }
      }
    }
  };

  const handleNext = () => {
    if (currentStep < config.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const result = config.generateOutput(selections);
      setOutput(result);
      trackToolComplete(tool.slug);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelections({});
    setOutput(null);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="text-center">
        <div className="rounded-xl border border-border bg-surface p-8">
          <span className="text-5xl">{tool.emoji}</span>
          <h2 className="mt-4 text-xl font-bold">{tool.title}</h2>
          <p className="mt-2 text-muted">{config.steps.length} steps &middot; Takes 3 minutes</p>
          <button
            onClick={handleStart}
            className="mt-6 rounded-lg bg-accent px-8 py-3 font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Start Building
          </button>
        </div>
      </div>
    );
  }

  if (output) {
    return (
      <div>
        <ResultCard title="Your Personalized Plan" emoji="✅" variant="highlighted">
          <div className="space-y-6">
            {output.map((section, i) => (
              <div key={i}>
                <h4 className="mb-2 font-medium text-accent">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted">
                      <span className="text-accent">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {section.affiliateIds && section.affiliateIds.length > 0 && (
                  <div className="mt-3">
                    <AffiliateGrid productIds={section.affiliateIds} toolSlug={tool.slug} title="Shop This Section" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ResultCard>

        <ShareResults
          toolSlug={tool.slug}
          title={tool.title}
          text={config.shareText || `I just built my personalized plan with the ${tool.title}!`}
        />

        <button
          onClick={handleRestart}
          className="mt-6 w-full rounded-lg border border-border py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Start Over
        </button>
      </div>
    );
  }

  const currentSelections = selections[step.id] || [];

  return (
    <div>
      <ProgressBar current={currentStep + 1} total={config.steps.length} />

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-bold">{step.title}</h2>
        {step.subtitle && <p className="mt-1 text-sm text-muted">{step.subtitle}</p>}

        <div className={`mt-6 ${step.type === 'grid-select' ? 'grid grid-cols-2 gap-3 sm:grid-cols-3' : 'space-y-3'}`}>
          {step.options.map((option) => {
            const isSelected = currentSelections.includes(option.id);
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`rounded-lg border p-4 text-left transition-all ${
                  isSelected
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border bg-background hover:border-accent/50 hover:bg-surface-hover'
                } ${step.type === 'grid-select' ? 'text-center' : 'w-full'}`}
              >
                <p className="text-sm font-medium">{option.label}</p>
                {option.description && (
                  <p className="mt-1 text-xs text-muted">{option.description}</p>
                )}
              </button>
            );
          })}
        </div>

        {step.type !== 'single-select' && (
          <div className="mt-6 flex gap-3">
            {currentStep > 0 && (
              <button
                onClick={handleBack}
                className="flex-1 rounded-lg border border-border py-2.5 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
              >
                Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={step.minSelections ? currentSelections.length < step.minSelections : currentSelections.length === 0}
              className="flex-1 rounded-lg bg-accent py-2.5 font-medium text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
            >
              {currentStep === config.steps.length - 1 ? 'Build My Plan' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
