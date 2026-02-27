'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { barbellPlateLoadingCalculatorConfig } from '@/data/tools/barbell-plate-loading-calculator';

const tool = getToolBySlug('barbell-plate-loading-calculator')!;

export default function BarbellPlateLoadingCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(barbellPlateLoadingCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={barbellPlateLoadingCalculatorConfig.supportingContent}>
        <CalculatorEngine config={barbellPlateLoadingCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
