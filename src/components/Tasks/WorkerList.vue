<template>
  <ul class="workers-list" :class="$attrs.class">
      <li v-for="worker in workerList"
          :key = "worker.id"
          class="workers-list__item">
        <Worker :worker="worker"/>
      </li>
  </ul>
</template>

<script setup>
  import Worker from './Worker.vue';

  defineProps({
    workerList: Array,
  })
</script>

<style scoped>
  .workers-list {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    height: 50px;
    list-style: none;
  }
</style>