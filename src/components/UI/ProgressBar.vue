<template>
  <div :class="$attrs.class">
    <div class="progress-wrapper">
      <label class="progress-label" for="progress-task">Прогресс</label>
      <p class="progress-value">3/5</p>
    </div>
    <progress class="progress-bar" id="progress-task" max="5" value="3"></progress>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .progress-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .progress-label {
    font-size: 18px;
    font-weight: 600;
  }

  .progress-value {
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
    font-weight: 600;
    color: var(--color-text-important);
  }

  .progress-bar {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
          appearance: none;
    border: none;
    border-radius: 10px;
    height: 10px;
  }

  .progress-bar::-webkit-progress-bar {
    background-color: var(--color-light);
  }

  .progress-bar::-moz-progress-bar {
    background-color: var(--color-light);
  }

  .progress-bar::-webkit-progress-value {
    background: var(--color-text-important);
  }

  .progress-bar::-webkit-progress-bar, .progress-task__bar::-webkit-progress-value {
    border-radius: 10px;
  }
</style>