<template>
  <div class="user">
    <UserIcon 
      v-if="props.avatarUser === '' "
      class="user__icon"
    />
    <img 
      v-else
      :src="props.avatarUser" 
      class="user__icon" 
      alt="Аватар пользователя"
    />
    <p class="user__name">{{ props.nameUser }}</p>
  </div>
</template>

<script setup>
  import UserIcon from '@/assets/UserIcon.vue';

  const props = defineProps({
    avatarUser: {
      type: String,
      required: false,
      default: '',
    },
    nameUser: {
      type: String,
      required: true,
    }
  });
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;
    cursor: pointer;

    &__icon {
      width: 50px;
      border-radius: 50%;
      margin-right: 15px;
    }

    &__name {
      font-size: 20px;
      font-weight: 600; 
    }
  }
</style>