<template>
  <HotelDetail v-if="hotel" :hotel="hotel" />
</template>

<script setup lang="ts">
const { main } = storeToRefs(useMainStore())
const hotel = computed(() => main.value.hotels?.[1])
</script>
