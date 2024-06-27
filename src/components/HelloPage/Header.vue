<template>
  <header class="header">
    <div class="header__logo"><img src="@/assets/logo.svg" alt="" />Миртек Трекер</div>
    <nav class="navigation-menu">
      <ul class="text-box__navigation-menu__list" :class="{ active: isNavActive }">
        <div class="logo">
          <div class="header__logo"><img src="@/assets/logo.svg" alt="" />Миртек Трекер</div>
          <button class="close" @click="closeNav"><i class="fa-solid fa-xmark"></i></button>
        </div>
        <li class="navigation-menu__item">
          <a href="#top">Главная</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#abouts">О трекере</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#opportunities">Возможности</a>
        </li>
        <li class="navigation-menu__item">
          <a href="#prem">Преимущества</a>
        </li>
        <div class="visible-btn">
          <li class="navigation-menu__item">
            <RouterLink :to="{ name: 'Login' }" class="button__login">Войти</RouterLink>
          </li>
        </div>
        <div class="visible-btn">
          <RouterLink :to="{ name: 'Registration' }" class="button__login button_registration">
            Регистрация
          </RouterLink>
        </div>
      </ul>
    </nav>
    <div class="minimenu" @click="toggleNav">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <RouterLink v-if="userExists" :to="{ name: 'Personal' }">
      <UserInfo
        class="hellopage__user"
        :avatarUser="currentUser.avatarUser"
        :nameUser="currentUser.nameUser"
      />
    </RouterLink>
    <div v-else class="auth-buttons">
      <RouterLink :to="{ name: 'Login' }" class="button__login"> Войти </RouterLink>
      <RouterLink :to="{ name: 'Registration' }" class="button_registration">
        Регистрация
      </RouterLink>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import UserInfo from '@/components/Personal/UserInfo.vue'

const props = defineProps({
  currentUser: {
    type: Object,
    required: true
  }
})

const isNavActive = ref(false)
const elements = ref([])
const userExists = ref(props.currentUser !== null)

const toggleNav = () => {
  isNavActive.value = !isNavActive.value
}

const closeNav = () => {
  isNavActive.value = false
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      }
    })
  })
})
</script>

<style lang="scss">
.header__logo {
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 30px;
  font-weight: 600;
  color: var(--color-text-important);
}
.header img {
  width: 40px;
  object-fit: cover;
}
.header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-block: 25px;
  transition: var(--transition-2);
  z-index: 4;
  justify-content: space-around;
  height: 100px;
}
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f7f7f7de;
  backdrop-filter: blur(50px);
  z-index: -1;
}

.header.active {
  background-color: var(--bg);
  padding-block: 20px;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.header-actions {
  display: none;
}

.navigation-menu {
  margin-top: 3px;
}
.header .logo {
  width: 100px;
}
.navigation-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.navigation-menu li {
  margin: 0 10px;
}

.auth-buttons {
  display: flex;
}

.button__login {
  font-size: 26px;
  font-weight: 600;
  padding: 10px 20px;
  color: black;
  cursor: pointer;
  transition: color 0.3s;
}

.button__login:hover {
  color: var(--color-text-muted);
  text-decoration: none;
}
.navigation-menu__list {
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
}
.button_registrations {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  margin: auto;
  font-size: 26px;
  color: white;
  border-radius: 8px;
  background-color: var(--color-text-important);
  font-weight: 600;
  overflow: hidden;
  border: 2px solid var(--color-text-important);
  -webkit-transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
}
.button_registrations:hover {
  color: var(--color-text-important);
  background-color: var(--bg);
  border: 2px solid var(--color-text-important);
  transform: scale(1.05);
}
.button_registration {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  margin-left: 10px;
  font-size: 26px;
  color: white;
  border-radius: 8px;
  background-color: var(--color-text-important);
  font-weight: 600;
  overflow: hidden;
  border: 2px solid var(--color-text-important);
  -webkit-transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
}
.button_registration:hover {
  color: var(--color-text-important);
  background-color: var(--bg);
  border: 2px solid var(--color-text-important);
  transform: scale(1.05);
}

.navigation-menu.active {
  background-color: hsla(228, 24%, 6%, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  padding-block: 20px;
}
.navigation-menu ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.navigation-menu li {
  margin: 0 10px;
}

.navigation-menu a {
  position: relative;
  text-decoration: none;
  color: black;
  font-size: 22px;
  transition: color 0.3s;
  font-weight: 500;
  margin-top: 10px;
  display: flex;
}
.navigation-menu__item a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0;
  height: 2px;
  background: var(--color-text-important);
  border-radius: 5px;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.5s;
}
.container {
  max-width: 1200px;
}
.navigation-menu__item a:hover {
  transform: color 0.5s;
  color: var(--color-text-important);
}
.navigation-menu__item a:hover:after {
  transform-origin: left;
  width: 100%;
  transform: scaleX(1);
}

.text-box__navigation-menu__list .logo {
  display: none;
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
}
.text-box__navigation-menu__list .visible-btn {
  display: none;
}
.text-box__navigation-menu__list .logo .close {
  background-color: transparent;
  color: var(--color-text-important);
  font-size: 30px;
  border: none;
  display: flex;
}
.minimenu {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  cursor: pointer;
  margin-top: 0.16rem;
  border-radius: 8px;
}
.minimenu .line {
  width: 25px;
  height: 3px;
  border-radius: 5px;
  background-color: var(--color-text-important);
}

.hellopage__user {
  cursor: pointer;
}
</style>
