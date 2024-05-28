<template>
  <section class="user-tasks">
    <HelloUserText :nameUser="currentUser.name" />
    <div class="user-tasks-wrapper">
      <h2 class="user-tasks-title">Мои задачи</h2>
    </div>
    <FilterTask />
    <DetailTaskList :tasksList="tasksUser" />
  </section>
</template>

<script setup>
  import FilterTask from '@/components/Tasks/FilterTask.vue';
  import DetailTaskList from '@/components/Tasks/DetailTaskList.vue'
  import HelloUserText from '@/components/Personal/HelloUserText.vue';

  defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
    tasksUser: {
      type: Array,
      required: true,
    },
  })
</script>

<style scoped>
  .user-tasks {
    display: flex;
    flex-direction: column;
    max-width: 500px;
  }

  .user-tasks-title {
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 15px;
    cursor: default;
  }
</style>