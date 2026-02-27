'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { dressShirtSizeCalculatorConfig } from '@/data/tools/dress-shirt-size-calculator';

const tool = getToolBySlug('dress-shirt-size-calculator')!;

export default function DressShirtSizeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(dressShirtSizeCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={dressShirtSizeCalculatorConfig.supportingContent}>
        <CalculatorEngine config={dressShirtSizeCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
