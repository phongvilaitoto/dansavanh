<template>

  <Swiper />
  <!-- <a-carousel autoplay>
    <div class="slide-container">
      <img src="/assets/image/home/banner.jpg" alt="" /> 
      <a-typography-title :level="3">
            MOST BEAUTIFUL PLACE
      </a-typography-title>
    </div>
    <div class="slide-container">
      <img src="/assets/image/home/banner.jpg" alt="" />
      <a-typography-title :level="3">
            MOST BEAUTIFUL PLACE
      </a-typography-title> 
    </div>

    <button>eiei</button>
  </a-carousel> -->

  
  <a-layout-content class="content-container" :style="{background: '#F4F4F4', color:'#000'}">

      <!-- slide  -->
<!-- welcome  -->
    <div  class="max-width">
      <Welcome />

    </div>
  </a-layout-content>
  <a-layout-content>
    <section class="has-background">
    <div class="max-width" >
      <HotelInfo />
    </div>
     
    </section>
  </a-layout-content>
  <a-layout-content>
    <section>
   <div class="content-container">
   <div class="max-width" >
    <News />
   </div>
  
   </div>
    </section>
  </a-layout-content>
</template>

<script setup lang="ts">
import Welcome from '~/components/home/Welcome.vue';
import HotelInfo from '~/components/home/HotelInfo.vue';
import News from '~/components/home/News.vue';
import Swiper from '@/components/home/Swiper.vue'
import type { CSSProperties } from 'vue';
const cardStyle: CSSProperties ={

}

</script>

<style scoped>
:deep(.slick-slide) {
  text-align: center;
  background: #364d79;
  overflow: hidden;
  display: grid;
}
:deep(.slick-slide .slick-dots) {
li{
  border: 10px solid red !important;
}
}
:deep(.slick-slide .slide-container) {
  position: relative;
}
:deep(.slick-slide h3) {
  /* justify-self:center ; */
  color: #fff;
  position: absolute;
  bottom: 24px;
  left: 0;
  right: 0;

}
:deep(.slick-slide img) {
 aspect-ratio: 16/6;
 width: 100%;
 /* height: 100%; */
 display: block;
 object-fit: cover;
}


.content-container{
  padding: 0 20px;
  padding-bottom: 20px;
  @media (min-width: 576px) {
    padding: 0 50px;
  }


  @media only screen and (min-width :1068px) {
    padding: 0 50px 0 50px;
    
  }



  @media only screen and (max-width : 1067px) {
   padding: 0 20px 0 20px;
  }

}



/* section has background */
.has-background{
  padding: 1rem;
  background-image: url('/assets/image/home/home-bg-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;

}
</style>