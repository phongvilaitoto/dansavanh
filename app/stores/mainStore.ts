const LOCALE_INDEX: Record<string, number> = { en: 0, th: 1, cn: 2 }

export const useMainStore = defineStore('mainStore', () => {
  const main = reactive<Record<string, any>>({})
  const cookieSelectedIdx = useCookie('selectedIdx', { default: () => '0' })
  const selectedIdx = ref(0)
  const isLoaded = ref(false)

  const parsed = parseInt(cookieSelectedIdx.value || '0')
  if (!Number.isNaN(parsed) && parsed >= 0 && parsed <= 2) {
    selectedIdx.value = parsed
  }

  watch(selectedIdx, (val) => {
    cookieSelectedIdx.value = val.toString()
  })

  function syncIndexFromLocale(code: string) {
    const idx = LOCALE_INDEX[code]
    if (idx !== undefined && selectedIdx.value !== idx) {
      selectedIdx.value = idx
    }
  }

  return { main, selectedIdx, isLoaded, syncIndexFromLocale }
})
