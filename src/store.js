import { defineStore } from 'pinia';

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [],
    diary: [],
    currentUser: {},
  }),
  actions: {
    fetchTasks() {
      this.tasks = tasksData;
    },
    fetchDiary() {
      this.diary = tasksDiary;
    },
    loginCurrentUser(id) {
      this.currentUser = usersData[id];
    },
    addDiaryTask(task) {
      console.log("Добавлена задача", task);
      this.diary.push(task);
    },
  },
});
