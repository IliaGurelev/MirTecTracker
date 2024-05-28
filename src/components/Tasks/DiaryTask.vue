<template>
  <div class="diary-task" :class="{ 'diary-task--active': isActive}">
    <div class="task-header">
      <p class="task-title">{{task.name}}</p>
      <time datetime="09:00">{{task.time_start}}</time>
    </div>
    <div class="task-content">
      <p class="task-description">{{task.description}}</p>
      <div class="task-wrapper">
        <WorkerList :workerList="task.workers" />
        <button class="button-complite">
          <CompleteIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps} from 'vue';

  import WorkerList from '@/components/Tasks/WorkerList.vue';
  import CompleteIcon from '@/assets/CompleteIcon.vue';

  defineProps({
    isActive: {
      type: Boolean,
      required: true,
    },
    task: {
      type: Object,
      required: true,
    },
  });
</script>

<style scoped>
  .diary-task {
    border-radius: 11px;
    padding: 20px;
    width: 100%;
  }

  .diary-task--active {
    background-color: var(--color-text-important);
  }

  .diary-task--active .worker-icon {
    border-color: var(--color-text-important);
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .task-description {
    color:  #1a5585;
    font-weight: 600;
    margin-bottom: 15px;
    width: 60%;
  }

  .task-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-complite {
    background-color: black;
    border: none;
    padding: 15px;
    border-radius: 15px;
    transition: background-color 0.3s;
  }

  .button-complite:hover {
    cursor: pointer;
    background-color: rgb(71, 71, 71);
  }
</style>