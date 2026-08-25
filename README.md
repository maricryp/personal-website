# Business developer site

A simple personal site and blog, built with Next.js (App Router) and Tailwind CSS.

## Structure

- `app/page.tsx` — home page (hero + latest posts)
- `app/about/page.tsx` — about page
- `app/contact/page.tsx` — contact page
- `app/blog/page.tsx` — blog index
- `app/blog/[slug]/page.tsx` — individual post page
- `posts/*.md` — blog posts, written in Markdown with frontmatter (`title`, `date`, `excerpt`)
- `lib/posts.ts` — reads and parses the Markdown files

## Running locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a new post

Create a new `.md` file in `posts/`, e.g. `posts/my-new-post.md`:

```md
---
title: "My New Post"
date: "2026-08-24"
excerpt: "A short one-line summary shown on the blog index."
---

Your post content here, in Markdown.
```

It will automatically appear on the blog index and home page, sorted by date.

## Things to customize before publishing

- `app/layout.tsx` — site title/description and your name in the header/footer
- `app/page.tsx` — hero copy on the home page
- `app/about/page.tsx` — your real bio and focus areas
- `app/contact/page.tsx` — your real email and LinkedIn URL (currently placeholders)
- `app/favicon.ico` — replace with your own icon

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — connect the repo (or run `vercel` from this folder) and it deploys automatically. Any host that supports Next.js works too.
