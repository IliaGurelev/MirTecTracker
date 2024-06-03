<template>
	<div class="search-bar">
	  <input type="text" placeholder="Поиск задач..." v-model="searchTerm" @input="searchTasks">
	</div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emits = defineEmits(['update:modelValue']);
  
  const searchTerm = ref('');
  
  const searchTasks = () => {
	emits('update:modelValue', searchTerm.value); 
  };
  
  defineProps({
	modelValue: {
	  type: String,
	  default: ''
	}
  });
  
  </script>
  
  
  
  <style scoped>
  .task-search {
	margin-bottom: 1rem;
  }
  
  .task-search input {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #000000;
	border-radius: 4px;
  }
  </style>
  