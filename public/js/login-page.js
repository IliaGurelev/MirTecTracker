const switchBtn = document.getElementById("switch-btn");
const swithcherForm = document.querySelector(".login-page__switcher")
const loginForm = document.getElementById("login-form");
const regForm = document.getElementById("reg-form");

switchBtn.addEventListener("click", () => {
  swithcherForm.classList.toggle("switcher--left")
  
  loginForm.classList.toggle("--transparent")
  regForm.classList.toggle("--transparent")
})