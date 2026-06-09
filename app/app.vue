<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { main } = storeToRefs(useMainStore())

const { data } = await useFetch(`${config.public.apiBase}/getDMain`)
if (data.value) {
  Object.assign(main.value, (data.value as any).dMain)
}

useHead({
  title: 'DANSAVANH',
  meta: [{ name: 'description', content: 'Dansavanh Resort & Casino — luxury resort, casino, golf and hotels in Laos.' }],
})
</script>
