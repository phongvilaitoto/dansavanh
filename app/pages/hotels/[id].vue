<template>
  <HotelDetail v-if="hotel" :hotel="hotel" />
  <section v-else class="section">
    <div class="container">
      <UiEmptyState
        :title="$t('hotels')"
        description="The hotel you're looking for could not be found."
      >
        <NuxtLink :to="localePath('/hotels')" class="btn btn--primary" style="margin-top: 1rem">
          {{ $t('viewHotelsButton') }}
        </NuxtLink>
      </UiEmptyState>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const localePath = useLocalePath()
const { hotel } = useHotelBySlug(route.params.id as string)
</script>
