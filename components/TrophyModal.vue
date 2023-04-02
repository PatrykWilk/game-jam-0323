<template>
  <div class="w-screen h-screen bg-gray-900 fixed flex items-center justify-center bg-opacity-90">
    <div class="w-[600px] border border-white rounded-lg overflow-hidden">
      <h1 class="text-5xl py-3 bg-red-800 text-center font-extrabold border-b border-white">Defeated</h1>
      <div class="flex flex-col bg-gray-800 pt-4">
        <img :src="`/images/enemies/${currentEnemy.avatar}.gif`" class="w-60 h-60 mx-auto mb-4 border border-white rounded-lg animate-bounce" />
        <h2 class="text-white text-2xl text-center">You have been defeated by {{ currentEnemy.name }}</h2>
        <button class="bg-white text-black font-extrabold text-3xl py-2 mt-10" @click="handleRestart">Restart</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'

  const { resetPlayer } = playerStore()
  const { currentEnemy } = enemyStore()

  const handleRestart = () => {
    resetPlayer()
  }

</script>
