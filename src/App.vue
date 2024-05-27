<template>
  <PersonalPage 
    :currentUser="currentUser"
    :tasksData="tasks"
  />
</template>

<script setup>
  import PersonalPage from './components/Personal/PersonalPage.vue';
   // Моковые данные
  import usersData from '../mock/users-data';
  import tasksData from '../mock/tasks-data';

  const currentUser = usersData[1];
  const tasks = tasksData;
</script>

<style>
  @import './assets/style.css';
</style>