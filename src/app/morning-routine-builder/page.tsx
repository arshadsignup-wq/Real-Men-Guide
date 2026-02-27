'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import BuilderEngine from '@/components/engines/BuilderEngine';
import { morningRoutineBuilderConfig } from '@/data/tools/morning-routine-builder';

const tool = getToolBySlug('morning-routine-builder')!;

export default function MorningRoutineBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(morningRoutineBuilderConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={morningRoutineBuilderConfig.supportingContent}>
        <BuilderEngine config={morningRoutineBuilderConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
