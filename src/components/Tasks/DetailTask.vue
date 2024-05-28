<template>
  <div class="detailed-task">
    <div class="header-task">
      <h3 class="task-title">{{ taskName }}</h3>
      <div class="task-wrapper">
        <TaskBriefcase class="task-briefcase" :briefcase="task.briefcase"/>
        <ProperityButton />
      </div>
    </div>
    <p class="task-description">{{ taskDescription }}</p>
    <WorkerList class="task-workers-list" :workerList="task.workers" />
    <ProgressBar class="task-progress-bar" />
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

  const props = defineProps({
    task: Object
  })

  const taskName = props.task.name;
  const taskDescription = props.task.description;
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

  .task-workers-list {
    margin-bottom: 20px;
  }

  .task-progress-bar {
    margin-bottom: 20px;
  }

  .task-status {
    cursor: default;
    position: relative;
    width: 100%;
  }

  .task-briefcase {
    position: relative;
    width: 100%;
    margin-right: 25px;
    cursor: pointer;
  }
</style>