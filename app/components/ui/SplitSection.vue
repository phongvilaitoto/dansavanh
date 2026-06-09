<template>
  <div class="split-section" :class="{ 'split-section--reverse': reverse }">
    <div class="split-section__image" :style="{ backgroundImage: `url('${image}')` }" data-aos="fade-up" />
    <div class="split-section__content" data-aos="fade-up" :data-aos-delay="100">
      <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
      <h3 class="heading-md">{{ title }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
  title: string
  description: string
  eyebrow?: string
  reverse?: boolean
}>()
</script>

<style lang="scss" scoped>
.split-section {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  margin-bottom: 1.5rem;

  &--reverse {
    direction: rtl;
    .split-section__content { direction: ltr; }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &--reverse { direction: ltr; }
  }

  &__image {
    min-height: 300px;
    background-size: cover;
    background-position: center;
  }

  &__content {
    padding: clamp(1.5rem, 4vw, 2.5rem);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 { margin: 0.5rem 0 1rem; }

    p {
      color: var(--color-text-muted);
      line-height: 1.7;
    }
  }
}
</style>
