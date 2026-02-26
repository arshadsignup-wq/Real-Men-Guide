'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import GeneratorEngine from '@/components/engines/GeneratorEngine';
import { conversationStarterGeneratorConfig } from '@/data/tools/conversation-starter-generator';

const tool = getToolBySlug('conversation-starter-generator')!;

export default function ConversationStarterGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(conversationStarterGeneratorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={conversationStarterGeneratorConfig.supportingContent}>
        <GeneratorEngine config={conversationStarterGeneratorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
