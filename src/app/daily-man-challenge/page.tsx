'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import GeneratorEngine from '@/components/engines/GeneratorEngine';
import { dailyManChallengeConfig } from '@/data/tools/daily-man-challenge';

const tool = getToolBySlug('daily-man-challenge')!;

export default function DailyManChallengePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(dailyManChallengeConfig.supportingContent.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbJsonLd(tool)) }} />
      <ToolPageWrapper tool={tool} supportingContent={dailyManChallengeConfig.supportingContent}>
        <GeneratorEngine config={dailyManChallengeConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
