<template>
  <!-- <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
    </div>
  </a-layout> -->
  <a-layout-content class="content-container global-margin-top">
    <div class="line-header">
      <h1 class="headerTitle">{{ $t("gallery") }}</h1>
      <!-- <h1>GALLERY </h1> -->
      <!-- <p></p> -->
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
    </div>
    <div :style="{ padding: '0 24px', minHeight: '280px' }">
      <Gallery :galleries="main.galleries" />
    </div>
  </a-layout-content>
</template>

<script setup lang="ts">
import Gallery from "@/components/gallery.vue";

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const store = useMainStore();

const { main } = storeToRefs(store);

const value = ref("None");

useHead({
  title: "Gallery",
  meta: [{ name: "description", content: "Gallery" }],
});
</script>

<style scoped>
.cover {
  background-image: url("/assets/image/more/career-header.JPG");
  /* background-attachment: fixed;   */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 64px;
  .bg-cover {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

/* top header  */
.line-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  min-height: 60px;
  padding-bottom: 50px;
  span {
    font-family: var(--font-family);
    font-size: 30px;
    position: absolute;
    bottom: 30px;
    line-height: 0 !important;
    pointer-events: none;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    -ms-pointer-events: none;
    -o-pointer-events: none;
    opacity: 0.03;
    @media (min-width: 567px) {
      font-size: 60px;
    }
  }
}

.gallery-item {
  margin-bottom: 20px;
  width: 100%;
  min-height: 400px;
  .img {
    background-color: #5a5a5a;
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
