<template>
  <div class="task-list">
    <div
      v-if="props.tasksList.length === 0"
      class="task-list__message"
    >
      <p class="task-list__text">Задач нету, скорее добавьте 
        <a class="task-list__link" href="#dashbord">здесь</a>
      </p>
    </div>
    <ul class="task-list__list">
      <li 
        v-for="task in props.tasksList" 
        :key="task.id" 
        class="task-list__item"
      >
        <DetailTask 
          :task="task"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
  import DetailTask from '@/components/Tasks/DetailTask.vue';

  const props = defineProps({
    tasksList: {
      type: Array,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>
  .task-list {
    &__message { 
      font-weight: 600;
      text-align: center;
      background-color: #ffffff;
      box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
      border-radius: 11px;
      padding: 30px 20px;
    }

    &__link {
      color: var(--color-text-important);
    }

    &__list {
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      padding: 12px;
      max-height: 540px;
      text-decoration: none;
      list-style: none;
      overflow-y: auto;
    }
  }
</style>