'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import BuilderEngine from '@/components/engines/BuilderEngine';
import { skincareRoutineBuilderConfig } from '@/data/tools/skincare-routine-builder';

const tool = getToolBySlug('skincare-routine-builder')!;

export default function SkincareRoutineBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(skincareRoutineBuilderConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={skincareRoutineBuilderConfig.supportingContent}>
        <BuilderEngine config={skincareRoutineBuilderConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
