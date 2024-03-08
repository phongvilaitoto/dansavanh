<template>
    <a-select
      ref="select"
      v-model:value="selectedLanguage"
    >
      <a-select-option v-for="i in languages" :key="i.key" :value="i.key">
     <a-row justify="center" align="middle">
      <a-col>
        <img 
        :src="i.image"
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

const { locale } = useI18n()


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
  //image: require('../../assets/image/lang/cn.png')
}
])

const selectedLanguage = ref('EN')

watch(selectedLanguage, (value) => {
  locale.value = value.toLowerCase()
})

</script>

<style scoped>

</style>