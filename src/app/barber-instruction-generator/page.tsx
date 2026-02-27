'use client';

import { getToolBySlug } from '@/data/tools-registry';
import { generateToolJsonLd, generateFaqJsonLd } from '@/lib/seo';
import ToolPageWrapper from '@/components/tool-page/ToolPageWrapper';
import BuilderEngine from '@/components/engines/BuilderEngine';
import { barberInstructionGeneratorConfig } from '@/data/tools/barber-instruction-generator';

const tool = getToolBySlug('barber-instruction-generator')!;

export default function BarberInstructionGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateToolJsonLd(tool)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(barberInstructionGeneratorConfig.supportingContent.faq)) }} />
      <ToolPageWrapper tool={tool} supportingContent={barberInstructionGeneratorConfig.supportingContent}>
        <BuilderEngine config={barberInstructionGeneratorConfig} tool={tool} />
      </ToolPageWrapper>
    </>
  );
}
