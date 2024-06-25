import axios from 'axios';
import { defineStore } from 'pinia';

export const useWorkerStore = defineStore('worker', {
  state: () => ({
    workers: [],
  }),
  actions: {
    async fetchWorkers() {
      try {
        const response = await axios.get(`/user`);
        this.workers = response.data;
      } catch (error) {
        console.error('Ошибка fetching workers: ', error);
      }
    },
    async addWorkerToTask(taskId, userId) {
      try {
        const dto = {
          taskId: taskId,
          userId: userId,
        };
        await axios.post('/task/addWorker', dto);
      } catch (error) {
        console.error('Ошибка adding worker to task: ', error);
      }
    },
    async removeWorkerFromTask(taskId, userId) {
      try {
        const dto = {
          taskId: taskId,
          userId: userId,
        };
        await axios.delete('/task/removeWorker', { data: dto });
      } catch (error) {
        console.error('Ошибка removing worker from task: ', error);
      }
    },
  },
});