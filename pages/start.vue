<template>
  <div class="w-screen h-screen overflow-hidden">
    <video autoplay muted loop id="myVideo" class="w-screen overflow-hidden mt-[-300px]">
      <source src="/images/start/background.mp4" type="video/mp4">
    </video>
    <div class="absolute top-0 w-screen h-screen max-w-screen max-h-screen flex flex-col items-center justify-center">
      <div class="flex items-center flex-1">
        <h1 class="text-center text-white text-9xl flex-1 items-center font-extrabold drop-shadow-xl">Tower of Doom</h1>
      </div>
      <div class="flex-1">
        <NuxtLink @click="$emit('sound', 'mouseClick')" class="text-white text-center text-2xl font-bold hover:underline hover:animate-pulse" to="/enter">Enter the Tower</NuxtLink>
      </div>
    </div>
  </div>
</template>