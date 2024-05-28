<script setup>
  import Sidebar from '../Sidebar/Sidebar.vue';
  import Tаsk from '../Tasks/Task.vue';
  import ProgressBar from '../UI/Progressbar.vue';
</script>

<template>
<body id="main">
<Sidebar>

</Sidebar>
<section class="home-section">
		<div class="text">Миртек Трекер</div>
		<div class='app'>
		<main class='project'>
			<div class='project-info'>
			<h1 class="txt">Дашборд со всеми задачами</h1>
			</div>
			<div class='project-tasks'>
				<Tаsk :class="'project-column'">
			</Tаsk>
			</div>
	
		</main>
		<ProgressBar></ProgressBar>
	</div>
	</section>
</body>
</template>

<script >

</script>
<style>

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


</style>