<template>
  <div class="w-screen h-screen bg-gray-900 flex items-center justify-center bg-initial bg-cover bg-center">
    <form class="border-2 border-white w-[600px] rounded-lg bg-gray-800 bg-opacity-70" @submit.prevent="handleStart">
      <div class="flex flex-col p-6 mb-4">
        <h1 class="text-white text-6xl mb-6 text-center">Welcome Hero</h1>
        <label for="name" class="text-white text-2xl text-center mt-4">Enter your name</label>
        <div class="flex items-end content-center">
          <input type="text" required class="bg-transparent border-2 border-white rounded-lg text-center text-white text-lg p-1 mt-4 font-bold flex-1 mr-2" v-model="player.name" >
          <div class="h-[40px] w-[40px] border border-white rounded-lg flex items-center justify-center cursor-pointer hover:animate-pulse" @click="handleRandomName">
            <Icon name="ri:creative-commons-sa-fill" class="text-white text-3xl" />
          </div>
        </div>
      </div>
      <h1 class="text-white text-2xl text-center mb-4">Select your avatar</h1>
      <div class="flex justify-around align-baseline mb-6 cursor-pointer">
        <div @click="selectAvatar('knight')" class="w-60 h-60 mx-2 rounded-lg border bg-knight bg-cover bg-no-repeat hover:bg-knight-hover transition-all duration-700" :class="player.avatar === 'knight' && 'border-red-800 bg-knight-hover'"></div>
        <div @click="selectAvatar('knight-alt')" class="w-60 h-60 mx-2 rounded-lg border bg-knight-alt bg-cover bg-no-repeat hover:bg-knight-alt-hover transition-all duration-700" :class="player.avatar === 'knight-alt' && 'border-red-800 bg-knight-alt-hover'"></div>
      </div>
      <button type="submit" class="w-full p-2 bg-white text-black text-2xl font-extrabold">New Game</button>
    </form>
  </div>
</template>

<script setup>
  import { playerStore } from '@/stores/playerStore'
  import { playSound } from '@/utils/playSound'

  const { player, updatePlayer, getRandomName } = playerStore()
  const router = useRouter()

  const handleRandomName = () => {
    playSound('mouseClick')
    player.name = getRandomName()
  }

  const selectAvatar = (avatar) => {
    playSound('mouseClick')
    player.avatar = avatar
  }
  
  const handleStart = () => {
    if (!player.name) return
    if (!player.avatar) return
    playSound('mouseClick')
    updatePlayer({ name: player.name, avatar: player.avatar })
    localStorage.setItem('player', JSON.stringify(player))
    router.push('/start')
  }

  onMounted(() => {
    const local = localStorage.getItem('player')
    console.log(local)
    if (local) updatePlayer(JSON.parse(local))
  })
</script>
