'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { tdeeCalculatorConfig } from '@/data/tools/tdee-calculator';

const tool = getToolBySlug('tdee-calculator')!;

export default function TdeeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(tdeeCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={tdeeCalculatorConfig.supportingContent}>
        <CalculatorEngine config={tdeeCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
