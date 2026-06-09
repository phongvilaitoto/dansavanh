<template>
  <section class="page-hero" :style="{ backgroundImage: `url('${image}')` }">
    <div class="page-hero__content" data-aos="fade-up">
      <p v-if="caption" class="page-hero__caption">{{ caption }}</p>
      <h1 class="page-hero__title">{{ title }}</h1>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  caption?: string
  image: string
}>()
</script>
