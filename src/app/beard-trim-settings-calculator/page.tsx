'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { beardTrimSettingsCalculatorConfig } from '@/data/tools/beard-trim-settings-calculator';

const tool = getToolBySlug('beard-trim-settings-calculator')!;

export default function BeardTrimSettingsCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(beardTrimSettingsCalculatorConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={beardTrimSettingsCalculatorConfig.supportingContent}>
        <CalculatorEngine config={beardTrimSettingsCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
