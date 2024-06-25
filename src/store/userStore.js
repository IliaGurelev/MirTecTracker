import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: JSON.parse(localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser')) || { id: '', name: '', avatar: '' },
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    async registrationUser(user) {
      try {
        const response = await axios.post('/user', user);
        await this.loginCurrentUser(response.data.email, response.data.password);
      } catch (error) {
        console.error('Ошибка user reg-post: ', error);
      }
    },
    async loginCurrentUser(email, password, rememberMe = false) {
      try {
        const response = await axios.post('/user/login', { email, password });

        if (rememberMe) {
          this.rememberCurrentUser(response.data);
        } else {
          this.notRememberCurrentUser(response.data);
        }
      } catch (error) {
        console.error('Ошибка login user post: ', error);
      }
    },
    async editCurrentUser(user) {
      const response = await axios.put(`/user/${user.id}`, user);

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
      this.currentUser = { id: '', nameUser: '', avatar: '' };
    },
    rememberCurrentUser(data) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify({
        id: data.id,
        nameUser: data.name,
        avatar: data.avatar,
      }));
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    },
    notRememberCurrentUser(data) {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('currentUser', JSON.stringify({
        id: data.id,
        nameUser: data.name,
        avatar: data.avatar,
      }));
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    },
  },
});