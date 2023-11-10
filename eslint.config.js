// @ts-check

import { FlatCompat } from "@eslint/eslintrc";
import { fileURLToPath } from "node:url";
import { dirname } from "pathe";

const eslintrc = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
export default [
  {
    ignores: ["dist/**/*", "node_modules/**/*", ".nuxt/**/*"],
  },
  // NOTE: TypeError: Missing parameter 'recommendedConfig' in FlatCompat constructor. が出るので一旦コメントアウト
  // 原因は @nuxt/eslint-config が Flat Config に対応していないため
  // ...eslintrc.extends("@nuxt/eslint-config"),
];
