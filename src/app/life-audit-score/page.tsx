'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { lifeAuditScoreConfig } from '@/data/tools/life-audit-score';

const tool = getToolBySlug('life-audit-score')!;

export default function LifeAuditScorePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(lifeAuditScoreConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={lifeAuditScoreConfig.supportingContent}>
        <QuizEngine config={lifeAuditScoreConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
