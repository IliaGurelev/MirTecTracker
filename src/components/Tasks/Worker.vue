<template>
  <div class="worker-icon-wrapp">
    <img class="worker-icon" :src="workerAvatar" alt="">
  </div>
</template>

<script setup>
  const props = defineProps({
    worker: Object,
  })

  const workerAvatar = props.worker.avatar;
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
    border-color: var(--color-background);
  }
</style>