<template>
	<!-- Ваша текущая разметка -->
	<div class="modal" v-if="isDueDateModalOpen">
	  <div class="modal-content">
		<span class="close" @click="closeDueDateModal">&times;</span>
		<p>Введите новую дату дедлайна:</p>
		<input type="date" v-model="newDueDate">
		<button @click="saveDueDate">Сохранить</button>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isDueDateModalOpen = ref(false);
  const newDueDate = ref('');
  
  const editDueDate = () => {
	isDueDateModalOpen.value = true;
	// Предположим, что у вас есть текущая дата дедлайна, которую вы можете использовать для инициализации newDueDate
	newDueDate.value = task.dueDate;
  };
  
  const closeDueDateModal = () => {
	isDueDateModalOpen.value = false;
  };
  
  const saveDueDate = () => {
	// Выполните логику сохранения новой даты дедлайна
	// Например, можно отправить запрос на сервер для обновления даты
	// После успешного сохранения закройте модальное окно
	closeDueDateModal();
  };
  </script>
  
  <style scoped>
  /* Стили для модального окна */
  .modal {
	display: none;
	position: fixed;
	z-index: 1000;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
	background-color: #fefefe;
	margin: 15% auto;
	padding: 20px;
	border: 1px solid #888;
	width: 80%;
  }
  
  .close {
	color: #aaaaaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
	color: #000;
	text-decoration: none;
	cursor: pointer;
  }
  </style>
  