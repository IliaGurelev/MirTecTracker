import axios from 'axios'
import { defineStore } from 'pinia'
import replaceItemById from '@/utils/replace-element'
import removeById from '@/utils/remove-element'

export const useBriefcaseStore = defineStore('briefcase', {
  state: () => ({
    briefcases: [],
    briefcasesByDashboard: []
  }),
  actions: {
    async fetchBriefcase(dashboardId) {
      try {
        const response = await axios.get(`/briefcase/${dashboardId}`)
        this.briefcases = response.data
      } catch (error) {
        console.error('Ошибка fetching briefcase: ', error)
      }
    },
    async fetchAllBriefcase(dashboards) {
      this.briefcasesByDashboard = []
      for (const dashboard of dashboards) {
        const response = await axios.get(`/briefcase/${dashboard.id}`)
        this.briefcasesByDashboard.push({
          id: dashboard.id,
          name: dashboard.name,
          briefcases: response.data
        })
      }
    },
    async addBriefcase(briefcase) {
      const response = await axios.post('/briefcase', briefcase)

      const dashboard = this.briefcasesByDashboard.find((d) => d.id === briefcase.dashboardId)
      dashboard.briefcases.push(response.data)
    },
    async editBriefcase(briefcase) {
      const response = await axios.put(`/briefcase/${briefcase.id}`, briefcase)
      replaceItemById(this.briefcases, response.data)

      const dashboard = this.briefcasesByDashboard.find((d) => d.id === briefcase.dashboardId)
      replaceItemById(dashboard.briefcases, response.data)
    },
    async removeBriefcase(briefcase) {
      try {
        const response = await axios.delete(`/briefcase/${briefcase.id}`)
        removeById(this.briefcases, briefcase.id)

        const dashboard = this.briefcasesByDashboard.find((d) => d.id === briefcase.dashboardId)
        removeById(dashboard.briefcases, briefcase.id)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
