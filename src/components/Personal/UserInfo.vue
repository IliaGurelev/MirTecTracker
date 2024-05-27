<script setup>
</script>

<template>
  <div class="user-block__user-info user-info">
    <img class="user-info__user-icon" src="../../assets/user-icon-1.jpg" alt="">
    <p class="user-info__user-name">Александр</p>
  </div>
</template>

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