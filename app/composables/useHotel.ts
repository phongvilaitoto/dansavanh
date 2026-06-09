export function useHotelBySlug(slug: string) {
  const { main, selectedIdx } = storeToRefs(useMainStore())

  const hotel = computed(() => {
    if (!main.value.hotels) return null
    return main.value.hotels.find(
      (h: any) => h.titles[selectedIdx.value] === slug,
    )
  })

  return { hotel }
}
