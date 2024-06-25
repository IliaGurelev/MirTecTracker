<template>
  <div class="worker">
    <img
      v-if="imageExists"
      :src="props.worker.avatar"
      :alt="props.worker.name"
      class="worker__icon"
      @error="handleImageError"
    />
    <UserIcon v-else class="worker__icon" />
  </div>
</template>

<script setup>
import UserIcon from '@/assets/UserIcon.vue'
import { ref } from 'vue'

const props = defineProps({
  worker: {
    type: Object,
    required: true
  }
})

const imageExists = ref(props.worker.avatar !== '')

const handleImageError = () => {
  imageExists.value = false
}
</script>

<style lang="scss" scoped>
.worker {
  width: 30px;
  position: relative;

  &__icon {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: #ffffff 4px solid;
    cursor: pointer;
  }
}
</style>
