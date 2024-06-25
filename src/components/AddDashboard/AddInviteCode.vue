<template>
	<div>
	  <button @click="toggleForm" class="toggle-form-button">
		  <transition name="icon-fade">
			<i v-if="showForm" class="fa-solid fa-user-minus"></i>
			<i v-else class="fa-solid fa-user-plus"></i>
		  </transition>
		{{ showForm ? ' Скрыть' : ' Присоединиться' }}
	  </button>
	  
	  <transition name="fade">
		<div v-if="showForm" class="add-invite-form-container">
		  <h3>Введите код приглашения</h3>
		  <form @submit.prevent="handleInviteSubmit" class="add-invite-form">
			<input v-model="inviteCode" type="text" placeholder="Введите инвайт код" />
			<button type="submit">Добавить</button>
		  </form>
		</div>
	  </transition>
	  
	  <transition name="fade">
		<div v-if="alertMessage" class="alert-message">{{ alertMessage }}</div>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { useMainStore } from '@/store';
  import { ref } from 'vue';
  import dashboardsData from '@/mock/dashboards-data.js';
  
  const store = useMainStore();
  const { dashboards, addDashboard, setInviteCode } = store;
  
  const inviteCode = ref('');
  const alertMessage = ref('');
  const showForm = ref(false); 
  
  const handleInviteSubmit = () => {
	if (inviteCode.value.trim() !== '') {
	  const invitedDashboard = dashboardsData.find(dashboard => dashboard.invite === inviteCode.value.trim());
	  if (invitedDashboard) {
		const existingDashboard = dashboards.find(dashboard => dashboard.id === invitedDashboard.id);
		if (!existingDashboard) {
		  addDashboard(invitedDashboard);
		  setInviteCode({ dashboardId: invitedDashboard.id });
		  inviteCode.value = '';
		  alertMessage.value = `Дашборд "${invitedDashboard.name}" успешно добавлен!`;
		  console.log('Dashboard added:', invitedDashboard);
		} else {
		  alertMessage.value = 'Дашборд уже добавлен.';
		}
	  } else {
		alertMessage.value = 'Дашборд с таким инвайт кодом не найден.';
	  }
	} else {
	  alertMessage.value = 'Введите инвайт код.';
	}
  

	setTimeout(() => {
	  alertMessage.value = '';
	}, 3000);
  };
  
  const toggleForm = () => {
	showForm.value = !showForm.value; 
  };
  </script>
  
  <style scoped>
  .toggle-form-button {
	padding: 8px 16px;
	font-size: 14px;
	background-color: #007BFF;
	color: white;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-bottom: 10px;
	width:100%;
	font-weight:500;
  }
  
  .toggle-form-button:hover {
	background-color: #0056b3;
  }
  
  .add-invite-form-container {
	margin-bottom: 10px;
  }
  
  .add-invite-form {
	display: flex;
	flex-direction: column;
  }
  
  .add-invite-form h3 {
	font-size: 16px;
	margin-bottom: 10px;
  }
  
  .add-invite-form input[type="text"] {
	padding: 8px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 10px;
	margin-top: 10px;
	margin-left: 5px;
	width: 100%;
	font-weight:500;
  }
  
  .add-invite-form button[type="submit"] {
	padding: 8px 16px;
	font-size: 14px;
	border: none;
	background-color: #007BFF;
	color: white;
	border-radius: 4px;
	cursor: pointer;
	margin-left: 5px;
	width:100%;
	font-weight:500;
  }
  
  .add-invite-form button[type="submit"]:hover {
	background-color: #0056b3;
  }
  
  .alert-message {
	margin-top: 10px;
	padding: 10px;
	background-color: #e4e4e4;
	border: 1px solid #e4e4e4;
	color: #000000;
	border-radius: 4px;
	font-weight: 500;
  }
  
  .fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s;
  }
  
  .fade-enter-from, .fade-leave-to {
	opacity: 0;
  }
  </style>
  