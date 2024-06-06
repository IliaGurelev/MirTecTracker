import { defineStore } from 'pinia';
import removeById from '@/utils/remove-element.js';
import replaceItemById from '@/utils/replace-element';

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';
import briefcaseData from '@/mock/briefcase-data';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [],
    diary: [],
    briefcases: [],
    currentUser: {},
  }),
  actions: {
    fetchTasks() {
      this.tasks = tasksData;
    },
    fetchDiary() {
      this.diary = tasksDiary;
    },
    fetchBriefcase() {
      this.briefcases = briefcaseData;
    },

    loginCurrentUser(id) {
      this.currentUser = usersData[id];
    },

    addDiaryTask(task) {
      this.diary.push(task);
    },
    removeDiaryTaskById(id) {
      removeById(this.diary, id);
    },

    addBriefcase(briefcase) {
      this.briefcases.push(briefcase);
    },
    editBriefcase(briefcase) {
      replaceItemById(this.briefcases, briefcase)
    },
    removeBriefcase(id) {
      removeById(this.briefcases, id);
    }
  },
});
