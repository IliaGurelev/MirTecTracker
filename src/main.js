import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import '@/axiosConfig.js'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)

app.config.errorHandler = (err, vm, info) => {
  console.error('Global Error Handler:', err, info)
  router.push({ name: 'NotFound' })
}

app.mount('#app')
