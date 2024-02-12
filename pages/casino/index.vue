<template>
  <a-layout>
    <a-row justify="center" style="
        padding-top: 116px;
        padding-bottom: 72px;
        background-color: #a3a0a0;
        text-align: center;
      ">
      <a-col :span="14">
        <a-typography-title :level="5" style="
          font-size: 14px;
    letter-spacing: 7px;
    font-weight: 300;
    margin: 14px 0 7px;
          ">
          A MAGIC PLACE
        </a-typography-title>
      </a-col>
      <a-col :span="16">
        <!-- <div class="t1"> -->
          <h1 class="headerTitle">OUR RESORTS
            CASINO</h1>
        <!-- </div> -->
      </a-col>
    </a-row>
  </a-layout>
  <a-layout-content style="padding: 20px 50px">
    <div class="header">
      <span>CASINO</span>
      <!-- <p></p> -->
      <img src="/assets/image/decoration-1.png" alt="" :style="{ height: '50px', display: 'block' }" />
    </div>
  </a-layout-content>
  <a-layout-content>
    <div class="blog">
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg blackjack"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
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
      <a-row class="bg-right">
        <a-col :md="12" :lg="16" class="bg roulette"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>ROULETTE</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>

      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg baccarat"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>BACCARAT</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right ">
        <a-col :md="12" :lg="16" class="bg dragonTiger">
        </a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>DRAGON TIGER</h2>
            <p>
              The aim of Blackjack is to dealt a hand that has a value greater
              than that of the Dealer without exceeding 21. Blackjack is a game
              of chance and skill which player may improve their chance by
              betting strategies.
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg slots"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>SLOTS</h2>
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

<style lang="scss" scoped>
h2 {
  font-size: 33px;
}
.t1 {
  h1 {




    font-size: 86px;
    //font-size: 86px;

    color: white;
    font-weight: 700;
    font-family: var(--font-family);


    // @media only screen and (max-width: 240px) {
    //   font-size: 45px;
    // }






  }




}

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
  background-color: #f4f4f4 !important;
  /* margin-top: 20px; */
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

/* .blog {
  margin-top: 30px;
  padding: 0 !important;

  .bg{
    background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      aspect-ratio: 16/9;
      width: 100%;
      max-width: 100%;
      height: 100%;
  }
  .text-container{
    display: flex;
      justify-content: center;
      align-items: center;
      margin-right: -4px;
      right: 4%;
      width: 100%;
  }
} */
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

/* .left {
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
     
     
    } */

/* box set up  */
.blackjack {
  background-image: url("/assets/image/casino/casino-blackjack.jpg");
}

.roulette {
  background-image: url("/assets/image/casino/casino-roulette.jpg");
}

.baccarat {
  background-image: url("/assets/image/casino/casino-baccarat.jpg");
}

.dragonTiger {
  background-image: url("/assets/image/casino/casino-dragontiger.jpg");
}

.slots {
  background-image: url("/assets/image/casino/casino-slots.jpg");
}
</style>
