<template>
  <ContentWellnessShowcase :room="nearbyData" />
</template>

<script setup lang="ts">
import { nearbyData } from '~/data/nearby'

useHead({ title: 'Nearby Attractions — DANSAVANH' })
</script>
