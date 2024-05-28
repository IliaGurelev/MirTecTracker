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
    tasksList: {
      type: Array,
      required: true,
    }
  })
</script>

<style scoped>
  .task-list {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 12px;
    max-height: 540px;
    text-decoration: none;
    list-style: none;
    overflow-y: auto;
  }
</style>