<template>
  <footer class="footer">
    <div class="footer__top container">
      <div class="footer__brand">
        <img src="/images/logo-dansavanh2.png" alt="Dansavanh" class="footer__logo" />
        <p class="footer__tagline">
          Luxury resort, world-class casino &amp; unforgettable experiences in the heart of Laos.
        </p>
      </div>

      <div class="footer__contact">
        <h4 class="footer__heading">{{ $t('contact') }}</h4>
        <ul>
          <li>
            <span class="footer__label">VIP Hotline</span>
            <a href="tel:+8562058276666">+856-20-58276666</a>
          </li>
          <li>
            <span class="footer__label">Tour Hotline</span>
            <a href="tel:+8562052241111">+856-20-52241111</a>
          </li>
          <li>
            <span class="footer__label">Thai Hotline</span>
            <a href="tel:+66921937777">+66-92193-7777</a>
          </li>
          <li>
            <span class="footer__label">Email</span>
            <a href="mailto:info@dansavanh.com">info@dansavanh.com</a>
          </li>
        </ul>
      </div>

      <div class="footer__nav">
        <h4 class="footer__heading">Explore</h4>
        <ul>
          <li><NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/casino')">{{ $t('casino') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/hotels')">{{ $t('hotels') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/experience')">{{ $t('experience') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/news')">{{ $t('newsTitle') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contact')">{{ $t('contact') }}</NuxtLink></li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>&copy; {{ year }} DANSAVANH RESORT | DANSAVANH CASINO LAOS. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const year = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.footer {
  background: var(--color-navy);
  color: rgba(255, 255, 255, 0.75);
  padding-top: 4rem;

  &__top {
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr;
    gap: 3rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__logo {
    max-width: 120px;
    margin-bottom: 1rem;
    opacity: 0.9;
  }

  &__tagline {
    font-size: 0.95rem;
    line-height: 1.6;
    max-width: 320px;
    color: rgba(255, 255, 255, 0.55);
  }

  &__heading {
    font-family: var(--font-display);
    font-size: 0.85rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--color-gold);
    margin-bottom: 1.25rem;
  }

  &__contact ul,
  &__nav ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__label {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 0.15rem;
  }

  a {
    color: rgba(255, 255, 255, 0.85);
    transition: color var(--transition);

    &:hover { color: var(--color-gold); }
  }

  &__bottom {
    padding-block: 1.5rem;
    text-align: center;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.4);
  }
}
</style>
