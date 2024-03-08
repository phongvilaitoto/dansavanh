<template>

    <div class="max-width" style="padding: 0 30px 0 30px" >
        <div style="display: flex; justify-content: center;">
        
        <div style=" margin-top: 150px; width: 100%">
            <img style="width: 100%; " src="https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg" alt="">
            <br><br>
            <h1>NEWS</h1>
            <p>The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.</p>
        
        <br><br>
        <img style="width: 100%; height:300px; object-fit: cover" src="https://lab-108-bucket.s3-ap-southeast-1.amazonaws.com/image-banner/4f779f44-4724-4d79-a696-1592f0552b66.jpeg" alt="">

        <br><br>
        </div>
            </div>
    </div>

</template>

<script lang="ts" setup>
    const route = useRoute()
    const router = useRouter()

    if(route.params.id !== '65dea9c32632b6dbad0e7de5') router.push('/')
</script>

<style lang="scss" scoped>

</style>