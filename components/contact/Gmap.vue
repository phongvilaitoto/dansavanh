<template>
    <GoogleMap
      :api-key="apiKey"
      style="width: 100%; height: 550px"
      :center="defaultCenter"
      :zoom="10"
    >
      <MarkerCluster>
        <CustomMarker
          v-for="location in locations"
          :key="location"
          :options="{ position: location.position, anchorPoint: 'BOTTOM_CENTER' }"
        >
          <div style="text-align: center">
            <img
              @click="ShowInfo(location)"
                src="assets/image/map.jpeg"
              width="50"
              height="50"
              style="margin-top: 8px; cursor: pointer"
            />
          </div>
          <InfoWindow
            v-if="selectedLocation === location"
            :options="{ position: location.position }"
          >
            <div id="content">
              <div id="siteNotice"></div>
              <h1 id="firstHeading" class="firstHeading">{{ location.title }}</h1>
              <div id="bodyContent">
                <img :src="location.image" style="width: 200px" />
  
                <p>
                  <a
                    @click="MapLink(location.position.lat, location.position.lng)"
                  >
                    - Navigate to here</a
                  >
                </p>
              </div>
            </div>
          </InfoWindow>
        </CustomMarker>
      </MarkerCluster>
    </GoogleMap>
  </template>
  
  <script setup lang="ts">
  import { apiKey } from "@/plugins/vue-google-maps";
  import {
    GoogleMap,
    CustomMarker,
    InfoWindow,
    Marker,
    MarkerCluster,
  } from "vue3-google-map";
  //import Image1 from "@/assets/image/hotels/hotel-namngum.jpg";
  //import Image2 from "@/assets/image/hotels/hotel-golf.jpg";
  //import Image3 from "@/assets/image/hotels/hotel-vientiane.jpg"; -->
  // set variable
  const defaultCenter = {
    lat: 18.265426666666665,
    lng: 102.62241633333333,
  };
  const locations = ref<any>([
    {
      title: "Dansavanh Casino Resort",
     // Image: Image1,
      image: 'https://www.dansavanh.net/assets/images/fb2.png',
      position: {
        lat: 18.431522,
        lng: 102.648778,
      },
    },
    {
      title: "Dansavanh Golf & Resort",
   //   Image: Image2,
   image: 'https://www.dansavanh.net/assets/images/fb2.png',
      position: {
        lat: 18.394955,
        lng: 102.649904,
      },
    },
    {
      title: "Dansavanh Vientiane Hotel",
   //   Image: Image3,
   image: 'https://www.dansavanh.net/assets/images/fb2.png',
      position: {
        lat: 17.970802,
        lng: 102.568567,
      },
    },
  ]);
  
  const selectedLocation = ref<any>(null);
  const ShowInfo = (location: any) => {
    selectedLocation.value =
      location === selectedLocation.value ? null : location;
  };
  
  // set map link
  const MapLink = (lat: any, lng: any) => {
    const googleMapsUrl = `https://www.google.com/maps/place/${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };
  </script>
  
  <style lang="scss" scoped></style>