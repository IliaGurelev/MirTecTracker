import { defineStore } from 'pinia';

import replaceItemById from '@/utils/replace-element';
import removeById from '@/utils/remove-element';

import { apiClient } from '@/config.js';

// Моковые данные
import tasksData from '@/mock/tasks-data.js';

export const useMainStore = defineStore('main', {
  state: () => ({
    tasks: [],
    diary: [],
    briefcases: [],
    users: [],
    currentUser: localStorage.getItem('currentUser') || 
      `{id: "", 
      nameUser: "", 
      avatar: ""}`, 
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    //Запросы на пользователя
    async registrationUser(user) {
      try {
        const response = await apiClient.post('/user', user);
        
        this.loginCurrentUser(user.email, user.password);
      } catch(error) {
        console.error('Ошибка user reg-post: ', error)
      }
    },
    async loginCurrentUser(email, password) {
      try {
        const response = await apiClient.post('/user/login', {
          email: email,
          password: password
        });

        localStorage.setItem('token', response.data.token);

        localStorage.setItem('currentUser', JSON.stringify({
          id: response.data.id,
          nameUser: response.data.name,
          avatar: response.data.avatar,
        }));
      } catch (error) {
        console.error('Ошибка login user post: ', error);
      }
    },
    editCurrentUser(user) {
      //this.currentUser = user
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
    async fetchTasks() {
      const response = await apiClient.get('/task');
      this.tasks = response.data;
    },
	  async addTask(task) {
      try {
        const response = await apiClient.post('/task', task);
        this.tasks.push(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Ошибка task post: ', error)
      }
	  },
    async editTask(task) {
      try {
        const response = await apiClient.put(`/task/${task.id}`, task);
        replaceItemById(this.tasks, response.data);
      } catch (error) {
        console.error('Ошибка put task: ', error)
      }
    },
	  async deleteTask(taskId) {
      try {
        const response = await apiClient.delete(`/task/${taskId}`)
        removeById(this.tasks, taskId);
      } catch (error) {
        console.error('Ошибка delete task: ', error)
      }
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
