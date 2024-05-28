<template>
  <div class="task__tags">
    <span class="task__tag" :class="colorClass">{{ briefcaseName }}</span>
  </div>
</template>

<script setup>
  import colorConst from '@/constants/color.js';

  const props = defineProps({
    briefcase: Object,
  })

  const briefcaseName = props.briefcase.name;
  const color = props.briefcase.color;

  let colorClass;
  switch (color) {
      case colorConst.purple:
          colorClass = 'task__tag--purple';
          break;
      case colorConst.green:
          colorClass = 'task__tag--green';
          break;
      case colorConst.blue:
          colorClass = 'task__tag--blue';
          break;
      case colorConst.orange:
          colorClass = 'task__tag--orange';
          break;
      default:
          colorClass = 'task__tag--blue';
          break;
  }
</script>

<style scoped>
  .task__tags {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 7px;
  }

  .task__tag {
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  .task__tag--purple {
    color: var(--tag-4-text);
    background-color: var(--tag-4);
  }

  .task__tag--blue {
      color: var(--tag-3-text);
      background-color: var(--tag-3);
    }

  .task__tag--green {
    color: var(--tag-2-text);
    background-color: var(--tag-2);
  }

  .task__tag--orange {
    color: var(--tag-5-text);
    background-color: var(--tag-5);
  }
</style>