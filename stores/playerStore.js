export const playerStore = defineStore('player', () => {
  const player = reactive({
    name: '',
    avatar: 'knight',
    hp: 100,
    attack: 10
  })

  function getHit (damage) {
    player.hp -= damage
  }

  function updatePlayer (update) {
    for (let key in update) {
      player[key] = update[key]
    }
  }

  return { player, getHit, updatePlayer }
})