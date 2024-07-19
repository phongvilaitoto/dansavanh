<template>
  <HeaderTitle
    img="https://storage.googleapis.com/dsv-bucket/imgs/imgs/bfc6193d-e7fc-4cda-9e03-4388a845b5df.jpg"
    :title="$t('eventTitle')"
    :caption="$t('')"
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
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('eventTitle')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout> -->

  <a-layout-content class="content-container">
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <h2 class="headerTitle">{{ $t("eventComing") }}</h2>
      </a-col>
      <a-col
        :span="24"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        "
      >
        <span
          style="
            font-size: 18px;
            font-weight: 700;
            font-family: var(--font-family);
          "
          >{{ blogs.length }}</span
        >
        <a-typography-title
          :level="5"
          style="
            color: #000;
            padding: 0;
            margin: 0;
            font-family: var(--font-family);
          "
          >{{ $t("eventComing") }}</a-typography-title
        >
      </a-col>
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
    <div :style="{ padding: '24px', minHeight: '280px' }">
      <a-row
        v-for="i in blogs"
        @click="router.push(localePath('/events') + '/' + i._id)"
        class="room-container"
      >
        <a-col
          :xs="24"
          :sm="24"
          :lg="10"
          class="room-cover"
          :style="`background-image: url('${i.img}')`"
        ></a-col>
        <a-col :xs="24" :sm="24" :lg="8" class="room-info">
          <div class="text-box">
            <h2>{{ i.titles[selectedIdx] }}</h2>
            <p>
              {{ i.captions[selectedIdx] }}
            </p>
            <button
              class="btn btn-2 hover-slide-up"
              @click="$router.push(localePath('/events') + '/' + i._id)"
            >
              <span>{{ $t("discoverMore") }}</span>
            </button>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- <div class="line-header">

        <span>ROOM </span>
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div> -->
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <!-- <a-typography-title
          style="     color: #000;
            padding: 0;
            margin: 0;
            font-family: var(--font-family);"
          >PAST EVENTS</a-typography-title
        > -->
        <h1 class="headerTitle">{{ $t("eventPast") }}</h1>
      </a-col>
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
    <div :style="{ padding: '24px', minHeight: '280px' }">
      <a-row
        class="room-container"
        v-for="i in blogs2"
        @click="router.push(localePath('/events') + '/' + i._id)"
      >
        <a-col
          :xs="24"
          :sm="24"
          :lg="10"
          :style="`background-image: url('${i.img}')`"
          class="room-cover"
        >
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8" class="room-info">
          <div class="text-box">
            <h2>{{ i.titles[selectedIdx] }}</h2>
            <p>
              {{ i.captions[selectedIdx] }}
            </p>

            <button
              class="btn btn-2 hover-slide-up"
              @click="$router.push(localePath('/events') + '/' + i._id)"
            >
              <span>{{ $t("discoverMore") }}</span>
            </button>
            <!-- <a-button class="view-button text-uppercase bg-white"> {{$t('discoverMore') }} </a-button> -->
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- <gallery/> -->
  </a-layout-content>
</template>

<script setup lang="ts">
const router = useRouter();

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const localePath = useLocalePath();

const config = useRuntimeConfig();

const store = useMainStore();
const { isOddFunc } = store;
const { selectedIdx } = storeToRefs(store);

const blogs = ref<any>([]);
const blogs2 = ref<any>([]);

const res: any = await useFetch(
  config.public.apiBase + "/getDBlogs?type=Events&eventType=Coming Events"
);
blogs.value = res.data.value.dBlogs;

const { data }: any = await useFetch(
  config.public.apiBase + "/getDBlogs?type=Events&eventType=Past Events"
);
blogs2.value = data.value.dBlogs;

useHead({
  title: "Tourist Attraction",
  meta: [{ name: "description", content: "Tourist Attraction" }],
});
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

  font-weight: 700;
}
.cover {
  background-image: url("/assets/image/events/location-1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
  position: relative;
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

/* card  */
.facility-card {
  display: block;
  aspect-ratio: 10/16;
  border-radius: 3px;
  background-color: #6e6e6e;
  position: relative;
  border: 1px solid #333;
  /* min-height: 200px; */
  span {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
  }
}

/* room  */
.room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .room-cover {
    aspect-ratio: 16/10;
    background-color: #5e5e5e;
    width: 200px;
    background-image: url("https://storage.googleapis.com/dsv-bucket/dvs-gallery/37.jpeg");
    background-position: center;
    background-size: cover;
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

/* hover pop  */

.gallery-card {
  display: block;
  aspect-ratio: 16/10;
  background-color: #6e6e6e;
  position: relative;
  border: 1px solid #333;
}
</style>
