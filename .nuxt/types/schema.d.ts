import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@ant-design-vue/nuxt`
     */
    ["antd"]: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-facebook-chat`
     */
    ["nuxtFacebookChat"]: typeof import("nuxt-facebook-chat").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-aos`
     */
    ["aos"]: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@stefanobartoletti/nuxt-social-share`
     */
    ["socialShare"]: typeof import("@stefanobartoletti/nuxt-social-share").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@ant-design-vue/nuxt`
     */
    ["antd"]?: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-facebook-chat`
     */
    ["nuxtFacebookChat"]?: typeof import("nuxt-facebook-chat").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-aos`
     */
    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@stefanobartoletti/nuxt-social-share`
     */
    ["socialShare"]?: typeof import("@stefanobartoletti/nuxt-social-share").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@ant-design-vue/nuxt", Exclude<NuxtConfig["antd"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-facebook-chat", Exclude<NuxtConfig["nuxtFacebookChat"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["@stefanobartoletti/nuxt-social-share", Exclude<NuxtConfig["socialShare"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `@ant-design-vue/nuxt`
     * @see https://www.npmjs.com/package/@ant-design-vue/nuxt
     */
    ["antd"]: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-facebook-chat`
     * @see https://www.npmjs.com/package/nuxt-facebook-chat
     */
    ["nuxtFacebookChat"]: typeof import("nuxt-facebook-chat").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-aos`
     * @see https://www.npmjs.com/package/nuxt-aos
     */
    ["aos"]: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@stefanobartoletti/nuxt-social-share`
     * @see https://www.npmjs.com/package/@stefanobartoletti/nuxt-social-share
     */
    ["socialShare"]: typeof import("@stefanobartoletti/nuxt-social-share").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `@ant-design-vue/nuxt`
     * @see https://www.npmjs.com/package/@ant-design-vue/nuxt
     */
    ["antd"]?: typeof import("@ant-design-vue/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/i18n`
     * @see https://www.npmjs.com/package/@nuxtjs/i18n
     */
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@pinia/nuxt`
     * @see https://www.npmjs.com/package/@pinia/nuxt
     */
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-facebook-chat`
     * @see https://www.npmjs.com/package/nuxt-facebook-chat
     */
    ["nuxtFacebookChat"]?: typeof import("nuxt-facebook-chat").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-aos`
     * @see https://www.npmjs.com/package/nuxt-aos
     */
    ["aos"]?: typeof import("nuxt-aos").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@stefanobartoletti/nuxt-social-share`
     * @see https://www.npmjs.com/package/@stefanobartoletti/nuxt-social-share
     */
    ["socialShare"]?: typeof import("@stefanobartoletti/nuxt-social-share").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["@ant-design-vue/nuxt", Exclude<NuxtConfig["antd"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["nuxt-facebook-chat", Exclude<NuxtConfig["nuxtFacebookChat"], boolean>] | ["nuxt-aos", Exclude<NuxtConfig["aos"], boolean>] | ["@stefanobartoletti/nuxt-social-share", Exclude<NuxtConfig["socialShare"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },
  }
  interface PublicRuntimeConfig {
   apiBase: string,

   i18n: {
      baseUrl: string,

      defaultLocale: string,

      defaultDirection: string,

      strategy: string,

      lazy: boolean,

      rootRedirect: any,

      routesNameSeparator: string,

      defaultLocaleRouteNameSuffix: string,

      skipSettingLocaleOnNavigate: boolean,

      differentDomains: boolean,

      trailingSlash: boolean,

      configLocales: Array<{

      }>,

      locales: {
         en: {
            domain: any,
         },

         th: {
            domain: any,
         },

         cn: {
            domain: any,
         },
      },

      detectBrowserLanguage: {
         alwaysRedirect: boolean,

         cookieCrossOrigin: boolean,

         cookieDomain: any,

         cookieKey: string,

         cookieSecure: boolean,

         fallbackLocale: string,

         redirectOn: string,

         useCookie: boolean,
      },

      experimental: {
         localeDetector: string,

         switchLocalePathLinkSSR: boolean,

         autoImportTranslationFunctions: boolean,
      },

      multiDomainLocales: boolean,
   },

   aos: any,

   socialShare: {
      baseUrl: string,

      styled: boolean,

      label: boolean,

      icon: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }