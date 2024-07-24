import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WatcherView from '@/views/WatcherView.vue'

const routes: Array<RouteRecordRaw> = [
  
  {
    path: '/watch',
    name: 'watch',
    component: WatcherView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
