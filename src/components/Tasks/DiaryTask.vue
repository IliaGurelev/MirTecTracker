<template>
  <div :class="{ 'task--active': isActive }" class="task">
    <div class="task__header">
      <p class="task__title">{{ props.task.name }}</p>
      <time datetime="09:00">{{ timeTask }}</time>
    </div>
    <div class="task__content">
      <p class="task__description">{{ props.task.description }}</p>
      <div class="task__wrapper">
        <button @click="$emit('click-complite', task.id)" class="task__button">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CompleteIcon from '@/assets/CompleteIcon.vue'
import parseTime from '@/utils/parse-time'
import { format } from 'date-fns'

const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  },
  task: {
    type: Object,
    required: true
  }
})

const timeTask = format(parseTime(props.task.timeStart), 'HH:mm')
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
    color: #1a5585;
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
