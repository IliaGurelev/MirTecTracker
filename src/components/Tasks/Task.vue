<template>
  <Sidebar :task="selectedTask" :isOpen="isSidebarOpen" @close="closeSidebar" />
  <transition name="task" appear enter-active-class="task-enter" leave-active-class="task-leave">
    <div
      :key="item.id"
      class="task"
      :draggable="true"
      @dragstart="startDrag($event, item)"
      @drop="onDropSort($event, item)"
      @dragover.prevent="onOver($event)"
      @dragleave.prevent="onLeave($event)"
      @click="selectTask(item)"
    >
      <div class="tasktags">
        <span class="task__tag"
          ><TaskBriefcase :briefcase="item.briefcase" class="task__briefcase"
        /></span>
      </div>
      <button @click.stop="handleDeleteClick" class="delete-button">
        <i class="fa-regular fa-trash-can"></i>
      </button>
      <p>{{ item.name }}</p>
      <div class="task__stats">
        <span>
          <time :datetime="item.createdAt">
            <i class="fa-regular fa-calendar-days"></i> {{ formatDate(item.dueDate) }}
          </time>
        </span>
        <div class="status__owners">
          <TaskStatus :taskStatus="item.status" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import formatDate from '@/utils/format-date.js'
import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue'
import TaskStatus from '@/components/Tasks/TaskStatus.vue'
import Sidebar from '@/components/Tasks/SideBarInfo/SideBarInfo.vue'

const props = defineProps({
  item: Object,
  items: Array,
  statuses: Array,
  globaltype: String,
  sort: Boolean
})

const emit = defineEmits(['openDeleteModal'])

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemId', item.id)
}

const onDropSort = (event, droppedItem) => {
  if (!props.sort) return
  onLeave(event)
  const { item, itemId } = getItemById(event)
  const itemPosition = props.items.findIndex((item) => item.id == itemId)
  const droppedItemPosition = props.items.findIndex((item) => item.id == droppedItem.id)
  props.items.splice(itemPosition, 1)
  props.items.splice(droppedItemPosition, 0, item)
}

const isSidebarOpen = ref(false)
const selectedTask = ref(null)

const selectTask = (item) => {
  if (selectedTask.value === item && isSidebarOpen.value) {
    isSidebarOpen.value = false
  } else {
    selectedTask.value = item
    isSidebarOpen.value = true
  }
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const handleDeleteClick = () => {
  emit('openDeleteModal', props.item.id)
}

const onOver = (event) => (props.sort ? event.target.classList.add('on-over') : '')
const onLeave = (event) => (props.sort ? event.target.classList.remove('on-over') : '')

const getItemById = (event) => {
  const itemId = event.dataTransfer.getData('itemId')
  const item = props.items.find((item) => item.id == itemId)
  return { item, itemId }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.task-enter-active,
.task-leave-active {
  animation:
    fadeIn 0.5s ease,
    fadeOut 0.5s ease;
}

.task-enter,
.task-leave-to {
  opacity: 0;
}

.task-enter {
  animation: fadeIn 0.5s ease forwards;
}

.task-leave {
  animation: fadeOut 0.5s ease forwards;
}
.delete-button {
  background: transparent;
  border: 0;
  color: var(--light-grey);
  font-size: 17px;
  cursor: pointer;
  float: right;
  transition: color 0.2s linear;
}

.delete-button:hover {
  color: var(--text);
}
.tasktags {
  display: inline-block;
}
.task {
  cursor: grab;
  background-color: var(--white);
  padding: 1rem;
  border-radius: 8px;
  width: 100%;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  margin-bottom: 1rem;
  border: 3px dashed transparent;
  transition:
    transform 0.2s,
    background 0.2s,
    color 0.2s;
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
  position: relative;
  display: flex;
  justify-content: space-between;
  border-radius: 100px;
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
  position: relative;
  display: flex;
  justify-content: space-between;
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
  transform: scale(1.04);
}
.on-over {
  border-color: var(--tag-3-text);
}
</style>
