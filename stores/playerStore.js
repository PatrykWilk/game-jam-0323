export const playerStore = defineStore('player', () => {
  const player = reactive({
    name: '',
    avatar: 'knight',
    hp: 100,
    attack: 10
  })

  const randomNames = ['Alaric', 'Aurelia', 'Balin', 'Darian', 'Elric', 'Gwyneth', 'Idris', 'Jareth', 'Kaida', 'Lysander', 'Maeve', 'Niamh', 'Orion', 'Perrin', 'Quinlan', 'Rhiannon', 'Sable', 'Tamsin', 'Urien', 'Valeria']

  function getHit (damage) {
    player.hp -= damage
  }

  function updatePlayer (update) {
    for (let key in update) {
      player[key] = update[key]
    }
  }

  function getRandomName () {
    return randomNames[Math.floor(Math.random() * randomNames.length)]
  }

  return { player, getHit, updatePlayer, getRandomName }
})