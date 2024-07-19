<template>
  <HotelReuseComp :hotel="main.hotels[1]" />
</template>

<script setup lang="ts">
import HotelReuseComp from "@/components/hotelReuseComp.vue";

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const { main, selectedIdx } = storeToRefs(useMainStore());
</script>

<style scoped lang="scss">
.line-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  min-height: 60px;
  /* border: 10px solid red; */
  span {
    /* display: block; */
    font-family: var(--font-family);
    font-size: 70px;
    position: absolute;
    top: 24px;
    /* left: 0;
    right: 0; */
    line-height: 0 !important;
    pointer-events: none;
    -webkit-pointer-events: none;
    -moz-pointer-events: none;
    -ms-pointer-events: none;
    -o-pointer-events: none;
    opacity: 0.03;
  }
}

a {
  color: #000;
}

.t1 {
  margin-top: 50px;
  font-size: 41px;
  font-family: var(--font-family);
  font-weight: 700;
}
.cover {
  background-image: url("/assets/image/hotels/golf1.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 320px;
  /* max-height: 300px; */
  .bg-cover {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

/* blog  */
.blog {
  background-color: #f4f4f4 !important;
  margin-top: 20px;
  padding: 0 !important;

  .bg-left,
  .bg-right {
    .bg {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-width: 100%;
      height: 100%;
      &.numngum {
        background-image: url("/assets/image/hotels/hotel-namngum.jpg");
      }
      &.vte {
        background-image: url("/assets/image/hotels/hotel-vientiane.jpg");
      }

      &.golf {
        background-image: url("/assets/image/hotels/hotel-golf.jpg");
      }
    }
    .text-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      z-index: 999;
    }
  }
  .bg-right {
    display: flex;
    flex-direction: row-reverse;
  }
  @media (min-width: 576px) {
    .bg-right .text-container {
      left: 5%;
    }
    .bg-left .text-container {
      right: 5%;
    }
  }
}

/* textbox  */
.text-box {
  justify-self: center;
  background-color: #fff;
  padding: 24px;
  color: #000;
  border-radius: 3px;
  @media (min-width: 576px) {
    padding: 48px;
  }
  span {
    font-size: 13px;
    letter-spacing: 5px;
    opacity: 0.7;
    display: block;
  }
  h2 {
    font-weight: 700;
    margin: 20px 0;
    margin-top: 0 !important;
    font-family: var(--font-family);
    text-transform: uppercase;
  }
  p {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 24px;
  }
}

/* room  */
.room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .room-cover {
    width: 100%;
    .bg {
      display: block;
      aspect-ratio: 16/10;
      background-color: #5e5e5e;
    }
  }
  /* @media (min-width: 576px) {
      .room-info {  
        right: 5%;
       
      }
    } */
  .room-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 999;
    @media (min-width: 576px) {
      justify-content: flex-start;
    }

    .text-box {
      /* border: 1px solid red; */
      justify-self: center;
      background-color: #fff;
      padding: 48px;
      color: #000;
      border-radius: 3px;
      span {
        font-size: 13px;
        letter-spacing: 5px;
        opacity: 0.7;
        display: block;
      }
      h2 {
        font-weight: 700;
        margin: 20px 0;
        margin-top: 0 !important;
        font-family: var(--font-family);
        text-transform: uppercase;
      }
      p {
        font-weight: 200;
        font-size: 16px;
        margin-bottom: 24px;
      }
    }
  }
}

/* hover pop  */
.details {
  display: flex;
  gap: 10px;
  .circle-hover {
    color: #6e6e6e;
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #ffd4;
  }
}
</style>

<style lang="scss" scoped>
/* room  */
.room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .room-cover {
    aspect-ratio: 16/10;
    background-color: #5e5e5e;
    width: 200px;
    background-image: url("https://storage.googleapis.com/dsv-bucket/dvs-gallery/21.jpeg");
    background-position: center;
  }
  /* @media (min-width: 576px) {
      .room-info {  
        right: 5%;
       
      }
    } */
  .room-info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* border: 1px solid red; */
    z-index: 999;

    .text-box {
      /* border: 1px solid red; */
      justify-self: center;
      background-color: #fff;
      padding: 24px;
      color: #000;
      border-radius: 3px;
      @media (min-width: 576px) {
        padding: 48px;
      }
      span {
        font-size: 13px;
        letter-spacing: 5px;
        opacity: 0.7;
        display: block;
      }
      h2 {
        font-weight: 700;
        margin: 20px 0;
        margin-top: 0 !important;

        text-transform: uppercase;
      }
      p {
        font-weight: 200;
        font-size: 16px;
        margin-bottom: 24px;
      }
    }
  }
}
</style>
