<template>
  <div class="status__owners">
    <span class="status__owner" :class="classStatus">
      <i class="fa-solid" :class="iconStatus"></i> {{ nameStatus }}
    </span>
  </div>
</template>

<script setup>
  import statusTaskConst from '../../constants/status.js';

  const props = defineProps({
    taskStatus: String,
  })

  const nameStatus = statusTaskConst[props.taskStatus];

  let iconStatus;
  let classStatus;
  switch (props.taskStatus) {
    case 'open':
      iconStatus = 'fa-circle-notch';
      classStatus = 'status--open';
      break;
    case 'work':
      iconStatus = 'fa-circle-play';
      classStatus = 'status--work';
      break;
    case 'close':
      iconStatus = 'fa-circle-check';
      classStatus = 'status--close';
      break;
    default:
      iconStatus = 'fa-circle-notch';
      classStatus = 'status--open';
      break;
  }
</script>

<style scoped>
  .status__owners {
    position: absolute;
    right: 0;
    bottom: 0;

  }

  .status__owner{
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  .status--close {
    color: var(--status-close-text);
    background-color: var(--status-close);
  }

  .status--open {
    color: var(--status-open-text);
    background-color: var(--status-open);
  }

  .status--work {
    color: var(--status-inwork-text);
    background-color: var(--status-inwork);
  }
</style>