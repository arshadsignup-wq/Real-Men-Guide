'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { hangoverRecoveryCalculatorConfig } from '@/data/tools/hangover-recovery-calculator';

const tool = getToolBySlug('hangover-recovery-calculator')!;

export default function HangoverRecoveryCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(hangoverRecoveryCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={hangoverRecoveryCalculatorConfig.supportingContent}>
        <CalculatorEngine config={hangoverRecoveryCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
