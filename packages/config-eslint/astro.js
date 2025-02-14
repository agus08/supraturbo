import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import pluginAstro from "eslint-plugin-astro";
import globals from "globals";
import { config as baseConfig } from "./index.js";

/**
 * A custom ESLint configuration for libraries that use Astro.
 *
 * @type {import("eslint").Linter.Config} */
export const config = [
  ...baseConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginAstro.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginAstro.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
];