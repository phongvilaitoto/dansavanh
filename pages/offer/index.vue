<template>
    <a-layout>
      <div class="cover">
        <div class="bg-cover"></div>
        <a-row
          style="
            padding-top: 85px;
            padding-bottom: 62px;
            text-align:left;
            justify-content: center;
            background-color: transparent;
          "
        >
          <a-col :span="20">
         
            <a-typography-title class="t1"
              >OUR OFFERS  </a-typography-title
            >
          </a-col>
          <a-col :span="20">
            <span style="color: #fff;">Interested in some activities? Have a look at ours packages.</span>
          </a-col>
        </a-row>
      </div>
    </a-layout>
    <div class="max-width">
      <!-- <a-row>
        <a-breadcrumb style="margin: 16px 10px">
          <a-breadcrumb-item
            ><nuxt-link to="/">Home</nuxt-link></a-breadcrumb-item
          >
          <a-breadcrumb-item
            ><nuxt-link to="/hotels">Hotels</nuxt-link></a-breadcrumb-item
          >
          <a-breadcrumb-item>NUM NGUM</a-breadcrumb-item>
        </a-breadcrumb>
      </a-row> -->
      <!-- <div class="line-header">
        <span>ROOM </span>
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div> -->
      <div style="margin-top: 2rem" >
        <a-row class="promotion-container">
          <a-col :lg="10" class="promotion-card" v-for="i in 2" :key="i">
            <div class="pro-cover">
              <!-- <img src="" alt="cover"> -->
              <div class="img"></div>
              <img style="width: 100%" src="https://www.dansavanh.net/assets/images/57551275bb1dd.jpg" alt="">
            </div>
            <div class="text-box">
              <h1>
                Promotion 1
              </h1>
              <p>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant a leaves with coriander and coconut milk.</p>
              <a-button> Discover More</a-button>
            </div>
          </a-col>
        </a-row>
        <a-row class="promotion-container">
          <a-col :lg="10" class="promotion-card" v-for="i in 2" :key="i">
            <div class="pro-cover">
              <!-- <img src="" alt="cover"> -->
              <div class="img"></div>
              <img src="https://www.dansavanh.net/assets/images/575514258127a.jpg" alt="">
            </div>
            <div class="text-box">
              <h1>
                Promotion 1
              </h1>
              <p>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant a leaves with coriander and coconut milk.</p>
              <a-button> Discover More</a-button>
            </div>
          </a-col>
        </a-row>
       
      </div>
   
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
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
    margin-bottom: 0;
  }
  .cover {
    background-image: url("/assets/image/hotels/casino34.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* min-height: 300px; */
    position: relative;
    .bg-cover{
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
  .promotion-container {
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
    .pro-cover {
      display: flex;
      justify-content:flex-start;
      align-items: center;
      width: 100%;
      /* z-index: 999; */
      .img{
        display: grid;
        place-content: center;
        background-color: #6e6e6e;
        color: #fff;
        /* display: block; */
        width: 100%;
        height: 100%;
        aspect-ratio: 16/10;
      }
      img{
        display: grid;
        place-content: center;
        background-color: #6e6e6e;
        color: #fff;
        /* display: block; */
        width: 100%;
        height: 100%;
        aspect-ratio: 16/10;
      }
    }
    .text-box {
        /* border: 1px solid red; */
        justify-self: center;
        /* background-color: #fff; */
        padding: 10px;
        color: #000;
        border-radius: 3px;
       
        h1 {
          font-weight: 700;
          margin: 10px 0;
          margin-top: 0 !important;
          font-family: var(--font-family);
          text-transform: uppercase;
        }
        p {
          font-weight: 200;
          font-size: 16px;
          margin-bottom: 24px;
          color: #313131;
        }
      }
  }
  
  
  /* hover pop  */
  .details{
    display: flex;
    gap: 10px;
   
    .circle-hover{
      color: #6e6e6e;
      background-color: #fff;
      box-shadow: inset 0 0 0 2px #ffd4
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
  