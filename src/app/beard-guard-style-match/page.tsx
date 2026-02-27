'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { beardGuardStyleMatchConfig } from '@/data/tools/beard-guard-style-match';

const tool = getToolBySlug('beard-guard-style-match')!;

export default function BeardGuardStyleMatchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(beardGuardStyleMatchConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={beardGuardStyleMatchConfig.supportingContent}>
        <CalculatorEngine config={beardGuardStyleMatchConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
