<template>
  <div v-if="!isPlayable" class="w-screen h-screen bg-gray-800 flex justify-center items-center">
    <h1 class="font-bold text-6xl text-center">This game is only playable on bigger screen :(</h1>
  </div>
  <template v-else>
    <BackgroundMusic v-if="route.path !== '/'" />
    <NuxtPage />
  </template>
</template>

<script setup>
  const route = useRoute()
  const isPlayable = ref(true)

  onMounted(() => {
    if (window.innerWidth < 1439) {
      isPlayable.value = false
    }
  })

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

