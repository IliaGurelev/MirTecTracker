<template>
  <button 
    @click="$emit('clickButton')"
  >
    <slot></slot>
  </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  button {
    font-weight: 600;
    color: #ffffff;
    background-color: #28282d;
    border: none;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgb(71, 71, 71);
    }
  }
</style>