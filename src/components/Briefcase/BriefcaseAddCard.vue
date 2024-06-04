<template>
  <div class="add-card">
    <i class="add-card__icon fa-solid fa-plus"></i>
  </div>
  <section
    class="portfolio-card"
    :class="'portfolio-card--color'"
  >
    <input type="text" class="portfolio-card__name" placeholder="Название" />
    <ColorPicker class="add-card__color" />
  </section>
</template>

<script setup>
  import colorConst from '@/constants/color';
  import BriefcaseIcon from '@/assets/BriefcaseIcon.vue';
  import ColorPicker from '@/components/UI/ColorPicker.vue';
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

    &__color{
      z-index: 1;
    }
  }

  .portfolio-card {
		position: relative;
		display: flex;
		align-items: center;
    column-gap: 10px;
		width: 300px;
		height: 100px;
		padding: 10px;
		border-radius: 15px;
		background: linear-gradient(to bottom, var(--tag-3), var(--tag-3-light-dark));
		cursor: pointer;
		transition: box-shadow 0.3s;

    &__name {
      font-size: 25px;
      font-weight: 500;
      color: var(--tag-3-text);
      background-color: #ffffff;
      border-radius: 8px;
      padding: 5px;
      z-index: 1;

      &:focus {
        outline: none;
      }
    }

    &__select {
      z-index: 1;
    }

    &__icon {
      position: absolute;
      right: -20px;
      width: 200px;
      fill: var(--tag-3-text);
      filter: opacity(15%);
    }
  }


   .color-select {
      width: 50px;
      height: 30px;
    }
    .color-select option {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
    }
    .color-select option::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 50%;
        margin-right: 5px;
    }
    .color-select option[value="purple"]::before {
      background-color: purple;
    }
    .color-select option[value="green"]::before {
      background-color: green;
    }
    .color-select option[value="blue"]::before {
      background-color: blue;
    }
    .color-select option[value="orange"]::before {
      background-color: orange;
    }
</style>