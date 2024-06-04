import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/FullDashboard.vue';
import PersonalPage from '@/views/PersonalPage.vue';
import HelloPage from '@/views/HelloPage.vue';
import BriefcasePage from '@/views/BriefcasePage.vue';

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
  {
    path: '/briefcase',
    name: 'Briefcase',
    component: BriefcasePage
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;