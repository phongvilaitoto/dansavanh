<template>
  <div class="info-cards">
    <div class="info-card" data-aos="fade-up">
      <div class="info-card__icon">🚌</div>
      <h4>{{ $t('shuttleBus') }}</h4>
      <img src="/images/contact/bus2.png" alt="Shuttle bus" class="info-card__img" />
    </div>

    <div class="info-card" data-aos="fade-up" data-aos-delay="100">
      <div class="info-card__icon">📞</div>
      <h4>{{ $t('tel') }}</h4>
      <p class="info-card__label">{{ $t('telInfo') }}</p>
      <dl class="info-card__list">
        <div><dt>{{ $t('tel1') }}</dt><dd>+856 21 217 595</dd></div>
        <div><dt>{{ $t('tel2') }}</dt><dd>+856 20 5827 5555</dd></div>
        <div><dt>{{ $t('tel3') }}</dt><dd>+66 84-604-0827</dd></div>
      </dl>
    </div>

    <div class="info-card" data-aos="fade-up" data-aos-delay="200">
      <div class="info-card__icon">✉️</div>
      <h4>{{ $t('email') }}</h4>
      <p class="info-card__label">{{ $t('emailInfo') }}</p>
      <a href="mailto:info@dansavanh.net" class="info-card__email">info@dansavanh.net</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 3rem 0;

  @media (max-width: 768px) { grid-template-columns: 1fr; }
}

.info-card {
  background: var(--color-white);
  border-radius: var(--radius-md);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);

  &__icon { font-size: 2rem; margin-bottom: 0.75rem; }

  h4 {
    font-family: var(--font-display);
    font-size: 1rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  &__label {
    font-size: 0.9rem;
    color: var(--color-text-muted);
    margin-bottom: 1rem;
  }

  &__img {
    max-width: 100%;
    margin: 0 auto;
    border-radius: var(--radius-sm);
  }

  &__list {
    text-align: left;

    div {
      display: flex;
      justify-content: space-between;
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-size: 0.9rem;
    }

    dt { color: var(--color-text-muted); }
    dd { font-weight: 600; }
  }

  &__email {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-gold);
    &:hover { text-decoration: underline; }
  }
}
</style>
