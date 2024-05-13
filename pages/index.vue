<template>

  <div>
    <Swiper />
  <a-layout-content 
  data-aos="fade-up"
  class="content-container" :style="{background: '#F4F4F4', color:'#000'}">
  <VideoPlayer 
  style="margin-top: 30px"
  video="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"/>
    <div  >
      <Welcome />
    </div>
  </a-layout-content>
  <a-layout-content  data-aos="slide-up"> 
    <section class="has-background">
    <div class="max-width" >
      <HotelInfo  />
      <br>
    </div>
    </section>
  </a-layout-content>
  <a-layout-content data-aos="fade-up">
    <section>
   <div class="content-container">
   <div class="max-width" >
    <News :isComp="true" />

    <div class="text-center">
      <button class="btn btn-2 hover-slide-up"
            @click="$router.push(localePath('/news'))"
            >
        <span>{{$t('viewNews')}}</span>
      </button>
      <br><br>
    </div>
   </div>
   </div>
    </section>

  </a-layout-content>
  </div>
</template>

<script setup lang="ts">
import Welcome from '~/components/home/Welcome.vue';
import HotelInfo from '~/components/home/HotelInfo.vue';
import News from './news/index.vue';
import Swiper from '@/components/home/Swiper.vue'
import VideoPlayer from '~/components/VideoPlayer.vue';

const localePath = useLocalePath()
</script>


<style scoped lang="scss">

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