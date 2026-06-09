<template>
  <section class="section" data-aos="fade-up">
    <div class="container">
      <UiSectionHeader
        :title="main.home?.titles?.[selectedIdx] || 'DANSAVANH'"
        :subtitle="main.home?.descriptions?.[selectedIdx]"
        center
        show-ornament
      />

      <HomeVideoPlayer
        v-if="main.home?.video"
        :video="main.home.video"
        class="welcome__video"
      />

      <div class="grid-3" style="margin-top: 3rem">
        <NuxtLink
          v-for="(card, idx) in main.home?.cardZone || []"
          :key="idx"
          :to="localePath(card.link)"
          class="card-luxury"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
          @mouseenter="hovered = idx"
          @mouseleave="hovered = null"
        >
          <img :src="card.img" :alt="card.titles[selectedIdx]" class="card-luxury__image" style="aspect-ratio: 3/4; min-height: 420px;" />
          <img v-if="icons[idx]" :src="icons[idx]" alt="" class="card-luxury__icon" />
          <div class="card-luxury__overlay">
            <h3 class="card-luxury__title">{{ card.titles[selectedIdx] }}</h3>
            <p v-if="hovered === idx" class="card-luxury__desc">{{ card.descriptions[selectedIdx] }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { main, selectedIdx } = storeToRefs(useMainStore())
const hovered = ref<number | null>(null)

const icons = [
  'https://storage.googleapis.com/dsv-bucket/logo_casino.png',
  'https://storage.googleapis.com/dsv-bucket/logo_jetski.png',
  'https://storage.googleapis.com/dsv-bucket/logo_golf.png',
]
</script>

<style scoped>
.welcome__video {
  max-width: 900px;
  margin: 0 auto;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
</style>
