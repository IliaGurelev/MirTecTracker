<template>
  <div class="user-tasks__filter-task filter-task">
    <ul class="filter-task__list">
      <li 
        v-for="(filter, index) in filters" 
        :key="index" 
        :class="{'filter-task__item': true, 'filter-task__item--active': activeFilter === index}" 
        @click="setActiveFilter(index)"
      >
        <p class="filter-task__filter">{{ filter }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const filters = ['Новые', 'На сегодня', 'Предстоящие', 'Закрытые'];
  const activeFilter = ref(0);

  const setActiveFilter = (index) => {
    activeFilter.value = index;
  };
</script>

<style scoped>
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