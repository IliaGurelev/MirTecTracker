<template>
  <div class="selector" @click.stop="toggleDropdown">
    <div class="selector__option">
      <div :style="{ backgroundColor: selectedColor }" class="selector__circle"></div>
    </div>
    <ul v-if="dropdownVisible" class="selector__options">
      <li v-for="color in colors" :key="color" @click.stop="selectColor(color)">
        <div :style="{ backgroundColor: color }" class="selector__circle"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import colorConst from '@/constants/color';

  const colors = colorConst

  // const colors = [
  //   { value: 'red' },
  //   { value: 'green' },
  //   { value: 'blue' },
  //   { value: 'yellow' },
  // ]


  const selectedColor = ref('red')
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
  .selector {
    position: relative;
    width: 50px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    background: white;
    border-radius: 4px;
    padding: 10px;

    &__option {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__options {
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

      li {
        cursor: pointer;
      }

      li:hover {
        background-color: #f0f0f0;
      }
    }

    &__circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }
  }
</style>