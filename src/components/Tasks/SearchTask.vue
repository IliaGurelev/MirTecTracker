<template>
	<div>
	  <input type="text" v-model="searchQuery" placeholder="Поиск задач">
	  <div v-if="searchQuery.trim() === ''">
		<div v-for="task in tasks" :key="task.id">
		  <Task :item="task" @select-task="selectTask" @delete-task="deleteTask(task.id)" />
		</div>
	  </div>
	  <div v-else-if="foundTasks.length > 0">
		<div v-for="task in foundTasks" :key="task.id">
		  <Task :item="task" @select-task="selectTask" @delete-task="deleteTask(task.id)" />
		</div>
	  </div>
	  <div v-else>
		<p>Задачи не найдены</p>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, computed, watch } from 'vue';
  import Task from '@/components/Tasks/Task.vue';
  
  const props = defineProps({
	tasks: Array,
  });
  
  const searchQuery = ref('');
  const foundTasks = ref([]);
  
  const searchTasks = () => {
	const query = searchQuery.value.trim().toLowerCase();
	if (query === '') {
	  foundTasks.value = [];
	  return;
	}
	const filtered = props.tasks.filter(task =>
	  task.name.toLowerCase().includes(query)
	);
	foundTasks.value = filtered;
  };
  
  const deleteTask = taskId => {
	const index = props.tasks.findIndex(task => task.id === taskId);
	if (index !== -1) {
	  props.tasks.splice(index, 1);
	}
	const foundIndex = foundTasks.value.findIndex(task => task.id === taskId);
	if (foundIndex !== -1) {
	  foundTasks.value.splice(foundIndex, 1);
	}
  };
  
  const selectTask = task => {
	emit('select-task', task);
  };
  
  watch(searchQuery, searchTasks);
  </script>
  