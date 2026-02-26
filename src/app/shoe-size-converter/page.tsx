'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { shoeSizeConverterConfig } from '@/data/tools/shoe-size-converter';

const tool = getToolBySlug('shoe-size-converter')!;

export default function ShoeSizeConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(shoeSizeConverterConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={shoeSizeConverterConfig.supportingContent}>
        <CalculatorEngine config={shoeSizeConverterConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
