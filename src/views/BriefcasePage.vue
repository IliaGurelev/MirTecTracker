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
		<BriefcaseSideBar
			v-if="isActiveSideBar"
			v-click-outside="() => switchShowSideBar(false)"
			:briefcase="currentBriefcase"
			:taskByBriefcase="taskByBriefcase"
			@closeClick="switchShowSideBar(false)"
			@removeClick="removeBriefcase(currentBriefcase.id), switchShowSideBar(false)"
			@editBriefcase="editBriefcase"
			class="briefcase__sidebar"
		/>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	import { storeToRefs } from 'pinia';
	import { useMainStore } from '@/store';
	import { clickOutside as vClickOutside } from "v-click-outside-vue3"

	import BriefcaseCardList from '@/components/Briefcase/BriefcaseCardList.vue';
	import Sidebar from '@/components/Sidebar/Sidebar.vue';
	import BriefcaseAddCard from '@/components/Briefcase/BriefcaseAddCard.vue';
	import BriefcaseSideBar from '@/components/Briefcase/BriefcaseSideBar.vue';

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

	const editBriefcase = (briefcase) => {
		store.editBriefcase(briefcase);
	}

	const removeBriefcase = (id) => {
		store.removeBriefcase(id);
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
			z-index: 3;
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