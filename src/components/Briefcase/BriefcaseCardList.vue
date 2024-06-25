<template>
  <ul class="briefcase__list">
    <li>
      <slot></slot>
    </li>
    <li class="briefcase__item" v-for="briefcase in briefcases" :key="briefcase.id">
      <BriefcaseCard @click.stop="$emit('clickCard', briefcase)" :briefcase="briefcase" />
    </li>
  </ul>
</template>

<script setup>
import BriefcaseCard from './BriefcaseCard.vue'

const props = defineProps({
  briefcases: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss" scoped></style>
