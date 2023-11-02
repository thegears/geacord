import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), purgecss(), robotsTxt(), sitemap()],
  output: "hybrid",
  adapter: vercel()
});
