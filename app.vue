<template>
  <audio ref="audio" src="/audio/song1.mp3" preload="auto" loop></audio>
  <NuxtPage />
</template>

<script setup>
  const audio = ref(null)

  onMounted(() => {
    audio.value.volume = 0.25
    // audio.value.play()
  })
</script>

