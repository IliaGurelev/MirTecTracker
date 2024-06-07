<template>
  <div 
    v-if="!isAcive" 
    @click="switchIsActive"
    class="add-card"
  >
    <i class="add-card__icon fa-solid fa-plus"></i>
  </div>
  <form v-else-if="isAcive" action="" @submit.prevent="$emit('submitForm', briefcaseData), switchIsActive()">
    <section
      class="briefcase"
      :class="'briefcase--' + currentColor"
    >
      <input 
        type="text" 
        class="briefcase__name" 
        placeholder="Название"
        required
        v-model="nameBriefcase"
      />
      <div class="briefcase__wrapper">
        <ColorPicker 
          class="briefcase__color" 
          @clickColor="switchColor"
        />
        <button 
          type="submit" 
          class="briefcase__button"
        >
          <CompleteIcon class="briefcase__button-icon" />
        </button>
      </div>
    </section>
  </form>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import ColorPicker from '@/components/UI/ColorPicker.vue';
  import CompleteIcon from '@/assets/CompleteIcon.vue';

  const isAcive = ref(false);
  const currentColor = ref('blue');
  const nameBriefcase = defineModel();

  const briefcaseData = computed(() => {return{name: nameBriefcase.value, color: currentColor.value}})

  const switchIsActive = () => {
    isAcive.value = !isAcive.value;
    nameBriefcase.value = '';
    currentColor.value = 'blue';
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

  .briefcase {
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

    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center
    }

    &__button {
      background-color: #fffcfc8e;
      border: none;
      border-radius: 10px;
      padding: 5px;
      transition: background-color 0.3s;
      cursor: pointer;
    }

    &--blue {
      background: linear-gradient(to bottom, var(--tag-1), var(--tag-1-light-dark));

      .briefcase__name, .briefcase__button-icon  {
        color: var(--tag-1-text);
        fill: var(--tag-1-text);
      }
    }

    /* второй цвет карточки */
    &--green {
      background: linear-gradient(to bottom, var(--tag-2), var(--tag-2-light-dark));

      .briefcase__name, .briefcase__button-icon  {
        color: var(--tag-2-text);
        fill: var(--tag-2-text);
      }
    }

    &--purple {
      background: linear-gradient(to bottom, var(--tag-4), var(--tag-4-light-dark));

      .briefcase__name, .briefcase__button-icon  {
        color: var(--tag-4-text);
        fill: var(--tag-4-text);
      }
    }

    &--orange {
		  background: linear-gradient(to bottom, var(--tag-5), var(--tag-5-light-dark));

      .briefcase__name, .briefcase__button-icon  {
        color: var(--tag-5-text);
        fill: var(--tag-5-text);
      }
    }
  }
</style>