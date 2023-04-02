export const stageStore = defineStore('stage', () => {
  const currentStage = reactive({})

  const stages = reactive([
    {
      id: 1,
      name: 'Tower Entrance',
      description: 'The entrance to the tower is guarded by a Giant Spider. It represents fear. This monstrous arachnid is a cunning predator that lurks in the shadows, ready to pounce on unsuspecting prey. You must defeat it to restore part of your soul and continue.',
      background: 'stage1'
    },
    {
      id: 2,
      name: 'Tower Stairs',
      description: 'The stairs are guarded by a Minotaur. Represents anger. This fierce creature is part man, part bull, and it embodies the raw power and fury of unbridled rage. You must defeat it to continue.',
      background: 'stage2'
    },
    {
      id: 3,
      name: 'Tower Hallway',
      description: 'The hallway is guarded by a Banshee. Represents sadness. This ghostly creature is a harbinger of death, and it embodies the sorrow and grief that comes with loss. You must defeat it to continue.',
      background: 'stage3'
    },
    {
      id: 4,
      name: 'Tower Courtyard',
      description: 'The courtyard is guarded by a Medusa. Represents disgust. This hideous creature is a monster of the mind, and it embodies the repulsion and disgust that comes with the corruption of the soul. You must defeat it to continue.',
      background: 'stage4'
    },
    {
      id: 5,
      name: 'Throne Room',
      description: 'The throne room is guarded by a Soul Eater. Represents guilt. This creature is a manifestation of the guilt and shame that comes with the loss of one’s soul. You must defeat it to continue.',
      background: 'stage5'
    }
  ])
  
  function setStage (id) {
    Object.assign(currentStage, stages.find(stage => stage.id === id))
  }

  return { currentStage, setStage }
})