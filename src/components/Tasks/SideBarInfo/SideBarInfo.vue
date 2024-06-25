<template>
	<transition name="sidebars">
	  <div v-if="isOpen" class="sidebars" @mouseenter="cancelClose" @mouseleave="restartCloseTimer">
		<div class="sidebars-content" @click.away="handleClickOutside">
		  <div class="sidebars__title">
			<div class="sidebars__close" @click="closeSidebar">
			  <i class="fa-solid fa-xmark"></i>
			</div>
			<h2>{{ props.task.name }}</h2>
			<textarea v-model="editTasks.name" @blur="updateTask" placeholder="Название задачи"></textarea>
		  </div>
		  <div class="sidebars-content__description">
			<textarea v-model="editTasks.description" @blur="updateTask" placeholder="Описание задачи"></textarea>
		  </div>
		  <div class="sidebars-content__items">
			<p>Статус: <EditTaskStatus :taskStatus="editTasks.status" @update-status="updateTaskStatus" /></p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Дата начала:
				  <span class = "span-fade__createdAt">{{ formatDate(props.task.createdAt) }}</span>
			</p>
		  </div>
		  <div class="sidebars-content__items">
			<p>Дедлайн:
			  <transition name="input-fade">
				<input v-if="isEditDueDate" type="date" v-model="props.task.dueDate" @input="updateTask" @blur="closeInput('dueDate')" class="sidebars-content__items-dueDate" key="input">
			  </transition>
			  <transition name="span-fade">
				<div v-if="!isEditDueDate" class="editable-field" key="span">
				  <span @click="toggleEdit('dueDate')">{{ formatDate(props.task.dueDate) }}</span>
				  <i class="fa-solid fa-pen" @click="toggleEdit('dueDate')"></i>
				</div>
			  </transition>
			</p>
			<transition name="message-fade">
            <div v-if="isInvalidDueDate" class="sidebars-content__items">
              <p class="error-message"><i class="fa-solid fa-bug"></i> Дедлайн введен не полностью!</p>
            </div>
          </transition>
		  </div>
		  <div class="sidebars-content__items">
			<p>Портфель:
			  <transition name="input-fade">
				<div v-if="isEditBriefcase">
				  <SearchBriefcase :briefcases="briefcases" @select="selectBriefcase" @blur="closeInput('briefcase')" />
				</div>
			  </transition>
			  <transition name="span-fade">
				<div v-if="!isEditBriefcase" class="task__briefcase editable-field" key="span">
				  <TaskBriefcase :briefcase="props.task.briefcase" />
				  <i class="fa-solid fa-pen" @click="toggleEdit('briefcase')"></i>
				</div>
			  </transition>
			</p>
		  </div>
		  <transition name="message-fade">
			<div v-if="isBriefcaseChanged" class="sidebars-content__items">
			  <p class="success-message"><i class="fa-solid fa-check"></i> Портфель успешно изменен!</p>
			</div>
		  </transition>
		  <div class="sidebars-content__items">
			<p>Исполнители:
			  <div class="editable-field">
				<WorkerList :workerList="props.task.workers" class="task__workers" />
				<i class="fa-solid fa-pen" @click="toggleisWorker"></i>
				<i class="fa-solid fa-trash" @click="toggleRemoveWorker"></i>
			  </div>
			</p>
		  </div>
		  <transition name="input-fade">
			<div v-if="isWorker" class="sidebars-content__items--AddWork" key="span">
			  <div class="update">
				<p>Добавление исполнителя:</p>
				<i class="fa-solid fa-xmark" @click="closeAddWorker"></i>
			  </div>
			  <SearchWorkers :workers="props.workers" @select="handleWorkerSelect" @update="updateQuery" />
			  <button class="add-button" @click="addWorker">Добавить</button>
			</div>
		  </transition>
		  <transition name="message-fade">
			<div v-if="isWorkerAdded" class="sidebars-content__items">
			  <p class="success-message"><i class="fa-solid fa-check"></i> Исполнитель успешно добавлен!</p>
			</div>
		  </transition>
		  <transition name="message-fade">
			<div v-if="isWorkerAlreadyAssigned" class="sidebars-content__items">
			  <p class="error-message"><i class="fa-solid fa-bug"></i> Такой исполнитель уже добавлен!</p>
			</div>
		  </transition>
		  <transition name="input-fade">
			<div v-if="isRemoveWorker" class="sidebars-content__items--RemoveWork" key="span">
			  <div class="update">
				<p>Удаление исполнителя:</p>
				<i class="fa-solid fa-xmark" @click="closeRemoveWorker"></i>
			  </div>
			  <DeleteWorkers :workerList="props.task.workers" @remove="handleRemoveWorker" @select="handleRemoveWorker" />
			</div>
		  </transition>
		  <transition name="message-fade">
			<div v-if="isWorkerRemoved" class="sidebars-content__items">
			  <p class="success-message"><i class="fa-solid fa-check"></i> Исполнитель успешно удален!</p>
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
  import { ref, watch, defineEmits, defineProps, onMounted, onBeforeUnmount, watchEffect } from 'vue';
  import { debounce } from 'lodash-es';
  import formatDate from "@/utils/format-date.js";
  import WorkerList from '@/components/Tasks/WorkerList.vue';
  import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
  import TaskStatus from '@/components/UI/TaskStatusSelect.vue';
  import SearchBriefcase from '@/components/Briefcase/SearchBriefcase.vue';
  import SearchWorkers from '@/components/Workers/SearchWorkers.vue';
  import DeleteWorkers from '@/components/Workers/DeleteWorkers.vue';
  import EditTaskStatus from '@/components/UI/TaskStatusSelect.vue';
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';

const store = useMainStore();
const { briefcases } = storeToRefs(store);
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  task: {
    type: Object,
    required: true,
  },
  workers: {
    type: Array,
    required: true,
  }
});

const emitEvents = defineEmits(['close', 'update-task']);

const editTasks = ref(props.task);

const isEditDueDate = ref(false);
const isEditCreatedAt = ref(false);
const isEditBriefcase = ref(false);
const isBriefcaseChanged = ref(false);
const isWorker = ref(false);
const isRemoveWorker = ref(false);
const isWorkerAdded = ref(false);
const isWorkerAlreadyAssigned = ref(false);
const isWorkerRemoved = ref(false);
const selectedWorker = ref(null);
const isInvalidDueDate = ref(false);


const Inputs = () => {
  isEditDueDate.value = false;
  isEditCreatedAt.value = false;
  isEditBriefcase.value = false;
  isWorker.value = false;
  isRemoveWorker.value = false;
};

const handleEsc = (event) => {
  if (event.key === 'Escape') {
    closeSidebar();
  }
};

const updateTask = debounce(() => {
	
  emitEvents('update-task', props.task);
  store.editTask(editTasks.value);
}, 1000);

const updateTaskStatus = (status) => {
  editTasks.value.status = status;
  updateTask();
};

const updateQuery = debounce((query) => {
  console.log(query);
  store.updateQuery(query);
}, 300);

const toggleEdit = (field) => {
  if (field === 'dueDate') {
    isEditDueDate.value = !isEditDueDate.value;
  } else if (field === 'createdAt') {
    isEditCreatedAt.value = !isEditCreatedAt.value;
  } else if (field === 'briefcase') {
    isEditBriefcase.value = !isEditBriefcase.value;
  }
};
const validateDate = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) && dateString.length === 10; 
};
const toggleisWorker = () => {
  isWorker.value = !isWorker.value;
  isRemoveWorker.value = false;
};

const toggleRemoveWorker = () => {
  isRemoveWorker.value = !isRemoveWorker.value;
  isWorker.value = false;
};

const closeInput = (field) => {
  if (field === 'dueDate') {
    isEditDueDate.value = false;
  } else if (field === 'createdAt') {
    isEditCreatedAt.value = false;
  } else if (field === 'briefcase') {
    isEditBriefcase.value = false;
  }
};

const selectBriefcase = (briefcase) => {
  editTasks.value.briefcase = briefcase;
  updateTask();
  showBriefcaseChangedMessage();
  isEditBriefcase.value = false;
};

const showBriefcaseChangedMessage = () => {
  isBriefcaseChanged.value = true;
  setTimeout(() => {
    isBriefcaseChanged.value = false;
  }, 2000);
};

const handleWorkerSelect = (worker) => {
  selectedWorker.value = worker;
};

const addWorker = () => {
  if (selectedWorker.value && !editTasks.value.workers.some(worker => worker.id === selectedWorker.value.id)) {
    store.addWorkers(props.task.id, selectedWorker.value.id)

    editTasks.value.workers.push(selectedWorker.value);
    updateTask();
    showWorkerAddedMessage();
    selectedWorker.value = null;
  } else {
    showWorkerAlreadyAssignedMessage();
  }
};

const showWorkerAddedMessage = () => {
  isWorkerAdded.value = true;
  setTimeout(() => {
    isWorkerAdded.value = false;
  }, 2000);
};

const showWorkerAlreadyAssignedMessage = () => {
  isWorkerAlreadyAssigned.value = true;
  setTimeout(() => {
    isWorkerAlreadyAssigned.value = false;
  }, 2000);
};

const removeWorker = (worker) => {
  editTasks.value.workers = editTasks.value.workers.filter(w => w.id !== worker.id);
  updateTask();
  showWorkerRemovedMessage();
};

// обработка события remove
const handleRemoveWorker = (worker) => {
  store.deleteWorkers(props.task.id, worker.id)
  removeWorker(worker);
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    cancelClose();
  } else {
    restartCloseTimer();
  }
});

const showWorkerRemovedMessage = () => {
  isWorkerRemoved.value = true;
  setTimeout(() => {
    isWorkerRemoved.value = false;
  }, 2000);
};

const cancelClose = () => {
  clearTimeout(timeoutId.value);
};

const restartCloseTimer = () => {
  timeoutId.value = setTimeout(() => {
    closeSidebar();
  }, 30000);
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.sidebars-content')) {
    closeSidebar();
  }
};

const closeAddWorker = () => {
  isWorker.value = false;
};

const closeRemoveWorker = () => {
  isRemoveWorker.value = false;
};

const closeSidebar = () => {
  emitEvents('close');
  Inputs();
};

let timeoutId = ref(null);

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    cancelClose();
  } else {
    restartCloseTimer();
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleEsc);
});

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc);
});

watchEffect(() => {
  editTasks.value = props.task;
})
</script>

  
  <style scoped>
  .update{
	margin: 10px;
	position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  }
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

.error-message, .success-message {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border-radius: 4px;
}

.error-message {
  color: red;
  background-color: #ffebee;
}
.error-message i {
  margin-right: 0.5rem;
  animation: checkmark 2s ease-in-out;
  color: #b63434;
}
.success-message i {
  margin-right: 0.5rem;
  animation: checkmark 1s ease-in-out;
  color: #39b634;
}

@keyframes checkmark {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.success-message {
  color: green;
  background-color: #e8f5e9;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  font-weight: 500;
  animation: fadeOut 4s ease-in-out forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
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

.sidebars__title textarea {
  width: 100%;
  height: auto;
  padding: 5px;
  margin-top: 5px;
  font-size: 20px;
  border: 1px solid #dddddd;
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

.sidebars__close {
  float: right;
  font-size: 25px;
  cursor: pointer;
}

.sidebars-content {
  padding: 20px;
}

.sidebars-content__items {
  padding: 1rem 0;
  border-bottom: 1px solid #ddddddc2;
}

.sidebars-content__items:last-child {
  border-bottom: none;
}

.sidebars-content__items--AddWork {
  text-align: center;
}

.sidebars-content__items--AddWork p {
  margin-bottom: 10px;
}

.sidebars-content__items-dueDate {
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

.sidebars-content__items-createdAt {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  font-size: 17px;
  border: 2px solid #c9c9c9;
  border-radius: 8px;
  font-weight: 500;
  color: black;
  position: absolute;
  right: 0;
  z-index: 100;
}
.task__briefcase{
  margin-top: 5px;
  position: absolute;
  right: 0;
  z-index: 100;
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
  position: absolute;
  right: 0;
  z-index: 100;
}

.sidebars-content__description textarea {
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  border: 1px solid #ddddddc2;
  margin-bottom: 15px;
  color: #666666;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  resize: none;
}

.sidebars p {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  color: black;
  text-align: center;
}

span {
  cursor: pointer;
}

.span-fade__createdAt {
  cursor: default;
}

i {
  color: #666666;
  z-index: 50;
  transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
  margin-left: 1rem;
}

i:hover {
  color: rgb(58, 58, 58);
  transform: scale(1.05);
}

.sidebars-content__items input[type="date"] {
  width: auto;
}

.sidebars-overlay-enter-active, .sidebars-overlay-leave-active {
  transition: opacity 0.2s ease-in-out;
}

sidebars-overlay-enter-from, .sidebars-overlay-leave-to {
  opacity: 0;
}

.editable-field {
  display: flex;
  align-items: center;
}

.editable-field span {
  margin-right: 10px;
}

.input-fade-enter-active,
.input-fade-leave-active,
.input-fade__createdAt-enter-active,
.input-fade__createdAt-leave-active,
.span-fade-enter-active,
.span-fade-leave-active,
.span-fade__createdAt-enter-active,
.span-fade__createdAt-leave-active,
.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.3s ease;
}

.input-fade-enter-from,
.input-fade-leave-to,
.input-fade__createdAt-enter-from,
.input-fade__createdAt-leave-to,
.span-fade-enter-from,
.span-fade-leave-to,
.span-fade__createdAt-enter-from,
.span-fade__createdAt-leave-to,
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
}
</style>

  