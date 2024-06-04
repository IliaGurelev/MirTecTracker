<template>
	<Sidebar />
  <main class="briefcase">
		<h2 class="briefcase__title">Ваши портфели</h2>
		<section class="briefcase__section">
			<BriefcaseCardList
			 :briefcases="briefcases"
			 @clickCard="clickBriefcase"
			/>
		</section>
	</main>
		<SidebarForContent
			v-if="isActiveSideBar"
			class="briefcase__sidebar"
			v-click-outside="() => switchShowSideBar(false)"
		>
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
	import BriefcaseAddCard from '@/components/Briefcase/BriefcaseAddCard.vue';
	import DetailTaskList from '@/components/Tasks/DetailTaskList.vue';

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

		&__list {
			display: flex;
			gap: 30px;
			flex-wrap: wrap;
			list-style: none;
		}

		&__link {
			text-decoration: none;
		}

		&__sidebar {
			overflow-y: auto;
			padding: 80px 10px 10px 10px;
			box-shadow: 0px 0px 8px 5px rgba(43, 43, 43, 0.034);
			width: 100%;
			max-width: 500px;
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
	}
</style>