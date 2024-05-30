<template>
  <div class="date">
    <p class="date__date date__date--bold">
      {{currentMonth}} <span class="date__number">{{ currentDay }}</span>, <span class="date__number">{{ currentYear }}</span>
    </p>
    <p class="date__text">{{ isSameDay(props.currentDate, new Date()) ? 'Сегодня' : ''}}</p>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { isSameDay } from 'date-fns';

  const props = defineProps({
    currentDate: {
      type: Date,
      required: false,
      default: new Date(),
    },
  })

  const currentDay = computed(() => {
    return props.currentDate.getDate();
  })
  const currentYear = computed(() => {
    return props.currentDate.getFullYear();
  }) 
  const currentMonth = computed(() => {
    return props.currentDate.toLocaleDateString(navigator.language, {
      month: 'long',
    })
  });
</script>

<style lang="scss" scoped>
  .date {
    display: flex;
    flex-direction: column-reverse;
    font-size: 16px;

    &__date {
      text-transform: capitalize;
    }

    &__date--bold {
      font-weight: 600;
      font-size: 20px;
    }

    &__number {
      font-family: "Montserrat", sans-serif;
    }
  }
</style>