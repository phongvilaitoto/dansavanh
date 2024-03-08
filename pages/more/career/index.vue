<template>
 

  <a-layout>
    <div class="cover">
      <div class="bg-cover"></div>
      <a-row justify="center" style="
          padding-top: 180px;
          padding-bottom: 62px;
          text-align: center;
          background-color: transparent;
        ">
        <a-col :span="14">
      <h5 class="headerT2">
       {{$t(' WORK AT DANSAVANH')}}
      </h5>
      </a-col>
      <a-col :xs="24" :sm="24" :md="24" :lg="12">
           
             <h1 class="headerT1">
            {{$t('CAREER')}}
            </h1>

      </a-col>
      </a-row>
    </div>
  </a-layout>
  <a-layout-content class="content-container max-width">
    <a-row justify="center">
      <a-col :span="24">
        <hr style="border: 0; margin-top: 24px; border-top: 1px solid #eee" />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <h1 class="headerTitle text-uppercase"
        
          >Dansavanh Career</h1
        >
      </a-col>
      <a-col
        :span="24"
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
        "
      >
        <p
    class="headerT2 text-black"
          >ONE OF THE BEST PLACES TO WORK IN LAOS</p
        >
      </a-col>
      <a-col
        :span="24"
        style="align-content: center; justify-content: center; display: flex; margin-top: 20px;"
      >
        <img
          src="/assets/image/decoration-1.png"
          alt=""
          :style="{ width: '160px', margin: '20xp 0 0 ' }"
        />
      </a-col>
      <a-col :span="24" style="text-align: center; justify-content: center">
        <!-- <a-typography-title :level="4"
        
          >Available jobs</a-typography-title
        > -->
        <h1 class="headerTitle text-uppercase">Available jobs</h1>
      </a-col>
    </a-row>
    <div :style="{ padding: '24px', minHeight: '280px' }">
     <div class="career_box">
      <div class="text-box cursor"
      @click="router.push('/more/career/5fd478d403249?i='+i)"
       v-for="i in 3" :key="i">
        <h3 class="text-uppercase">recruitment {{ i }}</h3>
        <p>With its lofty ceilings, white and rattan palette and antique tile floors, the Restaurant is a cool, elegant setting for breakfast, lunch and dinner. Serving authentic local and French-influenced cuisine, the Restaurant’s Laotian specialties include fish or vegetables steamed in banana leaves with coriander and coconut milk.</p>
      </div>
     </div>
    </div>

  </a-layout-content>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped lang="scss">

.cover {
  background-image: url("/assets/image/more/career-header.JPG");
  /* background-attachment: fixed;   */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 300px;
  .bg-cover {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.3);
  }
}

/* career_box */
.career_box{
  border: 2px solid #000;
  padding: 10px;
  margin-bottom: 20px;
  

  .text-box{
    margin-bottom: 20px;
    border: 10px;
    border-bottom: 1px solid #DAD8D1;
    h3{
      font-weight:900;
      font-size: 25px;
    }
   
  }
}

</style>
