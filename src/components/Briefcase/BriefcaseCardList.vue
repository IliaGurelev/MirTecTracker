<template>
  <ul class="briefcase__list">
    <li>
      <BriefcaseAddCard />
    </li>
    <li 
      class="briefcase__item" 
      v-for="briefcase in briefcases"
      :key="briefcase.id"
    >
      <a class="briefcase__link" href="#">
        <BriefcaseCard 
          @click.stop="$emit('clickCard', briefcase)"
          :briefcase="briefcase" 
        />
      </a>
    </li>
  </ul>
</template>

<script setup>
  import BriefcaseCard from './BriefcaseCard.vue';
  import BriefcaseAddCard from './BriefcaseAddCard.vue';

  const props = defineProps({
    briefcases: {
      type: Array,
      required: true,
    }
  })
</script>

<style lang="scss" scoped>

</style>