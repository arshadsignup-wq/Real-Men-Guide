'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { oneRepMaxCalculatorConfig } from '@/data/tools/one-rep-max-calculator';

const tool = getToolBySlug('one-rep-max-calculator')!;

export default function OneRepMaxCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(oneRepMaxCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={oneRepMaxCalculatorConfig.supportingContent}>
        <CalculatorEngine config={oneRepMaxCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
