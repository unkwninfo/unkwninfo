import { defineConfig } from "vite";
import postcssNesting from "postcss-nesting";
export default defineConfig({
  server: {
    port: 2333,
    open: true,
  },
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
