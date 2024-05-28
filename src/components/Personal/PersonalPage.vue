<template>
  <main class="user-page">
    <PersonalTasks 
      class="user-page__tasks"
      :currentUser="currentUser"
      :tasksUser="tasks"
    />
    <PersonalDiary
      :currentUser="currentUser"
      :tasks="tasksDiary"
    />
  </main>
</template>

<script setup>
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
    tasksData: {
      type: Array,
      required: true,
    },
    tasksDiary: {
      type: Array,
      required: true,
    },
  })

  const currentUser = props.currentUser;
  const tasks = props.tasksData;
</script>

<style scoped>

.user-page__tasks {
  margin-right: 50px;
}

.user-page {
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
}

/* АДАПТИВ */

@media (max-width: 750px) {
  .user-page {
    flex-direction: column-reverse;
  }

  .user-page__user-section {
    margin-bottom: 50px;
  }

  .user-page__user-tasks {
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .user-page {
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media (max-width: 427px) {
  .filter-task__list {
    flex-wrap: wrap;
  }
}
</style>
