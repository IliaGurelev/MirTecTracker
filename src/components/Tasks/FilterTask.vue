<template>
  <div class="filter">
    <ul class="filter__list">
      <li 
        v-for="(filter, index) in filters" 
        :key="index" 
        :class="{'filter__item': true, 'filter__item--active': activeFilter === index}" 
        @click="setActiveFilter(index)"
      >
        <p class="filter__element">{{ filter }}</p>
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

<style lang="scss" scoped>
  .filter {
    &__list {
      display: flex;
      font-weight: 600;
      list-style: none;
      margin: 0;
      padding: 0;
      column-gap: 20px
    }

    &__item {
      margin: 0;
      padding: 0;
      cursor: pointer;

      &--active {
        color: #59b6ff;
      }
    }

    &__element {
      margin: 0;
     padding: 0;
    }
  }
</style>