<script></script>

<template>
  <div class="features" id="prem">
    <div class="animation">
      <h1>
        <span>Миртек Трекер</span>: не просто трекер, а гарантия спокойствия. Отслеживайте каждый
        шаг, будьте на шаг впереди.
      </h1>
      <p class="features__subtitle">Что делает <span>Миртек Трекер</span> особенным:</p>
      <div class="timeline">
        <div class="container-text left-container">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <div class="timeline__text-box">
            <h2>Универсальность:</h2>
            <p>
              Миртек Трекер подходит для всех сфер жизни - работа, учеба, личные дела. Отслеживайте
              проекты, планы, встречи, задания, идеи - все в одном месте.
            </p>
          </div>
        </div>
        <div class="container-text right-container">
          <i class="fa-regular fa-object-group"></i>
          <div class="timeline__text-box">
            <h2>Интуитивный интерфейс:</h2>
            <p>
              Простая и удобная система управления задачами, с которой легко разобраться даже
              новичкам.
            </p>
          </div>
        </div>
        <div class="container-text left-container">
          <i class="fa-solid fa-sliders"></i>
          <div class="timeline__text-box">
            <h2>Гибкость и настройка:</h2>
            <p>
              Создавайте задачи, группируйте их по категориям, проектам, приоритетам, назначайте
              сроки. Миртек Трекер легко адаптируется к вашим индивидуальным потребностям.
            </p>
          </div>
        </div>
        <div class="container-text right-container">
          <i class="fa-solid fa-wrench"></i>
          <div class="timeline__text-box">
            <h2>Мощные функции:</h2>
            <p>
              Добавляйте заметки, вложения, списки дел, назначайте ответственных, отслеживайте
              прогресс.
            </p>
          </div>
        </div>
        <div class="container-text left-container">
          <i class="fa-solid fa-globe fa-fw"></i>
          <div class="timeline__text-box">
            <h2>Доступность 24/7:</h2>
            <p>
              Работайте с задачами в любое время, в любом месте, с компьютера, смартфона или
              планшета.
            </p>
          </div>
        </div>
        <div class="container-text right-container">
          <i class="fa-solid fa-user-group"></i>
          <div class="timeline__text-box">
            <h2>Совместная работа:</h2>
            <p>
              Делитесь задачами с коллегами, создавайте совместные проекты, координируйте действия.
              Трекер позволяет совместную работу над одним проектом.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.features {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.features h1 {
  margin: auto;
  height: 100%;
  width: 65%;
  color: black;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 2rem;
}

.features__subtitle {
  margin: auto;
  height: 100%;
  width: 65%;
  color: black;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 2rem;
}

.features span {
  color: var(--color-text-important);
}
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 100px auto;
}
.container-text {
  padding: 10px 50px;
  position: relative;
  width: 50%;
  animation: movedown 1s linear forwards;
  opacity: 0;
}

.container-text:nth-child(1) {
  animation-delay: 0s;
}
.container-text:nth-child(2) {
  animation-delay: 1s;
}
.container-text:nth-child(3) {
  animation-delay: 2s;
}
.container-text:nth-child(4) {
  animation-delay: 4s;
}
.container-text:nth-child(5) {
  animation-delay: 4s;
}
.container-text:nth-child(6) {
  animation-delay: 5s;
}

@keyframes movedown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.timeline__text-box {
  padding: 20px 30px;
  background: var(--color-text-important);
  position: relative;
  border-radius: 8px;
  font-size: 15px;
  color: white;
}
.timeline__text-box h2 {
  font-size: 25px;
}
.timeline__text-box p {
  font-size: 18px;
  font-weight: 600;
}

.left-container {
  left: 0;
}
.right-container {
  left: 50%;
}

.container-text i {
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

.right-container i {
  left: -20px;
}
.container-voz {
  width: 1200px;
}
.timeline::after {
  content: '';
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
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}

@media (min-width: 768px) {
  .footer-brand-wrapper .logo {
    margin: 0;
  }

  .footer-brand-wrapper,
  .quicklink-wrapper,
  .footer-bottom .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .quicklink-list {
    margin-bottom: 0;
  }

  .copyright {
    margin-bottom: 0;
  }

  .footer-bottom-img {
    margin-inline: 0;
  }
}

@media (max-width: 600px) {
  .timeline {
    margin: 50px auto;
  }
  .timeline::after {
    left: 31px;
  }
  .container-text {
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;
    padding: 10px;
  }
  .text-box__timeline {
    font-size: 13px;
  }
  .right-container {
    left: 0;
  }

  .left-container i,
  .right-container i {
    left: 10px;
  }
}
.mobile-img-for-mobile {
  display: none;
}
@media (min-width: 320px) {
  .about-the-program p {
    font-size: 22px;
  }
  .about-the-program h1 {
    font-size: 35px;
  }
  .home-page {
    max-width: 100%;
  }
  .mobile-img-for-ipad {
    display: none;
  }
  .mobile-img-for-mobile {
    display: inline;
  }
  .main-img {
    display: none;
  }
  .home-page__container {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  .title__content-home-page h1 {
    font-size: 35px;
  }
  .title__content-home-page p {
    font-size: 25px;
  }
  .container__about {
    width: 90%;
    margin: 100px auto;
  }
  .title__opportunities {
    width: 100%;
    font-size: 20px;
  }
  .description {
    padding: 20px;
    grid-template-columns: repeat(1, 100%);
    margin-bottom: 5rem;
  }
  .description__text {
    max-width: 100%;
  }
  .image__descript img {
    max-width: 100%;
  }
  .image__descript {
    margin-top: 2rem;
    max-width: 100%;
    background: none;
    border: 0px;
    padding: 0;
  }

  .features h1 {
    font-size: 35px;
    width: 100%;
  }
  .features t {
    font-size: 25px;
  }
  .contact-us {
    background: url(../../assets/phon7.svg) no-repeat center center/cover;
  }
  .container_slogan {
    padding: 20px 20px;
  }
  .container_slogan h1 {
    font-size: 30px;
  }
  .logo__footer {
    max-width: 95%;
    margin: auto;
    margin-bottom: 2rem;
  }
  .footer-list a {
    font-size: 15px;
  }
  .footer-list a::after {
    bottom: 2px;
  }
  .button__start-work {
    font-size: 20px;
  }

  .container__advantages h1 {
    font-size: 35px;
  }
  .description__contact-text {
    max-width: 80%;
  }
  .container_slogan h1 {
    font-size: 20px;
  }
  .button__start-works {
    font-size: 18px;
  }
  .logo__item {
    font-size: 25px;
  }
  .logo__item img {
    width: 30px;
  }
}
@media (min-width: 550px) {
  .image__descript {
    background: url(../../assets/phon2.svg) no-repeat center center/cover;
    border: 1px solid var(--border);
    border-radius: 8px;
    margin: auto;
    z-index: 3;
    padding: 18px 20px;
  }

  .image__descript img {
    border: 1px solid var(--border);
    border-radius: 8px;
  }
  .mobile-img-for-mobile {
    display: none;
  }
  .about-the-program p {
    font-size: 28px;
  }
  .home-page {
    max-width: 100%;
  }
  .mobile-img-for-ipad {
    display: inline;
  }
  .main-img {
    display: none;
  }
  .home-page__container {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  .title__content-home-page h1 {
    font-size: 35px;
  }
  .title__content-home-page p {
    font-size: 25px;
  }
  .container__about {
    width: 90%;
    margin: 100px auto;
  }
  .title__opportunities {
    width: 100%;
  }
  .description {
    padding: 20px;
    grid-template-columns: repeat(1, 100%);
    margin-bottom: 10rem;
  }
  .description__text {
    max-width: 100%;
  }
  .image__descript img {
    max-width: 90%;
  }
  .image__descript {
    margin-top: 2rem;
    max-width: 90%;
    padding: 15px 15px;
  }

  .features h1 {
    font-size: 35px;
  }
  .contact-us {
    background: url(../../assets/phon7.svg) no-repeat center center/cover;
  }
  .container_slogan {
    padding: 20px 20px;
  }
  .container_slogan h1 {
    font-size: 30px;
  }
  .logo__footer {
    max-width: 54%;
    margin: auto;
    margin-bottom: 2rem;
  }
  .footer-list a::after {
    bottom: 2px;
  }
}
@media (min-width: 768px) {
  .mobile-img-for-mobile {
    display: none;
  }
  .container_slogan {
    padding: 70px 50px;
  }
  .slogan h1 {
    font-size: 30px;
  }
  .button__start-works {
    font-size: 25px;
  }
  .logo__footer {
    margin-left: 10px;
    width: 40%;
  }
  .logo__footer a {
    font-size: 18px;
  }
  .footer-list a {
    font-size: 18px;
  }
  .footer-list a::after {
    bottom: 2px;
  }
  .home-page__container {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  .title__content-home-page h1 {
    font-size: 45px;
  }
  .title__content-home-page p {
    font-size: 25px;
  }
  .mobile-img-for-ipad {
    display: inline;
  }
  .main-img {
    display: none;
  }
  .container__about h1 {
    font-size: 45px;
  }
  .container__about p {
    font-size: 25px;
  }
  .container__about {
    width: 75%;
    margin: 150px auto;
  }
  .description {
    padding: 20px;
    grid-template-columns: 50% 50%;
  }
  .image__descript {
    max-width: 90%;
  }
  .image__descript img {
    max-width: 100%;
  }

  .contact-us {
    max-width: 100%;
    max-height: 100%;
    background: url(../../assets/phon6.svg) no-repeat center center/cover;
  }
  .home-page {
    max-width: 100%;
  }
}

@media (min-width: 992px) {
  .home-page img {
    width: 90%;
  }
  .mobile-img-for-ipad {
    display: none;
  }
  .main-img {
    display: inline;
  }
  .home-page__container {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  .opportunities-page .container {
    max-width: 982px;
    padding: 40px;
  }
  .footer-list a::after {
    bottom: 2px;
  }
  .description {
    grid-column-gap: 2rem;
  }
  .slogan h1 {
    font-size: 40px;
  }
  .slogan button {
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
  .home-page__container {
    max-width: 100%;
  }
  .container {
    max-width: 100%;
  }
  .logo__footer {
    width: 12%;
  }
  .container_slogan {
    width: 50%;
  }
  .opportunities-page .container {
    max-width: 70%;
  }
  .container__about {
    width: 50%;
  }
  .features h1 {
    width: 50%;
  }
  .contact-us {
    margin: auto;
  }

  .image__home-page img {
    width: 70%;
  }
  .title__content-home-page {
    width: 40%;
  }
  .title__content-home-page h1 {
    font-size: 80px;
  }
  .title__content-home-page p {
    font-size: 35px;
  }
}

@media (max-width: 1100px) {
  .form__message .halfWidth {
    flex-basis: 100%;
  }
}

@media (min-width: 1189px) {
  .logo__item {
    font-size: 30px;
  }
  .logo__item img {
    width: 40px;
  }
  .logo__footer {
    width: 18%;
  }
  .logo__footer img {
    width: 40px;
  }
  .logo__footer a {
    font-size: 25px;
  }
}
@media (max-width: 900px) {
  .contact-us .row-contact {
    flex-wrap: wrap;
  }
  .row-contact section.left,
  .row-contact section.right {
    flex-basis: 100%;
    margin: 0px;
  }
}
</style>
