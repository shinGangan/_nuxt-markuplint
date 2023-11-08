import type { Config } from "@markuplint/ml-config";

/**
 * The options of the Nuxt module for markuplint.
 * @description The options extends markuplint properties.
 * Show details at [Configuring properties](https://markuplint.dev/docs/configuration/properties).
 */
export interface ModuleOptions extends Config {
  /**
   * the path to the markuplint configuration file.
   * @see https://markuplint.dev/docs/configuration
   * @default "<buildDir>/markuplint.config.js"
   * @example "markuplint.config.js"
   */
  configPath?: string;
}
