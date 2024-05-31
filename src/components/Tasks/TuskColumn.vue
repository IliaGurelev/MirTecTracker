<template>
	<div class="project-column" :class="{ 'on-over': overColumn === column.globaltype }">
	  <div class="project-column-heading">
		<h2 class="project-column-heading__title">{{ column.title }}</h2>
	  </div>
	  <Task v-for="item in getList(column.globaltype)" :key="item.id" :items="items" />
	</div>
  </template>
  
  <script setup>
  import { computed } from 'vue'
  import Tasks from '@/components/Tasks/Task.vue';
  
  const props = defineProps({
	column: Object
  })
  
  const getList = computed(() => items => items.filter(item => item.status == props.column.globaltype))
  </script>