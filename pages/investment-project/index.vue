<template>
    <a-layout>
      <div class="cover">
        <a-row
          justify="center"
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
              >DANSAVANH NAM NGUM RESORT AND CASINO</a-typography-title
            >
          </a-col>
        </a-row>
      </div>
    </a-layout>
    <a-layout-content style="padding-bottom: 20px">
      <a-row justify="center">
        <a-col :span="24">
          <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
        </a-col>
        <a-col :span="16" style="text-align: center">
          <p style="font-size: 19px; font-weight: 300; margin-top: 24px">
            Peak of Buffalo Mountain（Phou Khao Khouay） facing the biggest
            freshwater lake in Laos, 60km from Vientiane. You will find varieties
            of excitement awaits you in this one of a kind hill top location with
            pampering spa services after a daylong of water activities; or even
            sumptuous dining experience at the lake side restaurants. If you are
            one that loves watching over a sky of glazing stars at night from your
            room or at our open air beer garden, you will find the clock clicks
            too fast. The thrill of excitement at our internationally rated casino
            is just a step away and you could be hitting a jackpot that makes you
            plan your next trip here in advance.
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
      <a-row>
        <a-breadcrumb style="margin: 16px 10px">
          <a-breadcrumb-item
            ><nuxt-link to="/">Home</nuxt-link></a-breadcrumb-item
          >
          <a-breadcrumb-item
            ><nuxt-link to="/hotels">Hotels</nuxt-link></a-breadcrumb-item
          >
          <a-breadcrumb-item>NUM NGUM</a-breadcrumb-item>
        </a-breadcrumb>
      </a-row>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <a-row justify="center">
          <a-col :span="18">
            <a-typography-title
              style="color: #000; font-family: var(--font-family)"
            >
              FACILITIES
            </a-typography-title>
          </a-col>
        </a-row>
        <a-row justify="center" style="display: flex; gap: 10px">
          <a-col :span="4" class="facility-card" v-for="i in 4" :key="i">
            <img src="" alt="" />
            <span>FACILITIES1</span>
          </a-col>
        </a-row>
      </div>
      <div class="line-header">
        <span>ROOM </span>
        <!-- <p></p> -->
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div>
      <div :style="{ padding: '24px', minHeight: '280px' }">
        <a-row class="room-container">
          <a-col :lg="10" class="room-cover"></a-col>
          <a-col :lg="8" class="room-info">
            <div class="text-box">
              <h2>
                <a href="#">Standard Room</a>
              </h2>
              
              <p class="details">
                <a-popover placement="bottom">
                  <template #content class="popOver">
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <DesktopOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <WifiOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <CoffeeOutlined />
                  </a-button>
                </a-popover>
              </p>
              <nuxt-link to="/contact"> contact </nuxt-link>
            </div>
          </a-col>
        </a-row>
        <a-row class="room-container">
          <a-col :lg="10" class="room-cover"></a-col>
          <a-col :lg="8" class="room-info">
            <div class="text-box">
              <h2>
                <a href="#">Standard Room</a>
              </h2>
              
              <p class="details">
                <a-popover placement="bottom">
                  <template #content class="popOver">
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <DesktopOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <WifiOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <CoffeeOutlined />
                  </a-button>
                </a-popover>
              </p>
              <nuxt-link to="/contact"> contact </nuxt-link>
            </div>
          </a-col>
        </a-row>
        <a-row class="room-container">
          <a-col :lg="10" class="room-cover"></a-col>
          <a-col :lg="8" class="room-info">
            <div class="text-box">
              <h2>
                <a href="#">Standard Room</a>
              </h2>
              
              <p class="details">
                <a-popover placement="bottom">
                  <template #content class="popOver">
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <DesktopOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <WifiOutlined />
                  </a-button>
                </a-popover>
                <a-popover placement="bottom">
                  <template #content>
                    <p>Content</p>
                  </template>
                  <a-button class="circle-hover">
                    <CoffeeOutlined />
                  </a-button>
                </a-popover>
              </p>
              <nuxt-link to="/contact"> contact </nuxt-link>
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
  :deep(.slick-slide) {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }
  
  :deep(.slick-arrow.custom-slick-arrow) {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    background-color: rgba(31, 45, 61, 0.11);
    transition: ease all 0.3s;
    opacity: 0.3;
    z-index: 1;
  }
  :deep(.slick-arrow.custom-slick-arrow:before) {
    display: none;
  }
  :deep(.slick-arrow.custom-slick-arrow:hover) {
    color: #fff;
    opacity: 0.5;
  }
  
  :deep(.slick-slide h3) {
    color: #fff;
  }
  a {
    color: #000;
  }
  .layout {
    background-color: #f4f4f4;
  }
  .t1 {
    margin-top: 50px;
    font-size: 41px;
    font-family: var(--font-family);
    font-weight: 700;
  }
  .cover {
    background-image: url("/assets/image/hotels/casino34.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 300px;
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
    }
    /* @media (min-width: 576px) {
      .room-info {  
        right: 5%;
       
      }
    } */
    .room-info {
      display: flex;
      justify-content:flex-start;
      align-items: center;
      width: 100%;
      /* border: 1px solid red; */
      z-index: 999;
  
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
  