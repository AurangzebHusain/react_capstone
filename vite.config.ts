import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      jscolor: path.resolve("./util/jscolor.js"),
      app: path.resolve("./app"),
      css: path.resolve("./css"),
      util: path.resolve("./util"),
    },
  },
  plugins: [react()],
});
