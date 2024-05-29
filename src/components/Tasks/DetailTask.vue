<template>
  <div class="task">
    <div class="task__header">
      <h3 class="task__title">{{ props.task.name }}</h3>
      <div class="task__wrapper">
        <TaskBriefcase 
          class="task__briefcase" 
          :briefcase="props.task.briefcase"
        />
        <ProperityButton />
      </div>
    </div>
    <p class="task__description">{{ props.task.description }}</p>
    <WorkerList 
      class="task__workers" 
      :workerList="props.task.workers" 
    />
    <ProgressBar class="task__progress-bar" />
    <div class="task__status">
      <TaskDate :dateCreated="props.task.createdAt"/>
      <TaskStatus :taskStatus="props.task.status" />
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
    task: {
      type: Object,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>
  .task {
    background-color: #ffffff;
    box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
    border-radius: 11px;
    padding: 20px;
    position: relative;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    &__title {
      font-weight: 600;
      margin: 0;
      padding: 0;
      cursor: pointer;
    }

    &__wrapper {
       display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__description {
      margin-bottom: 20px;
      cursor: pointer;
      font-weight: 400;
      color: rgb(156, 156, 156);
    }

    &__workers {
      margin-bottom: 20px;
    }

    &__progress-bar {
      margin-bottom: 20px;
    }

    &__status {
      cursor: default;
      position: relative;
    }

    &__briefcase {
      position: relative;
      margin-right: 25px;
      margin-left: 7px;
      cursor: pointer;
    }
  }
</style>