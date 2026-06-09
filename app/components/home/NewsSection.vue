<template>
  <section class="section section--sand" data-aos="fade-up">
    <div class="container">
      <UiSectionHeader :title="$t('newsTitle')" center show-ornament />

      <div class="news-grid">
        <article
          v-for="(item, idx) in blogs.slice(0, 3)"
          :key="item._id"
          class="news-card"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <div class="news-card__image" :style="{ backgroundImage: `url('${item.img}')` }" />
          <div class="news-card__body">
            <h3>{{ item.titles[selectedIdx] }}</h3>
            <p>{{ item.captions[selectedIdx] }}</p>
            <NuxtLink :to="localePath(`/news/${item._id}`)" class="btn btn--outline">
              {{ $t('discoverMore') }}
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="text-center" style="margin-top: 2.5rem">
        <NuxtLink :to="localePath('/news')" class="btn btn--primary">
          {{ $t('viewNews') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { selectedIdx } = storeToRefs(useMainStore())
const blogs = ref<any[]>([])

const { data } = await useFetch(`${config.public.apiBase}/getDBlogs?type=News`)
if (data.value) blogs.value = (data.value as any).dBlogs || []
</script>

<style lang="scss" scoped>
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.news-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  &__image {
    aspect-ratio: 16/10;
    background-size: cover;
    background-position: center;
  }

  &__body {
    padding: 1.75rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.35rem;
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      margin-bottom: 1.25rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
