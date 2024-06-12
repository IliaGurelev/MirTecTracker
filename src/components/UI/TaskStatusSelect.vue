<template>
	<div class="status-select" ref="selectWrapper">
	  <div class="selected-option" @click="toggleDropdown">
		<span :class="statusInfo.classStatus" class="status__text">
		  <i :class="statusInfo.iconStatus" class="status__icon fa-regular"></i> {{ statusName }}
		</span>
	  </div>
	  <transition name="slide">
		<div class="dropdown" v-show="isDropdownOpen" @click.stop="">
		  <div v-for="(status, key) in statusOptions" :key="key" @click="selectStatus(key)">
			<span :class="status.classStatus" class="status__text">
			  <i :class="status.iconStatus" class="status__icon fa-regular"></i> {{ status.description }}
			</span>
		  </div>
		</div>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { computed, ref, onMounted, onUnmounted } from 'vue';
  import statusTaskConst from '@/constants/status.js';
  
  const props = defineProps({
	taskStatus: {
	  type: String,
	  required: true,
	},
  });
  const emit = defineEmits(['update-status']);
  
  const localStatus = ref(props.taskStatus);
  const isDropdownOpen = ref(false);
  const selectWrapper = ref(null);
  
  const statusOptions = {
	open: {
	  description: 'Открыт',
	  name: 'Open',
	  classStatus: 'status__icon--open',
	  iconStatus: 'fa-circle-question',
	},
	work: {
	  description: 'В работе',
	  name: 'Work',
	  classStatus: 'status__icon--work',
	  iconStatus: 'fa-circle-play',
	},
	close: {
	  description: 'Закрыт',
	  name: 'Close',
	  classStatus: 'status__icon--close',
	  iconStatus: 'fa-circle-check',
	},
  };
  
  const statusName = computed(() => statusTaskConst[localStatus.value]);
  
  const statusInfo = computed(() => {
	return statusOptions[localStatus.value];
  });
  
  const toggleDropdown = () => {
	isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const selectStatus = (key) => {
	localStatus.value = key;
	emit('update-status', key);
	isDropdownOpen.value = false;
  };
  
  const handleClickOutside = (event) => {
	if (isDropdownOpen.value && selectWrapper.value && !selectWrapper.value.contains(event.target)) {
	  isDropdownOpen.value = false;
	}
  };
  
  onMounted(() => {
	document.addEventListener('click', handleClickOutside);
  });
  
  onUnmounted(() => {
	document.removeEventListener('click', handleClickOutside);
  });
  </script>
  
  
  <style scoped>
  .status__text {
      border-radius: 100px;
      padding: 2px 13px;
      font-size: 12px;
      font-weight: 700;
	  cursor: pointer;
    }
  .status-select {
	position: relative;
  }
  
  .selected-option {
	border-radius: 100px;
	padding: 2px 13px;
	font-size: 12px;
	font-weight: 700;
	cursor: pointer;
  }
  
  .dropdown {
	position: absolute;
	top: calc(100% + 5px);
	left: 0;
	border-radius: 5px;
	border: 1px solid #c9c9c9;
	background-color: #fff;
	min-width: 100%;
	z-index: 100;
	overflow: hidden;
	transition: height 0.3s;
  }
  
  .dropdown div {
	padding: 5px;
  }
  
  .dropdown div:hover {
	background-color: #f0f0f0;
  }
  
  .status__icon--close {
	color: var(--status-close-text);
	background-color: var(--status-close);
  }
  
  .status__icon--open {
	color: var(--status-open-text);
	background-color: var(--status-open);
  }
  
  .status__icon--work {
	color: var(--status-inwork-text);
	background-color: var(--status-inwork);
  }
  
  .slide-enter-active, .slide-leave-active {
	transition: all 0.3s ease;
  }
  
  .slide-enter, .slide-leave-to {
	transform: translateY(-100%);
	opacity: 0;
  }
  </style>
  