// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    server: { port: 4322 }
  },

  integrations: [vue()]
});