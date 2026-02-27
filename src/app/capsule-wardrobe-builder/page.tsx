'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import BuilderEngine from '@/components/engines/BuilderEngine';
import { capsuleWardrobeBuilderConfig } from '@/data/tools/capsule-wardrobe-builder';

const tool = getToolBySlug('capsule-wardrobe-builder')!;

export default function CapsuleWardrobeBuilderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(capsuleWardrobeBuilderConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={capsuleWardrobeBuilderConfig.supportingContent}>
        <BuilderEngine config={capsuleWardrobeBuilderConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
