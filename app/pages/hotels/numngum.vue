<template>
  <div v-if="hotel">
    <HotelDetail :hotel="hotel" />
  </div>
  <div v-else class="section">
    <div class="container">
      <UiEmptyState title="Loading..." description="Please wait while we load hotel information." />
    </div>
  </div>
</template>

<script setup lang="ts">
const { main } = storeToRefs(useMainStore())
const hotel = computed(() =>
  main.value.hotels?.find((h: any) =>
    h.titles?.some((t: string) => t?.toUpperCase().includes('SWAN LAKE') || t?.toUpperCase().includes('NAM NGUM'))
  ) ?? main.value.hotels?.[0] ?? null
)
</script>
