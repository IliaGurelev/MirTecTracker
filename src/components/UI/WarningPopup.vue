<template>
  <div class="popup">
    <span>
      <i class="popup__icon fa-solid fa-triangle-exclamation"></i> <slot class="popup__text"></slot>
    </span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 110%;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px;
  border-radius: 5px;
  z-index: 4;
  box-shadow: 0px 0px 2px 2px rgba(209, 209, 209, 0.281);

  &__icon {
    color: rgb(235, 190, 43);
  }
}
</style>
