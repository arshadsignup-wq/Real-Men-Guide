'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { toothbrushReplacementTimerConfig } from '@/data/tools/toothbrush-replacement-timer';

const tool = getToolBySlug('toothbrush-replacement-timer')!;

export default function ToothbrushReplacementTimerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(toothbrushReplacementTimerConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={toothbrushReplacementTimerConfig.supportingContent}>
        <CalculatorEngine config={toothbrushReplacementTimerConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
