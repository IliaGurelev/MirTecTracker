import { defineStore } from 'pinia'
import axios from 'axios'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    dashboards: [],
    currentDashboard: null,
    userCurrentDashboard: []
  }),
  actions: {
    async fetchDashboards(userId) {
      const response = await axios.get(`/dashboard/user/${userId}`)
      this.dashboards = response.data
    },
    async fetchUsersByDashboard(idDashboard) {
      const response = await axios.get(`/dashboard/users/${idDashboard}`)
      this.userCurrentDashboard = response.data
    },
    async addDashboard(newDashboard, userId) {
      try {
        const dashboard = {
          name: newDashboard.name,
          color: newDashboard.color,
          userId: userId
        }
        const response = await axios.post('/dashboard', dashboard)
        this.dashboards.push(response.data)
      } catch (error) {
        console.error(error)
      }
    },
    async addUserToDashboard(inviteCode, userId) {
      try {
        const dto = {
          inviteCode: inviteCode,
          userId: userId
        }
        const response = await axios.post('/dashboard/addUserToDashboard', dto)
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    },
    setCurrentDashboardById(id) {
      this.currentDashboard = this.dashboards.find((dashboard) => dashboard.id === id)
    }
  }
})
