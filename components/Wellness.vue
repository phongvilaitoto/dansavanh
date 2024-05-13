<template>
    <div v-if="!isLoading" >

        <div class="max-width header-margin-y">
            <div class="text-max-width   pb-20 pl-20 pr-20">
                <a-row justify="center">
                    <a-col>
                        <h1 class="heading-h big-font-size text-center">{{ room.title }}</h1>


                        <!-- <div class="text-center">
                            <i class="fa-thin fa-chevron-left mr-20 " style="font-size: .85rem;"></i>
                            <NuxtLink to="/accomodation" class=" text-underline text-more text-whitney">

                                Back to Accommodations
                            </NuxtLink>
                        </div> -->
                        <!-- <img style="height: 150px" src="https://s3.ap-southeast-1.amazonaws.com/chipcc.cc/greenpark-images/ce81d092-f00e-4162-aff2-30472eb376ea.png" alt=""> -->
                    </a-col>
                </a-row>

            </div>

            <div class="text-center">

                <Swiper style="position: relative;" :slides-per-view="1" :space-between="20"
                    :pagination="{ clickable: true }" :loop="true" :scrollbar="{ draggable: true }" @swiper="onSwiper">

                    <SwiperSlide v-for="(image, idx) in room.images" :key="idx">

                        <div class="is-desktop slide-image" style="    width: 100%;
                            height: 750px;
                            position: relative;
                        ">

                            <div @click="setVisible(true, image) ; swipy.slideNext()" :style="{
                                height: '700px',
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
                            height: 400px;
                            position: relative;
                        ">

                            <div @click="setVisible(true, image); swipy.slideNext()" :style="{
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

                    <div justify="center" align="middle"
                        style="position: absolute;bottom: 40px; right: 20px; z-index: 99999;">
                        <a-row :gutter="10">
                            <a-col :span="12">
                                <p v-if="swipy" class="text-white" style="font-size: 1.3rem;  width: 50px">{{ `${swipy.realIndex +
                                    1}/${room.images.length}` }}</p>
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



                <div class="text-max-width mb-40 pl-20 pr-20">
                    <p class="text-center   ">

                        {{room.description}}
                    </p>

                </div>

            </div>


            <a-row justify="center"  :gutter="50">
                <a-col :sm="24" :xs="24" :md="16" :xl="16" :lg="16">
                    <a-row :gutter="10" justify="center">
                        <a-col :sm="12" :xs="12" :md="12" :xl="12" :lg="12" class="mb-30"
                            v-for="i in room.subImages.filter((o: any, idx: number) => idx <= 1)">

                            <img :src="i" alt="" class="right-content-image">
                            <!-- <h3 class="heading-h pt-10 ">{{i.title}}</h3> -->
                            <!-- <p>{{ i.description }}</p> -->

                            <!-- <NuxtLink to="/" class="text-underline"></NuxtLink> -->
                        </a-col>
                    </a-row>

                </a-col>
                <a-col :sm="24" :xs="24" :md="8" :xl="8" :lg="8">

                    <div class="right-content">
                        <div v-for="i in room.items.filter((o: any, idx: number) => idx <= 1)">
                            <div>
                                <h3>{{ i.title }}</h3>
                                <p>{{ i.description  }}</p>
                            </div>
          
                        </div>
                        <div class="is-mobile">
                                <a-divider class="pb-20"></a-divider>
                                <a v-if="room.link" :href="room.link" target="_blank">
                                    <div class="book-now-button bg-primary" style="margin-top: auto">
                                    <p class="text-white">Make a Reservation</p>
                                </div>
                                </a>
                            </div>

                            <div class="is-desktop" style="position: absolute; bottom: 0; width: 100%;">
                                <a-divider class="pb-20"></a-divider>
                               <a v-if="room.link" :href="room.link" target="_blank">
                                <div class="book-now-button bg-primary" style="margin-top: auto">
                                    <p class="text-white">Make a Reservation</p>
                                </div>
                               </a>
                            </div>

                    </div>
                </a-col>
            </a-row>

        </div>
 
    

        <div class="max-width-no-padding">
            <br>
       
   
        <WellnessChild
        v-if="room.subItems.length"
        :items="room.subItems"></WellnessChild>
        </div>
    </div>
</template>

<script setup lang="ts">



import { Swiper, SwiperSlide } from 'swiper/vue';

import WellnessChild from './WellnessChild.vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const swipy = ref<any>()




const isLoading = ref(true)

const {room} = defineProps(['room'])


isLoading.value = false

const onSwiper = (swiper: any) => {
    swipy.value = swiper
};


const visible = ref<boolean>(false);
const selectedImage = ref('')

const setVisible = (value: boolean, image: string): void => {
    if (image) {
        selectedImage.value = image
    }
    visible.value = value;

};


</script>

<style  lang="scss">
.other-room-card {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
}

.right-content {
    height: 490px;
    position: relative;

    // .media(mobile, {
    //     height: auto;
    // });
}

.right-content-image {
    width: 100%;
    object-fit: cover;

    height: 490px;

    // .media(mobile, {
    //     height: 250px;
    // });
}
</style>
