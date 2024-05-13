<template>
    <HeaderTitle
  img="https://storage.googleapis.com/dsv-bucket/imgs/imgs/28091e24-afc4-49ab-ad63-b1d137ec940e.jpg"
  :title="$t('sportAndActivities')"
  :caption="$t('dActivities')"
  />
  <!-- <a-layout>
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
       {{$t('dActivities')}}
      </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('sportAndActivities')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout> -->
  <a-layout-content class="layout" style="padding: 20px 0">
    <a-row justify="center">

      <a-col :span="24" style="text-align: center; justify-content: center">
        <h2 class="headerTitle text-uppercase"
        
          >{{$t('tonsOfActivities')}}</h2
        >
      </a-col>
      <a-col
        :span="24"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        "
      >
        <p
    class="headerT2 text-black"
          > {{ $t('fromSport') }}</p
        >
      </a-col>


      <!-- <a-col :span="20">
        <h2 style="color: #000;  text-align: center; margin: 0; padding: 50px 0 50px"> {{$t('tonsOfActivities')}}</h2>
      </a-col>
      <a-col :span="16" style="text-align: center">
        <p style=" letter-spacing: 3px; font-size: 13px;">
         {{ $t('fromSport') }}
        </p>
      </a-col> -->


      <a-col :span="24" style="align-content: center; justify-content: center; display: flex">
        <img src="/assets/image/decoration-1.png" alt="" :style="{ height: '50px', display: 'block' }" />
      </a-col>
    </a-row>
    <div class="blog max-width">
      <!-- <a-row class="bg-left">
        <a-col :md="12" :lg="14" class="bg numngum"
        
        ></a-col>
        <a-col :md="12" :lg="10" class="text-container">
          <div class="text-box">
            <h1>STANDARD ROOM</h1>
            <p>
              With its lofty ceilings, white and rattan palette and antique tile
              floors, the Restaurant is a cool, elegant setting for breakfast,
              lunch and dinner. Serving authentic local and French-influenced
              cuisine, the Restaurant’s Laotian specialties include fish or
              vegetables steamed in banana leaves with coriander and coconut
              milk.
            </p>
          </div>
        </a-col> 
      </a-row>
      <br> -->
      <a-row :class="isOddFunc(idx) ? 'bg-right' : 'bg-left'"
      v-for="(i, idx) in blogs"
      >
        <a-col :md="12" :lg="14" class="bg vte"
        :style="`background-image: url('${i.img}')`"
        ></a-col>
        <a-col :md="12" :lg="10" class="text-container">
          <div class="text-box">
            <h1>{{i.titles[selectedIdx]}}</h1>
            <p>
              {{ i.captions[selectedIdx] }}
            </p>
            <button class="btn btn-2 hover-slide-up"
            @click="$router.push(localePath('/experience') + '/' + i._id)"
            >
        <span>{{$t('discoverMore')}}</span>
      </button>
          </div>
        </a-col>
      </a-row>



     
    </div>
    <div class="line-header">
      <span>GALLERY</span>
      <img src="/assets/image/decoration-1.png" alt="" :style="{ height: '40px', display: 'block' }" />
    </div>
    <a-row justify="center" >
      <Gallery :galleries="main.experienceGalleries"/>
    </a-row>
  </a-layout-content>

</template>

<script setup lang="ts">
import Gallery from '@/components/gallery.vue'


import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const config = useRuntimeConfig()

const store = useMainStore()
const {isOddFunc} = store
const {selectedIdx, main} = storeToRefs(store)

const localePath = useLocalePath()

const blogs = ref<any>([])

const { data }: any = await useFetch(config.public.apiBase + '/getDBlogs?type=Experience')
blogs.value = data.value.dBlogs

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

// .t1 {
//   // font-size: 42px;
//   font-family: var(--font-family);
//   font-weight: 700;
//   line-height: 1em;

//   @media only screen and (min-width : 320px) {
//     font-size: 45px;
//   }

//   @media only screen and (min-width: 576px) {
//     font-size: 82px;
//   }
// }

.cover {
  background-image: url("/assets/image/experience/activity2.jpg");
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

.blog {
  background-color: #f4f4f4 !important;
  margin-top: 20px;
  padding: 0 !important;

  .bg-left,
  .bg-right {
    .bg {
      background-color: #6e6e6e;
      background-image: url("https://storage.googleapis.com/dsv-bucket/dvs-gallery/28.jpeg");
      display: block;
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

  /* @media (min-width: 576px) {
    .bg-right .text-container {
      left: 5%;
    }
    .bg-left .text-container {
      right: 5%;
    }
  } */
}

/* textbox  */
.text-box {
  justify-self: center;
  background-color: #fff;
  padding: 48px;
  color: #000;
  border-radius: 3px;

  h1 {
    font-weight: 700;
    margin: 20px 0;
    margin-top: 0 !important;
   //font-family: var(--font-family);
    text-transform: uppercase;
  }

  p {
    font-weight: 200;
    font-size: 16px;
    margin-bottom: 24px;
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
