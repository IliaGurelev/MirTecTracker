<template>
  <div class="task-list">
    <ul class="task-list__list">
      <li class="task-list__item"
          v-for="task in props.tasksList" 
          :key="task.id" 
      >
        <DetailTask :task="task"/>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import DetailTask from '@/components/Tasks/DetailTask.vue';

  const props = defineProps({
    tasksList: {
      type: Array,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>
  .task-list {
    
    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding: 12px;
      max-height: 540px;
      text-decoration: none;
      list-style: none;
      overflow-y: auto;
    }
  }
</style>