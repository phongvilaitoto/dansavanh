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
            justify-content: center;
            /* background-color: transparent; */
          "
        >
          <a-col :span="20">
            <a-typography-title class="t1"
              >DANSAVANH GOLF & COUNTRY CLUB</a-typography-title
            >
          </a-col>
        </a-row>
      </div>
    </a-layout>
    <a-layout-content style="padding-bottom: 20px">
      <a-row justify="center">
        <a-col :span="14">
          <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
        </a-col>
        <a-col :span="16" style="text-align: center">
          <p style="font-size: 19px; font-weight: 300; margin-top: 24px">
            Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers.
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
      <div class="blog" >
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg numngum"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & GOLF</span>
            <h2>OUTSTANDING GOLF COURSE</h2>
            <p>
              More than a thousand feet above sea level , an internationally recognised natural quality golf course in Laos PDR. A championship track that could tire you off even on cart and we trust that you will want to challenge more than once.
            </p>
            
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="16" class="bg vte"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & GOLF</span>
            <h2>GOLF CLUB FACILITIES</h2>
            <p>
              Beneath the magnificent nature view, restaurants and entertainment facilities are available round the clock. Try your luck at CLUB 20 over a glass of beer or watching live sports matches on big screen is just as awesome.
            </p>
            
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg golf"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & GOLF</span>
            <h2>MAINTAINED FIELDS</h2>
            <p>
              Freshness in the air or smoothness on the green, this is just the ideal getaway for all golfers.
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
      <!-- room section  -->
      <div class="line-header">
        <span>ROOM </span>
        <!-- <p></p> -->
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block' }"
        />
      </div>
      <div class="content-container">
        <a-row class="room-container">
          <a-col :sm="24" :md="14" :lg="14" class="room-cover">
          <div class="bg"></div>
          </a-col>
          <a-col :sm="24" :md="8" :lg="8" class="room-info">
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
    background-image: url("/assets/image/hotels/golf1.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    min-height: 320px;
    /* max-height: 300px; */
    .bg-cover{
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
      .bg{
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
      justify-content:center;
      align-items: center;
      width: 100%;
      z-index: 999;
      @media (min-width: 576px) {
        justify-content:flex-start;

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
  .details{
    display: flex;
    gap: 10px;
    .circle-hover{
      color: #6e6e6e;
      background-color: #fff;
      box-shadow: inset 0 0 0 2px #ffd4
  }
  }

  </style>
  