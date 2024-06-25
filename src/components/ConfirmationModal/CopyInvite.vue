<template>
	<div>
		<div :class="['modal-overlay', { show: isOpen }]" @click="closeModal">
		<div class="modal-content" @click.stop>
		  <h2>{{ dashboardName }}</h2>
		  <p>Инвайт код: <span class="invite-code">{{ inviteCode }}</span></p>
		  <button @click="copyInviteCode">Копировать код</button>
		  <button @click="closeModal">Закрыть</button>
		  <span class="close-icon" @click="closeModal"><i class="fa-solid fa-xmark"></i></span>
		</div>
		<div v-if="isCopied" class="toast show">Код был скопирован!</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
	isOpen: Boolean,
	dashboardName: String,
	inviteCode: String,
  });
  const emit = defineEmits(['close']);
  
  const internalIsOpen = ref(props.isOpen);  
  
  const openModal = () => {
	internalIsOpen.value = true;
  };
  
  const closeModal = () => {
	internalIsOpen.value = false;
	emit('close');
  };
  
  const isCopied = ref(false);
  
  const copyInviteCode = () => {
	navigator.clipboard.writeText(props.inviteCode).then(() => {
	  isCopied.value = true;
	  setTimeout(() => {
		isCopied.value = false;
	  }, 3000);
	}).catch(err => {
	  console.error('Failed to copy invite code:', err);
	});
  };
  
  watch(() => props.isOpen, (newVal) => {
	internalIsOpen.value = newVal;
	if (!newVal) {
	  isCopied.value = false;
	}
  });
  </script>
  
  <style scoped>
  .modal-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  
  .modal-overlay.show {
	opacity: 1;
	visibility: visible;
  }
  
  .modal-content {
	background: white;
	padding: 2rem;
	border-radius: 8px;
	text-align: center;
	position: relative;
	transform: translateY(-20px);
	transition: transform 0.3s ease;
  }
  
  .modal-overlay.show .modal-content {
	transform: translateY(0);
  }
  
  .invite-code {
	font-weight: bold;
	color: #333;
  }
  
  button {
	margin-top: 1rem;
	padding: 0.5rem 1rem;
	border: none;
	background: #007bff;
	color: white;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 0.3s ease, transform 0.2s ease;
	margin: 10px;
	font-weight: 500;
  }
  
  button:hover {
	background: #0056b3;
	transform: scale(1.05);
  }
  
  .close-icon {
	position: absolute;
	top: 10px;
	right: 10px;
	font-size: 1.5rem;
	cursor: pointer;
	transition: color 0.3s ease;
  }
  
  .close-icon:hover {
	color: red;
  }
  
  .toast {
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%) translateY(20px);
	background: #e1f7e1;
	color: #267523;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	opacity: 0;
	visibility: hidden;
	transition: opacity 0.5s ease, visibility 0.5s ease, transform 0.5s ease;
  }
  
  .toast.show {
	opacity: 1;
	visibility: visible;
	transform: translateX(-50%) translateY(0);
  }
  </style>
  