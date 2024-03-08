<template>
    <div
    class="max-width"
     style="margin-top: 120px; min-height: 500px">
     <img 
     style="width: 100%"
     src="https://storage.googleapis.com/dsv-bucket/dvs-gallery/37.jpeg" alt="">
     <br><br>
        <h1>{{ route.query.i }}</h1>
        <p>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant’s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk.
</p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()

</script>

<style scoped>

</style>