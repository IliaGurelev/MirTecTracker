<template>
  <form action="" @submit.prevent="editUser">
    <section class="settings">
      <div class="settings__wrap settings__wrap--center">
        <UserInfo 
          :avatarUser="avatarUser"
          :nameUser="''"
          class="settings__user"
        />
        <label for="avatar-user">
          <div class="settings__edit">
            <p class="settings__button-text">Изменить <i class="fa-solid fa-pen-to-square"></i></p>
          </div>
        </label>
      </div>
      <div class="settings__wrap">
        <input v-model="nameUser" class="settings__input" type="text" placeholder="Введите ваше имя" required>
      </div>
      <div class="settings__wrap settings__wrap--between">
        <RouterLink :to="{ name: 'Login' }">
          <BlackButton class="settings__logout">
            <p class="settings__button-text">Выйти   <i class="fa-solid fa-arrow-right-from-bracket"></i></p>
          </BlackButton>
        </RouterLink>
        <BlackButton class="settings__button" type="submit">
          <p class="settings__button-text"><i class="fa-solid fa-check"></i>  Сохранить</p>
        </BlackButton>
      </div>
    </section>
    <input class="settings__avatar-input" type="file" id="avatar-user" @change="changeAvatar($event.target.files[0])" accept="image/png, image/jpeg" />
  </form>
</template>

<script setup>
  import { computed, watchEffect } from 'vue';
  import { useMainStore } from '@/store.js';
  import UserInfo from '@/components/Personal/UserInfo.vue';
  import BlackButton from '@/components/UI/BlackButton.vue';

  const store = useMainStore();

  const props = defineProps({
    currentUser: {
      type: Object,
      required: true,
    }
  });

  const nameUser = defineModel('nameUser');
  const avatarUser = defineModel('avatarUser');

  const userData = computed(() => {
    return {
      id: props.currentUser.id,
      avatar: avatarUser.value,
      nameUser: nameUser.value,
    }
  });

  function changeAvatar (file) {
    avatarUser.value = URL.createObjectURL(file)
  }

  const editUser = () => {
    store.editCurrentUser(userData.value);
  }

  watchEffect(() => {
		nameUser.value = props.currentUser.nameUser;
    avatarUser.value = props.currentUser.avatar;
	});
</script>

<style lang="scss" scoped>
  .settings {
    display: flex;
    flex-direction: column;
    row-gap: 35px;
    max-width: 500px;
    animation: slideInRight 0.5s forwards;

    &__wrap {
      display: flex;
      align-items: flex-end;

      &--reverse {
        flex-direction: row-reverse;
      }

      &--column {
        flex-direction: column;
        row-gap: 12px;
      }

      &--between {
        justify-content: space-between;
      }

      &--center {
        align-items: center;
      }
    }

    &__input {
      font-size: 35px;
      background-color: var(--bg);
      border-bottom: 2px black solid;

      &:focus {
        outline: none;
        border-bottom: 2px var(--color-text-important) solid;
      }
    }

    &__avatar-input {
      display: none
    }

    &__user { 
      align-items: flex-end;
      column-gap: 10px;

      :deep(.user__icon) {
        width: 100px;
        height: 100px;
      }

      :deep(.user__name) {
        font-size: 35px;
        text-decoration: underline;
        cursor: text;
      }
    }

    &__edit {
      background-color: #e9e9e9;
      color: black;
      font-weight: 600;
      border: none;
      border-radius: 30px;
      padding: 15px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #e2e2e2;
      }
    }

    &__logout {
      background-color: rgb(255, 69, 69);

      &:hover {
        background-color: rgb(230, 50, 50);
      }
    }
  }

  @keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
              transform: translateX(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateX(0);
              transform: translateX(0);
    }
  }
</style>