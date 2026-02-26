'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { beardStyleSelectorConfig } from '@/data/tools/beard-style-selector';

const tool = getToolBySlug('beard-style-selector')!;

export default function BeardStyleSelectorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(beardStyleSelectorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={beardStyleSelectorConfig.supportingContent}>
        <QuizEngine config={beardStyleSelectorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
