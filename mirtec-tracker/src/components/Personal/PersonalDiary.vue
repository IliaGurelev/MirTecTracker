<script source>
</script>

<template>
  <section class="user-page__user-section user-section">
    <section class="user-section__user-block user-block">
      <div class="user-block__user-info user-info">
        <img class="user-info__user-icon" src="../assets/user-icon-1.jpg" alt="">
        <p class="user-info__user-name">Александр</p>
      </div>
      <div class="user-block__settings">
        <i class="fa-solid fa-gear"></i>
      </div>
    </section>
    <section class="user-page__user-diary user-diary">
      <div class="user-diary__header">
        <div class="user-diary__text-block">
          <p class="user-diary__date">Май 20, 2024</p>
          <p class="user-diary__title">Сегодня</p>
        </div>
        <button class="user-diary__add-task-button"> <i class="fa-regular fa-plus"></i> Добавить задачу</button>
      </div>
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
      <ul class="user-diary__list">
        <li class="user-diary__item">
          <div class="user-diary__radio-select-task-wrap">
            <div class="user-diary__radio-select-task user-diary__radio-select-task--active"></div>
          </div>
          <div class="user-diary__diary-task diary-task diary-task--active">
            <div class="diary-task__header">
              <p class="diary-task__title">Собрание</p>
              <time datetime="09:00">9:00</time>
            </div>
            <div class="diary-task__main">
              <p class="diary-task__description">Обсуждение с командой о задачах на сегодня</p>
              <div class="diary-task__content">
                <ul class="diary-task__workers-list workers-list">
                  <li class="workers-list__item">
                    <div class="workers-list__icon-wrapp">
                      <img class="workers-list__icon" src="../assets/user-icon-1.jpg" alt="">
                    </div>
                  </li>
                  <li class="workers-list__item">
                    <div class="workers-list__icon-wrapp">
                      <img class="workers-list__icon" src="../assets/user-icon-2.jpg" alt="">
                    </div>
                  </li>
                  <li class="workers-list__item">
                    <div class="workers-list__icon-wrapp">
                      <img class="workers-list__icon" src="../assets/user-icon-3.jpg" alt="">
                    </div>
                  </li>
                </ul>
                <button class="diary-task__button-complite">
                  <svg class="button-complite__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M502.795,60.572c-11.183-9.782-28.214-8.677-38.023,2.533L177.837,391.028L46.603,251.036 c-10.186-10.833-27.217-11.372-38.077-1.213c-10.86,10.159-11.426,27.244-1.24,38.104l151.579,161.684 c5.12,5.416,12.207,8.488,19.672,8.488h0.458c7.626-0.108,14.794-3.449,19.833-9.189L505.355,98.595 C515.137,87.385,514.005,70.381,502.795,60.572z"/>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li class="user-diary__item">
          <div class="user-diary__radio-select-task-wrap">
            <div class="user-diary__radio-select-task"></div>
          </div>
          <div class="user-diary__diary-task diary-task">
            <div class="diary-task__header">
              <p class="diary-task__title">Обед</p>
              <time datetime="09:00">12:00</time>
            </div>
            <div class="diary-task__main">
              <p class="diary-task__description">Съесть салат на обед</p>
              <div class="diary-task__content">
                <ul class="diary-task__workers-list workers-list">
                  <li class="workers-list__item">
                    <div class="workers-list__icon-wrapp">
                      <img class="workers-list__icon" src="../assets/user-icon-1.jpg" alt="">
                    </div>
                  </li>
                </ul>
                <button class="diary-task__button-complite">
                  <svg class="button-complite__icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.008 512.008" style="enable-background:new 0 0 512.008 512.008;" xml:space="preserve">
                    <g>
                      <g>
                        <path d="M502.795,60.572c-11.183-9.782-28.214-8.677-38.023,2.533L177.837,391.028L46.603,251.036 c-10.186-10.833-27.217-11.372-38.077-1.213c-10.86,10.159-11.426,27.244-1.24,38.104l151.579,161.684 c5.12,5.416,12.207,8.488,19.672,8.488h0.458c7.626-0.108,14.794-3.449,19.833-9.189L505.355,98.595 C515.137,87.385,514.005,70.381,502.795,60.572z"/>
                      </g>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style>
  /* Календарь */
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

  /* Секция пользователя с его ежедневником */

  .user-section {
    max-width: 500px;
  }

  .user-info {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .user-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .user-section__user-block {
    margin-bottom: 30px;
  }

  .user-info__user-icon {
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  .user-info__user-name {
    font-size: 20px;
    font-weight: 600;
  }

  .user-block__settings {
    cursor: pointer;
  }

  .user-diary {
    width: 100%;
  }

  .user-diary__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .user-diary__title {
    font-weight: 600;
    font-size: 20px;
  }

  .user-diary__add-task-button {
    font-weight: 600;
    color: #ffffff;
    background-color: black;
    border: none;
    border-radius: 10px;
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .user-diary .user-diary__add-task-button:hover, .user-diary .diary-task__button-complite:hover {
    cursor: pointer;
    background-color: rgb(71, 71, 71);
  }

  .user-diary__list {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .user-diary__list::before {
    content: "";
    position: absolute;
    top: 0;
    left: 8px;
    width: 3px;
    height: 100%;
    z-index: -1;
    background-color: var(--color-text-important);
  }

  .user-diary__item {
    display: flex;
    justify-content: space-between;
  }

  .user-diary__radio-select-task-wrap {
    display: block;
    margin-right: 20px;
    width: 15px;
    height: 15px;
  }

  .user-diary__radio-select-task{
    position: relative;
    width: 15px;
    height: 15px;
    background-color: var(--color-text-important);
    border-radius: 50%;
    border: 2px solid var(--color-text-important);
  }

  .user-diary__radio-select-task::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: #ffffff;
    border-radius: 50%;
  }

  .user-diary__radio-select-task--active::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background-color: var(--color-text-important);
    border-radius: 50%;
    transform: scale(-70%);
  }

  .user-diary__radio-select-task-wrap:not(:has(.user-diary__radio-select-task--active)) {
    padding-top: 20px;
  }

  .user-diary__radio-select-task:not(.user-diary__radio-select-task--active) {
    transform: scale(0.7);
  }

  .diary-task {
    border-radius: 11px;
    padding: 20px;
    width: 100%;
  }

  .diary-task--active {
    background-color: var(--color-text-important);
  }

  .diary-task__header {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .diary-task__description {
    color:  #1a5585;
    font-weight: 600;
    margin-bottom: 15px;
    width: 60%;
  }

  .diary-task__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .diary-task__workers-list .workers-list__icon {
    border-color: var(--color-background);
  }

  .diary-task--active .diary-task__workers-list .workers-list__icon {
    border-color: var(--color-text-important);
  }

  .diary-task__button-complite {
    background-color: black;
    border: none;
    padding: 15px;
    border-radius: 15px;
    transition: background-color 0.3s;
  }

  .diary-task__button-complite>.button-complite__icon {
    width: 20px;
    fill: #ffffff;
  }
</style>