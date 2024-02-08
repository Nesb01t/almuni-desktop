import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { resolve } = require("path");

export default defineConfig({
  root: resolve(__dirname, "."),
  base: "./",
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src", "components"),
      "@utils": resolve(__dirname, "./src", "utils"),
      "@config": resolve(__dirname, "./src", "config"),
    },
  },
  plugins: [react()],
});
