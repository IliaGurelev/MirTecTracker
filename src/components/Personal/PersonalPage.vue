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
  import { onMounted, computed } from 'vue';
  import { useMainStore } from '@/store.js';
  import { storeToRefs } from 'pinia';
  import PersonalDiary from '@/components/Personal/PersonalDiary.vue'
  import PersonalTasks from '@/components/Personal/PersonalTasks.vue'

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
  });

  const store = useMainStore();

  const {diary, tasks} = storeToRefs(store);

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

    &__tasks {
      margin-right: 50px;
    }

    @media (max-width: 600px) {
      margin-left: 10px;
      margin-right: 10px;
    }

    @media (max-width: 750px) {
      flex-direction: column-reverse;

      &__tasks {
        margin-right: 0;
      } 

      &__diary {
        margin-bottom: 20px;
      }
    }
  }
</style>
