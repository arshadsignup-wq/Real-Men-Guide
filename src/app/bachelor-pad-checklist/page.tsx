'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import QuizEngine from '@/components/engines/QuizEngine';
import { bachelorPadChecklistConfig } from '@/data/tools/bachelor-pad-checklist';

const tool = getToolBySlug('bachelor-pad-checklist')!;

export default function BachelorPadChecklistPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(bachelorPadChecklistConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={bachelorPadChecklistConfig.supportingContent}>
        <QuizEngine config={bachelorPadChecklistConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
