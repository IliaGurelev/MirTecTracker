<template>
  <section class="tasks">
    <WelcomeUser class="tasks__welcome" :nameUser="currentUser.name" />
    <div class="tasks__header">
      <h2 class="tasks__title">Мои задачи</h2>
    </div>
    <FilterTask class="tasks__filter" />
    <DetailTaskList :tasksList="tasksUser" />
  </section>
</template>

<script setup>
  import FilterTask from '@/components/Tasks/FilterTask.vue';
  import DetailTaskList from '@/components/Tasks/DetailTaskList.vue'
  import WelcomeUser from '@/components/Personal/WelcomeUser.vue';

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
  .tasks {
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

  .user__hello {
    padding-left: 15px;
  }

  .user__filter-tasks {
    margin-bottom: 15px;
    padding-left: 15px;
  }
</style>