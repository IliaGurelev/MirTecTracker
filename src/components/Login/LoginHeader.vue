<template>
  <header class="main-header">
    <RouterLink to="/" class="main-header__link">
      <svg 
        :class="{'main-header__logo--white': isRegistration}"
        class="main-header__logo" 
        id="main-header-logo" 
        version="1.2" xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 500 500" 
        width="500" 
        height="500" 
        nighteye="disabled"
      >
        <path id="Layer" class="s0" d="m371.1 456.9h117.5v-290.9l-0.6-63.9z"/>
        <path id="Layer" class="s0" d="m175.4 166v290.9h117.6l-117-354.8z"/>
        <path id="Layer" class="s1" d="m11 394.8l82.2 62.1v-413.9h-82.2z"/>
        <path id="Layer" class="s0" d="m232.1 43l99 313.9h1.8l99-313.9z"/>
      </svg>
    </RouterLink>
    <button 
    id="main-header-switch-button" 
    class="main-header__button"
    @click="$emit('clickSwitch')"
    >
      <p v-if="!isRegistration">Зарегистрироваться</p>
      <p v-else>Войти</p>
    </button>
  </header>
</template>

<script setup>
  import {ref, watchEffect} from 'vue';

  const props = defineProps({
    isRegistration: {
      type: Boolean,
      required: true,
    }
  })

  const isRegistration = ref(props.isRegistration)

  watchEffect(() => {
    isRegistration.value = props.isRegistration;
  })
</script>

<style lang="scss" scoped>
  .main-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .main-header__link {
    z-index: 2;
  }

  .main-header__logo {
    width: 70px;
    height: 70px;
    padding: 10px;
  }

  .main-header__logo .s0,
  .main-header__logo .s1 {
    fill: var(--color-text-important);
  }

  .main-header__logo--white .s0,
  .main-header__logo--white .s1 {
    fill: #ffffff;

    @media (max-width: 1120px) {
      fill: var(--color-text-important);
    }
  }

  .main-header__button {
    display: none;
    font-size: 18px;
    color: #ffffff;
    margin: 15px 15px 15px 0;
    padding: 0 15px 0 15px;
    border-radius: 5px;
    background-color: var(--color-text-important);
    border: 2px solid var(--color-text-important);
    cursor: pointer;

    @media (max-width: 1120px) {
      display: inline;
    }
  }

  .s0 { fill: #0e8bc2 } 
  .s1 { fill: #0655a0 } 
</style>