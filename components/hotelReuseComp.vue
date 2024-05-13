<template>
    <a-layout>
   
        <div class="cover"   :style="`background-image: url('${hotel.detail.img}')`">
          <div class="bg-cover"
        
          ></div>
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
             {{hotel.detail.titles[selectedIdx]}}

              </h1>           
              <!-- <a-typography-title class="t1"
                >OUR OFFERS  </a-typography-title
              > -->
            </a-col>
            <!-- <a-col :span="22">
                <h5 class="headerT2" style="margin-top: -20px">
                {{$t('Interested in some activities? Have a look at ours packages.')}}
            </h5>
            </a-col> -->
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
            {{hotel.detail.descriptions[selectedIdx]}}
          </p>
        </a-col>

      </a-row>
     



      <div class="blog"  v-if="hotel.detail.usedList.includes('cards')">
      <a-row
      v-for="(i, idx) in hotel.detail.cards"
       :class="isOdd(idx+1) ? 'bg-left' : 'bg-right'" >
        <a-col :md="12" :lg="16" class="bg numngum"
        :style="`background-image: url('${i.img}')`"
        ></a-col>
        <a-col :md="12" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & GOLF</span>
            <h2>{{i.titles[selectedIdx]}}</h2>
            <p>
              {{i.descriptions[selectedIdx]}}
            </p>
          </div>
        </a-col>
      </a-row>
      </div>
   
      <div class="max-width"   v-if="hotel.detail.usedList.includes('rooms')">
        <div 
      
    
      class="line-header">
        <span>ROOM </span>
        <!-- <p></p> -->
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block', marginBottom: '50px' }"
        />
        
      </div>
    
        <a-row>
        <a-col v-for="i in hotel.detail.rooms" >
          <a-row 
     align="middle"
        class="room-container">
          <a-col :xs="24" :sm="24" :lg="14" class="room-cover"
         
          >
          <RoomSwiper :rooms="[i,...hotel.detail.rooms]"
         
          />
          </a-col>
          <a-col :xs="24" :sm="24" :lg="10" class="room-info">
            <div class="text-box">
              <h2>{{ i.titles[selectedIdx] }}</h2>
              
              <p>
           
                {{i.descriptions[selectedIdx]}}
                <br><br><p class="details">
  
                <a-popover
                v-if="i.options.includes('TV')"
                 placement="bottom">
                  <template #content class="popOver">
                    <!-- <p>This room has Cable TV</p> -->

                  </template>
                  <a-button class="circle-hover">
                    <DesktopOutlined />
                  </a-button>
                </a-popover>
                <a-popover
                v-if="i.options.includes('WIFI')"
                 placement="bottom">
                  <template #content>
                    <!-- <p>This room has WIFI</p> -->
                  </template>
                  <a-button class="circle-hover">
                    <WifiOutlined />
                  </a-button>
                </a-popover>
                <a-popover 
                v-if="i.options.includes('CAFE')"
                placement="bottom">
                  <template #content>
                    <!-- <p>This room has Cafe Bar</p> -->
                  </template>
                  <a-button class="circle-hover">
                    <CoffeeOutlined />
                  </a-button>
                </a-popover>
              </p>
              </p>

<a href="https://wa.me/8562052241111">
  <button class="btn btn-2 hover-slide-up"
          
            >
        <span>{{$t('contact')}}</span>
      </button>
</a>
             
              <!-- <a-button @click="router.push('/contact')" class="view-button text-uppercase bg-white"> Contact </a-button> -->
            </div>
          </a-col>
        </a-row>
        </a-col>
        </a-row>
      
      </div>




<div class="max-width" v-if="hotel.detail.usedList.includes('facilities')"

>

<div 
      
    
      class="line-header">
        <span>{{$t('facilities')}} </span>
        <!-- <p></p> -->
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ height: '50px', display: 'block', marginBottom: '50px' }"
        />
        </div>

<Facility :facilities="hotel.detail.facilities" />
</div>

      <!-- <div  
      v-if="hotel.detail.usedList.includes('facilities')"
      class="max-width">
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
        <a-row justify="center">
          <a-col :span="24">
            <h1
            class="headerTitle"
            >           
              {{$t('facilities')}}
            </h1>
          </a-col>
        </a-row>
        <a-row justify="center" :gutter="10">
          <a-col :lg="8" class="facility-card" v-for="i in hotel.detail.facilities" :key="i" style="width: 100%">
            <img style="width: 100%; height: 100%; object-fit: cover;" :src="i.img" alt="" />
            <span class="text-shadow" style="font-size: 25px">{{ i.titles[selectedIdx] }}</span>
          </a-col>
        </a-row>
      </div> -->




      <div    v-if="hotel.detail.usedList.includes('galleries')">
      
        <div class="line-header">
            <span>GALLERY</span>
            <!-- <p></p> -->
            <img
            src="/assets/image/decoration-1.png"
            alt=""
            :style="{ height: '40px', display: 'block' }"
            />
        </div>
        <Gallery :galleries="hotel.detail.galleries"/>
      </div>
      <!-- <a-row justify="center" style="display: flex; gap: 10px; padding-bottom: 10px;">
        <a-col :span="4" class="gallery-card" v-for="i in 4" :key="i">
          <img src="" alt="" />
        </a-col>
      </a-row> -->
      <br><br>
    </a-layout-content>
  </template>
  
  <script setup lang="ts">
  
  import Gallery from '@/components/gallery.vue'
  import Facility from '@/components/Facility.vue'

  const {hotel} = defineProps(['hotel'])

  import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const localePath = useLocalePath()

const { selectedIdx} = storeToRefs(useMainStore())
const isOdd = (n: number) => { return n % 2 !== 0 }
  
  const router = useRouter()
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
  width: 100%;

  height: 100%;

  background-position: 50% 150% !important;

  padding: 20px 0 20px;
  
  
  .bg-cover{
    display: block;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
    background-color: rgba(0,0,0,.3);
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
      .bg{
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
      justify-content:flex-start !important;
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
  .details{
    display: flex;
    gap: 10px;
   
    .circle-hover{
      color: #6e6e6e;
      background-color: #fff;
      box-shadow: inset 0 0 0 2px #ffd4;
      border-radius: 0;
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
  
     
      background-position: center;



      height: 410px;
      @media only screen and (max-width : 1067px) {
       height: 510px;
      }
      
  
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
        justify-content:flex-start;
        align-items: center;
        width: 100%;
        /* z-index: 999; */
        .img{
          display: grid;
          place-content: center;
        //  background-color: #6e6e6e;
          color: #fff;
          /* display: block; */
          width: 100%;
          height: 100%;
          aspect-ratio: 16/10;
        }
        img{
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
  
    text-transform: uppercase;
  }
  p {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 24px;
  }
}



    </style>
    