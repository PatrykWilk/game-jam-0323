<template>
  <div class="w-full bg-gray-200 h-6 dark:bg-gray-700 relative border-white border-b">
    <div class="bg-yellow-800 from-yellow-600 bg-gradient-to-l h-5 border border-yellow-700" :class="player.energy <= 30 && 'animate-pulse'" :style="`width: ${player.energy}%`">
    </div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold text-sm">
      Energy: {{ player.energy }} / 100
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  const { player } = playerStore()
</script>
