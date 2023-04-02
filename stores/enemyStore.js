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
          sound: 'bite',
          icon: 'ph:sword-bold'
        },
        {
          id: 2,
          type: 'power-attack',
          label: 'Spit Web',
          value: 5,
          sound: 'magic',
          icon: 'ri:sword-fill'
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

  function resetEnemy (id) {
    Object.assign(currentEnemy, enemies.find(enemy => enemy.id === id))
  }
  
  return { currentEnemy, setEnemy, hitEnemy, resetEnemy }
})