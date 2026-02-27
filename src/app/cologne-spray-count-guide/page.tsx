'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { cologneSprayCountGuideConfig } from '@/data/tools/cologne-spray-count-guide';

const tool = getToolBySlug('cologne-spray-count-guide')!;

export default function CologneSprayCountGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(cologneSprayCountGuideConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={cologneSprayCountGuideConfig.supportingContent}>
        <CalculatorEngine config={cologneSprayCountGuideConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
