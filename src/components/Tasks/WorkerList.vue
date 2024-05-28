<template>
  <ul class="workers-list" :class="$attrs.class">
      <li v-for="worker in workerList"
          :key = "worker.id"
          class="list-item">
        <Worker :worker="worker"/>
      </li>
  </ul>
</template>

<script setup>
  import Worker from '@/components/Tasks/Worker.vue';

  defineProps({
    workerList: {
      type: Array,
      required: true,
    },
  })
</script>

<style lang="scss" scoped>
  .workers-list { 
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    height: 50px;
    list-style: none;
  }
</style>