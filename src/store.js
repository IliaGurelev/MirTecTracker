import { reactive } from "vue";

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';

export const store = reactive({
  tasks: [],
  diary: [],
  currentUser: {},

  fetchTasks() {
    this.tasks = tasksData;
  },

  fetchDiary() {
    this.diary = tasksDiary;
  },

  loginCurrentUser(id) {
    this.currentUser = usersData[id];
  },
})
