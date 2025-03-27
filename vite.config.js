import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@db": path.resolve(__dirname, "./src/db"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@context": path.resolve(__dirname, "./src/context"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
    },
  },
});
