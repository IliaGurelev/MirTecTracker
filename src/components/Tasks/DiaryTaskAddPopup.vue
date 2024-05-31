<template>
  <section class="popup">
    <input 
      v-model="nameTask"
      class="popup__input" 
      type="text"
      placeholder="Название" 
      required
    />
    <textarea 
      v-model="descriptionTask"
      class="popup__textarea" 
      placeholder="Описание"
    ></textarea>
    <div class="popup__wrapper">
      <input 
        v-model="timeTask"
        class="popup__input popup__input--pointer" 
        type="time" 
      >
      <input 
        v-model="dateTask"
        class="popup__input popup__input--pointer"
        type="date" 
      >
      <button 
        @click="addDiaryTask()"
        class="popup__button" 
      >Добавить</button>
    </div>
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import { format } from 'date-fns';
  import parseTime from '@/utils/parse-time';
  import { useMainStore } from '@/store.js';

  const props = defineProps({
    defaultDate: {
      type: String,
      required: false,
      default: "",
    },
  })

  const store = useMainStore();

  const nameTask = defineModel("nameTask");
  const descriptionTask = defineModel("descriptionTask");
  const dateTask = defineModel("dateTask");
  dateTask.value = format(props.defaultDate, 'yyyy-MM-dd');
  const timeTask = defineModel("timeTask");

  const addDiaryTask = () => {
    store.addDiaryTask({
      id: 4,
      name: nameTask.value,
      description: descriptionTask.value,
      timeStart: timeTask.value,
      dueDate: dateTask.value,
    })
  }
</script>

<style lang="scss" scoped>
  .popup {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    background-color: var(--color-light-dark);
    padding: 10px;
    border-radius: 11px;
    max-width: 400px;
    box-shadow: 0px 0px 10px rgba(43, 43, 43, 0.322);
    animation: spawnFromTop 0.5s forwards;

    &__input, &__textarea {
      border: none;
      border-radius: 5px;
      font-size: 20px;
      background-color: #ffffff;
      box-shadow: 0px 0px 5px  rgba(43, 43, 43, 0.082);
      padding: 10px;

      &:focus {
        outline: none;
      }
    }

    &__input {
      &--pointer {
        cursor: pointer;
      }
    }

    &__textarea {
      resize: none;
    }

    &__button {
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: #ffffff;
      background-color: var(--color-text-important);
      box-shadow: 0px 0px 10px rgba(43, 43, 43, 0.082);
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: #47a2e7;
      }
    }

    &__wrapper { 
      display: flex;
      justify-content: space-between;
      gap: 5px;

      @media (max-width: 447px) {
        justify-content: flex-start;
        flex-wrap: wrap;
      }
    }
  }

  @keyframes spawnFromTop {
    0% {
      opacity: 0;
      transform: translate3d(0, -60%, 0);
    }
  
    100% {
      opacity: 1;
      transform: none;
    }
  }
</style>