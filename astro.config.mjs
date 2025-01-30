// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  adapter: vercel({
    isr: {
      expiration: 120,
    },
  }),
});
