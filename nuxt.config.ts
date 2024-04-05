

// https://nuxt.com/docs/api/configuration/nuxt-config
// link: [{ rel: 'icon', type: 'image/*', href: '/public/favicon.ico' }]
export default defineNuxtConfig({

  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target

  runtimeConfig: {
    public: {
      apiBase: 'https://server.khonkong.com/client-api',
      //apiBase: 'http://localhost:4000/client-api',
    }
    // app: {
    //   baseURL: 
    // }
  },
  app: {
     baseURL: '/',
    head: {
      title:"DANSAVANH",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
     
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false, 
    },
    preset: "vercel",
  },
  devtools: { enabled: true },
  antd:{
    extractStyle: true,
  },
  pinia: {
    storesDirs: ['./stores/**',],
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-facebook-chat',
    'nuxt-aos'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file:  { path: 'en.ts', cache: false } 
      },
      {
        code: 'th',
        file: { path: 'th.ts', cache: false } 
      },
      {
        code: 'cn',
        file: { path: 'cn.ts', cache: false } 
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',

   // vueI18n: './i18n.config.ts' // if you are using custom path, default
  },

  // i18n: {
    
  // },
  css: [
    'ant-design-vue/dist/reset.css',
  ],
  vite: {
    resolve: {
      alias: {
        'ant-design-vue/dist': 'ant-design-vue/dist',
        'ant-design-vue/es': 'ant-design-vue/es',
        'ant-design-vue/lib': 'ant-design-vue/es',
        'ant-design-vue': 'ant-design-vue/es',
      },
    },
  },
})
