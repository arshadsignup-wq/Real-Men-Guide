'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import BuilderEngine from '@/components/engines/BuilderEngine';
import { outfitBuilderConfig } from '@/data/tools/outfit-builder';

const tool = getToolBySlug('outfit-builder')!;

export default function OutfitBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(outfitBuilderConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={outfitBuilderConfig.supportingContent}>
        <BuilderEngine config={outfitBuilderConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
