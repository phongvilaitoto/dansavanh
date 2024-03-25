<template>

    <div class="max-width" style="padding: 0 30px 0 30px" >
        <div style="display: flex; justify-content: center;">
        
        <div style=" margin-top: 150px; width: 100%">
            <div v-if="blog.img">
                <img style="width: 100%; " :src="blog.img" alt="">
            <br><br>
            </div>
            <h1>{{blog.titles[selectedIdx]}}</h1>
            <p>{{blog.captions[selectedIdx]}}</p>
        
        <!-- <br><br>
        <img style="width: 100%; height:300px; object-fit: cover" src="https://lab-108-bucket.s3-ap-southeast-1.amazonaws.com/image-banner/4f779f44-4724-4d79-a696-1592f0552b66.jpeg" alt="">

        <br><br> -->
        <div v-html="blog.descriptions[selectedIdx]"></div>
        </div>
            </div>
    </div>

</template>

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

import { useMainStore } from '@/stores/mainStore'
import { storeToRefs } from 'pinia'

const {isComp} = defineProps(['isComp']) 

const config = useRuntimeConfig()

const store = useMainStore()

const {selectedIdx} = storeToRefs(store)

const blog = ref<any>({})

const { data }: any = await useFetch(config.public.apiBase + '/getDBlog/' + route.params.id)
blog.value = data.value.dBlog


</script>

<style lang="scss" scoped>

</style>