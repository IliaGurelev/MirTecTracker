<script setup>
  import { ref } from 'vue';

  import FilterTask from './FilterTask.vue';
  import DetailTaskList from '../Tasks/DetailTaskList.vue'
  import HelloUserText from './HelloUserText.vue';

  const nameUser = ref("Илья");
</script>

<template>
  <section class="user-tasks" :class="$attrs.class">
    <HelloUserText :nameUser="nameUser" />
    <div class="user-tasks__title">
      <h2 class="user-tasks__title-text">Мои задачи</h2>
    </div>
    <FilterTask />
    <DetailTaskList />
  </section>
</template>

<style>
  .user-tasks {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  .user-tasks__welcome-text {
    padding: 0;
    margin: 0;
    margin-bottom: 5px;
    font-weight: 400;
    color: #b8b8b8;
    cursor: default;
  }

  .user-tasks__title-text {
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 15px;
    cursor: default;
  }

  .user-page {
    display: flex;
    margin-top: 20px;
    margin-left: 50px;
  }
</style>