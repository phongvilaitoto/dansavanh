<template>
  <div>
    <UiPageHero :title="$t('eventTitle')" image="/images/events/location-1.jpg" />

    <section class="section">
      <div class="container">
        <UiSectionHeader :title="$t('eventComing')" show-ornament />

        <div v-if="upcoming.length" class="events-grid">
          <article
            v-for="(item, idx) in upcoming"
            :key="item._id"
            class="event-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 80"
          >
            <div class="event-card__image" :style="{ backgroundImage: `url('${item.img}')` }" />
            <div class="event-card__body">
              <h3>{{ item.titles[selectedIdx] }}</h3>
              <p>{{ item.captions?.[selectedIdx] }}</p>
              <NuxtLink :to="localePath(`/events/${item._id}`)" class="btn btn--outline">
                {{ $t('discoverMore') }}
              </NuxtLink>
            </div>
          </article>
        </div>

        <UiEmptyState
          v-else
          :title="$t('eventComing')"
          description="No upcoming events at the moment."
        />

        <template v-if="past.length">
          <UiSectionHeader :title="$t('eventPast')" show-ornament style="margin-top: 4rem" />
          <div class="events-grid">
            <article
              v-for="item in past"
              :key="item._id"
              class="event-card event-card--past"
              data-aos="fade-up"
            >
              <div class="event-card__image" :style="{ backgroundImage: `url('${item.img}')` }" />
              <div class="event-card__body">
                <h3>{{ item.titles[selectedIdx] }}</h3>
                <p>{{ item.captions?.[selectedIdx] }}</p>
                <NuxtLink :to="localePath(`/events/${item._id}`)" class="btn btn--outline">
                  {{ $t('discoverMore') }}
                </NuxtLink>
              </div>
            </article>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { selectedIdx } = storeToRefs(useMainStore())

const { data: upcomingData } = await useBlogs('Events', { eventType: 'Coming Events' })
const { data: pastData } = await useBlogs('Events', { eventType: 'Past Events' })

const upcoming = computed(() => (upcomingData.value as any)?.dBlogs || [])
const past = computed(() => (pastData.value as any)?.dBlogs || [])
</script>

<style lang="scss" scoped>
.events-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.event-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition);

  &:hover { transform: translateY(-4px); }
  &--past { opacity: 0.8; }

  &__image {
    aspect-ratio: 16/9;
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
      color: var(--color-text-muted);
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }
  }
}
</style>
