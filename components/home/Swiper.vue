<template>
    <div >
  
        <Swiper :slides-per-view="1" :space-between="10" :loop="true" :pagination="{ clickable: true }" :scrollbar="{ draggable: true }"
            @swiper="onSwiper"  :autoplay="true">

            <SwiperSlide v-for="(image, idx) in main.home.imgs" :key="idx" @click="swipy.slideNext()">
                <div class="is-desktop" :style="{
                    width: '100%', height: '600px',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(' + image + ')',
                    backgroundPosition: 'center'
                
                }">

                </div>
                <div class="is-mobile" :style="{
                    width: '100%', height: '500px',
                    backgroundSize: 'cover',
                    backgroundImage: 'url(' + image + ')',
                    backgroundPosition: 'center'
                
                }">

                </div>
            </SwiperSlide>
                
            <div class="swiper-button-prev" @click="swipy.slidePrev()"></div>
    <div class="swiper-button-next" @click="swipy.slideNext()"></div>
    <div class="swiper-scrollbar"></div>
        </Swiper>
    </div>
</template>

<script setup lang="ts">

import { useMainStore } from '@/stores/mainStore'
const store = useMainStore()

const {main, selectedIdx} = storeToRefs(store) 

import { Swiper, SwiperSlide, } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swipy = ref<any>()

const images = ref(['https://storage.googleapis.com/dsv-bucket/activity2.jpeg', 'https://storage.googleapis.com/dsv-bucket/activity2.jpeg'])

const onSwiper = (swiper: any) => {

    swipy.value = swiper
};


</script>

<style lang="scss">
.swiper-button-prev, .swiper-button-next {
    margin-top: 30px;
    color: #6fb586;
}
</style>