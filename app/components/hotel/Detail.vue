<template>
  <div v-if="hotel?.detail">
    <UiPageHero
      :title="hotel.detail.titles[selectedIdx]"
      :image="hotel.detail.img"
    />

    <section class="section">
      <div class="container">
        <p class="hotel-intro text-center" data-aos="fade-up">
          {{ hotel.detail.descriptions[selectedIdx] }}
        </p>
        <img src="/images/decoration-1.png" alt="" class="divider-ornament" />

        <template v-if="hotel.detail.usedList?.includes('cards')">
          <UiSplitSection
            v-for="(card, idx) in hotel.detail.cards"
            :key="idx"
            :image="card.img"
            :title="card.titles[selectedIdx]"
            :description="card.descriptions[selectedIdx]"
            eyebrow="DANSAVANH"
            :reverse="idx % 2 === 1"
          />
        </template>

        <template v-if="hotel.detail.usedList?.includes('rooms')">
          <UiSectionHeader title="Rooms" :eyebrow="$t('facilities')" center show-ornament />
          <div class="rooms-list">
            <article
              v-for="(room, idx) in hotel.detail.rooms"
              :key="idx"
              class="room-card"
              :class="{ 'room-card--reverse': idx % 2 === 1 }"
              data-aos="fade-up"
            >
              <UiImageSwiper :items="[room, ...hotel.detail.rooms.filter((_: any, i: number) => i !== idx)]" label />
              <div class="room-card__info">
                <h3>{{ room.titles[selectedIdx] }}</h3>
                <p>{{ room.descriptions[selectedIdx] }}</p>
                <div class="room-card__actions">
                  <a href="https://wa.me/8562052241111" class="btn btn--emerald">{{ $t('contact') }}</a>
                </div>
              </div>
            </article>
          </div>
        </template>

        <template v-if="hotel.detail.usedList?.includes('facilities')">
          <UiSectionHeader :title="$t('facilities')" center show-ornament />
          <UiImageSwiper :items="hotel.detail.facilities" label autoplay />
        </template>

        <template v-if="hotel.detail.usedList?.includes('galleries')">
          <UiSectionHeader title="Gallery" center show-ornament />
          <UiMasonryGallery :images="hotel.detail.galleries" />
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
defineProps<{ hotel: any }>()
const { selectedIdx } = storeToRefs(useMainStore())
</script>

<style lang="scss" scoped>
.hotel-intro {
  max-width: 700px;
  margin: 0 auto 1rem;
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.rooms-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 3rem;
}

.room-card {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);

  &--reverse {
    direction: rtl;
    .room-card__info { direction: ltr; }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &--reverse { direction: ltr; }
  }

  &__info {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      font-family: var(--font-display);
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    p {
      color: var(--color-text-muted);
      line-height: 1.7;
      margin-bottom: 1.5rem;
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  &__actions {
    display: flex;
    gap: 0.75rem;
  }
}
</style>
