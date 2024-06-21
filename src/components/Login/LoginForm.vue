<template>
  <section id="login-form" class="login-page__login-form login-form --center-to-left">
    <h2 class="login-form__title">Войдите в ваш аккаунт</h2>
    <p class="login-form__subtitle login-form__subtitle--muted">Войдите в свою учетную запись, чтобы продолжить создавать и редактировать свои задачи.</p>
    <form class="login-form__form" action="" @submit.prevent="$emit('submitForm', mailUser, passwordUser)">
      <LoginInput 
        v-model="mailUser"
        :idInput="'login-mail'"
        :labelInput="'Почта'"
        :placeholderInput="'Ваша почта'"
        :typeInput="'email'"
        :warningMessage="'Введите валидный email'"
        :isValid="validEmail"
      />
      <LoginInput 
        v-model="passwordUser"
        :idInput="'login-password'"
        :labelInput="'Пароль'"
        :placeholderInput="'Ваш Пароль'"
        :typeInput="'password'"
        :warningMessage="'Пароль должен содержать минимум 8 символов'"
        :isValid="validPassword"
      />
      <div class="login-form__wrap">
        <input class="login-form__input-row" type="checkbox" name="" id="remember-me">
        <label class="login-form__label-row login-form__label-row--muted" for="remember-me">Запомнить меня</label>
      </div>

      <button
        :disabled="!isCorrect"
        class="login-form__btn" 
        type="submit" 
        id="login-btn"
      >
        Войти
      </button>
    </form>
  </section>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { checkValidMail, checkValidPassword } from '@/utils/check-valid';
  import LoginInput from '@/components/Login/LoginInput.vue';

  const mailUser = ref('');
  const passwordUser = ref('');

  const validEmail = computed(() => {
    return checkValidMail(mailUser.value);
  })

  const validPassword = computed(() => {
    return checkValidPassword(passwordUser.value)
  })

  const isCorrect = computed(() => {
    return validEmail.value && validPassword.value 
  });
</script>

<style lang="scss" scoped>
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    opacity: 1;
    transition: opacity 0.1s linear;

    &__title {
      margin-bottom: 25px;
      font-size: 28px;
      font-weight: 700;
    }

    &__subtitle {
      text-align: center;
      margin-bottom: 20px;
    }

    &__form {
      display: flex;
      flex-direction: column;
      max-width: 400px;
      width: 100%;
      row-gap: 10px;
    }

    &__label {
      font-size: 16px;
      font-weight: 500;
      color: #000000;
      margin-bottom: 5px;

      &-row {
        font-size: 16px;
      }
    }

    &__input {
      font-size: 16px;
      padding: 10px;
      border: var(--color-light-gray) 2px solid;
      border-radius: 5px;

      &:focus {
        outline: none;
        border: var(--color-light-dark) 2px solid;
      }

      &-row {
        font-size: 16px;
        border: var(--color-light-gray) 2px solid;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 0;
        margin-right: 10px;
      }
    }

    &__btn {
      font-size: 20px;
      color: #ffffff;
      padding: 10px;
      background-color: var(--color-text-important);
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #4eabf1;
      }

      &:disabled {
        background-color: #b6b6b6;
        cursor: not-allowed;
      }
    }

    &__wrap {
      display: flex;

      &--column {
        flex-direction: column;
      }
    }

    &__list {
      display: flex;
      list-style: none;
    }
  }

  input[type="checkbox" i] {
    width: 15px;
  }
</style>