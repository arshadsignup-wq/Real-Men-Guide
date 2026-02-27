'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { hairWashScheduleQuizConfig } from '@/data/tools/hair-wash-schedule-quiz';

const tool = getToolBySlug('hair-wash-schedule-quiz')!;

export default function HairWashScheduleQuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(hairWashScheduleQuizConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={hairWashScheduleQuizConfig.supportingContent}>
        <QuizEngine config={hairWashScheduleQuizConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
