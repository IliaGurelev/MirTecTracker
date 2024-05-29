<template>
  <section class="tasks">
    <WelcomeUser 
      class="tasks__welcome" 
      :nameUser="props.currentUser.name" 
    />
    <div class="tasks__header">
      <h2 class="tasks__title">Мои задачи</h2>
    </div>
    <FilterTask 
      :filters="filters" 
      class="tasks__filter" 
    />
    <DetailTaskList :tasksList="tasksUser" />
  </section>
</template>

<script setup>
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
  })

  const filters = ['Новые', 'На сегодня', 'Предстоящие', 'Закрытые'];
</script>

<style lang="scss" scoped>
  .tasks {
    display: flex;
    flex-direction: column;
    max-width: 500px;

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