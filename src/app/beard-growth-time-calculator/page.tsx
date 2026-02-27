'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { beardGrowthTimeCalculatorConfig } from '@/data/tools/beard-growth-time-calculator';

const tool = getToolBySlug('beard-growth-time-calculator')!;

export default function BeardGrowthTimeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(beardGrowthTimeCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={beardGrowthTimeCalculatorConfig.supportingContent}>
        <CalculatorEngine config={beardGrowthTimeCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
