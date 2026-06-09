<template>
  <section
    v-if="main.home?.hotelZone"
    class="hotel-section"
    data-aos="fade-up"
  >
    <div class="container">
      <UiSectionHeader
        :title="main.home.hotelZone.titles[selectedIdx]"
        :eyebrow="$t('ourHotels')"
        center
        show-ornament
      />

      <div class="hotel-section__banner">
        <img :src="main.home.hotelZone.img" :alt="main.home.hotelZone.titles[selectedIdx]" />
        <div class="hotel-section__overlay">
          <h3>{{ main.home.hotelZone.titles[selectedIdx] }}</h3>
        </div>
      </div>

      <div class="text-center" style="margin-top: 2rem">
        <NuxtLink :to="localePath('/hotels')" class="btn btn--emerald">
          {{ $t('viewHotelsButton') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { main, selectedIdx } = storeToRefs(useMainStore())
</script>

<style lang="scss" scoped>
.hotel-section {
  padding-block: clamp(3rem, 8vw, 6rem);
  background:
    linear-gradient(rgba(13, 17, 23, 0.7), rgba(13, 17, 23, 0.7)),
    url('/images/home-bg-1.jpg') center/cover no-repeat;
  color: var(--color-white);

  &__banner {
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);

    img {
      width: 100%;
      aspect-ratio: 16/7;
      object-fit: cover;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(13, 17, 23, 0.8), transparent 60%);
    display: flex;
    align-items: flex-end;
    padding: 2.5rem;

    h3 {
      font-family: var(--font-display);
      font-size: clamp(1.75rem, 4vw, 2.5rem);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
}
</style>
