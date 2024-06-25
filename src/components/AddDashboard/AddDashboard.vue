<template>
  <div>
    <transition name="slide-fade">
      <div v-if="showModal" class="add-dashboard-modal">
        <h2>Добавление нового дашборда</h2>
        <form @submit.prevent="addDashboard">
          <input
            type="text"
            v-model="newDashboardName"
            required
            placeholder="Введите название..."
          />
          <button type="submit">Добавить</button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMainStore } from '@/store'

const store = useMainStore()
const newDashboardName = ref('')
const showModal = ref(true)

const addDashboard = () => {
  if (!newDashboardName.value.trim()) {
    alert('Введите название дашборда')
    return
  }
  store.addDashboard({
    name: newDashboardName.value.trim(),
    color: generateRandomColor()
  })
  newDashboardName.value = ''
}

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
</script>

<style scoped>
.add-dashboard-modal {
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
}

.add-dashboard-modal h2 {
  margin-bottom: 10px;
  font-size: 18px;
}

.add-dashboard-modal form {
  display: flex;
  flex-direction: column;
}

.add-dashboard-modal label {
  margin-bottom: 5px;
}

.add-dashboard-modal input[type='text'],
.add-dashboard-modal button {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  position: relative;
  padding: 0.5rem 1rem;
  color: #707070;
  border-radius: 8px;
  background-color: var(--bg);
  font-weight: 400;
  overflow: hidden;
  border: 2px solid #dddddd;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    transform 0.5s;
  font-weight: 500;
}

button:hover {
  color: rgb(58, 58, 58);
  background-color: #e4e4e4;
  border: 2px solid #e4e4e4;
  transform: scale(1.05);
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
