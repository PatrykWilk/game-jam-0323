<template>
  <div class="flex items-center justify-between space-x-2 px-4 py-2 my-auto max-h-[150px]">
    <div
      v-for="(action, key) in actions"
      :key="key"
      class="flex flex-col flex-1 bg-gray-600 rounded-lg justify-start items-center cursor-pointer py-4 border border-transparent hover:border-white"
      @click="takeAction(action)"
      :class="(enemyTurn || !checkEnergy(action.energy)) && 'bg-gray-800 opacity-50 cursor-not-allowed'"
    >
      <Icon :name="action.icon" class="text-white text-4xl" />
      <h1 class="font-extrabold text-md text-center mb-2" v-text="action.label"></h1>
      <p class="text-center text-sm px-2" v-text="action.description"></p>
      <p class="mt-4 font-bold text-sm">Energy: {{ action.energy }}</p>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { enemyStore } from '@/stores/enemyStore'
  import { combatLogStore } from '@/stores/combatLogStore'
  import { playSound } from '@/utils/playSound'

  const { player, hitPlayer, healPlayer, updateEnergy } = playerStore()
  const { currentEnemy, hitEnemy } = enemyStore()
  const { addLog } = combatLogStore()
  const { getActions } = playerStore()

  const actions = getActions()
  const enemyTurn = ref(false)
  const emits = defineEmits(['completeLevel', 'defeat'])

  const checkEnergy = (energy) => {
    return player.energy + parseInt(energy) >= 0
  }

  const takeAction = (action) => {
    if (enemyTurn.value) return
    enemyTurn.value = true

    const enoughEnergy = checkEnergy(action.energy)

    if (!enoughEnergy) {
      addLog({
        message: `You don't have enough energy to perform this action!`,
        icon: 'ri:error-warning-fill'
      })
      enemyTurn.value = false
      return
    }

    updateEnergy(action.energy)
    
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
      case 'block-power':
        handleBlockPower(action, enemyAction)
        break
    }

    
    setTimeout(() => {
      if (currentEnemy.hp <= 0) {
        addLog({
          message: `You defeated <b>${currentEnemy.name}</b>!`,
          icon: 'ri:trophy-fill'
        })
  
        emits('completeLevel')
      }
  
      if (player.hp <= 0) {
        addLog({
          message: `You were defeated by <b>${currentEnemy.name}</b>!`,
          icon: 'ri:skull-2-fill'
        })
  
        emits('defeat')
      }

      enemyTurn.value = false
    }, 500)
  }

  const handleQuickAttack = (playerAction, enemyAction) => {
    if (enemyAction.type === 'block-quick') {
      playSound(enemyAction.sound)
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> but they blocked your attack!`,
        icon: playerAction.icon
      })
    } else {
      playSound(playerAction.sound)
      hitEnemy(playerAction.value)
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> for <b>${playerAction.value}</b> damage!`,
        icon: playerAction.icon
      })
      handleEnemyAttack(enemyAction)
    }
  }

  const handlePowerAttack = (playerAction, enemyAction) => {
    if (enemyAction.type === 'block-power') {
      playSound(enemyAction.sound)
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> but they blocked your attack!`,
        icon: playerAction.icon
      })
    } else {
      playSound(playerAction.sound)
      hitEnemy(playerAction.value)
      addLog({
        message: `You attacked <b>${currentEnemy.name}</b> for <b>${playerAction.value}</b> damage!`,
        icon: playerAction.icon
      })
      handleEnemyAttack(enemyAction)
    }
  }

  const handleHeal = (playerAction, enemyAction) => {
    playSound(playerAction.sound)
    healPlayer(playerAction.value)
    addLog({
      message: `You healed yourself for <b>${playerAction.value}</b> health!`,
      icon: playerAction.icon
    })
    handleEnemyAttack(enemyAction)
  }

  const handleBlockQuick = (playerAction, enemyAction) => {
    if (enemyAction.type === 'quick-attack') {
      playSound(playerAction.sound)
      hitEnemy(enemyAction.value)
      addLog({
        message: `You blocked <b>${currentEnemy.name}</b>'s quick attack and reflected <b>${enemyAction.value}</b> damage!`,
        icon: playerAction.icon
      })
    } else {
      addLog({
        message: `Your <b>${playerAction.label}</b> failed on <b>${currentEnemy.name}'s ${enemyAction.label}</b>!`,
        icon: playerAction.icon
      })
      handleEnemyAttack(enemyAction)
    }
  }

  const handleBlockPower = (playerAction, enemyAction) => {
    if (enemyAction.type === 'power-attack') {
      playSound(playerAction.sound)
      hitEnemy(enemyAction.value)
      addLog({
        message: `You blocked <b>${currentEnemy.name}</b>'s power attack and reflected <b>${enemyAction.value}</b> damage!`,
        icon: playerAction.icon
      })
    } else {
      addLog({
        message: `Your <b>${playerAction.label}</b> failed on <b>${currentEnemy.name}'s ${enemyAction.label}</b>!`,
        icon: playerAction.icon
      })
      handleEnemyAttack(enemyAction)
    }
  }

  const handleEnemyAttack = (action) => {
    if (currentEnemy.hp <= 0) return emits('completeLevel')

    setTimeout(() => {
      switch (action.type) {
        case 'quick-attack':
          playSound(action.sound)
          hitPlayer(action.value)
          addLog({
            message: `<b>${currentEnemy.name}</b>' <b>${action.label}</b> attacked you for <b>${action.value}</b> damage!`,
            icon: action.icon,
            enemy: true
          })
          break
        case 'power-attack':
          playSound(action.sound)
          hitPlayer(action.value)
          addLog({
            message: `<b>${currentEnemy.name}</b>' <b>${action.label}</b> attacked you for <b>${action.value}</b> damage!`,
            icon: action.icon,
            enemy: true
          })
          break
      }
    }, 500)
  }
</script>