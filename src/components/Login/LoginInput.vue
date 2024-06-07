<template>
  <div class="input__wrap input__wrap--column input__wrap--relative">
    <label 
      class="input__label" 
      :for="props.idInput"
    >
      {{props.labelInput}}
    </label>
    <input 
      v-model="valueInput"
      @input="formattedInput"
      :id="props.idInput" 
      :type="props.typeInput" 
      :placeholder="props.placeholderInput" 
      class="input__input" 
      required
    >
    <WarningPopup v-if="false">
      Содержит только буквы и не менее 2 символов.  
    </WarningPopup>
  </div>
</template>

<script setup>
   import WarningPopup from '@/components/UI/WarningPopup.vue';

  const props = defineProps({
    labelInput: {
      type: String,
      required: true,
    },
    placeholderInput: {
      type: String,
      required: false,
      default: '',
    },
    idInput: {
      type: String,
      required: true,
    },
    typeInput: {
      type: String,
      required: false,
      default: 'text',
    }
  });

  const valueInput = defineModel();

  const formattedInput = (event) => {
    valueInput.value = event.target.value.replace(/\s+/g, '');
    event.target.value = event.target.value.replace(/\s+/g, '');
  };

</script>

<style lang="scss" scoped>
  .input {
    &__wrap {
      display: flex;

      &--column {
        flex-direction: column;
      }

      &--relative {
        position: relative;
      }
    }

    &__label {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 5px;

      &-row {
        font-size: 16px;
      }
    }
    
    &__input {
      font-size: 16px;
      padding: 10px;
      border: var(--color-light-gray) 2px solid;
      border-radius: 5px;

      &:focus {
        outline: none;
      }

      &-row {
        font-size: 16px;
        margin-bottom: 20px;
        padding: 10px;
        border: var(--color-light-gray) 2px solid;
        border-radius: 5px;
        margin-bottom: 0;
        margin-right: 10px;
      }
    }
  }
</style>