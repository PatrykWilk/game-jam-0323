<template>
  <div class="flex flex-col flex-1 mb-4 bg-gray-800 bg-opacity-70 px-4">
    <h1 class="text-xl font-extrabold">Combat Log:</h1>
    <div ref="container" class="h-[220px] overflow-y-auto py-2">
      <div v-for="(log, key) in combatLog" :key="key" class="flex items-center justify-start space-y-1">
        <Icon :name="log.icon" class="mr-1" />
        <span :class="log?.enemy && 'text-red-400'" v-html="log.message"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { combatLogStore } from '@/stores/combatLogStore'
  const { combatLog } = combatLogStore()

  const container = ref(null)

  watch(combatLog, () => {
    handleScroll()
  })

  const handleScroll = () => {
    setTimeout(() => {
      container.value.scrollTop = container.value.scrollHeight
    })
  }
</script>

<style lang="scss" scoped>

</style>