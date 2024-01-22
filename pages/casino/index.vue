<template>
  <a-layout>
    <a-row
      justify="center"
      style="
        padding-top: 116px;
        padding-bottom: 72px;
        background-color: #a3a0a0;
        text-align: center;
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
          A MAGIC PLACE
        </a-typography-title>
      </a-col>
      <a-col :span="14">
        <a-typography-title
          style="
            font-family: var(--font-family);
            font-size: 86px;
            font-weight: 700;
          "
          >OUR RESORTS CASINO</a-typography-title
        >
      </a-col>
    </a-row>
  </a-layout>
  <a-layout-content style="padding: 20px 50px">
    <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
    <!-- <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }"></div> -->
    <div class="header">
      <span>CASINO</span>
      <!-- <p></p> -->
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
    </div>
  </a-layout-content>
  <a-layout-content>
    <div class="blog">
      <a-row class="blackjack">
        <a-col :md="8" :lg="14" class="left hasbg"></a-col>
        <a-col :md="8" :lg="8" class="right hasTextBox">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>Blackjack21</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="roulette" justify="center">
        <a-col :md="8" :lg="14" class="right hasbg">
        </a-col>
        <a-col :md="8" :lg="7" class="left hasTextBox">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>Blackjack21</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
     
      </a-row>
      <a-row class="baccarat">
        <a-col :md="8" :lg="14" class="left hasbg"></a-col>
        <a-col :md="8" :lg="7" class="right hasTextBox">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>Blackjack21</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="dragonTiger">
        <a-col :md="8" :lg="7" class="left hasTextBox">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>Blackjack21</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
        <a-col :md="8" :lg="14" class="right hasbg">
          
        </a-col>
      </a-row>
      <a-row class="slots">
        <a-col :md="8" :lg="14" class="left hasbg"></a-col>
        <a-col :md="8" :lg="7" class="right hasTextBox">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>Blackjack21</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
  </a-layout-content>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  span {
    /* display: block; */
    font-family: var(--font-family);
    font-size: 140px;
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

.blog {
  margin-top: 30px;
  padding: 0 !important;
}
  /* textbox  */
  .text-box {
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
      .left {
      &.hasbg{
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-width: 100%;
      height: 100%;

      }
      &.hasTextBox{
        display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 4px;
      left: 12%;
      width: 100%;
      z-index: 999;
      }
    }
    .right {
      
      &.hasbg{
        padding: 10px;
        background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      height: 100%;
      right: -8%;

      }
      &.hasTextBox{
        display: flex;
      justify-content: center;
      align-items: center;
      margin-right: -4px;
      right: 4%;
      width: 100%;
      }
     
     
    }


/* box set up  */
.blackjack {
  border: 1px solid red;
    .left{     
       &.hasbg{
        background-image: url("/assets/image/casino/casino-blackjack.jpg");
       }
     
    }
  }
.roulette {
    .right{     
       &.hasbg{
        background-image: url("/assets/image/casino/casino-roulette.jpg");
       }
     
    }
  }
.baccarat {
    .left{     
       &.hasbg{
        background-image: url("/assets/image/casino/casino-baccarat.jpg");
       }
     
    }
  }
.dragonTiger {
    .right{     
       &.hasbg{
        background-image: url("/assets/image/casino/casino-dragontiger.jpg");
       }
     
    }
  }
.slots {
    .left{     
       &.hasbg{
        background-image: url("/assets/image/casino/casino-slots.jpg");
       }
     
    }
  }
  

</style>
