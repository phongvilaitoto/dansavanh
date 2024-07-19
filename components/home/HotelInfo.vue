<template>
  <a-row justify="center" style="padding-bottom: 1rem">
    <a-col
      :span="24"
      style="align-content: center; justify-content: center; display: flex"
    >
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
    </a-col>
  </a-row>
  <!-- card info  -->
  <a-row justify="center">
    <a-col :sm="24" :lg="24">
      <div class="card-info">
        <img :src="main.home.hotelZone.img" alt="" />
        <h2 class="text-shadow text-bold">
          {{ main.home.hotelZone.titles[selectedIdx] }}
        </h2>
      </div>
    </a-col>
  </a-row>
  <a-row justify="center">
    <a-space>
      <button
        class="btn btn-2 hover-slide-up"
        @click="$router.push(localePath('/hotels'))"
      >
        <span>{{ $t("viewHotelsButton") }}</span>
      </button>
    </a-space>
  </a-row>
</template>

<script setup lang="ts">
import { useMainStore } from "@/stores/mainStore";

const store = useMainStore();

const localePath = useLocalePath();

const { main, selectedIdx } = storeToRefs(store);
</script>

<style scoped lang="scss">
.card-info {
  /* border: 2px solid red; */
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
    display: block;
    aspect-ratio: 16/9;
    width: 100%;
    /* max-width: 100%; */
    height: 100%;
  }
  h2 {
    padding: 0 20px;
    position: absolute;
    bottom: 20px;
    left: 10px;
    color: #fff;

    font-weight: 700;
    font-size: 32px;
    backdrop-filter: unset;
  }
}

button {
  margin-top: 20px;
  background-color: transparent;
  color: #000;
}
</style>
