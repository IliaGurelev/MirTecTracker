<template>
	<div class="search">
	  <div class="search__input-container" @click="toggleFocus">
		<transition name="slide-icon">
		  <div 
			v-if="selectedBriefcase && query.length > 0" 
			class="search__icon-wrapper"
			:class="{ 'search__icon-wrapper--active': isFocus || selectedBriefcase }"
		  >
			<BriefcaseIcon
			  class="search__briefcase-icon"
			  :class="`portfolio-card__icon--${selectedBriefcase.color}`"
			/>
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
		  :class="{'--smouth-bottom': query.length === 0}"
		  @input="handleInput"
		/>
	  </div>
	  <transition name="slide">
		<ul v-show="isFocus" class="search__list --smouth-bottom" @click.stop>
		  <li v-if="!filteredItems.length">
				<p class="search__text">
					Портфели не найдены
				</p>
		  </li>
		  <li v-if="availableBriefcase && filteredItems.length === 0">
				<p class="search__text">
					У вас нет портфелей, добавьте их
					<RouterLink :to="{name: 'Briefcase'}" class="search__link">здесь</RouterLink>
				</p>
		  </li>
		  <li
				v-for="item in filteredItems"
				:key="item.id"
				class="search__item"
				@mouseup.prevent="selectBriefcase(item)"
		  >
				<BriefcaseIcon
					class="search__briefcase-icon"
					:class="`portfolio-card__icon--${item.color || getFirstColor(filteredItems)}`"
				/>
				{{ item.name }}
		  </li>
		</ul>
	  </transition>
	</div>
  </template>
  
  <script setup>
  import { ref, computed, defineEmits, defineExpose, watchEffect } from 'vue';
  import BriefcaseIcon from '@/assets/BriefcaseIcon.vue';
  
  const props = defineProps({
	briefcases: {
	  type: Array,
	  required: false,
	  default: () => [],
	},
  });
  
  const emit = defineEmits(['update:query', 'select']);
  
  const query = ref('');
  const selectedBriefcase = ref(null);
  const isFocus = ref(false);
  const availableBriefcase = computed(() => props.briefcases.length === 0);
  
  const filteredItems = computed(() => {
	if (!isFocus.value) {
	  return props.briefcases;
	}
	return props.briefcases.filter((briefcase) =>
	  briefcase.name.toLowerCase().includes(query.value.toLowerCase())
	);
  });
  
  const toggleFocus = () => {
	isFocus.value = !isFocus.value;
  };
  
  const handleInput = () => {
	emit('update:query', query.value);
	if (!query.value) {
	  isFocus.value = true;
	}
  };
  
  
  const selectBriefcase = (item) => {
		query.value = item.name;
		selectedBriefcase.value = item;
		emit('update:query', query.value);
		emit('select', item);
		isFocus.value = false;
  };
  
  watchEffect(() => {
	const closeOnClickOutside = (event) => {
	  if (!event.target.closest('.search__input-container')) {
		isFocus.value = false;
	  }
	};
	document.addEventListener('click', closeOnClickOutside);
	return () => document.removeEventListener('click', closeOnClickOutside);
  });
  
  defineExpose({ selectedBriefcase });
  
  const getFirstColor = (items) => {
	if (items.length > 0) {
	  return items[0].color;
	}
  };
  </script>
  
  <style lang="scss" scoped>
  .search {
	border-radius: 8px;
	padding: 0 5px;
	border: 2px solid #c9c9c9;
	position: relative;
	z-index: 2;
	margin-left: 50px;
  }
  
  .search__input {
	width: 100%; /* Добавлено, чтобы input занимал всю ширину */
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
  
  .search__link {
	color: var(--color-text-important);
  }
  
  .search__briefcase-icon {
	width: 25px;
	padding: 3px;
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
  
  .--smouth-bottom {
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
  