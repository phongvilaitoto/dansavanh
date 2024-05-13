<template>

    <div>
    <!-- {{ route.params.id }}
    {{ main.hotels[0].detail.titles[selectedIdx] }}
    {{ hotel }} -->
        <HotelReuseComp :hotel="hotel.data" />
    </div>

</template>

<script setup lang="ts">

import HotelReuseComp from '@/components/hotelReuseComp.vue'

import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'
import { onMounted, reactive, watch } from 'vue';

const { main, selectedIdx } = storeToRefs(useMainStore())


import { useRoute, useRouter } from 'vue-router';
const router = useRouter()

const route = useRoute()


const hotel = reactive({
    data: {}
})

watch(() => main.value.hotels, () => {

    if(main.value.hotels) {
        // console.log(main.value.hotels)
       const hotelData = main.value.hotels.find((i: any) => i.titles[selectedIdx.value] === route.params.id)
        hotel.data =hotelData
    }
}, {immediate: true, deep: true})


</script>