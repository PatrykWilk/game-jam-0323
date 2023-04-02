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
          <PlayerActions @takeAction="takeTurn" />
        </div>
        <div class="flex flex-1 flex-col mt-4">
          <img class="w-60 h-60 mx-auto bg-contain border border-white rounded-lg" :src="`/images/enemies/${currentEnemyAvatar}.gif`" alt="">
          <h1 v-text="currentEnemy.name" class="text-6xl text-center mt-4"></h1>
          <HealthBar :health="currentEnemy.hp" :maxHealth="currentEnemy.maxHp" />
          <div class="flex flex-col flex-1 mb-4 bg-gray-800 bg-opacity-70 px-4">
            <h1 class="text-xl font-extrabold">Combat Log:</h1>
            <div class="h-[225px] overflow-y-auto pb-2">
              <p v-for="(log, key) in combatLog" :key="key">{{ log }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { stageStore } from '@/stores/stageStore'
  import { combatLogStore } from '@/stores/combatLogStore'
  
  let isLoading = ref(true)

  const { player, updatePlayer, hitPlayer, healPlayer, nextStage } = playerStore()
  const { currentEnemy, setEnemy, hitEnemy } = enemyStore()
  const { getStage } = stageStore()
  const { combatLog, addLog } = combatLogStore()
  const emits = defineEmits(['sound'])

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

  const takeTurn = (action) => {
    const enemyAction = currentEnemy.actions[Math.floor(Math.random() * currentEnemy.actions.length)]

    switch (action.type) {
      case 'quick-attack':
        if (enemyAction.type === 'parry-quick-attack') {
          addLog(`Enemy used ${enemyAction.label}, it deflected your attack and hit you for ${enemyAction.value} damage!`)
          playSound(enemyAction.sound)
          hitPlayer(enemyAction.value)
        } else {
          addLog(`You hit the ${currentEnemy.name} for ${action.value} damage!`)
          playSound(action.sound)
          hitEnemy(action.value)
        }
        break
      case 'power-attack':
        if (enemyAction.type === 'parry-power-attack') {
          addLog(`Enemy used ${enemyAction.label}, it deflected your attack and hit you for ${enemyAction.value} damage!`)
          playSound(enemyAction.sound)
          hitPlayer(enemyAction.value)
        } else {
          addLog(`You hit the ${currentEnemy.name} for ${action.value} damage!`)
          playSound(action.sound)
          hitEnemy(action.value)
        }
        break
      case 'heal':
        playSound(action.sound)
        healPlayer(action.value)
        addLog(`You healed yourself for ${action.value} health!`)
        setTimeout(() => {
          if (enemyAction.type === 'quick-attack' || enemyAction.type === 'power-attack') {
            addLog(`Enemy used ${enemyAction.label}, it hit you for ${enemyAction.value} damage!`)
            playSound(enemyAction.sound)
            hitPlayer(enemyAction.value)
          }
        }, 1000)
        break
      case 'parry-quick-attack':
        if (enemyAction.type === 'quick-attack') {
          addLog(`You parried the ${currentEnemy.name}'s attack!`)
          hitEnemy(enemyAction.value)
        } else {
          addLog(`Enemy used ${enemyAction.label}, it hit you for ${enemyAction.value} damage!`)
          hitPlayer(enemyAction.value)
        }
        break
      case 'parry-power-attack':
        if (enemyAction.type === 'power-attack') {
          addLog(`You parried the ${currentEnemy.name}'s attack!`)
          hitEnemy(enemyAction.value)
        } else {
          addLog(`Enemy used ${enemyAction.label}, it hit you for ${enemyAction.value} damage!`)
          hitPlayer(enemyAction.value)
        }
        break
    }
  }

  const playSound = (sound) => {
    emits('sound', sound)
  }
  

</script>
