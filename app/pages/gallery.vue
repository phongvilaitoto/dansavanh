<template>
  <div>
    <UiPageHero :title="$t('gallery')" image="/images/more/career-header.JPG" />

    <section class="section">
      <div class="container">
        <UiMasonryGallery v-if="galleries.length" :images="galleries" />
        <UiEmptyState
          v-else
          :title="$t('gallery')"
          description="Gallery images will appear here once available."
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { main } = storeToRefs(useMainStore())
const galleries = computed(() => main.value?.galleries || [])
</script>
