<script></script>

<template>
  <div class="contact-us" id="contact">
    <div class="animation">
      <main class="row-contact">
        <section class="col left">
          <div class="description__contact-text">
            <h2>Как с нами связаться</h2>
            <p>
              У вас возникли вопросы или проблемы о Миртек Трекер? Хотите узнать больше о наших
              функциях? Ищете помощь с настройкой? Оставьте ваше сообщение, мы постараемся ответить
              вам в ближайшее время
            </p>
          </div>
        </section>
        <section class="col right">
          <form class="form__message">
            <div class="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Ваше имя <i class="fa-solid fa-signature"></i></label>
            </div>

            <div class="inputGroup halfWidth">
              <input type="text" name="" required="required" />
              <label>Ваша почта <i class="fa-solid fa-envelope"></i></label>
            </div>

            <div class="inputGroup fullWidth">
              <input type="text" name="" required="required" />
              <label>Тема обращения <i class="fa-solid fa-pen-nib"></i></label>
            </div>

            <div class="inputGroup fullWidth">
              <textarea required="required"></textarea>
              <label>Ваше сообщение <i class="fa-solid fa-pen-nib"></i></label>
            </div>
            <button class="button__send-message">Отправить сообщение</button>
          </form>
        </section>
      </main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.contact-us {
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 8%;
  background: url(../../assets/layered-waves-haikei.svg) no-repeat center center/cover;
}
.contact-us .row-contact {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
}
.row-contact section.col {
  display: flex;
  flex-direction: column;
}
.row-contact section.left {
  flex-basis: 35%;
  min-width: 320px;
  margin-right: 60px;
}
.row-contact section.right {
  flex-basis: 60%;
}
section.left .description__contact-text h2 {
  position: relative;
  font-size: 28px;
  color: #000000;
  display: inline-block;
  margin-bottom: 25px;
}
section.left .description__contact-text h2::before {
  content: '';
  position: absolute;
  width: 50%;
  height: 1px;
  background-color: #000000;
  top: 120%;
  left: 0;
}
section.left .description__contact-text h2::after {
  content: '';
  position: absolute;
  width: 25%;
  height: 3px;
  background-color: dodgerblue;
  top: calc(120% - 1px);
  left: 0;
}
section.left .description__contact-text p {
  font-size: 17px;
  color: #000000;
  letter-spacing: 1px;
  line-height: 1.2;
  padding-bottom: 22px;
  font-weight: 600;
}

.row-contact section.right .form__message {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
}
.row-contact section.right .inputGroup {
  margin: 18px 0px;
  position: relative;
}
.form__message .halfWidth {
  flex-basis: 48%;
}
.form__message .fullWidth {
  flex-basis: 100%;
}
.form__message input,
.form__message textarea {
  font-weight: 500;
  width: 100%;
  font-size: 18px;
  padding: 10px 10px;
  background-color: #cde6f9;
  color: var(--color-text-important);
  border: none;
  outline: none;
  border-radius: 8px;
}
.form__message textarea {
  resize: none;
  height: 220px;
  display: block;
}
textarea::-webkit-scrollbar {
  width: 5px;
}
textarea::-webkit-scrollbar-track {
  background-color: #000000;
  border-radius: 15px;
}
textarea::-webkit-scrollbar-thumb {
  background-color: var(--grey-color-light);
  border-radius: 15px;
}
.inputGroup label {
  font-weight: 500;
  position: absolute;
  left: 0;
  bottom: 9px;
  color: var(--color-text-important);
  font-size: 18px;
  transition: 0.4s;
  pointer-events: none;
  margin: 5px 5px;
}
.inputGroup:nth-child(4) label {
  top: 2px;
}
.inputGroup input:focus ~ label,
.inputGroup textarea:focus ~ label,
.inputGroup input:valid ~ label,
.inputGroup textarea:valid ~ label {
  transform: translateY(-30px);
  font-size: 16px;
}

.button__send-message {
  cursor: pointer;
  position: relative;
  padding: 10px 24px;
  font-size: 15px;
  color: white;
  border-radius: 8px;
  background-color: var(--color-text-important);
  font-weight: 600;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid var(--color-text-important);
  -webkit-transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
  transition:
    background-color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    color 0.2s linear,
    border 0.2s linear,
    color 0.2s linear,
    transform 0.5s;
}
.button__send-message:hover {
  color: var(--color-text-important);
  background-color: var(--bg);
  border: 2px solid var(--color-text-important);
  transform: scale(1.05);
}
</style>
