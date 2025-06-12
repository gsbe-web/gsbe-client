/// <reference types="vitest/config" />

import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => ({
  plugins: [tsconfigPaths(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@loggers": path.resolve(__dirname, "./src/loggers"),
      "@mocks": path.resolve(__dirname, "./src/mocks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@typings": path.resolve(__dirname, "./src/typings"),
      "@utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  test: {
    bail: 1,
    clearMocks: true,
    coverage: {
      enabled: true,
      exclude: ["src/main.tsx", "src/mocks/browser.ts"],
      include: ["src/**/*"],
      reporter: ["text", "lcov"],
      reportsDirectory: "coverage",
      thresholds: {
        "100": true,
      },
    },
    css: false,
    environment: "happy-dom",
    globals: true,
    include: ["src/**/*.test.ts?(x)"],
    setupFiles: "src/test-setup.ts",
  },
}));
