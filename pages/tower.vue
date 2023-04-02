<template>
  <div v-if="isLoading" class="w-screen h-screen bg-gray-800 flex items-center justify-center">
    <Spinner />
  </div>
  <div v-else class="w-screen h-screen bg-cover bg-[center_bottom_-10rem] flex items-center justify-center" :class="currentBackground">
    <div class="container mx-auto h-[800px] border border-white rounded-lg bg-gray-800 bg-opacity-70 flex flex-col">
      <div class="border-b border-white px-10 py-5">
        <h1 v-text="currentStage.name" class="text-white text-6xl text-center"></h1>
        <p v-text="currentStage.description" class="text-xl text-center"></p>
      </div>
      <div class="flex justify-between items-start h-full overflow-hidden">
        <div class="flex flex-1 border-r border-white h-full flex-col">
          <div class="w-60 h-60 mx-auto bg-contain border border-white rounded-lg mt-4" :class="`bg-${currentPlayerAvatar}-hover`"></div>
          <h1 v-text="player.name" class="text-6xl text-center mt-4"></h1>
          <HealthBar :health="player.hp" :maxHealth="player.maxHp" />
          <EnergyBar />
          <PlayerActions @completeLevel="handleCompleteLevel" />
        </div>
        <div class="flex flex-1 flex-col mt-4">
          <img class="w-60 h-60 mx-auto bg-contain border border-white rounded-lg" :src="`/images/enemies/${currentEnemyAvatar}.gif`" alt="">
          <h1 v-text="currentEnemy.name" class="text-6xl text-center mt-4"></h1>
          <HealthBar :health="currentEnemy.hp" :maxHealth="currentEnemy.maxHp" />
          <CombatLog />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { stageStore } from '@/stores/stageStore'
  import { playSound } from '@/util/playSound';
  
  let isLoading = ref(true)

  const { player } = playerStore()
  const { currentEnemy, setEnemy } = enemyStore()
  const { getStage } = stageStore()

  const currentStage = getStage(player.currentStage)
  setEnemy(player.currentStage)

  const currentBackground = computed(() => {
    if (isLoading) return 'bg-stage-one'
    return currentStage.background
  })

  const currentPlayerAvatar = computed(() => {
    if (isLoading) return 'knight'
    return player.avatar
  })

  const currentEnemyAvatar = computed(() => {
    if (isLoading) return 'giant-spider'
    return currentEnemy.avatar
  })

  isLoading = false

  const handleCompleteLevel = () => {
    playSound('completeLevel')
  }

</script>
