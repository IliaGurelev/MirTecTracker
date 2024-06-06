<template>
  <main class="login-page">
    <LoginForm />
    <RegistrationForm />
    <LoginSwitcher />
  </main>
</template>

<script setup>
  import LoginForm from '@/components/Login/LoginForm.vue'
  import RegistrationForm from '@/components/Login/RegistrationForm.vue'
  import LoginSwitcher from '@/components/Login/LoginSwitcher.vue';
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

  .main-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .main-header__link {
    z-index: 2;
  }

  .main-header__logo {
    width: 50px;
    height: 50px;
    padding: 10px;
  }

  .main-header__logo .s0,
  .main-header__logo .s1 {
    fill: var(--color-text-important);
  }

  .main-header__logo--white .s0,
  .main-header__logo--white .s1 {
    fill: #ffffff;
  }

  .main-header__button {
    display: none;
    font-size: 16px;
    color: #ffffff;
    margin: 15px 15px 15px 0;
    padding: 0 15px 0 15px;
    border-radius: 5px;
    background-color: var(--color-text-important);
    border: 2px solid var(--color-text-important);
    cursor: pointer;
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
    .main-header__button {
      display: inline;
    }

    .main-header__logo--white .s0,
    .main-header__logo--white .s1 {
      fill: var(--color-text-important);
    }
    
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

    #reg-form {
      display: none;
    }
  }
</style>