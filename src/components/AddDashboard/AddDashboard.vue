<template>
	<div class="add-dashboard-modal">
	  <h2>Добавить новый дашборд</h2>
	  <form @submit.prevent="addDashboard">
		<label>Название:</label>
		<input type="text" v-model="newDashboardName" required>
		<button type="submit">Добавить</button>
	  </form>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useMainStore } from '@/store';
  
  const store = useMainStore();
  const newDashboardName = ref('');
  
  const addDashboard = () => {
	if (!newDashboardName.value.trim()) {
	  alert('Введите название дашборда');
	  return;
	}
	store.addDashboard({
      name: newDashboardName.value.trim(),
      color: generateRandomColor(),
    });
	newDashboardName.value = '';
  };
  
  const generateRandomColor = () => {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  };
  </script>
  
  <style scoped>
  .add-dashboard-modal {
	padding: 20px;
	background-color: #fff;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .add-dashboard-modal h2 {
	margin-bottom: 10px;
  }
  
  .add-dashboard-modal form {
	display: flex;
	flex-direction: column;
  }
  
  .add-dashboard-modal label {
	margin-bottom: 5px;
  }
  
  .add-dashboard-modal input[type="text"],
  .add-dashboard-modal button {
	margin-bottom: 10px;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
  }
  
  .add-dashboard-modal button {
	background-color: #007bff;
	color: #fff;
	border: none;
	cursor: pointer;
  }
  
  .add-dashboard-modal button:hover {
	background-color: #0056b3;
  }
  </style>
  