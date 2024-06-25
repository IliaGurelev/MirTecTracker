<template>
  <Sidebar :task="selectedTask" :isOpen="isSidebarOpen" @close="closeSidebar" />
  <div v-for="item in items" :key="item.id">
    <TaskItem
      :item="item"
      :items="items"
      :statuses="statuses"
      :globaltype="globaltype"
      :sort="sort"
      @openDeleteModal="openDeleteModal"
    />
  </div>
  <ConfirmationModal :visible="isModalVisible" @confirm="deleteTask" @cancel="hideModal" />
</template>

<script setup>
import { ref } from 'vue'
import TaskItem from '@/components/Tasks/Task.vue'
import ConfirmationModal from '@/components/ConfirmationModal/ConfirmationModal.vue'
import Sidebar from '@/components/Tasks/SideBarInfo/SideBarInfo.vue'

const props = defineProps({
  items: Array,
  statuses: Array,
  globaltype: String,
  sort: Boolean
})

const isSidebarOpen = ref(false)
const selectedTask = ref(null)
const isModalVisible = ref(false)
const taskIdToDelete = ref(null)

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

const openDeleteModal = (taskId) => {
  taskIdToDelete.value = taskId
  isModalVisible.value = true
}

const deleteTask = () => {
  hideModal()
}

const hideModal = () => {
  isModalVisible.value = false
}
</script>
