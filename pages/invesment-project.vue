<template>
     <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row
        style="
          padding-top: 116px;
          padding-bottom: 62px;
          text-align: center;
          justify-content: center;
          background-color: transparent;
        "
      >
        <a-col :span="20">
          <a-typography-title class="t1"
            >INVESTMENT PROJECT</a-typography-title
          >
        </a-col>
      </a-row>
    </div>
  </a-layout>
    <a-layout-content class="content-container">
      <a-row justify="center">
        <a-col
          :span="24"
          style="align-content: center; justify-content: center; display: flex; margin-top: 20px;"
        >
          <img
            src="/assets/image/decoration-1.png"
            alt=""
            :style="{ width: '160px', margin: '20xp 0 0 ' }"
          />
        </a-col>
       
      </a-row>
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
            <a-button class="btn-view"> Discover More </a-button>
          </div>
        </a-col>
      </a-row>
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
            <a-button class="btn-view"> Discover More </a-button>
          </div>
        </a-col>
      </a-row>
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
            <a-button class="btn-view"> Discover More </a-button>
          </div>
        </a-col>
      </a-row>
     <a-row>
        <a-col :span="24" style="display: flex; justify-content: center;">
            <a-pagination class="pagination" v-model:current="current" :total="50" show-less-items />
        
        </a-col>
        
     </a-row>


      </div>
  
    </a-layout-content>
  </template>
  
  <script setup lang="ts">
const current = ref(2);

</script>
  
  <style scoped>
  .pagination{
    color: #000;
    background-color: #5e5e5e;
  }
  .t1 {
    /* margin-top: 50px; */
    font-size: 41px;
    font-family: var(--font-family);
    font-weight: 700;
  }
  .cover {
    background-image: url("/assets/image/home/banner.jpg");
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
  
  .room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .room-cover {
    aspect-ratio: 16/10;
    background-color: #5e5e5e;
  }
  /* @media (min-width: 576px) {
      .room-info {  
        right: 5%;
       
      }
    } */
  .room-info {
    /* display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    z-index: 999; */
    /* background-color: #fff; */

    .text-box {
      /* border: 1px solid red; */
      /* justify-self: center; */
      /* background-color: #fff; */
      padding: 10px 20px;
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
        font-family: var(--font-family) !important;
        text-transform: uppercase;
      }
      p {
        font-weight: 200;
        font-size: 16px;
        margin-bottom: 24px;
      }
      .btn-view{
        background-color: #fff !important;
      }
    }
  }
}
  </style>
  