'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { haircutFrequencyCalculatorConfig } from '@/data/tools/haircut-frequency-calculator';

const tool = getToolBySlug('haircut-frequency-calculator')!;

export default function HaircutFrequencyCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(haircutFrequencyCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={haircutFrequencyCalculatorConfig.supportingContent}>
        <CalculatorEngine config={haircutFrequencyCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
