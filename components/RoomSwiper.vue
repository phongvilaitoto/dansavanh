<template>
  <div>
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :effect="'fade'"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      :autoplay="true"
    >
      <SwiperSlide
        v-for="(i, idx) in [...rooms, rooms[2]]"
        :key="idx"
        @click="swipy.slideNext()"
      >
        <div
          class="is-desktop"
          :style="{
            width: '100%',
            height: '410px',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + i.img + ')',
            backgroundPosition: 'center',
          }"
        ></div>
        <div
          class="is-mobile"
          :style="{
            width: '100%',
            height: '510px',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + i.img + ')',
            backgroundPosition: 'center',
          }"
        ></div>
      </SwiperSlide>

      <!-- <div class="swiper-pagination"></div> -->

      <div class="swiper-button-prev" @click="swipy.slidePrev()"></div>
      <div class="swiper-button-next" @click="swipy.slideNext()"></div>
    </Swiper>
    <div
      v-if="swipy"
      style="position: relative; display: flex; justify-content: center"
    >
      <p
        class="text-shadow"
        style="
          position: absolute;
          color: white;
          font-size: 30px;
          margin-top: -80px;
          z-index: 99999;
        "
      >
        {{ rooms[swipy.realIndex].titles[selectedIdx] }}
        <!-- {{ swipy.realIndex + 1 }} -->
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore";
// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
const store = useMainStore();

const { main, selectedIdx } = storeToRefs(store);

const { rooms } = defineProps(["rooms"]);

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swipy = ref<any>();

const images = ref([
  "https://storage.googleapis.com/dsv-bucket/activity2.jpeg",
  "https://storage.googleapis.com/dsv-bucket/activity2.jpeg",
]);

const onSwiper = (swiper: any) => {
  swipy.value = swiper;
};
</script>

<style lang="scss">
.swiper-button-prev,
.swiper-button-next {
  margin-top: -300px;
  color: white;
  // color: #6fb586;
}

:root {
  --swiper-pagination-color: white;
  --swiper-pagination-bullet-size: 14px;
  --swiper-pagination-bullet-width: 14px;
  --swiper-pagination-bullet-height: 14px;
  --swiper-pagination-bullet-inactive-color: #000;
  --swiper-pagination-bullet-inactive-opacity: 0.2;
  --swiper-pagination-bullet-opacity: 1;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-bullet-vertical-gap: 6px;
}
</style>
