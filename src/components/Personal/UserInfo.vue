<template>
  <div class="user-block__user-info user-info">
    <img class="user-info__user-icon" :src="avatarUser" alt="">
    <p class="user-info__user-name">{{ nameUser }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    currentUser: Object,
  });

  const nameUser = props.currentUser.name;
  const avatarUser = props.currentUser.avatar;
</script>

<style scoped>
  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .user-info__user-icon {
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .user-info__user-name {
    font-size: 20px;
    font-weight: 600;
  }
</style>