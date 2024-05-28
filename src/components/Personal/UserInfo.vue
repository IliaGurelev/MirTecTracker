<template>
  <div class="user-info">
    <img class="user-icon" :src="currentUser.avatar" alt="">
    <p class="user-name">{{ currentUser.name }}</p>
  </div>
</template>

<script setup>
  defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .user-icon {
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .user-name {
    font-size: 20px;
    font-weight: 600;
  }
</style>