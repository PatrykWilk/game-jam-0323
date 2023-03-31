<template>
  <div v-if="isLoading" class="w-screen h-screen bg-gray-800 flex items-center justify-center">
    <Spinner />
  </div>
  <div v-else class="w-screen h-screen bg-cover bg-[center_bottom_-10rem] flex items-center justify-center" :class="stageBackground">
    <div class="container mx-auto h-[800px] border border-white rounded-lg bg-gray-800 bg-opacity-70 flex flex-col">
      <div class="border-b border-white px-10 py-5">
        <h1 v-text="currentStage.name" class="text-white text-6xl text-center"></h1>
        <p v-text="currentStage.description" class="text-xl text-center"></p>
      </div>
      <div class="flex justify-between items-start h-full">
        <div class="flex flex-1 border-r border-white h-full flex-col">
          <h1 v-text="player.name" class="text-6xl text-center mt-4"></h1>
          <HealthBar :health="player.hp" />
          <button type="button" @click="hitPlayer(10)">Take a hit</button>
        </div>
        <div class="flex flex-1"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { stageStore } from '@/stores/stageStore'
  
  let isLoading = ref(true)

  const { player, hitPlayer, nextStage } = playerStore()
  const { getEnemy } = enemyStore()
  const { getStage } = stageStore()

  const currentStage = getStage(player.currentStage)
  const stageBackground = computed(() => currentStage.background)

  isLoading = false
  
  // const state = reactive({
  //   isLoading: true,
  //   currentEnemy: {},
  //   currentStage: {},
  //   stageBackground: ''
  // })
  
  // onMounted(() => {

  //   state.isLoading = true

  //   state.currentEnemy = getEnemy(player.currentEnemy)
  //   state.currentStage = getStage(player.currentStage)
  //   state.stageBackground = `bg-${state.currentStage.background}`

  //   state.isLoading = false
  // })
  

</script>
