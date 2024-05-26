<script setup>
  const userData = defineProps(['nameUser'])
</script>

<template>
  <div class="user-tasks__welocome">
    <h3 class="user-tasks__welcome-text">Привет, {{ userData.nameUser }}!</h3>
  </div>
</template>