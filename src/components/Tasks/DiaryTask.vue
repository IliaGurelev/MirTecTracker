<template>
  <div class="user-diary__diary-task diary-task" :class="{ 'diary-task--active': isActive}">
    <div class="diary-task__header">
      <p class="diary-task__title">Собрание</p>
      <time datetime="09:00">9:00</time>
    </div>
    <div class="diary-task__main">
      <p class="diary-task__description">Обсуждение с командой о задачах на сегодня</p>
      <div class="diary-task__content">
        <WorkerList :class="'diary-task__workers-list'" />
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
</template>

<script setup>
  import { ref, defineProps} from 'vue';
  import WorkerList from './WorkerList.vue';
  
  defineProps(['isActive']);
</script>

<style scoped>
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

  .diary-task__button-complite:hover {
    cursor: pointer;
    background-color: rgb(71, 71, 71);
  }
</style>