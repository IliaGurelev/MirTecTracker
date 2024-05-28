<template>
  <div class="task-list">
    <ul class="task-list__list">
      <li v-for="(task, index) in tasks" :key="task" class="task-list__item">
        <div class="task-list__mark-wrap">
          <div class="task-list__mark" :class="{'task-list__mark--active': index === 0}"></div>
        </div>
        <DiaryTask 
          :isActive="index === 0"
          :task="task"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import DiaryTask from '@/components/Tasks/DiaryTask.vue';

  defineProps({
    tasks: {
      type: Array,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .task-list {
    max-height: 440px;
    overflow-y: auto;

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
      width: 15px;
      height: 15px;
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