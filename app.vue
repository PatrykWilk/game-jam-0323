<template>
  <!-- Mouse click sound -->
  <audio ref="mouseClick" src="/audio/click.mp3" preload="auto"></audio>

  <NuxtPage @sound="handleSound" />
  <AudioControl />
</template>

<script setup>
  const mouseClick = ref(null)

  onMounted(() => {
    mouseClick.value.volume = 0.25
  })

  const handleSound = (sound) => {
    eval(sound).value.play()
  }
</script>

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
    filter: blur(1rem);
}
</style>

