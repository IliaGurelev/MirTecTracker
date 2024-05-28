<template>
  <section class="user-diary__calendar calendar">
    <table class="calendar__table">
      <thead class="calendar__head">
        <tr>
          <th class="calendar__th" v-for="(day, index) in weekDays" :key="index">
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody class="calendar__tbody">
        <tr class="calendar__tr" v-for="(week, weekIndex) in calendarDays" :key="weekIndex">
          <td
            v-for="(day, index) in week"
            :key="index"
            class="calendar__td"
            :class="{
              'calendar__td--active': isActiveDay(day.date),
              'calendar__td--muted': day.isOtherMonth
            }"
          >
            <p @click="selectDay(day)">{{ day.date.getDate() }}</p>
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

<style scoped>  
  .user-diary__calendar {
    width: 100%;
  }

  .calendar__table {
    width: 100%;
    border-collapse: collapse;
  }

  .calendar__th, .calendar__td {
    text-align: center;
    padding: 4px 8px 0 8px;
  }
  
  .calendar__td p {
    width: 20px;
    margin: 0 auto;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    cursor: pointer;
  }

  .calendar__td p:hover {
    background-color: #9c9c9c;
    border-radius: 50px;
  }

  .calendar__th {
    font-weight: 400;
    cursor: default;
  }

  .calendar__tr:last-child .calendar__td {
    padding-top: 12px;
  }

  .calendar__th--active {
    font-weight: 600;
    color: var(--color-text-important);
  }

  .calendar__td--active{
    color: var(--color-text-important);
    position: relative;
  }

  .calendar__td--active::after {
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

  .calendar__td--muted {
    color: var(--light-grey)
  }

  .user-diary__calendar {
    margin-bottom: 20px;
  }
</style>