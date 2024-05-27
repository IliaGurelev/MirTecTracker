<script setup>
</script>

<template>
  <div class="task-details__properity-button properety-button">
    <div class="properety-button__element"></div>
    <div class="properety-button__element"></div>
    <div class="properety-button__element"></div>
  </div>
</template>

<style scoped>
  .properety-button {
    display: flex;
    cursor: pointer;
  }

  .properety-button__element {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(197, 197, 197);
  }

  .properety-button__element:not(:last-child) {
    margin-right: 3px;
  }
</style>