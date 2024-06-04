<template>
	<transition name="sidebar-slide">
	  <div v-if="isOpen" class="sidebar-overlay" @click="closeSidebar"></div>
	</transition>
	<transition name="sidebar-slide">
	  <div v-if="isOpen" class="sidebar">
		<div v-if="selectedTask">
		  <h2>{{ selectedTask.title }}</h2>
		  <!-- Дополнительная информация о задаче -->
		</div>
	  </div>
	</transition>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isOpen = ref(false);
  const selectedTask = ref(null);
  
  const toggleSidebar = () => {
	isOpen.value = !isOpen.value;
  };
  
  const closeSidebar = () => {
	isOpen.value = false;
  };
  
  // Событие, срабатывающее при выборе задачи
  const selectTask = task => {
	selectedTask.value = task;
	toggleSidebar();
  };
  </script>
  
  <style scoped>
  .sidebar-slide-enter-active, .sidebar-slide-leave-active {
	transition: transform 0.3s ease;
  }
  
  .sidebar-slide-enter, .sidebar-slide-leave-to {
	transform: translateX(0);
  }
  
  .sidebar {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	width: 300px; /* Adjust width as needed */
	background-color: #fff; /* Sidebar background color */
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2); /* Sidebar box shadow */
	z-index: 999; /* Ensure it's above other content */
  }
  
  .sidebar-overlay {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
	z-index: 998; /* Ensure it's below the sidebar but above other content */
  }
  </style>
  