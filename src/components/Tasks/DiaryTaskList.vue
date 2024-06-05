<template>
  <div class="task-list">
    <div
      v-if="props.tasks.length === 0"
      class="task-list__message"
    >
      <p class="task-list__text">На этот день ничего не запланировано</p>
    </div>
    <ul class="task-list__list">
      <li 
        v-for="(task, index) in filteredTasks" 
        :key="task.id" 
        class="task-list__item"
      >
        <div class="task-list__mark-wrap">
          <div 
            :class="{'task-list__mark--active': index === 0}"
            class="task-list__mark" 
          >
          </div>
        </div>
        <DiaryTask 
          :isActive="index === 0"
          :task="task"
          @click-complite="$emit('click-complite', task.id)" 
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import DiaryTask from '@/components/Tasks/DiaryTask.vue';
  import taskFilter from '@/utils/task-filter';

  const props = defineProps({
    tasks: {
      type: Array,
      required: true,
    },
  })

  const filteredTasks = computed(() => taskFilter('asc-diary', props.tasks));
</script>

<style lang="scss" scoped>
  .task-list {
    max-height: 440px;
    overflow-y: auto;

    &__message {
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      background-color: var(--color-text-important);
      box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
      border-radius: 11px;
      padding: 20px;
    }

    &__list {
      position: relative;
      list-style: none;
      padding-right: 15px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 8px;
        width: 3px;
        height: 100%;
        z-index: -1;
        background-color: var(--color-text-important);
      }
    }

    &__item {
      display: flex;
      justify-content: space-between;
    }

    &__mark-wrap {
      display: block;
      margin-right: 20px;
      width: 15px;
      height: 15px;

      &:not(:has(.task-list__mark--active)) {
        padding-top: 20px;
      }
    }

    &__mark {
      position: relative;
      width: 19px;
      height: 19px;
      background-color: var(--color-text-important);
      border-radius: 50%;
      border: 2px solid var(--color-text-important);

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        background-color: #ffffff;
        border-radius: 50%;
      }

      &--active::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        background-color: var(--color-text-important);
        border-radius: 50%;
        transform: scale(-70%);
      }

      &:not(.task-list__mark--active) {
        transform: scale(0.7);
      }
    }
  }
</style>