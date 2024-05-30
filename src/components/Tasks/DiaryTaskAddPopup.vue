<template>
  <section class="popup">
    <form class="popup__form" action="">
      <input class="popup__input" type="text" id="title" placeholder="Название" required />
      <textarea class="popup__textarea" name="" id="description" placeholder="Описание"></textarea>
      <div class="popup__wrapper">
        <input class="popup__input popup__input--pointer" type="time">
        <input class="popup__input popup__input--pointer" type="date">
        <input class="popup__button" type="submit" value="Добавить">
      </div>
    </form>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .popup {

    &__form {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      background-color: var(--color-light-dark);
      padding: 10px;
      border-radius: 11px;
      max-width: 400px;
    }

    &__input, &__textarea {
      border: none;
      border-radius: 5px;
      font-size: 20px;
      background-color: #ffffff;
      box-shadow: 0px 0px 5px  rgba(43, 43, 43, 0.082);
      padding: 10px;

      &:focus {
        outline: none;
      }
    }

    &__input {
      &--pointer {
        cursor: pointer;
      }
    }

    &__textarea {
      resize: none;
    }

    &__button {
      border: none;
      border-radius: 5px;
      font-size: 16px;
      color: #ffffff;
      background-color: var(--color-text-important);
      box-shadow: 0px 0px 10px rgba(43, 43, 43, 0.082);
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: #47a2e7;
      }
    }

    &__wrapper { 
      display: flex;
      justify-content: space-between;
      column-gap: 5px;
    }
  }
</style>