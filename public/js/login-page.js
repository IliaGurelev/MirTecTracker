const switchBtn = document.getElementById("switch-btn");
const swithcherForm = document.querySelector(".login-page__switcher")
const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");
const mainHeaderLogo = document.getElementById("main-header-logo");

switchBtn.addEventListener("click", () => {
  swithcherForm.classList.toggle("switcher--left")
  
  loginForm.classList.toggle("--transparent")
  regForm.classList.toggle("--transparent")

  mainHeaderLogo.classList.toggle("main-header__logo--white")
})