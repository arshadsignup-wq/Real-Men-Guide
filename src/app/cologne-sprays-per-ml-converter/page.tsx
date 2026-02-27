'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { cologneSprayPerMlConverterConfig } from '@/data/tools/cologne-sprays-per-ml-converter';

const tool = getToolBySlug('cologne-sprays-per-ml-converter')!;

export default function CologneSpraysPerMlConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(cologneSprayPerMlConverterConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={cologneSprayPerMlConverterConfig.supportingContent}>
        <CalculatorEngine config={cologneSprayPerMlConverterConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
