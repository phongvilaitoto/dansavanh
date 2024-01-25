<script setup lang="ts">
import type { ConfigProviderProps } from 'ant-design-vue/es'
import { theme } from 'ant-design-vue/es'
import NavBarVue from '~/components/layout/NavBar.vue';
import FooterVue from '~/components/layout/Footer.vue';
const themeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    // colorPrimary: '#ffff',
    colorPrimary: '#722ed1',
  },
} as ConfigProviderProps['theme']
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <NavBarVue />
    <div p-20px>
      <slot />
    </div>
    <FooterVue />
  </a-config-provider>
</template>

<style>
html{
  --bg-color: #f1f1f1;
}
html.dark{
  --bg-color: rgb(42, 44, 44);
  /* --bg-header-color: rgb(36, 37, 37); */
}

body{
  background-color: var(--bg-color);
}
</style>
