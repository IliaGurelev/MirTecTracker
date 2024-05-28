<template>
  <section class="user-section">
    <section class="user-block">
      <UserInfo 
        :currentUser="currentUser"
      />
      <div class="settings">
        <i class="fa-solid fa-gear"></i>
      </div>
    </section>
    <section class="user-diary">
      <div class="user-diary__header">
        <CurentDate />
        <button class="add-task-button">
          <i class="fa-regular fa-plus"></i> Добавить задачу
        </button>
      </div>
      <Calendar class="user-diary__calendar" />
      <DiaryTaskList :tasks="tasks"/>
    </section>
  </section>
</template>

<script setup>
  import UserInfo from '@/components/Personal/UserInfo.vue'
  import Calendar from '@/components/UI/Calendar.vue'
  import CurentDate from '@/components/UI/CurrentDate.vue'
  import DiaryTaskList from '@/components/Tasks/DiaryTaskList.vue'

  defineProps({
    currentUser: Object,
    tasks: Array,
  })
</script>

<style scoped>
.user-section {
  max-width: 500px;
}

.user-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.settings {
  cursor: pointer;
}

.user-diary {
  width: 100%;
}

.user-diary__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.add-task-button {
  font-weight: 600;
  color: #ffffff;
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.user-diary .user-diary__add-task-button:hover {
  cursor: pointer;
  background-color: rgb(71, 71, 71);
}

.user-diary__calendar {
  margin-bottom: 20px;
}
</style>
