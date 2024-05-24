<script setup>
import Worker from './Worker.vue';
</script>

<template>
  <ul class="workers-list" :class="$attrs.class">
      <li 
          v-for="worker in 3"
          :key = "worker"
          class="workers-list__item">
        <Worker />
      </li>
  </ul>
</template>

<style scoped>
  .workers-list {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    height: 50px;
    list-style: none;
  }
</style>