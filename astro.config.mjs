import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.mjs',
    }),
  ],
  output: 'static',
  site: 'https://minerva-systems.github.io',
  base: '/',
  server: {
    port: 3000,
    open: true,
  },
});
