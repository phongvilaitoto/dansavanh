<template>
  <a-row justify="center" style="padding-bottom: 1rem">
    <a-col :span="24" style="align-content: center; justify-content: center; display: flex;">
      <img src="/assets/image/decoration-1.png" alt="" :style="{height: '50px', display:'block'}">
      </a-col>
  </a-row>
  <!-- card info  -->
  <a-row justify="center">
    <a-col :sm="24" :lg="24">
      <div class="card-info">
        <img src="/assets/image/home/hotel1.jpg" alt="" />
        <h2>THE BEST RESORT</h2>
      </div>
    </a-col>
  </a-row>
  <a-row justify="center">
    <a-space>
      <nuxt-link to="/hotels">
        <a-button>View HOTELS</a-button>
      </nuxt-link>
    </a-space>
  </a-row>
</template>

<script setup lang="ts">


</script>

<style scoped lang="scss">
.card-info{
/* border: 2px solid red; */
height: auto;
display: flex;
align-items: center;
justify-content: center;
border-radius: 3px;
overflow: hidden;
position: relative;
  img{
    object-fit: cover;
    display: block;
    aspect-ratio: 16/9;
    width: 100%;
    /* max-width: 100%; */
    height: 100%;
}
h2{
  padding: 0 20px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #fff;
  font-family:var(--font-family);
  font-weight:700;
  font-size: 32px;
}
}

button{
  margin-top: 20px;
  background-color:transparent;
  color: #000;
}
</style>
