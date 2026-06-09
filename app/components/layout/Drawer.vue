<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="drawer-overlay" @click="close" />
    </Transition>
    <Transition name="slide">
      <aside v-if="open" class="drawer">
        <div class="drawer__header">
          <img src="/images/logo-dansavanh4.png" alt="Dansavanh" />
          <button class="drawer__close" aria-label="Close" @click="close">&times;</button>
        </div>

        <LayoutLanguageSwitcher class="drawer__lang" />

        <nav class="drawer__nav">
          <NuxtLink :to="localePath('/')" @click="close">{{ $t('home') }}</NuxtLink>
          <NuxtLink :to="localePath('/casino')" @click="close">{{ $t('casino') }}</NuxtLink>
          <NuxtLink :to="localePath('/hotels')" @click="close">{{ $t('hotels') }}</NuxtLink>
          <div class="drawer__sub">
            <NuxtLink
              v-for="(h, idx) in main.hotels || []"
              :key="idx"
              :to="localePath('/hotels/' + h.titles[selectedIdx])"
              @click="close"
            >
              {{ h.titles[selectedIdx] }}
            </NuxtLink>
          </div>
          <NuxtLink :to="localePath('/experience')" @click="close">{{ $t('experience') }}</NuxtLink>
          <NuxtLink :to="localePath('/events')" @click="close">{{ $t('events') }}</NuxtLink>
          <NuxtLink :to="localePath('/offer')" @click="close">{{ $t('offer') }}</NuxtLink>
          <NuxtLink :to="localePath('/news')" @click="close">{{ $t('newsTitle') }}</NuxtLink>
          <NuxtLink :to="localePath('/gallery')" @click="close">{{ $t('gallery') }}</NuxtLink>
          <NuxtLink :to="localePath('/near-by')" @click="close">{{ $t('near By') }}</NuxtLink>
          <NuxtLink :to="localePath('/tour-package')" @click="close">{{ $t('tour Package') }}</NuxtLink>
          <NuxtLink :to="localePath('/more/career')" @click="close">{{ $t('careerTitle') }}</NuxtLink>
          <NuxtLink :to="localePath('/investment-project')" @click="close">Investment</NuxtLink>
          <NuxtLink :to="localePath('/contact')" @click="close">{{ $t('contact') }}</NuxtLink>
        </nav>
      </aside>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { main, selectedIdx } = storeToRefs(useMainStore())
const open = defineModel<boolean>('open', { default: false })

function close() {
  open.value = false
}
</script>

<style lang="scss" scoped>
.drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 200;
}

.drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--color-navy);
  z-index: 201;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img { height: 40px; }
  }

  &__close {
    font-size: 2rem;
    color: var(--color-white);
    line-height: 1;
    opacity: 0.7;

    &:hover { opacity: 1; }
  }

  &__lang {
    align-self: flex-start;
  }

  &__sub {
    padding-left: 1rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    border-left: 2px solid rgba(201, 169, 98, 0.3);

    a {
      padding: 0.5rem 0 !important;
      font-size: 0.7rem !important;
      border-bottom: none !important;
      opacity: 0.7;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    a {
      padding: 0.85rem 0;
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      transition: color var(--transition);

      &:hover { color: var(--color-gold); }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
