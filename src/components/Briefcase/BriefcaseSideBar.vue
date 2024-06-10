<template>
  <SidebarForContent class="sidebar">
			<div class="sidebar__properity">
				<i 
					@click="$emit('removeClick')" 
					class="fa-solid fa-trash-can"
				></i>
				<div class="sidebar__properity-wrapper">
					<i
						v-if="!isEdit" 
						@click.stop="switchIsEdit" 
						class="fa-solid fa-pencil"
					></i>
					<i 
						@click="$emit('closeClick')" 
						class="fa-solid fa-xmark"
					></i>
				</div>
			</div>
			<section class="sidebar__task">
				<div v-if="!isEdit" class="sidebar__wrapper">
					<TaskBriefcase 
						class="sidebar__tag-briefcase" 
						:briefcase="currentBriefcase" 
					/>
					<ProgressBar class="sidebar__progress" />
				</div> 
				<BriefcaseEdit
					v-else 
					:briefcase="currentBriefcase"
					@submitForm="editBriefcase"
				/>
				<DetailTaskList
					class="sidebar__task-list"
					:tasksList="props.taskByBriefcase"	
				/>
			</section>
		</SidebarForContent>
</template>

<script setup>
	import { ref, watchEffect } from 'vue';

  import SidebarForContent from '@/components/Sidebar/SidebarForContent.vue';
  import DetailTaskList from '@/components/Tasks/DetailTaskList.vue';
	import BriefcaseEdit from '@/components/Briefcase/BriefcaseEdit.vue';
	import TaskBriefcase from '@/components/Tasks/TaskBriefcase.vue';
	import ProgressBar from '@/components/UI/ProgressBar.vue';

	const props = defineProps({
		briefcase: {
			type: Object,
			required: true,
		},
		taskByBriefcase: {
			type: Object,
			required: true,
		},
	})

	const emit = defineEmits(['editBriefcase'])

	const currentBriefcase = ref(props.briefcase);

	const isEdit = ref(false);

	watchEffect(() => {
		currentBriefcase.value = props.briefcase;
	})

	const switchIsEdit = () => {
		isEdit.value = !isEdit.value;
	}

	const editBriefcase = (briefcase) => {
		emit('editBriefcase', briefcase);

		currentBriefcase.value = briefcase;

		switchIsEdit();
	}
</script>

<style lang="scss" scoped>
	.sidebar {
		display: flex;
		flex-direction: column;
		row-gap: 10px;
		overflow-y: auto;
		padding: 80px 10px 10px 10px;
		box-shadow: 0px 0px 8px 5px rgba(43, 43, 43, 0.034);
		width: 100%;
		max-width: 500px;

		&__task-list {
			:deep(.task-list__list) {
				height: 100%;
				max-height: 100%;
			}
		}

		&__wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			column-gap: 10px;
			background-color: #ffffff;
			box-shadow: 0px 0px 10px 5px rgba(43, 43, 43, 0.082);
			border-radius: 11px;
			padding: 20px;
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

		&__tag-briefcase {
			margin: 0;

			:deep(.briefcase__element) {
				padding: 9px 20px;
				font-size: 20px;
			}
		}

		&__progress {
			flex: 1 1 auto;
			max-width: 100%;
			min-width: 120px;
		}

		&__link {
			text-decoration: none;
		}
	}
</style>
