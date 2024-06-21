<template>
 <section id="reg-form" class="login-form login-page__login-form  --center-to-right ">
    <h2 class="login-form__title">Зарегистрируйте ваш аккаунт</h2>
    <p class="login-form__subtitle login-form__subtitle--muted">Зарегистрируйте свою учетную запись, чтобы продолжить создавать и редактировать свои задачи.</p>
    <form 
      class="login-form__form" 
      action="" 
      @submit.prevent="$emit('registrationForm', userData)"
    >
      <div class="login-form__wrap">
        <ul class="login-form__list">
          <li class="login-form__item">
            <LoginInput 
              v-model="nameUser"
              :idInput="'reg-name'"
              :labelInput="'Имя'"
              :placeholderInput="'Ваше имя'"
              :warningMessage="'Имя должно содержать минимум 2 буквы'"
              :isValid="validName"
            />
          </li>
          <li class="login-form__item">
            <LoginInput 
              v-model="surnameUser"
              :idInput="'reg-surname'"
              :labelInput="'Фамилия'"
              :placeholderInput="'Ваша фамилия'"
              :warningMessage="'Фамилия должна содержать минимум 2 буквы'"
              :isValid="validSurname"
            />
          </li>
        </ul>
      </div>
      <LoginInput 
        v-model="mailUser"
        :idInput="'reg-mail'"
        :labelInput="'Почта'"
        :placeholderInput="'Ваша почта'"
        :typeInput="'email'"
        :warningMessage="'Введите валидный email'"
        :isValid="validEmail"
      />
      <LoginInput 
        v-model="passwordUser"
        :idInput="'reg-password'"
        :labelInput="'Пароль'"
        :placeholderInput="'Ваш Пароль'"
        :typeInput="'password'"
        :warningMessage="'Пароль должен содержать минимум 8 символов'"
        :isValid="validPassword"
      />
      <LoginInput 
        v-model="repeatedPassword"
        :idInput="'reg-repeated-password'"
        :labelInput="'Повторите пароль'"
        :placeholderInput="'Повторите ваш пароль'"
        :typeInput="'password'"
        :warningMessage="'Пароль не совпадает'"
        :isValid="validRepeatedPassword"
      />
      
      <div class="login-form__wrap">
        <input class="login-form__input-row" type="checkbox" name="" id="accept-license" required>
        <label class="login-form__label-row login-form__label-row--muted" for="accept-license">
          Я принимаю <RouterLink to="/" class="login-form__link">правила и условия Миртек Трекер</RouterLink></label>
      </div>

      <div class="login-form__wrap login-form__wrap--column">
        <button 
          :disabled="!isCorrect"
          class="login-form__button" 
          type="submit"
          id="reg-btn"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
  import {ref, computed} from 'vue';
  import { checkValidName, checkValidPassword, checkValidMail } from '@/utils/check-valid';

  import LoginInput from '@/components/Login/LoginInput.vue';

  const nameUser = ref('');
  const surnameUser = ref('');
  const mailUser = ref('');
  const passwordUser = ref('');
  const repeatedPassword = ref('');

  const userData = computed(() => {
    return {
      name: `${nameUser.value} ${surnameUser.value}`,
      avatar: "",
      email: mailUser.value,
      password: passwordUser.value
    }
  })

  const validName = computed(() => {
    return checkValidName(nameUser.value);
  })

  const validSurname = computed(() => {
    return checkValidName(surnameUser.value);
  })

  const validEmail = computed(() => {
    return checkValidMail(mailUser.value);
  })

  const validPassword = computed(() => {
    return checkValidPassword(passwordUser.value)
  })

  const validRepeatedPassword = computed(() => {
    return checkValidPassword(passwordUser.value, repeatedPassword.value)
  })

  const isCorrect = computed(() => {
    return validName.value && validSurname.value && validEmail.value && validPassword.value && validRepeatedPassword.value
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
      row-gap: 10px;
      max-width: 400px;
      width: 100%;
    }

    &__link {
      color: var(--color-text-important);
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
      }

      &-row {
        font-size: 16px;
        margin-bottom: 20px;
        padding: 10px;
        border: var(--color-light-gray) 2px solid;
        border-radius: 5px;
        margin-bottom: 0;
        margin-right: 10px;
      }
    }

    &__button {
      font-size: 20px;
      color: #ffffff;
      padding: 10px;
      background-color: var(--color-text-important);
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:disabled {
        background-color: #b6b6b6;
        cursor: not-allowed;
      }

      &:hover:not(:disabled) {
        background-color: #4eabf1;
      }
    }

    &__wrap {
      display: flex;

      &--column {
        flex-direction: column;
      }

      &--relative {
        position: relative;
      }
    }

    &__list {
      display: flex;
      list-style: none;
    }

    &__item {
      display: flex;
      &:last-child {
        .login-form__input {
          border-radius: 0;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
      }
      
      &:first-child {
        .login-form__input {
          border-radius: 0;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
      }
    }
  }

  input[type="checkbox" i] {
    width: 15px;
  }
</style>