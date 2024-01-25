<template>
    <a-layout>
      <div class="cover">
        <div class="bg-cover"></div>
      </div>
    </a-layout>
    <a-layout-content class="content-container">
      <a-row justify="center">
        <a-col :span="24">
          <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
        </a-col>
        <a-col :span="24" style="text-align: center; justify-content: center">
          <a-typography-title
            style="color: #000; font-family: var(--font-family); margin: 0; text-transform: uppercase;"
            >News</a-typography-title
          >
        </a-col>
      
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
      News
      </div>
  
    </a-layout-content>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped>
  
  .t1 {
    /* margin-top: 50px; */
    font-size: 41px;
    font-family: var(--font-family);
    font-weight: 700;
  }
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
  
  /* career_box */
  .career_box{
    border: 2px solid #000;
    padding: 10px;
    font-family: var(--font-family);
  
    .text-box{
      border: 10px;
      border-bottom: 1px solid #DAD8D1;
      h3{
        font-weight:900;
      }
     
    }
  }
  
  </style>
  