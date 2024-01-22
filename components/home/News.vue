<template>
  <!-- event and offer  -->
  <a-row justify="center" style="padding-bottom: 1rem">
    <a-col :span="24" style="align-content: center; justify-content: center; display: flex;">
      <img src="/assets/image/decoration-1.png" alt="" :style="{height: '50px', display:'block'}">
      </a-col>
  </a-row>
  <a-row style="padding-bottom: 1rem" justify="center" :gutter="20">
    <a-col
     :sm="20" :lg="10"
     >
      <div class="card event">
        <img src="/assets/image/home/event.jpg" alt="" />
        <h2>Our Event</h2>
      </div>
    </a-col>
    <a-col :lg="4">
      <div class="card offer">
        <img src="/assets/image/home/offer.jpg" alt="" />
        <h2>BEST OFFER</h2>
      </div>
    </a-col>
  </a-row>
  
  <!-- divided  -->
  <a-row justify="center">
      <a-col :span="14">  <a-divider style="border-color: #000" /></a-col>
    </a-row>
    <!-- divided  -->

  <!-- news  -->
  <a-row justify="center" style="padding-bottom: 1rem;" :gutter="20">
    <a-col :span="7">
    <div class="card news">
        <img src="/assets/image/home/news.jpg" alt="">
    </div>
    </a-col>
    <a-col :span="7">
        <a-typography-title :level="2" :style="{color:'#000000'}">
            NEWS
        </a-typography-title>
        <a-typography-paragraph :style="{color:'#000000'}">
            The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.
        </a-typography-paragraph>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

</script>

<style scoped>
.card {
position: relative;
color: #fff;
font-family: var(--font-family);

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
