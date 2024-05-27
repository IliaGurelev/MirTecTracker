<script setup>
  import DiaryTask from './DiaryTask.vue';
</script>

<template>
  <ul class="user-diary__list">
    <li v-for="task in 2" :key="task" class="user-diary__item">
      <div class="user-diary__radio-select-task-wrap">
        <div class="user-diary__radio-select-task" :class="{'user-diary__radio-select-task--active': task === 1}"></div>
      </div>
      <DiaryTask 
        :isActive="task === 1"
      />
    </li>
  </ul>
</template>

<style scoped>
  .user-diary__list {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .user-diary__list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8px;
    width: 3px;
    height: 100%;
    z-index: -1;
    background-color: var(--color-text-important);
  }

  .user-diary__item {
    display: flex;
    justify-content: space-between;
  }

  .user-diary__radio-select-task-wrap {
    display: block;
    margin-right: 20px;
    width: 15px;
    height: 15px;
  }

  .user-diary__radio-select-task{
    position: relative;
    width: 15px;
    height: 15px;
    background-color: var(--color-text-important);
    border-radius: 50%;
    border: 2px solid var(--color-text-important);
  }

  .user-diary__radio-select-task::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .user-diary__radio-select-task--active::after {
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

  .user-diary__radio-select-task-wrap:not(:has(.user-diary__radio-select-task--active)) {
    padding-top: 20px;
  }

  .user-diary__radio-select-task:not(.user-diary__radio-select-task--active) {
    transform: scale(0.7);
  }
</style>