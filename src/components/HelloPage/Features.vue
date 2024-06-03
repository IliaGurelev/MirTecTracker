<script>

</script>

<template>
<div class="features" id="prem">
			<div class="animation">
			<h1><span>Миртек Трекер</span>: не просто трекер, а гарантия спокойствия. Отслеживайте каждый шаг, будьте на шаг впереди.</h1>
			<p class="features__subtitle">Что делает <span>Миртек Трекер</span> особенным:</p>
			<div class="timeline">
				<div class="container-text left-container">
					<i class="fa-solid fa-wand-magic-sparkles"></i>
					<div class="timeline__text-box">
							<h2>Универсальность:</h2>
							<p>Миртек Трекер подходит для всех сфер жизни - работа, учеба, личные дела. Отслеживайте проекты, планы,  встречи,  задания,  идеи - все в одном месте.</p>
					</div>
				</div>
				<div class="container-text right-container">
					<i class="fa-regular fa-object-group"></i>
					<div class="timeline__text-box">
							<h2>Интуитивный интерфейс:</h2>
							<p>Простая и удобная система управления задачами, с которой легко разобраться даже новичкам.</p>
					</div>
				</div>
				<div class="container-text left-container">
					<i class="fa-solid fa-sliders"></i>
					<div class="timeline__text-box">
							<h2>Гибкость и настройка:</h2>
							<p>Создавайте задачи,  группируйте их по категориям,  проектам,  приоритетам,  назначайте сроки.  Миртек Трекер легко адаптируется к вашим индивидуальным потребностям.</p>
					</div>
				</div>
				<div class="container-text right-container">
					<i class="fa-solid fa-wrench"></i>
					<div class="timeline__text-box">
							<h2>Мощные функции:</h2>
							<p>Добавляйте заметки,  вложения,  списки дел,  назначайте ответственных,  отслеживайте прогресс.</p>
					</div>
				</div>
				<div class="container-text left-container">
					<i class="fa-solid fa-globe fa-fw"></i>
					<div class="timeline__text-box">
							<h2>Доступность 24/7:</h2>
							<p>Работайте с задачами в любое время,  в любом месте,  с компьютера,  смартфона или планшета.</p>
					</div>
				</div>
				<div class="container-text right-container">
					<i class="fa-solid fa-user-group"></i>
					<div class="timeline__text-box">
							<h2>Совместная работа:</h2>
							<p>Делитесь задачами с коллегами,  создавайте совместные проекты,  координируйте действия. Трекер позволяет совместную работу над одним проектом.</p>
					</div>
				</div>
			</div>
			</div>
		</div>
</template>

<style lang="scss"> 
.features{
    display: flex;
	align-items: center;
    justify-content: center;
	text-align: center;
}


.features h1{
		margin: auto;
		height: 100%;
		width: 65%;
		color: black;
		font-size: 40px;
		font-weight: 700;
		margin-bottom: 2rem;
}


.features__subtitle{
	margin: auto;
	height: 100%;
	width: 65%;
	color: black;
	font-size: 30px;
	font-weight: 600;
	margin-bottom: 2rem;
}

.features span{
	color:var(--color-text-important);
}
.timeline{
	position: relative;
	max-width: 1200px;
	margin: 100px auto;
}
.container-text{
	padding: 10px 50px;
	position: relative;
	width: 50%;
	animation: movedown	1s linear forwards;
	opacity: 0;
}

.container-text:nth-child(1){
	animation-delay: 0s;
}
.container-text:nth-child(2){
	animation-delay: 1s;
}
.container-text:nth-child(3){
	animation-delay: 2s;
}
.container-text:nth-child(4){
	animation-delay: 4s;
}
.container-text:nth-child(5){
	animation-delay: 4s;
}
.container-text:nth-child(6){
	animation-delay: 5s;
}


@keyframes movedown{
	0%{
		opacity: 0;
		transform: translateY(-30px);
	}
	100%{
		opacity: 1;
		transform: translateY(0px);
	}
}

.timeline__text-box{
	padding: 20px 30px;
	background: var(--color-text-important);
	position: relative;
	border-radius: 8px ;
	font-size: 15px;
	color:white;
}
.timeline__text-box h2{
	font-size: 25px;
}
.timeline__text-box p{
	font-size: 18px;
	font-weight: 600;
}
  
.left-container{
	left: 0;
}
.right-container{
	left: 50%;
}

.container-text i{
	position: absolute;
	width: 40px;
	border-radius: 50px;
	right: -20px;
	top: 32px;
	z-index: 10;
	padding: 10px;
	background: var(--color-text-important);
	font-size: 20px;
	color: white;
}

.right-container i{
	left: -20px;
}
.container-voz{
	width: 1200px;
}
.timeline::after{
content: "";
position: absolute;
width: 6px;
height: 100%;
background: var(--color-text-important);
top: 0;
left: 50%;
margin-left: -3px;
z-index: -1;
animation: moveline 6s linear forwards;
}

@keyframes moveline {
	0%{
		height: 0;
	}
	100%{
		height: 100%;
	}
}
</style>