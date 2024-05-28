<template>
  <div class="task" :class="{ 'task--active': isActive}">
    <div class="task__header">
      <p class="task__title">{{task.name}}</p>
      <time datetime="09:00">{{task.time_start}}</time>
    </div>
    <div class="task__content">
      <p class="task__description">{{task.description}}</p>
      <div class="task__wrapper">
        <WorkerList :workerList="task.workers" />
        <button class="task__button">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps} from 'vue';

  import WorkerList from '@/components/Tasks/WorkerList.vue';
  import CompleteIcon from '@/assets/CompleteIcon.vue';

  defineProps({
    isActive: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  });
</script>

<style lang="scss" scoped>
  .task {
    border-radius: 11px;
    padding: 20px;
    width: 100%;

    &--active {
      background-color: var(--color-text-important);

      :deep(.worker__icon) {
        border-color: var(--color-text-important) !important;
      }
    }

    &__header {
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    &__description {
      color:  #1a5585;
      font-weight: 600;
      margin-bottom: 15px;
      width: 60%;
    }

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__button {
      background-color: black;
      border: none;
      padding: 15px;
      border-radius: 15px;
      transition: background-color 0.3s;

      &:hover {
        cursor: pointer;
        background-color: rgb(71, 71, 71);
      }
    }

    :deep(.worker__icon) {
      border-color: var(--color-background);
    }
  }  
</style>