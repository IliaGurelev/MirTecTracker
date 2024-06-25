<template>
	<div class="bottom_content">
	  <div class="bottom expand_sidebar" @click="expandSidebar">
		<span class="text__down"> Зафиксировать</span>
		<i class="fa-solid fa-chevron-right"></i>
	  </div>
	  <div class="bottom collapse_sidebar" @click="closeSidebar">
		<span class="text__down"> Скрыть</span>
		<i class="fa-solid fa-chevron-left"></i>
	  </div>
	</div>
  </template>
  
  <script setup>
  const props = defineProps({
	expandSidebar: {
	  type: Function,
	  required: true,
	},
	closeSidebar: {
	  type: Function,
	  required: true,
	},
  });
  </script>
  
  <style scoped>
  .text__down{
		font-weight: 600;
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
	.sidebar.close .item_btn::before{
		margin-left: 20rem;
	}
	
	.sidebar.close .item::before{
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
  