<template>
  <div>
    <UiPageHero
      :title="$t('dActivities')"
      :caption="$t('fromSport')"
      image="https://storage.googleapis.com/dsv-bucket/activity2.jpeg"
    />

    <section class="section">
      <div class="container">
        <UiSectionHeader
          :title="$t('sportAndActivities')"
          :subtitle="$t('tonsOfActivities')"
          center
          show-ornament
        />

        <div v-if="blogs.length" class="experience-grid">
          <NuxtLink
            v-for="(item, idx) in blogs"
            :key="item._id"
            :to="localePath(`/experience/${item._id}?title=${item.titles[selectedIdx]}`)"
            class="experience-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 80"
          >
            <div class="experience-card__image" :style="{ backgroundImage: `url('${item.img}')` }" />
            <div class="experience-card__body">
              <h3>{{ item.titles[selectedIdx] }}</h3>
              <p>{{ item.captions?.[selectedIdx] }}</p>
            </div>
          </NuxtLink>
        </div>

        <UiEmptyState
          v-else
          :title="$t('experience')"
          description="Activities and experiences will be listed here soon."
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { selectedIdx } = storeToRefs(useMainStore())

const { data } = await useBlogs('Experience')
const blogs = computed(() => (data.value as any)?.dBlogs || [])
</script>

<style lang="scss" scoped>
.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.experience-card {
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
    padding: 1.5rem;

    h3 {
      font-family: var(--font-display);
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
}
</style>
