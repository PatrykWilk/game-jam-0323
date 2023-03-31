<template>
  <div>
    <progress for="health" :value="props.health" max="100" class="progress"></progress>
  </div>
</template>

<script setup>
  const props = defineProps(['health'])
</script>

<style lang="css" scoped>
  .progress {
    width: 100%;
    height: 20px;
    background-color: red;
    border-radius: 10px;
    border: 1px solid red;
  }

</style>