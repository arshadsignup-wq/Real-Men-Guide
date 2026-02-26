# Real Men Guide - Content Guide

## How This Site Works (No Coding Required)

Your site is built so you can update ALL content without writing code. Every tool's content lives in a simple text file that you can edit right from GitHub.

## Quick Start: Editing Content

### Step 1: Go to GitHub
1. Go to your repository on GitHub
2. Navigate to `src/data/tools/`
3. Click on any file (e.g., `face-shape-analyzer.ts`)
4. Click the pencil icon (✏️) to edit

### Step 2: Edit the Content
All text you can change is in quotes (' ' or " "). For example:

```
question: 'What is your jaw shape?',  // ← Change the text inside quotes
```

**Rules:**
- Only change text inside quotes
- Don't delete commas, brackets, or colons
- Don't change words like `id:`, `question:`, `label:`, `points:`

### Step 3: Save
1. Scroll down to "Commit changes"
2. Add a short description like "Updated face shape quiz questions"
3. Click "Commit changes"
4. Your site auto-updates in ~60 seconds!

## What You Can Edit

### Quiz Questions & Answers
File location: `src/data/tools/[tool-name].ts`

```typescript
{
  id: 'q1',                              // DON'T change
  question: 'Your question here?',       // ✅ CHANGE THIS
  subtitle: 'Optional helper text',      // ✅ CHANGE THIS
  options: [
    {
      label: 'Answer option text',       // ✅ CHANGE THIS
      value: 'option-id',                // DON'T change
      points: { result1: 3 },            // Change numbers to adjust scoring
    },
  ],
}
```

### Quiz Results
```typescript
{
  id: 'result-id',                        // DON'T change
  title: 'Result Title',                  // ✅ CHANGE THIS
  description: 'Result description...',   // ✅ CHANGE THIS
  tips: [
    'First tip here',                     // ✅ CHANGE THIS
    'Second tip here',                    // ✅ CHANGE THIS
  ],
}
```

### SEO Content (Below Each Tool)
```typescript
supportingContent: {
  intro: 'Introduction paragraph...',      // ✅ CHANGE THIS
  howToUse: 'How to use text...',          // ✅ CHANGE THIS
  faq: [
    {
      question: 'FAQ question?',           // ✅ CHANGE THIS
      answer: 'FAQ answer...',             // ✅ CHANGE THIS
    },
  ],
}
```

### Affiliate Products
File: `src/data/affiliates.ts`

```typescript
{
  id: 'product-id',                        // DON'T change (used in tool files)
  name: 'Product Name',                    // ✅ CHANGE THIS
  brand: 'Brand Name',                     // ✅ CHANGE THIS
  description: 'Product description',      // ✅ CHANGE THIS
  url: 'https://your-affiliate-link.com',  // ✅ CHANGE THIS (your affiliate link!)
  price: '$99',                            // ✅ CHANGE THIS
}
```

## Adding a New Affiliate Product

1. Open `src/data/affiliates.ts`
2. Copy an existing product block
3. Change the `id` to something unique (lowercase, hyphens only)
4. Update all the fields
5. Add the `id` to the relevant tool's `affiliateIds` array

## File Map

| What | Where |
|------|-------|
| Tool content & questions | `src/data/tools/[tool-name].ts` |
| Affiliate products | `src/data/affiliates.ts` |
| Tool registry (titles, descriptions) | `src/data/tools-registry.ts` |
| Site name & info | `src/lib/site-config.ts` |
| Homepage | `src/app/page.tsx` |
| About page | `src/app/about/page.tsx` |

## Setting Up Services

### Beehiiv (Email Newsletter)
1. Create account at beehiiv.com (free up to 2,500 subscribers)
2. Go to Settings → API → Create API Key
3. In Vercel dashboard → Settings → Environment Variables, add:
   - `BEEHIIV_API_KEY` = your API key
   - `BEEHIIV_PUBLICATION_ID` = your publication ID

### Google Analytics
1. Create account at analytics.google.com
2. Create a new property for realmenguide.com
3. Copy the Measurement ID (starts with G-)
4. In Vercel → Settings → Environment Variables, add:
   - `NEXT_PUBLIC_GA_ID` = G-XXXXXXXXXX

### Custom Domain (Hostinger)
1. In Vercel → Settings → Domains, add `realmenguide.com`
2. Vercel will show you DNS records
3. In Hostinger → DNS Zone Editor, add those records
4. Wait 24-48 hours for DNS propagation

### Google Search Console
1. Go to search.google.com/search-console
2. Add property: `realmenguide.com`
3. Verify via DNS (add TXT record in Hostinger)
4. Submit sitemap: `https://realmenguide.com/sitemap.xml`

## Creating OG Images (Social Share Images)

When you share a tool link on Twitter/Facebook, it shows a preview image. Here's how to create them:

1. Go to Canva.com (free)
2. Create design: 1200 x 630 pixels
3. Use dark background (#020617)
4. Add amber accent (#f59e0b)
5. Add the tool name in large text
6. Export as PNG
7. Upload to `public/og/[tool-slug].png`
8. In `src/data/tools-registry.ts`, add: `ogImage: '/og/[tool-slug].png'`

## Tips

- **Test before publishing:** After editing, wait 60 seconds and check the live site
- **Broken site?** If you accidentally break something, go to GitHub → the file → History → Revert to the last working version
- **Need help?** The most common mistake is deleting a comma or bracket. Double-check those!
