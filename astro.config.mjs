// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theatre-of-pain.netlify.app',
  integrations: [sitemap()],
});
