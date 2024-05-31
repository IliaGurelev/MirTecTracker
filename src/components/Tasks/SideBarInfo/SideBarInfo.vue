<template>
<aside class="sidebar" v-if="sidebarOpen">
  <div class="sidebar-content">
    <h3>{{ selectedTask.name }}</h3>
    <p>{{ selectedTask.description }}</p>
  </div>
  
</aside>
  </template>
  
  <script setup>
 import { ref,  reactive, provide } from 'vue'

const selectedTask = ref(null)
const sidebarOpen = ref(false)

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

provide('selectedTask', selectedTask)

provide('sidebarOpen', sidebarOpen)

  </script>
  
  <style scoped>
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #f3f3f3;
    transition: transform 0.3s;
    transform: translateX(100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }
  </style>