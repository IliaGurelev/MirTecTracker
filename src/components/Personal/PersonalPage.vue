<template>
  <main class="user-page">
    <PersonalTasks 
      :currentUser="props.currentUser"
      :tasksUser="tasks"
      class="user-page__tasks"
    />
    <PersonalDiary
      :currentUser="props.currentUser"
      :tasks="diary"
      class="user-page__diary"
    />
  </main>
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { store } from '@/store.js';
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
  });

  const tasks = computed(() => {
    return store.tasks;
  })

  const diary = computed(() => {
    return store.diary;
  })

  onMounted(() => {
    store.fetchTasks();
    store.fetchDiary();
  }) 
</script>

<style lang="scss" scoped>
  .user-page {
    display: flex;
    margin-top: 20px;
    margin-left: 50px;

    @media (max-width: 750px) {
      flex-direction: column-reverse;
    }

    @media (max-width: 600px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    &__tasks {
      margin-right: 50px;

      @media (max-width: 750px) {
        margin-right: 0;
      }
    }

     &__diary {
      @media (max-width: 750px) {
        margin-bottom: 20px;
      }
    }
  }
</style>
