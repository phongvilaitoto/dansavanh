<template>
  <div class="masonry">
    <div v-for="(img, idx) in images" :key="idx" class="masonry__item" data-aos="zoom-in" :data-aos-delay="idx * 40">
      <img :src="img" alt="Gallery" loading="lazy" @click="lightbox = img" />
    </div>

    <Teleport to="body">
      <Transition name="fade">
        <div v-if="lightbox" class="lightbox" @click="lightbox = null">
          <img :src="lightbox" alt="" @click.stop />
          <button class="lightbox__close" @click="lightbox = null">&times;</button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
defineProps<{ images: string[] }>()
const lightbox = ref<string | null>(null)
</script>

<style lang="scss" scoped>
.masonry {
  column-count: 3;
  column-gap: 1.25rem;

  @media (max-width: 900px) { column-count: 2; }
  @media (max-width: 500px) { column-count: 1; }

  &__item {
    break-inside: avoid;
    margin-bottom: 1.25rem;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: zoom-in;

    img {
      width: 100%;
      display: block;
      transition: transform 0.4s ease;
    }

    &:hover img { transform: scale(1.03); }
  }
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 999;
  background: rgba(13, 17, 23, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: var(--radius-md);
  }

  &__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2.5rem;
    color: var(--color-white);
    opacity: 0.7;
    &:hover { opacity: 1; }
  }
}
</style>
