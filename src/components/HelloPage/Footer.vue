<script>

</script>

<template>
<footer class="footer">
			<div class="footer-top">
			  <div class="container">
				<div class="footer-brand-wrapper">
					<div class="footer__logo">
						<img src="../../assets/logo.svg" alt="">
						<a href="./HelloPage.vue">Миртек Трекер</a>
					  </div>	
				  <ul class="footer-list">
					<li>
					  <a href="" class="footer-link">Политика соглашения</a>
					</li>
		
					<li>
					  <a href="#" class="footer-link">Политика конфиденциальности</a>
					</li>
		
					<li>
					  <a href="#contact" class="footer-link">Обратная связь</a>
					</li>
			
				  </ul>
		
				</div>
			  </div>
			</div>	
			<div class="footer-bottom">
			  <div class="container">
				<p class="copyright">
				  &copy; 2024 <a href="#">Миртек Трекер</a>. Все права защищены!
				</p>
			  </div>
			</div>		
		  </footer>
</template>

<style lang="scss" scoped>
.footer__logo {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 10px;
	font-size: 30px;
	font-weight: 600;
	color: var(--color-text-important);
	margin-left: 2rem;
	background: white;
	border-radius: 8px;
	padding: 10px 10px;
	cursor: pointer;
	transition: transform 0.5s;
  }
  .footer__logo a{
	color: var(--color-text-important);
  }
  .footer__logo:hover{
	transform: scale(1.05);
  }
  .footer__logo img{
	width: 40px;
  object-fit: cover;
  }

.footer-top {
	background: url("../img/footer.svg") no-repeat;
	background-size:cover;
	background-position: center;
	background-color: var(--color-text-important);
  }
  
  .footer-brand-wrapper .logo {
	width: max-content;
	margin-inline: auto;
	margin-bottom: 60px;
  }
  
  .footer-list,
  .quicklink-list,
  .social-list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 5px;
  }
  
  .footer-link {
	position: relative;
	color: white;
	font-size: 18px;
	font-weight: 500;
	text-transform: uppercase;
	padding: 5px 15px;	
}
.footer-list a::after{
	content: '';
	position: absolute;
	left: 0;
	bottom: -6px;
	width: 0;
	height: 2px;
	background: rgb(255, 255, 255);
	border-radius: 5px;
	transform-origin: right;
	transform: scaleX(0);
	transition: transform .5s;
}

.footer-list a:hover:after{
	transform-origin: left;
	width: 90%;
	transform: scaleX(1);
	transform: scale(1.05);
}
  
  
  
  .footer-bottom { padding-block: 10px; 
  background-color: var(--color-text-important);
  }
  
  .copyright {
	margin: auto ;
	color: var(--bg);
	font-size: 15px;
	font-weight: 500;
	line-height: 1.7;
	text-align: center;
	margin-bottom: 15px;
  }
  
  .copyright > a {
	display: inline-block;
	color: var(--bg);
  }

</style>