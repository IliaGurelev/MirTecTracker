<template>
	<div class="project-tasks">
	  <TaskColumn
		v-for="list in lists"
		:key="list.id"
		:title="list.title"
		:list="list.id"
		:items="items"
		:sort="true"
		@drop="onDrop"
		@dropSort="onDropSort"
		@startDrag="startDrag"
	  />
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import TaskColumn from '../Tasks/TaskColumn.vue'
  
  const lists = ref([
	{ id: 1, title: 'Открыт' },
	{ id: 2, title: 'В работе' },
	{ id: 3, title: 'Закрыт' }
  ])
  
  const items = ref([
  { id: 0, title: 'Сделать верстку главной страницы Трекера', tag:'Разработка',data:'20.05.2024',status:'Открыт', list: 1 },
  { id: 1, title: 'Верстка - личная страница', tag:'Разработка',data:'20.05.2024',status:'В работе', list: 2 },
  { id: 2, title: 'Анализ рекламы и прихода', tag:'Маркетинг',data:'20.05.2024',status:'В работе', list: 2 },
  { id: 3, title: 'Пропиарить Трекер', tag:'Маркетинг',data:'20.05.2024',status:'Открыт', list: 1 },
  { id: 4, title: 'Продать подписку Трекера', tag:'Маркетинг',data:'20.05.2024',status:'Открыт', list: 1 },
  { id: 5, title: 'Зарисовать новый дизайн', tag:'Разработка',data:'20.05.2024',status:'В работе', list: 2 },
  { id: 6, title: 'Анализ рекламы и прихода', tag:'Разработка',data:'20.05.2024',status:'Открыт', list: 1 },
  { id: 7, title: 'Верстка - общей доски', tag:'Разработка',data:'20.05.2024',status:'В работе', list: 2 },
  { id: 8, title: 'Придумать контент для продвижения Трекера', tag:'Маркетинг',data:'20.05.2024',status:'В работе', list: 2 },
  { id: 9, title: 'Расчёт зарплаты сотрудникам', tag:'Финансы',data:'20.05.2024',status:'Закрыт', list: 3 },
  { id: 10, title: 'Придумать новую пиар-акцию', tag:'Маркетинг',data:'20.05.2024',status:'Закрыт', list: 3 },
  { id: 11, title: 'Отчёт по продажам подписки', tag:'Финансы',data:'20.05.2024',status:'Закрыт', list: 3 }
])
  
  const onDrop = (event, listId) => {
	const itemId = event.dataTransfer.getData('itemId')
	const item = items.value.find(i => i.id === parseInt(itemId))
	if (item && item.list !== listId) {
	  item.list = listId
	}
  }
  
  const onDropSort = (event, item) => {
	const itemId = event.dataTransfer.getData('itemId')
	const draggedItem = items.value.find(i => i.id === parseInt(itemId))
	const index = items.value.indexOf(draggedItem)
	if (index > -1) {
	  items.value.splice(index, 1)
	  items.value.splice(items.value.indexOf(item), 0, draggedItem)
	}
  }
  
  const startDrag = (event, item) => {
	event.dataTransfer.setData('itemId', item.id)
  }
  </script>

  <style  lang="scss" scoped>

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
  
	.project-tasks {
	  display: grid;
	  grid-template-columns: repeat(3, 1fr);
	  width: 100%;
	  grid-column-gap: 1.5rem;
	}
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
  
	.task {
	  cursor: move;
	  background-color: var(--white);
	  padding: 1rem;
	  border-radius: 8px;
	  width: 100%;
	  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
	  margin-bottom: 1rem;
	  border: 3px dashed transparent;
	  
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
	.tag-progress .progress::-webkit-progress-bar, .tag-progress .progress::-webkit-progress-value {
	  border-radius:5px;
	}
	.tag-progress .progress--orаnge::-webkit-progress-bar {
	  background-color: var(--tag-5-text);
	}
	.tag-progress .progress--orаnge::-webkit-progress-value {
	  background: var(---tag-5);
	}
	.tag-progress .progress--orаnge::-moz-progress-bar {
	  background-color: var(--tag-5-text);
	}
	.tag-progress .progress--pink::-webkit-progress-bar {
	  background-color: var(--tag-4);
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