# Mariana Coimbra Rodrigues

Personal website and blog, live at [marianainweb3.com](https://marianainweb3.com).

Built with Next.js (App Router), TypeScript and Tailwind CSS, exported as a static site and hosted on Cloudflare Pages. Every push to `main` is built and deployed automatically.

## Structure

- `app/page.tsx`: home page (hero, what I do, numbers, methods, experience, contact, latest posts)
- `app/blog/`: blog index and individual post pages
- `app/contact/page.tsx`: contact page
- `app/globals.css`: color palette and typography
- `lib/experience.ts`: work history shown on the home page
- `lib/contact.ts`: contact details
- `lib/posts.ts`: reads and parses the Markdown posts
- `posts/*.md`: blog posts, written in Markdown with `title`, `date` and `excerpt` frontmatter

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Writing a post

Add a Markdown file to `posts/`:

```md
---
title: "My New Post"
date: "2026-10-04"
excerpt: "A short summary shown on the blog index."
---

The post itself, in Markdown.
```

It shows up on the blog page and the home page, newest first.

## Deploying

Cloudflare Pages is connected to this repo with:

- Build command: `npm run build`
- Output directory: `out`
