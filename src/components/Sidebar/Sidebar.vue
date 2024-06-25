<template>
  <div>
    <!-- Основной сайдбар -->
    <nav class="navbar">
      <div class="logo_item">
        <i class="fa-solid fa-bars" id="sidebarOpen" @click="toggleSidebar"></i>
        <router-link class="logo_item" to="/">
          <img src="../../assets/logo.svg" alt="" />Миртек Трекер
        </router-link>
      </div>
    </nav>

    <nav
      class="sidebar"
      :class="{ close: isSidebarClose, hoverable: isHoverable }"
      @mouseenter="handleSidebarMouseEnter"
      @mouseleave="handleSidebarMouseLeave"
    >
      <div class="menu_content">
        <ul class="menu_items">
          <!-- Остальные пункты меню -->
          <li class="item">
            <router-link :to="{ name: 'Personal' }">
              <div class="nav_link submenu_item">
                <span class="nav_link_icon">
                  <i class="fa-solid fa-rectangle-list"></i>
                </span>
                <span class="navlink">Мои задачи</span>
              </div>
            </router-link>
          </li>
          <li class="item" @click="toggleDashboardsSidebar">
            <div class="nav_link submenu_item" @click="closeSidebar">
              <span class="nav_link_icon">
                <div class="squares">
                  <div class="square">
                    <i class="fas fa-square icon top-left"></i>
                    <i class="fas fa-square icon top-right"></i>
                    <i class="fas fa-square icon bottom-left"></i>
                    <i class="fas fa-square icon bottom-right"></i>
                  </div>
                </div>
              </span>
              <span class="navlink">Дашборды</span>
            </div>
          </li>
          <li class="item_btn">
            <router-link :to="{ name: 'Briefcase' }">
              <div class="menu_link submenu_item">
                <span class="menu_titles">
                  <i class="fa-solid fa-suitcase"></i>
                </span>
                <span class="navlink">Портфели</span>
              </div>
            </router-link>
          </li>
        </ul>

        <!-- Контроллы сайдбара -->
        <sidebar-controls :expandSidebar="expandSidebar" :closeSidebar="closeSidebar" />
      </div>
    </nav>
    <!-- Второй сайдбар для дашбордов -->
    <sidebar-dashboards v-if="showDashboardsSidebar" />
  </div>
</template>

<script setup>
import SidebarControls from '@/components/Sidebar/SidebarControls.vue'
import SidebarDashboards from '@/components/Sidebar/SidebarDashboard.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isSidebarClose = ref(true)
const isHoverable = ref(true)
const submenuItems = ref([])
const showDashboardsSidebar = ref(false)
onMounted(() => {
  submenuItems.value = document.querySelectorAll('.submenu_item')
  if (window.innerWidth < 768) {
    isSidebarClose.value = true
  }
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

const toggleSidebar = () => {
  isHoverable.value = true
  isSidebarClose.value = !isSidebarClose.value // Инвертируем текущее состояние сайдбара
}

const closeSidebar = () => {
  isHoverable.value = true
  isSidebarClose.value = true
}

const expandSidebar = () => {
  isSidebarClose.value = false
  isHoverable.value = false
}

const handleSidebarMouseEnter = () => {
  if (isHoverable.value) {
    isSidebarClose.value = false
    showDashboardsSidebar.value = false
  }
}

const handleSidebarMouseLeave = () => {
  if (isHoverable.value) {
    isSidebarClose.value = true
  }
}

const handleResize = () => {
  if (window.innerWidth < 768) {
    isSidebarClose.value = true
  } else {
    isSidebarClose.value = false
  }
}

// Открытие второго сайдбара с дашбордами
const toggleDashboardsSidebar = () => {
  showDashboardsSidebar.value = true
}

// Закрытие второго сайдбара с дашбордами
const closeDashboardsSidebar = () => {
  showDashboardsSidebar.value = false
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  background-color: var(--white-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  z-index: 1000;
  box-shadow: 0 0 2px var(--grey-color-light);
  border-bottom: 1px solid var(--grey-color-light);
  border-bottom: 1px solid #d9e0e9;
}
.text__down {
  font-weight: 600;
}
.navlink {
  font-weight: 600;
}
.logo_item {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 22px;
  font-weight: 500;
  color: var(--blue-color);
}
.navbar img {
  width: 35px;
  height: 35px;
  object-fit: cover;
}

.navbar_content {
  display: flex;
  align-items: center;
  column-gap: 25px;
}
.navbar_content i {
  cursor: pointer;
  font-size: 20px;
  color: var(--grey-color);
}

.sidebar {
  background-color: var(--white-color);
  width: 260px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  padding: 80px 20px;
  z-index: 500;
  overflow-y: scroll;
  box-shadow: 0 0 1px var(--grey-color-light);
  transition: all 0.1s ease;
  scrollbar-width: none;
  border-right: 1px solid #d9e0e9;
}
.sidebar.load {
  padding: 60px 0;
  width: 80px;
}
.sidebar.close {
  padding: 60px 0;
  width: 80px;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
.menu_content {
  position: relative;
}

.menu_btns {
  position: relative;
}

.menu_title {
  margin: 15px 0;
  font-size: 18px;
}
.menu_titles {
  font-size: 18px;
}

.menu_btn {
  margin: 10px 0;
  font-size: 18px;
}
.sidebar.close .menu_btn,
.sidebar.close .menu_title {
  padding: 6px 30px;
}
.sidebar.close .item_btn {
  padding: 6px 17px;
}
.sidebar.close .item {
  padding: 6px 17px;
}
.menu_titles::before {
  color: var(--grey-color);
  white-space: nowrap;
}

.menu_title::before {
  color: var(--grey-color);
  white-space: nowrap;
}
.menu_dahsboard::before {
  content: 'Доски задач';
}

.icon_btn {
  font-size: 22px;
  line-height: 40px;
  padding: 0 10px;
}
.sidebar .btn_menu {
  display: flex;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  color: var(--grey-color);
  text-align: center;
}
.nav_link:focus,
.nav_link:hover,
.menu_link:focus,
.menu_link:hover,
.btn_menu:focus,
.btn_menu:hover {
  transform: scale(1.09);
  color: #fff;
  background: var(--blue-color);
  box-shadow: rgba(0, 0, 0, 0.342) 0px 2px 8px 0px;
}
.btn_account::before {
  content: 'Личный кабинет';
}
.btn_bag::before {
  content: 'Портфели';
}
.sidebar .menu_link {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  color: var(--grey-color);
}
.sidebar.close .menu_btn::before {
  content: '';
}

.sidebar.close .menu_title::before {
  content: '';
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 12px;
  background: var(--grey-color-light);
}

.sidebar.close .menu_titles::before {
  content: '';
}

.menu_items {
  padding: 0;
  list-style: none;
}

.nav_link_icon {
  position: relative;
  font-size: 22px;
  min-width: 50px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
}
.nav_link_icon::before {
  content: '';
  position: absolute;
  height: 100%;
  width: calc(100% + 100px);
}
.nav_link_icon:hover {
  background: var(--blue-color);
}

.menu_titles {
  position: relative;
  font-size: 22px;
  min-width: 50px;
  line-height: 40px;
  display: inline-block;
  text-align: center;
  border-radius: 6px;
}
.menu_titles::before {
  content: '';
  position: absolute;
  height: 100%;
  width: calc(100% + 100px);
}

.menu_titles:hover {
  background: var(--blue-color);
}
.sidebar .nav_link {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  text-decoration: none;
  color: var(--grey-color);
  white-space: nowrap;
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
.sidebar.close .navlink {
  display: none;
}
.nav_link:hover {
  color: var(--white-color);
  background: var(--blue-color);
}

.menu_link:hover {
  color: var(--white-color);
  background: var(--blue-color);
}
.sidebar.close .nav_link:hover {
  background: var(--white-color);
}
.sidebar.close .menu_link:hover {
  background: var(--white-color);
}

.submenu_item {
  cursor: pointer;
}
.submenu {
  display: none;
}
.submenu_item .arrow-left {
  position: absolute;
  right: 10px;
  display: inline-block;
  margin-right: auto;
}
.sidebar.close .submenu {
  display: none;
}

.submenu .sublink {
  padding: 15px 15px 15px 52px;
}
.bottom_content {
  border-top: 1px solid #d9e0e9;
  border-right: 1px solid #d9e0e9;
  position: fixed;
  bottom: 60px;
  left: 0;
  width: 260px;
  cursor: pointer;
  transition: all 0.1s ease;
}
.bottom {
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  justify-content: space-around;
  padding: 18px 0;
  text-align: center;
  width: 100%;
  color: var(--grey-color);
  border-top: 1px solid var(--grey-color-light);
  background-color: var(--white-color);
}
.bottom i {
  font-size: 20px;
}
.bottom span {
  font-size: 18px;
}
.sidebar.close .bottom_content {
  width: 50px;
  left: 15px;
}
.sidebar.close .bottom span {
  display: none;
}
.sidebar.hoverable .collapse_sidebar {
  display: none;
}
.sidebar.close .item_btn::before {
  margin-left: 20rem;
}

.sidebar.close .item::before {
  margin-left: 20rem;
}
#sidebarOpen {
  display: none;
}
@media screen and (max-width: 800px) {
  #sidebarOpen {
    font-size: 25px;
    display: block;
    margin-right: 10px;
    cursor: pointer;
    color: var(--grey-color);
  }
  .sidebar.close {
    left: -100%;
  }

  .sidebar.close .bottom_content {
    left: -100%;
  }
}
</style>
