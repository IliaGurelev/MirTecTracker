<script setup>
  import PersonalDiary from "./PersonalDiary.vue";
  import PersonalTask from "./PersonalTask.vue";
</script>

<template>
  <main class="user-page">
    <PersonalTask />
    <PersonalDiary />
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