

export default defineI18nLocale(async (locale) => {

  const config = useRuntimeConfig()



  const { data }: any = await useFetch(config.public.apiBase + '/getDLang')

  const object = data.value.dLang
  const newObject: any = {}

  for (let field in object) {
    newObject[field] = object[field][0]
  }

  return newObject

})

