'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { razorBurnRiskCheckerConfig } from '@/data/tools/razor-burn-risk-checker';

const tool = getToolBySlug('razor-burn-risk-checker')!;

export default function RazorBurnRiskCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(razorBurnRiskCheckerConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={razorBurnRiskCheckerConfig.supportingContent}>
        <QuizEngine config={razorBurnRiskCheckerConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
