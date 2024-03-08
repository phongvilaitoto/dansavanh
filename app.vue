<template>
  <a-extract-style>
  <NuxtLayout>
      <NuxtPage  />
    </NuxtLayout>
  </a-extract-style>
</template>
<script setup lang="ts">
</script>
<style lang="scss">
@import url('~/assets/css/fonts.css');
@import url('~/assets/css/all.css');


// @font-face {
//     font-family: "Playfair Display";
//     src: url('~/assets/fonts/PlayfairDisplay-Regular.ttf');
// }

// @font-face {
//     font-family: "Playfair Display";
//     src: url('~/assets/fonts/PlayfairDisplay-Bold.ttf');
//      font-weight: bold;
// }



h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  font-family:"Playfair Display", sans-serif;
}

p, span {
  font-family:"Source Sans Pro", sans-serif;
}

.text-center {
  text-align: center;
}

.global-margin-top {
  margin-top: 180px;
}
/* Custom, iPhone Retina */ 
.eiei {
  @media only screen and (min-width : 320px) {
        
      }
    
    
        /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
    
    }

}


.is-mobile {
  @media only screen and (min-width :1068px) {
    display: none  !important;
  }
}

.is-desktop {
  @media only screen and (max-width : 1067px) {
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

  
  

body, html {
  -webkit-font-smoothing: antialiased;
    background-color: #f4f4f4;
    color: #111118;
    //font-family: source sans pro,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.5;
  // font-family:"Playfair Display", sans-serif !important;

   
}

a {
  font-size: .9rem;
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

.max-width {
   max-width: 1180px !important;
 
   margin: 0 auto 0 auto;





      // @media only screen and (min-width :1068px) {
      //   display: none  !important;
      // }



      @media only screen and (max-width : 1067px) {
        padding: 0px;
      }
    

}


.text-white  {
color: white;
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
 font-family: 'Source Sans Pro', sans-serif;;

  display: inline-block;
  color: white;
  text-decoration: none;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #6fb586;
    transition: transform .45s cubic-bezier(.835,-.005,.06,1);
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

.view-button {
  text-transform: uppercase;
  border-radius: 0;
  font-family:"Source Sans Pro", sans-serif;
  font-size: 12px !important;
  height: 40px;
  min-width: 120px;
  //background-color: white !important;
}


.ant-btn-default:not(:disabled):hover {
    color: #6fb586;
    border-color: #6fb586;
}
</style>
