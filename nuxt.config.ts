// https://nuxt.com/docs/api/configuration/nuxt-config
// link: [{ rel: 'icon', type: 'image/*', href: '/public/favicon.ico' }]
export default defineNuxtConfig({
  app: {
    head: {
      title:"DANSAVANH",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
     
    }
  },
  devtools: { enabled: true },
  antd:{
    extractStyle: true,
  },
  modules: [
    '@ant-design-vue/nuxt',
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  },
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
