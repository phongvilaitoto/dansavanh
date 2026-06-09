<template>
  <div class="section-header" :class="{ 'section-header--center': center }" data-aos="fade-up">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2 class="heading-lg">{{ title }}</h2>
    <p v-if="subtitle" class="section-header__subtitle">{{ subtitle }}</p>
    <img v-if="showOrnament" src="/images/decoration-1.png" alt="" class="divider-ornament" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  eyebrow?: string
  subtitle?: string
  center?: boolean
  showOrnament?: boolean
}>()
</script>

<style lang="scss" scoped>
.section-header {
  margin-bottom: 3rem;

  &--center {
    text-align: center;
  }

  &__subtitle {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: var(--color-text-muted);
    max-width: 600px;

    .section-header--center & {
      margin-inline: auto;
    }
  }
}
</style>
