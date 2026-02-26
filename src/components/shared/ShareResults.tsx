'use client';

import { trackShare } from '@/lib/analytics';

interface ShareResultsProps {
  toolSlug: string;
  title: string;
  text: string;
}

export default function ShareResults({ toolSlug, title, text }: ShareResultsProps) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const encodedText = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(url);

  const shareLinks = [
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: '𝕏',
    },
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: 'f',
    },
    {
      name: 'Copy Link',
      url: '',
      icon: '🔗',
    },
  ];

  const handleShare = async (name: string, shareUrl: string) => {
    trackShare(toolSlug, name.toLowerCase());

    if (name === 'Copy Link') {
      await navigator.clipboard.writeText(`${text}\n${url}`);
      return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  return (
    <div className="mt-6">
      <p className="mb-3 text-sm font-medium text-muted">Share your results</p>
      <div className="flex gap-2">
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link.name, link.url)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-sm transition-colors hover:border-accent hover:text-accent"
            title={`Share on ${link.name}`}
          >
            {link.icon}
          </button>
        ))}
      </div>
    </div>
  );
}
