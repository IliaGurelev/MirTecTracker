<template>
  <section class="diary">
    <section class="diary__user">
      <UserInfo 
        :currentUser="props.currentUser"
      />
      <div class="diary__settings">
        <i class="fa-solid fa-gear"></i>
      </div>
    </section>
    <section class="diary__tasks">
      <div class="diary__header">
        <CurentDate />
        <button class="diary__button">
          <i class="fa-regular fa-plus"></i> Добавить задачу
        </button>
      </div>
      <Calendar class="diary__calendar" />
      <DiaryTaskList :tasks="props.tasks"/>
    </section>
  </section>
</template>

<script setup>
  import UserInfo from '@/components/Personal/UserInfo.vue'
  import Calendar from '@/components/UI/Calendar.vue'
  import CurentDate from '@/components/UI/CurrentDate.vue'
  import DiaryTaskList from '@/components/Tasks/DiaryTaskList.vue'

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
</script>

<style lang="scss" scoped>
  .diary {
    max-width: 500px;

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
  }
</style>
