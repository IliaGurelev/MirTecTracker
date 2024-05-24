<script setup>
  import ProperityButton from '../UI/ProperityButton.vue'
  import ProgressBar from '../UI/PogressBar.vue'
  import WorkerList from './WorkerList.vue'
</script>

<template>
  <div class="tasks-list__task-details task-details">
    <div class="task-details__header-task">
      <h3 class="task-details__title">Верстка - главной страницы</h3>
      <div class="task-details__decorative-block">
        <div class="task-details__tags task__tags">
          <span class="task__tag task__tag--develop">Разработка</span>
        </div>
        <ProperityButton />
      </div>
    </div>
    <p class="task-details__description">Создай полную верстку по макету главной страницы</p>
    <WorkerList :class="'task-details__workers-list'" />
    <ProgressBar :class="'task-details__progress-task'" />
    <div class="task-details__task__stats task__stats">
      <span>
        <time datetime="2023-05-20T15:00:00">
          <i class="fa-regular fa-calendar-days"></i> 20.05.2024
        </time>
      </span>
      <div class="status__owners">
        <span class="status__owner status--open">
          <i class="fa-solid fa-circle-notch"></i> Открыт
        </span>
      </div>
    </div>
  </div>
</template>

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

  .task-details__tags {
    margin-right: 25px;
    cursor: pointer;
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
</style>