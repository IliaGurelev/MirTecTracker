<template>
  <PersonalPage 
    :currentUser="currentUser"
  />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useMainStore } from '@/store.js'
  import PersonalPage from '@/components/Personal/PersonalPage.vue';

  const store = useMainStore();
  
  const {currentUser} = storeToRefs(store)

  onMounted(() => {
    store.loginCurrentUser(0);
  });
</script>
