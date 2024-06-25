<template>
  <div class="status">
    <span :class="statusInfo.classStatus" class="status__text">
      <i :class="statusInfo.iconStatus" class="status__icon fa-regular"> </i> {{ nameStatus }}
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import statusTaskConst from '@/constants/status.js'

const props = defineProps({
  taskStatus: {
    type: String,
    required: true
  }
})

const nameStatus = statusTaskConst[props.taskStatus]

const statusInfo = computed(() => {
  let iconStatus
  let classStatus = 'status__icon'
  switch (props.taskStatus) {
    case 'open':
      iconStatus = 'fa-circle-question'
      classStatus += '--open'
      break
    case 'work':
      iconStatus = 'fa-circle-play'
      classStatus += '--work'
      break
    case 'close':
      iconStatus = 'fa-circle-check'
      classStatus += '--close'
      break
    default:
      iconStatus = 'fa-circle-notch'
      classStatus += '--open'
      break
  }

  return {
    classStatus: classStatus,
    iconStatus: iconStatus
  }
})
</script>

<style lang="scss" scoped>
.status {
  position: absolute;
  right: 0;
  bottom: 0;

  &__text {
    border-radius: 100px;
    padding: 2px 13px;
    font-size: 12px;
    font-weight: 700;
  }

  &__icon {
    &--close {
      color: var(--status-close-text);
      background-color: var(--status-close);
    }

    &--open {
      color: var(--status-open-text);
      background-color: var(--status-open);
    }

    &--work {
      color: var(--status-inwork-text);
      background-color: var(--status-inwork);
    }
  }
}
</style>
