'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { ringBraceletSizeToolConfig } from '@/data/tools/ring-bracelet-size-tool';

const tool = getToolBySlug('ring-bracelet-size-tool')!;

export default function RingBraceletSizeToolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(ringBraceletSizeToolConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={ringBraceletSizeToolConfig.supportingContent}>
        <CalculatorEngine config={ringBraceletSizeToolConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
