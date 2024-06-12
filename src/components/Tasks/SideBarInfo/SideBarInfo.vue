<template>
	<transition name="sidebars">
	  <div v-if="isOpen" class="sidebars" @mouseenter="cancelClose" @mouseleave="restartCloseTimer">
		<div class="sidebars-content">
		  <div class="sidebars__title">
			<div class="sidebars__close" @click="closeSidebar">
			  <i class="fa-solid fa-xmark"></i>
			</div>
			<textarea v-model="localTask.name" @input="updateTask" placeholder="Название задачи"></textarea>
		  </div>
		  <div class="sidebars-content__description">
			<textarea v-model="localTask.description" @input="updateTask" placeholder="Описание задачи"></textarea>
		  </div>
		  <div class="sidebars-content__items">
			<p>Статус: <span><TaskStatus :taskStatus="localTask.status" @update-status="updateTaskStatus" /></span></p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Дата начала:
			  <transition name="input-fade__createdAt">
				<input v-if="isEditcreatedAt" type="date" v-model="localTask.createdAt" @input="updateTask" @blur="toggleEditcreatedAt" class="sidebars-content__items-createdAt" key="input">
			  </transition>
			  <transition name="span-fade__createdAt">
				<span v-if="!isEditcreatedAt" key="span">{{ formatDate(localTask.createdAt) }}</span>
			  </transition>
			  <i class="fa-solid fa-pen" @click="toggleEditcreatedAt"></i>
			</p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Дедлайн:
			  <transition name="input-fade">
				<input v-if="isEditDueDate" type="date" v-model="localTask.dueDate" @input="updateTask" @blur="toggleEditDueDate" class="sidebars-content__items-dueDate" key="input">
			  </transition>
			  <transition name="span-fade">
				<span v-if="!isEditDueDate" key="span">{{ formatDate(localTask.dueDate) }}</span>
			  </transition>
			  <i class="fa-solid fa-pen" @click="toggleEditDueDate"></i>
			</p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Портфель:
			  <transition name="input-fade">
				<div v-if="isEditBriefcase">
				  <SearchBriefcase :briefcases="briefcases" @select="selectBriefcase" />
				</div>
			  </transition>
			  <transition name="span-fade">
				<div v-if="!isEditBriefcase" @click="toggleEditBriefcase" class="task__briefcase" key="span">
				  <TaskBriefcase :briefcase="localTask.briefcase" />
				</div>
			  </transition>
			</p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Исполнители: <WorkerList :workerList="localTask.workers" class="task__workers" />
			  <i class="fa-solid fa-pen" @click="toggleisWorker"></i>
			</p>
		  </div>
		  <transition name="input-fade">
			<div v-if="isWorker" class="sidebars-content__items--AddWork" key="span">
			  <p>Добавление исполнителя:</p>
			  <SearchWorkers @select="selectWorker" />
			  <button class="add-button" @click="addWorker">Добавить</button>
			</div>
		  </transition>
		</div>
	  </div>
	</transition>
	<transition name="sidebars-overlay">
	  <div v-if="isOpen" class="sidebars-overlay" @click="closeSidebar"></div>
	</transition>
  </template>
  
  
  <script setup>
  import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
  import { debounce } from 'lodash-es';
  import formatDate from "@/utils/format-date.js";
  import WorkerList from '@/components/Tasks/WorkerList.vue';
  import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
  import TaskStatus from '@/components/UI/TaskStatusSelect.vue';
  import SearchBriefcase from '@/components/Briefcase/SearchBriefcase.vue'; 
  import SearchWorkers from '@/components/Workers/SearchWorkers.vue';
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';
  
  const store = useMainStore();
  const { briefcases } = storeToRefs(store);
  
  onMounted(() => {
	store.fetchBriefcase();
  });
  const props = defineProps({
	task: Object,
	isOpen: Boolean,
  });
  const emit = defineEmits(['close', 'update-task']);
  
  const localTask = ref({ ...props.task });
  const isEditDueDate = ref(false);
  const isEditcreatedAt = ref(false);
  const isEditBriefcase = ref(false); 
  const isWorker = ref(false); 
  const selectedWorker = ref(null); 
  const closeSidebar = () => {
	emit('close');
  };
  
  const handleEsc = (event) => {
	if (event.key === 'Escape') {
	  closeSidebar();
	}
  };
  

  
  onMounted(() => {
	window.addEventListener('keydown', handleEsc);
  });
  
  onBeforeUnmount(() => {
	window.removeEventListener('keydown', handleEsc);
  });
  
  const debouncedUpdateTask = debounce(() => {
	emit('update-task', localTask.value);
  }, 2000);
  
  const updateTask = () => {
	debouncedUpdateTask();
  };
  
  const updateTaskStatus = (status) => {
	localTask.value.status = status;
	updateTask();
  };
  
  const selectBriefcase = (briefcase) => {
	localTask.value.briefcase = briefcase;
	updateTask();
	isEditBriefcase.value = false;
  };
  
  const toggleEditDueDate = () => {
	isEditDueDate.value = !isEditDueDate.value;
  };
  
  const toggleEditcreatedAt = () => {
	isEditcreatedAt.value = !isEditcreatedAt.value;
  };
  
  const toggleEditBriefcase = () => {
	isEditBriefcase.value = !isEditBriefcase.value;
  };
  const toggleisWorker = () => {
	isWorker.value = !isWorker.value;
  };
  
  const selectWorker = (worker) => {
	selectedWorker.value = worker; 
  };
  
  const addWorker = () => {
	if (selectedWorker.value && !localTask.value.workers.some(w => w.id === selectedWorker.value.id)) {
	  localTask.value.workers.push(selectedWorker.value);
	  updateTask();
	  selectedWorker.value = null; 
	}
  };
  
  watch(props.task, (newTask) => {
	localTask.value = { ...newTask };
  });
  </script>
  
  
  <style scoped>
  button {
	position: relative;
	padding: 0.5rem 1rem;
	color: #707070;
	border-radius: 8px;
	background-color: var(--bg);
	font-weight: 400;
	overflow: hidden;
	border: 2px solid #dddddd;
	transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
	font-weight: 500;
	margin-top: 1rem;
  }
  
  button:hover {
	color: rgb(58, 58, 58);
	background-color: #e4e4e4;
	border: 2px solid #e4e4e4;
	transform: scale(1.05);
  }

  .sidebars {
	position: fixed;
	top: 4rem;
	right: 0;
	width: 350px;
	height: 100%;
	background-color: var(--bg);
	box-shadow: -2px 0 5px rgba(0, 0, 0, 0.329);
	transition: transform 0.2s ease-in-out;
	z-index: 1000;
	transform: translateX(0%);
  }
  
  .sidebars-enter-active, .sidebars-leave-active {
	transition: transform 0.2s ease-in-out;
  }
  
  .sidebars-enter-from, .sidebars-leave-to {
	transform: translateX(100%);
  }
  .sidebars__title textarea{
	width: 100%;
	height: auto;
	padding: 5px;
	margin-top: 5px;
	font-size: 20px;
	border: 2px solid #c9c9c9;
	border-radius: 4px;
	font-weight: 600;
	color: black;
	resize: none;
	border-radius: 8px;
  }
  .sidebars-overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 900;
	transition: opacity 0.3s ease-in-out;
  }
  
  .sidebars-overlay-enter-active, .sidebars-overlay-leave-active {
	transition: opacity 0.3s ease-in-out;
  }
  
  .sidebars-overlay-enter-from, .sidebars-overlay-leave-to {
	opacity: 0;
  }
  
  .sidebars__close {
	float: right;
	font-size: 25px;
	cursor: pointer;
  }
  
  .sidebars-content {
	padding: 20px;
  }
  
  .sidebars-content__description textarea {
	width: 100%;
	height: 80px;
	padding: 10px;
	font-size: 14px;
	color: #666666;
	border: 2px solid #c9c9c9;
	border-radius: 4px;
	resize: none;
  }
  
  
  .sidebars-content__items {
	padding-bottom: 20px;
  }
  .sidebars-content__items--AddWork{
		text-align: center;
	}
  .sidebars-content__items--AddWork p{
	margin-bottom: 10px;
	}
  .sidebars-content__items-dueDate{
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	font-size: 17px;
	border: 2px solid #c9c9c9;
	border-radius: 8px;
	font-weight: 500;
	color: black;
	position: absolute;
  }
  .sidebars-content__items-createdAt{
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	font-size: 17px;
	border: 2px solid #c9c9c9;
	border-radius: 8px;
	font-weight: 500;
	color: black;
	position: absolute;
  }
   input {
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	font-size: 20px;
	border: 2px solid #c9c9c9;
	border-radius: 8px;
	font-weight: 600;
	color: black;
	position: absolute;right: 0;
	z-index: 100;
  }
  .sidebars-content__description textarea {
	width: 100%;
	padding: 5px;
	margin-top: 5px;
	border: 2px solid #c9c9c9;
	margin-bottom: 15px;
	color: #666666;
	font-size: 20px;
	font-weight: 600;
	border-radius: 8px;
  }

  .sidebars p {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	font-weight: 500;
	color: black;
  }

  span{
	cursor:pointer;
  }
  .span-fade__createdAt span{
	right: 5px;
  }

  i {
	color: #666666;
	z-index: 50;
	  transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
  }
  i:hover {
  color: rgb(58, 58, 58);
  transform: scale(1.05);
}

  .sidebars-content__items input[type="date"] {
  width: auto;
}
.input-fade-enter-active {
  transition: opacity 0.6s ease-in;
}
.input-fade-leave-active {
  transition: opacity 0.2s ease-out;
}
.input-fade-enter-from,
.input-fade-leave-to {
  opacity: 0;
}

.span-fade-enter-active {
  transition: opacity 0.2s ease-in;
}
.span-fade-leave-active {
  transition: opacity 0.6s ease-out;
}
.span-fade-enter-from,
.span-fade-leave-to {
  opacity: 0;
}


.input-fade__createdAt-enter-active {
  transition: opacity 0.6s ease-in;
}
.input-fade__createdAt-leave-active {
  transition: opacity 0.2s ease-out;
}
.input-fade__createdAt-enter-from,
.input-fade__createdAt-leave-to {
  opacity: 0;
}

.span-fade__createdAt-enter-active {
  transition: opacity 0.2s ease-in;
}
.span-fade__createdAt-leave-active {
  transition: opacity 0.6s ease-out;
}
.span-fade__createdAt-enter-from,
.span-fade__createdAt-leave-to {
  opacity: 0;
}

  </style>
  