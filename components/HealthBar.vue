<template>
  <div>
    <progress for="health" :value="props.health" max="100" class="w-full"></progress>
  </div>
</template>

<script setup>
  const props = defineProps(['health'])
</script>