import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { resolve } = require("path");

export default defineConfig({
  root: resolve(__dirname, "."), base: "./", resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  }, plugins: [react()]
});
