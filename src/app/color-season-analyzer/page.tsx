'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { colorSeasonAnalyzerConfig } from '@/data/tools/color-season-analyzer';

const tool = getToolBySlug('color-season-analyzer')!;

export default function ColorSeasonAnalyzerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(colorSeasonAnalyzerConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={colorSeasonAnalyzerConfig.supportingContent}>
        <QuizEngine config={colorSeasonAnalyzerConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
