<template>
  <div class="popup">
    <i class="fa-solid fa-triangle-exclamation"></i>
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 110%;
  left: 0;
  background-color: rgba(255, 50, 50, 0.959);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 4;
}
</style>