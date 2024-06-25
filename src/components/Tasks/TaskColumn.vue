<template>
	<div class='project-column'
		 :class="{ 'on-over': overColumn === column.globaltype }"
		 @drop="onDrop($event, column.globaltype)"
		 @dragenter.prevent="onEnterColumn(column.globaltype)"
		 @dragover.prevent="onOverColumn(column.globaltype)"
		 @dragleave.prevent="onLeaveColumn(column.globaltype)">
	  <div class='project-column-heading'>
		<h2 class='project-column-heading__title'>{{ column.title }}<span  class="kanban__move-icon">{{ getCount(column) }}</span></h2>
	  </div>
	  <Task v-for="item in getList(column.globaltype)"
			:key="item.id"
			:item="item"
			:statuses="column.statuses"
			:globaltype="column.globaltype"
			:sort="sort"
			@openDeleteModal="openDeleteModal"/>
	  <div class="kanban__descriprion">
		<span>{{ dropText }}</span>
	  </div>
	</div>
	<ConfirmationModal :visible="isModalVisible" @confirm="deleteTask" @cancel="hideModal"/>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Task from '@/components/Tasks/Task.vue';
  import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal.vue';
  
  const props = defineProps({
	column: Object,
	items: Array,
	sort: Boolean,
	colWidth: [Number, String],
	colMinWidth: [Number, String],
	colMaxWidth: [Number, String],
	dropText: {
	  type: String,
	  default: "Пернесите сюда задачу",
	},
	dropIcon: {
	  type: String,
	  default: "drag",
	},
	noBorder: Boolean,
	colBgColor: String,
	countText: {
	  type: String,
	  default: "items",
	},
	columnCount: Array,
	innerColCount: {
	  type: Boolean,
	  default: false,
	},
  });
  
  const overColumn = ref(null);
  const isModalVisible = ref(false);
  const taskIdToDelete = ref(null);
  
  const getList = status => props.items ? props.items.filter(item => item.status === status) : [];
  
  const onEnterColumn = (columnType) => {
	overColumn.value = columnType;
  };
  
  const onOverColumn = (columnType) => {
	overColumn.value = columnType;
  };
  
  const onLeaveColumn = () => {
	overColumn.value = null;
  };
  
  const onDrop = (event, status) => {
	const { item } = getItemById(event);
	item.status = status;
  };
  
  const getItemById = (event) => {
	const itemId = event.dataTransfer.getData('itemId');
	const item = props.items.find(item => item.id == itemId);
	return { item, itemId };
  };
  
  const getCount = (column) => {
	if (props.columnCount && props.columnCount.length > 0) {
	  return props.columnCount.find(item => item.id === column.id)?.value || 0;
	} else {
	  return getList(column.globaltype).length;
	}
  };
  
  const openDeleteModal = (taskId) => {
	taskIdToDelete.value = taskId;
	isModalVisible.value = true;
  };
  
  const deleteTask = () => {
	const index = props.items.findIndex(item => item.id === taskIdToDelete.value);
	if (index !== -1) {
	  props.items.splice(index, 1);
	}
	hideModal();
  };
  
  const hideModal = () => {
	isModalVisible.value = false;
  };
  </script>
  
  <style scoped>
  .project-column {
	background: #e6e6e670;
	padding: 5px 10px;
	border-radius: 8px;
  }
  
  .project-column-heading {
	margin-bottom: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
  }
  
  .project-column-heading__title {
	font-size: 20px;
  }
  
  .on-over {
	border-color: var(--tag-3-text);
  }
  
  .kanban__move-icon {
	padding: 1rem;
	font-size: 20px;
	color: #b0b0b0;
	user-select: none;
  }
  
  .kanban__descriprion {
	text-align: center;
	padding: 1rem;
	font-size: 1rem;
	color: #b0b0b0;
	user-select: none;
  }
  
  .kanban__move-icon span {
	margin-left: 10px;
  }
  </style>
  