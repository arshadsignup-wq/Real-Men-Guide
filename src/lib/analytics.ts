'use client';

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag('event', eventName, params);
  }
}

export function trackToolStart(toolSlug: string) {
  trackEvent('tool_start', { tool: toolSlug });
}

export function trackToolComplete(toolSlug: string, resultId?: string) {
  trackEvent('tool_complete', { tool: toolSlug, result: resultId || '' });
}

export function trackShare(toolSlug: string, method: string) {
  trackEvent('share', { tool: toolSlug, method });
}

export function trackEmailCapture(location: string) {
  trackEvent('email_capture', { location });
}

export function trackAffiliateClick(productId: string, toolSlug: string) {
  trackEvent('affiliate_click', { product: productId, tool: toolSlug });
}
