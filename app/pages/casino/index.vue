<template>
  <div>
    <UiPageHero
      :title="$t('ourResortsCasino')"
      :caption="$t('aMagicPlace')"
      image="https://storage.googleapis.com/dsv-bucket/imgs/imgs/246eab63-3b9f-4118-a876-94bc2a075f59.jpg"
    />

    <section class="section">
      <div class="container">
        <UiSectionHeader title="CASINO" show-ornament center />

        <div class="casino-grid">
          <article
            v-for="(game, idx) in games"
            :key="idx"
            class="casino-card"
            :class="{ 'casino-card--reverse': idx % 2 === 1 }"
            data-aos="fade-up"
          >
            <div class="casino-card__image" :style="{ backgroundImage: `url('${game.image}')` }" />
            <div class="casino-card__content">
              <span class="eyebrow">DANSAVANH &amp; CASINO</span>
              <h3 class="heading-md">{{ $t(game.titleKey) }}</h3>
              <p>{{ $t(game.captionKey) }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const games = [
  { titleKey: 'casinoTitle1', captionKey: 'casinoCaption1', image: '/images/casino-blackjack.jpg' },
  { titleKey: 'casinoTitle2', captionKey: 'casinoCaption2', image: '/images/casino-roulette.jpg' },
  { titleKey: 'casinoTitle3', captionKey: 'casinoCaption3', image: '/images/casino-baccarat.jpg' },
  { titleKey: 'casinoTitle4', captionKey: 'casinoCaption4', image: '/images/casino-dragontiger.jpg' },
  { titleKey: 'casinoTitle5', captionKey: 'casinoCaption5', image: '/images/casino-slots.jpg' },
]
</script>

<style lang="scss" scoped>
.casino-grid {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.casino-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);

  &--reverse {
    direction: rtl;

    .casino-card__content { direction: ltr; }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    &--reverse { direction: ltr; }
  }

  &__image {
    min-height: 320px;
    background-size: cover;
    background-position: center;
  }

  &__content {
    padding: clamp(2rem, 4vw, 3rem);
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 { margin: 0.5rem 0 1rem; }

    p {
      color: var(--color-text-muted);
      line-height: 1.7;
    }
  }
}
</style>
