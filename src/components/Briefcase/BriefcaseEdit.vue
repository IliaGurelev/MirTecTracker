<template>
  <form class="edit" action=""  @submit.prevent="$emit('submitForm', currentBriefcase)">
    <div class="edit__content">
      <div class="edit__wrapp--relative">
        <input 
          :class="`edit__input--${currentColor}`"
          v-model="currentName"
          class="edit__input" 
          type="text"
          required
          placeholder="Название"
          maxlength="14"
        >
        <CharacterLimitWarning 
          :limit="14"
          :length="currentName.length"
        />
      </div>
      <div class="edit__wrapp">
        <ColorPicker
          :defaultColor="currentColor"
          :isRight="true"
          :isLeft="false"
          @clickColor="switchColor"
          class="edit__color-picker"
        />
        <button type="submit">
          <i class="edit__submit fa-solid fa-check"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
  import {ref, computed, watchEffect} from 'vue';
  import ColorPicker from '@/components/UI/ColorPicker.vue';
  import CharacterLimitWarning from '@/components/UI/CharacterLimitWarning.vue';

  const props = defineProps({
    briefcase: {
      type: Object,
      required: true,
    }
  })

  const currentColor = ref(props.briefcase.color)
  const currentName = ref(props.briefcase.name)

  const currentBriefcase = computed(() => {
    return {
      id: props.briefcase.id,
      name: currentName.value,
      color: currentColor.value,
    }
  })

	watchEffect(() => {
		currentColor.value = props.briefcase.color;
    currentName.value = props.briefcase.name;
	})

	const switchColor = (color) => {
    currentColor.value = color
  }
</script>

<style lang="scss" scoped>
  .edit {
    &__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 10px;
			background-color: #ffffff;
			box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
			border-radius: 11px;
			padding: 20px;
		}

    &__wrapp {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 15px;

      &--relative {
        position: relative;
      }
		}

    &__color-picker {
      :deep(.selector__options) {
        right: 0;
      }

			@media (max-width: 415px) {
				:deep(.selector__options) {
					width: auto;
					background-color: #ffffff;
					padding: 5px;
					box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
				}
			}
		}

    &__input {
      border-radius: 100px;
      padding: 9px 20px;
			font-size: 20px;
      font-weight: 700;
			max-width: 200px;
      text-decoration: underline;

			&:focus {
				outline: none;
			}

			&--purple {
				color: var(--tag-4-text);
				background-color: var(--tag-4);
			}
	
			&--blue {
				color: var(--tag-3-text);
				background-color: var(--tag-3);
			}
	
			&--green {
				color: var(--tag-2-text);
				background-color: var(--tag-2);
			}
	
			&--orange {
				color: var(--tag-5-text);
				background-color: var(--tag-5);
			}
    }

		&__submit {
			font-size: 25px;
			cursor: pointer;
		}
  }
</style>