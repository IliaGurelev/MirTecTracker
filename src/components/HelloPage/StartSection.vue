<script setup>
</script>

<template>

<div class="home-page">
    <div class="container">
        <div class="animation">
        <div class="title__content-home-page">
            <h1><span>Организуйте</span> работу и жизнь.</h1>
            <p><span>Миртек Трекер</span> – список дел и таск-менеджер для ваших задач. Он поможет вам обрести концентрацию, организованность и покой.
            </p>
            <RouterLink to="/user" class="button__start-work">Начать работу</RouterLink>
        </div>
        <div class="image__home-page">
            <img class="main-img" src="../../assets/site.png" alt="" >
            <img class="mobile-img-for-ipad" src="../../assets/site5.png" alt="" >
            <img class="mobile-img-for-mobile" src="../../assets/site6.png" alt="" >
        </div>
    </div>	
    </div>
	</div>
</template>

<style lang="scss">
.home-page{
	margin-top: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
	text-align: center;
	height: auto;
}
   .container{
    width: 100%;
}

 .home-page h1{
    font-size: 80px;
}


 .home-page p{
    margin: 20px 0;
    color: #666666;
	font-size: 24px;
	font-weight: 500;
}
 .home-page span{
	color: var(--color-text-important);
}

 .home-page a{
    display: flex;
    align-items: center;
    background: #000;
    width: 200px;
    padding: 8px;
    border-radius: 60px;
}

 .home-page a i{
    background-color: #fff;
    font-size: 24px;
    border-radius: 50%;
    padding: 8px;
}

 .home-page a span{
    color: #fff;
    margin-left: 10px;
}
.image__home-page{
	width: 100%;
	background: url(@/assets/phon.svg) no-repeat center center/cover;
	border-bottom: 1px solid #aaaaaa ;
}
 .home-page img{
	margin-bottom: -4.9px;
    width: 80%;
	border-radius: 8px 8px 0 0 ;
	border: 1px solid #aaaaaa7a;
	height: 70%;
	box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.068)
}

.home-page h2.separator{
    padding: 0 80px;
    font-size: 40px;
    margin-top: 40px;
}
.title__content-home-page{
	margin: auto;
	width: 100%;
	padding: 10px;
}

.button__start-work {
    cursor: pointer;
    position: relative;
    padding: 10px 24px;
    margin: 0 0px;
    font-size: 26px;
    color: white;
    border-radius: 8px;
    background-color: var(--color-text-important);
    font-weight: 600;
    overflow: hidden;
    margin-bottom: 1rem;
    border: 2px solid var(--color-text-important);
    -webkit-transition: background-color 0.2s linear, color 0.2s linear,color 0.2s linear, color 0.2s linear , border 0.2s linear, color 0.2s linear,transform 0.5s;
    transition: background-color 0.2s linear, color 0.2s linear, color 0.2s linear, color 0.2s linear , border 0.2s linear, color 0.2s linear,transform 0.5s;
  }
.button__start-work:hover{
	color:var(--color-text-important);
	background-color: var(--bg);
	border: 2px solid var(--color-text-important);
	transform: scale(1.05);
}
</style>