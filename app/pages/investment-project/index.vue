<template>
  <div>
    <UiPageHero
      title="DANSAVANH NAM NGUM RESORT AND CASINO"
      caption="Investment Opportunity"
      image="/images/hotels/casino34.jpg"
    />

    <section class="section">
      <div class="container">
        <p class="invest-intro text-center" data-aos="fade-up">
          Peak of Buffalo Mountain (Phou Khao Khouay) facing the biggest freshwater lake in Laos,
          60km from Vientiane. You will find varieties of excitement awaits you in this one of a kind
          hill top location with pampering spa services after a daylong of water activities; or even
          sumptuous dining experience at the lake side restaurants.
        </p>
        <img src="/images/decoration-1.png" alt="" class="divider-ornament" />

        <nav class="breadcrumb">
          <NuxtLink :to="localePath('/')">Home</NuxtLink>
          <span>/</span>
          <NuxtLink :to="localePath('/hotels')">Hotels</NuxtLink>
          <span>/</span>
          <span>Nam Ngum</span>
        </nav>

        <UiSectionHeader title="Facilities" center show-ornament />

        <div class="invest-grid">
          <div
            v-for="(facility, idx) in facilities"
            :key="idx"
            class="invest-card"
            data-aos="fade-up"
            :data-aos-delay="idx * 80"
          >
            <div class="invest-card__image" :style="{ backgroundImage: `url('${facility.img}')` }" />
            <h4>{{ facility.title }}</h4>
          </div>
        </div>

        <div class="text-center" style="margin-top: 3rem">
          <NuxtLink :to="localePath('/hotels')" class="btn btn--primary">
            {{ $t('viewHotelsButton') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="btn btn--outline" style="margin-left: 1rem">
            {{ $t('contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

const facilities = [
  { title: 'International Casino', img: '/images/casino-slots.jpg' },
  { title: 'Luxury Accommodation', img: '/images/hotels/hotel-namngum.jpg' },
  { title: 'Water Activities', img: '/images/hotels/golf1.jpg' },
  { title: 'Fine Dining', img: '/images/hotels/casino34.jpg' },
]
</script>

<style lang="scss" scoped>
.invest-intro {
  max-width: 750px;
  margin: 0 auto 1rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-muted);
}

.invest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
}

.invest-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  background: var(--color-white);

  &__image {
    aspect-ratio: 4/3;
    background-size: cover;
    background-position: center;
  }

  h4 {
    padding: 1.25rem;
    font-family: var(--font-display);
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    text-align: center;
  }
}
</style>
