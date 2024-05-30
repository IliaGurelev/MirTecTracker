<template>
  <section class="calendar">
    <i 
      @click="shiftMonth(-1)"
      class="calendar__button fa-solid fa-angles-left"
    ></i>
    <table class="calendar__table">
      <thead class="calendar__header">
        <tr>
          <th 
            v-for="(day, index) in weekDays" 
            :key="index"
            class="calendar__table-header" 
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody class="calendar__body">
        <tr 
          v-for="(week, weekIndex) in calendarDays" 
          :key="weekIndex"
          class="calendar__table-row" 
        >
          <td
            v-for="(day, index) in week"
            :key="index"
            :class="{
              'calendar__table-data--active': isActiveDay(day.date),
              'calendar__table-data--muted': day.isOtherMonth,
              'calendar__table-data--today': isSameDay(day.date, new Date()),
              'calendar__table-data--planned': day.isPlanned,
              }"
            class="table-data"
          >
            <p 
              class="calendar__day" 
              @click="setDate(day.date)"
            >
              {{ day.date.getDate() }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <i 
      @click="shiftMonth(1)"
      class="calendar__button fa-solid fa-angles-right"
    ></i>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import {startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, addDays, addWeeks, isEqual } from 'date-fns';

  const props = defineProps({
    currentDate: {
      type: Date,
      required: true,
    },
    setDate: {
      type: Function,
      required: true,
    },
    plannedDates: {
      type: Array,
      required: true,
    }
  })

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  const activeDate = computed(() => props.currentDate);
  const currentMounth = computed(() => props.currentDate.getMonth());
  const currentDate = ref(new Date());

  const isActiveDay = (date) => {
    return isSameDay(activeDate.value, date);
  };

  const shiftMonth = (step) => {
    currentDate.value = addWeeks(currentDate.value, step);
    props.setDate(startOfWeek(currentDate.value, {weekStartsOn: 1}))
  }

  const calendarDays = computed(() => {
    const start = startOfWeek(currentDate.value, { weekStartsOn: 1 });
    const end = endOfWeek(
      addDays(
        endOfWeek(currentDate.value, { weekStartsOn: 1 }), 
        1
      ), 
      {weekStartsOn: 1});

    const days = eachDayOfInterval({ start, end });

    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7).map(date => ({
        date,
        isOtherMonth: date.getMonth() !== currentMounth.value,
        isPlanned: props.plannedDates.some(plannedDate => isSameDay(plannedDate, date))
      })));
    }
    return weeks;
  });
</script>

<style lang="scss" scoped>
  .calendar {
    display: flex;
    align-items: center;

    &__table {
      width: 100%;
      border-collapse: collapse;
      row-gap: 50px;
    }

    &__table-header, &__table-row {
      font-weight: 500;
      text-align: center;
      padding: 4px 8px 0 8px;
      cursor: default;
    }

    &__table-data {

      &--active {
        color: var(--color-text-important);
        position: relative;

        &::before {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px; 
          height: 4px; 
          background-color: var(--color-text-important); 
          border-radius: 50%;
        }
      }

      &--muted {
        color: var(--light-grey)
      }

      &--today {
        color: var(--color-text-important);
      }

      &--planned {
        text-decoration: underline;
      }
    }

    &__day {
      width: 20px;
      margin: 0 auto;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      cursor: pointer;
      user-select: none;

      &:hover {
        background-color: #9c9c9c;
        border-radius: 50px;
      }
    }

    &__table-row + &__table-row {
      td {
        padding-top: 10px;
      }
    }

    &__button {
      color: #808080;
      cursor: pointer;
    }
  }
</style>