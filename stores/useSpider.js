export const useSpider = defineStore('spider', () => {
  const spider = reactive({
    name: 'Giant Spider',
    hp: 50,
    attack: 3
  })

  function getHit (damage) {
    spider.hp -= damage
  }

  function updateName (name) {
    spider.name = name
  }

  return { spider, getHit, updateName }
})