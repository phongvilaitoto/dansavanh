<template>
  <HotelReuseComp :hotel="main.hotels[0]" />
  <!-- <a-layout>
      <div class="cover">
        <div class="bg-cover"></div>
        <a-row
     
          style="
            padding-top: 160px;
            padding-bottom: 50px;
            text-align:center;
            justify-content: center;
            background-color: transparent;
          "
        >
          <a-col :span="22">

            <h1 class="headerT1" style="font-size: 45px">
            {{$t('DANSAVANH NAM NGUM RESORT AND CASINO')}}
            </h1>
         
          </a-col>
        </a-row>
      </div>
    </a-layout>
  <a-layout-content class="content-container">
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :xs="24" :sm="24" :md="12" :lg="12" style="text-align: center">
        <p style="font-size: 1rem; font-weight: 300; margin-top: 24px;">
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
    <div  class="max-width">
      <a-row justify="center">
        <a-col :span="24">
          <h1
          class="headerTitle"
          >
            FACILITIES
          </h1>
        </a-col>
      </a-row>
      <a-row justify="center" :gutter="10">
        <a-col :lg="8" class="facility-card" v-for="i in 3" :key="i">
          <img style="width: 100%; height: 100%; object-fit: cover;" src="https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg" alt="" />
          <span>FACILITIES {{ i }}</span>
        </a-col>
      </a-row>
    </div>
    <div class="line-header">
      <span>ROOM </span>
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '50px', display: 'block' }"
      />
    </div>
    <div class="max-width">
      <a-row>
      <a-col v-for="i in 3" >
        <a-row 
      @click="router.push('/offer/5f6da3a70215d?i=OFFER ' + i)"
      class="room-container">
        <a-col :xs="24" :sm="24" :lg="14" class="room-cover"></a-col>
        <a-col :xs="24" :sm="24" :lg="10" class="room-info">
          <div class="text-box">
            <h2>STANDARD ROOM {{ i }}</h2>
            
            <p>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet autem eius animi laudantium consectetur quisquam, consequuntur, cum illum itaque qui omnis quas laboriosam minus. Ratione, velit necessitatibus? Laboriosam, cum voluptate?
              
              <br><br><p class="details">

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
            </p>
            <a-button @click="router.push('/contact')" class="view-button text-uppercase bg-white"> Contact </a-button>
          </div>
        </a-col>
      </a-row>
      </a-col>
      </a-row>
    
    </div>
    <div class="line-header">
      <span>GALLERY</span>
      <img
        src="/assets/image/decoration-1.png"
        alt=""
        :style="{ height: '40px', display: 'block' }"
      />
    </div>
    <Gallery/>
  </a-layout-content> -->
</template>

<script setup lang="ts">
import HotelReuseComp from "@/components/hotelReuseComp.vue";

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const { main, selectedIdx } = storeToRefs(useMainStore());

import Gallery from "@/components/gallery.vue";

const router = useRouter();
</script>

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
    // font-family: var(--font-family);
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
  // font-family: var(--font-family);
  font-weight: 700;
}
.cover {
  background-image: url("/assets/image/hotels/casino34.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  // border-radius: 3px;
  // background-color: #6e6e6e;
  position: relative;
  // border: 1px solid #333;
  /* min-height: 200px; */
  span {
    position: absolute;
    bottom: 10px;
    left: 20px;
    color: #fff;
    font-size: 20px;
  }
}

/* room  */
.room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  /* @media (min-width: 576px) {
    .room-info {  
      right: 5%;
     
    }
  } */

  .room-cover {
    /* border: 1px solid red; */
    width: 100%;
    .bg {
      width: 100%;
      height: 100%;
      display: block;
      background-color: #5e5e5e;
      aspect-ratio: 16/10;
    }
  }
  .room-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* border: 1px solid red; */
    z-index: 999;
    @media (min-width: 576px) {
      justify-content: flex-start !important;
    }

    .text-box {
      /* border: 1px solid red; */
      justify-self: center;
      background-color: #fff;
      padding: 20px;
      color: #000;
      border-radius: 3px;
      @media (min-width: 576px) {
        padding: 48px;
        /* justify-content:flex-start !important; */
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
.details {
  display: flex;
  gap: 10px;

  .circle-hover {
    color: #6e6e6e;
    background-color: #fff;
    box-shadow: inset 0 0 0 2px #ffd4;
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

<style lang="scss" scoped>
/* room  */
.room-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  .room-cover {
    aspect-ratio: 16/10;
    background-color: #5e5e5e;
    width: 200px;
    background-image: url("https://storage.googleapis.com/dsv-bucket/dvs-gallery/34.jpeg");
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
</style>

<style scoped lang="scss">
/* card  */
.promotion-container {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  .pro-cover {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    /* z-index: 999; */
    .img {
      display: grid;
      place-content: center;
      //  background-color: #6e6e6e;
      color: #fff;
      /* display: block; */
      width: 100%;
      height: 100%;
      aspect-ratio: 16/10;
    }
    img {
      display: grid;
      place-content: center;
      //  background-color: #6e6e6e;
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
</style>
