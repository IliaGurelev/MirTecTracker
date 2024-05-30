<template>
  <div class="progress-bar">
    <div class="progress-bar__wrapper">
      <label 
        class="progress-bar__label" 
        for="progress-task"
      >Прогресс</label>
      <p class="progress-bar__value">3/5</p>
    </div>
    <progress 
      class="progress-bar__bar" 
      id="progress-task" 
      max="5" 
      value="3"
    >
    </progress>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .progress-bar {
    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__label {
      font-size: 18px;
      font-weight: 600;
    }

    &__value {
      font-family: "Montserrat", sans-serif;
      font-size: 17px;
      font-weight: 600;
      color: var(--color-text-important);
    }

    &__bar {
      width: 100%;
      -webkit-appearance: none;
      -moz-appearance: none;
            appearance: none;
      border: none;
      border-radius: 10px;
      height: 10px;

      &::-webkit-progress-bar {
        background-color: var(--color-light);
      }

      &::-moz-progress-bar {
        background-color: var(--color-light);
      }

      &::-webkit-progress-value {
        background: var(--color-text-important);
      }

      &::-webkit-progress-bar, &::-webkit-progress-value {
        border-radius: 10px;
      }
    }
  }
</style>