<template>
  <div>
    <UiPageHero :title="$t('gallery')" image="/images/more/career-header.JPG" />

    <section class="section">
      <div class="container">
        <UiMasonryGallery v-if="galleries.length" :images="galleries" />
        <p v-else class="text-center text-muted">Gallery images loading...</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { main } = storeToRefs(useMainStore())
const galleries = computed(() => main.value?.galleries || [])
</script>
