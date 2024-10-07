
// @ts-nocheck


export const localeCodes =  [
  "en",
  "th",
  "cn"
]

export const localeLoaders = {
  "en": [{ key: "../lang/en.ts", load: () => import("../lang/en.ts?hash=02f35cf8&locale=en" /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_en_ts" */), cache: false }],
  "th": [{ key: "../lang/th.ts", load: () => import("../lang/th.ts?hash=422abd68&locale=th" /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_th_ts" */), cache: false }],
  "cn": [{ key: "../lang/cn.ts", load: () => import("../lang/cn.ts?hash=6ef3b995&locale=cn" /* webpackChunkName: "locale_C_58_C_58_Users_MSII_Desktop_pj_dansavanh_lang_cn_ts" */), cache: false }]
}

export const vueI18nConfigs = [
  () => import("../i18n.config.ts?hash=bffaebcb&config=1" /* webpackChunkName: "i18n_config_bffaebcb" */)
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "files": [
        "C:/Users/MSII/Desktop/pj/dansavanh/lang/en.ts"
      ]
    },
    {
      "code": "th",
      "files": [
        "C:/Users/MSII/Desktop/pj/dansavanh/lang/th.ts"
      ]
    },
    {
      "code": "cn",
      "files": [
        "C:/Users/MSII/Desktop/pj/dansavanh/lang/cn.ts"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "prefix_except_default",
  "lazy": true,
  "langDir": "lang",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/en.ts",
        "cache": false
      }
    ]
  },
  {
    "code": "th",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/th.ts",
        "cache": false
      }
    ]
  },
  {
    "code": "cn",
    "files": [
      {
        "path": "C:/Users/MSII/Desktop/pj/dansavanh/lang/cn.ts",
        "cache": false
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"
