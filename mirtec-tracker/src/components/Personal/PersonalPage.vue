<script setup>
  import PersonalDiary from "./PersonalDiary.vue";
  import PersonalTask from "./PersonalTask.vue";
</script>

<template>
  <main class="user-page">
    <PersonalTask :class="'user-page__user-tasks'" />
    <PersonalDiary />
  </main>
</template>

<style>
  * {
    font-family: var(--main-font);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    background-color: var(--color-background); 
  }

  .user-page__user-tasks {
      margin-right: 50px;
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
</style>