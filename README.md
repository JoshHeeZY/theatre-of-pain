# Theatre of Pain

An unofficial Manchester United fan blog built with [Astro](https://astro.build).

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

## Writing a post

Add a Markdown file to `src/content/posts/`. The filename becomes the URL (`/posts/<filename>/`).

```md
---
title: "United 3–0 Somebody"
description: "One-line standfirst shown on cards and in RSS."
pubDate: 2026-11-22
author: The Sufferer          # optional
category: match-reports      # match-reports | transfers | opinion | history
tags: [premier-league]       # optional
mood: 9                      # Pain-o-Meter, 1 (despair) to 10 (delirium)
score: "United 3–0 Somebody" # optional, shown as a scoreboard
featured: true               # optional, pins the post as the homepage lead
draft: false                 # optional, drafts only show in `npm run dev`
---

Your post here.
```

## Customising

- Site name, tagline and categories: `src/consts.ts`
- Colours and fonts: `src/styles/global.css`
- Domain (used for RSS, sitemap and canonical URLs): `site` in `astro.config.mjs`

## Deploying

The build is fully static, so `dist/` can go to Netlify, Vercel, Cloudflare Pages or GitHub Pages.
