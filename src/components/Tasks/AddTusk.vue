<template>
	<div>
	  <form @submit.prevent="addTask">
		<label for="tag">Tag:</label>
		<input type="text" v-model="tag" id="tag" required>
		
		<label for="status">Status:</label>
		<input type="text" v-model="status" id="status" required>
		
		<label for="name">Task Name:</label>
		<input type="text" v-model="name" id="name" required>
		
		<label for="date">Task Date:</label>
		<input type="date" v-model="date" id="date" required>
		
		<button type="submit">Add Task</button>
	  </form>
	</div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
	setup() {
	  const tag = ref('');
	  const status = ref('');
	  const name = ref('');
	  const date = ref('');
  
	  const addTask = () => {
		const task = {
		  tag: tag.value,
		  status: status.value,
		  name: name.value,
		  date: date.value
		};
  
		// Здесь нужно передать объект задачи в родительский компонент
  
		// Очистить поля формы после добавления задачи
		tag.value = '';
		status.value = '';
		name.value = '';
		date.value = '';
	  };
  
	  return { tag, status, name, date, addTask };
	}
  };
  </script>
  