<template>
      <HeaderTitle2
  img="https://storage.googleapis.com/dsv-bucket/imgs/imgs/aab146fa-94e0-4259-b350-b14ecfb16c67.jpg"
  :title="$t('offerTitle')"
  :caption="$t('offerSubTitle')"
  />
    <!-- <a-layout>
      <div class="cover">
        <div class="bg-cover"></div>
        <a-row
     
          style="
            padding-top: 160px;
            padding-bottom: 50px;
            text-align:left;
            justify-content: center;
            background-color: transparent;
          "
        >
          <a-col :span="22">

            <h1 class="headerT1" style="font-size: 65px">
            {{$t('offerTitle')}}
            </h1>
         
          </a-col>
          <a-col :span="22">
            <h5 class="headerT2" style="margin-top: -20px">
       {{$t('offerSubTitle')}}
      </h5>         
          </a-col>
        </a-row>
      </div>
    </a-layout> -->

    
    <div class="max-width">
      <div style="margin: 2rem 0 2rem">
          <span style="cursor: pointer" @click="$router.push(localePath('/'))">HOME</span> 
          <span style="margin: 0 10px 0 10px;color: #A9A9A9;">/</span> 
          <span style="color: #A9A9A9;">OUR OFFERS</span>
        </div>
      <div>
      <a-row>
      <a-col v-for="i in blogs" >
        <a-row 
      @click="router.push(localePath('/offer') + '/' + i._id)"
      class="room-container">
        <a-col :xs="24" :sm="24" :lg="14" class="room-cover"
        :style="`background-image: url('${i.img}')`"
        ></a-col>
        <a-col :xs="24" :sm="24" :lg="10" class="room-info" style="width: 100%">
          <div class="text-box">
            <h2> {{ i.titles[selectedIdx] }}  </h2>
            <p>
         {{i.captions[selectedIdx]}}
            </p>
            <button class="btn btn-2 hover-slide-up"
            @click="$router.push(localePath('/hotels'))"
            >
        <span>{{$t('discoverMore')}}</span>
      </button>
            <!-- <a-button class="view-button text-uppercase bg-white"> Discover More </a-button> -->
          </div>
        </a-col>
      </a-row>
      </a-col>
      </a-row>
       
      </div>
   
    </div>
  </template>
  
  <script setup lang="ts">
  
  const router = useRouter()
  const localePath = useLocalePath()

import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const {isComp} = defineProps(['isComp']) 

const config = useRuntimeConfig()

const store = useMainStore()
const {isOddFunc} = store
const {selectedIdx} = storeToRefs(store)

const blogs = ref<any>([])

const { data }: any = await useFetch(config.public.apiBase + '/getDBlogs?type=Offer')
blogs.value = data.value.dBlogs

  </script>


  <style lang="scss" scoped>
  
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
 
  font-weight: 700;
}
.cover {
  background-image: url("/assets/image/events/location-1.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100px;
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
    width: 200px;
    background-image: url("https://storage.googleapis.com/dsv-bucket/dvs-gallery/40.jpeg");
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
  