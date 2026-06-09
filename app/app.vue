<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const store = useMainStore()

const { data, error } = await useFetch(`${config.public.apiBase}/getDMain`, {
  key: 'd-main',
  default: () => ({ dMain: {} }),
})

if (data.value) {
  const dMain = (data.value as any).dMain ?? data.value
  Object.assign(store.main, dMain)
}

store.isLoaded = true

if (error.value) {
  console.warn('[Dansavanh] Failed to load main data:', error.value.message)
}

useHead({
  title: 'DANSAVANH',
  meta: [{ name: 'description', content: 'Dansavanh Resort & Casino — luxury resort, casino, golf and hotels in Laos.' }],
})
</script>
