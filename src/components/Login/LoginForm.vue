<template>
  <section id="login-form" class="login-page__login-form login-form --center-to-left">
    <h2 class="login-form__title">Войдите в ваш аккаунт</h2>
    <p class="login-form__subtitle login-form__subtitle--muted">Войдите в свою учетную запись, чтобы продолжить создавать и редактировать свои задачи.</p>
    <form class="login-form__form" action="">
      <label class="login-form__label" for="email">Email</label>
      <input class="login-form__input" type="email" id="email" placeholder="Введите вашу почту">

      <label class="login-form__label" for="password">Пароль</label>
      <input class="login-form__input" type="password" id="password" placeholder="Введите ваш пароль">
      
      <div class="login-form__wrap">
        <input class="login-form__input-row" type="checkbox" name="" id="remember-me">
        <label class="login-form__label-row login-form__label-row--muted" for="remember-me">Запомнить меня</label>
      </div>

      <button class="login-form__btn" type="submit" id="login-btn">Войти</button>
    </form>
  </section>
</template>

<script setup>

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

      &:first-child {
        border-radius: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }

      &:last-child {
        border-radius: 0;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
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
    }

    &__wrap {
      display: flex;
      align-items: center;

      &--column {
        align-items: flex-start;
        margin-bottom: 0;
      }
    }

    &__list {
      display: flex;
      list-style: none;
    }
  }

  // .login-form__item:last-child .login-form__input {
  //   border-top-right-radius: 5px;
  //   border-bottom-right-radius: 5px;
  // }

  // .login-form__item:last-child .login-form__input {
  //   border-left: none;
  // }

  // .login-form__item:last-child .login-form__input:focus {
  //   border-left: 2px solid var(--color-text-muted);
  // }
</style>