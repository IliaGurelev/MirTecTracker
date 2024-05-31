<template>
  <div 
    :class="{ 'task--active': isActive}"
    class="task" 
  >
    <div class="task__header">
      <p class="task__title">{{props.task.name}}</p>
      <time datetime="09:00">{{props.task.timeStart}}</time>
    </div>
    <div class="task__content">
      <p class="task__description">{{props.task.description}}</p>
      <div class="task__wrapper">
        <button class="task__button">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import CompleteIcon from '@/assets/CompleteIcon.vue';

  const props = defineProps({
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