<template>
       <div>
        <a-row justify="center" style="padding-bottom: 1rem;">
      <a-col :span="24" style="text-align: center;">
        <a-typography-title :level="2" style="color: #000;">
          DANSAVANH NAM NGUM RESORT
        </a-typography-title>
      </a-col>
      <a-col :span="24" :sm="18">
        <a-typography-paragraph style="color: #000; text-align: center;" >
          The latest 4-star hotel in Vientiane, Laos. Green Park Boutique Hotel Captures a Lao-style orientation with the finest contemporary architecture of Laos. The elegance of the interiors, both historic and contemporary settings are combined to create the most distinguished collection of stylish and luxurious boutique hotels in Vientiane.
        </a-typography-paragraph>
      </a-col>
      <a-col :span="24" style="align-content: center; justify-content: center; display: flex;">
      <img src="/assets/image/decoration-1.png" alt="" :style="{height: '50px', display:'block'}">
      </a-col>
     </a-row>  
     <!-- card  -->
     <a-row justify="center" :gutter="20">
      <a-col :sm="10" :lg="6" v-for="i in 3 " :key="i">
        <div class="card-swiper">
          <nuxt-link to="/casino">
            <img src="/assets/image/home/casino-cover.jpg" alt="">
          <span><img src="/assets/image/home/logo_casino.png" alt=""></span>
        <h2>Casino</h2>
        <p></p>
      </nuxt-link>
      </div>
      </a-col>
      </a-row>
       </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
/* card */
.card-swiper{
  /* border: 2px solid red; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  overflow: hidden;
  /* position: relative; */
  a{
    display: block;
  }
  img{
    /* display: block; */
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
    border: 0;
    position: relative;
  }
  span{
    position: absolute;
    top: 20px;
    left: 10px;
    width: 180px !important;
    padding: 0 30px;
  }
  h2{
    position: absolute;
    bottom: 20px;
    left: 10px;
    padding: 0 30px;
    color: #fff;
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }
}

</style>