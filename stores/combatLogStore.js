export const combatLogStore = defineStore('combatLog', () => {
  const combatLog = reactive([])
  
  function addLog (log) {
    combatLog.push(log)
  }

  function resetLog () {
    combatLog.splice(0, combatLog.length)
  }

  return { combatLog, addLog, resetLog }
})