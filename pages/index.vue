<template>
  <div class="w-screen h-screen max-w-screen max-h-screen flex flex-col items-center justify-center bg-start-bg bg-cover bg-no-repeat bg-center bg-gray-950">
    <div class="flex items-center flex-1">
      <h1 class="text-center text-white text-9xl flex-1 items-center font-extrabold drop-shadow-xl">Tower of Doom</h1>
    </div>
    <div class="flex-1">
      <NuxtLink @click="$emit('sound', 'mouseClick')" class="text-white text-center text-2xl font-bold hover:underline hover:animate-pulse" to="/start">Start</NuxtLink>
    </div>
  </div>
</template>
