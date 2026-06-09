<template>
  <article v-if="blog" class="blog-detail">
    <nav class="blog-detail__nav container">
      <button class="blog-detail__back" @click="$router.back()">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2L4 8l6 6"/></svg>
        Back
      </button>
      <div class="blog-detail__share">
        <a :href="shareUrl('facebook')" target="_blank" rel="noopener">Facebook</a>
        <a :href="shareUrl('whatsapp')" target="_blank" rel="noopener">WhatsApp</a>
        <a :href="shareUrl('email')">Email</a>
      </div>
    </nav>

    <div class="container">
      <img v-if="blog.img" :src="blog.img" :alt="blog.titles[selectedIdx]" class="blog-detail__hero" />
      <header class="blog-detail__header" data-aos="fade-up">
        <h1 class="heading-lg">{{ blog.titles[selectedIdx] }}</h1>
        <p v-if="blog.captions?.[selectedIdx]" class="blog-detail__caption">{{ blog.captions[selectedIdx] }}</p>
      </header>
      <div
        v-if="bodyContent"
        class="blog-detail__body"
        data-aos="fade-up"
        v-html="bodyContent"
      />
    </div>
  </article>

  <section v-else class="section">
    <div class="container">
      <UiEmptyState
        title="Content not found"
        description="The page you're looking for may have been moved or removed."
      >
        <NuxtLink :to="localePath('/')" class="btn btn--primary" style="margin-top: 1rem">
          {{ $t('home') }}
        </NuxtLink>
      </UiEmptyState>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { selectedIdx } = storeToRefs(useMainStore())

const { data } = await useBlog(route.params.id as string)
const blog = computed(() => (data.value as any)?.dBlog)

const bodyContent = computed(() => {
  if (!blog.value) return ''
  return blog.value.descriptions?.[selectedIdx.value]
    || blog.value.contents?.[selectedIdx.value]
    || ''
})

function shareUrl(network: string) {
  const url = encodeURIComponent(`https://www.dansavanh.net${route.fullPath}`)
  const title = encodeURIComponent(blog.value?.titles?.[selectedIdx.value] || 'Dansavanh')
  if (network === 'facebook') return `https://www.facebook.com/sharer/sharer.php?u=${url}`
  if (network === 'whatsapp') return `https://wa.me/?text=${title}%20${url}`
  return `mailto:?subject=${title}&body=${url}`
}
</script>

<style lang="scss" scoped>
.blog-detail {
  padding-top: calc(var(--nav-height) + 2rem);
  padding-bottom: 4rem;

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  &__back {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    transition: color var(--transition);
    &:hover { color: var(--color-gold); }
  }

  &__share {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;

    a {
      font-size: 0.68rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 0.4rem 0.85rem;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: var(--radius-sm);
      transition: all var(--transition);
      &:hover { border-color: var(--color-gold); color: var(--color-gold); }
    }
  }

  &__hero {
    width: 100%;
    max-height: 480px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    margin-bottom: 2.5rem;
    box-shadow: var(--shadow-md);
  }

  &__header { margin-bottom: 2rem; max-width: 800px; }

  &__caption {
    margin-top: 1rem;
    font-size: 1.1rem;
    color: var(--color-text-muted);
    line-height: 1.6;
  }

  &__body {
    max-width: 800px;
    line-height: 1.85;
    color: var(--color-text-muted);
    :deep(img) { max-width: 100%; border-radius: var(--radius-md); margin: 1.5rem 0; }
    :deep(h2), :deep(h3) {
      font-family: var(--font-display);
      color: var(--color-text);
      margin: 2rem 0 1rem;
    }
    :deep(p) { margin-bottom: 1rem; }
  }
}

</style>
