'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { razorBladeReplacementCalculatorConfig } from '@/data/tools/razor-blade-replacement-calculator';

const tool = getToolBySlug('razor-blade-replacement-calculator')!;

export default function RazorBladeReplacementCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(razorBladeReplacementCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={razorBladeReplacementCalculatorConfig.supportingContent}>
        <CalculatorEngine config={razorBladeReplacementCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
