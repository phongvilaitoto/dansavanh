<template>
  <!-- <a-layout>
    <a-row justify="center" style="
        padding-top: 180px;
        padding-bottom: 72px;
        background-color: #a3a0a0;
        text-align: center;
      ">
      <a-col :span="14">
        <h5 class="headerT2">
          {{ $t('aMagicPlace') }}
        </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
        <h1 class="headerT1">
          {{ $t('ourResortsCasino') }}</h1>
      </a-col>
    </a-row>
  </a-layout> -->


  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row justify="center" style="
          padding-top: 180px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        ">
        <a-col :span="14">
      <h5 class="headerT2">
       {{$t('aMagicPlace')}}
      </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('ourResortsCasino')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout>


  <a-layout-content style="padding: 20px 50px">
    <div class="header">
      <span>CASINO</span>
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
            <h2>{{ $t('casinoTitle1') }}</h2>
            <p>
              {{ $t('casinoCaption1') }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-right">
        <a-col :md="12" :lg="16" class="bg roulette"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t('casinoTitle2') }}</h2>
            <p>
              {{ $t('casinoCaption2') }}
            </p>
          </div>
        </a-col>

      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="16" class="bg baccarat"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t('casinoTitle3') }}</h2>
            <p>
              {{ $t('casinoCaption3') }}
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
            <h2>{{ $t('casinoTitle4') }}</h2>
            <p>
              {{ $t('casinoCaption4') }}
            </p>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg slots"></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & CASINO</span>
            <h2>{{ $t('casinoTitle5') }}</h2>
            <p>
              {{ $t('casinoCaption5') }}
            </p>
          </div>
        </a-col>
      </a-row>
    </div>
    <br><br>
  </a-layout-content>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>

.cover {
  background-image: url("/assets/image/casino/casino-blackjack.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  // object-fit: contain;

  background-size: cover;
  position: relative;
  width: 100%;
  // min-height: 320px;
  height: 100%;

  background-position: center bottom!important;
//background-position: center center;
  // @media only screen and (min-width : 768px) {
  //   height: 400px;
  // }

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


.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;

  span {
    /* display: block; */
    // font-family: var(--font-family);
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
  // border-radius: 3px;

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
    // font-family: var(--font-family);
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
