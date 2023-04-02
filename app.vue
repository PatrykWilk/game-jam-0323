<template>
  <div v-if="!isPlayable" class="w-screen h-screen bg-gray-800 flex justify-center items-center">
    <h1 class="font-bold text-6xl text-center">This game is only playable on bigger screen :(</h1>
  </div>
  <template v-else>
    <BackgroundMusic v-if="route.path !== '/'" />
    <NuxtPage @sound="handleSound" />
  </template>
</template>

<script setup>
  const route = useRoute()

  const isPlayable = computed(() => {
    return window.innerWidth > 1439
  })

  const playSound = (song) => {
    const audio = new Audio(`/audio/${song}.mp3`)
    audio.volume = 0.25
    audio.play()
  }

  const handleSound = (sound) => {
    playSound(sound)
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

