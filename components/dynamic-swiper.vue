<template>
    <div>
        
        <Swiper style="position: relative;" :slides-per-view="1" :space-between="20" :pagination="{ clickable: true }"
            :loop="true" :scrollbar="{ draggable: true }" @swiper="onSwiper">

            <SwiperSlide v-for="(image, idx) in images" :key="idx">

                <div class="is-desktop slide-image" style="    width: 100%;
                            height: 500px;
                            position: relative;
                        ">

                    <div @click=" swipy.slideNext()" :style="{
                        height: '500px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(' + image + ')',

                    }">
                        <span style="position: absolute; bottom: 0px; left: 0; z-index: 9999;" class="subtitle "> {{
                            '' }}</span>

                    </div>

                </div>


                <div class="is-mobile slide-image" style="    width: 100%;
                            height: 350px;
                            position: relative;
                        ">

                    <div @click="swipy.slideNext()" :style="{
                        height: '350px',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundImage: 'url(' + image + ')',

                    }">
                        <span style="position: absolute; bottom: 0px; left: 0; z-index: 9999;" class="subtitle "> {{
                            '' }}</span>

                    </div>

                </div>

            </SwiperSlide>

            <div justify="center" align="middle" style="position: absolute;bottom: 0px; right: 20px; z-index: 99999;">
                <a-row :gutter="10">
                    <a-col :span="12">
                        <p v-if="swipy" class="text-white" style="font-size: 1.3rem; width: 50px">{{ `${swipy.realIndex +
                            1}/${images.length}` }}</p>
                    </a-col>
                    <a-col :span="6">
                        <div @click="swipy.slidePrev()" style="margin-top: 3px">
                            <i class="cursor-pointer text-white fa-solid fa-chevron-left "></i>
                        </div>

                    </a-col>
                    <a-col :span="6">
                        <div @click="swipy.slideNext()" style="margin-top: 3px">
                            <i class="cursor-pointer text-white fa-solid fa-chevron-right"></i>
                        </div>
                    </a-col>
                </a-row>
            </div>
        </Swiper>
    </div>
</template>

<script setup lang="ts">



import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


const swipy = ref<any>()

const {images} = defineProps(['images'])

const onSwiper = (swiper: any) => {

swipy.value = swiper
//

}
</script>

<style scoped></style>