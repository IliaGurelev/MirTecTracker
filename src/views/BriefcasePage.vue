<template>
  <main class="portfolio">
		<h2 class="portfolio__title">Ваши портфели</h2>
		<section class="portfolio__section">
			<ul class="portfolio__list">
				<li 
					class="portfolio__item" 
					v-for="briefcase in briefcases"
					:key="briefcase.id"
				>
					<a class="portfolio__link" href="#">
						<BriefcaseCard :briefcase="briefcase" />
					</a>
				</li>
			</ul>
		</section>
	</main>
</template>

<script setup>
	import { onMounted } from 'vue';
	import { useMainStore } from '@/store';
	import BriefcaseCard from '@/components/Briefcase/BriefcaseCard.vue';
	import { storeToRefs } from 'pinia';

	const store = useMainStore();

	const {briefcases} = storeToRefs(store);

	onMounted(() => {
		store.fetchBriefcase();
	})
</script>

<style lang="scss" scoped>
	.portfolio {
		margin-left: 20px;
		margin-top: 10px;

		&__title {
			margin-bottom: 20px;
			font-weight: 400;
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
	}
</style>