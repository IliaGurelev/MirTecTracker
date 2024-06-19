<template>
	<div class="search">
	  <div class="search__input-container" @click="toggleFocus">
		<transition name="slide-icon">
		  <div 
			v-if="selectedWorker && query.length > 0" 
			class="search__icon-wrapper"
			:class="{ 'search__icon-wrapper--active': isFocus || selectedWorker }"
		  >
			<img
			  v-if="selectedWorker.avatar"
			  :src="selectedWorker.avatar"
			  class="search__worker-icon"
			  alt="Worker Avatar"
			/>
			<div v-else class="search__worker-icon">👤</div>
		  </div>
		  <div 
			v-else-if="!filteredItems.length && query.length > 0"
			class="search__icon-wrapper"
			:class="{ 'search__icon-wrapper--active': isFocus }"
		  >
			😓
		  </div>
		  <div
			v-else
			class="search__icon-wrapper search__icon-wrapper--visible"
			:class="{ 'search__icon-wrapper--active': isFocus }"
		  >
			<i class="fa-solid fa-magnifying-glass"></i> 
		  </div>
		</transition>
		<input
		  type="text"
		  v-model="query"
		  placeholder="Поиск..."
		  class="search__input"
		  :class="{'--smooth-bottom': query.length === 0}"
		  @input="handleInput"
		/>
	  </div>
	  <transition name="slide">
		<ul v-show="isFocus" class="search__list --smooth-bottom" @click.stop>
		  <li v-if="!filteredItems.length">
			<p class="search__text">
			  Исполнители не найдены
			</p>
		  </li>
		  <li
			v-for="item in filteredItems"
			:key="item.id"
			class="search__item"
			@mousedown.prevent="selectWorker(item)"
		  >
			<img
			  v-if="item.avatar"
			  :src="item.avatar"
			  class="search__worker-icon"
			  alt="Worker Avatar"
			/>
			<div v-else class="search__worker-icon">👤</div>
			{{ item.nameUser }}
		  </li>
		</ul>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useMainStore } from '@/store';
  import { storeToRefs } from 'pinia';
  
  const store = useMainStore();
  const { usersData } = storeToRefs(store);
  
  onMounted(() => {
	store.fetchWorkers();
  });
  
  const emit = defineEmits(['select', 'update:query']); 
  
  const query = ref('');
  const selectedWorker = ref(null);
  const isFocus = ref(false);
  
  const filteredItems = computed(() => {
	if (!isFocus.value) {
	  return usersData.value;
	}
	return usersData.value.filter((item) =>
	  item.nameUser.toLowerCase().includes(query.value.toLowerCase())
	);
  });
  
  const toggleFocus = () => {
	isFocus.value = !isFocus.value;
  };
  
  const handleInput = () => {
	if (!query.value) {
	  isFocus.value = true;
	}
  };
  
  const selectWorker = (item) => {
	query.value = item.nameUser;
	selectedWorker.value = item;
	isFocus.value = false;
	emit('select', item);
	emit('update:query', item.nameUser);
  };
  </script>
  
  <style lang="scss" scoped>
  .search {
	border-radius: 8px;
	padding: 0 5px;
	border: 2px solid #c9c9c9;
	position: relative;
	z-index: 2;
  }
  
  .search__input {
	width: 100%;
	padding: 5px 25px 5px 40px;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
	&:focus {
	  outline: none;
	}
  }
  
  .search__list {
	position: absolute;
	top: calc(100% + 5px);
	left: 0;
	width: 100%;
	max-height: 90px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
	row-gap: 5px;
	padding: 10px;
	background-color: #ffffff;
  }
  
  .search__item {
	display: flex;
	align-items: center;
	column-gap: 10px;
	cursor: pointer;
  }
  
  .search__text {
	font-size: 14px;
  }
  
  .search__worker-icon {
	width: 25px;
	height: 25px;
	border-radius: 50%;
  }
  
  .search__input-container {
	position: relative;
	display: flex;
	align-items: center;
	width: 100%;
  }
  
  .search__icon-wrapper {
	position: absolute;
	left: 10px;
	display: flex;
	align-items: center;
	transition: transform 0.3s ease, opacity 0.3s ease;
	opacity: 0;
	transform: translateX(-20px);
  }
  
  .search__icon-wrapper--active {
	color: #c9c9c9;
	opacity: 1;
	transform: translateX(0);
  }
  
  .search__icon-wrapper--visible {
	color: #c9c9c9;
	opacity: 1;
	transform: translateX(0);
  }
  
  .--smooth-bottom {
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
  }
  
  .slide-icon-enter-active,
  .slide-icon-leave-active {
	transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .slide-icon-enter-from,
  .slide-icon-leave-to {
	opacity: 0;
	transform: translateX(-20px);
  }
  
  .slide-enter-active,
  .slide-leave-active {
	transition: all 0.3s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
	transform: translateY(-10px);
	opacity: 0;
  }
  </style>