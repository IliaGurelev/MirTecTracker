<template>
 <section id="reg-form" class="login-form login-page__login-form  --center-to-right --transparent">
    <h2 class="login-form__title">Зарегистрируйте ваш аккаунт</h2>
    <p class="login-form__subtitle login-form__subtitle--muted">Зарегистрируйте свою учетную запись, чтобы продолжить создавать и редактировать свои задачи.</p>
    <form class="login-form__form" action="">
      <div class="login-form__wrap">
        <ul class="login-form__list">
          <li class="login-form__item">
            <div class="login-form__wrap login-form__wrap--column">
              <label class="login-form__label" for="remember-me">Имя</label>
              <input class="login-form__input" type="text" name="" id="remember-me" placeholder="Ваше имя">
            </div>
          </li>
          <li class="login-form__item">
            <div class="login-form__wrap login-form__wrap--column">
              <label class="login-form__label" for="remember-me">Фамилия</label>
              <input class="login-form__input" type="text" name="" id="remember-me" placeholder="Ваша фамилия">
            </div>
          </li>
        </ul>
      </div>

      <label class="login-form__label" for="email">Email</label>
      <input class="login-form__input" type="email" id="email" placeholder="Введите вашу почту">

      <label class="login-form__label" for="password">Пароль</label>
      <input class="login-form__input" type="password" id="password" placeholder="Введите ваш пароль">

      <label class="login-form__label" for="password">Повторите пароль</label>
      <input class="login-form__input" type="password" id="password" placeholder="Введите ваш пароль">
      
      <div class="login-form__wrap">
        <input class="login-form__input-row" type="checkbox" name="" id="accept-license">
        <label class="login-form__label-row login-form__label-row--muted" for="accept-license">
          Я принимаю <a href="">правила и условия Миртек Трекер</a></label>
      </div>

      <button class="login-form__btn" type="submit" id="reg-btn">Зарегистрироваться</button>
    </form>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>