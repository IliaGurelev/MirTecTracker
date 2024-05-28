<template>
  <div class="date">
    <p class="date__text">Сегодня</p>
    <p class="date__date date__date--bold">Май <span class="date__number">20</span>, <span class="date__number">2024</span></p>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .date {
    font-size: 16px;

    &__date--bold {
      font-weight: 600;
      font-size: 20px;
    }

    &__number {
      font-family: "Montserrat", sans-serif;
    }
  }
</style>