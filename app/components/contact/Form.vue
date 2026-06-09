<template>
  <section class="contact-form section section--sand">
    <div class="container">
      <UiSectionHeader
        :title="$t('contactForm')"
        :subtitle="$t('contactFormCaption')"
        center
        show-ornament
      />

      <form class="form" @submit.prevent="submit">
        <div class="form__grid">
          <input v-model="form.name" type="text" class="form__input" :placeholder="$t('formName')" required />
          <input v-model="form.phone" type="tel" class="form__input" :placeholder="$t('formPhone')" required />
        </div>
        <input v-model="form.email" type="email" class="form__input" :placeholder="$t('formEmail')" required />
        <textarea v-model="form.message" class="form__input form__textarea" :placeholder="$t('formMessage')" rows="5" required />
        <div class="text-center">
          <button type="submit" class="btn btn--primary">{{ $t('formSubmit') }}</button>
        </div>
        <p v-if="submitted" class="form__success">Thank you! We'll respond within 1 business day.</p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const form = reactive({ name: '', phone: '', email: '', message: '' })
const submitted = ref(false)

function submit() {
  Object.assign(form, { name: '', phone: '', email: '', message: '' })
  submitted.value = true
  setTimeout(() => { submitted.value = false }, 5000)
}
</script>

<style lang="scss" scoped>
.form {
  max-width: 640px;
  margin: 0 auto;

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 500px) { grid-template-columns: 1fr; }
  }

  &__input {
    width: 100%;
    padding: 1rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: var(--radius-sm);
    font-family: inherit;
    font-size: 0.95rem;
    background: var(--color-white);
    transition: border-color var(--transition);

    &:focus {
      outline: none;
      border-color: var(--color-gold);
    }
  }

  &__textarea { resize: vertical; min-height: 140px; }

  &__success {
    text-align: center;
    margin-top: 1rem;
    color: var(--color-emerald);
    font-weight: 600;
  }
}
</style>
