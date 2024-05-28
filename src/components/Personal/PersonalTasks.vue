<template>
  <section class="user-tasks">
    <HelloUserText class="user__hello-text" :nameUser="currentUser.name" />
    <div class="user-tasks-wrapper">
      <h2 class="user-tasks-title">Мои задачи</h2>
    </div>
    <FilterTask class="user__filter-tasks" />
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
    font-weight: 700;
    font-size: 40px;
    padding: 0 0 0 15px;
    margin: 0 0 15px 0;
    cursor: default;
  }

  .user__hello-text {
    padding-left: 15px;
  }

  .user__filter-tasks {
    margin-bottom: 15px;
    padding-left: 15px;
  }
</style>