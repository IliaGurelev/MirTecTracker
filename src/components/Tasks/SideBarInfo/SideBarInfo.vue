<template>
	<transition name="sidebars">
	  <div v-if="isOpen" class="sidebars" @mouseenter="cancelClose" @mouseleave="restartCloseTimer">
		<div class="sidebars-content">
			<div class="sidebars__title">		
				<div class="sidebars__close" @click="closeSidebar">
					<i class="fa-solid fa-xmark"></i>
				</div>  
				<h2>{{ task.name }}</h2>
			</div>
			<div class="sidebars-content__description">		  
				<h1>{{task.description}}</h1>
			</div>
			<div class="sidebars-content__items">		  
				<p>Статус: <TaskStatus :taskStatus="props.task.status" /></p>
			</div>
			<div class="sidebars-content__items">		  
				<p>Дата создания:  <span>{{ formatDate(task.createdAt) }}</span></p>
			</div>
			<div class="sidebars-content__items">		  
				<p>Дедлайн:  <span>{{ formatDate(task.dueDate) }}</span></p>
			</div>
			<div class="sidebars-content__items">		  
				<p>Тип задачи:  <TaskBriefcase  :briefcase="props.task.briefcase"  class="task__briefcase"/></p>
			</div>
			<div class="sidebars-content__items">		  
				 <p>Исполнители:   <WorkerList :workerList="props.task.workers"  class="task__workers" /></p>
			</div>
		</div>
	  </div>
	</transition>
	<transition name="sidebars-overlay">
	  <div v-if="isOpen" class="sidebars-overlay" @click="closeSidebar"></div>
	</transition>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import formatDate from "@/utils/format-date.js";
  import WorkerList from '@/components/Tasks/WorkerList.vue';
  import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
  import TaskStatus from '@/components/Tasks/TaskStatus.vue';

  const props = defineProps({
	task: Object,
	isOpen: Boolean
  });
  const emit = defineEmits(['close']);
  
  const closeSidebar = () => {
	emit('close');
  };
  
  const cancelClose = () => {
  };
  
  const restartCloseTimer = () => {
  };
  
  </script>
  
  <style lang="scss" scoped>
  .sidebars {
	position: fixed;
	top:4rem;
	right: 0;
	width: 300px;
	height: 100%;
	background-color: var(--bg);
	box-shadow: -2px 0 5px rgba(0,0,0,0.1);
	transition: transform 0.1s ease-in-out;
	z-index: 1000;
	transform: translateX(0%);
  }
  

  
  .sidebars-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 900;
	transition: opacity .1s linear;
  }
  
  .sidebars__close{
	float: right;
	font-size:25px;
	cursor:pointer;
  }

  .sidebars-content {
	padding: 20px;
  }
  .sidebars-content__description h1{
	margin-bottom: 15px;	
	color: #666666;
	font-size: 20px;
	font-weight: 600;
}
  .sidebars-content__items {
	padding-bottom: 20px;
  }
	
  
  .sidebars p{
	position:relative;
	display: flex;
  	flex-direction: row;
	justify-content: space-between;
	align-items:center;
	font-weight: 500;
	color:black;
}

  .sidebasr-enter-active, .sidebars-leave-active {
	transform: translateX(0);
  }
  
  .sidebars-enter, .sidebars-leave-to {
	transform: translateX(100%);
  }
  
  .sidebars-overlay-enter-active, .sidebars-overlay-leave-active {
	opacity: 0;
  }
  
  .sidebars-overlay-enter, .sidebars-overlay-leave-to {
	opacity: 1;
	
  }
  </style>