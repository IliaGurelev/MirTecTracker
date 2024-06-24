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
    workers: [],

    currentUser: localStorage.getItem('currentUser') || 
    sessionStorage.getItem('currentUser') || 
    { id: '', name: '', avatar: '' },

    token: localStorage.getItem('token') || '',
  }),
  actions: {
    //Запросы на пользователя
    async registrationUser(user) {
      try {
        const response = await apiClient.post('/user', user);
        await this.loginCurrentUser(response.data.email, response.data.password);
      } catch(error) {
        console.error('Ошибка user reg-post: ', error)
      }
    },
    async loginCurrentUser(email, password, rememberMe=false) {
      try {
        const response = await apiClient.post('/user/login', {
          email: email,
          password: password
        });

        if(rememberMe) {
          this.rememberCurrentUser(response.data);
        } else {
          this.notRememberCurrentUser(response.data);
        }
      } catch (error) {
        console.error('Ошибка login user post: ', error);
      }
    },
    async editCurrentUser(user) {
      console.log(user);
      const response = await apiClient.put(`/user/${user.id}`, user);

      localStorage.setItem('currentUser', JSON.stringify({
        id: response.data.id,
        nameUser: response.data.name,
        avatar: response.data.avatar,
      }));
    },
    logoutCurrentUser() {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('currentUser');

      this.token = '';
      this.currentUser = {
        id: '',
        nameUser: '',
        avatar: '',
      };
      this.tasks = [];
      this.diary = [];
      this.briefcases = [];
      this.users = [];
    },
    rememberCurrentUser(data) {
      localStorage.setItem('token', data.token);

      localStorage.setItem('currentUser', JSON.stringify({
        id: data.id,
        nameUser: data.name,
        avatar: data.avatar,
      }));
    },
    notRememberCurrentUser(data) {
      sessionStorage.setItem('token', data.token);

      sessionStorage.setItem('currentUser', JSON.stringify({
        id: data.id,
        nameUser: data.name,
        avatar: data.avatar,
      }));
    },

    //Запросы на дневник
    async fetchDiary() {
      try {
        const currentUser = JSON.parse(this.currentUser);
        const userId = currentUser.id;
  
        const response = await apiClient.get(`/diary?userId=${userId}`);
        this.diary = response.data;

      } catch (error) {
        console.error('Ошибка get diary: ' + error);
      }
    },
    async addDiaryTask(task) {
      try {
        const currentUser = JSON.parse(this.currentUser);
        const userId = currentUser.id;

        const response = await apiClient.post(`/diary?userId=${userId}`, task);
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
      } catch (error) {
        console.error('Ошибка task post: ', error)
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

    //Запросы на исполнителей 
    async fetchWorkers() {
      try {
        const response = await apiClient.get(`/user`);
        this.workers = response.data;
      } catch (error) {
        console.error('Ошибка delete task: ', error)
      }
    },
    async addWorkers(taskId, userId) {
      try{
        const dto = {
          taskId: taskId,
          userId: userId,
        };
        console.log(dto);
        const response = await apiClient.post('/task/addWorker', dto);
      } catch (error) {
        console.error(error);
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
