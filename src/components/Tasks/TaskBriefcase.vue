<template>
  <div class="briefcase-wrap">
    <span class="briefcase" :class="colorClass">{{ briefcase.name }}</span>
  </div>
</template>

<script setup>
  const props = defineProps({
    briefcase: {
      type: Object,
      required: true,
    },
  })
  
  const color = props.briefcase.color;

  let colorClass = `briefcase--${color}`;
</script>

<style scoped>
  .briefcase-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 7px;
  }

  .briefcase {
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  .briefcase--purple {
    color: var(--tag-4-text);
    background-color: var(--tag-4);
  }

  .briefcase--blue {
      color: var(--tag-3-text);
      background-color: var(--tag-3);
    }

  .briefcase--green {
    color: var(--tag-2-text);
    background-color: var(--tag-2);
  }

  .briefcase--orange {
    color: var(--tag-5-text);
    background-color: var(--tag-5);
  }
</style>