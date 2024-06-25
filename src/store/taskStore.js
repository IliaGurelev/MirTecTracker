import { defineStore } from 'pinia'
import axios from 'axios'
import replaceItemById from '@/utils/replace-element'
import removeById from '@/utils/remove-element'

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: []
  }),
  actions: {
    async fetchByDashboardTasks(dashboardId) {
      const response = await axios.get(`/task/${dashboardId}`)
      this.tasks = response.data
    },
    async fetchBriefcaseTasks(briefcaseId) {
      const response = await axios.get(`task/briefcase/${briefcaseId}`)
      this.tasks = response.data
    },
    async fetchAllTasks(dashboards) {
      this.tasks = []
      console.log(dashboards)
      for (const dashboard of dashboards) {
        const response = await axios.get(`/task/${dashboard.id}`)
        this.tasks.push(...response.data)
      }
    },
    async addTask(task) {
      try {
        console.log(task);
        const response = await axios.post('/task', task)
        this.tasks.push(response.data)
      } catch (error) {
        console.error('Ошибка task post: ', error)
      }
    },
    async editTask(task) {
      try {
        const response = await axios.put(`/task/${task.id}`, task)
        replaceItemById(this.tasks, response.data)
      } catch (error) {
        console.error('Ошибка put task: ', error)
      }
    },
    async deleteTask(taskId) {
      try {
        await axios.delete(`/task/${taskId}`)
        removeById(this.tasks, taskId)
      } catch (error) {
        console.error('Ошибка delete task: ', error)
      }
    }
  }
})
