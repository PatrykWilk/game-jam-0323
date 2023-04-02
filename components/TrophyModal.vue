<template>
  <div class="w-screen h-screen bg-gray-900 fixed flex items-center justify-center bg-opacity-90 z-20">
    <div class="w-[600px] border border-white rounded-lg overflow-hidden">
      <h1 class="text-5xl py-3 bg-green-800 text-center font-extrabold border-b border-white">Level Complete</h1>
      <div class="flex flex-col bg-gray-800 pt-4">
        <img :src="`/images/player/${player.avatar}.gif`" class="w-60 h-60 mx-auto mb-4 border border-white rounded-lg animate-bounce" />
        <h2 class="text-white text-2xl text-center mb-6">You have defeated {{ currentEnemy.name }}</h2>
        <h2 class="text-white text-3xl text-center">Level Up!</h2>
        <h2 class="text-white text-1xl text-center mt-4">Attack: {{ player.attack }} <span class="text-green-500 text-sm font-bold">(+15)</span></h2>
        <h2 class="text-white text-1xl text-center">Max Health: {{ player.maxHp }} <span class="text-green-500 text-sm font-bold">(+25)</span></h2>
        <button class="bg-white text-black font-extrabold text-3xl py-2 mt-10" @click="handleRestart">Continue</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { combatLogStore } from '@/stores/combatLogStore'
  import { stageStore } from '@/stores/stageStore'
  import { playSound } from '@/utils/playSound'

  const { player, updatePlayer } = playerStore()
  const { currentEnemy, setEnemy } = enemyStore()
  const { setStage } = stageStore()
  const { resetLog } = combatLogStore()

  const emits = defineEmits(['continue'])

  const handleRestart = () => {
    playSound('mouseClick')

    updatePlayer({
      hp: 100,
      attack: player.attack + 15,
      currentStage: player.currentStage + 1,
      maxHp: player.maxHp + 25,
    })

    setEnemy(player.currentStage)
    setStage(player.currentStage)
    resetLog()
    emits('continue')
  }

</script>
