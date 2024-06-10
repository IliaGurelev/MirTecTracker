<template>
  <div class="selector" @click.stop="toggleDropdown">
    <div class="selector__option">
      <div  v-if="!dropdownVisible" class="selector__circle" :class="'selector__circle--' + selectedColor"></div>
    </div>
    <ul v-if="dropdownVisible" class="selector__options">
      <li 
        v-for="color in colors" 
        :key="color" 
        @click.stop="selectColor(color), $emit('clickColor', color)"
        >
        <div class="selector__circle" :class="'selector__circle--' + color"></div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import colorConst from '@/constants/color';

  const colors = colorConst

  const selectedColor = ref('blue')
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
    width: 25px;
    height: 25px;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    background: rgba(255, 255, 255, 0.185);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border-radius: 4px;
    z-index: 2;

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
      width: 550%;
      border-top: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 4px;
      list-style: none;
      margin: 0;

      li {
        cursor: pointer;
      }

      li:hover {
        background-color: #f0f0f0;
      }
    }

    &__circle {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      box-shadow: 0px 0px 5px #9c9c9c;

      &--purple {
        background-color: var(--tag-4-text);
      }

      &--green {
        background-color: var(--tag-2-text);
      }

      &--blue {
        background-color: var(--tag-1-text);
      }

      &--orange {
        background-color: var(--tag-5-text);
      }
    }
  }
</style>