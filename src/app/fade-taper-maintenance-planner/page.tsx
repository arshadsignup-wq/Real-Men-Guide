'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { fadeTaperMaintenancePlannerConfig } from '@/data/tools/fade-taper-maintenance-planner';

const tool = getToolBySlug('fade-taper-maintenance-planner')!;

export default function FadeTaperMaintenancePlannerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(fadeTaperMaintenancePlannerConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={fadeTaperMaintenancePlannerConfig.supportingContent}>
        <CalculatorEngine config={fadeTaperMaintenancePlannerConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
