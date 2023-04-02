export const playerStore = defineStore('player', () => {
  const randomNames = ['Alaric', 'Aurelia', 'Balin', 'Darian', 'Elric', 'Gwyneth', 'Idris', 'Jareth', 'Kaida', 'Lysander', 'Maeve', 'Niamh', 'Orion', 'Perrin', 'Quinlan', 'Rhiannon', 'Sable', 'Tamsin', 'Urien', 'Valeria']

  const player = reactive({
    name: '',
    avatar: '',
    hp: 100,
    energy: 100,
    maxHp: 100,
    currentStage: 1,
    attack: 10
  })

  const actions = computed(() => [
    {
      id: 1,
      type: 'quick-attack',
      label: 'Quick Attack',
      description: `A quick attack that deals ${5 + (player.attack / 2)} damage.`,
      icon: 'ph:sword-bold',
      value: 5 + (player.attack / 2),
      sound: 'slash',
      energy: '+10'
    },
    {
      id: 2,
      type: 'power-attack',
      label: 'Heavy Attack',
      description: `A heavy attack that deals ${10 + player.attack} damage.`,
      icon: 'ri:sword-fill',
      value: 10 + player.attack,
      sound: 'slash',
      energy: '-20'
    },
    {
      id: 3,
      type: 'heal',
      label: 'Use Health Potion',
      description: `Heals ${20 + player.attack} health points back.`,
      icon: 'ph:hand-heart-fill',
      value: 20 + (player.attack / 2),
      sound: 'heal',
      energy: '-40'
    },
    {
      id: 4,
      type: 'block-quick',
      label: 'Block Quick Attack',
      description: 'Block and reflect damage back.',
      icon: 'ph:shield-checkered-fill',
      sound: 'block',
      energy: '+30'
    },
    {
      id: 5,
      type: 'block-power',
      label: 'Block Heavy Attack',
      description: 'Block and reflect damage back.',
      icon: 'ph:shield-warning-bold',
      sound: 'block',
      energy: '+30'
    }
  ])

  function getActions () {
    return actions
  }

  function hitPlayer (damage) {
    player.hp -= damage
  }
  function healPlayer (heal) {
    player.hp += heal
    if (player.hp > player.maxHp) player.hp = player.maxHp
  }

  function updatePlayer (update) {
    for (let key in update) {
      player[key] = update[key]
    }

    localStorage.setItem('player', JSON.stringify(player))
  }

  function updateEnergy (energy) {
    player.energy += parseInt(energy)
    if (player.energy > 100) player.energy = 100
  }

  function nextStage () {
    player.currentStage++
  }

  function getRandomName () {
    return randomNames[Math.floor(Math.random() * randomNames.length)]
  }

  function resetPlayer () {
    Object.assign(player, {
      hp: 100,
      energy: 100,
      maxHp: 100,
      currentStage: 1,
      attack: 10
    })
  }

  return { 
    player,
    actions,
    hitPlayer,
    healPlayer,
    updatePlayer,
    updateEnergy,
    nextStage,
    getRandomName,
    getActions,
    resetPlayer
  }
})