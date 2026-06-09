<template>
  <div>
    <UiPageHero
      :title="$t('newsTitle')"
      image="/images/news.jpeg"
    />

    <section class="section">
      <div class="container">
        <nav class="breadcrumb">
          <NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink>
          <span>/</span>
          <span>{{ $t('newsTitle') }}</span>
        </nav>

        <div v-if="blogs.length" class="news-list">
          <article
            v-for="(item, idx) in blogs"
            :key="item._id"
            class="news-item"
            :class="{ 'news-item--reverse': idx % 2 === 1 }"
            data-aos="fade-up"
          >
            <div class="news-item__image" :style="{ backgroundImage: `url('${item.img}')` }" />
            <div class="news-item__body">
              <h2>{{ item.titles[selectedIdx] }}</h2>
              <p>{{ item.captions?.[selectedIdx] }}</p>
              <NuxtLink :to="localePath(`/news/${item._id}`)" class="btn btn--emerald">
                {{ $t('discoverMore') }}
              </NuxtLink>
            </div>
          </article>
        </div>

        <UiEmptyState
          v-else
          :title="$t('newsTitle')"
          description="No news articles available at the moment. Please check back soon."
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { selectedIdx } = storeToRefs(useMainStore())

const { data } = await useBlogs('News')
const blogs = computed(() => (data.value as any)?.dBlogs || [])
</script>

<style lang="scss" scoped>
.news-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.news-item {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition), box-shadow var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  &--reverse {
    direction: rtl;
    .news-item__body { direction: ltr; }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &--reverse { direction: ltr; }
  }

  &__image {
    min-height: 280px;
    background-size: cover;
    background-position: center;
  }

  &__body {
    padding: 2.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-family: var(--font-display);
      font-size: 1.75rem;
      margin-bottom: 1rem;
    }

    p {
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }
  }
}
</style>
