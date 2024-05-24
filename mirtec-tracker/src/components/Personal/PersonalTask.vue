<script source>

</script>

<template>
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
</template>

<style>
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
</style>