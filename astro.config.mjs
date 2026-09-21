// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { singleSitemap } from './scripts/single-sitemap.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://rubbishremovalteam.co.uk',
  trailingSlash: 'never',
  integrations: [sitemap(), singleSitemap()],
});
