<template>
  <div class="user">
    <img 
      v-if="imageExists"
      :src="props.avatarUser" 
      class="user__icon" 
      alt="Аватар пользователя"
      @error="handleImageError"
    />
    <UserIcon 
      v-else
      class="user__icon"
    />
    <p class="user__name">{{ props.nameUser }}</p>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from 'vue';
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

  const imageExists = ref(props.avatarUser !== '');

  const handleImageError = () => { 
    imageExists.value = false;
  }

  watchEffect(() => {
    imageExists.value = props.avatarUser !== '';
  })
</script>

<style lang="scss" scoped>
  .user {
    display: flex;
    align-items: center;

    &__icon {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 15px;
    }

    &__name {
      font-size: 20px;
      font-weight: 600; 
    }
  }
</style>