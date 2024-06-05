<template>
  <div 
    v-if="!isAcive" 
    @click="switchIsActive"
    class="add-card"
  >
    <i class="add-card__icon fa-solid fa-plus"></i>
  </div>
  <section
    v-else-if="isAcive"
    class="briefcase-card"
    :class="'briefcase-card--' + currentColor"
  >
    <input type="text" class="briefcase-card__name" placeholder="Название" />
    <ColorPicker class="briefcase-card__color" @clickColor="switchColor"/>
  </section>
</template>

<script setup>
  import {ref} from 'vue';
  import ColorPicker from '@/components/UI/ColorPicker.vue';

  const isAcive = ref(false);
  const currentColor = ref('blue');

  const switchIsActive = () => {
    isAcive.value = !isAcive.value;
  }

  const switchColor = (color) => {
    currentColor.value = color
  }
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

  .briefcase-card {
		position: relative;
		display: flex;
    flex-direction: column;
    gap: 10px;
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
      color: #FFFFFF; 
      background-color: transparent;
      border-bottom: 1px solid #8f8f8f96;
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

    &--blue {
      background: linear-gradient(to bottom, var(--tag-1), var(--tag-1-light-dark));

      .briefcase-card__name  {
        color: var(--tag-1-text);
      }
    }

    /* второй цвет карточки */
    &--green {
      background: linear-gradient(to bottom, var(--tag-2), var(--tag-2-light-dark));

      .briefcase-card__name  {
        color: var(--tag-2-text);
      }
    }

    &--purple {
      background: linear-gradient(to bottom, var(--tag-4), var(--tag-4-light-dark));

      .briefcase-card__name  {
        color: var(--tag-4-text);
      }
    }

    &--orange {
		  background: linear-gradient(to bottom, var(--tag-5), var(--tag-5-light-dark));

      .briefcase-card__name  {
        color: var(--tag-5-text);
      }
    }
  }
</style>