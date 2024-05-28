<template>
  <div class="user-diary">
    <ul class="user-diary-list">
      <li v-for="(task, index) in tasks" :key="task" class="list-item">
        <div class="radio-select-task-wrap">
          <div class="radio-select-task" :class="{'radio-select-task--active': index === 0}"></div>
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

<style scoped>
  .user-diary {
    max-height: 440px;
    overflow-y: auto;
  }

  .user-diary-list {
    position: relative;
    list-style: none;
    padding-right: 15px;
  }

  .user-diary-list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8px;
    width: 3px;
    height: 100%;
    z-index: -1;
    background-color: var(--color-text-important);
  }

  .list-item {
    display: flex;
    justify-content: space-between;
  }

  .radio-select-task-wrap {
    display: block;
    margin-right: 20px;
    width: 15px;
    height: 15px;
  }

  .radio-select-task{
    position: relative;
    width: 15px;
    height: 15px;
    background-color: var(--color-text-important);
    border-radius: 50%;
    border: 2px solid var(--color-text-important);
  }

  .radio-select-task::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .radio-select-task--active::after {
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

  .radio-select-task-wrap:not(:has(.radio-select-task--active)) {
    padding-top: 20px;
  }

  .radio-select-task:not(.radio-select-task--active) {
    transform: scale(0.7);
  }
</style>