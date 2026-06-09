<template>
  <ClientOnly>
    <GoogleMap
      api-key="AIzaSyC6NsCxLuN120Gy8IkZrqEFhq9JSPkPWD8"
      style="width: 100%; height: 450px"
      :center="defaultCenter"
      :zoom="9"
    >
      <Marker
        v-for="location in locations"
        :key="location.title"
        :options="{ position: location.position }"
        @click="selectedLocation = location"
      />
      <InfoWindow
        v-if="selectedLocation"
        :options="{ position: selectedLocation.position }"
        @closeclick="selectedLocation = null"
      >
        <div class="map-info">
          <h3>{{ selectedLocation.title }}</h3>
          <img :src="selectedLocation.image" alt="" />
          <a
            :href="`https://www.google.com/maps/dir/?api=1&destination=${selectedLocation.position.lat},${selectedLocation.position.lng}`"
            target="_blank"
            rel="noopener"
          >
            Navigate here
          </a>
        </div>
      </InfoWindow>
    </GoogleMap>
  </ClientOnly>
</template>

<script setup lang="ts">
const defaultCenter = { lat: 18.265426666666665, lng: 102.62241633333333 }

const locations = [
  {
    title: 'Dansavanh Casino Resort',
    image: 'https://www.dansavanh.net/assets/images/fb2.png',
    position: { lat: 18.431522, lng: 102.648778 },
  },
  {
    title: 'Dansavanh Golf & Resort',
    image: 'https://www.dansavanh.net/assets/images/fb2.png',
    position: { lat: 18.394955, lng: 102.649904 },
  },
  {
    title: 'Dansavanh Vientiane Hotel',
    image: 'https://www.dansavanh.net/assets/images/fb2.png',
    position: { lat: 17.970802, lng: 102.568567 },
  },
]

const selectedLocation = ref<typeof locations[0] | null>(null)
</script>

<style scoped>
.map-info h3 {
  font-family: var(--font-display);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.map-info img {
  width: 160px;
  margin-bottom: 0.5rem;
}

.map-info a {
  color: var(--color-gold);
  font-size: 0.85rem;
}
</style>
