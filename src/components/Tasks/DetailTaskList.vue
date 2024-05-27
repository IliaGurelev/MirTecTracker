<template>
  <div class="user-tasks__tasks-list tasks-list">
    <ul class="tasks-list__list">
      <li class="tasks-list__item"
          v-for="task in tasksList" 
          :key="task.id" 
      >
        <DetailTask :task="task"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import DetailTask from './DetailTask.vue';

  defineProps({
    tasksList: Array,
  })
</script>

<style scoped>
  .tasks-list__list {
    text-decoration: none;
    list-style: none;
    padding: 12px;
    margin: 0;
    max-height: 540px;
    overflow-y: auto;
  }

  .tasks-list__item:not(:last-child) {
    margin-bottom: 20px;
  }
</style>