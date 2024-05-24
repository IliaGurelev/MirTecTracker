<script setup>

</script>

<template>
  <main class="user-page">
    <section class="user-page__user-tasks user-tasks">
      <div class="user-tasks__welocome">
        <h3 class="user-tasks__welcome-text">Привет, Александр!</h3>
      </div>
      <div class="user-tasks__title">
        <h2 class="user-tasks__title-text">Мои задачи</h2>
      </div>
      <div class="user-tasks__filter-task filter-task">
        <ul class="filter-task__list">
          <li class="filter-task__item filter-task__item--active">
            <p class="filter-task__filter">Новые</p>
          </li>
          <li class="filter-task__item">
            <p class="filter-task__filter">На сегодня</p>
          </li>
          <li class="filter-task__item">
            <p class="filter-task__filter">Предстоящие</p>
          </li>
          <li class="filter-task__item">
            <p class="filter-task__filter">Закрытые</p>
          </li>
        </ul>
      </div>
      <div class="user-tasks__tasks-list tasks-list">
        <ul class="tasks-list__list">
          <li class="tasks-list__item">
            <div class="tasks-list__task-details task-details">
              <div class="task-details__header-task">
                <h3 class="task-details__title">Верстка - главной страницы</h3>
                <div class="task-details__decorative-block">
                  <div class="task-details__tags task__tags">
                    <span class="task__tag task__tag--develop">Разработка</span>
                  </div>
                  <div class="task-details__properity-button properety-button">
                    <div class="properety-button__element"></div>
                    <div class="properety-button__element"></div>
                    <div class="properety-button__element"></div>
                  </div>
                </div>
              </div>
              <p class="task-details__description">Создай полную верстку по макету главной страницы</p>
              <ul class="task-details__workers-list workers-list">
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
              <div class="task-details__progress-task">
                <div class="progress-task__text-block">
                  <label class="progress-task__label" for="progress-task">Прогресс</label>
                  <p class="progress-task__value">3/5</p>
                </div>
                <progress class="progress-task__bar" id="progress-task" max="5" value="3"></progress>
              </div>
              <div class="task-details__task__stats task__stats">
                <span>
                  <time datetime="2023-05-20T15:00:00">
                    <i class="fa-regular fa-calendar-days"></i> 20.05.2024
                  </time>
                </span>
                <div class="status__owners">
                  <span class="status__owner status--open">
                    <i class="fa-solid fa-circle-notch"></i> Открыт
                  </span>
                </div>
              </div>
            </div>
          </li>

          <li class="tasks-list__item">
            <div class="tasks-list__task-details task-details">
              <div class="task-details__header-task">
                <h3 class="task-details__title">Починить зум</h3>
                <div class="task-details__decorative-block">
                  <div class="task-details__tags task__tags">
                    <span class="task__tag task__tag--buy">Продажи</span>
                  </div>
                  <div class="task-details__properity-button properety-button">
                    <div class="properety-button__element"></div>
                    <div class="properety-button__element"></div>
                    <div class="properety-button__element"></div>
                  </div>
                </div>
              </div>
              <p class="task-details__description">На странице товара не работает зум для изображений</p>
              <ul class="task-details__workers-list workers-list">
                <li class="workers-list__item">
                  <div class="workers-list__icon-wrapp">
                    <img class="workers-list__icon" src="../assets/user-icon-3.jpg" alt="">
                  </div>
                </li>
                <li class="workers-list__item">
                  <div class="workers-list__icon-wrapp">
                    <img class="workers-list__icon" src="../assets/user-icon-1.jpg" alt="">
                  </div>
                </li>
              </ul>
              <div class="task-details__progress-task">
                <div class="progress-task__text-block">
                  <label class="progress-task__label" for="progress-task">Прогресс</label>
                  <p class="progress-task__value">10/10</p>
                </div>
                <progress class="progress-task__bar" id="progress-task" max="10" value="10"></progress>
              </div>
              <div class="task-details__task__stats task__stats">
                <span>
                  <time datetime="2023-05-20T15:00:00"><i class="fa-regular fa-calendar-days"></i> 20.05.2024</time>
                </span>
                <div class="status__owners">
                  <span class="status__owner status--close">
                    <i class="fa-regular fa-circle-check"></i> Закрыт
                  </span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
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
                    <i class="button-complite__icon fa-solid fa-check"></i>
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
                    <i class="button-complite__icon fa-solid fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </main>
</template>

<style>
* {
  font-family: var(--main-font);
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--color-background); 
}

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

/* Задачи пользователя */
.user-tasks {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.user-page__user-tasks {
  margin-right: 50px;
}

.user-tasks__welcome-text {
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  font-weight: 400;
  color: #b8b8b8;
  cursor: default;
}

.user-tasks__title-text {
  padding: 0;
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 15px;
  cursor: default;
}

.user-page {
  display: flex;
  margin-top: 20px;
  margin-left: 50px;
}

.filter-task {
  margin-bottom: 15px;
}

.filter-task__list {
  display: flex;
  font-weight: 600;
  list-style: none;
  margin: 0;
  padding: 0;
}

.filter-task__item {
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.filter-task__item:not(:last-child) {
  margin-right: 20px;
}

.filter-task__item--active {
  color: #59b6ff;
}

.filter-task__filter {
  margin: 0;
  padding: 0;
}

.tasks-list__list {
  text-decoration: none;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tasks-list__item:not(:last-child) {
  margin-bottom: 20px;
}

.task-details {
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
  border-radius: 11px;
  padding: 20px;
  position: relative;
}

.task-details__header-task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.task-details__decorative-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-details__tags {
  margin-right: 25px;
  cursor: pointer;
}

.task-details__title {
  font-weight: 600;
  margin: 0;
  padding: 0;
  cursor: pointer;
}

.task-details__description {
  margin-bottom: 20px;
  cursor: pointer;
}

.task-details__description {
  font-weight: 400;
  color: rgb(156, 156, 156);
}

.task-details__workers-list {
  margin-bottom: 20px;
}

.workers-list {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  height: 50px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.task-details__workers-list {
  margin-bottom: 20px;
}

.workers-list__icon-wrapp {
  width: 30px;
  position: relative;
}

.workers-list__icon {
  width: 40px;
  border-radius: 50%;
  border: #ffffff 4px solid;
  cursor: pointer;
}

.task-details__progress-task {
  margin-bottom: 20px;
}

.progress-task__text-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.progress-task__label {
  font-size: 18px;
  font-weight: 600;
}

.progress-task__value {
  font-size: 17px;
  font-weight: 600;
  color: var(--color-text-important);
}

.progress-task__bar {
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
        appearance: none;
  border: none;
  border-radius: 10px;
  height: 10px;
}

.progress-task__bar::-webkit-progress-bar {
  background-color: var(--color-light);
}

.progress-task__bar::-moz-progress-bar {
  background-color: var(--color-light);
}

.progress-task__bar::-webkit-progress-value {
  background: var(--color-text-important);
}

.progress-task__bar::-webkit-progress-bar, .progress-task__bar::-webkit-progress-value {
  border-radius: 10px;
}

.properety-button {
  display: flex;
  cursor: pointer;
}

.properety-button__element {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: rgb(197, 197, 197);
}

.properety-button__element:not(:last-child) {
  margin-right: 3px;
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
  color: #ffffff;
  font-size: 20px;
}

/* АДАПТИВ */

@media (max-width: 750px) {
  .user-page {
    flex-direction: column-reverse;
  }

  .user-page__user-section {
    margin-bottom: 50px;
  }

  .user-page__user-tasks {
    margin-right: 0;
  }
}

@media (max-width: 600px) {
  .user-page {
    margin-left: 10px;
    margin-right: 10px;
  }
}

@media (max-width: 427px) {
  .filter-task__list {
    flex-wrap: wrap;
  }
}

/* -------------- Удалить ---------- */

.task__tags {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task__tag {
  border-radius: 100px;
  padding: 2px 13px;
  font-size: 12px;
  font-weight: 700;
}

.task__tag--develop {
  color: var(--tag-4-text);
  background-color: var(--tag-4);
}

.task__tag--mark {
    color: var(--tag-3-text);
    background-color: var(--tag-3);
  }

.task__tag--buy {
  color: var(--tag-2-text);
  background-color: var(--tag-2);
}

.task__tag--financ {
  color: var(--tag-5-text);
  background-color: var(--tag-5);
}

.task__stats {
  position: relative;
  width: 100%;
  color: var(--light-grey);
  font-size: 12px;
  font-weight: 700;
}

.task-details__task__stats {
  cursor: default;
}

.status__owners {
  position: absolute;
  right: 0;
  bottom: 0;
}

.status__owner{
  border-radius: 100px;
  padding: 2px 13px;
  font-size: 12px;
  font-weight: 700;
}

.status--close {
  color: var(--status-close-text);
  background-color: var(--status-close);
}

.status--open {
  color: var(--status-open-text);
  background-color: var(--status-open);
}

.status--inwork {
  color: var(--status-inwork-text);
  background-color: var(--status-inwork);
}
</style>