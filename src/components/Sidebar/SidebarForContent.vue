<template>
  <section class="sidebar">
    <slot></slot>
  </section>
</template>

<script setup>
  import { onMounted } from 'vue';
</script>

<style lang="scss" scoped>
  .sidebar {
    background-color: #eeeded;
    position: fixed ;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 80px;
  }
</style>