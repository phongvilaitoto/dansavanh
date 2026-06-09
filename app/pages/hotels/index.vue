<template>
  <div>
    <UiPageHero
      :title="$t('ourHotels')"
      :caption="$t('stepInTheWorld')"
      image="/images/hotel-namngum.jpg"
    />

    <section class="section">
      <div class="container">
        <div v-if="main.hotels?.length" class="hotels-grid">
          <NuxtLink
            v-for="(hotel, idx) in main.hotels"
            :key="idx"
            :to="localePath('/hotels/' + hotel.titles[selectedIdx])"
            class="hotel-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 100"
          >
            <img :src="hotel.img" :alt="hotel.titles[selectedIdx]" />
            <div class="hotel-card__overlay">
              <h3>{{ hotel.titles[selectedIdx] }}</h3>
              <p>{{ hotel.captions?.[selectedIdx] }}</p>
              <span class="btn btn--outline-light">{{ $t('viewHotelButton') }}</span>
            </div>
          </NuxtLink>
        </div>

        <UiEmptyState
          v-else
          :title="$t('ourHotels')"
          description="Hotel listings are loading or temporarily unavailable."
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { main, selectedIdx } = storeToRefs(useMainStore())
</script>

<style lang="scss" scoped>
.hotels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.hotel-card {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition);

  &:hover {
    transform: translateY(-6px);

    img { transform: scale(1.05); }
  }

  img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(13, 17, 23, 0.9) 0%, transparent 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2rem;
    color: var(--color-white);

    h3 {
      font-family: var(--font-display);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 1rem;
    }
  }
}
</style>
