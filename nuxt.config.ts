// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://dsv.dlance.la/client-api',
    },
  },

  routeRules: {
    ...(process.env.NODE_ENV === 'production' ? { '/**': { isr: 60 } } : {}),
    '/invesment-project': { redirect: '/investment-project' },
    '/th/invesment-project': { redirect: '/th/investment-project' },
    '/cn/invesment-project': { redirect: '/cn/investment-project' },
  },

  css: ['~/assets/css/main.scss'],

  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-aos',
  ],

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.ts' },
      { code: 'th', name: 'ไทย', file: 'th.ts' },
      { code: 'cn', name: '中文', file: 'cn.ts' },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    vueI18n: 'i18n.config.ts',
  },

  app: {
    head: {
      title: 'DANSAVANH',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo-dansavanh4.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;600;700&display=swap',
        },
      ],
      meta: [
        { name: 'description', content: 'Dansavanh Resort & Casino — luxury resort, casino, golf and hotels in Laos.' },
      ],
    },
  },

  aos: {
    duration: 800,
    once: true,
    offset: 60,
  },
})
