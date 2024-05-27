const switchBtn = document.getElementById("switch-btn");
const switchHeaderBtn = document.getElementById("main-header-switch-button");

const swithcherForm = document.querySelector(".login-page__switcher")

const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");

const mainHeaderLogo = document.getElementById("main-header-logo");

const switchForm = () => {
  swithcherForm.classList.toggle("switcher--left");

  loginForm.classList.toggle("--transparent");
  regForm.classList.toggle("--transparent");

  mainHeaderLogo.classList.toggle("main-header__logo--white");
}

switchBtn.addEventListener("click", switchForm);