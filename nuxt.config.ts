// https://nuxt.com/docs/api/configuration/nuxt-config
// link: [{ rel: 'icon', type: 'image/*', href: '/public/favicon.ico' }]
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "http://dsv.dlance.la/client-api",
      //apiBase: 'http://localhost:4000/client-api',
    },
  },

  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     failOnError: false,
  //   },
  //   preset: "vercel",
  // },


  // nitro: {
  //   preset: 'vercel-edge',

  //   // prerender: {
      
  //   //   crawlLinks: true,
  //   //   routes: ['/sitemap.xml'],
  //   //   //  routes: ['/sitemap.xml'], // Ensure the sitemap route is pre-rendered
  //   // },
  // },



  // nitro: {
  //   preset: 'vercel-edge',

  //   prerender: {
  //     crawlLinks: true,
  //     // routes: ['/sitemap.xml'],
  //     //  routes: ['/sitemap.xml'], // Ensure the sitemap route is pre-rendered
  //   },
  // },

  // nitro: {
  //   preset: 'node-server'
  // },
  // nitro: {
  //   output: {
  //     dir: 'dist', // Set the output directory to `dist`
  //   },
  // },

  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
  },
  ssr: true, 

  app: {
    baseURL: "/",
    head: {
      title: "DANSAVANH",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", type: "image/*", href: "/public/favicon.ico" }],
    },
  },
  devtools: { enabled: false },

 // ssr: true,

  antd: {
    extractStyle: true,
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  modules: [
    "@ant-design-vue/nuxt",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-facebook-chat",
    "nuxt-aos",
    "@stefanobartoletti/nuxt-social-share",
  ],

  i18n: {
    locales: [
      {
        code: "en",
        file: { path: "en.ts", cache: false },
      },
      {
        code: "th",
        file: { path: "th.ts", cache: false },
      },
      {
        code: "cn",
        file: { path: "cn.ts", cache: false },
      },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    strategy: "prefix_except_default",

    // vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  // i18n: {

  // },
  //css: ["ant-design-vue/dist/reset.css"],



  // vite: {
  //   resolve: {
  //     alias: {
  //       "ant-design-vue/dist": "ant-design-vue/dist",
  //       "ant-design-vue/es": "ant-design-vue/es",
  //       "ant-design-vue/lib": "ant-design-vue/es",
  //       "ant-design-vue": "ant-design-vue/es",
  //     },
  //   },
  // },


  socialShare: {
    baseUrl: "https://www.dansavanh.net", // required!
    // other optional module options
  },
  compatibilityDate: "2024-07-16",
});