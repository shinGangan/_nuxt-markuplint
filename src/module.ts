import { defineNuxtModule, useNuxt } from "@nuxt/kit";
import { name, version, configKey, compatibility } from "../package.json";
import type { ModuleOptions } from "./types";
import { createTemplates } from "./templates";

export default defineNuxtModule<ModuleOptions>({
  meta: { name, version, configKey, compatibility },
  // Default configuration options of the Nuxt module
  defaults: (nuxt = useNuxt()) => ({
    configPath: `${nuxt.options.buildDir}/markuplint.config.js`,
    specs: {
      "\\.vue$": "@markuplint/vue-spec",
    },
    parser: {
      "\\.vue$": "@markuplint/vue-parser",
    },
    extends: ["markuplint:recommended"],
  }),
  setup(options, nuxt) {
    // Register the templates
    createTemplates(options, nuxt);
  },
});
