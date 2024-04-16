import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "./src"),
      "@assets/*": resolve(process.cwd(), "./src/assets/*"),
      "@atoms/*": resolve(process.cwd(), "./src/core/atoms/*"),
      "@components/*": resolve(process.cwd(), "./src/components/*"),
      "@utils/*": resolve(process.cwd(), "./src/core/utils/*")
    }
  },
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "named",
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: "**/*.svg"
    })
  ]
});
