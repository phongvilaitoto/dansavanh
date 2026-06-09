<template>
  <div>
    <UiPageHero
      :title="$t('offerTitle')"
      :caption="$t('offerSubTitle')"
      image="/images/news.jpeg"
    />

    <section class="section">
      <div class="container">
        <div class="offers-grid">
          <article
            v-for="(item, idx) in blogs"
            :key="item._id"
            class="offer-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 100"
          >
            <div class="offer-card__image" :style="{ backgroundImage: `url('${item.img}')` }" />
            <div class="offer-card__body">
              <h3>{{ item.titles[selectedIdx] }}</h3>
              <p>{{ item.captions[selectedIdx] }}</p>
              <NuxtLink :to="localePath(`/offer/${item._id}`)" class="btn btn--primary">
                {{ $t('discoverMore') }}
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const config = useRuntimeConfig()
const { selectedIdx } = storeToRefs(useMainStore())
const blogs = ref<any[]>([])

const { data } = await useFetch(`${config.public.apiBase}/getDBlogs?type=Offer`)
if (data.value) blogs.value = (data.value as any).dBlogs || []
</script>

<style lang="scss" scoped>
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}

.offer-card {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  background: var(--color-white);

  &__image {
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
  }

  &__body {
    padding: 2rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }

    p {
      color: var(--color-text-muted);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }
}
</style>
