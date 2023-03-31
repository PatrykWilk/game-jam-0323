<template>
  <div class="flex items-center justify-between space-x-2 px-4 py-2 my-auto max-h-[150px]">
    <div
      v-for="(action, key) in actions"
      :key="key"
      class="flex flex-col flex-1 bg-gray-600 rounded-lg justify-start items-center cursor-pointer py-4 border border-transparent hover:border-white"
    >
      <Icon :name="action.icon" class="text-white text-4xl" />
      <h1 class="font-extrabold text-md text-center mb-2" v-text="action.label"></h1>
      <p class="text-center text-sm px-2" v-text="action.description"></p>
    </div>
  </div>
</template>

<script setup>
  import { actionsStore } from '@/stores/actionsStore'
  const { getActions } = actionsStore()
  const actions = getActions()
</script>