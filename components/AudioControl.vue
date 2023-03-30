<template>
  <!-- Audio -->
  <audio ref="audio" src="/audio/song1.mp3" preload="auto" loop></audio>

  <div class="absolute bottom-10 right-10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:animate-pulse cursor-pointer" @click="handleMute">
    <Icon :name="state.isPlaying ? 'ri:volume-up-fill' : 'ri:volume-mute-fill'" class="text-white" />
  </div>
</template>

<script setup>
  const state = reactive({
    isPlaying: false
  })

  const audio = ref(null)

  onMounted(() => {
    audio.value.volume = 0.25
    audio.value.play()
    state.isPlaying = true
  })

  const handleMute = () => {
    state.isPlaying ? audio.value.pause() : audio.value.play()
    state.isPlaying = !state.isPlaying
  }
</script>