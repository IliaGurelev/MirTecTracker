<template>
	<div>
	  <button @click="openForm" v-if="!isFormOpen">Добавить задачу</button>
	  <transition name="fade">
		<div v-if="isFormOpen" class="overlay" v-click-outside="closeForm" @click.self="closeForm">
		  <form class="form-container" @submit.prevent="addTask">
			<button type="button" class="close-button" @click="closeForm">✖</button>
			<div class="form-container__item">
			  <label for="name">Имя задачи:</label>
			  <input id="name" v-model="newTask.name" required />
			</div>
			<div class="form-container__item">
			  <label for="description">Описание задачи:</label>
			  <input id="description" v-model="newTask.description" required style="resize: none;" />
			</div>
			<div class="form-container__item">
			  <label for="createdAt">Дата создания:</label>
			  <input id="createdAt" type="date" v-model="newTask.createdAt" required disabled />
			</div>
			<div class="form-container__item">
			  <label for="dueDate">Дедлайн:</label>
			  <input id="dueDate" type="date" v-model="newTask.dueDate" required />
			</div>
			<div class="form-container__item">
			  <label for="briefcaseName">Название задачи:</label>
			  <select v-model="newTask.briefcase.name">
				<option disabled value="">Выберите проект</option>
				<option v-for="briefcases in briefcases" :key="briefcases.id" :value="briefcases.name">
				  {{ briefcases.name }}
				</option>
				<option value="custom">Другое...</option>
			  </select>
			  <input v-if="newTask.briefcase.name === 'custom'" v-model="customBriefcaseName" placeholder="Введите название проекта" />
			</div>
			<div class="form-container__item">
			  <label>Цвет задачи:</label>
			  <div class="color-picker">
				<label class="color-option purple">
				  <input type="radio" v-model="newTask.briefcase.color" value="purple" />
				  <span></span>
				</label>
				<label class="color-option blue">
				  <input type="radio" v-model="newTask.briefcase.color" value="blue" />
				  <span></span>
				</label>
				<label class="color-option green">
				  <input type="radio" v-model="newTask.briefcase.color" value="green" />
				  <span></span>
				</label>
				<label class="color-option orange">
				  <input type="radio" v-model="newTask.briefcase.color" value="orange" />
				  <span></span>
				</label>
			  </div>
			</div>
			<button type="submit">Добавить задачу</button>
		  </form>
		</div>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue';
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';
  
  const store = useMainStore();
  const { briefcases } = storeToRefs(store);
  
  onMounted(() => {
	store.fetchBriefcase();
	document.addEventListener('keydown', handleEsc);
  });
  
  onUnmounted(() => {
	document.removeEventListener('keydown', handleEsc);
  });
  
  const getTodayDate = () => {
	const today = new Date();
	return today.toISOString().split('T')[0];
  };
  
  const newTask = ref({
	name: '',
	description: '',
	status: 'open',
	createdAt: getTodayDate(),
	dueDate: '',
	briefcase: {
	  name: '',
	  color: 'purple',
	},
  });
  
  const isFormOpen = ref(false);
  const customBriefcaseName = ref('');
  
  const openForm = () => {
	isFormOpen.value = true;
  };
  
  const closeForm = () => {
	isFormOpen.value = false;
  };
  
  const handleEsc = (event) => {
	if (event.key === 'Escape' && isFormOpen.value) {
	  closeForm();
	}
  };
  
  watch(newTask.value.briefcase, (newVal) => {
	if (newVal.name !== 'custom') {
	  customBriefcaseName.value = '';
	}
  });
  
  const addTask = () => {
	if (newTask.value.briefcase.name === 'custom') {
	  newTask.value.briefcase.name = customBriefcaseName.value;
	}
  
	store.addTask(newTask.value);
  
	console.log('New Task:', newTask.value);
  
	newTask.value = {
	  name: '',
	  description: '',
	  status: 'open',
	  createdAt: getTodayDate(),
	  dueDate: '',
	  briefcase: {
		name: '',
		color: 'purple',
	  },
	};
	customBriefcaseName.value = '';
	closeForm();
  };
  </script>
  
  <style scoped>
  button {
	padding: 0.5rem 1rem;
	background-color: #007bff;
	color: #fff;
	border: none;
	border-radius: 4px;
	cursor: pointer;
  }
  
  button:hover {
	background-color: #0056b3;
  }
  
  input {
	border-radius: 8px;
	padding: 5px;
	width: 70%;
  }
  
  .overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
  }
  
  .form-container {
	background-color: #fff;
	padding: 1rem;
	border-radius: 8px;
	width: 90%;
	max-width: 500px;
	position: relative;
	transition: all 0.3s ease-in-out;
	transform: translateY(0);
	opacity: 1;
  }
  
  .form-container__item {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 10px;
  }
  
  .close-button {
	position: absolute;
	top: 10px;
	right: 10px;
	background: none;
	border: none;
	font-size: 1.5rem;
	cursor: pointer;
  }
  
  .fade-enter-active,
  .fade-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
	opacity: 0;
	transform: translateY(-20px);
  }
  
  .color-picker {
	display: flex;
	gap: 10px;
  }
  
  .color-option {
	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	cursor: pointer;
  }
  
  .color-option input[type="radio"] {
	display: none;
  }
  
  .color-option span {
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
  }
  
  .color-option.purple span {
	background-color: #800080;
  }
  
  .color-option.blue span {
	background-color: #0000ff;
  }
  
  .color-option.green span {
	background-color: #008000;
  }
  
  .color-option.orange span {
	background-color: #ffa500;
  }
  
  .color-option input[type="radio"]:checked + span {
	border: 2px solid #000;
  }
  </style>
  