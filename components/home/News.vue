<template>
  <!-- event and offer  -->
  <a-row justify="center" style="padding-bottom: 1rem" >
    <a-col :span="24" style="align-content: center; justify-content: center; display: flex;">
      <img src="/assets/image/decoration-1.png" alt="" :style="{height: '50px', display:'block'}">
      </a-col>
  </a-row>
  <a-row style="padding-bottom: 1rem" justify="center" :gutter="10">
    <a-col
     :sm="24" :lg="16"
     @click="router.push('/events')"
     >
      <div class="card event cursor">
        <img src="https://storage.googleapis.com/dsv-bucket/gallery/5fd47819972a6.jpeg" alt="" />
        <h2 class="text-bold">Our Event</h2>
      </div>
    </a-col>
    <a-col :sm="24" :lg="8" @click="router.push('/offer')">
      <div class="card offer cursor">
        <img src="https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg" alt="" />
        <h2 class="text-bold">BEST OFFER</h2>
      </div>
    </a-col>
  </a-row>
  
  <!-- divided  -->
  <a-row justify="center">
      <a-col :span="24">  <a-divider style="border-color: #000" /></a-col>
    </a-row>
    <br>
    <!-- divided  -->

  <!-- news  -->
  <a-row 
  class="cursor"
  @click="router.push('/news/65dea9c32632b6dbad0e7de5')"
  justify="center" style="padding-bottom: 1rem;" :gutter="20">
    <a-col :sm="24" :lg="12">
    <div class="card news">
        <img src="https://storage.googleapis.com/dsv-bucket/gallery/5754f0381ebd4.jpeg" alt="">
    </div>
    </a-col>
    <a-col :sm="24" :lg="12">
    <h2 class="text-bold">NEWS</h2>
        <!-- <a-typography-title :level="2" :style="{color:'#000000'}">
            NEWS
        </a-typography-title> -->
        <p>The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.</p>
        <!-- <a-typography-paragraph :style="{color:'#000000'}">
            The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.
        </a-typography-paragraph> -->
    </a-col>
  </a-row>
</template>

<script setup lang="ts">

const router = useRouter()
</script>

<style scoped lang="scss">
.card {
position: relative;
color: #fff;
// font-family: var(--font-family);
margin-bottom: 10px;
height: 500px;

h2{
    position: absolute;
    bottom: 5px;
    left: 5px;
    text-transform: uppercase;
    padding: 0 10px;
}
}
.event {
  img {
    aspect-ratio: 1.68/0.8;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
.offer {
  img {
    aspect-ratio: 0.79/1;
    object-fit: cover;
    height: 100%;
    width: 100%;
}
}
.news{
    img{
        aspect-ratio: 1.3/1;
        object-fit: cover;
        height: 100%;
        width: 100%;
        max-width: 100%;
        display: block;
        background-size: cover;

    }
}
</style>
