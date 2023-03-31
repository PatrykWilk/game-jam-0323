export const stageStore = defineStore('stage', () => {
  const stages = [
    {
      id: 1,
      name: 'Tower Entrance',
      description: 'The entrance to the tower is guarded by a Giant Spider. It represents fear. This monstrous arachnid is a cunning predator that lurks in the shadows, ready to pounce on unsuspecting prey. You must defeat it to restore part of your soul and continue.',
      complete: false,
      background: 'bg-stage-one'
    },
    {
      id: 2,
      name: 'Tower Stairs',
      description: 'The stairs are guarded by a Giant Spider. It represents fear. This monstrous arachnid is a cunning predator that lurks in the shadows, ready to pounce on unsuspecting prey. You must defeat it to continue.',
      complete: false,
      background: 'bg-stage-two'
    }
  ]
  
  function getStage (id) {
    return stages.find(stage => stage.id === id)
  }

  function updateStage (update) {
    for (let key in update) {
      stage[key] = update[key]
    }
  }

  return { getStage, updateStage }
})