<template>
  <div class="status">
    <span :class="['status__text', statusInfo.classStatus]" @click="toggleEdit">
      <i :class="['fa-regular', statusInfo.iconStatus, 'status__icon']"></i> {{ nameStatus }}
    </span>
    <transition name="dropdown-fade">
      <div v-if="isEditing" class="dropdown-menu">
        <select v-model="localStatus" @change="updateStatus" @blur="closeEdit">
          <option v-for="(status, key) in statusTaskConst" :key="key" :value="key">
            {{ status }}
          </option>
        </select>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import statusTaskConst from '@/constants/status.js'

const props = defineProps({
  taskStatus: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['update-status'])

const isEditing = ref(false)
const localStatus = ref(props.taskStatus)

watch(
  () => props.taskStatus,
  (newVal) => {
    localStatus.value = newVal
  }
)

const toggleEdit = () => {
  isEditing.value = !isEditing.value
}

const closeEdit = () => {
  isEditing.value = false
}

const updateStatus = () => {
  emit('update-status', localStatus.value)
  closeEdit()
}

const nameStatus = computed(() => statusTaskConst[localStatus.value])

const statusInfo = computed(() => {
  let iconStatus
  let classStatus = 'status__icon'
  switch (localStatus.value) {
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

<style scoped>
.status {
  position: relative;
}

.status__text {
  cursor: pointer;
  border-radius: 100px;
  padding: 2px 13px;
  font-size: 12px;
  font-weight: 700;
}

.status__icon--close {
  color: var(--status-close-text);
  background-color: var(--status-close);
}

.status__icon--open {
  color: var(--status-open-text);
  background-color: var(--status-open);
}

.status__icon--work {
  color: var(--status-inwork-text);
  background-color: var(--status-inwork);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 1000;
}

select {
  margin: 0;
  padding: 5px;
  width: 100%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
