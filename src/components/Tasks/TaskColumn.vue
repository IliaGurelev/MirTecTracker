<template>
	<div class='project-column'
		 :class="{ 'on-over': overColumn === column.globaltype }"
		 @drop="onDrop($event, column.globaltype)"
		 @dragenter.prevent="onEnterColumn(column.globaltype)"
		 @dragover.prevent="onOverColumn(column.globaltype)"
		 @dragleave.prevent="onLeaveColumn(column.globaltype)">
	  <div class='project-column-heading'>
		<h2 class='project-column-heading__title'>{{ column.title }}</h2>
	  </div>
	  <Task v-for="item in getList(column.globaltype)"
			:key="item.id"
			:item="item"
			:statuses="column.statuses"
			:globaltype="column.globaltype"
			:sort="sort"/>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Task from '@/components/Tasks/Task.vue';

  const props = defineProps({
	column: Object,
	items: Array,
	sort: Boolean,
  });
  
  const overColumn = ref(null);
  
  const getList = status => props.items ? props.items.filter(item => item.status == status) : [];
  
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
  
  const getItemById = event => {
	const itemId = event.dataTransfer.getData('itemId');
	const item = props.items.find(item => item.id == itemId);
	return { item, itemId };
  };
  </script>
  
  <style scoped>
.project-column{
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
  </style>
  