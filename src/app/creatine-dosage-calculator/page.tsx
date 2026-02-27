'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { creatineDosageCalculatorConfig } from '@/data/tools/creatine-dosage-calculator';

const tool = getToolBySlug('creatine-dosage-calculator')!;

export default function CreatineDosageCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(creatineDosageCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={creatineDosageCalculatorConfig.supportingContent}>
        <CalculatorEngine config={creatineDosageCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
