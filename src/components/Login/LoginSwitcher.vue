<template>
  <div class="login-page__switcher switcher" :class="{ 'switcher--left': isRegistration }">
    <div class="switcher__content --center">
      <p v-if="!isRegistration" class="switcher__title">У вас нету аккаунта?</p>
      <p v-if="!isRegistration" class="switcher__subtitle">
        Давайте подготовим вас ко всему, чтобы вы могли начать создавать свой первый опыт работы на
        платформе.
      </p>
      <p v-if="isRegistration" class="switcher__title">У вас есть аккаунт?</p>
      <p v-if="isRegistration" class="switcher__subtitle">
        Войдите и продолжайте создавать свой опыт работы на платформе.
      </p>
      <button class="switcher__btn" id="switch-btn" @click="$emit('clickSwitch')">
        <p v-if="!isRegistration">Зарегистрироваться</p>
        <p v-else-if="isRegistration">Войти</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  isRegistration: {
    type: Boolean,
    required: true
  }
})

const isRegistration = ref(props.isRegistration)

watchEffect(() => {
  isRegistration.value = props.isRegistration
})
</script>

<style lang="scss" scoped>
.switcher {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: var(--color-text-important);
  clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 20% 100%);
  transition:
    clip-path 0.6s,
    right 0.6s cubic-bezier(0.68, -0.55, 0.27, 0.87);

  &--left {
    top: 0;
    right: 50%;
    clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 0% 100%);
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
    max-width: 500px;
  }

  &__title {
    margin-bottom: 25px;
    font-size: 28px;
    font-weight: 700;
  }

  &__subtitle {
    text-align: center;
    margin-bottom: 20px;
  }

  &__btn {
    border: 2px solid #ffffff;
    padding: 5px 15px;
    font-size: 20px;
    color: #ffffff;
    background-color: var(--color-text-important);
    border-radius: 5px;
    transition: padding 0.3s;
    cursor: pointer;

    &:hover {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}

.--center {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
