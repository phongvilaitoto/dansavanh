<template>
  <nav>
    <div class="navbar">
      <div class="burger" @click="clickBurgerToggle">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="navbar-start">
        <div class="navbar-brand">
          <img src="../../assets/image/logo-dansavanh2.png" alt="" />
        </div>
      </div>
      <!-- menu  -->
      <div class="navbar-item">
        <nuxt-link to="/">HOME</nuxt-link>

        <nuxt-link to="/casino">CASINO</nuxt-link>
        <div class="has-dropdrown">
          <nuxt-link @click="hotelDrowdownToggle">
            HOTELS
            <DownOutlined />
          </nuxt-link>
          <ul class="dropdrown" v-if="drowdownToggle">
            <li>
              <nuxt-link
                to="/hotels/numngum"
                @click="drowdownToggle = !drowdownToggle"
                >Dansavanh Resort & Casino</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/hotels/golf"
                @click="drowdownToggle = !drowdownToggle"
                >Dansavanh Golf & Country Club</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to="/hotels/vientaine-hotel"
                @click="drowdownToggle = !drowdownToggle"
                >Dansavanh Vientiane Hotel</nuxt-link
              >
            </li>
          </ul>
        </div>
        <!-- </a> -->

        <nuxt-link to="/experience"> experience </nuxt-link>
        <nuxt-link to="/events"> events </nuxt-link>
        <nuxt-link to="/offer">offer</nuxt-link>

        <dividerProps class="has-dropdrown">
          <nuxt-link @click="moreDropdownToggle">
            more
            <DownOutlined />
          </nuxt-link>
          <!-- dropdrow -->
          <ul class="dropdrown" v-if="showMoreDropDown">
            <li>
              <nuxt-link to="/more/career">Career</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/more/testimonials">Testimonials</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/more/news">News</nuxt-link>
            </li>
          </ul>
        </dividerProps>

        <nuxt-link to="/contact"> contact </nuxt-link>

      </div>

      <!-- language switcher  -->
      <div class="languageBar-switcher">
        <span>LA</span>
        <span>TH</span>
        <span>CN</span>
      </div>

      <!-- mobile navbar  -->
      <div class="mobile-navbar" v-if="burgerToggle">
        <div class="navbar-bg" @click="clickBurgerToggle"></div>
        <div class="navbar-container">
          <div class="navbar-header">
            <span
              ><i class="fa-regular fa-x" @click="clickBurgerToggle"></i
            ></span>
          </div>
          <ul class="navbar-list">
            <li>
              <Nuxt-link class="navbar-item" to="/" @click="clickBurgerToggle">
                Home
              </Nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const burgerToggle = ref(false);
const clickBurgerToggle = () => {
  burgerToggle.value = !burgerToggle.value;
};
const drowdownToggle = ref(false);
const hotelDrowdownToggle = () => {
  drowdownToggle.value = !drowdownToggle.value
}
const showMoreDropDown = ref<any>(false);
const moreDropdownToggle = () => {
  showMoreDropDown.value = !showMoreDropDown.value
}


</script>
<style lang="scss" scoped>
nav {
  height: auto;
  padding: 10px 20px;
  background-color: rgba(23, 23, 32, 0.8) !important;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  .navbar {
    background: transparent;
    padding: 0 0.5rem;
    height: 64px;
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

      @media (max-width: 576px) {
        display: block;
      }
    }

    .navbar-item {
      align-items: center;
      display: flex;
      align-items: center;
      gap: 20px;
      text-transform: uppercase;
      font-size: 0.7rem;

      @media (max-width: 576px) {
        display: none;
      }
      a {
        position: relative;
        overflow: hidden;
        line-height: 1.8;
        color: #fff;
        transition: all ease-in-out 0.2s;
        text-decoration: none;

        &:hover::after {
          display: block !important;
        }

        &:hover {
          color: #3200b2;
        }

        &::after {
          content: "";
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 2px;
          animation: slide 0.3s;

          @keyframes slide {
            from {
              transform: translate(-100px);
            }

            to {
              transform: translate(0);
            }
          }
        }
      }
    }

    .navbar-start {
      display: flex;
      align-items: center;

      .navbar-brand {
        padding-left: 0.5rem;

        img {
          display: block;
          max-width: 150px;
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
    width: 200px;
    position: absolute;
    z-index: 999;
    padding: 1rem;
    top: 3.25rem;
    right: 0;
    border-radius: 5px;
    display: grid;
    gap: 15px;
    background-color: rgba(23,23,32,.4);
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
    float: left;

    li {
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

  @media (min-width: 992px) {
    display: none;
  }

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
