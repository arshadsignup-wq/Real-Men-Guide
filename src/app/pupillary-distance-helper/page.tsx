'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { pupillaryDistanceHelperConfig } from '@/data/tools/pupillary-distance-helper';

const tool = getToolBySlug('pupillary-distance-helper')!;

export default function PupillaryDistanceHelperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(pupillaryDistanceHelperConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={pupillaryDistanceHelperConfig.supportingContent}>
        <CalculatorEngine config={pupillaryDistanceHelperConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
