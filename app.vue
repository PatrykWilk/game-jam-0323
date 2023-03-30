<template>
  <!-- Audio tracks -->
  <audio ref="backgroundMusic" src="/audio/song1.mp3" preload="auto" loop allow="autoplay"></audio>
  <audio ref="mouseClick" src="/audio/click.mp3" preload="auto"></audio>
  <AudioControl v-if="route.path !== '/'" />

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

  const handleStart = () => {
    handleSound('mouseClick')
    backgroundMusic.value.play()
    router.push('/start')
  }

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

