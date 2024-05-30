<script setup>
  import PersonalPage from './components/Personal/PersonalPage.vue';
  import FullDashboard from './components/Dashboard/FullDashboard.vue';
  import HelloPage from './components/HelloPage/HelloPage.vue';
</script>

<template>
  <!-- <PersonalPage /> -->
  <FullDashboard />
</template>

<script setup>
  import { computed, onMounted } from 'vue';
  import { store } from '@/store.js'
  import PersonalPage from '@/components/Personal/PersonalPage.vue';

  const currentUser = computed(() => {
    return store.currentUser;
  });

  onMounted(() => {
    store.loginCurrentUser(0);
  });
</script>
