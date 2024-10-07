<template>
  <div v-if="main.home && main.home.imgs">
    <Swiper
      :slides-per-view="1"
      :space-between="10"
      :loop="true"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
      @swiper="onSwiper"
      :autoplay="true"
      :effect="'fade'"
      class="swiper-container-home-banner"
    >
      <SwiperSlide
        v-for="(image, idx) in main.home.imgs"
        :key="idx"
        @click="swipy.slideNext()"
        class="swiper-slide slide-animation"
      >

      
        <div
          class="is-desktop"
          :style="{
            width: '100%',
            // height: '620px',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + image + ')',
            backgroundPosition: 'center',
            aspectRatio: 16 / 8,
          }"
        ></div>
        <div
          class="is-mobile"
          :style="{
            width: '100%',
            // height: '520px',
            backgroundSize: 'cover',
            backgroundImage: 'url(' + image + ')',
            backgroundPosition: 'center',
            aspectRatio: 16 / 8,
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
          font-family: 'Playfair Display', serif;
        "
      >
        <!-- {{ main.home.imgsTitles[selectedIdx][swipy.realIndex] }} -->
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore";
const store = useMainStore();

const { main, selectedIdx } = storeToRefs(store);

import { Navigation, Pagination } from "swiper/modules";
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
  margin-top: 30px;
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
.swiper-container-home-banner {
  overflow: hidden;
}

.slide-animation {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.swiper-slide.swiper-slide-active {
  opacity: 1;
}
.text-shadow {
  z-index: 2;
  backdrop-filter: unset;
}
</style>
