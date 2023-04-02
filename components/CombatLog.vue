<template>
  <div class="flex flex-col flex-1 mb-4 bg-gray-800 bg-opacity-70 px-4">
    <h1 class="text-xl font-extrabold">Combat Log:</h1>
    <div class="h-[225px] overflow-y-auto pb-2">
      <div v-for="(log, key) in combatLog" :key="key" class="flex items-center justify-start">
        <Icon :name="log.icon" class="mr-1" />
        <span v-html="log.message"></span>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { combatLogStore } from '@/stores/combatLogStore'
  const { combatLog } = combatLogStore()
</script>

<style lang="scss" scoped>

</style>