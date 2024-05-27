<script setup>
</script>

<template>
  <div :class="$attrs.class">
    <div class="progress-task__text-block">
      <label class="progress-task__label" for="progress-task">Прогресс</label>
      <p class="progress-task__value">3/5</p>
    </div>
    <progress class="progress-task__bar" id="progress-task" max="5" value="3"></progress>
  </div>
</template>

<style scoped>
  .progress-task__text-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .progress-task__label {
    font-size: 18px;
    font-weight: 600;
  }

  .progress-task__value {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--color-text-important);
  }

  .progress-task__bar {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
          appearance: none;
    border: none;
    border-radius: 10px;
    height: 10px;
  }

  .progress-task__bar::-webkit-progress-bar {
    background-color: var(--color-light);
  }

  .progress-task__bar::-moz-progress-bar {
    background-color: var(--color-light);
  }

  .progress-task__bar::-webkit-progress-value {
    background: var(--color-text-important);
  }

  .progress-task__bar::-webkit-progress-bar, .progress-task__bar::-webkit-progress-value {
    border-radius: 10px;
  }
</style>