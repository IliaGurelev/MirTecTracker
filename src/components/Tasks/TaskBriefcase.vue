<template>
  <div class="briefcase">
    <span :class="colorClass" class="briefcase__element">
      {{ props.briefcase.name }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  briefcase: {
    type: Object,
    required: true
  }
})

let colorClass = computed(() => `briefcase--${props.briefcase.color}`)
</script>

<style lang="scss" scoped>
.briefcase {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__element {
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  &--purple {
    color: var(--tag-4-text);
    background-color: var(--tag-4);
  }

  &--blue {
    color: var(--tag-3-text);
    background-color: var(--tag-3);
  }

  &--green {
    color: var(--tag-2-text);
    background-color: var(--tag-2);
  }

  &--orange {
    color: var(--tag-5-text);
    background-color: var(--tag-5);
  }
}
</style>
