<template>
  <div class="layout">
    <LayoutNavBar />
    <main class="layout__main">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout__main {
  flex: 1;
}
</style>
