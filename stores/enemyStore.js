export const enemyStore = defineStore('enemy', () => {
  let currentEnemy = reactive({})

  const enemies = [
    {
      id: 1,
      name: 'Giant Spider',
      avatar: 'giant-spider',
      hp: 50,
      maxHp: 50,
      actions: [
        {
          id: 1,
          type: 'quick-attack',
          label: 'Bite',
          value: 3,
          sound: 'bite'
        },
        {
          id: 2,
          type: 'power-attack',
          label: 'Spit Web',
          value: 5,
          sound: 'magic'
        }
      ]
    }
  ]
  
  function setEnemy (id) {
    Object.assign(currentEnemy, enemies.find(enemy => enemy.id === id))
  }
  
  function hitEnemy (damage) {
    currentEnemy.hp -= damage
  }
  
  return { currentEnemy, setEnemy, hitEnemy }
})