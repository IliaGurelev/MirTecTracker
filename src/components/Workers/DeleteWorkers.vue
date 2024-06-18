<template>
	<div class="delete-workers">
	  <div class="dropdown">
		<div class="dropdown-header">
		  <input type="text" v-model="searchQuery" @input="filterWorkers" @focus="openDropdown" placeholder="Поиск исполнителя..." class="search-input">
		  <i class="fa-solid fa-magnifying-glass" v-if="!searchNotFound"></i>
		  <span v-if="searchNotFound">😓</span>
		</div>
		<transition name="slide-fade">
		  <div v-show="isDropdownOpen" class="dropdown-menu">
			<div v-if="filteredWorkers.length" v-for="worker in filteredWorkers" :key="worker.id" class="worker-item" @click="selectWorker(worker)">
			  <template v-if="worker.avatar">
				<img :src="worker.avatar" class="worker-photo" alt="Фото исполнителя">
			  </template>
			  <template v-else>
				<i class="fa-solid fa-user-secret worker-photo"></i>
			  </template>
			  <span>{{ worker.nameUser || worker.name }}</span>
			</div>
			<div v-else class="no-results">Исполнитель не найден</div>
		  </div>
		</transition>
	  </div>
	  <button @click="removeWorker" :disabled="!selectedWorker">Удалить</button>
	</div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
	workerList: {
	  type: Array,
	  required: true,
	},
  });
  
  const emit = defineEmits(['remove', 'close']);
  
  const selectedWorker = ref(null);
  const isDropdownOpen = ref(false);
  const searchQuery = ref('');
  const filteredWorkers = ref([]);
  const searchNotFound = ref(false);
  
  const openDropdown = () => {
	isDropdownOpen.value = true;
  };
  
  const closeDropdown = () => {
	isDropdownOpen.value = false;
  };
  
  const selectWorker = (worker) => {
	selectedWorker.value = worker;
	searchQuery.value = worker.nameUser || worker.name;
	isDropdownOpen.value = false;
  };
  
  const removeWorker = () => {
	if (selectedWorker.value && (selectedWorker.value.nameUser || selectedWorker.value.name)) {
	  emit('remove', selectedWorker.value);
	  selectedWorker.value = null;
	  searchQuery.value = '';
	  filterWorkers(); 
	}
  };
  
  const filterWorkers = () => {
	if (searchQuery.value) {
	  filteredWorkers.value = props.workerList.filter(worker =>
		(worker.nameUser && worker.nameUser.toLowerCase().includes(searchQuery.value.toLowerCase())) ||
		(worker.name && worker.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
	  );
	  searchNotFound.value = filteredWorkers.value.length === 0;
	} else {
	  filteredWorkers.value = props.workerList;
	  searchNotFound.value = false;
	}
  };
  
  watch(() => props.workerList, filterWorkers, { immediate: true });
  
  const closeDeleteWorkers = () => {
	emit('close');
  };
  </script>
  
  <style scoped>
  .delete-workers {
	display: flex;
	flex-direction: column;
  }
  
  .dropdown {
	position: relative;
	display: inline-block;
	width: 100%;
  }
  
  .dropdown-header {
	display: flex;
	align-items: center;
  }
  
  .search-input {
	flex-grow: 1;
	padding: 8px 12px;
	border: 1px solid #ccc;
	border-radius: 4px;
	text-align: left;
  }
  
  .dropdown-header i,
  .dropdown-header span {
	margin-left: 8px;
  }
  
  .dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	max-height: 200px;
	overflow-y: auto;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	z-index: 1000;
  }
  
  .worker-item {
	display: flex;
	align-items: center;
	padding: 8px;
	cursor: pointer;
  }
  
  .worker-item:hover {
	background-color: #f9f9f9;
  }
  
  .worker-photo {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 10px;
  }
  
  .no-results {
	padding: 8px;
	text-align: center;
	color: #888;
  }
  
  button {
	margin-top: 10px;
	padding: 5px 10px;
	cursor: pointer;
	background-color: red;
	color: white;
	border: none;
	border-radius: 4px;
	transition: background-color 0.3s ease;
  }
  
  button:disabled {
	background-color: #ccc;
	cursor: not-allowed;
  }
  
  .slide-fade-enter-active,
  .slide-fade-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
	opacity: 0;
	transform: translateY(-10px);
  }
  </style>