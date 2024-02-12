<template>
  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
        justify="center"
        style="
          padding-top: 120px;
          padding-bottom: 0px;
          text-align: center;
          justify-content: center;
          background-color: transparent;
        "
      >
        <a-col :span="24">
        <h1 class="headerTitle">EVENTS</h1>
          <!-- <a-typography-title class="headerTitle">EVENTS</a-typography-title> -->
        </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="content-container">
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <a-typography-title
          style="color: #000; font-family: var(--font-family); margin: 0"
          >COMING EVENTS</a-typography-title
        >
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
          >0</span
        >
        <a-typography-title
          :level="5"
          style="
            color: #000;
            padding: 0;
            margin: 0;
            font-family: var(--font-family);
          "
          >COMING EVENTS</a-typography-title
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
      <!-- <a-breadcrumb style="margin: 0px 16px">
        <a-breadcrumb-item
          ><nuxt-link to="/">Home</nuxt-link></a-breadcrumb-item
        >
        <a-breadcrumb-item
          ><nuxt-link to="/hotels">Hotels</nuxt-link></a-breadcrumb-item
        >
        <a-breadcrumb-item>NUM NGUM</a-breadcrumb-item>
      </a-breadcrumb> -->
  
    <div :style="{ padding: '24px', minHeight: '280px' }">
      <a-row class="room-container">
        <a-col :xs="24" :sm="24" :lg="10" class="room-cover"></a-col>
        <a-col :xs="24" :sm="24" :lg="8" class="room-info">
          <div class="text-box">
            <h2>STANDARD ROOM</h2>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
            <a-button class="btn-view"> View Hotel </a-button>
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
        <a-typography-title
          style="color: #000; font-family: var(--font-family); margin: 0"
          >PAST EVENTS</a-typography-title
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
      <a-row class="room-container">
        <a-col :xs="24" :sm="24" :lg="10" class="room-cover">
      
        </a-col>
        <a-col :xs="24" :sm="24" :lg="8" class="room-info">
          <div class="text-box">
            <h2>STANDARD ROOM</h2>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
            <a-button class="btn-view"> View Hotel </a-button>
          </div>
        </a-col>
      </a-row>
    </div>
    <!-- <a-row justify="center">
        <a-col :span="24" >
          <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
        </a-col>
        <a-col :span="24" style="text-align: center;justify-content: center; ">
          <a-typography-title style="color: #000; font-family: var(--font-family); margin: 0; "
              >COMING EVENTS</a-typography-title
            >
        </a-col>
        <a-col :span="24" style="display: flex; justify-content: center; align-items: center; gap: 10px; " >
        <span style="font-size: 18px; font-weight: 700; font-family: var(--font-family);">0</span> 
        <a-typography-title :level="5" style="color: #000; padding: 0; margin: 0; font-family: var(--font-family);"
              >COMING EVENTS</a-typography-title
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
      </a-row> -->
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
    background-image: url("https://www.aman.com/sites/default/files/styles/full_size_large/public/2021-02/Amantaka_Homepage_1.jpg?itok=26M01kWA");
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

.gallery-card {
  display: block;
  aspect-ratio: 16/10;
  background-color: #6e6e6e;
  position: relative;
  border: 1px solid #333;
}
</style>
