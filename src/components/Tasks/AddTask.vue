<template>
	<div class="add-task-container">
	  <button @click="toggleForm"><i class="fa-solid fa-plus"></i> Добавить задачу</button>
	  <transition name="slide-fade">
		<div v-if="showAddTaskForm" class="add-task-form" @click.stop>
		  <input type="text" v-model="newTaskName" placeholder="Задача" />
		  <textarea v-model="newTaskDescription" placeholder="Описание задачи"></textarea>
		  <select v-model="newTaskStatus">
			<option value="open">Открыт</option>
			<option value="work">В работе</option>
			<option value="close">Закрыт</option>
		  </select>
		  <input type="date" v-model="newTaskDeadline" placeholder="Делайн" />
		  <select v-model="newTaskBriefcase.name">
			<option value="Разработка">Разработка</option>
			<option value="Маркетинг">Маркетинг</option>
			<option value="Продажи">Продажи</option>
			<option value="Финансы">Финансы</option>
		  </select>
		  <button @click="addTask">Создать задачу</button>
		</div>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['task-added']);
  const newTaskName = ref('');
  const newTaskDescription = ref('');
  const newTaskStatus = ref('open');
  const newTaskDeadline = ref('');
  const newTaskBriefcase = ref({
	name: 'Разработка', 
	color: '#FFFFFF'
  });
  const showAddTaskForm = ref(false);
  
  const toggleForm = () => {
	showAddTaskForm.value = !showAddTaskForm.value;
  };
  
  const addTask = () => {
	if (newTaskName.value.trim() !== '') {
	  const newTask = {
		name: newTaskName.value.trim(),
		description: newTaskDescription.value.trim(),
		status: newTaskStatus.value,
		createdDate: new Date().toISOString().split('T')[0],
		deadline: newTaskDeadline.value,
		briefcase: {
		  name: newTaskBriefcase.value.name.trim(),
		  color: newTaskBriefcase.value.color
		}
	  };
	  emit('task-added', newTask);
	  newTaskName.value = '';
	  newTaskDescription.value = '';
	  newTaskStatus.value = 'open';
	  newTaskDeadline.value = '';
	  newTaskBriefcase.value = { name: 'Разработка', color: '#FFFFFF' };
	  showAddTaskForm.value = false;
	} else {
	  alert('Вы оставили пустое поле!');
	}
  };
  </script>
  
  <style lang = "scss" scoped>


  .slide-fade-enter-active, .slide-fade-leave-active {
	transition: all 0.5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
	transform: translateY(-10px);
	opacity: 0;
  }
  .add-task-container {
	position: relative;
	margin-bottom: 1rem;
  }
  .add-task-form {
	position: absolute;
	top: 100%;
	left: 0;
	background: white;
	padding: 1rem;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	width: 200px;
	border: 1px solid #ddd;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
  }
  .add-task-form input,
  .add-task-form textarea,
  .add-task-form select {
	width: 100%;
	padding: 0.5rem;
	border: 1px solid #ddd;
	border-radius: 4px;
  }
  </style>
  