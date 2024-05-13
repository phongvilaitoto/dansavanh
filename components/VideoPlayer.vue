<template>
    <div  class="ml-20 mr-20 max-width mt-50">
  
        <div v-show="video">
        <video id="player" ref="player"   controls>
          <source :src="video" type="video/mp4" />
        </video>
  
      </div>
  

    </div>
  </template>
  
  <script setup lang="ts">
  
  import 'plyr/dist/plyr.css'
  
  const { video } = defineProps(['video'])
  
  onMounted(async  () => {
   

    const Plyr = await import("plyr");
    const newPlayer = new Plyr.default("#player", {
    //autoplay: true
    });

    


  
  
  });

  

  </script>
  
  <style lang="scss">
  
  .plyr {
  height: 100%;
  width :100%;
  }

  $primary-color: #6fb586;
  
  
  
  .plyr--full-ui input[type=range] {
    color: $primary-color;
  }
  
  .plyr__control--overlaid {
    background: rgba($primary-color, .8);
  }
  
  .plyr--video .plyr__control.plyr__tab-focus,
  .plyr--video .plyr__control:hover,
  .plyr--video .plyr__control[aria-expanded=true] {
    background: $primary-color;
  }
  
  .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba($primary-color, .5);
  }
  
  .plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before {
    background: $primary-color;
  }
  
  
  
  
  .vjs-tech {
    padding: 0;
    margin: 0;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  
  
  .video-overview {
  
    object-fit: cover;
    background-position: center;
    width: 100%;
  }
  

  </style>