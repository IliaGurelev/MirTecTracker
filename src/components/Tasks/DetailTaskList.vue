<template>
  <div class="task-list">
    <ul class="task-list__list">
      <li v-if="props.tasksList.length === 0">
        <div class="task-list__message">
          <p class="task-list__text">Задач нету, скорее добавьте 
            <RouterLink class="task-list__link" :to="{name: 'Dashboard'}">здесь</RouterLink>
          </p>
        </div>
      </li>
      <li 
        v-for="task in props.tasksList" 
        :key="task.id" 
        class="task-list__item"
      >
      <router-link 
					:to="{ name: 'Dashboard', query: { id: task.dashboardId } }"
					@click="toggleSidebar"
				>
        <DetailTask 
          :task="task"
          class="task-list__task"
          @click="$emit('clickTask', task)"
        />
      </router-link>
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

    &__task {
      max-width: 490px;
      width: 100%;
    }
  }
</style>