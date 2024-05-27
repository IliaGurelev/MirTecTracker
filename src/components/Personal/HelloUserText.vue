<template>
  <div class="user-tasks__welocome-wrap">
    <h3 class="user-tasks__welcome">Привет, {{ userData.nameUser }}!</h3>
  </div>
</template>

<script setup>
  const userData = defineProps(['nameUser'])
</script>

<style scoped>
  .user-tasks__welcome {
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    font-weight: 400;
    color: #b8b8b8;
    cursor: default;
  }
</style>