export default defineNuxtPlugin((nuxtApp) => {
  const store = useMainStore()
  const i18n = nuxtApp.$i18n

  store.syncIndexFromLocale(unref(i18n.locale))

  watch(() => unref(i18n.locale), (code) => {
    if (code) store.syncIndexFromLocale(code)
  })
})
