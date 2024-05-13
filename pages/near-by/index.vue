<template>
   
     <div class="max-width" style="padding: 0 10px 0 10px; min-height: 80vh; margin-top: 150px" >
        <Wellness  :room="room"/>
     </div>

     
       <!-- <edw :room="room2"/> -->
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';





const isLoading = ref(true)


const room = reactive({
    title: 'Near By Title',
    description: 'A place of quiet contemplation pervaded by the spiritual tranquility of the town itself, Amantaka’s spa offers guests an exceptional personalised experience. The spa menu draws on Lao healing traditions, incorporating local herbs and traditional Buddhist rituals.',
    images: ['https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg', 'https://storage.googleapis.com/dsv-bucket/imgs/imgs/9e99bfdb-6d77-4ee9-85fd-83221ee7abb1.jpg', 'https://storage.googleapis.com/dsv-bucket/imgs/imgs/84faa7d0-02cf-4108-a575-d7c8b08ebea7.jpg', ],
    subImages: ['https://storage.googleapis.com/dsv-bucket/imgs/imgs/e7463c82-ed23-42e4-ac86-a120c93b8453.jpg', 'https://storage.googleapis.com/dsv-bucket/imgs/imgs/9e99bfdb-6d77-4ee9-85fd-83221ee7abb1.jpg','https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg',],
    items: [
        {
            title: 'Embark on a holistic journey',
            description: 'Our Signature Wellness Journeys are designed to meet individual needs while incorporating local wellness traditions and healing techniques. Each includes a massage and a personalised bath with local herbs. The Samun Pai incorporates herbal poultices, while the Anamai Hang Kai includes a detoxifying scrub and a mineral wrap.'
        },
        {
            title: 'Generations of wisdom',
            description:'Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment.'
        },
        {
            title: 'Generations of wisdom',
            description:'Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment.'
        },
        
    ],
    subItems: [
        {
            images: ['https://storage.googleapis.com/dsv-bucket/imgs/imgs/09997ce6-c88a-425a-bda0-7fe8fbbe0478.jpg'],
            title: 'Embark on a holistic journey',
            description: 'Our Signature Wellness Journeys are designed to meet individual needs while incorporating local wellness traditions and healing techniques. Each includes a massage and a personalised bath with local herbs. The Samun Pai incorporates herbal poultices, while the Anamai Hang Kai includes a detoxifying scrub and a mineral wrap.'
        },
        {
            images: ['https://storage.googleapis.com/dsv-bucket/imgs/imgs/b6669da7-deca-42ce-8544-9da884893378.jpg'],
            title: 'Generations of wisdom',
            description:'Passed down through the generations, Lao massage is a rhythmic, oil-free treatment performed over loose, comfortable clothing. A series of gentle stretches opens the body to enhance mobility, while deep pressure-point stimulation eases tension, leaving a whole body sense of relaxation and fulfillment.'
        },
        
    ]
})

//const { data }: any = await useFetch(config.API_BASE_URL + '/get-edws?type=Wellness')


 //const room2 = reactive(data.value.edws[1])

// const { data }: any = await useFetch(config.API_BASE_URL + '/get-room/' + route.params.id)
// const { data: roomsData }: any = await useFetch(config.API_BASE_URL + '/get-rooms')
// const room = ref<any>(data.value.room)
// const rooms = ref<any>(roomsData.value.rooms)
isLoading.value = false




</script>

<style scoped lang="scss">
.other-room-card {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>
