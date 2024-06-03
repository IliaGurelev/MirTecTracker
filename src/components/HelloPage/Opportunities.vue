<script>

</script>

<template>
<div class="opportunities-page" id="opportunities">
			<div class="container">
				<div class="animation">
				<div class="title__opportunities">
					<h1>Возможности</h1>
				</div>
				<div class="description">
					<div class="description__content">
						<p class="description__slogan">Разгрузите свой ум</p>
						<h1 class="description__title">Самый быстрый способ перенести задачи из головы</h1>
						<p class="description__text">Вы находитесь на встрече и вам дают задачу. Чтобы не держать её в голове просто добавьте задачу в трекер, чтобы не думать об этом во время работы.</p>
					</div>
						<div class="image__descript">
							<img src="../../assets/site2.PNG" alt="">
					</div>
				</div>
			</div>
			<div class="animation">
				<div class="description">
					<div class="description__content">
						<p class="description__slogan">Фокусируйтесь на важном</p>
						<h1 class="description__title">Обретите, наконец, кристальную ясность ума.</h1>
						<p class="description__text">Освободите свое время и энергию! Используйте функцию сортировки по портфелям и сделайте свою работу эффективнее!</p>
					</div>
					<div class="image__descript">
							<img src="../../assets/site4.PNG" alt="">
					</div>
				</div>
				</div>
				<div class="animation">
				<div class="description">
					<div class="description__content">
						<p class="description__slogan">Организуйте командную работу</p>
						<h1 class="description__title">Когда все ваши задачи могут, наконец, сосуществовать.</h1>
						<p class="description__text">Дайте своей команде общее пространство для работы, чтобы оставаться в курсе всех дел – наряду с личными задачами и проектами, но отдельно от них.</p>
					</div>
					<div class="image__descript">
							<img src="../../assets/site3.PNG" alt="">
					</div>
				</div>
			</div>
				</div>
		</div>	

</template>

<style lang="scss">
.opportunities-page{
	margin-top: 3rem;
    display: flex;
	align-items: center;
    justify-content: center;
	text-align: center;
}
.title__opportunities{
	margin: auto;
	height: 100%;
	width: 42%;
	color: black;
	font-size: 25px;
	font-weight: 500;
	margin-bottom: 5rem;
}

.description{
	margin: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 1.5rem;
	margin-bottom: 15rem;
	width: 100%;
}
.description__content{
	margin: auto;
	text-align: left;
}

.description__slogan{
	margin-bottom: 20px;
	font-size: 22px;
	color: var(--color-text-important);
	font-weight: 600;
}

.description__text{
	position: sticky;
	top: 100px;
	margin-top: 20px;
    color: #666666;
	font-size: 24px;
	font-weight: 500;
}

.image__descript{
	background: url(../../assets/phon2.svg) no-repeat center center/cover;
	border: 1px solid var(--border);
	border-radius: 8px;
	margin: auto;
	z-index: 3;
	padding: 18px 20px;
	filter: drop-shadow(10px 10px 10px #0000001c);
}

</style>