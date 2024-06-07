<template>
	<Sidebar />
  <main class="briefcase">
		<h2 class="briefcase__title">Ваши портфели</h2>
		<section class="briefcase__section">
			<BriefcaseCardList
			 :briefcases="briefcases"
			 @clickCard="clickBriefcase"
			>	
				<BriefcaseAddCard
					@submitForm="addBriefcase"
				/>
			</BriefcaseCardList>
		</section>
	</main>
		<SidebarForContent
			v-if="isActiveSideBar"
			class="briefcase__sidebar"
			v-click-outside="() => switchShowSideBar(false)"
		>
			<div class="briefcase__properity">
				<i class="fa-solid fa-trash-can"></i>
				<div class="briefcase__properity-wrapper">
					<i class="fa-solid fa-pencil"></i>
					<i @click="switchShowSideBar(false)" class="fa-solid fa-xmark"></i>
				</div>
			</div>
			<section class="briefcase__task">
				<div class="briefcase__wrapper">
					<TaskBriefcase 
						class="briefcase__tag-briefcase" 
						:briefcase="currentBriefcase" 
					/>
					<ProgressBar class="briefcase__progress" />
				</div>
				<DetailTaskList
					class="briefcase__task-list"
					:tasksList="taskByBriefcase"
				/>
			</section>
		</SidebarForContent>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useMainStore } from '@/store';
	import { clickOutside as vClickOutside } from "v-click-outside-vue3"

	import BriefcaseCardList from '@/components/Briefcase/BriefcaseCardList.vue';
	import Sidebar from '@/components/Sidebar/Sidebar.vue';
	import SidebarForContent from '@/components/Sidebar/SidebarForContent.vue';
	import ProgressBar from '@/components/UI/ProgressBar.vue';
	import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
	import DetailTaskList from '@/components/Tasks/DetailTaskList.vue';
	import BriefcaseAddCard from '@/components/Briefcase/BriefcaseAddCard.vue';

	const store = useMainStore();

	const {briefcases, tasks} = storeToRefs(store);

	const isActiveSideBar = ref(false)
	const taskByBriefcase = ref([]);
	const currentBriefcase = ref({});

	const clickBriefcase = (briefcase = [], type) => {
		store.fetchTasks();
		taskByBriefcase.value = tasks.value.filter((task) => task.briefcase.name === briefcase.name)
		
		currentBriefcase.value = briefcase;

		if(!isActiveSideBar.value) {
			switchShowSideBar(true);
		}
	}

	const switchShowSideBar = (state) => {
		isActiveSideBar.value = state;
	}

	const hideSideBarOnEsc = (event) => {
		if(event.key === 'Escape') {
			switchShowSideBar(false);
		}
	}

	const addBriefcase = (briefcase) => {
		store.addBriefcase(briefcase);
	}

	onMounted(() => {
		store.fetchBriefcase();
		store.fetchTasks();
		document.addEventListener('keydown', hideSideBarOnEsc)
	})
</script>

<style lang="scss" scoped>
	.briefcase {
		margin-left: 110px;
		margin-top: 80px;

		&__title {
			margin-bottom: 20px;
			font-weight: 700;
			font-size: 30px;
			color: #2e2e2f;
			cursor: default;
		}

		&__properity {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 5px;
			font-size: 25px;
			text-align: right;
			background-color: #ffffff;
			box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
			border-radius: 11px;
			padding: 20px;

			i {
				cursor: pointer;
			}

			&-wrapper {
				display: flex;
				column-gap: 15px;
			}
		}

		&__list {
			display: flex;
			gap: 30px;
			flex-wrap: wrap;
			list-style: none;

			@media (max-width: 519px) {
				width: 100%;
				display: flex;
				flex-direction: column;
				align-items: center;
			}
		}

		&__link {
			text-decoration: none;
		}

		&__sidebar {
			display: flex;
			flex-direction: column;
			row-gap: 10px;
			overflow-y: auto;
			padding: 80px 10px 10px 10px;
			box-shadow: 0px 0px 8px 5px rgba(43, 43, 43, 0.034);
			width: 100%;
			max-width: 500px;
<<<<<<< HEAD
			z-index: 3;
=======
>>>>>>> parent of 6e60808 (лимит символов)
		}

		&__wrapper {
			display: flex;
			justify-content: space-between;
			column-gap: 10px;
			background-color: #ffffff;
			box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
			border-radius: 11px;
			padding: 20px;
		}

		&__tag-briefcase {
			margin: 0;

			:deep(.briefcase__element) {
				padding: 9px 20px;
				font-size: 20px;
			}
		}

		&__progress {
			width: 100%;
		}

		&__task-list {
			:deep(.task-list__list) {
				height: 100%;
				max-height: 100%;
			}
		}

		@media (max-width: 519px) {
			width: 100%;
			margin-left: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}
</style>