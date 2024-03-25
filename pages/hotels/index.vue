<template>
  
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
       {{$t('stepInTheWorld')}}
      </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('ourHotels')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout>




  <a-layout-content class="layout">
    <div class="blog" >
      <a-row 
      v-for="(i, idx) in main.hotels"
      :class="isOdd(idx + 1) ? 'bg-left' : 'bg-right'">
     
        <a-col :xs="24" :sm="24" :md="24" :lg="16" 
        :style="`backgroundImage: url('${i.img}')`"
        class="bg numngum"></a-col>
        <a-col  :xs="24" :sm="24" :md="24" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & HOTELS</span>
          
            <h2>{{i.titles[selectedIdx]}}</h2>
            <p>
              {{ i.descriptions[selectedIdx] }}
            </p>
            <button class="btn btn-2 hover-slide-up"
            @click="router.push(i.link)"
            >
        <span>{{$t('viewHotelButton')}}</span>
      </button>
            <!-- <a-button
            @click="router.push(i.link)"
             class="view-button bg-white">{{$t('viewHotelButton')}}</a-button> -->
          </div>
        </a-col>
      </a-row>
      <!-- <a-row class="bg-right">
        <a-col :xs="24" :sm="24" :md="24" :lg="16" class="bg vte"></a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & HOTELS</span>
            <h2>DANSAVANH VIENTIANE HOTEL</h2>
            <p>
              Situated in the city of Vientiane, 5 minute drive to Wattay
              International Airport and 10 minute to downtown centre and night
              market makes it a preferred location to many travellers. There is
              a banquet room that can accommodate 800 people and has witnessed
              umpteen wedding celebrations.
            </p>
           
            <a-button
            @click="router.push('hotels/golf')"
             class="view-button bg-white">{{$t('viewHotelButton')}}</a-button>
          </div>
        </a-col>
      </a-row>
      <a-row class="bg-left">
        <a-col :xs="24" :sm="24" :md="24" :lg="16" class="bg golf"></a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="8" class="text-container">
          <div class="text-box">
            <span>DANSAVANH & HOTELS</span>
            <h2>DANSAVANH GOLF & COUNTRY CLUB</h2>
            <p>
              Well known for its kind of view that blends the art of green
              fairways enclosed with forest of pines at elevations. Enjoy a
              business meeting leisurely accompanied by chirping birds and
              excellent entertainment facilities, a hard to come by venue for
              golfers.
            </p>
            <a-button 
            @click="router.push('hotels/vientaine-hotel')"
            class="view-button bg-white">{{ $t('viewHotelButton') }}</a-button>
          </div>
        </a-col>
      </a-row> -->
    </div>
  </a-layout-content>
</template>

<script setup lang="ts">
const router = useRouter()
import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const {main, selectedIdx} = storeToRefs(useMainStore())

const isOdd = (n: number) => { return n % 2 !== 0 }

</script>

<style scoped lang="scss">

.cover {
  background-image: url("/assets/image/hotels/homeLocation.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
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
      z-index: 1;
    }
  }
  .bg-right {
    display: flex;
    flex-direction: row-reverse;
  
  }


  @media only screen and (min-width : 768px) {
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
  width: 100%;
  justify-self: center;
  background-color: #fff;
  padding: 24px;
  color: #000;
 
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
