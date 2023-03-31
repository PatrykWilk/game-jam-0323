export const playerStore = defineStore('player', () => {
  const player = reactive({
    name: 'Anekin',
    avatar: 'knight',
    hp: 100,
    maxHp: 100,
    attack: 10,
    currentStage: 1,
    completedStages: []
  })

  const randomNames = ['Alaric', 'Aurelia', 'Balin', 'Darian', 'Elric', 'Gwyneth', 'Idris', 'Jareth', 'Kaida', 'Lysander', 'Maeve', 'Niamh', 'Orion', 'Perrin', 'Quinlan', 'Rhiannon', 'Sable', 'Tamsin', 'Urien', 'Valeria']

  function hitPlayer (damage) {
    player.hp -= damage
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

  return { player, hitPlayer, updatePlayer, nextStage, getRandomName }
})