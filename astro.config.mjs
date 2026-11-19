// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Change this to your real domain before deploying
  site: 'https://theatreofpain.example.com',
  integrations: [sitemap()],
});
