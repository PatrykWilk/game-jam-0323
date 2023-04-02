<template>
  <div class="absolute bottom-10 left-10 border border-white rounded-full w-10 h-10 flex items-center justify-center hover:animate-pulse cursor-pointer z-10" @click="handleReset">
    <Icon name="ri:restart-fill" class="text-white text-2xl" />
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { playSound } from '@/utils/playSound'

  const { updatePlayer, resetPlayer } = playerStore()
  const router = useRouter()

  const handleReset = () => {
    playSound('mouseClick')

    if (confirm('Are you sure you want to reset your game and start again?')) {
      localStorage.removeItem('player')
      resetPlayer()
      updatePlayer({ name: '', avatar: '' })
      router.push('/')
    }
  }
</script>