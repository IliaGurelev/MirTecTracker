<template>
  <div class="selector" @click.stop="toggleDropdown">
    <div class="selector__option">
      <div  v-if="!dropdownVisible" class="selector__circle" :class="'selector__circle--' + selectedColor"></div>
    </div>
    <ul 
      v-if="dropdownVisible" 
      :class="
      {'selector__options--to-bottom': props.isVertical,
        'selector__options--to-right': props.isRight,
        'selector__options--to-left': props.isLeft,
      }"
      class="selector__options"
    >
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
  import { ref, watchEffect } from 'vue'
  import colorConst from '@/constants/color';

  const props = defineProps({
    defaultColor: {
      type: String,
      required: false,
      default: 'blue',
    },
    isVertical: {
      type: Boolean,
      required: false,
      default: false,
    },
    isRight: {
      type: Boolean,
      required: false,
      default: false,
    },
    isLeft: {
      type: Boolean,
      required: false,
      default: true,
    },
  })

  const colors = colorConst

  const selectedColor = ref(props.defaultColor)
  const dropdownVisible = ref(false)

  watchEffect(() => {
    selectedColor.value = props.defaultColor;
  })

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
      width: 550%;
      border-top: none;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 4px;
      list-style: none;
      margin: 0;

      &--to-bottom {
        width: auto;
      }

      &--to-left {
        left: 0;
      }

      &--to-right {
        right: 0;
      }

      li {
        cursor: pointer;
      }
    }

    &__circle {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      box-shadow: 0px 0px 5px #9c9c9c;

      &:hover {
        filter: brightness(80%);
      }

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