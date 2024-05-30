<template>
  <div class="worker">
    <UserIcon 
      v-if="props.worker.avatar === '' "
      class="worker__icon"
    />
    <img 
      v-else
      :src="props.worker.avatar" 
      :alt="props.worker.name"
      class="worker__icon" 
    >
  </div>
</template>

<script setup>
  import UserIcon from '@/assets/UserIcon.vue';

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