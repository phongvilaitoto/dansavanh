<template>
  <section class="newsletter">
    <div class="container text-center" data-aos="fade-up">
      <h2 class="heading-md">{{ $t('newsLetter') }}</h2>
      <p class="newsletter__caption">{{ $t('newsLetterCaption') }}</p>
      <form class="newsletter__form" @submit.prevent="submit">
        <input
          v-model="email"
          type="email"
          class="newsletter__input"
          :placeholder="$t('newsLetterEmail')"
          required
        />
        <button type="submit" class="btn btn--primary">{{ $t('newsLetterSubmit') }}</button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const email = ref('')

function submit() {
  email.value = ''
}
</script>

<style lang="scss" scoped>
.newsletter {
  padding: 5rem 0;
  background:
    linear-gradient(rgba(13, 17, 23, 0.75), rgba(13, 17, 23, 0.75)),
    url('/images/contact/newsletter-banner-1.jpg') center/cover no-repeat;
  color: var(--color-white);

  &__caption {
    margin: 1rem auto 2rem;
    max-width: 500px;
    opacity: 0.85;
    line-height: 1.6;
  }

  &__form {
    display: flex;
    max-width: 520px;
    margin: 0 auto;
    gap: 0.5rem;

    @media (max-width: 500px) {
      flex-direction: column;
    }
  }

  &__input {
    flex: 1;
    padding: 0.875rem 1.25rem;
    border: none;
    border-radius: var(--radius-sm);
    font-family: inherit;
    font-size: 0.95rem;
  }
}
</style>
