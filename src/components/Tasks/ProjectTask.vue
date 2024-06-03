<template>
	<div class="project-tasks">
	  <TaskColumn
		v-for="column in columns"
		:key="column.globaltype"
		:column="column"
		:items="items"
		:sort="sort"

	  />
	</div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  import TaskColumn from '@/components/Tasks/TaskColumn.vue';
  
  const props = defineProps({
	items: {
	  type: Array,
	  required: true
	},
	sort: {
	  type: Boolean,
	  default: false
	}
  });
  
  const columns = [
	{
	  globaltype: 'open',
	  title: 'Открыт',
	  list: 1,
	  statuses: [
		{ text: "Открыт", icon: "fa-solid fa-circle-notch", class: "open" }
	  ]
	},
	{
	  globaltype: 'work',
	  title: 'В работе',
	  list: 2,
	  statuses: [
		{ text: "В работе", icon: "fa-circle-play", class: "inwork" }
	  ]
	},
	{
	  globaltype: 'close',
	  title: 'Закрыт',
	  list: 3,
	  statuses: [
		{ text: "Закрыт", icon: "fa-circle-check", class: "close" }
	  ]
	}
  ];
  </script>
  
  <style lang="scss" scoped>
  .project-tasks {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	width: 100%;
	grid-column-gap: 1.5rem;
  }
  
  .app {
	background-color: var(--bg);
	width: 100%;
	min-height: 100vh;
  }
  
  .project {
	padding: 2rem;
	max-width: 75%;
	width: 100%;
	display: inline-block;
  }
  
  .project-info {
	padding: 2rem 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
  }
  
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
  
  .task {
	cursor: move;
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
  
  .status__owner {
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
  }
  
  .task-hover {
	border: 3px dashed var(--light-grey) !important;
  }
  
  .task:focus,
  .task:hover {
	transform: scale(1.040);
  }
  
  .task-details {
	width: 24%;
	border-left: 1px solid #d9e0e9;
	display: inline-block;
	flex-direction: column;
	height: 100vh;
	vertical-align: top;
	padding: 3rem 2rem;
  }
  
  .tag-progress {
	margin: 1.5rem 0;
  }
  
  .tag-progress h2 {
	font-size: 16px;
	margin-bottom: 1rem;
  }
  
  .tag-progress p {
	display: flex;
	width: 100%;
	justify-content: space-between;
	font-weight: 500;
  }
  
  .tag-progress p span {
	color: #b4b4b4;
	font-weight: 700;
  }
  
  .tag-progress .progress {
	width: 100%;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border: none;
	border-radius: 10px;
	height: 10px;
  }
  
  .tag-progress .progress::-webkit-progress-bar,
  .tag-progress .progress::-webkit-progress-value {
	border-radius: 5px;
  }
  
  .tag-progress .progress--orange::-webkit-progress-bar {
	background-color: var(--tag-5-text);
  }
  
  .tag-progress .progress--orange::-webkit-progress-value {
	background: var(---tag-5);
  }
  
  .tag-progress .progress--orange::-moz-progress-bar {
	background-color: var(--tag-5-text);
  }
  
  .tag-progress .progress--pink::-webkit-progress-value {
	background: var(--tag-4-text);
  }
  
  .tag-progress .progress--pink::-moz-progress-bar {
	background-color: var(--tag-4-text);
  }
  
  .tag-progress .progress--blue::-webkit-progress-bar {
	background-color: var(--tag-3);
  }
  
  .tag-progress .progress--blue::-webkit-progress-value {
	background: var(--tag-3-text);
  }
  
  .tag-progress .progress--blue::-moz-progress-bar {
	background-color: var(--tag-3-text);
  }
  
  .tag-progress .progress--green::-webkit-progress-bar {
	background-color: var(--tag-2);
  }
  
  .tag-progress .progress--green::-webkit-progress-value {
	background: var(--tag-2-text);
  }
  
  .tag-progress .progress--green::-moz-progress-bar {
	background-color: var(--tag-2-text);
  }
  
  .on-over {
	border-color: var(--tag-3-text);
  }
  </style>
  