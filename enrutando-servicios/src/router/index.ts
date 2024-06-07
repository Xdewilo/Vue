import PostDetailView from '@/views/PostDetailView.vue'
import PostListView from '@/views/PostListView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: () => { return { name: 'PostList' } }
  },
  {
    path: '/posts',
    name: 'PostList',
    component: PostListView
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
