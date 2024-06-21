<template>
	<nav class="sidebar dashboards-sidebar">
		<li class="item">
			<button @click="openAddDashboardModal" class="nav_link submenu_item">
			  <span class="nav_link_icon">
				<i class="fas fa-plus"></i>
			  </span>
			  <span class="navlink">Добавить дашборд</span>
			</button>
		  </li>
		  <AddDashboardModal v-if="isAddDashboardModalOpen" @close="closeAddDashboardModal" />
	  <div class="menu_content">
		<ul class="menu_items">
		  <li class="item" v-for="dashboard in dashboards" :key="dashboard.id">
			<router-link :to="{ name: 'Dashboard', query: { id: dashboard.id } }">
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
		</ul>
	  </div>
	</nav>
  </template>
  
  <script setup>
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';
  import { ref,onMounted} from 'vue';
  import AddDashboardModal from '@/components/AddDashboard/AddDashboard.vue'; 
  
  const store = useMainStore();
  const { dashboards } = storeToRefs(store);
  
  const isAddDashboardModalOpen = ref(false);
  
  const openAddDashboardModal = () => {
	isAddDashboardModalOpen.value = true;
  };
  
  const closeAddDashboardModal = () => {
	isAddDashboardModalOpen.value = false;
  };
  onMounted(() => {
  loadDashboards();
});

const loadDashboards = () => {
  const storedDashboards = localStorage.getItem('dashboards');
  if (storedDashboards) {
    store.dashboards = JSON.parse(storedDashboards);
  }
};
  
  </script>
  
  <style scoped>
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
	.menu_content {
	padding: 20px;
	}

	.menu_items {
	list-style-type: none;
	padding: 0;
	}
  .squares{
		width: 35px;
		height: 40px;
		margin: auto;
	}
	.square {
		position: relative;
		width:  20px;
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
	top:0 ;
	left: 70px; 
	width: 260px;
	height: 100%;
	background-color: #fff;
	box-shadow: 0 0 1px rgba(0,0,0,0.1);
	transition: all 0.3s ease;
	z-index: 100;
  }
  
  .sidebar.dashboards-sidebar.close {
	left: -260px;
  }
  
  .menu_content {
	padding: 20px;
  }
  
  .menu_items {
	list-style-type: none;
	padding: 0;
  }
  
  .menu_items .item {
	margin-bottom: 10px;
  }
  
  .nav_link:hover {
	background-color: #f0f0f0;
  }
  @media screen and (max-width: 800px) {
	.sidebar.dashboards-sidebar {
	top:200px;
	left: 0px; 
  }
}
  </style>
  