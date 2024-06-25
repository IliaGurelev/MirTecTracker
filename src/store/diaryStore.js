import { defineStore } from 'pinia';
import axios from 'axios';

export const useDiaryStore = defineStore('diary', {
  state: () => ({
    diary: [],
  }),
  actions: {
    async fetchDiary(userId) {
      try {
        const response = await axios.get(`/diary?userId=${userId}`);
        this.diary = response.data;
      } catch (error) {
        console.error('Ошибка get diary: ' + error);
      }
    },
    async addDiaryTask(userId, task) {
      try {
        const response = await axios.post(`/diary?userId=${userId}`, task);
        this.diary.push(response.data);
      } catch (error) {
        console.error('Ошибка post diary: ' + error);
      }
    },
    async removeDiaryTaskById(id) {
      try {
        await axios.delete(`/diary/${id}`);
        this.diary = this.diary.filter(task => task.id !== id);
      } catch (error) {
        console.error('Ошибка delete diary: ' + error);
      }
    },
  },
});