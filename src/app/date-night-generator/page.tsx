'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import GeneratorEngine from '@/components/engines/GeneratorEngine';
import { dateNightGeneratorConfig } from '@/data/tools/date-night-generator';

const tool = getToolBySlug('date-night-generator')!;

export default function DateNightGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(dateNightGeneratorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={dateNightGeneratorConfig.supportingContent}>
        <GeneratorEngine config={dateNightGeneratorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
