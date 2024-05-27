<template>
  <PersonalPage 
    :currentUser="currentUser"
    :tasksData="tasks"
    :tasksDiary="taskDiary"
  />
</template>

<script setup>
  import PersonalPage from './components/Personal/PersonalPage.vue';
   // Моковые данные
  import usersData from '../mock/users-data';
  import tasksData from '../mock/tasks-data';
  import tasksDiary from '../mock/tasks-diary';

  const currentUser = usersData[1];
  const tasks = tasksData;
  const taskDiary = tasksDiary;
</script>

<style>
  @import './assets/style.css';
</style>