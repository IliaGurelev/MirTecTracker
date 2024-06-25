<template>
	<div class="error-page">
	  <img src="@/assets/error.svg" alt="vector">
	  <div class="wrapper">
		<h1>Страница не найдена!</h1>
		<p class="message">Данной страницы не существует. Мы не знаем, как вы сюда попали... Возможно, вы ввели неправильный адрес или страница была удалена</p>
		<router-link to="/" class="btn button__start-work">Вернуться на главную</router-link>
		<p class="copyRights">&copy; 2024 Миртек Трекер</p>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: 'NotFound'
  }
  </script>

<style lang="scss">

img{
	width: 40%;
}
.error-page{
	margin-top: 50%;
	display: flex;
    align-items: center;
    flex-direction: column;
	text-align: center;
	justify-items: center;
}
.wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    
}
.wrapper h1 {
    font-size: 3rem;
    
}
.wrapper .message {
    font-size: 1.5rem;
    padding: 20px;
    text-align: center;
    width: 60%;
    
}
.btn {
    background: v;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 12px;
    color: rgb(255, 255, 255);
    cursor: pointer;
}
.btn:hover {  background: white;;}
.copyRights {
    margin-top: 20px;
}
@media (min-width:320px) {
	.error-page{
	margin-top: 5rem;
}
	img{
	width: 90%;
	
}
.wrapper h1 {
    font-size: 1.7rem;
}
.wrapper .message {
    font-size: 1.2rem;
	padding: 10px;
	width: 100%;
}
}
@media (min-width:552px) {

	img{
	width: 80%;
	
}
.wrapper h1 {
    font-size: 2.3rem;
    
}
.wrapper .message {
    font-size: 1.3rem;
	padding: 20px;
	width: 60%;
}
}


@media (min-width:768px) {
	img{
	width: 60%;
	
}
.wrapper h1 {
    font-size: 2.5rem;
    
}
}
@media (min-width:992px) {
	img{
	width: 40%;
}
.wrapper h1 {
    font-size: 3rem;
    
}
.wrapper .message {
    font-size: 1.5rem;  
}
}
</style>
