import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';

if (existsSync('.env')) process.loadEnvFile('.env');

// Set PUBLIC_BASE_PATH=/ for a user site or a custom domain.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://josecortesdev.github.io',
  base: process.env.PUBLIC_BASE_PATH || '/portfolio',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
