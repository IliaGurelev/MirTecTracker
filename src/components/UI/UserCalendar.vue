<template>
  <section class="calendar">
    <table class="calendar__table">
      <thead class="calendar__header">
        <tr>
          <th 
            class="calendar__table-header" 
            v-for="(day, index) in weekDays" 
            :key="index"
          >
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody class="calendar__body">
        <tr 
          class="calendar__table-row" 
          v-for="(week, weekIndex) in calendarDays" 
          :key="weekIndex"
        >
          <td
            v-for="(day, index) in week"
            :key="index"
            class="table-data"
            :class="{
              'calendar__table-data--active': isActiveDay(day.date),
              'calendar__table-data--muted': day.isOtherMonth}"
          >
            <p 
              class="calendar__day" 
              @click="selectDay(day)">{{ day.date.getDate() }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, eachDayOfInterval, isSameDay, addDays } from 'date-fns';

  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  const activeDate = ref(new Date());
  const currentDate = ref(new Date());
  const currentMounth = ref(new Date().getMonth());

  const isActiveDay = (date) => {
    return isSameDay(activeDate.value, date);
  };

  function selectDay(day) {
    if(day.isOtherMonth) {
      currentMounth.value = day.date.getMonth();  
    }
    activeDate.value = day.date;
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
        isOtherMonth: date.getMonth() !== currentMounth.value
      })));
    }
    return weeks;
  });
</script>

<style lang="scss" scoped>
  .calendar {
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
    }

    &__day {
      width: 20px;
      margin: 0 auto;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
      cursor: pointer;

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
  }
</style>