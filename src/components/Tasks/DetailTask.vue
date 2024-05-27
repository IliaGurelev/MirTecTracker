<template>
  <div class="tasks-list__task-details task-details">
    <div class="task-details__header-task">
      <h3 class="task-details__title">{{ taskName }}</h3>
      <div class="task-details__decorative-block">
        <TaskTag :class="'task-details__tags'" :briefcase="task.briefcase"/>
        <ProperityButton />
      </div>
    </div>
    <p class="task-details__description">{{ taskDescription }}</p>
    <WorkerList :class="'task-details__workers-list'" :workerList="task.workers" />
    <ProgressBar :class="'task-details__progress-task'" />
    <div class="task-details__task__stats">
      <TaskDate :dateCreated="task.createdAt"/>
      <TaskStatus :taskStatus="task.status" />
    </div>
  </div>
</template>

<script setup>
  import ProperityButton from '../UI/ProperityButton.vue';
  import ProgressBar from '../UI/ProgressBar.vue';
  import TaskTag from './TaskBriefcase.vue';
  import TaskStatus from './TaskStatus.vue';
  import TaskDate from './TaskDate.vue';
  import WorkerList from './WorkerList.vue';

  const props = defineProps({
    task: Object
  })

  const taskName = props.task.name;
  const taskDescription = props.task.description;
</script>

<style scoped>
  .task-details {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
    border-radius: 11px;
    padding: 20px;
    position: relative;
  }

  .task-details__header-task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .task-details__decorative-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .task-details__title {
    font-weight: 600;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .task-details__description {
    margin-bottom: 20px;
    cursor: pointer;
  }

  .task-details__description {
    font-weight: 400;
    color: rgb(156, 156, 156);
  }

  .task-details__workers-list {
    margin-bottom: 20px;
  }

  .task-details__progress-task {
    margin-bottom: 20px;
  }

  .task-details__task__stats {
    cursor: default;
    position: relative;
    width: 100%;
  }

  .task-details__tags {
    position: relative;
    width: 100%;
    margin-right: 25px;
    cursor: pointer;
  }
</style>