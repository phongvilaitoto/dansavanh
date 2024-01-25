<template>
  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
        justify="center"
        style="
          padding-top: 116px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        "
      >
        <a-col :span="14">
          <a-typography-title
            :level="5"
            style="
              font-family: var(--font-family);
              letter-spacing: 7px;
              font-size: 14px;
            "
          >
            DANSAVANH'S ACTIVITIES
          </a-typography-title>
        </a-col>
        <a-col :span="16">
          <a-typography-title class="t1"
            >SPORTS & ACTIVITIES</a-typography-title
          >
        </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="layout" style="padding: 20px 0">
    <a-row justify="center">
      <a-col :span="20">
          <a-typography-title style="color: #000; font-family: var(--font-family); text-align: center; margin: 0;"
            > TONS OF ACTIVITIES</a-typography-title
          >
        </a-col>
      <a-col :span="16" style="text-align: center">
        <p style=" letter-spacing: 3px; font-size: 13px;">
          FROM SPORTS TO SIGHTSEEING, WE HAVE IT ALL
        </p>
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
    <div class="blog">
      <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg numngum"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <h1>STANDARD ROOM</h1>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="14" class="bg vte"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <h1>STANDARD ROOM</h1>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg golf"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <h1>STANDARD ROOM</h1>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="14" class="bg vte"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <h1>STANDARD ROOM</h1>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="line-header">
      <span>GALLERY</span>
      <!-- <p></p> -->
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '40px', display: 'block' }"
      />
    </div>
    <a-row justify="center" style="display: flex; gap: 10px">
      <a-col :span="4" class="gallery-card" v-for="i in 4" :key="i">
        <img src="" alt="" />
      </a-col>
    </a-row>
  </a-layout-content>
</template>

<script setup lang="ts"></script>

<style scoped>
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
.t1 {
  font-size: 42px;
  font-family: var(--font-family);
  font-weight: 700;
  @media (min-width: 576px) {
    font-size: 64px;
  }
}
.cover {
  background-image: url("/assets/image/experience/activity2.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
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
.blog {
  background-color: #f4f4f4 !important;
  margin-top: 20px;
  padding: 0 !important;

  .bg-left,
  .bg-right {
    .bg {
      background-color: #6e6e6e;
      display: block;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-width: 100%;
      height: 100%;
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
  /* @media (min-width: 576px) {
    .bg-right .text-container {
      left: 5%;
    }
    .bg-left .text-container {
      right: 5%;
    }
  } */
}

/* textbox  */
.text-box {
  justify-self: center;
  background-color: #fff;
  padding: 48px;
  color: #000;
  border-radius: 3px;
  h1 {
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

.gallery-card {
  display: block;
  aspect-ratio: 16/10;
  background-color: #6e6e6e;
  position: relative;
  border: 1px solid #333;
}
</style>
