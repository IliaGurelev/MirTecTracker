<template>
  <ul class="workers-list">
      <li v-for="worker in props.workerList"
          :key = "worker.id"
          class="list-item">
        <Worker :worker="worker"/>
      </li>
  </ul>
</template>

<script setup>
  import Worker from '@/components/Tasks/Worker.vue';

  const props = defineProps({
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