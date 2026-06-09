<template>
  <div class="wellness">
    <section class="wellness__hero" data-aos="fade-up">
      <h1 class="heading-lg text-center">{{ room.title }}</h1>
      <UiImageSwiper :items="room.images.map((img: string) => ({ img }))" autoplay />
      <p class="wellness__intro text-center">{{ room.description }}</p>
    </section>

    <section class="section section--sand">
      <div class="container">
        <div class="wellness__grid">
          <div class="wellness__images">
            <img
              v-for="(img, idx) in room.subImages.slice(0, 2)"
              :key="idx"
              :src="img"
              alt=""
              data-aos="fade-up"
              :data-aos-delay="idx * 100"
            />
          </div>
          <div class="wellness__items">
            <article v-for="(item, idx) in room.items.slice(0, 2)" :key="idx" data-aos="fade-up">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section v-if="room.subItems?.length" class="section">
      <div class="container">
        <UiSplitSection
          v-for="(item, idx) in room.subItems"
          :key="idx"
          :image="item.images[0]"
          :title="item.title"
          :description="item.description"
          :reverse="idx % 2 === 1"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  room: {
    title: string
    description: string
    images: string[]
    subImages: string[]
    items: { title: string; description: string }[]
    subItems: { images: string[]; title: string; description: string }[]
  }
}>()
</script>

<style lang="scss" scoped>
.wellness {
  padding-top: calc(var(--nav-height) + 2rem);

  &__intro {
    max-width: 700px;
    margin: 2rem auto 0;
    font-size: 1.1rem;
    line-height: 1.7;
    color: var(--color-text-muted);
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 2.5rem;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__images {
    display: grid;
    gap: 1rem;

    img {
      width: 100%;
      aspect-ratio: 4/3;
      object-fit: cover;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-sm);
    }
  }

  &__items article {
    margin-bottom: 2rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.35rem;
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--color-text-muted);
      line-height: 1.7;
    }
  }
}
</style>
