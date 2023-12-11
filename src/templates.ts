import { useNuxt, addTemplate } from "@nuxt/kit";
import consola from "consola";
import type { ModuleOptions } from "./types";

/**
 * create templates for markuplint config
 * @param config
 * @param nuxt nuxt app
 */
export function createTemplates(config: ModuleOptions, nuxt = useNuxt()) {
  consola.info(`create ${config.configPath}`);
  // TODO: Parse config args.
  return addTemplate({
    filename: config.configPath,
    getContents: () => `module.exports = ${JSON.stringify(config, null, 2)};`,
    write: true,
  }).dst;
}
