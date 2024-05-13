<template>
  <nav>
    <div class="navbar">

      <div class="navbar-start">
        <div class="navbar-brand">
          <img src="assets/image/logo-dansavanh4.png" alt="">
          <!-- <img src="../../assets/image/logo-dansavanh2.png" alt="" /> -->
        </div>
      </div>
      
      <!-- menu  -->
      <div class="navbar-item is-desktop">
        <nuxt-link :to="localePath('/')" class="line-hover">{{ $t('home') }}</nuxt-link>

        <nuxt-link class="line-hover" :to="localePath('/casino')" >{{ $t('casino') }}</nuxt-link>
        <div class="has-dropdrown" @mouseover="drowdownToggle = true; drowdownToggle2 = false; showMoreDropDown = false">
          <nuxt-link 
          :to="localePath('/hotels')"
          class="line-hover cursor">
            {{ $t('hotels') }}
            <DownOutlined style="position: absolute; top: 3px; right: -18px" v-if="drowdownToggle" />
          </nuxt-link>
          <ul @click="drowdownToggle = false" class="dropdrown" style="width: 310px !important;" v-if="drowdownToggle"
            @mouseleave="drowdownToggle = false">

            <li v-for="(i, idx) in main.hotels" :key="idx">
              <nuxt-link
              :to="localePath('/hotels/' + i.titles[selectedIdx])"
               @click="drowdownToggle = !drowdownToggle" class="line-hover">{{i.titles[selectedIdx]}}</nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link
              :to="localePath('/hotels/numngum')"
               @click="drowdownToggle = !drowdownToggle" class="line-hover">{{$t('hotelTab1')}}</nuxt-link>
            </li>
            <li>
              <nuxt-link
              :to="localePath('/hotels/golf')"
               class="line-hover" @click="drowdownToggle = !drowdownToggle">{{$t('hotelTab2')}}</nuxt-link>
            </li>
            <li>
              <nuxt-link
              :to="localePath('/hotels/vientaine-hotel')"
               class="line-hover"
                @click="drowdownToggle = !drowdownToggle">{{$t('hotelTab3')}}</nuxt-link>
            </li> -->
          </ul>
        </div>
        <!-- </a> -->

        <!-- <nuxt-link 
        :to="localePath('/experience')"
     class="line-hover"> {{ $t('experience') }} </nuxt-link> -->


     <div class="has-dropdrown" @mouseover="drowdownToggle2 = true; drowdownToggle = false; showMoreDropDown = false; ">
          <nuxt-link 
          :to="localePath('/experience')"
          class="line-hover cursor">
            {{ $t('experience') }}
            <DownOutlined style="position: absolute; top: 3px; right: -18px" v-if="drowdownToggle2" />
          </nuxt-link>
          <ul @click="drowdownToggle2 = false" class="dropdrown" style="width: 310px !important;" v-if="drowdownToggle2"
            @mouseleave="drowdownToggle2 = false">
            <li v-for="(i, idx) in blogs" :key="idx">
            
              <nuxt-link
              :to="localePath('/experience/' + i._id + '?title=' + i.titles[selectedIdx])"
               @click="drowdownToggle2 = !drowdownToggle2" class="line-hover">{{i.titles[selectedIdx]}}</nuxt-link>
            </li>
          </ul>
        </div>

        <nuxt-link 
        :to="localePath('/near-by')"
         class="line-hover"> {{ $t('near By') }} </nuxt-link>


         <!-- <nuxt-link 
        :to="localePath('/tour-package')"
         class="line-hover"> {{ $t('tourPackage') }} </nuxt-link> -->
        <nuxt-link
        :to="localePath('/offer')"
      class="line-hover">{{ $t('offer') }}</nuxt-link>

        <dividerProps class="has-dropdrown">
          <nuxt-link @mouseover="showMoreDropDown = true; drowdownToggle = false; drowdownToggle2 = false" class="line-hover">
            {{ $t('more') }}
            <DownOutlined style="position: absolute; top: 3px; right: -18px" v-if="showMoreDropDown" />
          </nuxt-link>
          <!-- dropdrow -->
          <ul class="dropdrown" style="width: 180px !important;" v-if="showMoreDropDown"
            @mouseleave="showMoreDropDown = false">


            <nuxt-link 
        :to="localePath('/events')"
         class="line-hover"> {{ $t('events') }} </nuxt-link>
            <li>
              <nuxt-link class="line-hover"
              :to="localePath('/tour-package')"
             >{{$t('tour Package')}}</nuxt-link>
            </li>
            <li>
              <nuxt-link class="line-hover"
              :to="localePath('/gallery')"
             >{{$t('gallery')}}</nuxt-link>
            </li>
            <li>
              <nuxt-link
              :to="localePath('/more/career')"
              class="line-hover">{{$t('careerTitle')}}</nuxt-link>
            </li>

            <!-- <li>
              <nuxt-link to="/more/testimonials">Testimonials</nuxt-link>
            </li> -->
            <li>
              <nuxt-link 
              :to="localePath('/news')"
            class="line-hover">{{$t('newsTitle')}}</nuxt-link>
            </li>
          </ul>
        </dividerProps>

        <nuxt-link 
        :to="localePath('/contact')"
        class="line-hover"> {{ $t('contact') }} </nuxt-link>

      </div>

      <!-- language switcher  -->
      <!-- <div class="languageBar-switcher is-desktop">
        <span>LA</span>
        <span>TH</span>
        <span>CN</span>
      </div> -->

      <div class="is-desktop">


        <LanguageSwitcher style="position: absolute; right: 0; top: 15px" />


      </div>


      <div class="is-mobile">
        <i @click="visible = true" style="padding: 10px; cursor: pointer; color: white"
          class="fa-solid fa-bars fa-xl "></i>
        <Drawer :visible="visible" @onClose="visible = false" />
      </div>

      <!-- mobile navbar  -->

    </div>
  </nav>
</template>

<script setup lang="ts">
import Drawer from '@/components/layout/Drawer.vue'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'


import { storeToRefs } from 'pinia'

const config = useRuntimeConfig()

const store = useMainStore()

const {selectedIdx, main} = storeToRefs(store)

const burgerToggle = ref(false);
const showMoreDropDown = ref<any>(false);
  const drowdownToggle = ref(false);
  const drowdownToggle2 = ref(false)

const blogs = ref<any>([])



const { data }: any = await useFetch(config.public.apiBase + '/getDBlogs?type=Experience')
blogs.value = data.value.dBlogs

const visible = ref(false)

const route = useRoute()

const localePath = useLocalePath()

const clickBurgerToggle = () => {
  burgerToggle.value = !burgerToggle.value;
};

const hotelDrowdownToggle = () => {
  drowdownToggle.value = !drowdownToggle.value
}

const moreDropdownToggle = () => {
  showMoreDropDown.value = !showMoreDropDown.value
}

watch(() => route.name , () => {
  showMoreDropDown.value = false
  drowdownToggle.value = false
  drowdownToggle2.value = false
  visible.value = false
})


</script>


<style lang="scss" scoped>
nav {

  height: 98px;
  padding: 20px 20px;
  background-color: rgba(23, 23, 32, 0.8) !important;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;

 // min-height: 64px;
  min-height: 59px;

  .navbar {
    background: transparent;
    padding: 0 0.5rem;
   // height: 64px;
    height: 59px;
    // height: 3.25rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width: 576px) {
      height: 45px;
    }

    // burger icon
    .burger {
      position: absolute;
      right: 0;
      margin-right: 1rem;
      display: none;
      color: #fff;

      margin: 20px 0 20px 0;

      @media (max-width: 576px) {
        display: block;
      }
    }

    .navbar-item {

      align-items: center;
      display: flex;
      align-items: center;
      gap: 50px;
      text-transform: uppercase;
      // font-size: 0.7rem;
      font-size: .8rem;

      // padding: 0 30px 0 30px;



      @media (max-width: 576px) {
        display: none;
      }




    }

    .navbar-start {
      display: flex;
      align-items: center;

      .navbar-brand {
        padding-left: 0.5rem;

        img {
          display: block;
          max-width: 200px;
          //  height: 80px;
        }
      }
    }

    // language bar
    .languageBar-switcher {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 576px) {
        display: none;
      }

      color: #fff;
      padding: 5px 10px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.1s ease-out;
      gap: 10px;
      // border: 1px solid red;
    }
  }
}

// user
.has-dropdrown {
  position: relative;

  // dropdrow
  .dropdrown {



    // width: 100%;
    position: absolute;
    z-index: 999;
    padding: 1rem;
    top: 3.25rem;
    left: 0;
    border-radius: 5px;
    display: grid;
    gap: 15px;
    background-color: rgba(23, 23, 32, .4);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    float: left;

    li {
      padding: 10px;
      color: #fff;
      text-transform: uppercase;
      display: flex;
      font-size: 0.7rem;
      transition: all ease-in-out 0.1s;

      i {
        margin-right: 10px;
        width: 20px;
        height: auto;
      }

      // &:hover {
      //   color: ;
      //   // font-size: 16px;
      // }
    }
  }
}

// button
button {
  text-transform: uppercase;
}

// navbar mobile
.mobile-navbar {
  position: relative;

  // @media (min-width: 992px) {
  //   display: none;
  // }

  .navbar-bg {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;
  }

  .navbar-container {
    position: fixed;
    right: 0;
    left: 3.25rem;
    top: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 999;
    padding: 20px;

    .navbar-header {
      display: flex;
      align-items: center;
      padding-bottom: 10px;

      i {
        cursor: pointer;
      }
    }

    .navbar-list {
      display: flex;
      // gap: 0.5rem;
      padding-top: 20px;
      flex-direction: column;

      li {
        list-style: none;
        transition: all ease-in-out 0.1s;
        // border: 1px solid red;
        padding: 5px 0;

        .navbar-item {
          text-decoration: none;
          // color: #3200b2;
          cursor: pointer;
          display: flex;

          i {
            margin-right: 0.5rem;
            width: 30px;
            height: 30px;
            display: block;
          }

          // &:hover {
          // }
        }

        &:nth-child(8) {
          // color: red;
          margin-top: 1rem;
        }
      }
    }
  }
}
</style>
