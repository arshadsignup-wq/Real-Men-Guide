// ============================================================
// CORE TYPE DEFINITIONS FOR REAL MEN GUIDE
// ============================================================

// --- Tool Registry Types ---

export type ToolCategory =
  | 'style-and-grooming'
  | 'relationships-and-life-skills'
  | 'fitness-and-health'
  | 'viral-and-shareable';

export type EngineType = 'quiz' | 'calculator' | 'generator' | 'builder';

export interface ToolMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: ToolCategory;
  engine: EngineType;
  emoji: string;
  featured?: boolean;
  seoTitle: string;
  seoDescription: string;
  ogImage?: string;
  keywords: string[];
}

// --- Quiz Engine Types ---

export interface QuizOption {
  label: string;
  value: string;
  points?: Record<string, number>;
  image?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  subtitle?: string;
  options: QuizOption[];
}

export interface QuizResult {
  id: string;
  title: string;
  description: string;
  tips: string[];
  affiliateIds?: string[];
  image?: string;
}

export interface QuizConfig {
  questions: QuizQuestion[];
  results: QuizResult[];
  resultCalculation: 'highest-score' | 'category-match' | 'weighted';
  shareText?: string;
  supportingContent: SupportingContent;
}

// --- Calculator Engine Types ---

export interface CalculatorField {
  id: string;
  label: string;
  type: 'number' | 'select' | 'radio' | 'range';
  placeholder?: string;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  options?: { label: string; value: string }[];
  helpText?: string;
}

export interface CalculatorOutput {
  id: string;
  label: string;
  unit?: string;
  format?: 'number' | 'currency' | 'percentage' | 'time';
  highlight?: boolean;
  description?: string;
}

export interface CalculatorConfig {
  fields: CalculatorField[];
  outputs: CalculatorOutput[];
  calculate: (inputs: Record<string, number | string>) => Record<string, number | string>;
  supportingContent: SupportingContent;
  affiliateIds?: string[];
}

// --- Generator Engine Types ---

export interface GeneratorItem {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  category?: string;
  extras?: Record<string, string>;
}

export interface GeneratorFilter {
  id: string;
  label: string;
  options: { label: string; value: string }[];
  type: 'select' | 'multi-select';
}

export interface GeneratorConfig {
  items: GeneratorItem[];
  filters?: GeneratorFilter[];
  itemsPerGenerate?: number;
  shareText?: string;
  supportingContent: SupportingContent;
  affiliateIds?: string[];
}

// --- Builder Engine Types ---

export interface BuilderStep {
  id: string;
  title: string;
  subtitle?: string;
  type: 'single-select' | 'multi-select' | 'grid-select';
  options: BuilderOption[];
  minSelections?: number;
  maxSelections?: number;
}

export interface BuilderOption {
  id: string;
  label: string;
  description?: string;
  image?: string;
  tags?: string[];
}

export interface BuilderOutputSection {
  title: string;
  items: string[];
  affiliateIds?: string[];
}

export interface BuilderConfig {
  steps: BuilderStep[];
  generateOutput: (selections: Record<string, string[]>) => BuilderOutputSection[];
  shareText?: string;
  supportingContent: SupportingContent;
}

// --- Shared Types ---

export interface SupportingContent {
  intro: string;
  howToUse: string;
  faq: { question: string; answer: string }[];
  relatedTools?: string[];
}

export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  description: string;
  url: string;
  price?: string;
  image?: string;
  category: string;
}

export interface CategoryInfo {
  slug: ToolCategory;
  title: string;
  description: string;
  emoji: string;
}

export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  twitterHandle?: string;
  beehiivPublicationId?: string;
  gaId?: string;
}

// --- Radar Chart (for Life Audit) ---

export interface RadarDataPoint {
  label: string;
  value: number;
  maxValue: number;
}
