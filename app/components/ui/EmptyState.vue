<template>
  <div class="empty-state" data-aos="fade-up">
    <div class="empty-state__icon" aria-hidden="true">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
        <path d="M16 24h16M24 16v16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.5" />
      </svg>
    </div>
    <h3 class="empty-state__title">{{ title }}</h3>
    <p v-if="description" class="empty-state__desc">{{ description }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<style lang="scss" scoped>
.empty-state {
  text-align: center;
  padding: clamp(3rem, 8vw, 5rem) 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  &__icon {
    color: var(--color-gold);
    margin-bottom: 0.5rem;
    opacity: 0.7;
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--color-text);
  }

  &__desc {
    color: var(--color-text-muted);
    max-width: 400px;
    line-height: 1.6;
  }
}
</style>
