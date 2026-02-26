'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { manArchetypeQuizConfig } from '@/data/tools/man-archetype-quiz';

const tool = getToolBySlug('man-archetype-quiz')!;

export default function ManArchetypeQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(manArchetypeQuizConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={manArchetypeQuizConfig.supportingContent}>
        <QuizEngine config={manArchetypeQuizConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
