<template>
  <div class="detail-task-list">
    <ul class="task-list">
      <li class="task-item"
          v-for="task in tasksList" 
          :key="task.id" 
      >
        <DetailTask :task="task"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import DetailTask from '@/components/Tasks/DetailTask.vue';

  defineProps({
    tasksList: Array,
  })
</script>

<style scoped>
  .task-list {
    text-decoration: none;
    list-style: none;
    padding: 12px;
    margin: 0;
    max-height: 540px;
    overflow-y: auto;
  }

  .task-item:not(:last-child) {
    margin-bottom: 20px;
  }
</style>