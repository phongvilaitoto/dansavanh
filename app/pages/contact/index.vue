<template>
  <div>
    <UiPageHero
      :title="$t('contactTitle')"
      :caption="$t('contactSubTitle')"
      image="/images/contact/page-head-3.jpg"
    />

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info" data-aos="fade-right">
            <UiSectionHeader :title="$t('dLocation')" :eyebrow="$t('gettingHere')" />

            <ul class="contact-list">
              <li>{{ $t('contactList1') }}</li>
              <li>{{ $t('contactList2') }}</li>
              <li>{{ $t('contactList3') }}</li>
              <li>{{ $t('contactList4') }}</li>
            </ul>

            <div class="contact-hotlines">
              <div class="hotline">
                <span class="hotline__label">VIP Hotline</span>
                <a href="tel:+8562058276666">+856-20-58276666</a>
              </div>
              <div class="hotline">
                <span class="hotline__label">Tour Hotline</span>
                <a href="tel:+8562052241111">+856-20-52241111</a>
              </div>
              <div class="hotline">
                <span class="hotline__label">Thai Hotline</span>
                <a href="tel:+66921937777">+66-92193-7777</a>
              </div>
            </div>

            <div class="contact-social">
              <a href="https://www.facebook.com/casino.dansavanh" target="_blank" rel="noopener">Facebook</a>
              <a href="https://www.instagram.com/dansavanhnamngumresort/" target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>

          <div class="contact-map" data-aos="fade-left">
            <p class="contact-map__hint">{{ $t('clickOnMarker') }}</p>
            <ContactMap />
          </div>
        </div>

        <ContactCards />
      </div>
    </section>

    <ContactForm />
    <ContactNewsletter />
  </div>
</template>

<style lang="scss" scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 900px) { grid-template-columns: 1fr; }
}

.contact-list {
  list-style: none;
  margin: 1.5rem 0 2rem;

  li {
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    color: var(--color-text-muted);
    font-size: 0.95rem;
  }
}

.contact-hotlines {
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hotline {
  &__label {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: 0.2rem;
  }

  a {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-navy);
    transition: color var(--transition);
    &:hover { color: var(--color-gold); }
  }
}

.contact-social {
  display: flex;
  gap: 1rem;

  a {
    padding: 0.5rem 1.25rem;
    border: 2px solid var(--color-navy);
    border-radius: var(--radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all var(--transition);

    &:hover {
      background: var(--color-navy);
      color: var(--color-white);
    }
  }
}

.contact-map {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);

  &__hint {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: 0.75rem;
    text-align: center;
  }
}
</style>
