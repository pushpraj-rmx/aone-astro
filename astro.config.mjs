// astro.config.mjs
import { defineConfig } from 'astro/config';
import viteConfig from './vite.config.js';
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: viteConfig,
  integrations: [react(), sitemap()],
  site: 'https://theaoneglobal.in',
  output: 'static'
});