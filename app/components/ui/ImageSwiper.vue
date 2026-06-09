<template>
  <ClientOnly>
    <div v-if="safeItems.length" class="image-swiper">
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :loop="safeItems.length > 1"
        :effect="'fade'"
        :pagination="safeItems.length > 1 ? { clickable: true } : false"
        :navigation="safeItems.length > 1"
        :autoplay="autoplay && safeItems.length > 1 ? { delay: 4000 } : false"
        class="image-swiper__swiper"
        @swiper="onSwiper"
      >
        <SwiperSlide v-for="(item, idx) in safeItems" :key="idx">
          <div
            class="image-swiper__slide"
            :style="{ backgroundImage: `url('${getImage(item)}')` }"
          />
        </SwiperSlide>
      </Swiper>
      <p v-if="label && swipy && safeItems.length > 1" class="image-swiper__label">
        {{ getLabel(swipy.realIndex) }}
      </p>
    </div>
    <div v-else class="image-swiper image-swiper--empty" />
    <template #fallback>
      <div class="image-swiper image-swiper--loading" />
    </template>
  </ClientOnly>
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

const safeItems = computed(() => (props.items || []).filter(Boolean))

function getImage(item: any) {
  if (typeof item === 'string') return item
  return item?.img || ''
}

function onSwiper(swiper: any) {
  swipy.value = swiper
}

function getLabel(index: number) {
  const item = safeItems.value[index]
  if (!item || typeof item === 'string') return ''
  return item.titles?.[selectedIdx.value] || ''
}
</script>

<style lang="scss" scoped>
.image-swiper {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;

  &--loading,
  &--empty {
    aspect-ratio: 16/10;
    min-height: 280px;
    background: var(--color-sand);
  }

  &__slide {
    aspect-ratio: 16/10;
    background-size: cover;
    background-position: center;
    min-height: 320px;

    @media (max-width: 768px) {
      min-height: 240px;
    }
  }

  &__label {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    color: var(--color-white);
    font-family: var(--font-display);
    font-size: 1.15rem;
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
