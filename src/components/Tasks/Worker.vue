<script setup>
  const props = defineProps({
    worker: Object,
  })

  const workerAvatar = props.worker.avatar;
</script>

<template>
  <div class="worker-icon-wrapp">
    <img class="workers-icon" :src="workerAvatar" alt="">
  </div>
</template>

<style scoped>
  .worker-icon-wrapp {
    width: 30px;
    position: relative;
  }

  .workers-icon {
    width: 40px;
    border-radius: 50%;
    border: #ffffff 4px solid;
    cursor: pointer;
  }

  .diary-task__workers-list .workers-icon {
    border-color: var(--color-background);
  }

  .diary-task--active .diary-task__workers-list .workers-icon {
    border-color: var(--color-text-important);
  }
</style>