'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { faceShapeAnalyzerConfig } from '@/data/tools/face-shape-analyzer';

const tool = getToolBySlug('face-shape-analyzer')!;

export default function FaceShapeAnalyzerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faceShapeAnalyzerConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={faceShapeAnalyzerConfig.supportingContent}>
        <QuizEngine config={faceShapeAnalyzerConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
