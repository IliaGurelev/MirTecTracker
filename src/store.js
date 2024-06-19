import { defineStore } from 'pinia';
import replaceItemById from '@/utils/replace-element';
import removeById from '@/utils/remove-element';

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
	usersData: [],
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

	async addTask(task) {
		try {
			const response = await fetch('your-api-endpoint/tasks', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(task),
			});
			if (!response.ok) {
				throw new Error('Failed to add task');
			}
			const newTask = await response.json();
			this.tasks.push(newTask);
		} catch (error) {
			console.error('Error adding task:', error);

		}
	},
	async deleteTask(taskId) {
		try {
			const response = await fetch(`your-api-endpoint/tasks/${taskId}`, {
				method: 'DELETE',
			});
			if (!response.ok) {
				throw new Error('Failed to delete task');
			}
			this.tasks = this.tasks.filter(task => task.id !== taskId);
		} catch (error) {
			console.error('Error deleting task:', error);
		}
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
