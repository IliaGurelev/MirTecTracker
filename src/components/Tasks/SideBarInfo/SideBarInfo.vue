<template>

	<aside class="task-details" v-if="sidebarOpen" @click="toggleSidebar">
  
	  <div class="sidebar-content">
  
		<h3>{{ selectedTask.name }}</h3>
  
		<p>{{ selectedTask.description }}</p>
  
		<!-- task details content -->
  
	  </div>
  
	</aside>
  
  </template>
  
  
  <script setup>
  
  import { defineProps, ref } from 'vue'
  
  
  const props = defineProps({
  
	selectedTask: Object,
  
	sidebarOpen: Boolean
  
  })
  
  
  const sidebarOpen = ref(props.sidebarOpen)
  
  
  const toggleSidebar = () => {
  
	sidebarOpen.value = !sidebarOpen.value
  
  }
  
  </script>