import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/FullDashboard.vue'
import PersonalPage from '@/views/PersonalPage.vue'
import HelloPage from '@/views/HelloPage.vue'
import BriefcasePage from '@/views/BriefcasePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Hellopage',
    component: HelloPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/user',
    name: 'Personal',
    component: PersonalPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/briefcase',
    name: 'Briefcase',
    component: BriefcasePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/registration',
    name: 'Registration',
    component: LoginPage,
    props: { isRegistration: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token')

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else if ((to.path === '/login' || to.path === '/registration') && token) {
    next('/user')
  } else {
    next()
  }
})

export default router
