'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { hatSizeCalculatorConfig } from '@/data/tools/hat-size-calculator';

const tool = getToolBySlug('hat-size-calculator')!;

export default function HatSizeCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(hatSizeCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={hatSizeCalculatorConfig.supportingContent}>
        <CalculatorEngine config={hatSizeCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
