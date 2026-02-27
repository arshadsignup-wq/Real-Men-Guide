'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { caffeineCutoffCalculatorConfig } from '@/data/tools/caffeine-cutoff-calculator';

const tool = getToolBySlug('caffeine-cutoff-calculator')!;

export default function CaffeineCutoffCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(caffeineCutoffCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={caffeineCutoffCalculatorConfig.supportingContent}>
        <CalculatorEngine config={caffeineCutoffCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
