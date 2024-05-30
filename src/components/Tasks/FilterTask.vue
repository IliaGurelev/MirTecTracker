<template>
  <div class="filter">
    <ul class="filter__list">
      <li 
        v-for="(filter,) in props.filters" 
        :key="filter.value" 
        :class="{'filter__item': true, 'filter__item--active': props.currentFilter === filter.value}" 
        @click="clickFilter(filter.value)"
      >
        <p class="filter__element">{{ filter.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import {ref} from 'vue';

  const props = defineProps({
    filters: {
      type: Object,
      required: true,
    },
    currentFilter: {
      type: String,
      required: true,
    },
    clickFilter: {
      type: Function,
      required: true,
    },
  });

</script>

<style lang="scss" scoped>
  .filter {
    &__list {
      display: flex;
      flex-wrap: wrap;
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