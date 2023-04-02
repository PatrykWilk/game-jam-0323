export const enemyStore = defineStore('enemy', () => {
  let currentEnemy = reactive({})
  
  function setEnemy (id) {
    Object.assign(currentEnemy, enemies.find(enemy => enemy.id === id))
  }
  
  function hitEnemy (damage) {
    currentEnemy.hp -= damage
  }

  function resetEnemy (id) {
    Object.assign(currentEnemy, enemies.find(enemy => enemy.id === id))
  }

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
    },
    {
      id: 2,
      name: 'Minotaur',
      avatar: 'minotaur',
      hp: 80,
      maxHp: 80,
      actions: [
        {
          id: 1,
          type: 'quick-attack',
          label: 'Punch',
          value: 10,
          sound: 'punch',
          icon: 'ph:sword-bold'
        },
        {
          id: 2,
          type: 'power-attack',
          label: 'Skull Bash',
          value: 18,
          sound: 'bite',
          icon: 'ri:sword-fill'
        }
      ]
    },
    {
      id: 3,
      name: 'Banshee',
      avatar: 'banshee',
      hp: 150,
      maxHp: 150,
      actions: [
        {
          id: 1,
          type: 'quick-attack',
          label: 'Claw',
          value: 20,
          sound: 'slash',
          icon: 'ph:sword-bold'
        },
        {
          id: 2,
          type: 'quick-attack',
          label: 'Claw',
          value: 20,
          sound: 'slash',
          icon: 'ph:sword-bold'
        },
        {
          id: 3,
          type: 'quick-attack',
          label: 'Claw',
          value: 20,
          sound: 'slash',
          icon: 'ph:sword-bold'
        },
        {
          id: 4,
          type: 'power-attack',
          label: 'Scream',
          value: 45,
          sound: 'scream',
          icon: 'ri:sword-fill'
        }
      ]
    },
    {
      id: 4,
      name: 'Medusa',
      avatar: 'medusa',
      hp: 200,
      maxHp: 200,
      actions: [
        {
          id: 1,
          type: 'quick-attack',
          label: 'Punch',
          value: 25,
          sound: 'punch',
          icon: 'ph:sword-bold'
        },
        {
          id: 2,
          type: 'power-attack',
          label: 'Snake bite',
          value: 35,
          sound: 'hiss',
          icon: 'ri:sword-fill'
        }
      ]
    },
    {
      id: 5,
      name: 'Souleater',
      avatar: 'souleater',
      hp: 300,
      maxHp: 300,
      actions: [
        {
          id: 1,
          type: 'quick-attack',
          label: 'Bite',
          value: 20,
          sound: 'bite',
          icon: 'ph:sword-bold'
        },
        {
          id: 2,
          type: 'quick-attack',
          label: 'Water Bolt',
          value: 25,
          sound: 'magic',
          icon: 'ph:sword-bold'
        },
        {
          id: 3,
          type: 'power-attack',
          label: 'Soul Leech',
          value: 35,
          sound: 'blow',
          icon: 'ri:sword-fill'
        }
      ]
    },
  ]
  
  return { currentEnemy, setEnemy, hitEnemy, resetEnemy }
})