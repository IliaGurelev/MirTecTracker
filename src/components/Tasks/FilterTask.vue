<template>
  <div class="filter-task">
    <ul class="filter-list">
      <li 
        v-for="(filter, index) in filters" 
        :key="index" 
        :class="{'filter-item': true, 'filter-item--active': activeFilter === index}" 
        @click="setActiveFilter(index)"
      >
        <p class="filter-element">{{ filter }}</p>
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

  .filter-list {
    display: flex;
    font-weight: 600;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .filter-item {
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .filter-item:not(:last-child) {
    margin-right: 20px;
  }

  .filter-item--active {
    color: #59b6ff;
  }

  .filter-element {
    margin: 0;
    padding: 0;
  }
</style>