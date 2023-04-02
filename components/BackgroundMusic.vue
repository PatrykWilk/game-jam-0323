<template>
  <div class="absolute bottom-10 right-10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:animate-pulse cursor-pointer z-10" @click="handleMute">
    <Icon :name="isPlaying ? 'ri:volume-up-fill' : 'ri:volume-mute-fill'" class="text-white" />
  </div>
</template>

<script setup>
  let audio = ref(null)
  let isPlaying = ref(false)


  onMounted(() => {
    audio.value = new Audio('/audio/song1.mp3')
    audio.value.loop = true
    audio.value.volume = 0.25
    audio.value.play()
    isPlaying.value = true
  })

  const handleMute = () => {
    if (isPlaying.value) {
      audio.value.pause()
      isPlaying.value = false
    } else {
      audio.value.play()
      isPlaying.value = true
    }
  }

  onUnmounted(() => {
    audio.value.pause()
  })

</script>