<template>
  <div class="hello-text-wrap">
    <h3 class="hello-text">Привет, {{ userData.nameUser }}!</h3>
  </div>
</template>

<script setup>
  const userData = defineProps(['nameUser'])
</script>

<style scoped>
  .hello-text {
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    font-weight: 400;
    color: #b8b8b8;
    cursor: default;
  }
</style>