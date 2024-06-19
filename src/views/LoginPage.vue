<template>
  <main class="login-page">
    <LoginHeader 
      :isRegistration="isRegistration"
      @clickSwitch="switchMode"
    />
    <LoginForm v-if="!isRegistration"/>
    <RegistrationForm 
      v-else 
      @registrationForm="registrationUser"
    />
    <LoginSwitcher 
      :isRegistration="isRegistration"
      @clickSwitch="switchMode"
    />
  </main>
</template>

<script setup>
  import {ref} from 'vue';
  import { useMainStore } from '@/store';

  import LoginForm from '@/components/Login/LoginForm.vue'
  import RegistrationForm from '@/components/Login/RegistrationForm.vue'
  import LoginSwitcher from '@/components/Login/LoginSwitcher.vue';
  import LoginHeader from '@/components/Login/LoginHeader.vue';

  const props = defineProps({
    isRegistration: {
      type: Boolean,
      required: false,
      default: false,
    }
  })

  const store = useMainStore();

  const isRegistration = ref(props.isRegistration);

  const switchMode = () => {
    isRegistration.value = !isRegistration.value;
  }

  const registrationUser = (user) => {
    store.registrationUser(user);
  }

</script>

<style lang="scss" scoped>
  [class$="--muted"] {
    color: gray;
  }

  .--center {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .--center-to-left {
    position: absolute;
    top: 50%;
    left: 25%;
    margin-right: -25%;
    transform: translate(-50%, -50%);
  }

  .--center-to-right {
    position: absolute;
    top: 50%;
    right: 25%;
    margin-right: -25%;
    transform: translate(-50%, -50%);
  }

  [class$="--column"] {
    flex-direction: column;
  }

  .--transparent {
    opacity: 0 !important;
  }

  /* Адаптация */

  @media (max-width: 1700px) {
    .--center-to-right {
      position: absolute;
      top: 50%;
      right: 25%;
      margin-right: -25%;
      transform: translate(-25%, -50%);
    }
  }

  @media (max-width: 1500px) {
    .--center-to-right {
      position: absolute;
      top: 50%;
      right: 25%;
      margin-right: -25%;
      transform: translate(-15%, -50%);
    }

    .switcher {
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%);
    }

    .switcher--left {
      clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%);
    }
  }

  @media (max-width: 1250px) {
    .--center-to-right {
      position: absolute;
      top: 50%;
      right: 25%;
      margin-right: -25%;
      transform: translate(-15%, -50%);
    }

    .switcher {
      clip-path: none;
      transition: clip-path 0.6s, right 0.5s ease-out;
    }
  }

  @media (max-width: 1120px) {
    .login-page {
      display: flex;
      flex-direction: column;
    }
    
    .login-form {
      position: relative;
      margin: 0 auto;
      padding: 10px;
    }

    .switcher {
      display: none;
    }

    .switcher__content {
      position: relative;
      margin: 0 auto;
    }

    .switcher__content.--center {
      position: relative;
      transform: none;
    }

    .switcher--left {
      right: 0;
    }

    .login-form.--center-to-left {
      top: 0;
      left: 0;
      transform: none;
    }

    .--center-to-right {
      top: 0;
      right: 0;
      transform: none;
    }

    .--center {
      top: 0;
      left: 0;
    }
    
    .--transparent {
      opacity: 1 !important;
    }
  }
</style>