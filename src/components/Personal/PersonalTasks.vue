<template>
  <section class="tasks">
    <WelcomeUser 
      :nameUser="props.currentUser.nameUser" 
      class="tasks__welcome" 
    />
    <div class="tasks__header">
      <h2 class="tasks__title">Мои задачи</h2>
    </div>
    <FilterTask 
      :filters="filters"
      :currentFilter="currentFilter"
      @clickFilter="setFilter"
      v-model:currentFilter="currentFilter"
      class="tasks__filter" 
    />
    <DetailTaskList :tasksList="filteredTasks" />
  </section>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import taskFilter from '@/utils/task-filter';
  import FilterTask from '@/components/Tasks/FilterTask.vue';
  import DetailTaskList from '@/components/Tasks/DetailTaskList.vue'
  import WelcomeUser from '@/components/Personal/WelcomeUser.vue';

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
    tasksUser: {
      type: Array,
      required: true,
    },
  });

  const filters = [
    {
      name: 'Новые',
      value: 'new',
    },
    {
      name: 'На сегодня',
      value: 'today',
    },
    {
      name: 'Предстоящие',
      value: 'upcoming',
    },
    {
      name: 'Закрытые',
      value: 'closed',
    }
  ];

  const currentFilter = ref('new');

  const filteredTasks = computed(() => {
    return taskFilter(currentFilter.value, props.tasksUser);
  });

  const setFilter = (filter) => {
    currentFilter.value = filter;
  }
</script>

<style lang="scss" scoped>
  .tasks {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    &__header {
      margin-bottom: 15px;
    }

    &__title {
      font-weight: 700;
      font-size: 40px;
      padding-left: 15px;
      cursor: default;
    }
  
    &__welcome {
      padding-left: 15px;
    }
  
    &__filter {
      margin-bottom: 15px;
      padding-left: 15px;
    }
  }

</style>