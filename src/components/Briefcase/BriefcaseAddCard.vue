<template>
  <div class="add-card">
    <i class="add-card__icon fa-solid fa-plus"></i>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .add-card {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 300px;
		height: 100px;
		border-radius: 15px;
    border: 4px dashed #8f8f8f96;
    color: #8f8f8f96;
    cursor: pointer;

    &__icon {
      font-size: 80px;
      font-weight: 100;
    }
  }
</style>