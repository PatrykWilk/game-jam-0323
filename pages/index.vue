<template>
  <div class="w-screen h-screen bg-gray-900 flex items-center justify-center">
    <button type="button" class="text-2xl text-white font-bold" @click="handleStart">New Game</button>
  </div>
</template>

<script setup>
  const router = useRouter()
  const emits = defineEmits(['sound'])
  
  const handleStart = () => {
    emits('sound', 'mouseClick')
    emits('sound', 'backgroundMusic')
    router.push('/start')
  }
</script>
