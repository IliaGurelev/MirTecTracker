<template>
  <PersonalPage 
    :currentUser="store.currentUser"
  />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { useMainStore } from '@/store.js'
  import PersonalPage from '@/components/Personal/PersonalPage.vue';

  const store = useMainStore();
  
  onMounted(() => {
    store.loginCurrentUser(0);
  });
</script>
