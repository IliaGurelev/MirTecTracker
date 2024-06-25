<template>
  <div class="input__wrap input__wrap--column input__wrap--relative">
    <label 
      class="input__label" 
      :for="props.idInput"
    >
      {{props.labelInput}}
    </label>
	<div class="input__input-container">
		<input 
		v-model="valueInput"
		@input="formattedInput, switchShowPopup(true)"
		@focus="switchShowPopup(true)"
		@blur="switchShowPopup(false)"
		:id="props.idInput" 
		:type="inputType" 
		:placeholder="props.placeholderInput" 
		:class="{'input__input--red-border': isValidInput}"
		class="input__input" 
		required
		>
		<div v-if="props.typeInput === 'password'" class="input__password-toggle" @click="togglePasswordVisibility">
        <i :class="eyeIcon" class="password-toggle-icon" />
      </div>
	</div>
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
  const inputType = ref(props.typeInput);
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
  const togglePasswordVisibility = () => {
  inputType.value = inputType.value === 'password' ? 'text' : 'password';
};

const eyeIcon = computed(() => {
  return inputType.value === 'password' ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash';
});

</script>


<style lang="scss" scoped>
.input {
  &__wrap {
    display: flex;
    flex-direction: column;
    position: relative;

    &--relative {
      position: relative;
    }

    &--column {
      flex-direction: column;
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

  &__input-container {
    position: relative;
  }

  &__input {
    font-size: 16px;
    padding: 10px;
    border: var(--color-light-gray) 2px solid;
    border-radius: 5px;
    width: 100%;

    &:focus {
      outline: none;
      border-color: var(--color-light-dark);
    }

    &--red-border {
      border-bottom: 1px red solid;
    }
  }

  &__password-toggle {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .password-toggle-icon {
    transition: transform 0.3s ease;
  }

  .fa-eye-slash {
    display: none;
  }

  input[type="password"] + .input__password-toggle .fa-eye-slash {
    display: inline-block;
  }

  input[type="text"] + .input__password-toggle .fa-eye {
    display: none;
  }

  input[type="password"]:focus + .input__password-toggle .fa-eye {
    display: none;
  }

  input[type="text"]:focus + .input__password-toggle .fa-eye-slash {
    display: none;
  }
}
</style>