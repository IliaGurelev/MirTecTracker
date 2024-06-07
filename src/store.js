import { defineStore } from 'pinia';

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';
import briefcaseData from '@/mock/briefcase-data.js';


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
      this.diary = this.diary.filter((task) => task.id !== id)
    },

	addTask(task) {
		this.tasks.push({ ...task, id: Date.now() });
	  },
	deleteTask(taskId) {
		const index = this.tasks.findIndex(task => task.id === taskId);
		if (index !== -1) {
		  this.tasks.splice(index, 1);
		}
		console.log(taskId)
	  },
  
    addBriefcase(briefcase) {
      this.briefcases.push(briefcase);
    }

  },
});
