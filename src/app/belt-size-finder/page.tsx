'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { beltSizeFinderConfig } from '@/data/tools/belt-size-finder';

const tool = getToolBySlug('belt-size-finder')!;

export default function BeltSizeFinderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(beltSizeFinderConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={beltSizeFinderConfig.supportingContent}>
        <CalculatorEngine config={beltSizeFinderConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
