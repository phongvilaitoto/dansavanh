<template>
    <a-select
    
      ref="select"
      v-model:value="selectedLanguage"
    >
      <a-select-option v-for="i in languages" :key="i.key" :value="i.key">
     <a-row justify="center" :gutter="20">
      <a-col>
        <img 
        :src="i.image"
        style="padding-right:10px;"
       alt="">
        <span>{{i.key}}</span>
        </a-col>
     </a-row>
      </a-select-option>
    </a-select>
</template>

<script setup lang="ts">



import enImage from '../../assets/image/lang/en.png'
import thImage from '../../assets/image/lang/th.png'
import cnImage from '../../assets/image/lang/ch.png'
import { useMainStore } from '~/stores/mainStore';

const store = useMainStore()

const {selectedIdx} = storeToRefs(store)

const { locale, setLocale } = useI18n()

const switchLocalePath = useSwitchLocalePath()


const languages = ref([
{
  key: 'EN',
  image:enImage,
},
{
  key: 'TH',
  image:thImage
},
{
  key: 'CN',
  image: cnImage

}
])

const selectedLanguage = ref('EN')

watch(selectedLanguage, (value) => {
  const key = value.toLowerCase()
  // switchLocalePath(locale.value)
  setLocale(key)
  switch(key) {
    case 'en': {
      selectedIdx.value = 0
    
      return 
    }
    case 'th': {
      selectedIdx.value = 1
    
      return 
    }
    case 'cn': {
      selectedIdx.value = 2
     
      return 
    }
  }
 
})


const fetchLang = () => {
  switch(selectedIdx.value) {
    case 0: {
      locale.value = 'en'
      selectedLanguage.value = locale.value.toUpperCase()
      return 
    }
    case 1: {
      locale.value = 'th'
      selectedLanguage.value = locale.value.toUpperCase()
      return 
    }
    case 2: {
      locale.value = 'cn'
      selectedLanguage.value = locale.value.toUpperCase()
      return 
    }
  }
}

fetchLang()



</script>

<style scoped>

</style>