<template>
	<link rel="icon" type="image/x-icon" href="../img/logo.svg">
	<body id="main">
	<Sidebar>
	</Sidebar>
	<section class="home-section">
			<div class="text">Миртек Трекер</div>
			<div class='app'>
			<main class='project'>
				<div class='project-info'>
					<h1 class="txt">Дашборд со всеми задачами</h1>
					<DeleteTask :items="tasks" :sort="true"></DeleteTask>
				</div>			
				<ProjectTask :items="tasks" :sort="true" />
			</main>
			<ProgressBars :items="tasks"/>
		</div>
		</section>
	</body>
</template>

<script setup>
	import { onMounted } from 'vue';
	import { useMainStore } from '@/store';
	import { storeToRefs } from 'pinia';
	import Sidebar from '@/components/Sidebar/Sidebar.vue';
	import ProjectTask from '@/components/Tasks/ProjectTask.vue'
  	import DeleteTask from '@/components/Tasks/DeleteTask.vue';
	import ProgressBars from '@/components/Tasks/ProgressTuskForDashboard/Progressbar.vue'; 

	const store = useMainStore();

	const {tasks} = storeToRefs(store);
	onMounted(() => {
		store.fetchTasks();
  }) 	
  
</script>

<style scoped>

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
  
  .project {
	padding: 2rem;
	max-width: 75%;
	width: 100%;
	display: inline-block;
  }
  .project-info {
	position: sticky;
	top: 52px;
	padding: 2rem 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	z-index: 100;
	height: 120px;
	background-color: var(--bg);
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