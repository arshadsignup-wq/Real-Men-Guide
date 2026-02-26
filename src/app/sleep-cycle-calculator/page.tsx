'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import CalculatorEngine from '@/components/engines/CalculatorEngine';
import { sleepCycleCalculatorConfig } from '@/data/tools/sleep-cycle-calculator';

const tool = getToolBySlug('sleep-cycle-calculator')!;

export default function SleepCycleCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(sleepCycleCalculatorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={sleepCycleCalculatorConfig.supportingContent}>
        <CalculatorEngine config={sleepCycleCalculatorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
