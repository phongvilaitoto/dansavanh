<template>
  <div>
    <a-row justify="center" align="middle" style="padding-bottom: 1rem; padding-top: 3rem" class="text-center"
    
    >
      <a-col :span="24">
        <!-- <a-typography-title :level="2" style="color: #000;">
          
        </a-typography-title> -->
        <!-- <h1>DANSAVANH NAM NGUM RESORT</h1> -->
        <h1 class="text-uppercase">Dansavanh Nam Ngum Resort</h1>
      </a-col>
      <a-col :span="24" :sm="18">
      <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat perspiciatis numquam soluta magni nisi error! Corrupti similique quasi quod ut quae libero nihil neque, vel, mollitia officiis dolorem aliquid quo? elit. Quia, repudiandae expedita aliquid eaque omnis suscipit tempore deserunt reiciendis accusantium dolorem delectus facilis fugit iusto eligendi vero perspiciatis dolor sequi deleniti?.</p>
  
      </a-col>
      <a-col :span="24" style="align-content: center; justify-content: center; display: flex;">
        <img src="/assets/image/decoration-1.png" alt="" :style="{ height: '50px', display: 'block' }">
      </a-col>
    </a-row>

    <!-- card  -->
    <a-row justify="center" :gutter="20" >
      <a-col :xs="24" :sm="24" :md="24" :lg="8" v-for="(i, idx) in list" :key="idx" @mouseenter="isHover = idx" @mouseleave="isHover = null">
        <div class="card-swiper">
          <nuxt-link :to="i.route">
            <div class="casino-card">
              <img class="casino-card-image" :src="i.image" alt="">

              <div class="casino-card-text-top">
                <img :src="i.icon" alt="">
              </div>
              <!-- <span><img src="/assets/image/home/logo_casino.png" alt=""></span> -->

              <div v-if="isHover !== idx"  class="casino-card-text">
                <h2 >{{ i.text }}</h2>
              </div>
              
              
              
              <div v-else class="casino-card-text">
                <p>{{ i.description }}</p>
              </div>

            </div>
            <p></p>
          </nuxt-link>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">

const isHover = ref<any>(null)

const list = ref([
  {
    route: '/casino',
    icon: 'https://storage.googleapis.com/dsv-bucket/logo_casino.png',
    image: 'https://storage.googleapis.com/dsv-bucket/casino-banner.jpeg',
    text: 'CASINO',
    description: 'Casino'
  },
  {
    route: '/experience',
    icon: 'https://storage.googleapis.com/dsv-bucket/logo_jetski.png',
    image: 'https://storage.googleapis.com/dsv-bucket/jetski-banner.jpeg',
    text: 'WATER ACTIVITIES',
    description: 'Away from the wild and rough waves, guest can enjoy kayaking, jet skiing on calm fresh water. Either ride on the gentle waves on a cruise to view the thousand islands or get to your destination on a thrilling speed boat, make sure that you have enough memory space in your phone to capture the scenery and moments.'
  },
  {
    route: '/hotels/golf',
    icon: 'https://storage.googleapis.com/dsv-bucket/logo_golf.png',
    image: 'https://storage.googleapis.com/dsv-bucket/golf-banner.jpeg',
    text: 'GOFT',
    description: 'Well known for its kind of view that blends the art of green fairways enclosed with forest of pines at elevations. Enjoy a business meeting leisurely accompanied by chirping birds and excellent entertainment facilities, a hard to come by venue for golfers.'
  }
])

</script>

<style lang="scss" scoped>
.casino-card {

  position: relative;

  .casino-card-image {

    /* display: block; */
    width: 100%;

    vertical-align: middle;
    border: 0;
    position: relative;

    height: 525px;

    object-fit: cover;


    @media only screen and (min-width :1068px) {
      height: 575px;
    }



    @media only screen and (max-width : 1067px) {
      height: 725px;
    }


  }

  .casino-card-text-top {
    position: absolute;
    left: 10px;
    top: 20px;
    color: #fdfdfd;
    padding: 0 30px;
    // -webkit-animation: fadeInDown .4s;
    // animation: fadeInDown .4s;

    img {
      height: 55px;
    }
  }

  .casino-card-text {
 
    position: absolute;
    bottom: 20px;
    left: 10px;
    color: #fdfdfd;
    padding: 0 30px;

    h2 {
    white-space: pre;
      font-size: 30px;
        font-weight: 700;
        line-height: 1.1;
        -webkit-animation: fadeInDown .4s;
    animation: fadeInDown .4s;
    }

    p {
      -webkit-animation: fadeInUp .4s;
    animation: fadeInUp .4s;
      text-shadow: 1px 1px #000;
        font-size: 18px;
    }

    

  }



}

/* card */
.card-swiper {
  /* border: 2px solid red; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  overflow: hidden;


  /* position: relative; */
  a {
    display: block;
  }

  span {
    position: absolute;
    top: 20px;
    left: 10px;
    width: 180px !important;
    padding: 0 30px;
  }

  h2 {
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



@keyframes fadeInDown {
	from {
		opacity: 0;
		transform: translate3d(0, -80%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}

@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translate3d(0, 20%, 0);
	}
	to {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
}
</style>