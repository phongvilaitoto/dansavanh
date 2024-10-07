<template>
  <NuxtLayout>
    <NuxtPage  />
  </NuxtLayout>
  <!-- <client-only>
      <nuxt-facebook-chat :options="options" />
    </client-only> -->
</template>
<script setup lang="ts">
// import { NuxtFacebookChatOptions } from 'nuxt-facebook-chat';

// // Define your chat options
// const options: NuxtFacebookChatOptions = {
//   pageId: "1782751151960317",  // Your Facebook Page ID
//   locale: "th_TH",            // Set the locale for the chat
//   themeColor: "#E04040",      // Customize the chat theme color
// };

import { useMainStore } from "@/stores/mainStore";
import { storeToRefs } from "pinia";

const config = useRuntimeConfig();

const object = reactive({});

const { main } = storeToRefs(useMainStore());

// const route = useRoute()
// const router = useRouter()
//onMounted(async () => {
  
  const { data }: any = await useFetch(config.public.apiBase + "/getDMain");
  Object.assign(main.value, data.value.dMain);
// })

// if(route.path === '/') router.push('/en')
useHead({
  title: "DANSAVANH",
  meta: [{ name: "description", content: "DANSAVANH" }],
});
</script>
<style lang="scss">
@import url("~/assets/css/fonts.css");
@import url("~/assets/css/all.css");

// @font-face {
//     font-family: "Playfair Display";
//     src: url('~/assets/fonts/PlayfairDisplay-Regular.ttf');
// }

// @font-face {
//     font-family: "Playfair Display";
//     src: url('~/assets/fonts/PlayfairDisplay-Bold.ttf');
//      font-weight: bold;
// }

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Playfair Display", sans-serif;
}

p,
span {
  font-family: "Source Sans Pro", sans-serif;
}

.text-center {
  text-align: center;
}

.global-margin-top {
  margin-top: 180px;
}
/* Custom, iPhone Retina */
.eiei {
  @media only screen and (min-width: 320px) {
  }

  /* Small Devices, Tablets */
  @media only screen and (min-width: 768px) {
  }
}

.is-mobile {
  @media only screen and (min-width: 1068px) {
    display: none !important;
  }
}

.is-desktop {
  @media only screen and (max-width: 1067px) {
    display: none !important;
  }
}

// .is-mobile {
//   @media only screen and (min-width : 768px) {
//     display: none  !important;
//   }
// }

// .is-desktop {
//   @media only screen and (max-width : 767px) {
//     display: none !important;
//   }
// }

.headerTitle {
  // font-size: 42px;
  // font-family: var(--font-family);
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  line-height: 1em;

  color: black;
  font-size: 45px;

  // @media only screen and (max-width : 767px) {
  //   font-size: 45px;
  // }

  // @media only screen and (min-width : 768px) {

  //   font-size: 82px;
  // }
}

body,
html {
  -webkit-font-smoothing: antialiased;
  background-color: #f4f4f4;
  color: #111118;
  //font-family: source sans pro,helvetica neue,Helvetica,Arial,sans-serif;
  font-size: 16px;
  line-height: 1.5;
  // font-family:"Playfair Display", sans-serif !important;
}

a {
  font-size: 0.9rem;
}

h2 {
  // font-family: playfair display,helvetica neue,Helvetica,Arial,sans-serif;
  font-weight: 400;
  line-height: 1.1;
  text-transform: uppercase;
  margin-top: 24px;
  margin-bottom: 12px;
  font-size: 32px;
}
h1 {
  line-height: 1.1;
  font-weight: 700;
}
//social share
.social-share {
  color: #111118;
  &:hover {
    color: #fff;
  }
}
//set padding container
.gutter-container {
  padding-right: 1.75rem;
  padding-left: 1.75rem;
}

//set max-width to container
.max-width {
  max-width: 1180px !important;

  margin: 0 auto 0 auto;

  h3 {
    font-weight: 400;
    line-height: 1.1;
    font-size: 24px;
  }

  // @media only screen and (min-width :1068px) {
  //   display: none  !important;
  // }

  @media only screen and (max-width: 1067px) {
    padding: 0px;
  }
}

.text-white {
  color: white;
}

.text-shadow {
  //text-shadow: 1px 1px #000;
  backdrop-filter: blur(3px);
}

// h2 {
//   font-size: 33px;
// }
// .t1 {

//   h1 {

//     font-size: 86px;
//     color: white;
//     font-weight: 700;

//   }
// }

.headerT1 {
  //  font-family: "Playfair Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 86px;
  // font-weight: 900;
  line-height: 1em;
  color: #fff !important;

  color: white;

  font-weight: 700;
  line-height: 1em;
}

.headerT2 {
  // font-family: "Playfair Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  letter-spacing: 7px;
  font-weight: 300;
  margin: 14px 0 7px 0;
  color: white;
}

.text-black {
  color: black;
}

.text-uppercase {
  text-transform: uppercase;
}

.line-hover {
  font-family: "Source Sans Pro", sans-serif;

  display: inline-block;
  color: white;
  text-decoration: none;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: #6fb586;
    transition: transform 0.45s cubic-bezier(0.835, -0.005, 0.06, 1);
    transform: scaleX(0);
  }
  &:after {
    transform-origin: left;
  }

  &:hover:after {
    transform-origin: left;
    transform: scaleX(1);
  }
}

.cursor {
  cursor: pointer;
}

.text-bold {
  font-weight: 700;
}
.bg-white {
  background: white;
  color: black;
}

.text-thin {
  font-weight: 300 !important;
  line-height: 1.4em !important;
  color: #323232;
}

.view-button {
  text-transform: uppercase;
  border-radius: 0;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12px !important;
  height: 40px;
  min-width: 120px;
  //background-color: white !important;
}

.input {
  width: 100%;
  background-color: #fdfdfd;
  border: 1px solid rgba(17, 17, 24, 0.2) !important;
  border-radius: 0;
  color: #111118;
  font-size: 15px;
  height: inherit;
  margin-bottom: 24px;
  line-height: 1.5;
  padding: 16px 24px;
}

.btn-primary {
  background-image: none;
  background-color: transparent;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  padding: 8px 24px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 0;
  border: 1px #6fb586 solid;
  color: #6fb586 !important;
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  box-shadow: 0 0 1px transparent;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.ant-btn-default:not(:disabled):hover {
  color: #6fb586;
  border-color: #6fb586;
}

:where(.css-dev-only-do-not-override-1b6tocy).ant-select:not(
    .ant-select-disabled
  ):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
  .ant-select-selector {
  border-color: #6fb586;
  border-inline-end-width: undefinedpx !important;
}

:where(.css-dev-only-do-not-override-1b6tocy).ant-select:not(
    .ant-select-disabled
  ):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover
  .ant-select-selector {
  border-color: #6fb586;
  border-inline-end-width: undefinedpx !important;
}

.room-cover {
  background-size: cover;
}
</style>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button:active,
button:hover,
button:focus {
  outline: 0 !important;
  outline-offset: 0;
}
button::before,
button::after {
  position: absolute;
  content: "";
}

.btn-holder {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 10px auto 35px;
}
.btn {
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;

  min-width: 150px;

  height: 40px;
  min-width: 120px;
}
.btn span {
  position: relative;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 20px;
  transition: 0.3s;
  font-weight: 400;
  height: 40px;

  line-height: 1.5;
  font-family: "Source Sans Pro", sans-serif !important;
  font-size: 12px !important;
  letter-spacing: 3px !important;
}

/*--- btn-1 ---*/
.btn-1::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}
.btn-1 span {
  color: rgb(255, 255, 255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-1 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}

/* 1.hover-filled-slide-down */
.btn.hover-filled-slide-down::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-down:hover::before {
  height: 0%;
}

/* 2.hover-filled-slide-up */
.btn.hover-filled-slide-up::before {
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-up:hover::before {
  height: 0%;
}

/* 3.hover-filled-slide-left */
.btn.hover-filled-slide-left::before {
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-left:hover::before {
  width: 0%;
}

/* 4. hover-filled-slide-right */
.btn.hover-filled-slide-right::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.btn.hover-filled-slide-right:hover::before {
  width: 0%;
}

/* 5. hover-filled-opacity */
.btn.hover-filled-opacity::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
}
.btn.hover-filled-opacity:hover::before {
  opacity: 0;
}

/*--- btn-2 ---*/
.btn-2::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}
.btn-2 span {
  color: rgb(28, 31, 30);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s;
}
.btn-2 span:hover {
  color: rgb(255, 255, 255);
  transition: 0.2s 0.1s;
}

/* 6. hover-slide-down */
.btn.hover-slide-down::before {
  top: 0;
  left: 0;
  right: 0;
  height: 0%;
  width: 100%;
}
.btn.hover-slide-down:hover::before {
  height: 100%;
}

/* 7. hover-slide-up */
.btn.hover-slide-up::before {
  bottom: 0;
  left: 0;
  right: 0;
  height: 0%;
  width: 100%;
}
.btn.hover-slide-up:hover::before {
  height: 100%;
}

/* 8. hover-slide-left */
.btn.hover-slide-left::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 0%;
}
.btn.hover-slide-left:hover::before {
  width: 100%;
}

/* 9. hover-slide-right */
.btn.hover-slide-right::before {
  top: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 0%;
}
.btn.hover-slide-right:hover::before {
  width: 100%;
}

/* 10. hover-opacity */
.btn.hover-opacity::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}
.btn.hover-opacity:hover::before {
  opacity: 1;
}

/*--- btn-3 ---*/
.btn-3 {
  padding: 5px;
}
.btn-3 span {
  color: rgb(255, 255, 255);
  background-color: rgb(54, 56, 55);
}
.btn-3::before,
.btn-3::after {
  background: transparent;
  z-index: 2;
}

/* 11. hover-border-1 */
.btn.hover-border-1::before,
.btn.hover-border-1::after {
  width: 10%;
  height: 25%;
  transition: 0.35s;
}
.btn.hover-border-1::before {
  top: 0;
  left: 0;
  border-left: 1px solid rgb(28, 31, 30);
  border-top: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-1::after {
  bottom: 0;
  right: 0;
  border-right: 1px solid rgb(28, 31, 30);
  border-bottom: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-1:hover::before,
.btn.hover-border-1:hover::after {
  width: 99%;
  height: 98%;
}

/* 12. hover-border-2 */
.btn.hover-border-2::before,
.btn.hover-border-2::after {
  width: 10%;
  height: 25%;
  transition: 0.35s;
}
.btn.hover-border-2::before {
  bottom: 0;
  left: 0;
  border-left: 1px solid rgb(28, 31, 30);
  border-bottom: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-2::after {
  top: 0;
  right: 0;
  border-right: 1px solid rgb(28, 31, 30);
  border-top: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-2:hover::before,
.btn.hover-border-2:hover::after {
  width: 99%;
  height: 99%;
}

/* 13. hover-border-3 */
.btn.hover-border-3::before,
.btn.hover-border-3::after {
  width: 0%;
  height: 0%;
  opacity: 0;
  transition: width 0.2s 0.15s linear, height 0.15s linear, opacity 0s 0.35s;
}
.btn.hover-border-3::before {
  top: 0;
  right: 0;
  border-top: 1px solid rgb(28, 31, 30);
  border-left: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-3::after {
  bottom: 0;
  left: 0;
  border-bottom: 1px solid rgb(28, 31, 30);
  border-right: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-3:hover::before,
.btn.hover-border-3:hover::after {
  width: 100%;
  height: 99%;
  opacity: 1;
  transition: width 0.2s linear, height 0.15s 0.2s linear, opacity 0s;
}

/* 14. hover-border-4 */
.btn.hover-border-4::before,
.btn.hover-border-4::after {
  width: 0%;
  height: 0%;
  opacity: 0;
  transition: width 0.2s linear, height 0.15s 0.2s ease-out, opacity 0s 0.35s;
}
.btn.hover-border-4::before {
  bottom: 0;
  left: -1px;
  border-top: 1px solid rgb(28, 31, 30);
  border-left: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-4::after {
  top: 0;
  right: 0;
  border-bottom: 1px solid rgb(28, 31, 30);
  border-right: 1px solid rgb(28, 31, 30);
}
.btn.hover-border-4:hover::before,
.btn.hover-border-4:hover::after {
  width: 100%;
  height: 99%;
  opacity: 1;
  transition: width 0.2s 0.15s ease-out, height 0.15s ease-in, opacity 0s;
}

/* 15. hover-border-5 */
.btn.hover-border-5::before,
.btn.hover-border-5::after {
  width: 0%;
  height: 0%;
  opacity: 0;
}
.btn.hover-border-5::before {
  top: 0;
  right: 0;
  border-top: 1px solid rgb(28, 31, 30);
  border-left: 1px solid rgb(28, 31, 30);
  transition: width 0.2s 0.5s ease-out, height 0.15s 0.35s linear,
    opacity 0s 0.7s;
}
.btn.hover-border-5::after {
  bottom: 0;
  left: 0px;
  border-bottom: 1px solid rgb(28, 31, 30);
  border-right: 1px solid rgb(28, 31, 30);
  transition: width 0.2s 0.15s linear, height 0.15s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-5:hover::before,
.btn.hover-border-5:hover::after {
  width: 100%;
  height: 96%;
  opacity: 1;
}
.btn.hover-border-5:hover::before {
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s; /* 1,2 */
}
.btn.hover-border-5:hover::after {
  transition: width 0.2s 0.35s linear, height 0.15s 0.5s ease-out,
    opacity 0s 0.3s;
}

/*--- btn-4 ---*/
.btn-4 span {
  color: rgb(28, 31, 30);
  background-color: rgb(245, 245, 245);
}
.btn-4 span:hover {
  color: rgb(54, 56, 55);
}
.btn-4::before,
.btn-4::after {
  width: 15%;
  height: 2px;
  background-color: rgb(54, 56, 55);
  z-index: 2;
}

/* 16. hover-border-6 */
.btn.hover-border-6::before,
.btn.hover-border-6::after {
  top: 0;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-6::before {
  right: 50%;
}
.btn.hover-border-6::after {
  left: 50%;
}
.btn.hover-border-6:hover::before,
.btn.hover-border-6:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-6 span::before,
.btn.hover-border-6 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-6 span::before {
  top: 0;
  left: 0;
  border-left: 2px solid rgb(54, 56, 55);
  border-bottom: 2px solid rgb(54, 56, 55);
}
.btn.hover-border-6 span::after {
  top: 0;
  right: 0;
  border-right: 2px solid rgb(54, 56, 55);
  border-bottom: 2px solid rgb(54, 56, 55);
}
.btn.hover-border-6 span:hover::before,
.btn.hover-border-6 span:hover::after {
  width: 50%;
  height: 96%;
  opacity: 1;
  transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
}

/* 17. hover-border-7 */
.btn.hover-border-7::before,
.btn.hover-border-7::after {
  bottom: 0;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-7::before {
  right: 50%;
}
.btn.hover-border-7::after {
  left: 50%;
}
.btn.hover-border-7:hover::before,
.btn.hover-border-7:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-7 span::before,
.btn.hover-border-7 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-7 span::before {
  bottom: 0;
  left: 0;
  border-left: 2px solid rgb(54, 56, 55);
  border-top: 2px solid rgb(54, 56, 55);
}
.btn.hover-border-7 span::after {
  bottom: 0;
  right: 0;
  border-right: 2px solid rgb(54, 56, 55);
  border-top: 2px solid rgb(54, 56, 55);
}
.btn.hover-border-7 span:hover::before,
.btn.hover-border-7 span:hover::after {
  width: 50%;
  height: 96%;
  opacity: 1;
  transition: height 0.2s 0.2s ease-in, width 0.2s 0.4s linear, opacity 0s 0.2s;
}

/* 18. hover-border-8 */
.btn.hover-border-8::before,
.btn.hover-border-8::after {
  bottom: 0;
  width: 15%;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-8::before {
  right: 50%;
}
.btn.hover-border-8::after {
  left: 50%;
}
.btn.hover-border-8:hover::before {
  width: 50%;
  transition: width 0.2s ease-in;
}
.btn.hover-border-8:hover::after {
  width: 50%;
  transition: width 0.1s ease-in;
}

.btn.hover-border-8 span::before,
.btn.hover-border-8 span::after {
  width: 0%;
  height: 0%;
  bottom: 0;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-8 span::before {
  left: 0%;
  border-left: 2px solid rgb(54, 56, 55);
  transition: height 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-8 span:hover::before {
  height: 96%;
  opacity: 1;
  transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-8 span::after {
  right: 0%;
  border-right: 2px solid rgb(54, 56, 55);
  border-top: 2px solid rgb(54, 56, 55);
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-8 span:hover::after {
  width: 99%;
  height: 96%;
  opacity: 1;
  transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
}

/* 19. hover-border-9 */
.btn.hover-border-9::before,
.btn.hover-border-9::after {
  bottom: 0;
  width: 15%;
  transition: width 0.2s 0.35s ease-out;
}
.btn.hover-border-9::before {
  right: 50%;
}
.btn.hover-border-9::after {
  left: 50%;
}
.btn.hover-border-9:hover::before {
  width: 50%;
  transition: width 0.1s ease-in;
}
.btn.hover-border-9:hover::after {
  width: 50%;
  transition: width 0.2s ease-in;
}

.btn.hover-border-9 span::before,
.btn.hover-border-9 span::after {
  width: 0%;
  height: 0%;
  bottom: 0;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-9 span::after {
  right: 0%;
  border-right: 2px solid rgb(54, 56, 55);
  transition: height 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-9 span:hover::after {
  height: 96%;
  opacity: 1;
  transition: height 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-9 span::before {
  left: 0%;
  border-left: 2px solid rgb(54, 56, 55);
  border-top: 2px solid rgb(54, 56, 55);
  transition: width 0.2s ease-in, height 0.15s 0.2s linear, opacity 0s 0.35s;
}
.btn.hover-border-9 span:hover::before {
  width: 98.5%;
  height: 96%;
  opacity: 1;
  transition: height 0.15s 0.1s linear, width 0.2s 0.25s linear, opacity 0s 0.1s;
}

/* 20. hover-border-10 */
.btn.hover-border-10::before,
.btn.hover-border-10::after {
  left: 0%;
  height: 30%;
  width: 2px;
  transition: height 0.2s 0.35s ease-out;
}
.btn.hover-border-10::before {
  top: 50%;
}
.btn.hover-border-10::after {
  bottom: 50%;
}
.btn.hover-border-10:hover::before {
  height: 50%;
  transition: height 0.2s ease-in;
}
.btn.hover-border-10:hover::after {
  height: 50%;
  transition: height 0.1s ease-in;
}

.btn.hover-border-10 span::before,
.btn.hover-border-10 span::after {
  width: 0%;
  height: 0%;
  background: transparent;
  opacity: 0;
  z-index: 2;
}
.btn.hover-border-10 span::after {
  bottom: 0;
  left: 0%;
  border-bottom: 2px solid rgb(54, 56, 55);
  transition: width 0.25s ease-in, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::after {
  width: 100%;
  opacity: 1;
  transition: width 0.25s 0.2s ease-out, opacity 0s 0.2s;
}
.btn.hover-border-10 span::before {
  top: 0%;
  left: 0%;
  border-top: 2px solid rgb(54, 56, 55);
  border-right: 2px solid rgb(54, 56, 55);
  transition: height 0.15s ease-in, width 0.2s 0.15s linear, opacity 0s 0.35s;
}
.btn.hover-border-10 span:hover::before {
  width: 98.5%;
  height: 96%;
  opacity: 1;
  transition: width 0.2s 0.1s linear, height 0.15s 0.3s ease-out,
    opacity 0s 0.1s;
}

/*--- btn-5 ---*/
.btn-5 span {
  color: rgb(28, 31, 30);
  border: 2px solid rgb(249, 211, 27);
  transition: 0.2s;
}
.btn-5 span:hover {
  background-color: rgb(245, 245, 245);
}

/* 21. hover-border-11 */
.btn.hover-border-11::before,
.btn.hover-border-11::after {
  width: 100%;
  height: 2px;
  background-color: rgb(54, 56, 55);
  z-index: 2;
  transition: 0.35s;
}
.btn.hover-border-11::before {
  top: 0;
  right: 0;
}
.btn.hover-border-11::after {
  bottom: 0;
  left: 0;
}
.btn.hover-border-11:hover::before,
.btn.hover-border-11:hover::after {
  width: 0%;
  transition: 0.2s 0.2s ease-out;
}

.btn.hover-border-11 span::before,
.btn.hover-border-11 span::after {
  width: 2px;
  height: 100%;
  background-color: rgb(54, 56, 55);
  z-index: 2;
  transition: 0.25s;
}
.btn.hover-border-11 span::before {
  bottom: 0;
  right: -2px;
}
.btn.hover-border-11 span::after {
  top: 0;
  left: -2px;
}
.btn.hover-border-11 span:hover::before,
.btn.hover-border-11 span:hover::after {
  height: 0%;
}
</style>
