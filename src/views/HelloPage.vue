<script setup>
  import Header from '@/components/HelloPage/Header.vue';
  import StartSection from '@/components/HelloPage/StartSection.vue';
  import Opportunities from '@/components/HelloPage/Opportunities.vue';
  import AboutTheProgram from '@/components/HelloPage/AboutTheProgramm.vue';
  import Features from '@/components/HelloPage/Features.vue';
  import Advetages from '@/components/HelloPage/Advetages.vue';
  import ContactUs from '@/components/HelloPage/ContactUs.vue';
  import Slogan from '@/components/HelloPage/Slogan.vue';
  import Footer from '@/components/HelloPage/Footer.vue';
  import { ref, onMounted } from 'vue'

    const elements = ref(null)
    const observer = ref(null)
    onMounted(() => {
      elements.value = document.querySelectorAll('.animation')
      observer.value = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
          }
        })
      })
      elements.value.forEach(element => observer.value.observe(element))
    })

</script>

<template>
	<link rel="icon" type="image/x-icon" href="../img/logo.svg">
	<Header></Header>
	<StartSection></StartSection>
	<AboutTheProgram></AboutTheProgram>
	<Opportunities></Opportunities>
	<Features></Features>
	<Advetages></Advetages>
	<ContactUs></ContactUs>
	<Slogan></Slogan>
	<Footer></Footer>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}

a{
    text-decoration: none;
    color: #000;
}


body{
    background-color: var(--bg);

}

  li { list-style: none; }

  a { text-decoration: none; }
  
  .animation{
	opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  }
  .animation.show {
	opacity: 1;
	transform: translateY(0);
  }
  
  input {
	font: inherit;
	width: 100%;
	border: none;
  }
  
  select,
  button {
	font: inherit;
	background: none;
	border: none;
	cursor: pointer;
  }
  

  
  body.active { overflow: hidden; }
  button {
	  font: inherit;
	  background: none;
	  border: none;
	  cursor: pointer;
	}

 @media  (min-width: 768px){
	.footer-brand-wrapper .logo { margin: 0; }

  .footer-brand-wrapper,
  .quicklink-wrapper,
  .footer-bottom .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .quicklink-list { margin-bottom: 0; }

  .copyright { margin-bottom: 0; }

  .footer-bottom-img { margin-inline: 0; }
}

@media (max-width:600px){
	.timeline{
		margin: 50px auto;
	}
	.timeline::after{
		left: 31px;
	}
	.container-text{
		width: 100%;
		padding-left: 80px;
		padding-right: 25px;
		padding: 10px;
	}
	.text-box__timeline{
		font-size: 13px;
	}
	.right-container{
		left: 0;
	}

	.left-container i, .right-container i{
		left: 10px;
	}
	
}
.mobile-img-for-mobile{
	display: none;
}
@media (min-width:320px) {
	
	.about-the-program p{
		font-size: 22px;
	}
	.about-the-program h1{
		font-size: 35px;
	}
	.home-page{
		max-width: 100%;
	}
	.mobile-img-for-ipad{
		display: none;
	}
	.mobile-img-for-mobile{
		display: inline;
	}
	.main-img{
		display: none;
	}
	.container{
		max-width: 100%;
	}
	.title__content-home-page h1{
		font-size: 35px;
	}
	.title__content-home-page p{
		font-size: 25px;
	}
	.container__about{
		width: 90%;
		margin: 100px auto;
	}
	.title__opportunities{
		width: 100%;
		font-size: 20px;
	}
	.description{
		padding: 20px;
		grid-template-columns:repeat(1,100%);
		margin-bottom: 5rem;
	}
	.description__text{
		max-width: 100%;
	}
	.image__descript img{
		max-width: 100%;
	}
	.image__descript{
		margin-top: 2rem;
		max-width: 100%;
		background: none;
		border: 0px;
		padding: 0;
	}

	.features h1{
		font-size: 35px;
		width: 100%;
	}
	.features t{
		font-size: 25px;
	}
	.contact-us {
		background: url(../../assets/phon7.svg) no-repeat center center/cover;
	}
	.container_slogan{
		padding: 20px 20px;
	}
	.container_slogan h1{
		font-size: 30px;
		
	}
	.logo__footer{
		max-width: 95%;
		margin: auto;
		margin-bottom: 2rem;
	}
	.footer-list a{
		font-size: 15px;
	}
	.footer-list a::after{
		bottom: 2px;
	}
	.button__start-work{
		font-size: 20px;
	}

	.container__advantages h1{
		font-size: 35px;
	}
	.description__contact-text{
		max-width: 80%;
	}
	.container_slogan h1{
		font-size: 20px;
	}
	.button__start-works{
		font-size: 18px;
	}
	.logo__item{
		font-size: 25px;
	}
	.logo__item img{
		width: 30px;
	}
}
@media (min-width: 550px){
	.image__descript{
		background: url(../../assets/phon2.svg) no-repeat center center/cover;
		border: 1px solid var(--border);
		border-radius: 8px;
		margin: auto;
		z-index: 3;
		padding: 18px 20px;
	}

	
	.image__descript img{
		border: 1px solid var(--border);
		border-radius: 8px;
	}
	.mobile-img-for-mobile{
		display: none;
	}
	.about-the-program p{
		font-size: 28px;
	}
	.home-page{
		max-width: 100%;
	}
	.mobile-img-for-ipad{
		display: inline;
	}
	.main-img{
		display: none;
	}
	.container{
		max-width: 100%;
	}
	.title__content-home-page h1{
		font-size: 35px;
	}
	.title__content-home-page p{
		font-size: 25px;
	}
	.container__about{
		width: 90%;
		margin: 100px auto;
	}
	.title__opportunities{
		width: 100%;
	}
	.description{
		padding: 20px;
		grid-template-columns:repeat(1,100%);
		margin-bottom: 10rem;
	}
	.description__text{
		max-width: 100%;
	}
	.image__descript img{
		max-width: 90%;
	}
	.image__descript{
		margin-top: 2rem;
		max-width: 90%;
		padding: 15px 15px;
	}

	.features h1{
		font-size: 35px;
	}
	.contact-us {
		background: url(../../assets/phon7.svg) no-repeat center center/cover;
	}
	.container_slogan{
		padding: 20px 20px;
	}
	.container_slogan h1{
		font-size: 30px;
		
	}
	.logo__footer{
		max-width: 54%;
		margin: auto;
		margin-bottom: 2rem;
	}
	.footer-list a::after{
		bottom: 2px;
	}
}
@media (min-width: 768px) {
	.mobile-img-for-mobile{
		display: none;
	}
	.container_slogan{
		padding: 70px 50px;
	}
	.slogan h1{
		font-size: 30px;
	}
	.button__start-works {
		font-size: 25px;
	}
	.logo__footer{
		margin-left: 10px;
		width: 40%;
	}
	.logo__footer a{
		font-size: 18px;
	}
	.footer-list a{
		font-size: 18px;
	}
	.footer-list a::after{
		bottom: 2px;
	}
	.container{
		max-width: 100%;
	}
	.title__content-home-page h1{
		font-size: 45px;
	}
	.title__content-home-page p{
		font-size: 25px;
	}
	.mobile-img-for-ipad{
		display: inline;
	}
	.main-img{
		display: none;
	}
	.container__about h1{
		font-size: 45px;
	}
	.container__about p{
		font-size: 25px;
	}
	.container__about{
		width: 75%;
		margin: 150px auto;
	}
	.description{
		padding: 20px;
		grid-template-columns: 50% 50% ;
	}
	.image__descript{
		max-width: 90%;
	}
	.image__descript img{
		max-width: 100%;
	}

	.contact-us {
		max-width: 100%;
		max-height: 100%;
		background: url(../../assets/phon6.svg) no-repeat center center/cover;
	}
	.home-page{
		max-width: 100%;
	}
}


@media (min-width: 992px) {
	.home-page img {
		width: 90%;
	}
	.mobile-img-for-ipad{
		display: none;
	}
	.main-img{
		display: inline;
	}
	.container{
		max-width: 100%;
	}
	.opportunities-page .container{
		max-width: 982px;
		padding: 40px;
	}
	.footer-list a::after{
		bottom: 2px;
	}
	.description{
		grid-column-gap: 2rem;
	}
	.slogan h1{
		font-size: 40px;
	}
	.slogan button{
		font-size: 25px;
	}
	.contact-us {
		background: url(../../assets/layered-waves-haikei.svg) no-repeat center center/cover;
	}
}

  @media (min-width: 1200px) {
	.contact-us {
		background: url(../../assets/layered-waves-haikei.svg) no-repeat center center/cover;
	}
	.container{
		max-width: 100%;
	}
	.logo__footer{
		width: 12%;
	}
	.container_slogan{
		width: 50%;
	}
	.opportunities-page .container{
		max-width: 70%;
	}
	.container__about{
	width: 50%;
  }
  .features h1{
	width: 50%;
  }
  .contact-us {
	margin:  auto;
}

.image__home-page img{
	width: 70%;
}
.title__content-home-page{
	width: 40%;
}
.title__content-home-page h1{
	font-size: 80px;
}
.title__content-home-page p{
	font-size: 35px;
}
}

@media(max-width: 1100px){
	.form__message .halfWidth{
		flex-basis: 100%;
	}
}

@media(min-width: 1189px){
	.header{
		height: 100px;
	}
	.logo__item{
		font-size: 30px;
	}
	.logo__item img{
	width: 40px;
	}
	.logo__footer{
		width: 18%;
	}
	.logo__footer img{
	width: 40px;
	}
	.logo__footer a{
	font-size: 25px;
	}
}
@media(max-width: 900px){
	.contact-us .row-contact{
		flex-wrap: wrap;
	}
	.row-contact section.left, .row-contact section.right{
		flex-basis: 100%;
		margin: 0px;
	}
}
  @media only screen and (max-width: 1188px){
	  .minimenu{
		  display:flex;
	  
	  }
	  .navigation-menu .text-box__navigation-menu__list{
		  position: fixed;
		  right: -100%;
		  top: 0;
		  flex-direction: column;
		  gap: 1rem;
		  align-items: flex-start;
		  background-color: var(--bg);
		  width: 100%;
		  max-width: 400px;
		  height: 100vh;
		  transition: 0.3s;
		  z-index: 4;
		  padding-top: 1rem;
		  border-radius: 8px;
	  }
	  .text-box__navigation-menu__list li{
		  width: 100%;
		  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
		  padding: 0px 25px 20px 20px;
	  }
	  .text-box__navigation-menu__list .home{
		  margin-top: 1rem;
		  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
		  padding-top: 15px;
	  }
	  .text-box__navigation-menu__list .btn{
		  margin: 20px 20px;
	  }
	  .text-box__navigation-menu__list.active{
		  right: 0;
	  }
	  .text-box__navigation-menu__list.active .logo{
		  display: flex;
		  width: inherit;
	  }
	  .text-box__navigation-menu__list.active .visible-btn{
		  display: flex;
		  width: inherit;
	  }
	  .auth-buttons{
		  display: none;
	  }
	  
		.navigation-menu .button__logins{
		  font-size: 26px;
		  font-weight: 600;
		  color: black;
		  cursor: pointer;
		  transition: color 0.3s;
		}
		
		.navigation-menu .button__logins:hover {
			color: var(--color-text-muted);
			text-decoration: none;
		}
  }
 
  
  @media only screen and (max-width: 1188px){
	  .minimenu{
		  display:flex;  
	  }
	  .navigation-menu .text-box__navigation-menu__list{
		  position: fixed;
		  right: -100%;
		  top: 0;
		  flex-direction: column;
		  gap: 1rem;
		  align-items: flex-start;
		  background-color: var(--bg);
		  width: 100%;
		  max-width: 400px;
		  height: 100vh;
		  transition: 0.3s;
		  z-index: 4;
		  padding-top: 1rem;
		  border-radius: 8px;
	  }
	  .text-box__navigation-menu__list li{
		  width: 100%;
		  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
		  padding: 0px 25px 20px 20px;
	  }
	  .text-box__navigation-menu__list .home{
		  margin-top: 1rem;
		  border-top: 1px solid hsla(0, 0%, 100%, 0.1);
		  padding-top: 15px;
	  }
	  .text-box__navigation-menu__list .btn{
		  margin: 20px 20px;
	  }
	  .text-box__navigation-menu__list.active{
		  right: 0;
	  }
	  .text-box__navigation-menu__list.active .logo{
		  display: flex;
		  width: inherit;
	  }
	  .text-box__navigation-menu__list.active .visible-btn{
		  display: flex;
		  width: inherit;
	  }
	  .auth-buttons{
		  display: none;
	  }

		
		.navigation-menu .button_registrations {
		  cursor: pointer;
		position: relative;
		padding: 10px 10px;
		width: 185px;
		font-size: 26px;
		color: rgb(255, 255, 255);
		border: 2px solid rgb(255, 255, 255);
		border-radius: 15px;
		background-color: transparent;
		font-weight: 600;
		transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
		overflow: hidden;
		
		justify-content: left;
		}

	  
		.navigation-menu .button__logins{
		  font-size: 26px;
		  font-weight: 600;
		  color: black;
		  cursor: pointer;
		  transition: color 0.3s;
		}
		
		.navigation-menu .button__logins:hover {
			color: var(--color-text-muted);
			text-decoration: none;
		}
		.header{
			height: 68px;
		}
  }
</style>