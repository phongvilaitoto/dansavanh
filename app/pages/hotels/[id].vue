<template>
  <HotelDetail v-if="hotel" :hotel="hotel" />
  <div v-else class="container section text-center">
    <p>Hotel not found.</p>
    <NuxtLink :to="localePath('/hotels')" class="btn btn--primary">View All Hotels</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { hotel } = useHotelBySlug(route.params.id as string)
</script>
