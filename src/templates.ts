import { useNuxt, addTemplate } from "@nuxt/kit";
import type { ModuleOptions } from "./types";

/**
 *
 * @param config
 * @param nuxt nuxt app
 */
export function createTemplates(config: ModuleOptions, nuxt = useNuxt()) {
  // TODO: Parse config args.
  return addTemplate({
    filename: config.configPath,
    getContents: () => `
// @ts-check
/**
  * @type {import("@markuplint/ml-config").Config}
  */
module.exports = {
  specs: { ${config.specs} },
  parser: { ${config.parser} },
  extends: ${config.extends},
};`,
    write: true,
  }).dst;
}
