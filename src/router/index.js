import { createRouter, createWebHistory } from 'vue-router';
import Sidebar from '@/components/Sidebar/Sidebar.vue';
import Dashboard from '@/views/FullDashboard.vue';
import PersonalPage from '@/views/PersonalPage.vue';
import HelloPage from '@/views/HelloPage.vue';

const routes = [
  {
    path: '/',
    name: 'Hellopage',
    component: HelloPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/user',
    name: 'Personal',
    component: PersonalPage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;