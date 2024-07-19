<template>
  <HeaderTitle
    img="https://storage.googleapis.com/dsv-bucket/imgs/imgs/def3f3bd-1a3e-40b8-a4a0-1ce625911419.jpg"
    :title="$t('ourHotels')"
    :caption="$t('stepInTheWorld')"
  />

  <!-- <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row justify="center" style="
          padding-top: 180px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        ">
        <a-col :span="14">
      <h5 class="headerT2">
       {{$t('stepInTheWorld')}}
      </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('ourHotels')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout> -->

  <a-layout-content class="layout" style="margin-bottom: 50px">
    <div class="blog">
      <a-row
        v-for="(i, idx) in main.hotels"
        :class="isOdd(idx + 1) ? 'bg-left' : 'bg-right'"
      >
        <a-col
          :xs="24"
          :sm="24"
          :md="24"
          :lg="16"
          :style="`backgroundImage: url('${i.img}')`"
          class="bg numngum"
        ></a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & HOTELS</span>

            <h2>{{ i.titles[selectedIdx] }}</h2>
            <p class="fix-description">
              {{ i.descriptions[selectedIdx] }}
            </p>
            <button
              class="btn btn-2 hover-slide-up"
              @click="
                router.push(localePath('/hotels/' + i.titles[selectedIdx]))
              "
            >
              <span>{{ $t("viewHotelButton") }}</span>
            </button>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-layout-content>
</template>

<script setup lang="ts">
const router = useRouter();
import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const localePath = useLocalePath();

const { main, selectedIdx } = storeToRefs(useMainStore());

const isOdd = (n: number) => {
  return n % 2 !== 0;
};
useHead({
  title: "Accommodation",
  meta: [{ name: "description", content: "Accommodation" }],
});
</script>

<style scoped lang="scss">
.blog {
  background-color: #f4f4f4 !important;
  /* margin-top: 20px; */

  padding: 0 !important;

  .bg-left,
  .bg-right {
    background-color: #fff;
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
      z-index: 1;
    }
  }
  .bg-right {
    display: flex;
    flex-direction: row-reverse;
  }

  @media only screen and (min-width: 768px) {
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
  width: 100%;
  justify-self: center;
  background-color: #fff;
  padding: 24px;
  color: #000;
  border: 1px solid #f4f4f4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

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
  .fix-description {
    max-height: 10em; /* Sets the maximum height for the description */
    overflow: hidden; /* Hides content that overflows the max-height */
    text-overflow: ellipsis; /* Adds "..." at the end of overflowing text */
    display: -webkit-box;
    -webkit-line-clamp: 6; /* Forcibly clamps the number of lines in WebKit browsers */
    -webkit-box-orient: vertical; /* Sets the orientation of lines */
  }
}
</style>
