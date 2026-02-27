'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { glassesFrameSizeCalculatorConfig } from '@/data/tools/glasses-frame-size-calculator';

const tool = getToolBySlug('glasses-frame-size-calculator')!;

export default function GlassesFrameSizeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(glassesFrameSizeCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={glassesFrameSizeCalculatorConfig.supportingContent}>
        <CalculatorEngine config={glassesFrameSizeCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
