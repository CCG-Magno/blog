import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypeKatex from 'rehype-katex'; // relevant
import remarkMath from 'remark-math'; // relevant
import sitemap from '@astrojs/sitemap';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://CCG-Magno.github.io',
  base: 'blog',
  integrations: [mdx(remarkMath,
  // relevant
  rehypeKatex // relevant
  ), sitemap(), tailwind()]
});