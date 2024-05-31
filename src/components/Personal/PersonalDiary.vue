<template>
  <section class="diary">
    <section class="diary__user">
      <UserInfo 
        :avatarUser="props.currentUser.avatar"
        :nameUser="props.currentUser.nameUser"
      />
      <div class="diary__settings">
        <i class="fa-solid fa-gear"></i>
      </div>
    </section>
    <section class="diary__tasks">
      <div class="diary__header">
        <CurentDate :currentDate="activeDate" />
        <div class="diary__wrapper">
          <button 
            @click="setActivePopup"
            class="diary__button"
          >
            <i class="fa-regular fa-plus"></i> Добавить задачу
          </button>
          <DiaryTaskAddPopup 
            v-if="isActivePopup"
            :defaultDate="activeDate"
            @submitForm="addToDiary"
            class="diary__popup-add-task" 
          />
        </div>
      </div>
      <UserCalendar 
        :currentDate="activeDate"
        :setDate="setCurrentDate"
        :plannedDates="planedDates"
        class="diary__calendar" 
      />
      <DiaryTaskList 
        :tasks="tasksForDay"
        @click-complite="removeTask"
      />
    </section>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useMainStore } from '@/store'
  import taskFilter from '@/utils/task-filter'
  import UserInfo from '@/components/Personal/UserInfo.vue'
  import UserCalendar from '@/components/UI/UserCalendar.vue'
  import CurentDate from '@/components/UI/CurrentDate.vue'
  import DiaryTaskList from '@/components/Tasks/DiaryTaskList.vue'
  import DiaryTaskAddPopup from '@/components/Tasks/DiaryTaskAddPopup.vue';

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    },
    tasks: {
      type: Array,
      required: true,
    },
  })

  const store = useMainStore();

  const activeDate = ref(new Date());

  const isActivePopup = ref(false);

  const tasksForDay = computed(() => {
    return taskFilter('today', props.tasks, activeDate.value);
  });

  const planedDates = computed(() => {
    return props.tasks.map(task => task.dueDate);
  })

  const setCurrentDate = (date) => {
    activeDate.value = date;
  }

  const setActivePopup = () => {
    isActivePopup.value = !isActivePopup.value;
  }

  const addToDiary = (task) => {
    setActivePopup();
    store.addDiaryTask(task);
  }

  const removeTask = (id) => {
    store.removeDiaryTaskById(id);
  }
</script>

<style lang="scss" scoped>
  .diary {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    &__user {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
    }

    &__settings {
      cursor: pointer;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &__button {
      font-weight: 600;
      color: #ffffff;
      background-color: black;
      border: none;
      border-radius: 10px;
      padding: 15px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    &__button:hover {
      cursor: pointer;
      background-color: rgb(71, 71, 71);
    }

    &__calendar {
      margin-bottom: 20px;
    }
    
    &__wrapper {
      position: relative;
    }

    &__popup-add-task {
      position: absolute;
      top: 115%;
      right: 0;
      z-index: 1;
    }
  }
</style>
