<template>
  <div class="lang-switcher">
    <button
      v-for="lang in languages"
      :key="lang.code"
      class="lang-switcher__btn"
      :class="{ 'lang-switcher__btn--active': locale === lang.code }"
      @click="switchLang(lang.code)"
    >
      <img :src="lang.flag" :alt="lang.code" />
      <span>{{ lang.label }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import enFlag from '~/assets/image/lang/en.png'
import thFlag from '~/assets/image/lang/th.png'
import cnFlag from '~/assets/image/lang/ch.png'

const { locale, setLocale } = useI18n()
const { selectedIdx } = storeToRefs(useMainStore())

const languages = [
  { code: 'en', label: 'EN', flag: enFlag, idx: 0 },
  { code: 'th', label: 'TH', flag: thFlag, idx: 1 },
  { code: 'cn', label: 'CN', flag: cnFlag, idx: 2 },
]

function switchLang(code: string) {
  setLocale(code)
  const lang = languages.find(l => l.code === code)
  if (lang) selectedIdx.value = lang.idx
}
</script>

<style lang="scss" scoped>
.lang-switcher {
  display: flex;
  gap: 0.35rem;
  background: rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-md);
  padding: 0.25rem;

  &__btn {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.35rem 0.65rem;
    border-radius: var(--radius-sm);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    color: rgba(255, 255, 255, 0.6);
    transition: all var(--transition);

    img {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      object-fit: cover;
    }

    &:hover { color: var(--color-white); }

    &--active {
      background: rgba(201, 169, 98, 0.2);
      color: var(--color-gold);
    }
  }
}
</style>
