'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { denimCareScheduleCalculatorConfig } from '@/data/tools/denim-care-schedule-calculator';

const tool = getToolBySlug('denim-care-schedule-calculator')!;

export default function DenimCareScheduleCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(denimCareScheduleCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={denimCareScheduleCalculatorConfig.supportingContent}>
        <CalculatorEngine config={denimCareScheduleCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
