<template>
  <section class="user-diary__calendar calendar">
    <table class="calendar__table">
      <thead class="calendar__head">
        <tr>
          <th class="calendar__th calendar__th--active">Пн</th>
          <th class="calendar__th">Вт</th>
          <th class="calendar__th">Ср</th>
          <th class="calendar__th">Чт</th>
          <th class="calendar__th">Пт</th>
          <th class="calendar__th">Сб</th>
          <th class="calendar__th">Вс</th>
        </tr>
      </thead>
      <tbody class="calendar__tbody">
        <tr class="calendar__tr">
          <td class="calendar__td calendar__td--active">20</td>
          <td class="calendar__td">21</td>
          <td class="calendar__td">22</td>
          <td class="calendar__td">23</td>
          <td class="calendar__td">24</td>
          <td class="calendar__td">25</td>
          <td class="calendar__td">26</td>
        </tr>
        <tr class="calendar__tr">
          <td class="calendar__td">27</td>
          <td class="calendar__td">28</td>
          <td class="calendar__td">29</td>
          <td class="calendar__td">30</td>
          <td class="calendar__td">31</td>
          <td class="calendar__td calendar__td--muted">1</td>
          <td class="calendar__td calendar__td--muted">2</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
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

  .calendar__td {
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
  }

  .calendar__th {
    font-weight: 400;
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