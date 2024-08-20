// astro.config.mjs
import { defineConfig } from 'astro/config';
import viteConfig from './vite.config.js';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: viteConfig,
  integrations: [react()]
});