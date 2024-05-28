<template>
  <div class="worker-icon-wrapp">
    <img class="worker-icon" :src="worker.avatar" alt="">
  </div>
</template>

<script setup>
  defineProps({
    worker: {
      type: Object,
      required: true,
    },
  })
</script>

<style scoped>
  .worker-icon-wrapp {
    width: 30px;
    position: relative;
  }

  .worker-icon {
    width: 40px;
    border-radius: 50%;
    border: #ffffff 4px solid;
    cursor: pointer;
  }
</style>