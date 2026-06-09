<template>
  <section v-if="main.home?.imgs?.length" class="hero">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :effect="'fade'"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="hero__swiper"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(image, idx) in main.home.imgs" :key="idx">
        <div class="hero__slide" :style="{ backgroundImage: `url('${image}')` }">
          <div class="hero__overlay" />
        </div>
      </SwiperSlide>
    </Swiper>

    <div class="hero__content container" data-aos="fade-up">
      <p class="hero__eyebrow">{{ $t('stepInTheWorld') }}</p>
      <h1 class="hero__title">{{ main.home.titles?.[selectedIdx] }}</h1>
      <p class="hero__desc">{{ main.home.descriptions?.[selectedIdx] }}</p>
      <div class="hero__actions">
        <NuxtLink :to="localePath('/hotels')" class="btn btn--primary">Explore Resorts</NuxtLink>
        <NuxtLink :to="localePath('/casino')" class="btn btn--outline-light">Visit Casino</NuxtLink>
      </div>
    </div>

    <div class="hero__scroll">
      <span>Scroll</span>
      <div class="hero__scroll-line" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const localePath = useLocalePath()
const { main, selectedIdx } = storeToRefs(useMainStore())
const modules = [Autoplay, EffectFade, Navigation, Pagination]
const swipy = ref<any>()

function onSwiper(swiper: any) {
  swipy.value = swiper
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  max-height: 900px;
  overflow: hidden;

  &__swiper {
    position: absolute;
    inset: 0;
    height: 100%;
  }

  &__slide {
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(13, 17, 23, 0.35) 0%,
      rgba(13, 17, 23, 0.55) 50%,
      rgba(13, 17, 23, 0.8) 100%
    );
  }

  &__content {
    position: absolute;
    bottom: clamp(4rem, 12vh, 8rem);
    left: 0;
    right: 0;
    z-index: 2;
    color: var(--color-white);
    max-width: 700px;
  }

  &__eyebrow {
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--color-gold-light);
    margin-bottom: 1rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  &__desc {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
    margin-bottom: 2rem;
    max-width: 540px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__scroll {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    &-line {
      width: 1px;
      height: 40px;
      background: linear-gradient(to bottom, var(--color-gold), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: var(--color-white);
    opacity: 0.6;
    transition: opacity var(--transition);

    &:hover { opacity: 1; }

    &::after { font-size: 1.5rem; }
  }

  :deep(.swiper-pagination-bullet) {
    background: var(--color-white);
    opacity: 0.4;
    width: 10px;
    height: 10px;
  }

  :deep(.swiper-pagination-bullet-active) {
    background: var(--color-gold);
    opacity: 1;
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}
</style>
