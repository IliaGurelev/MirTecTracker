<template>
  <div class="popup" @click="$emit('clickOverlay')">
    <div class="popup__content">
      <i @click="$emit('closeClick')" class="popup__close fa-solid fa-xmark"></i>
      <p class="popup__text">Вы уверены?</p>
      <div class="popup__wrapper">
        <button @click="$emit('notClick')" class="popup__button">Нет</button>
        <button @click="$emit('yesClick')" class="popup__button popup__button--red">Да</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    column-gap: 50px;
  }

  &__text {
    font-size: 35px;
    font-weight: 500;
    text-align: center;
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
    color: #cfcfcf;
    cursor: pointer;
  }

  &__button {
    padding: 5px 15px;
    width: 90px;
    font-size: 25px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s,
      box-shadow 0.5s;

    &:hover {
      transform: scale(105%);
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
    }

    &--red {
      background-color: rgb(243, 55, 55);
      color: white;
    }
  }
}
</style>
