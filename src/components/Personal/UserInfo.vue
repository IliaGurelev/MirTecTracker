<template>
  <div class="user">
    <img class="user__icon" :src="currentUser.avatar" alt="">
    <p class="user__name">{{ currentUser.name }}</p>
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

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__icon {
      width: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }

    &__name {
      font-size: 20px;
      font-weight: 600; 
    }
  }
</style>