'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { hairClipperGuardConverterConfig } from '@/data/tools/hair-clipper-guard-converter';

const tool = getToolBySlug('hair-clipper-guard-converter')!;

export default function HairClipperGuardConverterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(hairClipperGuardConverterConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={hairClipperGuardConverterConfig.supportingContent}>
        <CalculatorEngine config={hairClipperGuardConverterConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
