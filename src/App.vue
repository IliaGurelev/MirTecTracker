<template>
  <PersonalPage 
    :currentUser="currentUser"
    :tasksData="tasks"
    :tasksDiary="taskDiary"
  />
</template>

<script setup>
  import PersonalPage from '@/components/Personal/PersonalPage.vue';
   // Моковые данные
  import usersData from '@/mock/users-data.js';
  import tasksData from '@/mock/tasks-data.js';
  import tasksDiary from '@/mock/tasks-diary.js';

  const currentUser = usersData[1];
  const tasks = tasksData;
  const taskDiary = tasksDiary;
</script>
