'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { cologneBottleLifespanCalculatorConfig } from '@/data/tools/cologne-bottle-lifespan-calculator';

const tool = getToolBySlug('cologne-bottle-lifespan-calculator')!;

export default function CologneBottleLifespanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(cologneBottleLifespanCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={cologneBottleLifespanCalculatorConfig.supportingContent}>
        <CalculatorEngine config={cologneBottleLifespanCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
