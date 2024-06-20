<template>
	<div>
	  <button @click="openForm">Добавить задачу</button>
	  <transition name="fade">
		<div v-if="isFormOpen" class="overlay" v-click-outside="closeForm" @click.self="closeForm">
		  <form class="form-container" @submit.prevent="addTask">
			<div class="close-button" @click="closeForm">✖</div>
			<div class="form-container__item">
			  <label for="name">Название задачи:</label>
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
			  <label for="briefcaseName">Портфель:</label>
			  <div class="briefcase-selector">
				<SearchBriefcase :briefcases="briefcases" v-model:query="newTask.briefcase.name" @select="handleBriefcaseSelect" ref="searchBriefcase" />
				<span v-if="selectedBriefcaseIcon" :class="`briefcase-icon portfolio-card__icon--${selectedBriefcaseIcon.color}`"></span>
			  </div>
			</div>
			<div class="form-container__item" v-if="newTask.briefcase.name === 'custom'">
			  <input v-model="customBriefcaseName" placeholder="Введите название проекта" />
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
  import SearchBriefcase from '@/components/Briefcase/SearchBriefcase.vue';
  
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
			id: '',
			name: '',
			color: '',
		},
		workers: [],
  });
  
  const isFormOpen = ref(false);
  const customBriefcaseName = ref('');
  const selectedBriefcaseIcon = ref(null);
  
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
	
	const handleBriefcaseSelect = (briefcase) => {
		newTask.value.briefcase = briefcase;
	};
	
	const addTask = () => {
		store.addTask(newTask.value);

		newTask.value = {
			name: '',
			description: '',
			status: 'open',
			createdAt: getTodayDate(),
			dueDate: '',
			briefcase: {
				id: '',
				name: '',
				color: '',
			},
			workers: [],
		};
			customBriefcaseName.value = '';
			selectedBriefcaseIcon.value = null;
			closeForm();
  };
  
  const searchBriefcaseRef = ref(null);
  </script>


  <style lang="scss" scoped>
  button {
	position: relative;
	padding: 0.5rem 1rem;
	color: #707070;
	border-radius: 8px;
	background-color: var(--bg);
	font-weight: 400;
	overflow: hidden;
	border: 2px solid #dddddd;
	transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
	font-weight: 500;
	
  }
  
  button:hover {
	color: rgb(58, 58, 58);
	background-color: #e4e4e4;
	border: 2px solid #e4e4e4;
	transform: scale(1.05);
  }
  
  input {
	border-radius: 8px;
	padding: 5px;
	width: 65%;
	border: 2px solid #c9c9c9;
	font-weight: 500;
  }
  
  label {
	font-weight: 500;
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
	height: 100%;
	max-height: 350px;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.329);
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
	position:absolute;
	padding: 0;
	top: 0px;
	right: 5px;
	font-size: 1.5rem;
	cursor: pointer;
	color: #c9c9c9;
	transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
  }

  .close-button:hover {
	color: black;
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

  .briefcase-icon {
	width: 20px;
	height: 20px;
	margin-left: 8px;
  }
  
  @media only screen and (max-width: 800px) {
	.form-container__item {
	  position: relative;
	  display: flex;
	  flex-direction: column;
	  justify-content: space-between;
	  align-items: center;
	  margin: 5px;
	}
	.form-container {
	max-height: 570px;
  }
  
	label {
	  margin: 15px;
	}
	.search{
		margin-left: 0;
		margin-bottom: 10px;
	}

  }
  @media only screen and (max-width: 552px) {
	input{
		width: 100%;
	}
}
  </style>