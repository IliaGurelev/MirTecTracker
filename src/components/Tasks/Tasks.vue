<template>
	<div class="project-tasks">
	  <div
		v-for="(column, index) in columns"
		:key="index"
		class='project-column'
		:class="{ 'on-over': overColumn === index }"
		@drop="onDrop($event, column.list)"
		@dragenter.prevent="onEnterColumn(index)"
		@dragover.prevent="onOverColumn(index)"
		@dragleave.prevent="onLeaveColumn(index)"
	  >
		<div class='project-column-heading'>
		  <h2 class='project-column-heading__title'>{{ column.title }}</h2>
		</div>
		<div
		  class="task"
		  v-for="item in getList(column.list)"
		  :key="item.id"
		  draggable="true"
		  @dragstart="startDrag($event, item)"
		  @drop="onDropSort($event, item)"
		  @dragover.prevent="onOver($event)"
		  @dragleave.prevent="onLeave($event)"
		  @dragenter.prevent
		>
		  <div class='tasktags'><span class='tasktag task__tag--green' :style="getStyle(item.tag)">{{item.tag}}</span></div>
		  <p>{{item.title }}</p>
		  <div class='task__stats'>
			<span><time datetime='2023-05-20T15:00:00'><i class='fa-regular fa-calendar-days'></i> {{item.data }}</time></span>
			<div class='statusowners'>
			  <span class='statusowner status--inwork'><i class='fa-regular fa-circle-play'></i> {{item.status}}</span>
			</div>
		  </div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const { items, sort } = defineProps({
	items: {
	  type: Array,
	  required: true
	},
	sort: {
	  type: Boolean,
	  default: false
	},
  });
  
  const columns = [
	{ title: 'Открыт', list: 1 },
	{ title: 'В работе', list: 2 },
	{ title: 'Закрыт', list: 3 },
  ];
  
  const getList = list => (items ? items.filter(item => item.list == list) : []);
  
  const getItemById = event => {
	const itemId = event.dataTransfer.getData('itemId')
	const item = items.find(item => item.id == itemId)
	return { item, itemId }
  }
  
  const onOver = event => (sort ? event.target.classList.add('on-over') : '')
  const onLeave = event => (sort ? event.target.classList.remove('on-over') : '')
  
  const onDropSort = (event, droppedItem) => {
	if (!sort) return
	onLeave(event)
	const { item, itemId } = getItemById(event)
	const itemPosition = items.findIndex(item => item.id == itemId)
	const droppedItemPosition = items.findIndex(item => item.id == droppedItem.id)
	items.splice(itemPosition, 1)
	items.splice(droppedItemPosition, 0, item)
  }
  
  const startDrag = (event, item) => {
	event.dataTransfer.dropEffect = 'move'
	event.dataTransfer.effectAllowed = 'move'
	event.dataTransfer.setData('itemId', item.id)
  }
  
  const onDrop = (event, list) => {
	const { item } = getItemById(event)
	item.list = list
  }
  
  const getStyle = (tag) => {
	
	if (tag === 'Разработка') {
  
  return { backgroundColor: '#f2dcf5', color: '#a734ba' }

} else if (tag === 'Маркетинг') {
  return { backgroundColor: '#ceecfd', color: '#2d86ba' }
} else if (tag === 'Финансы') {
  return { backgroundColor: '#fde3ce', color: '#ba662e' }
}else if (tag === 'Продажи') {
  return { backgroundColor: '#d6ede2', color: '#13854e' }
}

}
  const overColumn = ref(null);
  
  const onEnterColumn = (index) => {
	overColumn.value = index;
  };
  
  const onOverColumn = (index) => {
	overColumn.value = index;
  };
  
  const onLeaveColumn = () => {
	overColumn.value = null;
  };
  
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
	  transition:  transform 0.2s, background 0.2s, color 0.2s;
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
  