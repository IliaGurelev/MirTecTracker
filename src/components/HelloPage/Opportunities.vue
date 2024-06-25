<script></script>

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
            <p class="description__text">
              Вы находитесь на встрече и вам дают задачу. Чтобы не держать её в голове просто
              добавьте задачу в трекер, чтобы не думать об этом во время работы.
            </p>
          </div>
          <div class="image__descript">
            <img src="../../assets/site2.PNG" alt="" />
          </div>
        </div>
      </div>
      <div class="animation">
        <div class="description">
          <div class="description__content">
            <p class="description__slogan">Фокусируйтесь на важном</p>
            <h1 class="description__title">Обретите, наконец, кристальную ясность ума.</h1>
            <p class="description__text">
              Освободите свое время и энергию! Используйте функцию сортировки по портфелям и
              сделайте свою работу эффективнее!
            </p>
          </div>
          <div class="image__descript">
            <img src="../../assets/site4.PNG" alt="" />
          </div>
        </div>
      </div>
      <div class="animation">
        <div class="description">
          <div class="description__content">
            <p class="description__slogan">Организуйте командную работу</p>
            <h1 class="description__title">
              Когда все ваши задачи могут, наконец, сосуществовать.
            </h1>
            <p class="description__text">
              Дайте своей команде общее пространство для работы, чтобы оставаться в курсе всех дел –
              наряду с личными задачами и проектами, но отдельно от них.
            </p>
          </div>
          <div class="image__descript">
            <img src="../../assets/site3.PNG" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.opportunities-page {
  margin-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.title__opportunities {
  margin: auto;
  height: 100%;
  width: 42%;
  color: black;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 5rem;
}

.description {
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1.5rem;
  margin-bottom: 15rem;
  width: 100%;
}
.description__content {
  margin: auto;
  text-align: left;
}

.description__slogan {
  margin-bottom: 20px;
  font-size: 22px;
  color: var(--color-text-important);
  font-weight: 600;
}

.description__text {
  position: sticky;
  top: 100px;
  margin-top: 20px;
  color: #666666;
  font-size: 24px;
  font-weight: 500;
}

.image__descript {
  background: url(../../assets/phon2.svg) no-repeat center center/cover;
  border: 1px solid var(--border);
  border-radius: 8px;
  margin: auto;
  z-index: 3;
  padding: 18px 20px;
  filter: drop-shadow(10px 10px 10px #0000001c);
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
