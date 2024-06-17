import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import FireBase from '@/views/FireBase.vue'
import SocialView from '@/views/SocialView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/firebase',
    name: 'firebase',
    component: FireBase
  },
  {
    path: '/social',
    name: 'social',
    component : SocialView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
