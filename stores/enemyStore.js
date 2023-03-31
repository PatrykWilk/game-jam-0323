export const enemyStore = defineStore('enemy', () => {
  const enemies = [
    {
      id: 1,
      name: 'Giant Spider',
      avatar: 'spider',
      hp: 50,
      maxHp: 50,
      attack: 5,
    }
  ]
  
  function getEnemy (id) {
    return enemies.find(enemy => enemy.id === id)
  }
  
  function attackEnemy (damage) {
    enemy.hp -= damage
  }
  
  return { getEnemy, attackEnemy }
})