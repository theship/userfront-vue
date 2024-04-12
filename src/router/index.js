import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import ResetView from '../views/ResetView.vue'
import DashboardView from '../views/DashboardView.vue'
import Userfront from '@userfront/toolkit/web-components'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/reset',
      name: 'reset',
      component: ResetView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
  ]
})


router.beforeEach((to, from, next) => {
  // Check if the user is logged in by looking for an access token
  const isLoggedIn = !!Userfront.tokens.accessToken;

  // If the user attempts to access the "dashboard" route without being logged in, redirect them to "/login"
  if (to.name === 'dashboard' && !isLoggedIn) {
    return next({ path: '/login' });
  }

  // If the user is logged in, or accessing any other route, continue with the navigation
  next();
});


export default router
