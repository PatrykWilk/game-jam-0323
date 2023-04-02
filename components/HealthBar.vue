<template>
  <div class="w-full bg-gray-200 h-10 dark:bg-gray-700 relative mt-4 border-t border-white border-b">
    <div class="bg-red-800 from-red-600 bg-gradient-to-l h-9 border border-red-700" :class="currentHealth <= 30 && 'animate-pulse'" :style="`width: ${healthProgress}%`">
    </div>
    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold">
      Health: {{ currentHealth }} / {{ maxHealth }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps(['health', 'maxHealth'])

  const currentHealth = computed(() => {
    return props.health <= 0 ? 0 : props.health
  })

  const healthProgress = computed(() => {
    return (props.health / props.maxHealth) * 100 <=0 ? 0 : (props.health / props.maxHealth) * 100
  })
  
</script>
