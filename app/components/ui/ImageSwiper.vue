<template>
  <div class="image-swiper">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="items.length > 1"
      :effect="'fade'"
      :pagination="{ clickable: true }"
      :navigation="true"
      :autoplay="autoplay ? { delay: 4000 } : false"
      class="image-swiper__swiper"
      @swiper="onSwiper"
    >
      <SwiperSlide v-for="(item, idx) in items" :key="idx">
        <div
          class="image-swiper__slide"
          :style="{ backgroundImage: `url('${item.img || item}')` }"
        />
      </SwiperSlide>
    </Swiper>
    <p v-if="label && swipy" class="image-swiper__label">
      {{ getLabel(swipy.realIndex) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const props = defineProps<{
  items: any[]
  label?: boolean
  autoplay?: boolean
}>()

const { selectedIdx } = storeToRefs(useMainStore())
const modules = [Autoplay, EffectFade, Navigation, Pagination]
const swipy = ref<any>()

function onSwiper(swiper: any) {
  swipy.value = swiper
}

function getLabel(index: number) {
  const item = props.items[index]
  if (!item) return ''
  return item.titles?.[selectedIdx.value] || ''
}
</script>

<style lang="scss" scoped>
.image-swiper {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;

  &__slide {
    aspect-ratio: 16/10;
    background-size: cover;
    background-position: center;
    min-height: 360px;

    @media (max-width: 768px) {
      min-height: 280px;
    }
  }

  &__label {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--color-white);
    font-family: var(--font-display);
    font-size: 1.25rem;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.5);
    pointer-events: none;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    color: var(--color-white);
    opacity: 0.7;
    &:hover { opacity: 1; }
  }

  :deep(.swiper-pagination-bullet-active) {
    background: var(--color-gold);
  }
}
</style>
