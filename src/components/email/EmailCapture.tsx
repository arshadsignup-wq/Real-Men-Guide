'use client';

import { useState } from 'react';
import { trackEmailCapture } from '@/lib/analytics';

interface EmailCaptureProps {
  location: string;
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'inline' | 'card' | 'bar';
}

export default function EmailCapture({
  location,
  title = 'Get weekly tips to level up',
  description = 'Join 2,000+ men getting actionable style, fitness, and life advice every week.',
  buttonText = 'Subscribe Free',
  variant = 'inline',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setMessage('You\'re in! Check your email to confirm.');
        trackEmailCapture(location);
        setEmail('');
      } else {
        const data = await res.json();
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className={`rounded-lg border border-accent/30 bg-accent/10 p-6 text-center ${variant === 'bar' ? 'py-3' : ''}`}>
        <p className="font-medium text-accent">{message}</p>
      </div>
    );
  }

  if (variant === 'bar') {
    return (
      <div className="rounded-lg border border-border bg-surface p-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <p className="flex-1 text-sm font-medium">{title}</p>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-md bg-accent px-4 py-1.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
            >
              {status === 'loading' ? '...' : buttonText}
            </button>
          </div>
          {status === 'error' && <p className="text-xs text-red-400">{message}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className={`rounded-xl border border-border bg-surface p-6 ${variant === 'card' ? 'text-center' : ''}`}>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-lg bg-accent px-6 py-2.5 font-medium text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </button>
      </form>
      {status === 'error' && <p className="mt-2 text-sm text-red-400">{message}</p>}
      <p className="mt-2 text-xs text-muted">No spam. Unsubscribe anytime.</p>
    </div>
  );
}
