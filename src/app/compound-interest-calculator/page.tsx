'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { compoundInterestCalculatorConfig } from '@/data/tools/compound-interest-calculator';

const tool = getToolBySlug('compound-interest-calculator')!;

export default function CompoundInterestCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(compoundInterestCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={compoundInterestCalculatorConfig.supportingContent}>
        <CalculatorEngine config={compoundInterestCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
