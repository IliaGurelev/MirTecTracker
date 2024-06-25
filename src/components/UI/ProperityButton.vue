<template>
  <div class="button">
    <div class="button__element"></div>
    <div class="button__element"></div>
    <div class="button__element"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.button {
  display: flex;
  cursor: pointer;
  column-gap: 3px;

  &__element {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: rgb(197, 197, 197);
  }
}
</style>
