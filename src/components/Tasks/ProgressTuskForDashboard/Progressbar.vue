<template>
	<aside class='task-details'>
		<slot></slot>
		<h2>Статус задач по портфелям</h2>
		<div v-for="(barData, index) in progressBarsData" :key="index" class="tag-progress">
			<div class='tag-progress'>
				<p>{{ barData.label }} <span>{{barData.completedCount}} / {{barData.openCount  }}</span></p>
				<div class="progress-bar__progress" :style="{width: 100 + '%', backgroundColor: barData.color}">
					<div class="progress" :style="{width: barData.progress + '%', backgroundColor: barData.bcolor}"></div>
				</div> 
			</div>
		</div>
	  </aside>
	</template>
	
	<script setup>
	import { defineProps, computed } from 'vue';
	
	const props = defineProps({
	  items: {
		type: Object,
		required: true
	  },
	  colors: {
		type: Object,
		default: () => ({
		  "purple": "#f2dcf5",
		  "blue": "#ceecfd",
		  "green": "#d6ede2",
		  "orange": "#fde3ce",
		})
	  },
	  backcolor: {
		type: Object,
		default: () => ({
		  "purple": "#a734ba",
		  "blue": "#2d86ba",
		  "green": "#13854e",
		  "orange": "#ba662e",
		})
	  }
	});
	
	const progressBarsData = computed(() => {
	  const uniqueBriefcases = Array.from(new Set(props.items.map(item => item.briefcase.name)));
	  const data = [];
	
	  uniqueBriefcases.forEach(name => {
		const totalTasks = props.items.filter(item => item.briefcase.name === name).length;
		const completedTasks = props.items.filter(item => item.briefcase.name === name && item.status === "close").length;
		const progress = (completedTasks / totalTasks) * 100;
		const briefcaseColor = props.items.find(item => item.briefcase.name === name).briefcase.color;
	
		data.push({
		  label: name,
		  progress,
		  color: props.colors[briefcaseColor] || "#9E9E9E",
		  bcolor: props.backcolor[briefcaseColor] || "#9E9E9E",
		  openCount: totalTasks,
		  completedCount: completedTasks
		});
	  });
	
	  return data;
	});
	</script>
	
	<style scoped>
	  .progress {
		width: 100%;
		border: none;
		border-radius: 10px;
		height: 10px;
	  }
	  .task-details {
		position: fixed;
		top: 20px;
		margin-top: 1rem;
		width: 24%;
		border-left: 1px solid #d9e0e9;
		display: inline-block;
		flex-direction: column;
		height: 100vh;
		vertical-align: top;
		padding: 3rem 2rem;
	  }
	  .tag-progress {
		margin: 1.5rem 0;
	  }
	  .tag-progress h2 {
		font-size: 16px;
		margin-bottom: 1rem;
	  }
	  .tag-progress p {
		display: flex;
		width: 100%;
		justify-content: space-between;
		font-weight: 600;
		margin-bottom: 0.5rem
	  }
	  .tag-progress p span {
		color: #b4b4b4;
		font-weight: 700;
	  }
	  .progress-bar__label {
		display: flex;
		width: 100%;
		justify-content: space-between;
		font-weight: 500;
	  }
	  .progress-bar__stats-item {
		color: #b4b4b4;
		font-weight: 700;
	  }
	  .tag-progress .progress::-webkit-progress-bar, .tag-progress .progress::-webkit-progress-value {
		border-radius: 5px;
	  }
	  .progress-bar__progress {
		width: 100%;
		border: none;
		border-radius: 10px;
		height: 10px;
		z-index: 200;
	  }
	</style>
	