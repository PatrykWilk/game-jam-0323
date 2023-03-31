export const actionsStore = defineStore('actions', () => {
  const actions = [
    {
      id: 1,
      name: 'quick-attack',
      label: 'Quick Attack',
      description: 'A quick attack that deals 5 damage.'
    },
    {
      id: 2,
      name: 'power-attack',
      label: 'Heavy Attack',
      description: 'A heavy attack that deals 10 damage.'
    },
    {
      id: 3,
      name: 'heal',
      label: 'Drink a health potion',
      description: 'Heals 20 health points.'
    },
    {
      id: 4,
      name: 'parry-quick-attack',
      label: 'Parry Quick Attack',
      description: 'Parries a quick attack, dealing 5 damage back to the enemy.'
    },
    {
      id: 5,
      name: 'parry-power-attack',
      label: 'Parry Heavy Attack',
      description: 'Parries a heavy attack, dealing 10 damage back to the enemy.'
    }
  ]

  function getActions () {
    return actions
  }

  return { getActions }
})