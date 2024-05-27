<script setup>
  import DetailTask from './DetailTask.vue';
</script>

<template>
  <div class="user-tasks__tasks-list tasks-list">
    <ul class="tasks-list__list">
      <li 
        class="tasks-list__item"
        v-for="task in 2" 
        :key="task" 
      >
        <DetailTask />
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .tasks-list__list {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tasks-list__item:not(:last-child) {
    margin-bottom: 20px;
  }
</style>