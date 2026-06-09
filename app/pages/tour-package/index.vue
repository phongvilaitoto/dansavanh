<template>
  <div>
    <UiPageHero
      :title="$t('tourPackageTitle')"
      :caption="$t('tourPackageSubTitle')"
      image="https://storage.googleapis.com/dsv-bucket/imgs/imgs/f475dd95-133e-409e-bf3b-81ab7584da43.jpg"
    />

    <section class="section">
      <div class="container">
        <UiSectionHeader :title="$t('tourPackage')" center show-ornament />

        <div class="package-grid">
          <article
            v-for="(item, idx) in blogs"
            :key="item._id"
            class="package-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 80"
            @click="navigateTo(localePath(`/tour-package/${item._id}`))"
          >
            <div class="package-card__image" :style="{ backgroundImage: `url('${item.img || defaultImg}')` }" />
            <div class="package-card__body">
              <h3>{{ item.titles[selectedIdx] }}</h3>
              <p>{{ item.captions[selectedIdx] }}</p>
              <span class="btn btn--outline">{{ $t('discoverMore') }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { selectedIdx } = storeToRefs(useMainStore())
const { data } = await useBlogs('Jobs')
const blogs = computed(() => (data.value as any)?.dBlogs || [])
const defaultImg = 'https://storage.googleapis.com/dsv-bucket/imgs/imgs/9b5773e0-906b-4566-988b-2d6242182066.jpg'
</script>

<style lang="scss" scoped>
.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
}

.package-card {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition);

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
  }

  &__image {
    aspect-ratio: 16/9;
    background-size: cover;
    background-position: center;
  }

  &__body {
    padding: 1.75rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.35rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: var(--color-text-muted);
      margin-bottom: 1.25rem;
      font-size: 0.95rem;
    }
  }
}
</style>
