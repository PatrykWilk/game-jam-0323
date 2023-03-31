export const actionsStore = defineStore('actions', () => {
  const actions = [
    {
      id: 1,
      name: 'quick-attack',
      label: 'Quick Attack',
      description: 'A quick attack that deals 5 damage.',
      icon: 'ph:sword-bold'
    },
    {
      id: 2,
      name: 'power-attack',
      label: 'Heavy Attack',
      description: 'A heavy attack that deals 10 damage.',
      icon: 'ri:sword-fill'
    },
    {
      id: 3,
      name: 'heal',
      label: 'Use Health Potion',
      description: 'Heals 20 health points back.',
      icon: 'ph:hand-heart-fill'
    },
    {
      id: 4,
      name: 'parry-quick-attack',
      label: 'Parry Quick Attack',
      description: 'If successful, block and deal 5 damage.',
      icon: 'ph:shield-checkered-fill'
    },
    {
      id: 5,
      name: 'parry-power-attack',
      label: 'Parry Heavy Attack',
      description: 'If successful, block and deal 10 damage.',
      icon: 'ph:shield-warning-bold'
    }
  ]

  function getActions () {
    return actions
  }

  return { getActions }
})