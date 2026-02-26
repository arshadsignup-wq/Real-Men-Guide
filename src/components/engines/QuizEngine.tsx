'use client';

import { useState } from 'react';
import { QuizConfig, QuizResult, ToolMeta } from '@/lib/types';
import { trackToolStart, trackToolComplete } from '@/lib/analytics';
import ProgressBar from '@/components/shared/ProgressBar';
import ResultCard from '@/components/shared/ResultCard';
import ShareResults from '@/components/shared/ShareResults';
import AffiliateGrid from '@/components/affiliate/AffiliateGrid';

interface QuizEngineProps {
  config: QuizConfig;
  tool: ToolMeta;
}

export default function QuizEngine({ config, tool }: QuizEngineProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [started, setStarted] = useState(false);

  const question = config.questions[currentQuestion];

  const handleStart = () => {
    setStarted(true);
    trackToolStart(tool.slug);
  };

  const handleAnswer = (value: string, points?: Record<string, number>) => {
    const newAnswers = { ...answers, [question.id]: value };
    setAnswers(newAnswers);

    const newScores = { ...scores };
    if (points) {
      Object.entries(points).forEach(([key, val]) => {
        newScores[key] = (newScores[key] || 0) + val;
      });
    }
    setScores(newScores);

    if (currentQuestion < config.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const finalResult = calculateResult(newScores, config);
      setResult(finalResult);
      trackToolComplete(tool.slug, finalResult.id);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({});
    setResult(null);
    setStarted(false);
  };

  if (!started) {
    return (
      <div className="text-center">
        <div className="rounded-xl border border-border bg-surface p-8">
          <span className="text-5xl">{tool.emoji}</span>
          <h2 className="mt-4 text-xl font-bold">{tool.title}</h2>
          <p className="mt-2 text-muted">{config.questions.length} questions &middot; Takes 2 minutes</p>
          <button
            onClick={handleStart}
            className="mt-6 rounded-lg bg-accent px-8 py-3 font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div>
        <ResultCard title={result.title} emoji="🎉" variant="highlighted">
          <p className="text-muted leading-relaxed">{result.description}</p>

          {result.tips.length > 0 && (
            <div className="mt-4">
              <h4 className="mb-2 font-medium">Tips for you:</h4>
              <ul className="space-y-2">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted">
                    <span className="text-accent">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </ResultCard>

        {result.affiliateIds && result.affiliateIds.length > 0 && (
          <AffiliateGrid productIds={result.affiliateIds} toolSlug={tool.slug} />
        )}

        <ShareResults
          toolSlug={tool.slug}
          title={tool.title}
          text={config.shareText?.replace('{result}', result.title) || `My ${tool.title} result: ${result.title}!`}
        />

        <button
          onClick={handleRestart}
          className="mt-6 w-full rounded-lg border border-border py-3 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
        >
          Take Again
        </button>
      </div>
    );
  }

  return (
    <div>
      <ProgressBar current={currentQuestion + 1} total={config.questions.length} />

      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-lg font-bold">{question.question}</h2>
        {question.subtitle && <p className="mt-1 text-sm text-muted">{question.subtitle}</p>}

        <div className="mt-6 space-y-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value, option.points)}
              className="w-full rounded-lg border border-border bg-background p-4 text-left transition-all hover:border-accent hover:bg-surface-hover"
            >
              <span className="text-sm">{option.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function calculateResult(scores: Record<string, number>, config: QuizConfig): QuizResult {
  if (config.resultCalculation === 'highest-score') {
    let maxKey = '';
    let maxVal = -Infinity;
    Object.entries(scores).forEach(([key, val]) => {
      if (val > maxVal) {
        maxKey = key;
        maxVal = val;
      }
    });
    return config.results.find((r) => r.id === maxKey) || config.results[0];
  }

  // Default: highest-score
  let maxKey = '';
  let maxVal = -Infinity;
  Object.entries(scores).forEach(([key, val]) => {
    if (val > maxVal) {
      maxKey = key;
      maxVal = val;
    }
  });
  return config.results.find((r) => r.id === maxKey) || config.results[0];
}
