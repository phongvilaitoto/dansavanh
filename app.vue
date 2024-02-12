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
@import url('~/assets/css/font.css');
@import url('~/assets/css/all.css');


/* Custom, iPhone Retina */ 
.eiei {
  @media only screen and (min-width : 320px) {
        
      }
    
    
        /* Small Devices, Tablets */
    @media only screen and (min-width : 768px) {
    
    }

}


.is-mobile {
  @media only screen and (min-width : 768px) {
    display: none  !important;
  }
}

.is-desktop {
  @media only screen and (max-width : 767px) {
    display: none !important;
  }
}

.headerTitle {
  // font-size: 42px;
  font-family: var(--font-family);
  font-weight: 700;
  line-height: 1em;

  color: white;

  @media only screen and (max-width : 767px) {
    font-size: 45px;
  }

  @media only screen and (min-width : 768px) {
    
    font-size: 82px;
  }



}

  
  

body {
  -webkit-font-smoothing: antialiased;
    background-color: #f4f4f4;
    color: #111118;
    font-family: source sans pro,helvetica neue,Helvetica,Arial,sans-serif;
    font-size: 16px;
    line-height: 1.5;

}

h2 {
  font-family: playfair display,helvetica neue,Helvetica,Arial,sans-serif;
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
}

.content-container{
  padding: 0 20px;
  padding-bottom: 20px;
  @media (min-width: 576px) {
    padding: 0 50px;
  }
}
</style>
