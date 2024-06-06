<template>
	<button @click="deleteTask" class="delete-button">
	  <i class="fa-regular fa-trash-can"></i>
	</button>
  </template>
  
  <script setup>
  import { useMainStore } from '@/store';
  
  const props = defineProps({
	taskId: Number,
  });
  
  const store = useMainStore();
  
  const deleteTask = () => {
	store.deleteTask(props.taskId);
  };
  </script>
  
  <style scoped>
  .delete-button {
	background: transparent;
	border: 0;
	color: var(--light-grey);
	font-size: 17px;
	cursor: pointer;
	float: right;
	transition: color 0.2s linear;
  }
  
  .delete-button:hover {
	color: var( --text);
  }
  </style>
  