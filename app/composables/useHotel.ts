export function useHotelBySlug(slug: string) {
  const { main } = storeToRefs(useMainStore())

  const hotel = computed(() => {
    if (!main.value.hotels) return null
    return main.value.hotels.find((h: any) =>
      h.titles?.some((t: string) => t === slug),
    ) ?? null
  })

  return { hotel }
}
