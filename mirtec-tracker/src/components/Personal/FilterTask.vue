<script source>
</script>

<template>
  <div class="user-tasks__filter-task filter-task">
    <ul class="filter-task__list">
      <li class="filter-task__item filter-task__item--active">
        <p class="filter-task__filter">Новые</p>
      </li>
      <li class="filter-task__item">
        <p class="filter-task__filter">На сегодня</p>
      </li>
      <li class="filter-task__item">
        <p class="filter-task__filter">Предстоящие</p>
      </li>
      <li class="filter-task__item">
        <p class="filter-task__filter">Закрытые</p>
      </li>
    </ul>
  </div>
</template>

<style>
  .filter-task {
    margin-bottom: 15px;
  }

  .filter-task__list {
    display: flex;
    font-weight: 600;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .filter-task__item {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .filter-task__item:not(:last-child) {
    margin-right: 20px;
  }

  .filter-task__item--active {
    color: #59b6ff;
  }

  .filter-task__filter {
    margin: 0;
    padding: 0;
  }
</style>