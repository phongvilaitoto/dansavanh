<template>
  <div>
    <UiPageHero
      :title="$t('careerTitle')"
      :caption="$t('careerSubTitle')"
      image="/images/more/career-header.JPG"
    />

    <section class="section">
      <div class="container">
        <UiSectionHeader
          :title="$t('dCareer')"
          :subtitle="$t('bestPlacesToWork')"
          center
          show-ornament
        />

        <h3 class="career-jobs-title">{{ $t('availableJobs') }}</h3>

        <div class="career-list">
          <article
            v-for="(item, idx) in blogs"
            :key="item._id"
            class="career-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 60"
            @click="navigateTo(localePath(`/more/career/${item._id}`))"
          >
            <h3>{{ item.titles[selectedIdx] }}</h3>
            <p>{{ item.captions[selectedIdx] }}</p>
            <span class="career-card__arrow">→</span>
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
</script>

<style lang="scss" scoped>
.career-jobs-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 2rem;
  color: var(--color-text-muted);
}

.career-list {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.career-card {
  padding: 1.75rem 2rem;
  background: var(--color-white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  position: relative;
  transition: background var(--transition);

  &:last-child { border-bottom: none; }

  &:hover {
    background: var(--color-sand);

    .career-card__arrow { transform: translateX(4px); color: var(--color-gold); }
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.25rem;
    text-transform: uppercase;
  }

  p {
    color: var(--color-text-muted);
    font-size: 0.95rem;
    padding-right: 2rem;
  }

  &__arrow {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.25rem;
    color: var(--color-text-muted);
    transition: all var(--transition);
  }
}
</style>
