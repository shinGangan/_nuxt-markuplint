import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { name, version, configKey, compatibility } from "../package.json";
import type { ModuleOptions } from "./types";

export default defineNuxtModule<ModuleOptions>({
  meta: { name, version, configKey, compatibility },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
