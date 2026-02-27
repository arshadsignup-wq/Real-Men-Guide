'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { shampooSelectorQuizConfig } from '@/data/tools/shampoo-selector-quiz';

const tool = getToolBySlug('shampoo-selector-quiz')!;

export default function ShampooSelectorQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(shampooSelectorQuizConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={shampooSelectorQuizConfig.supportingContent}>
        <QuizEngine config={shampooSelectorQuizConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
