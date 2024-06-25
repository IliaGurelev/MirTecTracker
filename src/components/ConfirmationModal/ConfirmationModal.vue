<template>
  <transition name="modal-fade">
    <div
      v-if="visible || modalVisible"
      class="modal-overlay"
      @click.self="cancel"
      @keydown.esc="handleEsc"
    >
      <div class="modal">
        <button class="close-button" @click="cancel"><i class="fa-solid fa-xmark"></i></button>
        <div class="modal-content">
          <p>Вы уверены, что хотите удалить этот элемент?</p>
          <button class="modal-content__button" @click="confirm">Да</button>
          <button class="modal-content__button" @click="cancel">Нет</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const modalVisible = ref(false)

const props = defineProps({
  visible: Boolean
})

const emit = defineEmits(['confirm', 'cancel'])

const confirm = () => {
  emit('confirm')
}

const cancel = () => {
  emit('cancel')
}

const handleEsc = (event) => {
  if (event.key === 'Escape') {
    cancel()
  }
}

watch(
  () => props.visible,
  (newVal) => {
    modalVisible.value = newVal
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleEsc)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEsc)
})
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.329);
  max-width: 90%;
  width: 400px;
  max-height: 80%;
  overflow-y: auto;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.modal-content {
  padding: 20px;
  font-weight: 500;
}

.modal-content__button {
  position: relative;
  padding: 0.5rem 1rem;
  color: #707070;
  border-radius: 8px;
  background-color: var(--bg);
  font-weight: 500;
  overflow: hidden;
  border: 2px solid #dddddd;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    transform 0.5s;
  margin: 0.3rem;
}

.modal-content__button:hover {
  color: rgb(58, 58, 58);
  background-color: #e4e4e4;
  border: 2px solid #e4e4e4;
  transform: scale(1.05);
}

.close-button {
  position: absolute;
  top: 5px;
  right: 5px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #c9c9c9;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    transform 0.5s;
}

.close-button:hover {
  color: black;
}
</style>
