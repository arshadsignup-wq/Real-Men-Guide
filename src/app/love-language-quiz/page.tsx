'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { loveLanguageQuizConfig } from '@/data/tools/love-language-quiz';

const tool = getToolBySlug('love-language-quiz')!;

export default function LoveLanguageQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(loveLanguageQuizConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={loveLanguageQuizConfig.supportingContent}>
        <QuizEngine config={loveLanguageQuizConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
