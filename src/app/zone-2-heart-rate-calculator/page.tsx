'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { zone2HeartRateCalculatorConfig } from '@/data/tools/zone-2-heart-rate-calculator';

const tool = getToolBySlug('zone-2-heart-rate-calculator')!;

export default function Zone2HeartRateCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(zone2HeartRateCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={zone2HeartRateCalculatorConfig.supportingContent}>
        <CalculatorEngine config={zone2HeartRateCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
