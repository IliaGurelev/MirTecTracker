<template>
  <nav :class="['sidebar', 'dashboards-sidebar', { close: isSidebarClosed }]">
    <div class="sidebar-header">
      <li class="item">
        <button @click="toggleAddDashboardModal" class="nav_link submenu_item">
          <span class="nav_link_icon">
            <i
              :class="isAddDashboardModalOpen ? 'fas fa-times' : 'fas fa-plus'"
              class="icon-animation"
            ></i>
          </span>
          <span class="navlink">{{
            isAddDashboardModalOpen ? 'Скрыть форму' : 'Добавить дашборд'
          }}</span>
        </button>
      </li>
      <button @click="toggleSidebar" class="close-sidebar-btn">
        <i class="fas fa-times"></i>
      </button>
    </div>
    <data class="dashboards__togglebutton">
      <AddDashboardModal v-if="isAddDashboardModalOpen" @close="closeAddDashboardModal" />
      <AddInviteDashboard @submitForm="addDashboardByInvite" />
    </data>
    <div class="menu_content">
      <ul class="menu_items">
        <transition-group name="dashboard-list" tag="div">
          <li class="item" v-for="dashboard in dashboards" :key="dashboard.id">
            <router-link
              :to="{ name: 'Dashboard', query: { id: dashboard.id } }"
              @click="toggleSidebar"
            >
              <div class="nav_link submenu_item">
                <span class="nav_link_icon">
                  <div class="squares" :style="{ color: dashboard.color }">
                    <div class="square">
                      <i class="fas fa-square icon top-left"></i>
                      <i class="fas fa-square icon top-right"></i>
                      <i class="fas fa-square icon bottom-left"></i>
                      <i class="fas fa-square icon bottom-right"></i>
                    </div>
                  </div>
                </span>
                <span class="navlink">{{ dashboard.name }}</span>
              </div>
            </router-link>
          </li>
        </transition-group>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

import { useDashboardStore } from '@/store/dashboardStore'
import { useUserStore } from '@/store/userStore'

import AddDashboardModal from '@/components/AddDashboard/AddDashboard.vue'
import AddInviteDashboard from '@/components/AddDashboard/AddInviteCode.vue'

const dashboardStore = useDashboardStore()
const userStore = useUserStore()

const { dashboards } = storeToRefs(dashboardStore)
const { currentUser } = storeToRefs(userStore)

const isAddDashboardModalOpen = ref(false)
const isSidebarClosed = ref(false)

const toggleAddDashboardModal = () => {
  isAddDashboardModalOpen.value = !isAddDashboardModalOpen.value
}

const closeAddDashboardModal = () => {
  isAddDashboardModalOpen.value = false
}

const toggleSidebar = () => {
  isSidebarClosed.value = !isSidebarClosed.value
}

const addDashboardByInvite = () => {
  dashboardStore.fetchDashboards(currentUser.value.id)
}

onMounted(() => {
  dashboardStore.fetchDashboards(currentUser.value.id)
})
</script>

<style scoped>
.dashboards__togglebutton {
  text-align: center;
}
.nav_link {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.nav_link_icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 4px;
}

.icon-animation {
  transition: transform 0.3s ease;
}

.menu_content {
  padding: 20px;
}

.menu_items {
  list-style-type: none;
  padding: 0;
}

.squares {
  width: 35px;
  height: 40px;
  margin: auto;
}

.square {
  position: relative;
  width: 20px;
  border-radius: 10px;
  top: 1.2rem;
  left: 0.5rem;
}

.icon {
  position: absolute;
  font-size: 10px;
}

.top-left {
  top: 0;
  left: 0;
}

.top-right {
  top: 0;
  right: 0;
}

.bottom-left {
  bottom: 0;
  left: 0;
}

.bottom-right {
  bottom: 0;
  right: 0;
}

.sidebar.dashboards-sidebar {
  position: fixed;
  top: 0;
  left: 70px;
  width: 260px;
  height: 100%;
  background-color: var(--bg);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  z-index: 50;
  transform: translateX(0);
}

.sidebar.dashboards-sidebar.close {
  transform: translateX(-260px);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.close-sidebar-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.menu_content {
  padding: 20px;
}

.menu_items .item {
  margin-bottom: 10px;
  transition: opacity 0.3s ease;
}

.nav_link:hover {
  background-color: #e7e7e7;
}

.item {
  position: relative;
  background-color: var(--bg);
  font-weight: 400;
  overflow: hidden;
  font-weight: 500;
  border: none;
}

.item:hover {
  border-radius: 8px;
  opacity: 0.9;
  background-color: #e7e7e7;
}

@media screen and (max-width: 800px) {
  .sidebar.dashboards-sidebar {
    left: 0px;
  }
}

.dashboard-list-enter-active,
.dashboard-list-leave-active {
  transition: opacity 0.5s;
}

.dashboard-list-enter-from,
.dashboard-list-leave-to {
  opacity: 0;
}
</style>
