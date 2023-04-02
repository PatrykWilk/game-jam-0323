<template>
  <div class="flex items-center justify-between space-x-2 px-4 py-2 my-auto max-h-[150px]">
    <div
      v-for="(action, key) in actions"
      :key="key"
      class="flex flex-col flex-1 bg-gray-600 rounded-lg justify-start items-center cursor-pointer py-4 border border-transparent hover:border-white"
      @click="takeAction(action)"
      :class="enemyTurn && 'bg-gray-800 opacity-50 cursor-not-allowed'"
    >
      <Icon :name="action.icon" class="text-white text-4xl" />
      <h1 class="font-extrabold text-md text-center mb-2" v-text="action.label"></h1>
      <p class="text-center text-sm px-2" v-text="action.description"></p>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { combatLogStore } from '@/stores/combatLogStore'
  import { playSound } from '@/util/playSound'

  const { getActions } = playerStore()
  const actions = getActions()

  const { hitPlayer, healPlayer } = playerStore()
  const { currentEnemy, hitEnemy } = enemyStore()
  const { addLog } = combatLogStore()

  const enemyTurn = ref(false)

  const takeAction = (action) => {
    const enemyAction = currentEnemy.actions[Math.floor(Math.random() * currentEnemy.actions.length)]

    switch (action.type) {
      case 'quick-attack':
        handleQuickAttack(action, enemyAction)
        break
      case 'power-attack':
        handlePowerAttack(action, enemyAction)
        break
      case 'heal':
        handleHeal(action, enemyAction)
        break
      case 'block-quick':
        handleBlockQuick(action, enemyAction)
        break
      case 'block-heavy':
        handleBlockHeavy(action, enemyAction)
        break
    }
  }

  const handleQuickAttack = (playerAction, enemyAction) => {
    playSound(playerAction.sound)
    if (enemyAction.type === 'block-quick') {
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> but they blocked your attack!`,
        icon: playerAction.icon
      })
    } else {
      hitEnemy(playerAction.damage)
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> for <b>${playerAction.value}</b> damage!`,
        icon: playerAction.icon
      })
    }
  }

  const handlePowerAttack = (playerAction, enemyAction) => {
    console.log('power attack')
  }

  const handleHeal = (playerAction, enemyAction) => {
    console.log('heal')
  }

  const handleBlockQuick = (playerAction, enemyAction) => {
    console.log('block quick')
  }

  const handleBlockHeavy = (playerAction, enemyAction) => {
    console.log('block heavy')
  }
</script>