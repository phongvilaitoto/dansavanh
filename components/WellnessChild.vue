<template>
    <div>
        <div >
            <!-- 
                ee
       {{ items }} -->

            <a-row justify="center" 
            style="margin-bottom: 20px"
            data-aos="fade-up" v-for="(i, idx) in items" :key="idx"
                :gutter="52">
                <a-col :xs="24" :sm="24" :md="14" :lg="14" v-if="isOdd(idx)" >
                    <!-- <div class="zoom-img" @click="setVisible(true, i.image)">
                        <img class="img-height" :src="i.image" alt="">
                    </div> -->

                    <dynamic-swiper :images="i.images"></dynamic-swiper>

                </a-col>
                <a-col :xs="0" :sm="0" :md="8" :lg="8">

                    <h3  class="mb-20 mt-20">{{ i.title }}</h3>
                    <p>{{ i.description }}</p>

                    <!-- <div style="position: absolute; bottom: 0; width: 100%;">

                    

                        <a :href="i.link" target="_blank" class="text-underline text-more text-whitney">
                        Make an enquiry
                    </a>
                    </div> -->
                </a-col>

                <a-col :xs="24" :sm="24" :md="14" :lg="14" v-if="isEven(idx)" >
                    <!-- <div class="zoom-img" @click="setVisible(true, i.image)">
                        <img class="img-height" :src="i.image" alt="">
                    </div> -->

                    <dynamic-swiper :images="i.images"></dynamic-swiper>

                </a-col>

                <a-col  :xs="24" :sm="24" :md="0" :lg="0">

                    <h3  class="mb-20 mt-20">{{ i.title }}</h3>
                    <p>{{ i.description }}</p>
                    <!-- <a :href="i.link" target="_blank" class="text-underline text-more text-whitney">
                        Make an enquiry
                    </a> -->


                </a-col>

            </a-row>

        </div>
    </div>
</template>

<script setup lang="ts">

const isOdd = (idx: number) => /^-?\d*[13579]$/.test(idx.toString())
const isEven = (idx: number) => /^-?\d*[02468]$/.test(idx.toString())

const { items } = defineProps(['items'])

// const facilities = ref([
//     {
//         title: 'Cruise the fabled Mekong River',
//         description: 'The mighty Mekong River starts its journey in the Tibetan Plateau and passes through Laos on its way to the South China Sea. Explore its bends and banks on one of Amantaka’s private boats, cruising to Pak Ou Caves or finding the perfect spot for a riverside picnic upstream. As the sun sets over forested mountains, enjoy cocktails and canapés while witnessing the town’s evening rituals from the water.',
//         images: ['https://www.aman.com/sites/default/files/styles/media_text_side_by_side_x_wide/public/2021-03/Amantaka%2C%20Laos%20-%20Luang%20Prabang%2C%20Mekong%20River%20Sunset.jpg?itok=RXZ_LECg']
//     },
//     {
//         title: 'Family Adventure',
//         description: 'Multi-generational activities abound in Luang Prabang, whether hiking to a waterfall for a swim in turquoise limestone pools, enjoying a cooking class on Amantaka’s organic farm or connecting with the gentle giants of the local elephant sanctuary.',
//         images: ['https://www.aman.com/sites/default/files/styles/media_text_side_by_side_x_wide/public/2021-02/Amantaka_Experiences-Overview_5.jpg?itok=oq24p9Of']
//     }
// ])
</script>



<style scoped lang="scss">
.img-height {
    height: 500px;
    object-fit: cover;
    width: 100%
}

// .push-margin {
//     .media(laptop, {
//         //    margin-bottom: -150px;
//     });

// }
</style>