<template>
  <a-extract-style>
  <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-extract-style>
</template>
<script setup lang="ts">
</script>
<style >
@import url('~/assets/css/font.css');

.content-container{
  padding: 0 20px;
  padding-bottom: 20px;
  @media (min-width: 576px) {
    padding: 0 50px;
  }
}
</style>
