import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView,
    meta:{
      requiresAuth: false
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta:{
      //meta is an object that can be used to store any custom data you want to associate with a route
      requiresAuth: false,
      //this is a custom property that we can use to check if the user is authenticated
      role: 'admin'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//verify if the user is authenticated
router.beforeEach((to, from, next) => {
  const auth = false
  const needAuth = to.meta.requiresAuth

  if(needAuth && !auth){
    next('login')
  }else{
    next()
  }
})

export default router
