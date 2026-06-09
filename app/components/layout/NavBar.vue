<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner container">
      <NuxtLink :to="localePath('/')" class="navbar__logo">
        <img src="/images/logo-dansavanh4.png" alt="Dansavanh" />
      </NuxtLink>

      <nav class="navbar__nav is-desktop">
        <NuxtLink
          v-for="link in mainLinks"
          :key="link.to"
          :to="localePath(link.to)"
          class="navbar__link"
          :class="{ 'navbar__link--active': isActive(link.to) }"
        >
          {{ $t(link.label) }}
        </NuxtLink>

        <div
          class="navbar__dropdown"
          @mouseenter="openDropdown = 'hotels'"
          @mouseleave="openDropdown = null"
        >
          <NuxtLink :to="localePath('/hotels')" class="navbar__link">
            {{ $t('hotels') }}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
          </NuxtLink>
          <Transition name="fade">
            <ul v-if="openDropdown === 'hotels'" class="navbar__menu">
              <li v-for="(hotel, idx) in main.hotels || []" :key="idx">
                <NuxtLink :to="localePath('/hotels/' + hotel.titles[selectedIdx])">
                  {{ hotel.titles[selectedIdx] }}
                </NuxtLink>
              </li>
            </ul>
          </Transition>
        </div>

        <div
          class="navbar__dropdown"
          @mouseenter="openDropdown = 'experience'"
          @mouseleave="openDropdown = null"
        >
          <NuxtLink :to="localePath('/experience')" class="navbar__link">
            {{ $t('experience') }}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
          </NuxtLink>
          <Transition name="fade">
            <ul v-if="openDropdown === 'experience'" class="navbar__menu">
              <li v-for="blog in blogs" :key="blog._id">
                <NuxtLink :to="localePath(`/experience/${blog._id}?title=${blog.titles[selectedIdx]}`)">
                  {{ blog.titles[selectedIdx] }}
                </NuxtLink>
              </li>
            </ul>
          </Transition>
        </div>

        <NuxtLink
          v-for="link in secondaryLinks"
          :key="link.to"
          :to="localePath(link.to)"
          class="navbar__link"
        >
          {{ $t(link.label) }}
        </NuxtLink>

        <div
          class="navbar__dropdown"
          @mouseenter="openDropdown = 'more'"
          @mouseleave="openDropdown = null"
        >
          <button class="navbar__link navbar__link--btn">
            {{ $t('more') }}
            <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1l4 4 4-4"/></svg>
          </button>
          <Transition name="fade">
            <ul v-if="openDropdown === 'more'" class="navbar__menu navbar__menu--sm">
              <li v-for="link in moreLinks" :key="link.to">
                <NuxtLink :to="localePath(link.to)">{{ $t(link.label) }}</NuxtLink>
              </li>
            </ul>
          </Transition>
        </div>

        <NuxtLink :to="localePath('/contact')" class="navbar__link">
          {{ $t('contact') }}
        </NuxtLink>
      </nav>

      <div class="navbar__actions is-desktop">
        <LayoutLanguageSwitcher />
      </div>

      <button class="navbar__burger is-mobile" aria-label="Menu" @click="drawerOpen = true">
        <span /><span /><span />
      </button>
    </div>

    <LayoutDrawer v-model:open="drawerOpen" />
  </header>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()
const { main, selectedIdx } = storeToRefs(useMainStore())

const isScrolled = ref(false)
const openDropdown = ref<string | null>(null)
const drawerOpen = ref(false)
const blogs = ref<any[]>([])

const { data } = await useFetch(`${config.public.apiBase}/getDBlogs?type=Experience`)
if (data.value) blogs.value = (data.value as any).dBlogs

const mainLinks = [
  { to: '/', label: 'home' },
  { to: '/casino', label: 'casino' },
]

const secondaryLinks = [
  { to: '/events', label: 'events' },
  { to: '/offer', label: 'offer' },
]

const moreLinks = [
  { to: '/near-by', label: 'near By' },
  { to: '/tour-package', label: 'tour Package' },
  { to: '/gallery', label: 'gallery' },
  { to: '/more/career', label: 'careerTitle' },
  { to: '/news', label: 'newsTitle' },
  { to: '/investment-project', label: 'Investment' },
]

function isActive(path: string) {
  if (path === '/') return route.path === localePath('/')
  return route.path.startsWith(localePath(path))
}

onMounted(() => {
  const onScroll = () => { isScrolled.value = window.scrollY > 40 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})

watch(() => route.path, () => {
  openDropdown.value = null
  drawerOpen.value = false
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  background: rgba(13, 17, 23, 0.6);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background var(--transition), box-shadow var(--transition);

  &--scrolled {
    background: rgba(13, 17, 23, 0.95);
    box-shadow: var(--shadow-md);
  }

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    gap: 2rem;
  }

  &__logo img {
    height: 44px;
    width: auto;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 1.75rem;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    transition: color var(--transition);
    position: relative;
    white-space: nowrap;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--color-gold);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform var(--transition);
    }

    &:hover,
    &--active {
      color: var(--color-gold);

      &::after { transform: scaleX(1); }
    }

    &--btn {
      background: none;
      border: none;
      cursor: pointer;
      font-family: inherit;
    }
  }

  &__dropdown {
    position: relative;
  }

  &__menu {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    min-width: 280px;
    padding: 1rem;
    background: rgba(13, 17, 23, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(201, 169, 98, 0.2);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-lg);
    list-style: none;

    &--sm { min-width: 200px; }

    li a {
      display: block;
      padding: 0.65rem 0.75rem;
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.8);
      border-radius: var(--radius-sm);
      transition: all var(--transition);

      &:hover {
        background: rgba(201, 169, 98, 0.12);
        color: var(--color-gold);
      }
    }
  }

  &__actions {
    flex-shrink: 0;
  }

  &__burger {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 8px;

    span {
      display: block;
      width: 24px;
      height: 2px;
      background: var(--color-white);
      transition: transform var(--transition);
    }
  }
}
</style>
