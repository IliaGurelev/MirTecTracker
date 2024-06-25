import { defineStore } from 'pinia';
import replaceItemById from '@/utils/replace-element';
import removeById from '@/utils/remove-element';

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';
import briefcaseData from '@/mock/briefcase-data.js';
import dasboardData from '@/mock/dashboards-data.js';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [],
    diary: [],
    briefcases: [],
    currentUser: {},
	usersData: [],
	dashboards: [],
	currentDashboard: null,
	inviteCode: {},
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
	fetchWorkers() {
		this.usersData = usersData;
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
    },
    editBriefcase(briefcase) {
      replaceItemById(this.briefcases, briefcase)
    },
    removeBriefcase(id) {
      removeById(this.briefcases, id);
    },
	//Вывод дашбордов
	fetchDashboards() {
		this.dashboards = dasboardData; // Populate dashboards from mock data
	  },
	  setCurrentDashboardById(id) {
		this.currentDashboard = this.dashboards.find((dashboard) => dashboard.id === id);
	  },
	  addDashboard(newDashboard) {
		const id = this.dashboards.length + 1;
		this.dashboards.push({ id, ...newDashboard });
	  },
	  setInviteCode({ dashboardId }) {
		this.inviteCode[dashboardId] = true; // Example: set invite status
	  },
	  getInviteCode(dashboardId) {
		return this.inviteCode[dashboardId] || null;
	  },
  },
});