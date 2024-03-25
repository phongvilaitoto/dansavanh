import { defineNuxtPlugin } from 'nuxt/app'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('GoogleMap', GoogleMap)
  nuxtApp.vueApp.component('Marker', Marker) // Register Marker component if using
  nuxtApp.provide('apiKey', apiKey)
})
export const apiKey = 'AIzaSyC6NsCxLuN120Gy8IkZrqEFhq9JSPkPWD8'