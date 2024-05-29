<template>
  <div class="worker">
    <img 
      :src="props.worker.avatar" 
      :alt="worker.name"
      class="worker__icon" 
    >
  </div>
</template>

<script setup>
  const props = defineProps({
    worker: {
      type: Object,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .worker {
    width: 30px;
    position: relative;

    &__icon {
      width: 40px;
      border-radius: 50%;
      border: #ffffff 4px solid;
      cursor: pointer;
    }
  }
</style>