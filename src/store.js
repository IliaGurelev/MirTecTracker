import { defineStore } from 'pinia';

import replaceItemById from '@/utils/replace-element';
import removeById from '@/utils/remove-element';

import { apiClient } from '@/config.js';

// Моковые данные
import usersData from '@/mock/users-data.js';
import tasksData from '@/mock/tasks-data.js';
import tasksDiary from '@/mock/tasks-diary.js';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [],
    diary: [],
    briefcases: [],
    currentUser: {},
    users: [],
  }),
  actions: {
    //Запросы на пользователя
    loginCurrentUser(id) {
      this.currentUser = usersData[id];
    },
    editCurrentUser(user) {
      this.currentUser = user
    },

    //Запросы на дневник
    async fetchDiary() {
      try {
        const response = await apiClient.get('/diary');
        this.diary = response.data;
      } catch (error) {
        console.error('Ошибка get diary: ' + error);
      }
    },
    async addDiaryTask(task) {
      try {
        const response = await apiClient.post('/diary', task);
        this.diary.push(response.data);
      } catch (error) {
        console.error('Ошибка post diary: ' + error);
      }
    },
    async removeDiaryTaskById(id) {
      try {
        const response = await apiClient.delete(`/diary/${id}`);
        removeById(this.diary, id);
      } catch (error) {
        console.error('Ошибка delete diary: ' + error);
      }
    },

    //Запросы на задачи
    fetchTasks() {
		apiClient.get('/taskss')
		  .then(response => {
			this.tasks = response.data;
		  })
		  .catch(error => {
			console.error('Ошибка при загрузке задач:', error);
		  });
	  },
	  addTask(task) {
		apiClient.post('/taskss', task)
		  .then(response => {
			this.tasks.push(response.data);
		  })
		  .catch(error => {
			console.error('Ошибка при добавлении задачи:', error);
		  });
	  },
	  
	  deleteTask(taskId) {
		apiClient.delete(`/taskss/${taskId}`)
		  .then(response => {
			const index = this.tasks.findIndex(task => task.id === taskId);
			if (index !== -1) {
			  this.tasks.splice(index, 1);
			}
		  })
		  .catch(error => {
			console.error('Ошибка при удалении задачи:', error);
		  });
	  },
    //Запросы на портфели
    async fetchBriefcase() {
      try {
        const response = await apiClient.get('/briefcase');
        this.briefcases = response.data;
      } catch (error) {
        console.error(`Ошибка fetching briefcase: `, error);
      }
    },
    async addBriefcase(briefcase) {
      try {
        const response = await apiClient.post('/briefcase', briefcase);
        this.briefcases.push(response.data);
      } catch (error) {
        console.error('Ошибка adding briefcase:', error);
      }
    },
    async editBriefcase(briefcase) {
      try {
        const response = await apiClient.put(`/briefcase/${briefcase.id}`, briefcase)
        replaceItemById(this.briefcases, response.data);
      } catch (error) {
        console.error('Ошибка put briefcase:', error)
      }
    },
    async removeBriefcase(id) {
      try {
        const response = await apiClient.delete(`/briefcase/${id}`)
        removeById(this.briefcases, id);
      } catch (error) {
        console.error('Ошибка delete briefcase:', error);
      }
    }
  },
});
