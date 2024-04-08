import { setCookieLocale } from "@nuxtjs/i18n/dist/runtime/utils"

export const useMainStore = defineStore('mainStore', () => {

    const main = reactive<any>({})


    const cookieSelectedIdx = useCookie('selectedIdx')

    const selectedIdx = ref(0)

    const isOddFunc = (n: number) => { return n % 2 !== 0 }

    watch(() => selectedIdx.value, () => {
      cookieSelectedIdx.value = selectedIdx.value.toString()
    })
  

   
    if(cookieSelectedIdx.value) {

      selectedIdx.value = parseInt(cookieSelectedIdx.value)
    }

    // watch(() => selectedIdx.value, () => {
    //   cookieSelectedIdx.value = selectedIdx.value.toString()
    // })

    return { main, selectedIdx, isOddFunc }


  })

  

  // watch(() => locale.value, () => {
  //   if(locale.value) {
  //     switch(locale.value) {
  //       case 'en': {
  //         selectedIdx.value = 0
  //       }
  //       case 'th': {
  //         selectedIdx.value = 1
          
  //       }
  //       case 'cn': {
  //         selectedIdx.value = 2
          
  //       }
  //     }
    
  //   }
  //  // cookieSelectedIdx.value = selectedIdx.value.toString()
  // }, {immediate: true})