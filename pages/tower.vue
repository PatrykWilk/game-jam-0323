<template>
  <div v-if="isLoading" class="w-screen h-screen bg-gray-800 flex items-center justify-center">
    <Spinner />
  </div>
  <div v-else class="w-screen h-screen flex items-center justify-center">
    <img class="absolute bottom-50 left-0 w-screen max-w-screen max-h-screen" :src="`/images/levels/${currentStage.background}.png`" />
    <div class="container mx-auto h-[800px] border border-white rounded-lg bg-gray-800 bg-opacity-70 flex flex-col z-10">
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
          <PlayerActions @completeLevel="handleCompleteLevel" @defeat="handleDefeat" />
        </div>
        <div class="flex flex-1 flex-col mt-4">
          <img class="w-60 h-60 mx-auto bg-contain border border-white rounded-lg" :src="`/images/enemies/${currentEnemyAvatar}.gif`" alt="">
          <h1 v-text="currentEnemy.name" class="text-6xl text-center mt-4"></h1>
          <HealthBar :health="currentEnemy.hp" :maxHealth="currentEnemy.maxHp" />
          <CombatLog />
        </div>
      </div>
    </div>
    <WinModal v-if="showWinModal" @continue="handleContinue" />
    <DefeatModal v-if="showDefeatModal" @reset="showDefeatModal = false" />
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { stageStore } from '@/stores/stageStore'
  import { playSound } from '@/utils/playSound'
  
  let isLoading = ref(true)
  const router = useRouter()

  const { player, updatePlayer } = playerStore()
  const { currentEnemy, setEnemy } = enemyStore()
  const { currentStage, setStage } = stageStore()

  setStage(player.currentStage)
  setEnemy(player.currentStage)

  const currentPlayerAvatar = computed(() => {
    if (isLoading) return 'knight'
    return player.avatar
  })

  const currentEnemyAvatar = computed(() => {
    if (isLoading) return 'giant-spider'
    return currentEnemy.avatar
  })

  isLoading = false

  const showDefeatModal = ref(false)
  const showWinModal = ref(false)

  const handleDefeat = () => {
    showDefeatModal.value = true
    playSound('defeat')
  }

  const handleCompleteLevel = () => {
    playSound('completeLevel')
    if (player.currentStage === 5) return router.push('/finish')
    showWinModal.value = true
  }

  const handleContinue = () => {
    showWinModal.value = false
  }

  onMounted(() => {
    const local = localStorage.getItem('player')
    if (local) updatePlayer(JSON.parse(local))

    setStage(player.currentStage)
    setEnemy(player.currentStage)
    
    if (!player.name) {
      router.push('/')
    }
  })

</script>
