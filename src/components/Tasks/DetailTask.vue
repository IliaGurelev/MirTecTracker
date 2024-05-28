<template>
  <div class="detailed-task">
    <div class="header-task">
      <h3 class="task-title">{{ task.name }}</h3>
      <div class="task-wrapper">
        <TaskBriefcase class="task-briefcase" :briefcase="task.briefcase"/>
        <ProperityButton />
      </div>
    </div>
    <p class="task-description">{{ task.description }}</p>
    <WorkerList class="task__workers-list" :workerList="task.workers" />
    <ProgressBar class="task__progress-bar" />
    <div class="task-status">
      <TaskDate :dateCreated="task.createdAt"/>
      <TaskStatus :taskStatus="task.status" />
    </div>
  </div>
</template>

<script setup>
  import ProperityButton from '@/components/UI/ProperityButton.vue';
  import ProgressBar from '@/components/UI/ProgressBar.vue';
  import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
  import TaskStatus from '@/components/Tasks/TaskStatus.vue';
  import TaskDate from '@/components/Tasks/TaskDate.vue';
  import WorkerList from '@/components/Tasks/WorkerList.vue';

  defineProps({
    task: {
      type: Object,
      required: true,
    }
  })
</script>

<style scoped>
  .detailed-task {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
    border-radius: 11px;
    padding: 20px;
    position: relative;
  }

  .header-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .task-title {
    font-weight: 600;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .task-wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .task-description {
    margin-bottom: 20px;
    cursor: pointer;
    font-weight: 400;
    color: rgb(156, 156, 156);
  }

  .task__workers-list {
    margin-bottom: 20px;
  }

  .task__progress-bar {
    margin-bottom: 20px;
  }

  .task-status {
    cursor: default;
    position: relative;
  }

  .task-briefcase {
    position: relative;
    margin-right: 25px;
    margin-left: 7px;
    cursor: pointer;
  }
</style>