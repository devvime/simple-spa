import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@app": path.resolve(__dirname, "./src/app"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@pages": path.resolve(__dirname, "./src/app/pages"),
      "@core": path.resolve(__dirname, "./src/core"),
      "@config": path.resolve(__dirname, "./src/config"),
    },
  },
});
