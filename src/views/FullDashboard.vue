<template>
	<link rel="icon" type="image/x-icon" href="../img/logo.svg">
	<body id="main">
	<Sidebar/>
	<section class="home-section">
		<div class="text">Миртек Трекер</div>
		<div class='app'>
			<main class='project'>
				
				<div class='project-info'>
					<h1 class="txt">Дашборд со всеми задачами</h1>
					<div class="search-task">		
						<input type="text" v-model="searchQuery" placeholder="Поиск задач">
						<div class="search-task__icon">
							<i class="fa-solid fa-magnifying-glass"></i>
						</div>						
					</div>
					<AddTaskButton />
				</div>	
				<div v-if="searchQuery.trim() === ''">
					<ProjectTask :items="tasks" :sort="sort"  />
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
			<SidebarInfo :task="selectedTask" :isOpen="isSidebarOpen" />
			<ProgressBars :items="tasks" :sort="true"/>
		</div>
	</section>
	</body>
</template>

<script setup>
	import { ref, computed } from 'vue';
	import AddTaskButton from '@/components/Tasks/AddTask.vue';
	import { onMounted } from 'vue';
	import { useMainStore } from '@/store';
	import { storeToRefs } from 'pinia';
	import Sidebar from '@/components/Sidebar/Sidebar.vue';
	import ProjectTask from '@/components/Tasks/ProjectTask.vue';
	import ProgressBars from '@/components/Tasks/ProgressTuskForDashboard/Progressbar.vue';
	import SidebarInfo from "@/components/Tasks/SideBarInfo/SideBarInfo.vue";

	const store = useMainStore();
	const { tasks } = storeToRefs(store);

	onMounted(() => {
		store.fetchTasks();
	});

	const searchQuery = ref('');

	const foundTasks = computed(() => {
		const query = searchQuery.value.trim().toLowerCase();
		if (!query) return tasks.value;

		return tasks.value.filter(item => item.name.toLowerCase().includes(query));
	});

	const selectedTask = ref(null); 
const isSidebarOpen = ref(false);
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
  
  .search-task{
	width: 100%;
	right: 0;
	background: #e6e6e670;
	position: relative;
  margin: 0 auto;
  border-radius: 20px;
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
	grid-template-columns: 50% 25% 20%;
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