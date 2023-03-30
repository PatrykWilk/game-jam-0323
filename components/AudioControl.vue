<template>
  <div class="absolute bottom-10 right-10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:animate-pulse cursor-pointer z-10" @click="handleMute">
    <Icon :name="state.isPlaying ? 'ri:volume-up-fill' : 'ri:volume-mute-fill'" class="text-white" />
  </div>
</template>

<script setup>
  const state = reactive({
    isPlaying: true
  })

  const props = defineProps({
    audioHandler: {
      type: Function,
      required: true
    }
  })

  const handleMute = () => {
    props.audioHandler()
    state.isPlaying = !state.isPlaying
  }
</script>