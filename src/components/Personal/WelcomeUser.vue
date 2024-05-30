<template>
  <div class="welcome">
    <h3 class="welcome__text">Привет, {{ props.nameUser }}!</h3>
  </div>
</template>

<script setup>
  const props = defineProps({
    nameUser: {
      type: String,
      required: true
    }
  })
</script>

<style lang="scss" scoped>
  .welcome {
    &__text {
      padding: 0;
      margin: 0;
      font-weight: 400;
      color: #b8b8b8;
      cursor: default;
    }
  }
</style>