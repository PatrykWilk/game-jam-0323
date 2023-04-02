<template>
  <div class="w-screen h-screen bg-finish bg-cover bg-no-repeat bg-[center_bottom_-10rem] flex items-center justify-center">
    <div class="w-[600px] border border-white rounded-lg overflow-hidden">
      <h1 class="text-5xl py-3 bg-green-800 text-center font-extrabold border-b border-white">Congratulations</h1>
      <div class="bg-gray-800 bg-opacity-70 text-justify text-xl p-4">
        <img class="w-60 h-60 mx-auto bg-contain border border-white rounded-lg mt-4" :src="`/images/player/${player.avatar}.gif`" alt="">
        <p class="mt-4">And emerge victorious he did! {{ player.name }} defeated all 5 monsters and retrieved all the missing pieces of his soul, and emerged from the Tower of Doom stronger and more resilient than ever before. His epic journey had tested his courage, determination, and strength, but he had emerged triumphant, ready to face whatever challenges the future may hold.</p>
        <p class="font-extrabold mt-6 text-center text-4xl">Thank you for playing!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { playSound } from '@/utils/playSound'
  
  const router = useRouter()
  const { player } = playerStore()

  onMounted(() => {
    playSound('finish')
    
    localStorage.removeItem('player')
  
    if (player.currentStage !== 5) {
      router.push('/')
    }
  })


  
</script>
