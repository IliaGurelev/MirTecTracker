<template>
  <div class="current-date-wrap">
    <p class="current-date">Сегодня</p>
    <p class="current-date current-date--bold">Май <span class="number">20</span>, <span class="number">2024</span></p>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .current-date {
    font-size: 16px;
  }
  
  .current-date--bold {
    font-weight: 600;
    font-size: 20px;
  }

  .number {
    font-family: "Montserrat", sans-serif;
  }
</style>