export const useMainStore = defineStore('mainStore', () => {
  const main = reactive<Record<string, any>>({})
  const cookieSelectedIdx = useCookie('selectedIdx')
  const selectedIdx = ref(0)

  if (cookieSelectedIdx.value) {
    selectedIdx.value = parseInt(cookieSelectedIdx.value)
  }

  watch(selectedIdx, () => {
    cookieSelectedIdx.value = selectedIdx.value.toString()
  })

  return { main, selectedIdx }
})
