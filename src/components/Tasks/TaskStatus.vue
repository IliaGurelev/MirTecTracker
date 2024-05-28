<template>
  <div class="status-owners">
    <span class="status-owner" :class="classStatus">
      <i class="fa-solid" :class="iconStatus"></i> {{ nameStatus }}
    </span>
  </div>
</template>

<script setup>
  import statusTaskConst from '@/constants/status.js';

  const props = defineProps({
    taskStatus: {
      type: String,
      required: true,
    },
  })

  const nameStatus = statusTaskConst[props.taskStatus];

  let iconStatus;
  let classStatus = 'status';
  switch (props.taskStatus) {
    case 'open':
      iconStatus = 'fa-circle-notch';
      classStatus += '--open';
      break;
    case 'work':
      iconStatus = 'fa-circle-play';
      classStatus += '--work';
      break;
    case 'close':
      iconStatus = 'fa-circle-check';
      classStatus += '--close';
      break;
    default:
      iconStatus = 'fa-circle-notch';
      classStatus += '--open';
      break;
  }
</script>

<style scoped>
  .status-owners {
    position: absolute;
    right: 0;
    bottom: 0;

  }

  .status-owner{
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