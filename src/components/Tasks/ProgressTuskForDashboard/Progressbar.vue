<template>
	<div class="progress-bars-container">
	  <div v-for="(progressBar, index) in progressBarsData" :key="index" class="progress-bar">
		<div class="progress-bar__title">{{ progressBar.title }}</div>
		<div class="progress-bar__fill" :style="{ width: `${progressBar.progress * 100}%`, backgroundColor: progressBar.color }"></div>
		<span class="progress-bar__percentage">{{ (progressBar.progress * 100).toFixed(0) }}%</span>
	  </div>
	</div>
  </template>
  
  <script setup>
  
  const { progressBarsData } = defineProps({
	progressBarsData: {
	  type: Array,
	  required: true
	}
  });
  
  </script>
  
  <style scoped>
  .progress-bars-container {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-top: 20px;
  }
  
  .progress-bar {
	display: flex;
	align-items: center;
	background-color: #ff0000;
	border-radius: 4px;
	padding: 5px 10px;
	min-width: 150px;
  }
  
  .progress-bar__title {
	font-weight: bold;
	margin-right: 10px;
  }
  
  .progress-bar__fill {
	height: 10px;
	border-radius: 4px;
	flex-grow: 1;
  }
  
  .progress-bar__percentage {
	margin-left: 10px;
  }
  </style>