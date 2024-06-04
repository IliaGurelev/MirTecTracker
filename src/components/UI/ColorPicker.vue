<template>
  <div class="custom-select">
    <div class="selected-option" @click="toggleDropdown">
      <div v-if="selectedColor" :style="{ backgroundColor: selectedColor }" class="color-circle"></div>
    </div>
    <ul v-if="dropdownVisible" class="options">
      <li v-for="color in colors" :key="color.value" @click="selectColor(color.value)">
        <div :style="{ backgroundColor: color.value }" class="color-circle"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const colors = [
    { value: 'red' },
    { value: 'green' },
    { value: 'blue' },
    { value: 'yellow' },
  ]

  const selectedColor = ref(null)
  const dropdownVisible = ref(false)

  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value
  }

  const selectColor = (color) => {
    selectedColor.value = color
    dropdownVisible.value = false
  }
</script>

<style lang="scss" scoped>
  .custom-select {
    position: relative;
    width: 50px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    background: white;
    border-radius: 4px;
    padding: 10px;
  }

  .selected-option {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .options {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
    top: 0;
    left: 0;
    width: 300%;
    border-top: none;
    background: white;
    border-radius: 4px;
    list-style: none;
    padding: 10px;
    margin: 0;
  }

  .options li {
    cursor: pointer;
  }

  .options li:hover {
    background-color: #f0f0f0;
  }

  .color-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
</style>