<template>
  <div class="properety-button">
    <div class="button-element"></div>
    <div class="button-element"></div>
    <div class="button-element"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .properety-button {
    display: flex;
    cursor: pointer;
  }

  .button-element {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(197, 197, 197);
  }

  .button-element:not(:last-child) {
    margin-right: 3px;
  }
</style>