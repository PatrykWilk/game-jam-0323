export const playerStore = defineStore('player', () => {
  const randomNames = ['Alaric', 'Aurelia', 'Balin', 'Darian', 'Elric', 'Gwyneth', 'Idris', 'Jareth', 'Kaida', 'Lysander', 'Maeve', 'Niamh', 'Orion', 'Perrin', 'Quinlan', 'Rhiannon', 'Sable', 'Tamsin', 'Urien', 'Valeria']

  const player = reactive({
    name: 'Anekin',
    avatar: 'knight',
    hp: 100,
    maxHp: 100,
    attack: 10,
    currentStage: 1,
    completedStages: []
  })

  const actions = [
    {
      id: 1,
      type: 'quick-attack',
      label: 'Quick Attack',
      description: 'A quick attack that deals 5 damage.',
      icon: 'ph:sword-bold',
      value: 5,
      sound: 'slash'
    },
    {
      id: 2,
      type: 'power-attack',
      label: 'Heavy Attack',
      description: 'A heavy attack that deals 10 damage.',
      icon: 'ri:sword-fill',
      value: 10,
      sound: 'slash'
    },
    {
      id: 3,
      type: 'heal',
      label: 'Use Health Potion',
      description: 'Heals 20 health points back.',
      icon: 'ph:hand-heart-fill',
      value: 20,
      sound: 'heal'
    },
    {
      id: 4,
      type: 'block-quick',
      label: 'Block Quick Attack',
      description: 'Block and reflect damage back.',
      icon: 'ph:shield-checkered-fill',
      value: 5,
      sound: 'block'
    },
    {
      id: 5,
      type: 'block-power',
      label: 'Block Heavy Attack',
      description: 'Block and reflect damage back.',
      icon: 'ph:shield-warning-bold',
      value: 10,
      sound: 'block'
    }
  ]

  function getActions () {
    return actions
  }

  function hitPlayer (damage) {
    player.hp -= damage
  }
  function healPlayer (heal) {
    player.hp += heal
  }

  function updatePlayer (update) {
    for (let key in update) {
      player[key] = update[key]
    }
  }

  function nextStage () {
    player.currentStage++
  }

  function getRandomName () {
    return randomNames[Math.floor(Math.random() * randomNames.length)]
  }

  return { player, hitPlayer, healPlayer, updatePlayer, nextStage, getRandomName, getActions }
})