<template>
	<div class="project-tasks">
	  <TaskColumn
		v-for="(list, index) in lists"
		:key="index"
		:title="list.title"
		:list="list.id"
		:items="tasks"
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
  
  const tasks = ref([
	{ id: 1, title: 'Task 1', list: 1, tag: 'Разработка', data: '2023-05-20', status: 'Открыт' },
	{ id: 2, title: 'Task 2', list: 2, tag: 'Маркетинг', data: '2023-05-21', status: 'Открыт' },
	{ id: 3, title: 'Task 3', list: 3, tag: 'Финансы', data: '2023-05-22', status: 'Открыт' },
	{ id: 4, title: 'Task 4', list: 1, tag: 'Продажи', data: '2023-05-23', status: 'Открыт' }
  ])
  
  const onDrop = (event, list) => {
	const draggedTaskId = event.dataTransfer.getData('text')
	const draggedTask = tasks.value.find(task => task.id === Number(draggedTaskId))
	const index = tasks.value.findIndex(task => task.id === Number(draggedTaskId))
	draggedTask.list = list
	tasks.value.splice(index, 1)
  }
  
  const onDropSort = (event, item) => {
	const draggedTaskId = event.dataTransfer.getData('text')
	const draggedTask = tasks.value.find(task => task.id === Number(draggedTaskId))
	const index = tasks.value.findIndex(task => task.id === Number(draggedTaskId))
	const draggedList = lists.value.find(list => list.id === item.list)
	tasks.value.splice(index, 1)
	tasks.value.splice(tasks.value.indexOf(item), 0, draggedTask)
	draggedTask.list = draggedList.id
  }
  
  const startDrag = (event, item) => {
	event.dataTransfer.setData('text', item.id)
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