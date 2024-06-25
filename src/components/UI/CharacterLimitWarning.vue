<template>
  <div v-if="showPopup" class="popup">
    <i class="fa-solid fa-triangle-exclamation"></i>
    Не больше {{ props.limit }} символов!
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  limit: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
})

const showPopup = ref(false)

const checkLength = () => {
  if (props.length >= props.limit) {
    showPopup.value = true

    setTimeout(() => {
      showPopup.value = false
    }, 2000)
  }
}

watch(() => props.length, checkLength)
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(255, 50, 50, 0.959);
  color: white;
  padding: 10px;
  border-radius: 5px;
  z-index: 4;
}
</style>
