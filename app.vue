<template>
  <!-- Audio tracks -->
  <audio ref="backgroundMusic" src="/audio/song1.mp3" preload="auto" loop></audio>
  <audio ref="mouseClick" src="/audio/click.mp3" preload="auto"></audio>
  <AudioControl v-if="route.path !== '/'" :audioHandler="audioHandler" />

  <NuxtPage @sound="handleSound" />

</template>

<script setup>
  const route = useRoute()
  const backgroundMusic = ref(null)
  const mouseClick = ref(null)

  onMounted(() => {
    backgroundMusic.value.volume = 0.25
    mouseClick.value.volume = 0.25
  })

  const handleSound = (sound) => {
    eval(sound).value.currentTime = 0
    eval(sound).value.play()
  }

  const audioHandler = () => {
    (backgroundMusic.value.paused) ? backgroundMusic.value.play() : backgroundMusic.value.pause()
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

