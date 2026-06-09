<template>
  <section class="hero">
    <ClientOnly>
      <Swiper
        v-if="slides.length"
        :modules="modules"
        :slides-per-view="1"
        :loop="slides.length > 1"
        :autoplay="slides.length > 1 ? { delay: 5000, disableOnInteraction: false } : false"
        :effect="'fade'"
        :pagination="{ clickable: true }"
        :navigation="slides.length > 1"
        class="hero__swiper"
      >
        <SwiperSlide v-for="(image, idx) in slides" :key="idx">
          <div class="hero__slide" :style="{ backgroundImage: `url('${image}')` }">
            <div class="hero__overlay" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div v-else class="hero__slide hero__slide--fallback">
        <div class="hero__overlay" />
      </div>
      <template #fallback>
        <div class="hero__slide hero__slide--fallback"><div class="hero__overlay" /></div>
      </template>
    </ClientOnly>

    <div class="hero__content container" data-aos="fade-up">
      <p class="hero__eyebrow">{{ $t('stepInTheWorld') }}</p>
      <h1 class="hero__title">{{ title }}</h1>
      <p v-if="description" class="hero__desc">{{ description }}</p>
      <div class="hero__actions">
        <NuxtLink :to="localePath('/hotels')" class="btn btn--primary">{{ $t('viewHotelsButton') }}</NuxtLink>
        <NuxtLink :to="localePath('/casino')" class="btn btn--outline-light">{{ $t('casino') }}</NuxtLink>
      </div>
    </div>

    <div class="hero__scroll" aria-hidden="true">
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

const slides = computed(() => main.value.home?.imgs?.length
  ? main.value.home.imgs
  : ['/images/home-bg-1.jpg'])

const title = computed(() =>
  main.value.home?.titles?.[selectedIdx.value] || 'DANSAVANH')

const description = computed(() =>
  main.value.home?.descriptions?.[selectedIdx.value] || '')
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

    &--fallback {
      background:
        linear-gradient(135deg, rgba(13, 17, 23, 0.9), rgba(26, 22, 18, 0.85)),
        url('/images/home-bg-1.jpg') center/cover no-repeat;
    }
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      160deg,
      rgba(13, 17, 23, 0.45) 0%,
      rgba(13, 17, 23, 0.35) 40%,
      rgba(13, 17, 23, 0.82) 100%
    );
  }

  &__content {
    position: absolute;
    bottom: clamp(4rem, 12vh, 8rem);
    left: 0;
    right: 0;
    z-index: 2;
    color: var(--color-white);
    max-width: 720px;
  }

  &__eyebrow {
    font-size: 0.72rem;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-gold-light);
    margin-bottom: 1rem;
  }

  &__title {
    font-family: var(--font-display);
    font-size: clamp(2.25rem, 5.5vw, 4.25rem);
    font-weight: 700;
    line-height: 1.08;
    margin-bottom: 1rem;
    text-transform: uppercase;
    text-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  }

  &__desc {
    font-size: 1.05rem;
    line-height: 1.65;
    opacity: 0.92;
    margin-bottom: 2rem;
    max-width: 520px;
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
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
    color: rgba(255, 255, 255, 0.45);
    font-size: 0.62rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;

    &-line {
      width: 1px;
      height: 36px;
      background: linear-gradient(to bottom, var(--color-gold), transparent);
      animation: scrollPulse 2s ease-in-out infinite;
    }
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: var(--color-white);
    opacity: 0.5;
    transition: opacity var(--transition);
    &:hover { opacity: 1; }
    &::after { font-size: 1.25rem; }
  }

  :deep(.swiper-pagination-bullet) {
    background: var(--color-white);
    opacity: 0.35;
    width: 8px;
    height: 8px;
    transition: all var(--transition);
  }

  :deep(.swiper-pagination-bullet-active) {
    background: var(--color-gold);
    opacity: 1;
    width: 24px;
    border-radius: 4px;
  }
}

@keyframes scrollPulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}
</style>
