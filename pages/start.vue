<template>
  <div class="w-screen h-screen overflow-hidden">
    <video autoplay muted loop id="myVideo" class="w-screen overflow-hidden mt-[-300px]">
      <source src="/images/start/background.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 w-screen h-screen max-w-screen max-h-screen flex flex-col items-center justify-center">
      <div class="flex items-center flex-1">
        <h1 class="text-center text-white text-9xl flex-1 items-center font-extrabold drop-shadow-xl mt-20">Tower of Doom</h1>
      </div>
      <div class="w-[600px] border-2 border-white rounded-lg text-white p-4 font-extrabold bg-gray-900 bg-opacity-50 text-lg"> 
        <p class="mb-3">In a far-off land, there lived a brave hero named {{player.name}}. One day, he was called upon to undertake a perilous quest: to journey to a tower of doom and retrieve five pieces of his soul, each taken by a different monster.</p>
        <p class="mb-3">{{player.name}} searched high and low, battling countless enemies and overcoming seemingly insurmountable obstacles. Finally, he came face to face with the tall tower, perched on the edge of a cliff overlooking the ocean of magma.</p>
        <p>{{player.name}} knew that the journey would be long and dangerous, but he was determined to complete his quest. He set out on foot, traversing mountains and crossing rivers, until he arrived at the tower's gates.</p>
      </div>
      <div class="flex-1 mt-10">
        <NuxtLink @click="playSound('mouseClick')" class="text-white text-center text-2xl font-bold hover:underline hover:animate-pulse" to="/tower">Enter the Tower</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { playSound } from '@/utils/playSound'
  import { playerStore } from '@/stores/playerStore'
  const { player, updatePlayer } = playerStore()

  onMounted(() => {
    const local = localStorage.getItem('player')
    if (local) updatePlayer(JSON.parse(local))
  
    if (!player.name) {
      const router = useRouter()
      router.push('/')
    }
  })

  
</script>