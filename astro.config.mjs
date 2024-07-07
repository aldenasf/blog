import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://aldenasf.github.io/",
    base: "/blog",
    integrations: [tailwind(), mdx(), icon(), sitemap()],
});
