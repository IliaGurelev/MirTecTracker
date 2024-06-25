<template>
	<link rel="icon" type="image/x-icon" href="../img/logo.svg">
	<body id="main">
	<Sidebar/>
	<section class="home-section">
		<div class="text">Миртек Трекер</div>
		<div class='app'>
			<main class='project'>
				<div class='project-info'>
					<h1 class="txt">{{ currentDashboardName }}</h1>
					<div class="search-task">        
						<input type="text" v-model="searchQuery" placeholder="Поиск задач">
						<div class="search-task__icon">
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>                        
					</div>
					<div class="project-info__button">
						<AddTaskButton />
						<span class="button__invite_code" @click="openInviteModal"><i class="fa-solid fa-user-plus"></i></span>
					</div>
					<InviteModal :isOpen="isInviteModalOpen" :dashboardName="currentDashboardName" :inviteCode="currentDashboardInviteCode" @close="closeInviteModal" @click="openInviteModal"/>
				</div>  
				<div v-if="searchQuery.trim() === ''">
					<ProjectTask :items="filteredTasks" :sort="sort"  />
				</div>
				<div v-else-if="foundTasks.length > 0">
					<ProjectTask :items="foundTasks" :sort="sort"   />
				</div>
				<div v-else>
					<div class="not-found">
						<img src="../assets/notfound.svg" alt="">
						<p class="not-found__title">Задачи не найдены</p>
					</div>
				</div>
			</main>
			<SidebarInfo :task="foundTasks" :isOpen="isSidebarOpen" :briefcases="briefcases"/>
			<ProgressBars :items="filteredTasks" :sort="true">
				<WorkerList 
					:workerList="userCurrentDashboard"
				/>
			</ProgressBars>
		</div>
	</section>
	</body>
</template>

<script setup>
	import { ref, computed, onMounted, watch } from 'vue';
  import { useRouter } from 'vue-router';
	import { useMainStore } from '@/store';
	import { storeToRefs } from 'pinia';

  import AddTaskButton from '@/components/Tasks/AddTask.vue';
	import Sidebar from '@/components/Sidebar/Sidebar.vue';
	import ProjectTask from '@/components/Tasks/ProjectTask.vue';
	import ProgressBars from '@/components/Tasks/ProgressTuskForDashboard/Progressbar.vue';
	import SidebarInfo from "@/components/Tasks/SideBarInfo/SideBarInfo.vue";
  import InviteModal from '@/components/ConfirmationModal/CopyInvite.vue';
	import WorkerList from '@/components/Tasks/WorkerList.vue';

	const store = useMainStore();
  const router = useRouter();
	const { tasks } = storeToRefs(store);
	const { briefcases } = storeToRefs(store);
	const { userCurrentDashboard } = storeToRefs(store);

	const searchQuery = ref('');
  const isInviteModalOpen = ref(false);
  
  const filteredTasks = computed(() => {
    if (!currentDashboard.value) return [];
    return tasks.value.filter(task => task.dashboardId === currentDashboard.value.id);
  });

	const foundTasks = computed(() => {
		const query = searchQuery.value.trim().toLowerCase();
		if (!query) return tasks.value;

		return tasks.value.filter(item => item.name.toLowerCase().includes(query));
	});
  
  const currentDashboardId = computed(() => parseInt(router.currentRoute.value.query.id));
  const currentDashboard = computed(() => {
		return store.dashboards.find(dashboard => dashboard.id === currentDashboardId.value);
  });
  
  const currentDashboardName = computed(() => {
		return currentDashboard.value ? currentDashboard.value.name : 'Дашборд со всеми задачами';
  });
  
  const currentDashboardInviteCode = computed(() => {
		return currentDashboard.value ? currentDashboard.value.invite : '';
  });
  

	const selectedTask = ref(null); 
	const isSidebarOpen = ref(false);

  const openInviteModal = () => {
		console.log(currentDashboard.value)
		isInviteModalOpen.value = true;
  };
  
  const closeInviteModal = () => {
		isInviteModalOpen.value = false;
  };

	watch(currentDashboard, () => {
		store.fetchByDashboardTasks(currentDashboard.value.id);
		store.fetchBriefcase(currentDashboard.value.id);
	})

	onMounted(() => {
		store.fetchByDashboardTasks(parseInt(router.currentRoute.value.query.id));
		store.fetchBriefcase(parseInt(router.currentRoute.value.query.id));
		store.fetchWorkers();
    store.fetchDashboards();
		store.fetchUsersByDashboard(parseInt(router.currentRoute.value.query.id));
	});
</script>

<style lang="scss" scoped>

  * {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Raleway", sans-serif;
  }
  
  body {
	color: var(--text);
	transition: background-color 0.3s ease;
  }

  .app {
	background-color: var(--bg);
	width: 100%;
	min-height: 100vh;
  }
  
  h1 {
	font-size: 30px;
  }
  .button__invite_code{
	position: relative;
	padding: 0.5rem;
	color: #707070;
	border-radius: 50%;
	background-color: var(--bg);
	overflow: hidden;
	border: 2px solid #dddddd;
	transition: background-color 0.2s linear, color 0.2s linear, border 0.2s linear, transform 0.5s;
	font-weight: 500;
	margin: auto;
  }
  .button__invite_code:hover {
	color: rgb(58, 58, 58);
	background-color: #e4e4e4;
	border: 2px solid #e4e4e4;
	transform: scale(1.05);
  }
  .search-task{
	width: 100%;
	right: 0;
	background: #e6e6e670;
	position: relative;
	margin: 0 auto;
	border-radius: 20px;
	font-weight: 500;
  }

  .search-task input{
	width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #dddddd;
  border-radius: 20px;
  outline: none;
  background: var(--bg);
  color: #000000;
  }

  .search-task__icon{
  position: absolute; 
  top: 0;
  right: 0px;
  width: 42px;
  height: 42px;
  font-size: 1.3rem;
  border: none;
  background: var(--bg);
  border-top: 2px solid #dddddd;
  border-right: 2px solid #dddddd;
  border-bottom: 2px solid #dddddd;
  border-radius: 0 20px 20px 0;
  cursor:auto;
  }
  .search-task__icon i{
	margin:10px;
	color:#dddddd;;
}
  .project {
	padding: 2rem;
	max-width: 75%;
	width: 100%;
	display: inline-block;
  }
  .project-info {
	position: sticky;
	top: 52px;
	padding: 2rem;
	display: grid;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	height: 60%;
	background-color: var(--bg);
	grid-template-columns: 50% 25% 15% 5%;
	grid-column-gap: 1.5rem;
	&__button{
		justify-content: space-between;
		align-items: center;
		display: grid;
		grid-template-columns: 100% 60%;
	}
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
  .project-column-heading__options {
	background: transparent;
	color: var(--light-grey);
	font-size: 18px;
	border: 0;
	cursor: pointer;
  }
  .not-found{
	display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
	height: auto;
  }
  .not-found__title{
	margin-top: 2rem;
	font-size: 20px;
	font-weight: 600; 
  }
  .not-found img{
	width: 30%;
  }
  @media only screen and (max-width: 1300px) {


	.project {
	  max-width: 100%;
	}
  
	.task-details {
	  width: 100%;
	  display: flex;
	  margin-top: -4rem;
	  position :relative;
	}
  
	.tag-progress,
  .task-activity {
	  flex-basis: 50%;
	  background: var(--white);
	  padding: 1rem;
	  border-radius: 8px;
	  margin: 1rem;
	}
  }
  @media only screen and (max-width: 1000px) {

	.not-found img{
	width: 50%;
  }
	.task-details{
		height: auto;
	}
	.project-column{
		margin-top: 1rem;
	}
	.project-tasks {
	  grid-template-columns: 1fr 1fr;
	}
	.sidebars-content {
  	  overflow-y: auto; 
	}

  }
  .home-section{
	position: relative;
	min-height: 100vh;
	top: 0;
	left: 78px;
	transition: all 0.5s ease;
	z-index: 2;
	width: 91%;
  }
  @media only screen and (max-width: 800px) {
	.form-container{
		display: flex;
	flex-direction: column;
	align-items: center;
	}
	.project-info{
		text-align: center;
		grid-template-columns: 100% ;
		grid-gap: 1.5rem;
		&__button{
			grid-template-columns: 60% 15%;
			grid-gap: 1.5rem;
		}
	}
	.home-section{
		width: 100%;
	}
	.project-tasks{
		display: flex;
		flex-direction: column;
		
	}
	.project-column{
		margin-top: 1rem;
	}
	 .txt {
		margin: auto;
	}
	.sidebar.open{
		position: fixed; 
		z-index: 1000; 
	}
	.home-section{
		position: static;
	} 
  }
  @media only screen and (max-width: 600px) {
	.project-tasks {
		flex-direction: column;
	}
  
	.task-details {
	  flex-wrap: wrap;
	  padding: 3rem 1rem;
	}
  
	.tag-progress,
  .task-activity {
	  flex-basis: 100%;
	}
  
	h1 {
	  font-size: 25px;
	}
  }

  @media(max-width: 800px) {
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