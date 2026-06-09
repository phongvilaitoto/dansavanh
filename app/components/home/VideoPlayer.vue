<template>
  <div class="video-player" ref="container">
    <video
      ref="videoEl"
      :src="video"
      playsinline
      :poster="poster"
      @click="togglePlay"
    />
    <button v-if="!isPlaying" class="video-player__play" aria-label="Play" @click="togglePlay">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor">
        <path d="M18 14l18 10-18 10V14z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  video: string
  poster?: string
}>()

const videoEl = ref<HTMLVideoElement>()
const isPlaying = ref(false)

function togglePlay() {
  if (!videoEl.value) return
  if (videoEl.value.paused) {
    videoEl.value.play()
    isPlaying.value = true
  } else {
    videoEl.value.pause()
    isPlaying.value = false
  }
}
</script>

<style lang="scss" scoped>
.video-player {
  position: relative;
  background: var(--color-navy);
  aspect-ratio: 16/9;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  &__play {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-white);
    background: rgba(13, 17, 23, 0.3);
    transition: background var(--transition);

    svg {
      filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
    }

    &:hover {
      background: rgba(13, 17, 23, 0.15);
    }
  }
}
</style>
