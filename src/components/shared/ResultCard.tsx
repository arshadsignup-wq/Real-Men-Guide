'use client';

interface ResultCardProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  children: React.ReactNode;
  variant?: 'default' | 'highlighted';
}

export default function ResultCard({ title, subtitle, emoji, children, variant = 'default' }: ResultCardProps) {
  const borderClass = variant === 'highlighted' ? 'border-accent/50' : 'border-border';

  return (
    <div className={`rounded-xl border ${borderClass} bg-surface p-6`}>
      <div className="mb-4 flex items-center gap-3">
        {emoji && <span className="text-2xl">{emoji}</span>}
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
          {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
        </div>
      </div>
      {children}
    </div>
  );
}
