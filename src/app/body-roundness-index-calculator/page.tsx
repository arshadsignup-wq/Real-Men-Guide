'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { bodyRoundnessIndexCalculatorConfig } from '@/data/tools/body-roundness-index-calculator';

const tool = getToolBySlug('body-roundness-index-calculator')!;

export default function BodyRoundnessIndexCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(bodyRoundnessIndexCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={bodyRoundnessIndexCalculatorConfig.supportingContent}>
        <CalculatorEngine config={bodyRoundnessIndexCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
