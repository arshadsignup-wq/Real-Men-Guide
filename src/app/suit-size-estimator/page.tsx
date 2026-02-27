'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { suitSizeEstimatorConfig } from '@/data/tools/suit-size-estimator';

const tool = getToolBySlug('suit-size-estimator')!;

export default function SuitSizeEstimatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(suitSizeEstimatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={suitSizeEstimatorConfig.supportingContent}>
        <CalculatorEngine config={suitSizeEstimatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
