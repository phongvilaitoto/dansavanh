<template>
  <a-carousel autoplay>
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
  </a-carousel>
  <a-layout-content style="padding: 0 50px" :style="{background: '#F4F4F4', color:'#000'}">
    <div :style="{padding: '24px', minHeight: '280px' }">
      <!-- slide  -->
<!-- welcome  -->
    <section style="padding: 1rem;">
      <Welcome />
    </section>
    </div>
  </a-layout-content>
  <a-layout-content>
    <section class="has-background">
      <HotelInfo />
    </section>
  </a-layout-content>
  <a-layout-content>
    <section>
      <News />
    </section>
  </a-layout-content>
</template>

<script setup lang="ts">
import Welcome from '~/components/home/Welcome.vue';
import HotelInfo from '~/components/home/HotelInfo.vue';
import News from '~/components/home/News.vue';
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


/* section has background */
.has-background{
  padding: 1rem;
  background-image: url('/assets/image/home/home-bg-1.jpg');
  background-repeat: no-repeat;
  background-size: cover;

}
</style>