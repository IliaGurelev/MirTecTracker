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
      @input="formattedInput, switchShowPopup(true)"
      @focus="switchShowPopup(true)"
      @blur="switchShowPopup(false)"
      :id="props.idInput" 
      :type="props.typeInput" 
      :placeholder="props.placeholderInput" 
      :class="{'input__input--red-border': isValidInput}"
      class="input__input" 
      required
    >
    <WarningPopup v-if="showPopup">
       {{ props.warningMessage }}  
    </WarningPopup>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import WarningPopup from '@/components/UI/WarningPopup.vue';

  const props = defineProps({
    labelInput: {
      type: String,
      required: true,
    },
    idInput: {
      type: String,
      required: true,
    },
    isValid: {
      type: Boolean,
      required: false,
      default: false,
    },
    warningMessage: {
      type: String,
      required: false,
      default: '',
    },
    placeholderInput: {
      type: String,
      required: false,
      default: '',
    },
    typeInput: {
      type: String,
      required: false,
      default: 'text',
    }
  });

  const showPopup = ref(false);

  const valueInput = defineModel();

  const formattedInput = (event) => {
    valueInput.value = event.target.value.replace(/\s+/g, '');
    event.target.value = event.target.value.replace(/\s+/g, '');
  };

  const switchShowPopup = (state) => {
    showPopup.value = state && isValidInput.value;
  }

  const isValidInput = computed(() => {
    return props.warningMessage !== '' &&
      !props.isValid &&
      valueInput.value.length !== 0;
  })
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

      &--red-border {
        box-shadow: 0 1px 0px 0px red;
      }
    }
  }
</style>