<template>
	<div 
	
	  :key="item.id"
	  class="task"
	  :draggable="true"
	  @dragstart="startDrag($event, item)"
	  @drop="onDropSort($event, item)"
	  @dragover.prevent="onOver($event)"
	  @dragleave.prevent="onLeave($event)"
	>
	  <div class='tasktags'>
		<span class='task__tag task__tag--green' :style="getStyle(item.briefcase.name)">{{ item.briefcase.name }}</span>
	  </div>
	  <p>{{ item.name }}</p>
	  <div class='task__stats'>
		<span>
		  <time :datetime="item.createdAt">
			<i class='fa-regular fa-calendar-days'></i> {{ formatDate(item.createdAt) }}
		  </time>
		</span>
		<div class='status__owners'>
		  <span
			class="status__owner"
			v-for="(status, statusIndex) in statuses"
			:key="statusIndex"
			:class="`status--${status.class}`"
			v-if="item.status === globaltype"
		  >
			<i :class="`fa-regular ${status.icon}`"></i> {{ status.text }}
		  </span>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import formatDate from "@/utils/fomrat-date.js";
  
  const props = defineProps({
	item: Object,
	statuses: Array,
	globaltype: String,
	sort: Boolean,
  });
  
  const searchQuery = ref('');
  
  const displayedTasks = computed(() => {
	if (!searchQuery.value) {
	  return props.items;
	}
	const filtered = props.items.filter(item =>
	  item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
	);
	return filtered.length > 0 ? filtered : props.items;
  });
  
  const startDrag = (event, item) => {
		event.dataTransfer.dropEffect = 'move';
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('itemId', item.id);
  };
  
  const onDropSort = (event, droppedItem) => {
		if (!props.sort) return;
		onLeave(event);
		const { item, itemId } = getItemById(event);
		const itemPosition = props.items.findIndex(item => item.id == itemId);
		const droppedItemPosition = props.items.findIndex(item => item.id == droppedItem.id);
		props.items.splice(itemPosition, 1);
		props.items.splice(droppedItemPosition, 0, item);
  };
  
  const onOver = event => (props.sort ? event.target.classList.add('on-over') : '');
  const onLeave = event => (props.sort ? event.target.classList.remove('on-over') : '');
  
  const getStyle = (tag) => {
		if (tag === 'Разработка') {
			return { backgroundColor: '#f2dcf5', color: '#a734ba' };
		} else if (tag === 'Маркетинг') {
			return { backgroundColor: '#ceecfd', color: '#2d86ba' };
		} else if (tag === 'Финансы') {
			return { backgroundColor: '#fde3ce', color: '#ba662e' };
		} else if (tag === 'Продажи') {
			return { backgroundColor: '#d6ede2', color: '#13854e' };
		}
  };
  
  const getItemById = event => {
		const itemId = event.dataTransfer.getData('itemId');
		const item = props.items.find(item => item.id == itemId);
		return { item, itemId };
  };
  
  const selectTask = (task) => {
	emit('select-task', task);
  };
  </script>
  
  <style scoped>
  .task {
	cursor: grab;
	background-color: var(--white);
	padding: 1rem;
	border-radius: 8px;
	width: 100%;
	box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
	margin-bottom: 1rem;
	border: 3px dashed transparent;
	transition: transform 0.2s, background 0.2s, color 0.2s;
  }
  .task:hover {
	box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
	border-color: rgba(162, 179, 207, 0.2) !important;
  }
  .task p {
	font-size: 15px;
	margin: 1.2rem 0;
	font-weight: 500;
  }
  .task__tag {
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
  }
  .task__tag--pink {
	color: var(--tag-4-text);
	background-color: var(--tag-4);
  }
  .task__tag--blue {
	color: var(--tag-3-text);
	background-color: var(--tag-3);
  }
  .task__tag--green {
	color: var(--tag-2-text);
	background-color: var(--tag-2);
  }
  .task__tag--orange {
	color: var(--tag-5-text);
	background-color: var(--tag-5);
  }
  .status--open {
	color: var(--status-open-text);
	background-color: var(--status-open);
  }
  .status--inwork {
	color: var(--status-inwork-text);
	background-color: var(--status-inwork);
  }
  .status--close {
	color: var(--status-close-text);
	background-color: var(--status-close);
  }
  .task__tags {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  .task__options {
	background: transparent;
	border: 0;
	color: var(--light-grey);
	font-size: 17px;
  }
  .task__stats {
	position: relative;
	width: 100%;
	color: var(--light-grey);
	font-size: 12px;
	font-weight: 700;
  }
  .status__owners {
	position: absolute;
	right: 0;
	bottom: 0;
  }
  .status__owner{
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
  }
  .task-hover {
	border: 3px dashed var(--light-grey) !important;
  }
  .task:focus, .task:hover {
	transform: scale(1.040);
  }
  .on-over {
	border-color: var(--tag-3-text);
  }
  </style>
  