'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { proteinMacroCalculatorConfig } from '@/data/tools/protein-macro-calculator';

const tool = getToolBySlug('protein-macro-calculator')!;

export default function ProteinMacroCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(proteinMacroCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={proteinMacroCalculatorConfig.supportingContent}>
        <CalculatorEngine config={proteinMacroCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
